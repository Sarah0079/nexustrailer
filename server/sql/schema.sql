-- TrailPro — Schéma MySQL complet
-- Encodage : utf8mb4_unicode_ci (support emoji + caractères spéciaux)

CREATE TABLE IF NOT EXISTS users (
  id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  username      VARCHAR(50)     NOT NULL,
  password_hash VARCHAR(255)    NOT NULL,
  role          ENUM('admin','superadmin') NOT NULL DEFAULT 'admin',
  last_login_at TIMESTAMP       NULL,
  created_at    TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS login_attempts (
  id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  ip_address   VARCHAR(45)  NOT NULL,
  success      TINYINT(1)   NOT NULL DEFAULT 0,
  attempted_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_ip_time (ip_address, attempted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS customers (
  id         INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100)  NOT NULL,
  last_name  VARCHAR(100)  NOT NULL,
  email      VARCHAR(255)  NOT NULL,
  phone      VARCHAR(30)   NULL,
  created_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS products (
  id             INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  product_ref    INT             NOT NULL,
  slug           VARCHAR(255)    NOT NULL,
  name           VARCHAR(255)    NOT NULL,
  subtitle       VARCHAR(500)    NULL,
  category       VARCHAR(100)    NOT NULL,
  price          DECIMAL(10,2)   NOT NULL,
  original_price DECIMAL(10,2)   NULL,
  discount_pct   TINYINT         NULL,
  image_url      VARCHAR(500)    NULL,
  in_stock       TINYINT(1)      NOT NULL DEFAULT 1,
  created_at     TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at     TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_slug (slug),
  UNIQUE KEY uq_ref  (product_ref),
  INDEX idx_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS orders (
  id              INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  ref             VARCHAR(20)   NOT NULL,
  customer_id     INT UNSIGNED  NOT NULL,
  del_first_name  VARCHAR(100)  NOT NULL,
  del_last_name   VARCHAR(100)  NOT NULL,
  del_email       VARCHAR(255)  NOT NULL,
  del_phone       VARCHAR(30)   NULL,
  del_address     VARCHAR(255)  NOT NULL,
  del_postal_code VARCHAR(20)   NOT NULL,
  del_city        VARCHAR(100)  NOT NULL,
  del_country     VARCHAR(100)  NOT NULL DEFAULT 'Deutschland',
  subtotal        DECIMAL(10,2) NOT NULL,
  shipping_cost   DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  total           DECIMAL(10,2) NOT NULL,
  currency        CHAR(3)       NOT NULL DEFAULT 'EUR',
  payment_option  ENUM('full','deposit') NOT NULL DEFAULT 'full',
  amount_due_now  DECIMAL(10,2) NOT NULL,
  status ENUM(
    'pending',
    'payment_pending',
    'payment_confirmed',
    'processing',
    'shipped',
    'delivered',
    'cancelled',
    'refunded'
  ) NOT NULL DEFAULT 'pending',
  customer_note   TEXT NULL,
  admin_note      TEXT NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_ref (ref),
  CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id)
    REFERENCES customers(id) ON UPDATE CASCADE,
  INDEX idx_status   (status),
  INDEX idx_created  (created_at),
  INDEX idx_customer (customer_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_items (
  id            INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  order_id      INT UNSIGNED  NOT NULL,
  product_ref   INT           NOT NULL,
  product_name  VARCHAR(255)  NOT NULL,
  product_slug  VARCHAR(255)  NOT NULL,
  product_image VARCHAR(500)  NULL,
  unit_price    DECIMAL(10,2) NOT NULL,
  quantity      SMALLINT UNSIGNED NOT NULL DEFAULT 1,
  line_total    DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_items_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
  INDEX idx_order (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS payments (
  id              INT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id        INT UNSIGNED NOT NULL,
  amount          DECIMAL(10,2) NOT NULL,
  currency        CHAR(3)       NOT NULL DEFAULT 'EUR',
  method          VARCHAR(50)   NOT NULL DEFAULT 'SEPA_TRANSFER',
  payment_type    ENUM('deposit','balance','full') NOT NULL DEFAULT 'full',
  status ENUM(
    'pending',
    'confirmed',
    'rejected',
    'cancelled',
    'refunded'
  ) NOT NULL DEFAULT 'pending',
  transaction_ref VARCHAR(150) NULL,
  bank_ref        VARCHAR(150) NULL,
  confirmed_at    TIMESTAMP    NULL,
  confirmed_by    INT UNSIGNED NULL,
  notes           TEXT NULL,
  created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_payments_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON UPDATE CASCADE,
  CONSTRAINT fk_payments_user FOREIGN KEY (confirmed_by)
    REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  INDEX idx_order       (order_id),
  INDEX idx_status      (status),
  INDEX idx_transaction (transaction_ref)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_status_history (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id    INT UNSIGNED NOT NULL,
  from_status VARCHAR(50)  NULL,
  to_status   VARCHAR(50)  NOT NULL,
  changed_by  INT UNSIGNED NULL,
  reason      TEXT NULL,
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_history_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_history_user FOREIGN KEY (changed_by)
    REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  INDEX idx_order (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_notifications (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
  order_id   INT UNSIGNED NOT NULL,
  type       ENUM('info','success','warning') NOT NULL DEFAULT 'info',
  message    TEXT NOT NULL,
  sent_by    INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_notif_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_notif_user FOREIGN KEY (sent_by)
    REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  INDEX idx_order (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS quote_requests (
  id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  company      VARCHAR(100) NOT NULL,
  name         VARCHAR(80)  NOT NULL,
  email        VARCHAR(100) NOT NULL,
  phone        VARCHAR(30)  NULL,
  siret        VARCHAR(30)  NULL,
  product_type VARCHAR(100) NOT NULL,
  quantity     VARCHAR(50)  NULL,
  budget       VARCHAR(50)  NULL,
  message      TEXT         NOT NULL,
  status       ENUM('new','read','replied','closed') NOT NULL DEFAULT 'new',
  ip_address   VARCHAR(45)  NULL,
  created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_status     (status),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
