import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { verifyCsrf } from '../middleware/csrf.js';
import pool from '../config/db.js';

const router = Router();

const reviewLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Zu viele Bewertungen — bitte morgen erneut versuchen.' },
});

const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,150}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HTML_RE  = /<[^>]*>/;
const SLUG_RE  = /^[a-z0-9\-]{3,255}$/;

function validateReview(req, res, next) {
  const { product_slug, author_name, author_email, rating, comment } = req.body;

  const slug = product_slug?.trim();
  if (!slug || !SLUG_RE.test(slug)) {
    return res.status(400).json({ error: 'Ungültiges Produkt.' });
  }

  const name = author_name?.trim();
  if (!name)                    return res.status(400).json({ error: 'Name ist erforderlich.' });
  if (name.length < 2)          return res.status(400).json({ error: 'Name zu kurz (min. 2 Zeichen).' });
  if (name.length > 150)        return res.status(400).json({ error: 'Name zu lang (max. 150 Zeichen).' });
  if (!NAME_RE.test(name))      return res.status(400).json({ error: 'Name ungültig — nur Buchstaben erlaubt.' });

  const email = author_email?.trim();
  if (!email)                   return res.status(400).json({ error: 'E-Mail ist erforderlich.' });
  if (!EMAIL_RE.test(email))    return res.status(400).json({ error: 'E-Mail-Adresse ist ungültig.' });
  if (email.length > 254)       return res.status(400).json({ error: 'E-Mail zu lang.' });

  const r = parseInt(rating, 10);
  if (!Number.isInteger(r) || r < 1 || r > 5) {
    return res.status(400).json({ error: 'Bewertung muss zwischen 1 und 5 Sternen liegen.' });
  }

  const c = comment?.trim();
  if (!c)             return res.status(400).json({ error: 'Kommentar ist erforderlich.' });
  if (c.length < 10)  return res.status(400).json({ error: 'Kommentar zu kurz (min. 10 Zeichen).' });
  if (c.length > 2000) return res.status(400).json({ error: 'Kommentar zu lang (max. 2000 Zeichen).' });
  if (HTML_RE.test(c)) return res.status(400).json({ error: 'HTML-Tags sind nicht erlaubt.' });

  next();
}

// GET /api/reviews?slug=xxx — avis approuvés (public)
router.get('/', async (req, res) => {
  const slug = req.query.slug?.trim();
  if (!slug || !SLUG_RE.test(slug)) {
    return res.status(400).json({ error: 'Slug manquant ou invalide.' });
  }

  try {
    const [rows] = await pool.execute(
      `SELECT id, author_name, author_email, rating, comment, created_at
       FROM reviews
       WHERE product_slug = ? AND status = 'approved'
       ORDER BY created_at DESC`,
      [slug]
    );
    const [[{ avg_rating, total }]] = await pool.execute(
      `SELECT ROUND(AVG(rating), 1) AS avg_rating, COUNT(*) AS total
       FROM reviews WHERE product_slug = ? AND status = 'approved'`,
      [slug]
    );
    res.json({ reviews: rows, avg_rating: avg_rating ?? null, total: Number(total) });
  } catch (err) {
    console.error('[reviews] GET:', err.message);
    res.status(500).json({ error: 'Fehler beim Laden der Bewertungen.' });
  }
});

// POST /api/reviews — soumettre un avis
router.post('/', reviewLimiter, verifyCsrf, validateReview, async (req, res) => {
  const { product_slug, product_name, author_name, author_email, rating, comment } = req.body;
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    || req.socket?.remoteAddress
    || null;

  try {
    await pool.execute(
      `INSERT INTO reviews (product_slug, product_name, author_name, author_email, rating, comment, ip_address)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        product_slug.trim(),
        (product_name || '').trim().slice(0, 255) || 'Produkt',
        author_name.trim(),
        author_email.trim().toLowerCase(),
        parseInt(rating, 10),
        comment.trim(),
        ip,
      ]
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('[reviews] POST:', err.message);
    res.status(500).json({ error: 'Bewertung konnte nicht gespeichert werden.' });
  }
});

export default router;
