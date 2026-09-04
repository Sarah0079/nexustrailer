// Validation côté serveur — ne jamais faire confiance aux données React

function isValidEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) && v.length <= 255;
}

function isValidPhone(v) {
  return typeof v === 'string' && /^[0-9+\-\s()]{6,30}$/.test(v.trim());
}

export function validateCreateOrder(req, res, next) {
  const { form, items, paymentOption } = req.body;
  const errors = [];

  // paymentOption
  if (!['full', 'deposit'].includes(paymentOption)) {
    errors.push('paymentOption invalide (full | deposit)');
  }

  // items
  if (!Array.isArray(items) || items.length === 0) {
    errors.push('La commande doit contenir au moins un article');
  } else {
    for (const item of items) {
      if (!Number.isInteger(item.product_id) || item.product_id < 1) {
        errors.push(`product_id invalide : ${item.product_id}`);
      }
      if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
        errors.push(`Quantité invalide pour le produit ${item.product_id}`);
      }
    }
  }

  // form
  if (!form || typeof form !== 'object') {
    errors.push('Données du formulaire manquantes');
  } else {
    if (!form.vorname?.trim())   errors.push('Vorname requis');
    if (!form.nachname?.trim())  errors.push('Nachname requis');
    if (!isValidEmail(form.email)) errors.push('E-Mail invalide');
    if (!form.adresse?.trim())   errors.push('Adresse requise');
    if (!/^\d{4,10}$/.test(form.plz?.trim() || '')) errors.push('PLZ invalide');
    if (!form.stadt?.trim())     errors.push('Stadt requise');
    if (form.telefon && !isValidPhone(form.telefon)) errors.push('Téléphone invalide');
    if (form.hinweis && form.hinweis.length > 500)   errors.push('Remarque trop longue (max 500 caractères)');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Données invalides', details: errors });
  }
  next();
}

export function validateStatus(req, res, next) {
  const validStatuses = ['pending','payment_pending','payment_confirmed','processing','shipped','delivered','cancelled','refunded'];
  if (!validStatuses.includes(req.body.status)) {
    return res.status(400).json({ error: 'Statut invalide' });
  }
  next();
}

export function validateNotification(req, res, next) {
  const { type, message } = req.body;
  if (!['info', 'success', 'warning'].includes(type)) {
    return res.status(400).json({ error: 'Type de notification invalide' });
  }
  if (!message?.trim() || message.length > 1000) {
    return res.status(400).json({ error: 'Message invalide (1–1000 caractères)' });
  }
  next();
}

export function validatePaymentStatus(req, res, next) {
  const validStatuses = ['confirmed', 'rejected', 'cancelled', 'refunded'];
  if (!validStatuses.includes(req.body.status)) {
    return res.status(400).json({ error: 'Statut de paiement invalide' });
  }
  next();
}
