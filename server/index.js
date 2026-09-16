import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { globalLimiter } from './middleware/rateLimiter.js';
import { generateCsrfToken, setCsrfCookie } from './middleware/csrf.js';
import authRoutes            from './routes/auth.js';
import ordersRoutes          from './routes/orders.js';
import contactRoutes         from './routes/contact.js';
import angebotRoutes         from './routes/angebot.js';
import adminOrdersRoutes     from './routes/admin/orders.js';
import adminPaymentsRouter   from './routes/admin/payments.js';
import adminCustomersRoutes  from './routes/admin/customers.js';
import adminSettingsRoutes   from './routes/admin/settings.js';
import adminStatsRoutes      from './routes/admin/stats.js';
import adminAdminsRoutes     from './routes/admin/admins.js';
import adminAngeboteRoutes   from './routes/admin/angebote.js';

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error('FATAL: JWT_SECRET manquant ou trop court (< 32 caractères). Arrêt du serveur.');
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'"],
      styleSrc:    ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:     ["'self'", 'https://fonts.gstatic.com'],
      imgSrc:      ["'self'", 'data:', 'https:'],
      connectSrc:  ["'self'"],
      objectSrc:   ["'none'"],
      upgradeInsecureRequests: [],
    },
  },
}));

const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5187')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(compression());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '50kb' }));
app.use(cookieParser());
app.use(globalLimiter);

app.get('/api/csrf', (req, res) => {
  const existing = req.cookies?.csrf_token;
  const token = existing || generateCsrfToken();
  if (!existing) setCsrfCookie(res, token);
  res.json({ ok: true });
});

app.use('/api/auth',              authRoutes);
app.use('/api/orders',            ordersRoutes);
app.use('/api/contact',           contactRoutes);
app.use('/api/angebot',           angebotRoutes);
app.use('/api/admin/orders',      adminOrdersRoutes);
app.use('/api/admin',             adminPaymentsRouter);
app.use('/api/admin/customers',   adminCustomersRoutes);
app.use('/api/admin/settings',    adminSettingsRoutes);
app.use('/api/admin/stats',       adminStatsRoutes);
app.use('/api/admin/admins',      adminAdminsRoutes);
app.use('/api/admin/angebote',    adminAngeboteRoutes);

app.get('/api/health', (_, res) => res.json({ ok: true }));

if (process.env.NODE_ENV === 'production') {
  const distDir        = path.join(__dirname, '..', 'dist');
  const publicDir      = path.join(__dirname, '..', 'public');
  const persistentDir  = path.join(__dirname, '..', '..', '..', 'public_html');
  app.use(express.static(distDir,       { maxAge: '1y', etag: false }));
  app.use(express.static(publicDir,     { maxAge: '1y', etag: false }));
  app.use(express.static(persistentDir, { maxAge: '1y', etag: false }));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not found' });
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Interner Serverfehler' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`NexusTrailer API → http://localhost:${PORT}`);
});
