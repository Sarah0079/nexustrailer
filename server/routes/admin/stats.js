import { Router } from 'express';
import pool from '../../config/db.js';
import { requireAuth } from '../../middleware/auth.js';

const router = Router();
router.use(requireAuth);

router.get('/', async (_req, res) => {
  try {
    const [[totals]] = await pool.execute(`
      SELECT
        COUNT(*)                                        AS total_orders,
        COALESCE(SUM(total), 0)                         AS total_revenue,
        COALESCE(SUM(amount_due_now), 0)                AS total_collected,
        COUNT(CASE WHEN status = 'pending'           THEN 1 END) AS cnt_pending,
        COUNT(CASE WHEN status = 'payment_pending'   THEN 1 END) AS cnt_payment_pending,
        COUNT(CASE WHEN status = 'payment_confirmed' THEN 1 END) AS cnt_payment_confirmed,
        COUNT(CASE WHEN status = 'processing'        THEN 1 END) AS cnt_processing,
        COUNT(CASE WHEN status = 'shipped'           THEN 1 END) AS cnt_shipped,
        COUNT(CASE WHEN status = 'delivered'         THEN 1 END) AS cnt_delivered,
        COUNT(CASE WHEN status = 'cancelled'         THEN 1 END) AS cnt_cancelled,
        COUNT(CASE WHEN status = 'refunded'          THEN 1 END) AS cnt_refunded
      FROM orders
    `);

    const [monthly] = await pool.execute(`
      SELECT
        DATE_FORMAT(created_at, '%Y-%m') AS month,
        COUNT(*)                          AS orders,
        COALESCE(SUM(total), 0)           AS revenue
      FROM orders
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
        AND status NOT IN ('cancelled', 'refunded')
      GROUP BY month
      ORDER BY month ASC
    `);

    const [topProducts] = await pool.execute(`
      SELECT
        oi.product_name,
        SUM(oi.quantity)   AS units_sold,
        SUM(oi.line_total) AS revenue
      FROM order_items oi
      JOIN orders o ON o.id = oi.order_id
      WHERE o.status NOT IN ('cancelled', 'refunded')
      GROUP BY oi.product_name
      ORDER BY revenue DESC
      LIMIT 5
    `);

    const [[recentCount]] = await pool.execute(`
      SELECT COUNT(*) AS cnt FROM orders
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    `);

    res.json({ totals, monthly, topProducts, recentWeek: recentCount.cnt });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }
});

export default router;
