import { jwtVerify } from 'jose';

export async function requireAuth(req, res, next) {
  const token = req.cookies?.auth_token;
  if (!token) return res.status(401).json({ error: 'Non authentifié' });

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    req.user = payload;
    next();
  } catch {
    res.clearCookie('auth_token');
    res.clearCookie('csrf_token');
    return res.status(401).json({ error: 'Session expirée, veuillez vous reconnecter' });
  }
}
