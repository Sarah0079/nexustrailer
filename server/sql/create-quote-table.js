import pool from '../config/db.js';

await pool.execute(`
  CREATE TABLE IF NOT EXISTS quote_requests (
    id           INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    company      VARCHAR(100)    NOT NULL,
    name         VARCHAR(80)     NOT NULL,
    email        VARCHAR(100)    NOT NULL,
    phone        VARCHAR(30)     NULL,
    siret        VARCHAR(30)     NULL,
    product_type VARCHAR(100)    NOT NULL,
    quantity     VARCHAR(50)     NULL,
    budget       VARCHAR(50)     NULL,
    message      TEXT            NOT NULL,
    status       ENUM('new','read','replied','closed') NOT NULL DEFAULT 'new',
    ip_address   VARCHAR(45)     NULL,
    created_at   TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
`);

console.log('✓ Table quote_requests créée');
await pool.end();
