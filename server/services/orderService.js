import pool from '../config/db.js';
import { generateOrderRef } from '../utils/orderRef.js';
import { sendOrderConfirmation } from './mailService.js';

// Frais de livraison — calculés côté serveur uniquement
function computeShipping(/* subtotal */) {
  return 0.00; // Livraison incluse pour tous les produits (remorques/engins)
}

export async function createOrder({ form, items, paymentOption }) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // ─── 1. Vérifier et récupérer les produits depuis MySQL ───────────────────
    const productIds = items.map((i) => i.product_id);
    const placeholders = productIds.map(() => '?').join(', ');

    const [dbProducts] = await conn.execute(
      `SELECT product_ref, slug, name, price, image_url, in_stock
       FROM products
       WHERE product_ref IN (${placeholders})`,
      productIds
    );

    // Tous les produits demandés doivent exister
    if (dbProducts.length !== productIds.length) {
      const found = new Set(dbProducts.map((p) => p.product_ref));
      const missing = productIds.filter((id) => !found.has(id));
      const e = new Error(`Produit(s) introuvable(s) : ${missing.join(', ')}`);
      e.status = 400;
      throw e;
    }

    // Vérification du stock
    const outOfStock = dbProducts.filter((p) => !p.in_stock);
    if (outOfStock.length > 0) {
      const e = new Error(`Produit(s) indisponible(s) : ${outOfStock.map((p) => p.name).join(', ')}`);
      e.status = 400;
      throw e;
    }

    const productMap = new Map(dbProducts.map((p) => [p.product_ref, p]));

    // ─── 2. Calcul des montants côté serveur (jamais faire confiance au frontend) ─
    let subtotal = 0;
    const orderItems = items.map(({ product_id, quantity }) => {
      const p = productMap.get(product_id);
      const lineTotal = parseFloat((p.price * quantity).toFixed(2));
      subtotal += lineTotal;
      return {
        product_ref:   p.product_ref,
        product_name:  p.name,
        product_slug:  p.slug,
        product_image: p.image_url,
        unit_price:    p.price,
        quantity,
        line_total:    lineTotal,
      };
    });

    subtotal           = parseFloat(subtotal.toFixed(2));
    const shippingCost = computeShipping(subtotal);
    const total        = parseFloat((subtotal + shippingCost).toFixed(2));
    const amountDueNow = paymentOption === 'deposit'
      ? parseFloat((total * 0.5).toFixed(2))
      : total;

    // ─── 3. Créer le client (dans la transaction — sera rollbacké si erreur) ──
    const [custResult] = await conn.execute(
      'INSERT INTO customers (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)',
      [
        form.vorname.trim(),
        form.nachname.trim(),
        form.email.toLowerCase().trim(),
        form.telefon?.trim() || null,
      ]
    );
    const customerId = custResult.insertId;

    // ─── 4. Générer une référence unique ──────────────────────────────────────
    let orderRef;
    for (let attempt = 0; attempt < 10; attempt++) {
      const candidate = generateOrderRef();
      const [[{ n }]] = await conn.execute(
        'SELECT COUNT(*) AS n FROM orders WHERE ref = ?',
        [candidate]
      );
      if (n === 0) { orderRef = candidate; break; }
    }
    if (!orderRef) {
      const e = new Error('Impossible de générer une référence unique');
      e.status = 500;
      throw e;
    }

    // ─── 5. Créer la commande ─────────────────────────────────────────────────
    const [orderResult] = await conn.execute(
      `INSERT INTO orders (
        ref, customer_id,
        del_first_name, del_last_name, del_email, del_phone,
        del_address, del_postal_code, del_city, del_country,
        subtotal, shipping_cost, total, currency,
        payment_option, amount_due_now, status, customer_note
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'EUR', ?, ?, 'pending', ?)`,
      [
        orderRef, customerId,
        form.vorname.trim(), form.nachname.trim(),
        form.email.toLowerCase().trim(), form.telefon?.trim() || null,
        form.adresse.trim(), form.plz.trim(), form.stadt.trim(),
        form.land || 'Deutschland',
        subtotal, shippingCost, total,
        paymentOption, amountDueNow,
        form.hinweis?.trim() || null,
      ]
    );
    const orderId = orderResult.insertId;

    // ─── 6. Créer les lignes de commande (snapshot produit) ──────────────────
    for (const item of orderItems) {
      await conn.execute(
        `INSERT INTO order_items
           (order_id, product_ref, product_name, product_slug, product_image, unit_price, quantity, line_total)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [orderId, item.product_ref, item.product_name, item.product_slug,
         item.product_image, item.unit_price, item.quantity, item.line_total]
      );
    }

    // ─── 7. Créer l'enregistrement de paiement ───────────────────────────────
    await conn.execute(
      `INSERT INTO payments (order_id, amount, currency, method, status, transaction_ref, payment_type)
       VALUES (?, ?, 'EUR', 'SEPA_TRANSFER', 'pending', ?, ?)`,
      [orderId, amountDueNow, orderRef, paymentOption === 'deposit' ? 'deposit' : 'full']
    );

    // ─── 8. Premier événement d'historique ───────────────────────────────────
    await conn.execute(
      `INSERT INTO order_status_history (order_id, from_status, to_status, reason)
       VALUES (?, NULL, 'pending', 'Commande créée')`,
      [orderId]
    );

    await conn.commit();

    // Fire-and-forget — l'échec d'email ne doit pas annuler la commande
    sendOrderConfirmation({
      orderRef,
      customer: { email: form.email, vorname: form.vorname, nachname: form.nachname },
      items: orderItems,
      total,
      amountDueNow,
      paymentOption,
      bank: {
        beneficiaire: process.env.BANK_BENEFICIAIRE,
        iban:         process.env.BANK_IBAN,
        bic:          process.env.BANK_BIC,
        banque:       process.env.BANK_NAME,
      },
    }).catch(err => console.error('[MAIL] Erreur envoi confirmation:', err));

    return { orderRef, total, amountDueNow, paymentOption };
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}
