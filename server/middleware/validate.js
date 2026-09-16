const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HTML_RE  = /<[^>]*>/;

const ALLOWED_COUNTRIES = new Set([
  'Deutschland', 'Frankreich', 'Österreich', 'Schweiz', 'Belgien', 'Niederlande', 'Luxemburg',
]);

function isValidEmail(v) {
  return typeof v === 'string' && EMAIL_RE.test(v.trim()) && v.length <= 255;
}

function isValidPhone(v) {
  return typeof v === 'string' && /^[0-9+\-\s()]{6,30}$/.test(v.trim());
}

export function validateCreateOrder(req, res, next) {
  const { form, items, paymentOption } = req.body;
  const errors = [];

  if (!['full', 'deposit'].includes(paymentOption)) {
    errors.push('paymentOption invalide (full | deposit)');
  }

  if (!Array.isArray(items) || items.length === 0) {
    errors.push('La commande doit contenir au moins un article');
  } else {
    for (const item of items) {
      if (!Number.isInteger(item.product_id) || item.product_id < 1)
        errors.push(`product_id invalide : ${item.product_id}`);
      if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99)
        errors.push(`Quantité invalide pour le produit ${item.product_id}`);
    }
  }

  if (!form || typeof form !== 'object') {
    errors.push('Données du formulaire manquantes');
  } else {
    const vn = form.vorname?.trim() || '';
    const nn = form.nachname?.trim() || '';
    if (!vn)                      errors.push('Vorname requis');
    else if (!NAME_RE.test(vn))   errors.push('Vorname ungültig (nur Buchstaben)');
    if (!nn)                      errors.push('Nachname requis');
    else if (!NAME_RE.test(nn))   errors.push('Nachname ungültig (nur Buchstaben)');

    if (!isValidEmail(form.email))  errors.push('E-Mail invalide');

    const adr = form.adresse?.trim() || '';
    if (!adr)                       errors.push('Adresse requise');
    else if (HTML_RE.test(adr))     errors.push('Adresse enthält ungültige Zeichen');
    else if (adr.length > 80)       errors.push('Adresse zu lang (max. 80)');

    if (!/^\d{4,10}$/.test(form.plz?.trim() || ''))  errors.push('PLZ invalide');

    const st = form.stadt?.trim() || '';
    if (!st)                        errors.push('Stadt requise');
    else if (!NAME_RE.test(st))     errors.push('Stadt ungültig');

    if (form.land && !ALLOWED_COUNTRIES.has(form.land)) errors.push('Land invalide');

    if (form.telefon && !isValidPhone(form.telefon))    errors.push('Téléphone invalide');

    const hint = form.hinweis?.trim() || '';
    if (hint.length > 300)          errors.push('Remarque trop longue (max 300 caractères)');
    if (hint && HTML_RE.test(hint)) errors.push('Remarque enthält HTML');
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
