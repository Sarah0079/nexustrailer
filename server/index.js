import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import { globalLimiter } from './middleware/rateLimiter.js';
import authRoutes           from './routes/auth.js';
import ordersRoutes         from './routes/orders.js';
import adminOrdersRoutes    from './routes/admin/orders.js';
import adminPaymentsRouter  from './routes/admin/payments.js';
import adminCustomersRoutes from './routes/admin/customers.js';

const app = express();

// ─── Sécurité ────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin:      process.env.FRONTEND_URL || 'http://localhost:5187',
  credentials: true, // Obligatoire pour les cookies cross-origin en développement
}));

// ─── Parsers ──────────────────────────────────────────────────────────────────
app.use(express.json({ limit: '50kb' }));
app.use(cookieParser());

// ─── Rate limiting global ────────────────────────────────────────────────────
app.use(globalLimiter);

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/auth',             authRoutes);
app.use('/api/orders',           ordersRoutes);
app.use('/api/admin/orders',     adminOrdersRoutes);
app.use('/api/admin',            adminPaymentsRouter);   // /api/admin/payments/:id et /api/admin/orders/:ref/payments
app.use('/api/admin/customers',  adminCustomersRoutes);

// ─── Healthcheck ─────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ ok: true }));

// ─── Gestionnaire d'erreurs global ───────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API TrailPro → http://localhost:${PORT}`);
});
