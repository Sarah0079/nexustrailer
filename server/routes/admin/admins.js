import { Router } from 'express';
import bcrypt from 'bcryptjs';
import pool from '../../config/db.js';
import { requireAuth } from '../../middleware/auth.js';
import { verifyCsrf } from '../../middleware/csrf.js';

const router = Router();
router.use(requireAuth);

const USERNAME_RE = /^[a-zA-Z0-9_-]{3,40}$/;

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, username, created_at FROM admins ORDER BY created_at ASC',
    );
    res.json({ admins: rows });
  } catch {
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }
});

router.post('/', verifyCsrf, async (req, res) => {
  const { username, password } = req.body;
  if (!username || !USERNAME_RE.test(username)) {
    return res.status(400).json({ error: 'Ungültiger Benutzername (3-40 Zeichen, Buchstaben, Ziffern, _ -).' });
  }
  if (!password || typeof password !== 'string' || password.length < 8 || password.length > 100) {
    return res.status(400).json({ error: 'Passwort muss zwischen 8 und 100 Zeichen lang sein.' });
  }
  try {
    const hash = await bcrypt.hash(password, 12);
    await pool.execute(
      'INSERT INTO admins (username, password_hash) VALUES (?, ?)',
      [username.trim(), hash],
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Dieser Benutzername existiert bereits.' });
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }
});

router.put('/:id/password', verifyCsrf, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: 'Ungültige ID.' });
  const { password } = req.body;
  if (!password || typeof password !== 'string' || password.length < 8 || password.length > 100) {
    return res.status(400).json({ error: 'Passwort muss zwischen 8 und 100 Zeichen lang sein.' });
  }
  try {
    const hash = await bcrypt.hash(password, 12);
    const [result] = await pool.execute(
      'UPDATE admins SET password_hash = ? WHERE id = ?',
      [hash, id],
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Admin nicht gefunden.' });
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }
});

router.delete('/:id', verifyCsrf, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ error: 'Ungültige ID.' });
  try {
    const [[count]] = await pool.execute('SELECT COUNT(*) AS cnt FROM admins');
    if (count.cnt <= 1) return res.status(400).json({ error: 'Der letzte Administrator kann nicht gelöscht werden.' });
    const [result] = await pool.execute('DELETE FROM admins WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Admin nicht gefunden.' });
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Interner Serverfehler.' });
  }
});

export default router;
