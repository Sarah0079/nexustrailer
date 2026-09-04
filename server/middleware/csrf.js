import { randomBytes } from 'crypto';

export function generateCsrfToken() {
  return randomBytes(32).toString('hex');
}

export function setCsrfCookie(res, token) {
  res.cookie('csrf_token', token, {
    httpOnly: false, // Lisible par JS pour l'envoyer en header
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge:   8 * 60 * 60 * 1000,
    path:     '/',
  });
}

// Appliqué uniquement aux routes admin mutantes (POST/PUT/DELETE)
export function verifyCsrf(req, res, next) {
  const headerToken = req.headers['x-csrf-token'];
  const cookieToken = req.cookies?.csrf_token;

  if (!headerToken || !cookieToken || headerToken !== cookieToken) {
    return res.status(403).json({ error: 'CSRF token invalide ou manquant' });
  }
  next();
}
