import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.js';
import { verifyCsrf } from '../../middleware/csrf.js';
import { validateStatus, validateNotification } from '../../middleware/validate.js';
import { canTransition, allowedNext } from '../../utils/statusMachine.js';
import { ORDER_REF_REGEX } from '../../utils/orderRef.js';
import { sendStatusEmail } from '../../services/mailService.js';
import pool from '../../config/db.js';

const router = Router();
router.use(requireAuth);

// ─── GET /api/admin/orders ────────────────────────────────────────────────────
router.get('/', async (req, res) => {
  const page   = Math.max(1, parseInt(req.query.page) || 1);
  const limit  = Math.min(100, Math.max(1, parseInt(req.query.limit) || 25));
  const offset = (page - 1) * limit;
  const status = req.query.status;

  const validStatuses = ['pending','payment_pending','payment_confirmed','processing','shipped','delivered','cancelled','refunded'];
  const whereClause   = status && validStatuses.includes(status) ? 'WHERE o.status = ?' : '';
  const params        = status && validStatuses.includes(status) ? [status] : [];

  try {
    const [orders] = await pool.execute(
      `SELECT o.id, o.ref, o.status, o.total, o.amount_due_now, o.payment_option,
              o.created_at, o.updated_at,
              c.first_name, c.last_name, c.email
       FROM orders o
       JOIN customers c ON c.id = o.customer_id
       ${whereClause}
       ORDER BY o.created_at DESC
       LIMIT ${limit} OFFSET ${offset}`,
      params
    );

    const [[{ total: totalCount }]] = await pool.execute(
      `SELECT COUNT(*) AS total FROM orders o ${whereClause}`,
      params
    );

    res.json({ orders, total: totalCount, page, limit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ─── GET /api/admin/orders/:ref ───────────────────────────────────────────────
router.get('/:ref', async (req, res) => {
  if (!ORDER_REF_REGEX.test(req.params.ref)) {
    return res.status(404).json({ error: 'Référence invalide' });
  }

  try {
    const [[order]] = await pool.execute(
      `SELECT o.*, c.first_name, c.last_name, c.email, c.phone
       FROM orders o JOIN customers c ON c.id = o.customer_id
       WHERE o.ref = ?`,
      [req.params.ref]
    );

    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    const [items]  = await pool.execute(
      'SELECT * FROM order_items WHERE order_id = ?',
      [order.id]
    );
    const [payments] = await pool.execute(
      'SELECT * FROM payments WHERE order_id = ? ORDER BY created_at ASC',
      [order.id]
    );
    const [history] = await pool.execute(
      `SELECT h.from_status, h.to_status, h.reason, h.created_at, u.username
       FROM order_status_history h
       LEFT JOIN users u ON u.id = h.changed_by
       WHERE h.order_id = ? ORDER BY h.created_at ASC`,
      [order.id]
    );
    const [notifications] = await pool.execute(
      `SELECT n.id, n.type, n.message, n.created_at, u.username AS sent_by_username
       FROM order_notifications n
       LEFT JOIN users u ON u.id = n.sent_by
       WHERE n.order_id = ? ORDER BY n.created_at ASC`,
      [order.id]
    );

    res.json({
      ...order,
      items,
      payments,
      history,
      notifications,
      allowedTransitions: allowedNext(order.status),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ─── PUT /api/admin/orders/:ref/status ────────────────────────────────────────
router.put('/:ref/status', verifyCsrf, validateStatus, async (req, res) => {
  const { status: newStatus, reason } = req.body;

  try {
    const [[order]] = await pool.execute(
      'SELECT id, status FROM orders WHERE ref = ?',
      [req.params.ref]
    );

    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    if (!canTransition(order.status, newStatus)) {
      return res.status(400).json({
        error: `Transition interdite : ${order.status} → ${newStatus}`,
        allowed: allowedNext(order.status),
      });
    }

    await pool.execute(
      'UPDATE orders SET status = ?, updated_at = NOW() WHERE id = ?',
      [newStatus, order.id]
    );
    await pool.execute(
      `INSERT INTO order_status_history (order_id, from_status, to_status, changed_by, reason)
       VALUES (?, ?, ?, ?, ?)`,
      [order.id, order.status, newStatus, req.user.sub, reason?.trim() || null]
    );

    // Fetch customer for status email
    const [[customer]] = await pool.execute(
      `SELECT c.email, c.first_name FROM orders o
       JOIN customers c ON c.id = o.customer_id
       WHERE o.id = ?`,
      [order.id]
    );

    res.json({ ok: true, status: newStatus });

    if (customer?.email) {
      sendStatusEmail({
        to:       customer.email,
        vorname:  customer.first_name,
        orderRef: req.params.ref,
        status:   newStatus,
        reason:   reason?.trim() || null,
      }).catch(err => console.error('[mail] sendStatusEmail:', err.message));
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ─── POST /api/admin/orders/:ref/notifications ────────────────────────────────
router.post('/:ref/notifications', verifyCsrf, validateNotification, async (req, res) => {
  const { type, message } = req.body;

  try {
    const [[order]] = await pool.execute(
      'SELECT id FROM orders WHERE ref = ?',
      [req.params.ref]
    );
    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    const [result] = await pool.execute(
      'INSERT INTO order_notifications (order_id, type, message, sent_by) VALUES (?, ?, ?, ?)',
      [order.id, type, message.trim(), req.user.sub]
    );

    res.status(201).json({ id: result.insertId, type, message: message.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ─── DELETE /api/admin/orders/:ref/notifications/:id ─────────────────────────
router.delete('/:ref/notifications/:id', verifyCsrf, async (req, res) => {
  const notifId = parseInt(req.params.id);
  if (!Number.isInteger(notifId) || notifId < 1) {
    return res.status(400).json({ error: 'ID de notification invalide' });
  }

  try {
    const [[order]] = await pool.execute(
      'SELECT id FROM orders WHERE ref = ?',
      [req.params.ref]
    );
    if (!order) return res.status(404).json({ error: 'Commande introuvable' });

    const [result] = await pool.execute(
      'DELETE FROM order_notifications WHERE id = ? AND order_id = ?',
      [notifId, order.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Notification introuvable' });
    }
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

export default router;
