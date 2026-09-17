import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from '../services/mailService.js';
import { verifyCsrf } from '../middleware/csrf.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Zu viele Nachrichten gesendet. Bitte in einer Stunde erneut versuchen.' },
});

const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,80}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+\-\s()]{6,30}$/;
const HTML_RE  = /<[^>]*>/;

const ALLOWED_SUBJECTS = new Set([
  'Allgemeine Anfrage',
  'Angebot anfordern',
  'Lieferinformation',
  'Nach dem Kauf',
]);

function validateContact(req, res, next) {
  const { name, email, subject, message, phone } = req.body;

  const n = name?.trim();
  if (!n)               return res.status(400).json({ error: 'Name ist erforderlich.' });
  if (n.length < 2)     return res.status(400).json({ error: 'Name zu kurz (min. 2 Zeichen).' });
  if (!NAME_RE.test(n)) return res.status(400).json({ error: 'Name ungültig — nur Buchstaben erlaubt.' });

  const e = email?.trim();
  if (!e)                return res.status(400).json({ error: 'E-Mail ist erforderlich.' });
  if (!EMAIL_RE.test(e)) return res.status(400).json({ error: 'E-Mail-Adresse ist ungültig.' });
  if (e.length > 254)    return res.status(400).json({ error: 'E-Mail zu lang.' });

  if (phone?.trim() && !PHONE_RE.test(phone.trim())) {
    return res.status(400).json({ error: 'Telefonnummer ungültig.' });
  }

  const s = subject?.trim();
  if (!s || !ALLOWED_SUBJECTS.has(s)) {
    return res.status(400).json({ error: 'Ungültiger Betreff.' });
  }

  const m = message?.trim();
  if (!m)              return res.status(400).json({ error: 'Nachricht ist erforderlich.' });
  if (m.length < 10)   return res.status(400).json({ error: 'Nachricht zu kurz (min. 10 Zeichen).' });
  if (m.length > 1000) return res.status(400).json({ error: 'Nachricht zu lang (max. 1000 Zeichen).' });
  if (HTML_RE.test(m)) return res.status(400).json({ error: 'HTML-Tags sind nicht erlaubt.' });

  next();
}

router.post('/', contactLimiter, verifyCsrf, validateContact, async (req, res) => {
  const { name, email, subject, message, phone } = req.body;
  try {
    await sendContactEmail({
      name:    name.trim(),
      email:   email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      phone:   phone?.trim() || undefined,
    });
    res.json({ ok: true });
  } catch (err) {
    if (err.message === 'EMAIL_NOT_CONFIGURED') {
      console.warn('[contact] SMTP nicht konfiguriert — Nachricht nicht gesendet');
      return res.status(503).json({ error: 'E-Mail-Dienst ist nicht konfiguriert.' });
    }
    console.error('[contact] Fehler beim Senden:', err.code || err.message);
    res.status(500).json({ error: 'Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.' });
  }
});

export default router;
