// Usage : node server/sql/seed.js
// Peuple la table products depuis src/data/products.js
import 'dotenv/config';
import pool from '../config/db.js';
import { PRODUCTS } from '../../src/data/products.js';

console.log(`Seed de ${PRODUCTS.length} produits…`);

let inserted = 0;
let updated  = 0;

for (const p of PRODUCTS) {
  const inStock = typeof p.stock === 'number' ? (p.stock > 0 ? 1 : 0) : 1;

  const [result] = await pool.execute(
    `INSERT INTO products
       (product_ref, slug, name, subtitle, category, price, original_price, discount_pct, image_url, in_stock)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       name           = VALUES(name),
       subtitle       = VALUES(subtitle),
       category       = VALUES(category),
       price          = VALUES(price),
       original_price = VALUES(original_price),
       discount_pct   = VALUES(discount_pct),
       image_url      = VALUES(image_url),
       in_stock       = VALUES(in_stock),
       updated_at     = NOW()`,
    [
      p.id,
      p.slug,
      p.name,
      p.subtitle || null,
      p.category,
      p.price,
      p.originalPrice || null,
      p.discount || null,
      p.image || null,
      inStock,
    ]
  );

  if (result.affectedRows === 1) inserted++;
  else updated++;
}

console.log(`✓ ${inserted} insérés, ${updated} mis à jour`);
await pool.end();
