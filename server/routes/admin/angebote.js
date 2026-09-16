import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import pool from '../../config/db.js';

const router = Router();
router.use(requireAuth);

const VALID_STATUSES = ['new', 'read', 'replied', 'closed'];

router.get('/', async (req, res) => {
  const page   = Math.max(1, parseInt(req.query.page) || 1);
  const limit  = Math.min(100, Math.max(1, parseInt(req.query.limit) || 25));
  const offset = (page - 1) * limit;
  const status = req.query.status;

  const whereClause = status && VALID_STATUSES.includes(status) ? 'WHERE status = ?' : '';
  const params      = status && VALID_STATUSES.includes(status) ? [status] : [];

  try {
    const [rows] = await pool.execute(
      `SELECT id, company, name, email, phone, product_type, quantity, budget, status, created_at
       FROM quote_requests ${whereClause}
       ORDER BY created_at DESC
       LIMIT ${limit} OFFSET ${offset}`,
      params
    );
    const [[{ total }]] = await pool.execute(
      `SELECT COUNT(*) AS total FROM quote_requests ${whereClause}`,
      params
    );
    res.json({ angebote: rows, total });
  } catch (err) {
    console.error('[admin/angebote] GET:', err.message);
    res.status(500).json({ error: 'Fehler beim Laden.' });
  }
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'Ungültige ID.' });

  try {
    const [[row]] = await pool.execute('SELECT * FROM quote_requests WHERE id = ?', [id]);
    if (!row) return res.status(404).json({ error: 'Nicht gefunden.' });

    if (row.status === 'new') {
      await pool.execute("UPDATE quote_requests SET status = 'read' WHERE id = ?", [id]);
      row.status = 'read';
    }

    res.json(row);
  } catch (err) {
    console.error('[admin/angebote] GET/:id:', err.message);
    res.status(500).json({ error: 'Fehler.' });
  }
});

router.patch('/:id/status', async (req, res) => {
  const id     = parseInt(req.params.id);
  const { status } = req.body ?? {};

  if (!id) return res.status(400).json({ error: 'Ungültige ID.' });
  if (!VALID_STATUSES.includes(status)) return res.status(400).json({ error: 'Ungültiger Status.' });

  try {
    const [result] = await pool.execute(
      'UPDATE quote_requests SET status = ? WHERE id = ?',
      [status, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Nicht gefunden.' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[admin/angebote] PATCH:', err.message);
    res.status(500).json({ error: 'Fehler beim Aktualisieren.' });
  }
});

export default router;
