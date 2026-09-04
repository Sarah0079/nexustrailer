import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import { verifyCsrf } from '../../middleware/csrf.js';
import { validatePaymentStatus } from '../../middleware/validate.js';
import { updatePaymentStatus } from '../../services/paymentService.js';
import pool from '../../config/db.js';

const router = Router();
router.use(requireAuth);

// ─── GET /api/admin/orders/:ref/payments ──────────────────────────────────────
// Monté sous /api/admin/orders — le ref arrive en paramètre depuis le routeur parent
router.get('/orders/:ref/payments', async (req, res) => {
  try {
    const [[order]] = await pool.execute(
      'SELECT id FROM orders WHERE ref = ?',
      [req.params.ref]
    );
    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    const [payments] = await pool.execute(
      `SELECT p.*, u.username AS confirmed_by_username
       FROM payments p
       LEFT JOIN users u ON u.id = p.confirmed_by
       WHERE p.order_id = ? ORDER BY p.created_at ASC`,
      [order.id]
    );

    res.json(payments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ─── PUT /api/admin/payments/:id/status ──────────────────────────────────────
router.put('/:id/status', verifyCsrf, validatePaymentStatus, async (req, res) => {
  const paymentId = parseInt(req.params.id);
  if (!Number.isInteger(paymentId) || paymentId < 1) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  try {
    await updatePaymentStatus(paymentId, req.body.status, Number(req.user.sub), req.body.notes);
    res.json({ ok: true, status: req.body.status });
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error(err);
    res.status(status).json({ error: err.message });
  }
});

export default router;
