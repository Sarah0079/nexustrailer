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

function validate(req, res, next) {
  const { company, name, email, product_type, message } = req.body;

  if (!company?.trim())      return res.status(400).json({ error: 'Firmenname ist erforderlich.' });
  if (!name?.trim())         return res.status(400).json({ error: 'Ansprechpartner ist erforderlich.' });
  if (!email?.trim())        return res.status(400).json({ error: 'E-Mail ist erforderlich.' });
  if (!product_type?.trim()) return res.status(400).json({ error: 'Produktkategorie ist erforderlich.' });
  if (!message?.trim())      return res.status(400).json({ error: 'Nachricht ist erforderlich.' });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'E-Mail-Adresse ist ungültig.' });
  }

  if (company.trim().length      > 100)  return res.status(400).json({ error: 'Firmenname zu lang.' });
  if (name.trim().length         > 80)   return res.status(400).json({ error: 'Name zu lang.' });
  if (email.trim().length        > 100)  return res.status(400).json({ error: 'E-Mail zu lang.' });
  if (product_type.trim().length > 100)  return res.status(400).json({ error: 'Produktkategorie zu lang.' });
  if (message.trim().length      > 1500) return res.status(400).json({ error: 'Nachricht zu lang (max. 1500 Zeichen).' });

  const { phone, siret, quantity, budget } = req.body;
  if (phone    && phone.trim().length    > 30) return res.status(400).json({ error: 'Telefon zu lang.' });
  if (siret    && siret.trim().length    > 30) return res.status(400).json({ error: 'USt-IdNr. zu lang.' });
  if (quantity && quantity.trim().length > 50) return res.status(400).json({ error: 'Menge zu lang.' });
  if (budget   && budget.trim().length   > 50) return res.status(400).json({ error: 'Budget zu lang.' });

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
