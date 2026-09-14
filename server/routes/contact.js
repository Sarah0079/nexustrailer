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

function validateContact(req, res, next) {
  const { name, email, subject, message } = req.body;

  if (!name?.trim())    return res.status(400).json({ error: 'Name ist erforderlich.' });
  if (!email?.trim())   return res.status(400).json({ error: 'E-Mail ist erforderlich.' });
  if (!subject?.trim()) return res.status(400).json({ error: 'Betreff ist erforderlich.' });
  if (!message?.trim()) return res.status(400).json({ error: 'Nachricht ist erforderlich.' });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'E-Mail-Adresse ist ungültig.' });
  }

  if (name.trim().length    > 60)   return res.status(400).json({ error: 'Name zu lang (max. 60 Zeichen).' });
  if (email.trim().length   > 254)  return res.status(400).json({ error: 'E-Mail zu lang.' });
  if (subject.trim().length > 100)  return res.status(400).json({ error: 'Betreff zu lang (max. 100 Zeichen).' });
  if (message.trim().length > 1000) return res.status(400).json({ error: 'Nachricht zu lang (max. 1000 Zeichen).' });

  next();
}

router.post('/', contactLimiter, verifyCsrf, validateContact, async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await sendContactEmail({
      name:    name.trim(),
      email:   email.trim(),
      subject: subject.trim(),
      message: message.trim(),
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
