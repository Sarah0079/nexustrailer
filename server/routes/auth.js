import { Router } from 'express';
import { jwtVerify } from 'jose';
import { loginUser } from '../services/authService.js';
import { setCsrfCookie } from '../middleware/csrf.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/login', authLimiter, async (req, res) => {
  const { username, password } = req.body ?? {};

  if (!username?.trim() || !password) {
    return res.status(400).json({ error: 'Identifiant et mot de passe requis' });
  }

  try {
    const ip = req.ip || req.socket.remoteAddress || '0.0.0.0';
    const { token, csrfToken, user } = await loginUser(username.trim(), password, ip);

    // JWT en cookie httpOnly — jamais lisible par JS
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge:   8 * 60 * 60 * 1000,
      path:     '/',
    });

    // CSRF token en cookie normal (lisible par JS, envoyé en header sur les requêtes mutantes)
    setCsrfCookie(res, csrfToken);

    res.json({ ok: true, user });
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error('Login error:', err);
    res.status(status).json({ error: err.message });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie('auth_token',  { path: '/' });
  res.clearCookie('csrf_token',  { path: '/' });
  res.json({ ok: true });
});

router.get('/me', async (req, res) => {
  const token = req.cookies?.auth_token;
  if (!token) return res.json({ authenticated: false });

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    res.json({
      authenticated: true,
      user: { id: payload.sub, username: payload.username, role: payload.role },
    });
  } catch {
    res.clearCookie('auth_token', { path: '/' });
    res.clearCookie('csrf_token', { path: '/' });
    res.json({ authenticated: false });
  }
});

export default router;
