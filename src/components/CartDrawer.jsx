import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, remove, update, total, count, open, setOpen } = useCart();
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState('full');
  const fmt = (n) => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  const shipping = 0;
  const grand = total + shipping;
  const amountDue = paymentType === 'deposit' ? grand * 0.5 : grand;

  if (!open) return null;

  return (
    <>
      <div className="overlay" onClick={() => setOpen(false)} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 300,
        width: 'min(440px, 100vw)',
        background: 'white', display: 'flex', flexDirection: 'column',
        boxShadow: 'var(--shadow-xl)',
        animation: 'slideRight 0.25s ease',
      }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--dark)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="bi bi-cart3" style={{ fontSize: 20, color: 'white' }} />
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>
              Warenkorb {count > 0 && <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>({count})</span>}
            </h2>
          </div>
          <button onClick={() => setOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', padding: 8, borderRadius: 0, transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <i className="bi bi-x-lg" style={{ fontSize: 20 }} />
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <i className="bi bi-cart3" style={{ fontSize: 56, color: 'var(--border-strong)', display: 'block', marginBottom: 16 }} />
              <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 20 }}>Keine Produkte im Warenkorb.</p>
              <button className="btn btn-outline btn-sm" onClick={() => setOpen(false)}>Weiter einkaufen</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 72, height: 56, borderRadius: 0, overflow: 'hidden', flexShrink: 0, background: 'var(--bg)' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.subtitle}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: 0, overflow: 'hidden' }}>
                        <button onClick={() => update(item.id, item.qty - 1)} style={{ padding: '4px 10px', fontSize: 16, color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                          <i className="bi bi-dash" />
                        </button>
                        <span style={{ padding: '4px 10px', fontSize: 13, fontWeight: 700, borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>{item.qty}</span>
                        <button onClick={() => update(item.id, item.qty + 1)} style={{ padding: '4px 10px', fontSize: 16, color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                          <i className="bi bi-plus" />
                        </button>
                      </div>
                      <span style={{ fontWeight: 800, fontSize: 15, color: 'var(--dark)' }}>{fmt(item.price * item.qty)}</span>
                    </div>
                  </div>
                  <button onClick={() => remove(item.id)} style={{ color: 'var(--text-light)', alignSelf: 'flex-start', padding: 4, borderRadius: 0, transition: 'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--sale)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-light)'}
                  >
                    <i className="bi bi-trash3" style={{ fontSize: 15 }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>

            {/* Totaux */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)' }}>
                <span>Zwischensumme</span><span>{fmt(total)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>
                <span>Versand</span><span>Kostenlos</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>Gesamt</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.02em' }}>{fmt(grand)}</span>
              </div>
            </div>

            {/* Choix règlement */}
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
                Zahlungsart
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { id: 'full', label: 'Vollständige Zahlung', sub: fmt(grand) },
                  { id: 'deposit', label: '50 % Anzahlung', sub: fmt(grand * 0.5) },
                ].map(opt => {
                  const active = paymentType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPaymentType(opt.id)}
                      style={{
                        padding: '10px 12px', borderRadius: 'var(--r-md)', cursor: 'pointer', textAlign: 'left',
                        border: `2px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                        background: active ? 'var(--accent-light)' : 'white',
                        transition: 'all 0.15s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <div style={{
                          width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                          border: `2px solid ${active ? 'var(--accent)' : 'var(--border-strong)'}`,
                          background: active ? 'var(--accent)' : 'white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {active && <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'white' }} />}
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 700, color: active ? 'var(--accent)' : 'var(--dark)' }}>{opt.label}</span>
                      </div>
                      <p style={{ fontSize: 13, fontWeight: 900, color: active ? 'var(--accent)' : 'var(--dark)', paddingLeft: 20 }}>{opt.sub}</p>
                      {opt.id === 'deposit' && (
                        <p style={{ fontSize: 10, color: 'var(--text-muted)', paddingLeft: 20, marginTop: 1 }}>
                          Restbetrag {fmt(grand * 0.5)} bei Lieferung
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg btn-full"
              onClick={() => { setOpen(false); navigate('/checkout', { state: { paymentType } }); }}
            >
              <i className="bi bi-lock" /> Zur Kasse
            </button>
            <button className="btn btn-ghost btn-full" style={{ marginTop: 8, fontSize: 13 }} onClick={() => setOpen(false)}>
              Weiter einkaufen
            </button>
          </div>
        )}
      </div>
    </>
  );
}
