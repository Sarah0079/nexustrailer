import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import pool from '../../config/db.js';

const router = Router();
router.use(requireAuth);

router.get('/', async (req, res) => {
  try {
    const [customers] = await pool.execute(
      `SELECT c.id, c.first_name, c.last_name, c.email, c.phone, c.created_at,
              COUNT(o.id)    AS order_count,
              COALESCE(SUM(o.total), 0) AS total_spent
       FROM customers c
       LEFT JOIN orders o ON o.customer_id = c.id
       GROUP BY c.id
       ORDER BY c.created_at DESC`
    );
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

router.get('/:id', async (req, res) => {
  const customerId = parseInt(req.params.id);
  if (!Number.isInteger(customerId) || customerId < 1) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  try {
    const [[customer]] = await pool.execute(
      'SELECT id, first_name, last_name, email, phone, created_at FROM customers WHERE id = ?',
      [customerId]
    );
    if (!customer) return res.status(404).json({ error: 'Client introuvable' });

    const [orders] = await pool.execute(
      'SELECT id, ref, status, total, created_at FROM orders WHERE customer_id = ? ORDER BY created_at DESC',
      [customerId]
    );

    res.json({ ...customer, orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
