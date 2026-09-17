import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchOrderStatus } from '../api/client';

const ORDER_REF_REGEX = /^NXT-\d{4}-[A-Z0-9]{6}$/;

const ALL_STEPS = [
  { label: 'Bestellung eingegangen',  sub: 'Ihre Bestellung wurde erfolgreich registriert.',  icon: 'bi-check-lg',     status: 'pending' },
  { label: 'Zahlung ausstehend',      sub: 'Wir warten auf den Eingang Ihrer Überweisung.',   icon: 'bi-hourglass-split', status: 'payment_pending' },
  { label: 'Zahlung bestätigt',       sub: 'Ihre Zahlung wurde empfangen und bestätigt.',      icon: 'bi-bank2',        status: 'payment_confirmed' },
  { label: 'In Vorbereitung',         sub: 'Ihre Bestellung wird gerade bearbeitet.',          icon: 'bi-box-seam',     status: 'processing' },
  { label: 'Versandt',                sub: 'Ihre Bestellung ist unterwegs.',                   icon: 'bi-truck',        status: 'shipped' },
  { label: 'Geliefert',               sub: 'Bestellung erfolgreich zugestellt.',               icon: 'bi-house-check',  status: 'delivered' },
];

const STATUS_TO_STEP = {
  pending:           0,
  payment_pending:   1,
  payment_confirmed: 2,
  processing:        3,
  shipped:           4,
  delivered:         5,
};

const NOTIF_STYLES = {
  info:    { color: 'var(--accent)', bg: 'var(--accent-light)', border: 'rgba(224,38,26,0.25)', icon: 'bi-info-circle-fill' },
  success: { color: 'var(--green)',  bg: '#ECFDF5',             border: '#6EE7B7',              icon: 'bi-check-circle-fill' },
  warning: { color: '#D97706',       bg: '#FFFBEB',             border: '#FDE68A',              icon: 'bi-exclamation-triangle-fill' },
};

export default function TrackingPage() {
  const location = useLocation();
  const [input,   setInput]   = useState('');
  const [result,  setResult]  = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  useEffect(() => {
    const ref = location.state?.orderRef;
    if (ref) { setInput(ref); doTrack(ref); }
  }, []);

  const doTrack = async (override) => {
    const val = (override || input).trim().toUpperCase();
    if (!val)                       { setError('Bitte geben Sie eine Bestellnummer ein.'); return; }
    if (!ORDER_REF_REGEX.test(val)) { setError('Ungültiges Format. Beispiel: NXT-2026-A3K7BM'); setResult(null); return; }

    setError('');
    setLoading(true);
    setResult(null);

    try {
      const data = await fetchOrderStatus(val);
      setResult(data);
    } catch (err) {
      if (err.message?.includes('introuvable') || err.message?.includes('404')) {
        setError('Keine Bestellung mit dieser Nummer gefunden.');
      } else {
        setError('Fehler beim Abrufen der Bestellung. Bitte versuchen Sie es erneut.');
      }
    } finally {
      setLoading(false);
    }
  };

  const step          = result ? (STATUS_TO_STEP[result.status] ?? 0) : 0;
  const notifications = result?.notifications ?? [];
  const isCancelled   = result?.status === 'cancelled';
  const isRefunded    = result?.status === 'refunded';
  const isTerminal    = isCancelled || isRefunded;

  const fmt = (iso) =>
    new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>AUFTRAGSVERFOLGUNG</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>
            Bestellung verfolgen
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '64px 24px 80px', maxWidth: 640 }}>

        {/* Suchfeld */}
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 32, marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6, color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: 9 }}>
            <i className="bi bi-search" style={{ color: 'var(--accent)' }} /> Bestellnummer eingeben
          </h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
            Sie finden die Nummer auf Ihrer Bestätigungsseite oder in Ihrer Bestellbestätigungs-E-Mail.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              className="input"
              placeholder="z. B. NXT-2026-A3K7BM"
              value={input}
              onChange={(e) => { setInput(e.target.value.toUpperCase()); setError(''); setResult(null); }}
              onKeyDown={(e) => e.key === 'Enter' && doTrack()}
              style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.04em', borderColor: error ? 'var(--sale)' : undefined }}
            />
            <button className="btn btn-primary" style={{ flexShrink: 0 }} onClick={() => doTrack()} disabled={loading}>
              {loading ? <i className="bi bi-hourglass-split" /> : <i className="bi bi-search" />} Suchen
            </button>
          </div>
          {error && (
            <p style={{ fontSize: 12, color: 'var(--sale)', marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <i className="bi bi-exclamation-circle" /> {error}
            </p>
          )}
        </div>

        {result && (
          <>
            {/* Notifications */}
            {notifications.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {notifications.map((n, i) => {
                  const s = NOTIF_STYLES[n.type] || NOTIF_STYLES.info;
                  return (
                    <div key={i} style={{
                      padding: '14px 18px', borderRadius: 'var(--r-md)',
                      background: s.bg, border: `1.5px solid ${s.border}`,
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                    }}>
                      <i className={`bi ${s.icon}`} style={{ color: s.color, fontSize: 16, flexShrink: 0, marginTop: 1 }} />
                      <div>
                        <p style={{ fontSize: 13, color: 'var(--dark)', lineHeight: 1.6 }}>{n.message}</p>
                        <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{fmt(n.created_at)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bestellkarte */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: 32 }}>

              {/* Bestellnummer Badge */}
              <div style={{ background: 'var(--accent-light)', border: '1.5px solid var(--accent)', borderRadius: 'var(--r-md)', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <i className="bi bi-tag-fill" style={{ color: 'var(--accent)', fontSize: 18 }} />
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Bestellnummer</p>
                  <p style={{ fontSize: 16, fontWeight: 900, color: 'var(--dark)', fontFamily: 'monospace', letterSpacing: '0.04em' }}>{result.ref}</p>
                </div>
              </div>

              {/* Statut annulé / remboursé */}
              {isTerminal ? (
                <div style={{
                  padding: '18px 22px', borderRadius: 'var(--r-md)', marginBottom: 8,
                  background: isCancelled ? '#FEF2F2' : '#F3F4F6',
                  border: `1px solid ${isCancelled ? '#FECACA' : '#E5E7EB'}`,
                  display: 'flex', gap: 12, alignItems: 'center',
                }}>
                  <i className={`bi ${isCancelled ? 'bi-x-circle-fill' : 'bi-arrow-counterclockwise'}`}
                     style={{ fontSize: 22, color: isCancelled ? '#DC2626' : '#6B7280', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 800, color: isCancelled ? '#991B1B' : '#374151', fontSize: 14 }}>
                      {isCancelled ? 'Bestellung storniert' : 'Bestellung rückerstattet'}
                    </p>
                    <p style={{ fontSize: 12, color: isCancelled ? '#B91C1C' : '#6B7280', marginTop: 3 }}>
                      {isCancelled
                        ? 'Diese Bestellung wurde storniert. Bitte kontaktieren Sie uns bei Fragen.'
                        : 'Die Rückerstattung wurde veranlasst. Kontaktieren Sie uns bei Fragen.'}
                    </p>
                  </div>
                </div>
              ) : (
                // Timeline des étapes
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {ALL_STEPS.map(({ label, sub, icon }, i) => {
                    const done   = i < step;
                    const active = i === step;
                    return (
                      <div key={label} style={{ display: 'flex', gap: 16, position: 'relative' }}>
                        {i < ALL_STEPS.length - 1 && (
                          <div style={{
                            position: 'absolute', left: 15, top: 36, bottom: 0, width: 2,
                            background: done ? 'var(--green)' : 'var(--border)', zIndex: 0,
                          }} />
                        )}
                        <div style={{
                          width: 32, height: 32, borderRadius: 0, flexShrink: 0, zIndex: 1,
                          background: done ? 'var(--green)' : active ? 'var(--accent)' : 'var(--bg)',
                          border: `2px solid ${done ? 'var(--green)' : active ? 'var(--accent)' : 'var(--border)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <i className={`bi ${done ? icon : active ? 'bi-hourglass-split' : 'bi-circle'}`}
                             style={{ fontSize: 13, color: done || active ? 'white' : 'var(--text-light)' }} />
                        </div>
                        <div style={{ paddingBottom: i < ALL_STEPS.length - 1 ? 24 : 0, paddingTop: 4 }}>
                          <p style={{ fontSize: 14, fontWeight: done || active ? 700 : 400, color: done || active ? 'var(--dark)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                            {label}
                            {active && (
                              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-light)', padding: '2px 8px', borderRadius: 0 }}>
                                Aktuell
                              </span>
                            )}
                            {done && <i className="bi bi-check-circle-fill" style={{ color: 'var(--green)', fontSize: 14 }} />}
                          </p>
                          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
