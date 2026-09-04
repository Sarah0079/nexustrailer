// Usage : node server/create-admin.js <username> <password>
// Crée ou met à jour un compte admin dans la table users.
// Le mot de passe n'est jamais stocké en clair — uniquement le hash bcrypt.
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import pool from './config/db.js';

const [username, password] = process.argv.slice(2);

if (!username || !password) {
  console.error('Usage : node server/create-admin.js <username> <password>');
  process.exit(1);
}

if (password.length < 12) {
  console.error('Le mot de passe doit contenir au moins 12 caractères.');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

const [result] = await pool.execute(
  `INSERT INTO users (username, password_hash)
   VALUES (?, ?)
   ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash), updated_at = NOW()`,
  [username, hash]
);

const action = result.affectedRows === 1 && result.insertId > 0 ? 'créé' : 'mis à jour';
console.log(`Admin "${username}" ${action} avec succès.`);
await pool.end();
