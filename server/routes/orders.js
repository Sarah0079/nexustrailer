import { Router } from 'express';
import { createOrder } from '../services/orderService.js';
import { validateCreateOrder } from '../middleware/validate.js';
import { orderLimiter } from '../middleware/rateLimiter.js';
import { ORDER_REF_REGEX } from '../utils/orderRef.js';
import pool from '../config/db.js';

const router = Router();

// ─── POST /api/orders — création de commande ─────────────────────────────────
router.post('/', orderLimiter, validateCreateOrder, async (req, res) => {
  try {
    const { form, items, paymentOption } = req.body;
    const result = await createOrder({ form, items, paymentOption });

    res.status(201).json({
      orderRef:     result.orderRef,
      total:        result.total,
      amountDueNow: result.amountDueNow,
      paymentOption: result.paymentOption,
      bank: {
        beneficiaire: process.env.BANK_BENEFICIAIRE,
        iban:         process.env.BANK_IBAN,
        bic:          process.env.BANK_BIC,
        banque:       process.env.BANK_NAME,
      },
    });
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error('Create order error:', err);
    res.status(status).json({ error: err.message });
  }
});

// ─── GET /api/orders/:ref — suivi public ─────────────────────────────────────
// Retourne uniquement les infos nécessaires au client — JAMAIS de données personnelles
router.get('/:ref', async (req, res) => {
  const { ref } = req.params;

  if (!ORDER_REF_REGEX.test(ref)) {
    return res.status(404).json({ error: 'Commande introuvable' });
  }

  try {
    const [[order]] = await pool.execute(
      'SELECT id, ref, status, created_at, updated_at FROM orders WHERE ref = ?',
      [ref]
    );

    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    const [notifications] = await pool.execute(
      `SELECT type, message, created_at
       FROM order_notifications
       WHERE order_id = ? ORDER BY created_at ASC`,
      [order.id]
    );

    const [history] = await pool.execute(
      `SELECT to_status, created_at
       FROM order_status_history
       WHERE order_id = ? ORDER BY created_at ASC`,
      [order.id]
    );

    res.json({
      ref:          order.ref,
      status:       order.status,
      createdAt:    order.created_at,
      updatedAt:    order.updated_at,
      notifications,
      history,
    });
  } catch (err) {
    console.error('Tracking error:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
