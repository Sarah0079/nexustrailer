import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import pool from '../config/db.js';
import { generateCsrfToken } from '../middleware/csrf.js';

export async function loginUser(username, password, ipAddress) {
  // Vérification brute-force par IP (base de données)
  const [[{ cnt }]] = await pool.execute(
    `SELECT COUNT(*) AS cnt FROM login_attempts
     WHERE ip_address = ? AND success = 0
     AND attempted_at > DATE_SUB(NOW(), INTERVAL 15 MINUTE)`,
    [ipAddress]
  );

  if (cnt >= 5) {
    await pool.execute(
      'INSERT INTO login_attempts (ip_address, success) VALUES (?, 0)',
      [ipAddress]
    );
    const err = new Error('Trop de tentatives. Réessayez dans 15 minutes.');
    err.status = 429;
    throw err;
  }

  // Recherche de l'utilisateur
  const [users] = await pool.execute(
    'SELECT id, username, password_hash, role FROM users WHERE username = ?',
    [username]
  );

  const user = users[0];
  const valid = user ? await bcrypt.compare(password, user.password_hash) : false;

  // Toujours logger la tentative (même si le user n'existe pas)
  await pool.execute(
    'INSERT INTO login_attempts (ip_address, success) VALUES (?, ?)',
    [ipAddress, valid ? 1 : 0]
  );

  if (!valid) {
    const err = new Error('Identifiants incorrects');
    err.status = 401;
    throw err;
  }

  // Mise à jour last_login_at
  await pool.execute('UPDATE users SET last_login_at = NOW() WHERE id = ?', [user.id]);

  // Génération JWT
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT({
    sub:      String(user.id),
    role:     user.role,
    username: user.username,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('8h')
    .setIssuedAt()
    .sign(secret);

  const csrfToken = generateCsrfToken();

  return {
    token,
    csrfToken,
    user: { id: user.id, username: user.username, role: user.role },
  };
}
