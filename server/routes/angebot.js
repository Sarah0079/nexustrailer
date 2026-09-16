import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { verifyCsrf } from '../middleware/csrf.js';
import { sendAngebotNotification } from '../services/mailService.js';
import pool from '../config/db.js';

const router = Router();

const angebotLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Zu viele Anfragen. Bitte in einer Stunde erneut versuchen.' },
});

const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+\-\s()]{6,30}$/;
const HTML_RE  = /<[^>]*>/;

const ALLOWED_PRODUCT_TYPES = new Set([
  'Wohnwagen / Caravan',
  'Tiny House / Mobilheim',
  'Kipperanhänger',
  'Transportanhänger / Pritsche',
  'Verkaufsanhänger / Food Truck',
  'Kühlanhänger',
  'Baumaschinen / Bagger',
  'Sonstiges',
]);

const ALLOWED_QUANTITIES = new Set([
  '1 Einheit', '2–5 Einheiten', '6–10 Einheiten', '10+ Einheiten',
]);

function validate(req, res, next) {
  const { company, name, email, product_type, message, phone, siret, quantity, budget } = req.body;

  const co = company?.trim();
  if (!co)               return res.status(400).json({ error: 'Firmenname ist erforderlich.' });
  if (co.length > 100)   return res.status(400).json({ error: 'Firmenname zu lang (max. 100).' });
  if (HTML_RE.test(co))  return res.status(400).json({ error: 'Firmenname enthält ungültige Zeichen.' });

  const n = name?.trim();
  if (!n)                return res.status(400).json({ error: 'Ansprechpartner ist erforderlich.' });
  if (!NAME_RE.test(n))  return res.status(400).json({ error: 'Name ungültig — nur Buchstaben erlaubt.' });
  if (n.length > 80)     return res.status(400).json({ error: 'Name zu lang (max. 80).' });

  const e = email?.trim();
  if (!e)                return res.status(400).json({ error: 'E-Mail ist erforderlich.' });
  if (!EMAIL_RE.test(e)) return res.status(400).json({ error: 'E-Mail-Adresse ist ungültig.' });
  if (e.length > 100)    return res.status(400).json({ error: 'E-Mail zu lang.' });

  if (phone?.trim() && !PHONE_RE.test(phone.trim())) {
    return res.status(400).json({ error: 'Telefonnummer ungültig.' });
  }
  if (siret?.trim() && siret.trim().length > 30) {
    return res.status(400).json({ error: 'USt-IdNr. zu lang.' });
  }

  const pt = product_type?.trim();
  if (!pt || !ALLOWED_PRODUCT_TYPES.has(pt)) {
    return res.status(400).json({ error: 'Ungültige Produktkategorie.' });
  }

  if (quantity?.trim() && !ALLOWED_QUANTITIES.has(quantity.trim())) {
    return res.status(400).json({ error: 'Ungültige Mengenangabe.' });
  }

  if (budget?.trim() && budget.trim().length > 50) {
    return res.status(400).json({ error: 'Budget zu lang.' });
  }

  const msg = message?.trim();
  if (!msg)              return res.status(400).json({ error: 'Nachricht ist erforderlich.' });
  if (msg.length < 10)   return res.status(400).json({ error: 'Nachricht zu kurz (min. 10 Zeichen).' });
  if (msg.length > 1500) return res.status(400).json({ error: 'Nachricht zu lang (max. 1500 Zeichen).' });
  if (HTML_RE.test(msg)) return res.status(400).json({ error: 'HTML-Tags sind in der Nachricht nicht erlaubt.' });

  next();
}

router.post('/', angebotLimiter, verifyCsrf, validate, async (req, res) => {
  const { company, name, email, phone, siret, product_type, quantity, budget, message } = req.body;
  const ip = req.ip || req.socket?.remoteAddress || null;

  try {
    const [result] = await pool.execute(
      `INSERT INTO quote_requests (company, name, email, phone, siret, product_type, quantity, budget, message, ip_address)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        company.trim(), name.trim(), email.trim(),
        phone?.trim() || null, siret?.trim() || null,
        product_type.trim(), quantity?.trim() || null,
        budget?.trim() || null, message.trim(), ip,
      ]
    );

    sendAngebotNotification({
      id: result.insertId, company: company.trim(), name: name.trim(),
      email: email.trim(), phone: phone?.trim(), siret: siret?.trim(),
      product_type: product_type.trim(), quantity: quantity?.trim(),
      budget: budget?.trim(), message: message.trim(),
    }).catch(err => console.error('[angebot] E-Mail-Fehler:', err.message));

    res.json({ ok: true });
  } catch (err) {
    console.error('[angebot] DB-Fehler:', err.message);
    res.status(500).json({ error: 'Anfrage konnte nicht gespeichert werden.' });
  }
});

export default router;
