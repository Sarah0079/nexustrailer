import { randomBytes } from 'crypto';

// Caractères sans ambiguïté (sans 0/O, 1/I)
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateOrderRef() {
  const year = new Date().getFullYear();
  const bytes = randomBytes(6);
  let code = '';
  for (const byte of bytes) code += CHARS[byte % CHARS.length];
  return `ALT-${year}-${code}`;
}

// Regex de validation (à jour avec le format alphanumétrique)
export const ORDER_REF_REGEX = /^ALT-\d{4}-[A-Z0-9]{6}$/;
