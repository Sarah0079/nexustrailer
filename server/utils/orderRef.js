import { randomBytes } from 'crypto';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export function generateOrderRef() {
  const year = new Date().getFullYear();
  const bytes = randomBytes(6);
  let code = '';
  for (const byte of bytes) code += CHARS[byte % CHARS.length];
  return `NXT-${year}-${code}`;
}

export const ORDER_REF_REGEX = /^NXT-\d{4}-[A-Z0-9]{6}$/;
