import 'dotenv/config';
import pool from '../config/db.js';

const sql = `
CREATE TABLE IF NOT EXISTS reviews (
  id           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  product_slug VARCHAR(255)  NOT NULL,
  product_name VARCHAR(255)  NOT NULL,
  author_name  VARCHAR(150)  NOT NULL,
  author_email VARCHAR(255)  NOT NULL,
  rating       TINYINT       NOT NULL,
  comment      TEXT          NOT NULL,
  status       ENUM('pending','approved','rejected') NOT NULL DEFAULT 'pending',
  ip_address   VARCHAR(45)   NULL,
  created_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_product (product_slug),
  INDEX idx_status  (status),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

(async () => {
  try {
    await pool.execute(sql);
    console.log('✓ Table reviews créée (ou déjà existante).');
    process.exit(0);
  } catch (err) {
    console.error('✗ Erreur création table reviews:', err.message);
    process.exit(1);
  }
})();
