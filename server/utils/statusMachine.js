// Transitions autorisées — toute autre est interdite
const TRANSITIONS = {
  pending:           ['payment_pending', 'cancelled'],
  payment_pending:   ['payment_confirmed', 'cancelled'],
  payment_confirmed: ['processing', 'refunded'],
  processing:        ['shipped'],
  shipped:           ['delivered'],
  delivered:         [],
  cancelled:         [],
  refunded:          [],
};

export function canTransition(from, to) {
  return Array.isArray(TRANSITIONS[from]) && TRANSITIONS[from].includes(to);
}

export function allowedNext(from) {
  return TRANSITIONS[from] ?? [];
}
