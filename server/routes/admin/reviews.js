import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import pool from '../../config/db.js';

const router = Router();
router.use(requireAuth);

const VALID_STATUSES = ['pending', 'approved', 'rejected'];

// GET /api/admin/reviews
router.get('/', async (req, res) => {
  const page   = Math.max(1, parseInt(req.query.page) || 1);
  const limit  = Math.min(100, Math.max(1, parseInt(req.query.limit) || 25));
  const offset = (page - 1) * limit;
  const status = VALID_STATUSES.includes(req.query.status) ? req.query.status : null;

  const where  = status ? 'WHERE status = ?' : '';
  const params = status ? [status] : [];

  try {
    const [rows] = await pool.execute(
      `SELECT id, product_slug, product_name, author_name, author_email, rating, comment, status, created_at
       FROM reviews ${where}
       ORDER BY created_at DESC
       LIMIT ${limit} OFFSET ${offset}`,
      params
    );
    const [[{ total }]] = await pool.execute(
      `SELECT COUNT(*) AS total FROM reviews ${where}`,
      params
    );
    res.json({ reviews: rows, total: Number(total) });
  } catch (err) {
    console.error('[admin/reviews] GET:', err.message);
    res.status(500).json({ error: 'Fehler beim Laden.' });
  }
});

// PATCH /api/admin/reviews/:id/status
router.patch('/:id/status', async (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body ?? {};

  if (!id || id < 1)                    return res.status(400).json({ error: 'Ungültige ID.' });
  if (!VALID_STATUSES.includes(status)) return res.status(400).json({ error: 'Ungültiger Status.' });

  try {
    const [result] = await pool.execute(
      'UPDATE reviews SET status = ? WHERE id = ?',
      [status, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bewertung nicht gefunden.' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[admin/reviews] PATCH:', err.message);
    res.status(500).json({ error: 'Fehler beim Aktualisieren.' });
  }
});

// DELETE /api/admin/reviews/:id
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id < 1) return res.status(400).json({ error: 'Ungültige ID.' });

  try {
    const [result] = await pool.execute('DELETE FROM reviews WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bewertung nicht gefunden.' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[admin/reviews] DELETE:', err.message);
    res.status(500).json({ error: 'Fehler beim Löschen.' });
  }
});

export default router;
