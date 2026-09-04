import pool from '../config/db.js';

export async function updatePaymentStatus(paymentId, newStatus, adminId, notes) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const [[payment]] = await conn.execute(
      'SELECT id, order_id, status FROM payments WHERE id = ?',
      [paymentId]
    );

    if (!payment) {
      const e = new Error('Paiement introuvable');
      e.status = 404;
      throw e;
    }
    if (payment.status !== 'pending') {
      const e = new Error('Ce paiement ne peut plus être modifié (statut actuel : ' + payment.status + ')');
      e.status = 400;
      throw e;
    }

    const confirmedAt   = newStatus === 'confirmed' ? new Date() : null;
    const confirmedBy   = newStatus === 'confirmed' ? adminId : null;

    await conn.execute(
      `UPDATE payments
       SET status = ?, confirmed_at = ?, confirmed_by = ?, notes = ?, updated_at = NOW()
       WHERE id = ?`,
      [newStatus, confirmedAt, confirmedBy, notes || null, paymentId]
    );

    // Si paiement confirmé → vérifier si l'ordre doit passer à payment_confirmed
    if (newStatus === 'confirmed') {
      const [[order]] = await conn.execute(
        'SELECT status FROM orders WHERE id = ?',
        [payment.order_id]
      );

      if (order?.status === 'payment_pending') {
        await conn.execute(
          'UPDATE orders SET status = ? WHERE id = ?',
          ['payment_confirmed', payment.order_id]
        );
        await conn.execute(
          `INSERT INTO order_status_history (order_id, from_status, to_status, changed_by, reason)
           VALUES (?, 'payment_pending', 'payment_confirmed', ?, 'Paiement confirmé')`,
          [payment.order_id, adminId]
        );
      }
    }

    await conn.commit();
    return { ok: true };
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}
