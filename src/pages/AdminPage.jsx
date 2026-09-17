import { useState, useEffect, useCallback } from 'react';
import {
  checkAuth, login, logout,
  fetchAllOrders, fetchOrderDetail, updateOrderStatus,
  addNotification, deleteNotification, updatePaymentStatus,
  fetchBankSettings, updateBankSettings,
  fetchAllAngebote, fetchAngebotDetail, updateAngebotStatus,
} from '../api/client';

// ── Constantes ──────────────────────────────────────────────────────────────────
const STATUSES = {
  pending:           { label: 'Bestellung eingegangen', color: '#92400E', bg: '#FEF3C7', border: '#FDE68A' },
  payment_pending:   { label: 'Zahlung ausstehend',     color: '#C2460A', bg: '#FFF7ED', border: '#FED7AA' },
  payment_confirmed: { label: 'Zahlung bestätigt',      color: '#065F46', bg: '#ECFDF5', border: '#6EE7B7' },
  processing:        { label: 'In Vorbereitung',         color: '#5B21B6', bg: '#F5F3FF', border: '#DDD6FE' },
  shipped:           { label: 'Versandt',                color: '#0E7490', bg: '#F0F9FF', border: '#BAE6FD' },
  delivered:         { label: 'Geliefert',               color: '#166534', bg: '#DCFCE7', border: '#86EFAC' },
  cancelled:         { label: 'Storniert',               color: '#991B1B', bg: '#FEF2F2', border: '#FECACA' },
  refunded:          { label: 'Rückerstattet',           color: '#374151', bg: '#F3F4F6', border: '#E5E7EB' },
};

const fmtEur  = (n) => n != null ? Number(n).toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' €' : '—';
const fmtDate = (iso) => iso ? new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

function StatusBadge({ status }) {
  const s = STATUSES[status] || { label: status, color: '#374151', bg: '#F3F4F6', border: '#E5E7EB' };
  return (
    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 0, background: s.bg, color: s.color, border: `1px solid ${s.border}`, whiteSpace: 'nowrap' }}>
      {s.label}
    </span>
  );
}

// ── Login ───────────────────────────────────────────────────────────────────────
function LoginView({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const r = await login(form.username, form.password);
      onLogin(r.user);
    } catch (err) {
      setError(err.message || 'Ungültige Anmeldedaten');
    }
  };

  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '40px 24px' }}>
      <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 40, width: '100%', maxWidth: 380 }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ width: 48, height: 48, background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
            <i className="bi bi-shield-lock" style={{ fontSize: 22, color: 'white' }} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)' }}>Adminbereich</h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>NexusTrailer</p>
        </div>
        {error && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 0, padding: '10px 14px', marginBottom: 16, fontSize: 13, color: 'var(--sale)' }}>
            <i className="bi bi-exclamation-circle" style={{ marginRight: 6 }} />{error}
          </div>
        )}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Benutzername</label>
            <input className="input" required autoFocus value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value }))} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Passwort</label>
            <input className="input" type="password" required value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-full" style={{ marginTop: 8 }}>
            <i className="bi bi-box-arrow-in-right" /> Anmelden
          </button>
        </form>
      </div>
    </main>
  );
}

// ── Bestellungen ────────────────────────────────────────────────────────────────
function OrdersTab() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('');
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusReason, setStatusReason] = useState('');
  const [notifType, setNotifType] = useState('info');
  const [notifMsg, setNotifMsg] = useState('');
  const LIMIT = 20;

  const loadOrders = useCallback(async () => {
    setLoading(true);
    try {
      const qs = `?page=${page}&limit=${LIMIT}${filterStatus ? `&status=${filterStatus}` : ''}`;
      const data = await fetchAllOrders(qs);
      setOrders(data.orders || []);
      setTotal(data.total || 0);
    } catch { setOrders([]); }
    finally { setLoading(false); }
  }, [page, filterStatus]);

  useEffect(() => { loadOrders(); }, [loadOrders]);

  const loadDetail = async (ref) => {
    setSelected(ref); setDetail(null);
    try { setDetail(await fetchOrderDetail(ref)); } catch { setDetail(null); }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateOrderStatus(selected, newStatus, statusReason);
      setStatusReason('');
      await loadDetail(selected);
      await loadOrders();
    } catch (err) { alert(err.message); }
  };

  const handleAddNotif = async () => {
    if (!notifMsg.trim()) return;
    try {
      await addNotification(selected, notifType, notifMsg.trim());
      setNotifMsg('');
      await loadDetail(selected);
    } catch (err) { alert(err.message); }
  };

  const handleDelNotif = async (id) => {
    if (!confirm('Diese Benachrichtigung löschen?')) return;
    try { await deleteNotification(selected, id); await loadDetail(selected); }
    catch (err) { alert(err.message); }
  };

  const handlePaymentStatus = async (paymentId, newStatus) => {
    const notes = prompt('Anmerkungen (optional):') || '';
    try { await updatePaymentStatus(paymentId, newStatus, notes); await loadDetail(selected); }
    catch (err) { alert(err.message); }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: selected ? 'minmax(0,1fr) minmax(0,420px)' : '1fr', gap: 24, alignItems: 'start' }}>

      {/* Liste */}
      <div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: 'var(--dark)', flex: 1 }}>Bestellungen ({total})</h2>
          <select className="input" value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1); }} style={{ width: 200, fontSize: 13 }}>
            <option value="">Alle Status</option>
            {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <button className="btn btn-outline btn-sm" onClick={loadOrders}><i className="bi bi-arrow-clockwise" /></button>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Laden…</div>
          ) : orders.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Keine Bestellungen.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    {['Referenz', 'Kunde', 'Gesamt', 'Status', 'Datum'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.ref} onClick={() => loadDetail(o.ref)}
                      style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer', background: selected === o.ref ? 'var(--accent-light)' : 'white' }}
                      onMouseEnter={e => { if (selected !== o.ref) e.currentTarget.style.background = 'var(--bg)'; }}
                      onMouseLeave={e => { if (selected !== o.ref) e.currentTarget.style.background = 'white'; }}
                    >
                      <td style={{ padding: '12px 14px', fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent)', whiteSpace: 'nowrap' }}>{o.ref}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--dark)', whiteSpace: 'nowrap' }}>{o.first_name} {o.last_name}</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--dark)', whiteSpace: 'nowrap' }}>{fmtEur(o.total)}</td>
                      <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}><StatusBadge status={o.status} /></td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{fmtDate(o.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {total > LIMIT && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
            <button className="btn btn-outline btn-sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}><i className="bi bi-chevron-left" /></button>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '0 8px' }}>Seite {page} / {Math.ceil(total / LIMIT)}</span>
            <button className="btn btn-outline btn-sm" disabled={page >= Math.ceil(total / LIMIT)} onClick={() => setPage(p => p + 1)}><i className="bi bi-chevron-right" /></button>
          </div>
        )}
      </div>

      {/* Détail — panneau latéral */}
      {selected && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)', fontFamily: 'monospace' }}>{selected}</h2>
            <button onClick={() => { setSelected(null); setDetail(null); }} style={{ color: 'var(--text-muted)', padding: 6, background: 'none', border: 'none', cursor: 'pointer' }}>
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {!detail ? (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>Laden…</div>
          ) : (<>

            {/* Kunde */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Kunde</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
                {[
                  ['Name', `${detail.del_first_name || detail.first_name} ${detail.del_last_name || detail.last_name}`],
                  ['E-Mail', detail.del_email || detail.email],
                  ['Telefon', detail.del_phone || detail.phone || '—'],
                  ['Adresse', detail.del_address ? `${detail.del_address}, ${detail.del_postal_code} ${detail.del_city}` : '—'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 600 }}>{k}</span>
                    <p style={{ color: 'var(--dark)', fontWeight: 600, marginTop: 1, wordBreak: 'break-all' }}>{v}</p>
                  </div>
                ))}
              </div>
              {detail.customer_note && (
                <div style={{ marginTop: 10, padding: '8px 10px', background: 'var(--bg)', borderRadius: 0, fontSize: 12, color: 'var(--text-muted)' }}>
                  <strong>Hinweis:</strong> {detail.customer_note}
                </div>
              )}
            </div>

            {/* Artikel */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Artikel</p>
              {(detail.items || []).map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, paddingBottom: 6, marginBottom: 6, borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--dark)', fontWeight: 600 }}>{item.product_name} × {item.quantity}</span>
                  <span style={{ color: 'var(--dark)', fontWeight: 700, flexShrink: 0 }}>{fmtEur(item.line_total)}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 800, color: 'var(--dark)', paddingTop: 4 }}>
                <span>Gesamt</span><span>{fmtEur(detail.total)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--accent)', marginTop: 4 }}>
                <span>Fällig ({detail.payment_option === 'deposit' ? '50 % Anzahlung' : 'Vollzahlung'})</span>
                <span style={{ fontWeight: 700 }}>{fmtEur(detail.amount_due_now)}</span>
              </div>
            </div>

            {/* Status */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Status</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <StatusBadge status={detail.status} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{fmtDate(detail.updated_at)}</span>
              </div>
              {(detail.allowedTransitions || []).length > 0 && (
                <div>
                  <input className="input" placeholder="Grund (optional)" value={statusReason} onChange={e => setStatusReason(e.target.value)} style={{ marginBottom: 8, fontSize: 12 }} />
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {detail.allowedTransitions.map(s => (
                      <button key={s} className="btn btn-outline btn-sm" onClick={() => handleStatusUpdate(s)} style={{ fontSize: 11 }}>
                        → {STATUSES[s]?.label || s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Zahlungen */}
            {(detail.payments || []).length > 0 && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Zahlungen</p>
                {detail.payments.map(p => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 10px', background: 'var(--bg)', borderRadius: 0, marginBottom: 6 }}>
                    <div style={{ fontSize: 12 }}>
                      <span style={{ fontWeight: 700, color: 'var(--dark)' }}>{fmtEur(p.amount)}</span>
                      <span style={{ color: 'var(--text-muted)', marginLeft: 6 }}>{p.payment_type === 'deposit' ? 'Anzahlung' : 'Vollzahlung'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <StatusBadge status={p.status} />
                      {p.status === 'pending' && (
                        <button className="btn btn-outline btn-sm" style={{ fontSize: 11 }} onClick={() => handlePaymentStatus(p.id, 'confirmed')}>
                          Bestätigen
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Benachrichtigungen */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Kundenbenachrichtigung</p>
              <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                <select className="input" value={notifType} onChange={e => setNotifType(e.target.value)} style={{ width: 110, fontSize: 12 }}>
                  <option value="info">Info</option>
                  <option value="success">Erfolg</option>
                  <option value="warning">Hinweis</option>
                </select>
                <input className="input" placeholder="Nachricht für den Kunden…" value={notifMsg} onChange={e => setNotifMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddNotif()} style={{ fontSize: 12 }} />
                <button className="btn btn-primary btn-sm" onClick={handleAddNotif}><i className="bi bi-send" /></button>
              </div>
              {(detail.notifications || []).length === 0 ? (
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Keine Benachrichtigungen.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {detail.notifications.map(n => (
                    <div key={n.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 10px', background: 'var(--bg)', borderRadius: 0, fontSize: 12 }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: 'var(--dark)', fontWeight: 600 }}>{n.message}</p>
                        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{n.type} · {fmtDate(n.created_at)}</p>
                      </div>
                      <button onClick={() => handleDelNotif(n.id)} style={{ color: 'var(--text-light)', padding: 4, background: 'none', border: 'none', cursor: 'pointer' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--sale)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}
                      ><i className="bi bi-trash3" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </>)}
        </div>
      )}
    </div>
  );
}

// ── Angebotsanfragen ────────────────────────────────────────────────────────────
const ANGEBOT_STATUSES = {
  new:     { label: 'Neu',          color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
  read:    { label: 'Gelesen',      color: '#5B21B6', bg: '#F5F3FF', border: '#DDD6FE' },
  replied: { label: 'Beantwortet',  color: '#065F46', bg: '#ECFDF5', border: '#6EE7B7' },
  closed:  { label: 'Geschlossen',  color: '#374151', bg: '#F3F4F6', border: '#E5E7EB' },
};

function AngebotBadge({ status }) {
  const s = ANGEBOT_STATUSES[status] || { label: status, color: '#374151', bg: '#F3F4F6', border: '#E5E7EB' };
  return (
    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 0, background: s.bg, color: s.color, border: `1px solid ${s.border}`, whiteSpace: 'nowrap' }}>
      {s.label}
    </span>
  );
}

function AngeboteTab() {
  const [list, setList]         = useState([]);
  const [total, setTotal]       = useState(0);
  const [page, setPage]         = useState(1);
  const [filter, setFilter]     = useState('');
  const [selected, setSelected] = useState(null);
  const [detail, setDetail]     = useState(null);
  const [loading, setLoading]   = useState(false);
  const LIMIT = 25;

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const qs = `?page=${page}&limit=${LIMIT}${filter ? `&status=${filter}` : ''}`;
      const data = await fetchAllAngebote(qs);
      setList(data.angebote || []);
      setTotal(data.total || 0);
    } catch { setList([]); }
    finally { setLoading(false); }
  }, [page, filter]);

  useEffect(() => { load(); }, [load]);

  const loadDetail = async (id) => {
    setSelected(id); setDetail(null);
    try { setDetail(await fetchAngebotDetail(id)); } catch { setDetail(null); }
    // refresh list so "new" → "read" is reflected
    load();
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateAngebotStatus(id, status);
      if (detail?.id === id) setDetail(d => ({ ...d, status }));
      setList(l => l.map(a => a.id === id ? { ...a, status } : a));
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: selected ? 'minmax(0,1fr) minmax(0,420px)' : '1fr', gap: 24, alignItems: 'start' }}>

      {/* Liste */}
      <div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <h2 style={{ fontSize: 15, fontWeight: 800, color: 'var(--dark)', flex: 1 }}>Angebotsanfragen ({total})</h2>
          <select className="input" value={filter} onChange={e => { setFilter(e.target.value); setPage(1); }} style={{ width: 180, fontSize: 13 }}>
            <option value="">Alle Status</option>
            {Object.entries(ANGEBOT_STATUSES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <button className="btn btn-outline btn-sm" onClick={load}><i className="bi bi-arrow-clockwise" /></button>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Laden…</div>
          ) : list.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Keine Anfragen.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    {['#', 'Unternehmen', 'Kontakt', 'Produkt', 'Status', 'Datum'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {list.map(a => (
                    <tr key={a.id} onClick={() => loadDetail(a.id)}
                      style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer', background: selected === a.id ? 'var(--accent-light)' : a.status === 'new' ? '#FEFCE8' : 'white' }}
                      onMouseEnter={e => { if (selected !== a.id) e.currentTarget.style.background = 'var(--bg)'; }}
                      onMouseLeave={e => { if (selected !== a.id) e.currentTarget.style.background = a.status === 'new' ? '#FEFCE8' : 'white'; }}
                    >
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--text-muted)' }}>#{a.id}</td>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: 'var(--dark)', whiteSpace: 'nowrap' }}>{a.company}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{a.name}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--dark)', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.product_type}</td>
                      <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}><AngebotBadge status={a.status} /></td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{fmtDate(a.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {total > LIMIT && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
            <button className="btn btn-outline btn-sm" disabled={page === 1} onClick={() => setPage(p => p - 1)}><i className="bi bi-chevron-left" /></button>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '0 8px' }}>Seite {page} / {Math.ceil(total / LIMIT)}</span>
            <button className="btn btn-outline btn-sm" disabled={page >= Math.ceil(total / LIMIT)} onClick={() => setPage(p => p + 1)}><i className="bi bi-chevron-right" /></button>
          </div>
        )}
      </div>

      {/* Détail */}
      {selected && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)' }}>Anfrage #{selected}</h2>
            <button onClick={() => { setSelected(null); setDetail(null); }} style={{ color: 'var(--text-muted)', padding: 6, background: 'none', border: 'none', cursor: 'pointer' }}>
              <i className="bi bi-x-lg" />
            </button>
          </div>

          {!detail ? (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 32, textAlign: 'center', color: 'var(--text-muted)' }}>Laden…</div>
          ) : (<>

            {/* Unternehmen */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Unternehmen</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
                {[
                  ['Firma', detail.company],
                  ['USt-IdNr.', detail.siret || '—'],
                  ['Ansprechpartner', detail.name],
                  ['E-Mail', detail.email],
                  ['Telefon', detail.phone || '—'],
                  ['Eingegangen', fmtDate(detail.created_at)],
                ].map(([k, v]) => (
                  <div key={k}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 600 }}>{k}</span>
                    <p style={{ color: 'var(--dark)', fontWeight: 600, marginTop: 1, wordBreak: 'break-all' }}>{v}</p>
                  </div>
                ))}
              </div>
              <a href={`mailto:${detail.email}`} className="btn btn-outline btn-sm" style={{ marginTop: 14, fontSize: 12, display: 'inline-flex' }}>
                <i className="bi bi-envelope" /> Antworten
              </a>
            </div>

            {/* Produkt */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Produktanfrage</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12, marginBottom: 12 }}>
                {[
                  ['Kategorie', detail.product_type],
                  ['Menge', detail.quantity || '—'],
                  ['Budget', detail.budget || '—'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 11, fontWeight: 600 }}>{k}</span>
                    <p style={{ color: 'var(--dark)', fontWeight: 600, marginTop: 1 }}>{v}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: 0, padding: '10px 12px', fontSize: 13, color: 'var(--dark)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                {detail.message}
              </div>
            </div>

            {/* Status */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 18 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>Status</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <AngebotBadge status={detail.status} />
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {Object.entries(ANGEBOT_STATUSES).filter(([k]) => k !== detail.status).map(([k, v]) => (
                  <button key={k} className="btn btn-outline btn-sm" onClick={() => handleStatusChange(detail.id, k)} style={{ fontSize: 11 }}>
                    → {v.label}
                  </button>
                ))}
              </div>
            </div>

          </>)}
        </div>
      )}
    </div>
  );
}

// ── Bankverbindung ──────────────────────────────────────────────────────────────
function SettingsTab() {
  const [form, setForm]       = useState({ beneficiaire: '', iban: '', bic: '', banque: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchBankSettings()
      .then(data => setForm({ beneficiaire: data.beneficiaire || '', iban: data.iban || '', bic: data.bic || '', banque: data.banque || '' }))
      .catch(() => setError('Fehler beim Laden der Bankverbindung.'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setSaving(true);
    try {
      await updateBankSettings(form);
      setSuccess('Bankverbindung erfolgreich gespeichert.');
    } catch (err) {
      setError(err.message || 'Speichern fehlgeschlagen.');
    } finally {
      setSaving(false);
    }
  };

  const field = (key, label, placeholder, hint) => (
    <div>
      <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 5 }}>{label}</label>
      <input className="input" required value={form[key]} placeholder={placeholder}
        onChange={e => { setSuccess(''); setForm(f => ({ ...f, [key]: e.target.value })); }}
        style={{ fontSize: 14 }}
      />
      {hint && <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{hint}</p>}
    </div>
  );

  return (
    <div style={{ maxWidth: 560 }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, color: 'var(--dark)' }}>Bankverbindung</h2>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Diese Daten werden dem Kunden nach der Bestellung angezeigt, damit er die Überweisung durchführen kann.</p>
      </div>

      {loading ? (
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Laden…</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {error   && <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 0, padding: '10px 14px', fontSize: 13, color: '#991B1B' }}>{error}</div>}
            {success && <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 0, padding: '10px 14px', fontSize: 13, color: '#065F46' }}><i className="bi bi-check-circle" style={{ marginRight: 6 }} />{success}</div>}

            {field('beneficiaire', 'Kontoinhaber',  'LA REMORQUE M',   'Name des Unternehmens oder der Person, der das Konto gehört.')}
            {field('iban',         'IBAN',           'FR76 XXXX XXXX XXXX XXXX XXXX XXX', 'IBAN-Code des Bankkontos (mit oder ohne Leerzeichen).')}
            {field('bic',          'BIC / SWIFT',    'XXXXXXXX',        'BIC/SWIFT-Code der Bank (8 oder 11 Zeichen, Großbuchstaben).')}
            {field('banque',       'Bankname',       'Crédit Agricole', '')}

            <div style={{ paddingTop: 4, borderTop: '1px solid var(--border)' }}>
              <button type="submit" className="btn btn-primary" disabled={saving} style={{ fontSize: 14 }}>
                {saving
                  ? <><i className="bi bi-arrow-repeat" style={{ marginRight: 6 }} />Wird gespeichert…</>
                  : <><i className="bi bi-floppy" style={{ marginRight: 6 }} />Änderungen speichern</>}
              </button>
            </div>
          </div>

          <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: 'var(--r-lg)', padding: 20, marginTop: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0E7490', marginBottom: 8 }}><i className="bi bi-info-circle" style={{ marginRight: 5 }} />Vorschau — was der Kunde sieht</p>
            <div style={{ fontSize: 13, color: '#0F172A', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div><span style={{ fontWeight: 700, color: '#64748B', width: 120, display: 'inline-block' }}>Kontoinhaber:</span>{form.beneficiaire || '—'}</div>
              <div><span style={{ fontWeight: 700, color: '#64748B', width: 120, display: 'inline-block' }}>IBAN:</span>{form.iban || '—'}</div>
              <div><span style={{ fontWeight: 700, color: '#64748B', width: 120, display: 'inline-block' }}>BIC:</span>{form.bic || '—'}</div>
              <div><span style={{ fontWeight: 700, color: '#64748B', width: 120, display: 'inline-block' }}>Bank:</span>{form.banque || '—'}</div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Page principale ─────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('orders');

  useEffect(() => {
    checkAuth().then(r => {
      setAuth(r.authenticated);
      if (r.authenticated) setUser(r.user);
    }).catch(() => setAuth(false));
  }, []);

  const handleLogout = async () => {
    await logout().catch(() => {});
    setAuth(false); setUser(null);
  };

  if (auth === null) return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <p style={{ color: 'var(--text-muted)' }}>Laden…</p>
    </main>
  );
  if (!auth) return <LoginView onLogin={(u) => { setUser(u); setAuth(true); }} />;

  const TABS = [
    { id: 'orders',   icon: 'bi-bag',           label: 'Bestellungen' },
    { id: 'angebote', icon: 'bi-file-earmark-text', label: 'Angebote' },
    { id: 'settings', icon: 'bi-bank',           label: 'Bankverbindung' },
  ];

  return (
    <main style={{ background: 'var(--bg)', minHeight: '80vh' }}>
      {/* Topbar */}
      <div style={{ background: 'var(--dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{ padding: '14px 18px', fontSize: 13, fontWeight: tab === t.id ? 700 : 500, color: tab === t.id ? 'white' : 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer', borderBottom: tab === t.id ? '2px solid var(--accent)' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: 7, transition: 'color .15s' }}
              >
                <i className={`bi ${t.icon}`} />{t.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{user?.username}</span>
            <button onClick={handleLogout} className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              <i className="bi bi-box-arrow-right" /> Abmelden
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '28px 24px 60px' }}>
        {tab === 'orders'   && <OrdersTab />}
        {tab === 'angebote' && <AngeboteTab />}
        {tab === 'settings' && <SettingsTab />}
      </div>
    </main>
  );
}
