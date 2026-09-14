import { Router } from 'express';
import pool from '../../config/db.js';
import { requireAuth } from '../../middleware/auth.js';
import { verifyCsrf } from '../../middleware/csrf.js';

const router = Router();

const IBAN_RE = /^[A-Z]{2}[0-9A-Z]{13,32}$/;
const BIC_RE  = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;

// ── GET /api/admin/settings/bank ─────────────────────────────────────────────
router.get('/bank', requireAuth, async (_req, res) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.execute(
      "SELECT `key`, value FROM settings WHERE `key` IN ('bank_beneficiaire','bank_iban','bank_bic','bank_name')"
    );
    const map = Object.fromEntries(rows.map((r) => [r.key, r.value]));
    res.json({
      beneficiaire: map.bank_beneficiaire || '',
      iban:         map.bank_iban         || '',
      bic:          map.bank_bic          || '',
      banque:       map.bank_name         || '',
    });
  } finally {
    conn.release();
  }
});

// ── PUT /api/admin/settings/bank ──────────────────────────────────────────────
router.put('/bank', requireAuth, verifyCsrf, async (req, res) => {
  const { beneficiaire, iban, bic, banque } = req.body;

  // Validation serveur — jamais faire confiance au frontend
  if (typeof beneficiaire !== 'string' || !beneficiaire.trim()) {
    return res.status(400).json({ error: 'Nom du bénéficiaire requis' });
  }
  const ibanClean = (iban || '').replace(/\s/g, '').toUpperCase();
  if (!IBAN_RE.test(ibanClean)) {
    return res.status(400).json({ error: 'IBAN invalide' });
  }
  const bicClean = (bic || '').trim().toUpperCase();
  if (!BIC_RE.test(bicClean)) {
    return res.status(400).json({ error: 'BIC invalide' });
  }
  if (typeof banque !== 'string' || !banque.trim()) {
    return res.status(400).json({ error: 'Nom de la banque requis' });
  }

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    const pairs = [
      ['bank_beneficiaire', beneficiaire.trim()],
      ['bank_iban',         ibanClean],
      ['bank_bic',          bicClean],
      ['bank_name',         banque.trim()],
    ];
    for (const [key, value] of pairs) {
      await conn.execute(
        'INSERT INTO settings (`key`, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)',
        [key, value]
      );
    }
    await conn.commit();
    res.json({ ok: true });
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
});

export default router;
