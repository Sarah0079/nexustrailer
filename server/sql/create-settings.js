import 'dotenv/config';
import pool from '../config/db.js';

async function run() {
  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS settings (
        \`key\`      VARCHAR(100)  NOT NULL,
        value       TEXT          NOT NULL DEFAULT '',
        updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (\`key\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    console.log('Table settings créée (ou déjà existante).');

    const defaults = [
      ['bank_beneficiaire', process.env.BANK_BENEFICIAIRE || ''],
      ['bank_iban',         process.env.BANK_IBAN         || ''],
      ['bank_bic',         process.env.BANK_BIC          || ''],
      ['bank_name',        process.env.BANK_NAME         || ''],
    ];

    for (const [key, value] of defaults) {
      await conn.execute(
        'INSERT INTO settings (`key`, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE `key`=`key`',
        [key, value]
      );
    }

    console.log('Valeurs par défaut insérées (sans écraser les valeurs existantes).');
  } finally {
    conn.release();
    await pool.end();
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
