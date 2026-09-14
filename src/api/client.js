const BASE = '/api';

function getCsrfToken() {
  const cookie = document.cookie.split(';').find((c) => c.trim().startsWith('csrf_token='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

async function request(method, path, body) {
  const mutating = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method);
  const headers  = { 'Content-Type': 'application/json' };

  if (mutating) {
    const csrf = getCsrfToken();
    if (csrf) headers['X-CSRF-Token'] = csrf;
  }

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body:        body != null ? JSON.stringify(body) : undefined,
    credentials: 'include', // Envoie et reçoit les cookies (auth_token, csrf_token)
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Fehler ${res.status}`);
  return data;
}

// ── Public ────────────────────────────────────────────────────────────────────

export function createOrder(payload) {
  return request('POST', '/orders', payload);
}

export function fetchOrderStatus(ref) {
  return request('GET', `/orders/${ref}`);
}

export function sendContact(payload) {
  return request('POST', '/contact', payload);
}

// ── Auth ──────────────────────────────────────────────────────────────────────

export function login(username, password) {
  return request('POST', '/auth/login', { username, password });
}

export function logout() {
  return request('POST', '/auth/logout');
}

export function checkAuth() {
  return request('GET', '/auth/me');
}

// ── Admin — commandes ─────────────────────────────────────────────────────────

export function fetchAllOrders(queryString = '') {
  return request('GET', `/admin/orders${queryString}`);
}

export function fetchOrderDetail(ref) {
  return request('GET', `/admin/orders/${ref}`);
}

export function updateOrderStatus(ref, status, reason = '') {
  return request('PUT', `/admin/orders/${ref}/status`, { status, reason });
}

export function addNotification(ref, type, message) {
  return request('POST', `/admin/orders/${ref}/notifications`, { type, message });
}

export function deleteNotification(ref, id) {
  return request('DELETE', `/admin/orders/${ref}/notifications/${id}`);
}

// ── Admin — paiements ─────────────────────────────────────────────────────────

export function updatePaymentStatus(id, status, notes = '') {
  return request('PUT', `/admin/payments/${id}/status`, { status, notes });
}

// ── Admin — coordonnées bancaires ─────────────────────────────────────────────

export function fetchBankSettings() {
  return request('GET', '/admin/settings/bank');
}

export function updateBankSettings(data) {
  return request('PUT', '/admin/settings/bank', data);
}
