import { useState, useEffect, useCallback } from 'react';
import {
  checkAuth, login, logout,
  fetchAllOrders, fetchOrderDetail,
  updateOrderStatus, addNotification, deleteNotification,
  updatePaymentStatus,
} from '../api/client';

// ─── Constantes ───────────────────────────────────────────────────────────────

const STATUS_LABELS = {
  pending:           'Bestellung eingegangen',
  payment_pending:   'Zahlung ausstehend',
  payment_confirmed: 'Zahlung bestätigt',
  processing:        'In Vorbereitung',
  shipped:           'Versandt',
  delivered:         'Geliefert',
  cancelled:         'Storniert',
  refunded:          'Rückerstattet',
};

const STATUS_COLORS = {
  pending:           { bg: '#FEF3C7', color: '#92400E' },
  payment_pending:   { bg: '#FEF3C7', color: '#92400E' },
  payment_confirmed: { bg: '#DBEAFE', color: '#1D4ED8' },
  processing:        { bg: '#EDE9FE', color: '#5B21B6' },
  shipped:           { bg: '#F3E8FF', color: '#6B21A8' },
  delivered:         { bg: '#D1FAE5', color: '#065F46' },
  cancelled:         { bg: '#FEE2E2', color: '#991B1B' },
  refunded:          { bg: '#F3F4F6', color: '#374151' },
};

const NEXT_STATUS_LABELS = {
  payment_pending:   'Zahlung erhalten (ausstehend)',
  payment_confirmed: 'Zahlung bestätigt',
  processing:        'In Vorbereitung',
  shipped:           'Versandt',
  delivered:         'Geliefert',
  cancelled:         'Stornieren',
  refunded:          'Rückerstatten',
};

const NEXT_STATUS_STYLE = {
  cancelled: { background: '#FEE2E2', color: '#991B1B', border: '#FECACA' },
  refunded:  { background: '#F3F4F6', color: '#374151', border: '#E5E7EB' },
};

const NOTIF_TYPES = [
  { id: 'info',    label: 'Information', color: 'var(--accent)', bg: 'var(--accent-light)', icon: 'bi-info-circle-fill' },
  { id: 'success', label: 'Erfolg',      color: 'var(--green)',  bg: '#ECFDF5',             icon: 'bi-check-circle-fill' },
  { id: 'warning', label: 'Hinweis',     color: '#D97706',       bg: '#FFFBEB',             icon: 'bi-exclamation-triangle-fill' },
];

const PAYMENT_STATUS_LABELS = {
  pending:   { label: 'Ausstehend', bg: '#FEF3C7', color: '#92400E' },
  confirmed: { label: 'Bestätigt',  bg: '#D1FAE5', color: '#065F46' },
  rejected:  { label: 'Abgelehnt', bg: '#FEE2E2', color: '#991B1B' },
  cancelled: { label: 'Storniert', bg: '#F3F4F6', color: '#374151' },
  refunded:  { label: 'Rückerstattet', bg: '#F3F4F6', color: '#374151' },
};

// ─── Composants utilitaires ──────────────────────────────────────────────────

function StatusBadge({ status }) {
  const s = STATUS_COLORS[status] || { bg: '#F3F4F6', color: '#374151' };
  return (
    <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: s.bg, color: s.color, whiteSpace: 'nowrap' }}>
      {STATUS_LABELS[status] || status}
    </span>
  );
}

function fmt(iso) {
  return new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function fmtEur(n) {
  return Number(n).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function AdminPage() {
  const [view,         setView]         = useState('checking'); // checking | login | list | detail
  const [loginUser,    setLoginUser]     = useState('');
  const [loginPass,    setLoginPass]     = useState('');
  const [loginError,   setLoginError]    = useState('');
  const [loginLoading, setLoginLoading]  = useState(false);

  const [orders,       setOrders]        = useState([]);
  const [ordersTotal,  setOrdersTotal]   = useState(0);
  const [statusFilter, setStatusFilter]  = useState('');
  const [listLoading,  setListLoading]   = useState(false);

  const [order,        setOrder]         = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError,  setDetailError]   = useState('');

  const [notifType,    setNotifType]     = useState('info');
  const [notifText,    setNotifText]     = useState('');
  const [notifLoading, setNotifLoading]  = useState(false);

  const [saved,        setSaved]         = useState('');

  const flash = (msg = 'Gespeichert') => {
    setSaved(msg);
    setTimeout(() => setSaved(''), 2000);
  };

  // ─── Vérification session au mount ────────────────────────────────────────

  useEffect(() => {
    checkAuth()
      .then((data) => {
        if (data.authenticated) setView('list');
        else setView('login');
      })
      .catch(() => setView('login'));
  }, []);

  // ─── Chargement des commandes ─────────────────────────────────────────────

  const loadOrders = useCallback(async (status = statusFilter) => {
    setListLoading(true);
    try {
      const qs = status ? `?status=${status}` : '';
      const data = await fetchAllOrders(qs);
      setOrders(data.orders || []);
      setOrdersTotal(data.total || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setListLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    if (view === 'list') loadOrders();
  }, [view, loadOrders]);

  // ─── Détail commande ──────────────────────────────────────────────────────

  const openDetail = async (ref) => {
    setDetailLoading(true);
    setDetailError('');
    setOrder(null);
    setView('detail');
    try {
      const data = await fetchOrderDetail(ref);
      setOrder(data);
    } catch (err) {
      setDetailError(err.message);
    } finally {
      setDetailLoading(false);
    }
  };

  const refreshDetail = async () => {
    if (!order?.ref) return;
    const data = await fetchOrderDetail(order.ref);
    setOrder(data);
  };

  // ─── Connexion ────────────────────────────────────────────────────────────

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginUser.trim() || !loginPass) return;
    setLoginLoading(true);
    setLoginError('');
    try {
      await login(loginUser.trim(), loginPass);
      setLoginPass('');
      setView('list');
    } catch (err) {
      setLoginError(err.message || 'Ungültige Anmeldedaten');
    } finally {
      setLoginLoading(false);
    }
  };

  // ─── Déconnexion ──────────────────────────────────────────────────────────

  const handleLogout = async () => {
    await logout().catch(() => {});
    setView('login');
    setOrders([]);
    setOrder(null);
    setLoginUser('');
    setLoginPass('');
  };

  // ─── Changement de statut ─────────────────────────────────────────────────

  const handleStatusChange = async (newStatus) => {
    if (!order) return;
    try {
      await updateOrderStatus(order.ref, newStatus);
      flash(`Status: ${STATUS_LABELS[newStatus] || newStatus}`);
      await refreshDetail();
      await loadOrders();
    } catch (err) {
      alert(err.message);
    }
  };

  // ─── Notifications ────────────────────────────────────────────────────────

  const handleAddNotif = async () => {
    if (!notifText.trim() || !order) return;
    setNotifLoading(true);
    try {
      await addNotification(order.ref, notifType, notifText.trim());
      setNotifText('');
      flash('Benachrichtigung gesendet');
      await refreshDetail();
    } catch (err) {
      alert(err.message);
    } finally {
      setNotifLoading(false);
    }
  };

  const handleDeleteNotif = async (id) => {
    if (!order) return;
    try {
      await deleteNotification(order.ref, id);
      await refreshDetail();
    } catch (err) {
      alert(err.message);
    }
  };

  // ─── Paiements ────────────────────────────────────────────────────────────

  const handlePaymentAction = async (paymentId, status) => {
    try {
      await updatePaymentStatus(paymentId, status);
      flash(`Zahlung ${status === 'confirmed' ? 'bestätigt' : 'abgelehnt'}`);
      await refreshDetail();
      await loadOrders();
    } catch (err) {
      alert(err.message);
    }
  };

  // ─── Rendering ────────────────────────────────────────────────────────────

  const Header = ({ back } = {}) => (
    <div style={{ background: 'var(--dark)', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {back && (
            <button onClick={() => { setView('list'); setOrder(null); }} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', fontSize: 13 }}>
              <i className="bi bi-arrow-left" />
            </button>
          )}
          <i className="bi bi-shield-lock-fill" style={{ color: 'var(--accent)', fontSize: 18 }} />
          <h1 style={{ fontSize: 17, fontWeight: 900, color: 'white' }}>
            {back ? `Bestellung ${order?.ref || '…'}` : 'Adminbereich'}
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {saved && (
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', background: '#ECFDF5', padding: '5px 12px', borderRadius: 20 }}>
              <i className="bi bi-check-lg" /> {saved}
            </span>
          )}
          <button className="btn" style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }} onClick={handleLogout}>
            <i className="bi bi-box-arrow-right" /> Abmelden
          </button>
        </div>
      </div>
    </div>
  );

  // ── Vérification initiale ──
  if (view === 'checking') {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <i className="bi bi-hourglass-split" style={{ fontSize: 32, color: 'var(--accent)' }} />
      </main>
    );
  }

  // ── Connexion ──
  if (view === 'login') {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
        <form onSubmit={handleLogin} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 40, width: 340, textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <i className="bi bi-shield-lock-fill" style={{ fontSize: 24, color: 'white' }} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 900, color: 'var(--dark)', marginBottom: 6 }}>Adminbereich</h1>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>Melden Sie sich an, um fortzufahren.</p>

          <input
            className="input" type="text" placeholder="Benutzername" autoComplete="username"
            value={loginUser} onChange={(e) => setLoginUser(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <input
            className="input" type="password" placeholder="Passwort" autoComplete="current-password"
            value={loginPass} onChange={(e) => setLoginPass(e.target.value)}
            style={{ marginBottom: 10 }}
          />

          {loginError && (
            <p style={{ fontSize: 12, color: 'var(--sale)', marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <i className="bi bi-exclamation-triangle-fill" /> {loginError}
            </p>
          )}

          <button className="btn btn-primary btn-lg btn-full" type="submit" disabled={loginLoading || !loginUser.trim() || !loginPass}>
            {loginLoading ? <><i className="bi bi-hourglass-split" /> Wird überprüft…</> : <><i className="bi bi-unlock" /> Anmelden</>}
          </button>
        </form>
      </main>
    );
  }

  // ── Liste des commandes ──
  if (view === 'list') {
    return (
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <div className="container" style={{ padding: '32px 24px 80px' }}>

          {/* Filtres */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {['', 'pending', 'payment_pending', 'payment_confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].map((s) => (
              <button key={s || 'all'} onClick={() => { setStatusFilter(s); loadOrders(s); }}
                style={{
                  padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  background: statusFilter === s ? 'var(--dark)' : 'white',
                  color:      statusFilter === s ? 'white'      : 'var(--text-muted)',
                  border:     statusFilter === s ? '1.5px solid var(--dark)' : '1px solid var(--border)',
                }}>
                {s ? (STATUS_LABELS[s] || s) : `Alle (${ordersTotal})`}
              </button>
            ))}
            <button onClick={() => loadOrders()} style={{ marginLeft: 'auto', padding: '6px 12px', borderRadius: 6, fontSize: 12, background: 'white', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <i className="bi bi-arrow-clockwise" />
            </button>
          </div>

          {listLoading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <i className="bi bi-hourglass-split" style={{ fontSize: 32, display: 'block', marginBottom: 12 }} /> Laden…
            </div>
          ) : orders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <i className="bi bi-inbox" style={{ fontSize: 40, display: 'block', marginBottom: 12 }} />
              Keine Bestellungen gefunden.
            </div>
          ) : (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              {orders.map((o, i) => (
                <button key={o.id} onClick={() => openDetail(o.ref)} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto auto auto',
                  gap: 16, alignItems: 'center',
                  padding: '16px 20px',
                  borderBottom: i < orders.length - 1 ? '1px solid var(--border)' : undefined,
                  background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
                  transition: 'background 0.12s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                >
                  <div>
                    <p style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 13, color: 'var(--dark)', marginBottom: 3 }}>{o.ref}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{o.first_name} {o.last_name} · {o.email}</p>
                  </div>
                  <StatusBadge status={o.status} />
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', whiteSpace: 'nowrap' }}>{fmtEur(o.total)}</span>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{fmt(o.created_at)}</p>
                    <i className="bi bi-chevron-right" style={{ fontSize: 12, color: 'var(--text-light)' }} />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    );
  }

  // ── Détail commande ──
  if (view === 'detail') {
    if (detailLoading) {
      return (
        <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
          <Header back />
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            <i className="bi bi-hourglass-split" style={{ fontSize: 32, display: 'block', marginBottom: 12 }} /> Laden…
          </div>
        </main>
      );
    }

    if (detailError || !order) {
      return (
        <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
          <Header back />
          <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--sale)' }}>
            <i className="bi bi-exclamation-triangle" style={{ fontSize: 32, display: 'block', marginBottom: 12 }} />
            {detailError || 'Bestellung nicht gefunden'}
          </div>
        </main>
      );
    }

    return (
      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Header back />
        <div className="container" style={{ padding: '32px 24px 80px', maxWidth: 800 }}>

          {/* Infos client + statut */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 24, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
              <div>
                <p style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 900, color: 'var(--dark)', marginBottom: 4 }}>{order.ref}</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Erstellt am {fmt(order.created_at)}</p>
              </div>
              <StatusBadge status={order.status} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 13 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Kunde</p>
                <p style={{ fontWeight: 700 }}>{order.first_name} {order.last_name}</p>
                <p style={{ color: 'var(--text-muted)' }}>{order.email}</p>
                {order.phone && <p style={{ color: 'var(--text-muted)' }}>{order.phone}</p>}
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Lieferadresse</p>
                <p>{order.del_address}</p>
                <p>{order.del_postal_code} {order.del_city}</p>
                <p style={{ color: 'var(--text-muted)' }}>{order.del_country}</p>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 14, color: 'var(--dark)' }}>
              <i className="bi bi-box-seam" style={{ color: 'var(--accent)', marginRight: 8 }} />Artikel
            </div>
            {(order.items || []).map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: 14, padding: '14px 20px', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                {item.product_image && (
                  <img src={item.product_image} alt={item.product_name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700 }}>{item.product_name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>{item.product_slug}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: 700 }}>{fmtEur(item.line_total)}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{fmtEur(item.unit_price)} × {item.quantity}</p>
                </div>
              </div>
            ))}
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'flex-end', gap: 32, fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)' }}>Zwischensumme : {fmtEur(order.subtotal)}</span>
              <span style={{ fontWeight: 900, fontSize: 15, color: 'var(--dark)' }}>Gesamt : {fmtEur(order.total)}</span>
            </div>
          </div>

          {/* Paiements */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 14, color: 'var(--dark)' }}>
              <i className="bi bi-bank2" style={{ color: 'var(--accent)', marginRight: 8 }} />Zahlungen
            </div>
            {(order.payments || []).map((p) => {
              const ps = PAYMENT_STATUS_LABELS[p.status] || { label: p.status, bg: '#F3F4F6', color: '#374151' };
              return (
                <div key={p.id} style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 700 }}>{fmtEur(p.amount)} — {p.payment_type === 'deposit' ? 'Anzahlung' : p.payment_type === 'balance' ? 'Restbetrag' : 'Vollzahlung'}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Ref : {p.transaction_ref || '—'} · {fmt(p.created_at)}</p>
                    {p.notes && <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{p.notes}</p>}
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700, background: ps.bg, color: ps.color }}>{ps.label}</span>
                  {p.status === 'pending' && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => handlePaymentAction(p.id, 'confirmed')} style={{ padding: '5px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700, background: '#D1FAE5', color: '#065F46', border: '1px solid #6EE7B7', cursor: 'pointer' }}>
                        <i className="bi bi-check-lg" /> Bestätigen
                      </button>
                      <button onClick={() => handlePaymentAction(p.id, 'rejected')} style={{ padding: '5px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700, background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA', cursor: 'pointer' }}>
                        <i className="bi bi-x-lg" /> Ablehnen
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Statut — transitions */}
          {(order.allowedTransitions || []).length > 0 && (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 24, marginBottom: 20 }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)', marginBottom: 14 }}>
                <i className="bi bi-arrow-right-circle" style={{ color: 'var(--accent)', marginRight: 8 }} />Status ändern
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {order.allowedTransitions.map((ns) => {
                  const danger = NEXT_STATUS_STYLE[ns];
                  return (
                    <button key={ns} onClick={() => handleStatusChange(ns)} style={{
                      padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                      background: danger ? danger.background : 'var(--accent)',
                      color:      danger ? danger.color      : 'white',
                      border:     danger ? `1px solid ${danger.border}` : 'none',
                    }}>
                      {NEXT_STATUS_LABELS[ns] || STATUS_LABELS[ns] || ns}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Historique */}
          {(order.history || []).length > 0 && (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 24, marginBottom: 20 }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)', marginBottom: 14 }}>
                <i className="bi bi-clock-history" style={{ color: 'var(--accent)', marginRight: 8 }} />Statusverlauf
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {order.history.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 12, color: 'var(--text-muted)', alignItems: 'center' }}>
                    <i className="bi bi-circle-fill" style={{ fontSize: 6, color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{h.from_status ? `${STATUS_LABELS[h.from_status] || h.from_status} →` : ''} <strong style={{ color: 'var(--dark)' }}>{STATUS_LABELS[h.to_status] || h.to_status}</strong></span>
                    {h.reason && <span>· {h.reason}</span>}
                    {h.username && <span>· {h.username}</span>}
                    <span style={{ marginLeft: 'auto', flexShrink: 0 }}>{fmt(h.created_at)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notification */}
          <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 24, marginBottom: 20 }}>
            <p style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)', marginBottom: 14 }}>
              <i className="bi bi-bell" style={{ color: 'var(--accent)', marginRight: 8 }} />Benachrichtigung senden
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {NOTIF_TYPES.map((t) => (
                <button key={t.id} type="button" onClick={() => setNotifType(t.id)} style={{
                  padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  background: notifType === t.id ? t.bg : 'var(--bg)',
                  border: `1.5px solid ${notifType === t.id ? t.color : 'var(--border)'}`,
                  color: notifType === t.id ? t.color : 'var(--text-muted)',
                }}>
                  <i className={`bi ${t.icon}`} style={{ marginRight: 4 }} />{t.label}
                </button>
              ))}
            </div>
            <textarea
              className="input" rows={3}
              placeholder="Nachricht für den Kunden…"
              value={notifText}
              onChange={(e) => setNotifText(e.target.value)}
              style={{ resize: 'vertical', marginBottom: 12 }}
              maxLength={1000}
            />
            <button className="btn btn-primary" onClick={handleAddNotif} disabled={!notifText.trim() || notifLoading}>
              <i className="bi bi-send" /> {notifLoading ? 'Wird gesendet…' : 'Senden'}
            </button>
          </div>

          {/* Notifications envoyées */}
          {(order.notifications || []).length > 0 && (
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 24 }}>
              <p style={{ fontSize: 14, fontWeight: 800, color: 'var(--dark)', marginBottom: 14 }}>
                <i className="bi bi-chat-left-text" style={{ color: 'var(--accent)', marginRight: 8 }} />Gesendete Nachrichten
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {order.notifications.map((n) => {
                  const t = NOTIF_TYPES.find((x) => x.id === n.type) || NOTIF_TYPES[0];
                  return (
                    <div key={n.id} style={{
                      padding: '12px 16px', borderRadius: 'var(--r-md)',
                      background: t.bg, border: `1px solid ${t.color}30`,
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                    }}>
                      <i className={`bi ${t.icon}`} style={{ color: t.color, fontSize: 15, flexShrink: 0, marginTop: 1 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, color: 'var(--dark)', lineHeight: 1.55 }}>{n.message}</p>
                        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                          {fmt(n.created_at)}{n.sent_by_username ? ` · ${n.sent_by_username}` : ''}
                        </p>
                      </div>
                      <button onClick={() => handleDeleteNotif(n.id)} style={{ color: 'var(--text-light)', background: 'none', border: 'none', cursor: 'pointer', padding: 2, flexShrink: 0 }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--sale)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-light)'; }}>
                        <i className="bi bi-trash3" style={{ fontSize: 14 }} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </main>
    );
  }

  return null;
}
