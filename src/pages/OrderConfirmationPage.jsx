import { useEffect } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { fmtEur } from '../utils/fmt';

const SESSION_KEY = 'nexus_order_confirmation';

export default function OrderConfirmationPage() {
  const location = useLocation();
  const isMobile = useBreakpoint(600);

  // Restore state from sessionStorage on refresh
  const state = location.state || (() => {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  })();

  // Persist state so page survives refresh
  useEffect(() => {
    if (state?.orderRef) {
      try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(state)); }
      catch {}
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!state?.orderRef) {
    return <Navigate to="/" replace />;
  }
  const { orderRef, bank, paymentType, total, amountDueNow: serverAmount } = state;
  const fmt = fmtEur;

  const bankRows = [
    ['Empfänger',        bank?.beneficiaire || '—', false],
    ['IBAN',             bank?.iban         || '—', true],
    ['BIC / SWIFT',      bank?.bic          || '—', true],
    ['Bank',             bank?.banque       || '—', false],
    ['Verwendungszweck', orderRef,                  false],
  ];

  // Montant calculé côté serveur (priorité) — fallback client si state incomplet
  const amountDue = serverAmount ?? (paymentType === 'deposit' ? total * 0.5 : total);

  const steps = [
    <>Melden Sie sich bei Ihrer Bank an und initiieren Sie eine Überweisung mit den untenstehenden Bankdaten.</>,
    <>Tragen Sie im Feld <strong>„Verwendungszweck"</strong> genau folgende Referenz ein: <span style={{ fontFamily: 'monospace', fontWeight: 800, color: 'var(--accent)' }}>{orderRef}</span></>,
    <>
      Überweisen Sie den Betrag von{' '}
      <strong style={{ color: 'var(--accent)' }}>{fmt(amountDue)}</strong>
      {paymentType === 'deposit' && <> (50 % Anzahlung – Restbetrag vor dem Versand)</>}.
      Ihre Bestellung wird nach Zahlungseingang bearbeitet <strong>(1–3 Werktage)</strong>.
    </>,
  ];

  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '40px 0 36px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Startseite</Link>
            <i className="bi bi-chevron-right" style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Auftragsbestätigung</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Auftragsbestätigung</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px 80px', maxWidth: 720 }}>

        {/* Erfolgsmeldung */}
        <div style={{
          background: '#ECFDF5',
          border: '1px solid #6EE7B7',
          borderLeft: '4px solid var(--green)',
          padding: isMobile ? '20px 18px' : '24px 28px',
          display: 'flex', gap: 16, alignItems: 'flex-start',
          marginBottom: 20,
        }}>
          <div style={{ width: 44, height: 44, flexShrink: 0, background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="bi bi-check-lg" style={{ fontSize: 22, color: 'white' }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <h2 style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800, color: '#065F46', marginBottom: 6 }}>
              Bestellung erfolgreich aufgegeben!
            </h2>
            <p style={{ fontSize: 13, color: '#047857', lineHeight: 1.6 }}>
              Vielen Dank für Ihre Bestellung. Schließen Sie Ihren Kauf ab, indem Sie die Banküberweisung mit der untenstehenden Referenz durchführen.
            </p>
          </div>
        </div>

        {/* Bestellnummer */}
        <div style={{
          background: 'var(--accent-light)', border: '2px solid var(--accent)',
          padding: isMobile ? '14px 16px' : '18px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          marginBottom: 20,
        }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
              Ihre Bestellnummer / Verwendungszweck
            </p>
            <p style={{ fontSize: 'clamp(18px, 5vw, 26px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '0.04em', fontFamily: 'monospace', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>
              {orderRef}
            </p>
          </div>
          <i className="bi bi-tag-fill" style={{ fontSize: 24, color: 'var(--accent)', flexShrink: 0, opacity: 0.6 }} />
        </div>

        {/* Bankverbindung */}
        <div style={{ background: 'white', border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ padding: '14px 20px', background: 'var(--dark)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="bi bi-building" style={{ color: 'white', fontSize: 15 }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Bankverbindung
            </span>
          </div>
          {bankRows.map(([label, value, mono], i, arr) => {
            const isRef = label === 'Verwendungszweck';
            return (
              <div key={label} style={{
                padding: '12px 20px',
                borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : undefined,
                background: isRef ? 'var(--accent-light)' : undefined,
              }}>
                <span style={{ display: 'block', fontSize: 11, color: isRef ? 'var(--accent)' : 'var(--text-muted)', fontWeight: isRef ? 700 : 500, marginBottom: 3, textTransform: isRef ? 'uppercase' : undefined, letterSpacing: isRef ? '0.04em' : undefined }}>
                  {label}
                </span>
                <span style={{
                  display: 'block',
                  fontSize: isRef ? 15 : 14,
                  fontWeight: 800,
                  color: isRef ? 'var(--accent)' : 'var(--dark)',
                  letterSpacing: mono || isRef ? '0.04em' : undefined,
                  fontFamily: mono || isRef ? 'monospace' : undefined,
                  wordBreak: 'break-all',
                  overflowWrap: 'anywhere',
                }}>{value}</span>
              </div>
            );
          })}
        </div>

        {/* Betrag */}
        {typeof amountDue === 'number' && (
          <div style={{ background: 'var(--dark)', padding: isMobile ? '16px 18px' : '18px 24px', marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>
                {paymentType === 'deposit' ? 'Jetzt zu überweisender Betrag (50 %)' : 'Zu überweisender Betrag'}
              </p>
              <p style={{ fontSize: isMobile ? 24 : 28, fontWeight: 900, color: 'var(--accent)', letterSpacing: '-0.02em', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                {fmt(amountDue)}
              </p>
              {paymentType === 'deposit' && typeof total === 'number' && (
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>
                  Restbetrag {fmt(total - amountDue)} vor dem Versand fällig
                </p>
              )}
            </div>
            <i className="bi bi-bank2" style={{ fontSize: 32, color: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
          </div>
        )}

        {/* Zahlungsanweisungen */}
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px 28px', marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--dark)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="bi bi-list-ol" style={{ color: 'var(--accent)' }} /> Zahlungsanweisungen
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {steps.map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 0, flexShrink: 0,
                  background: 'var(--dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 900, color: 'white',
                }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: 13, color: 'var(--dark)', lineHeight: 1.65, paddingTop: 7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hinweis */}
        <div style={{
          padding: '14px 18px', background: '#FFFBEB', border: '1px solid #FDE68A',
          borderRadius: 'var(--r-md)', marginBottom: 36,
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <i className="bi bi-exclamation-triangle" style={{ color: '#D97706', fontSize: 15, flexShrink: 0, marginTop: 1 }} />
          <p style={{ fontSize: 12, color: '#92400E', lineHeight: 1.65 }}>
            Der Verwendungszweck <strong>{orderRef}</strong> ist bei der Überweisung zwingend anzugeben. Ohne diese Angabe kann sich die Bearbeitung Ihrer Bestellung verzögern.
            Bei Fragen: <Link to="/kontakt" style={{ color: '#92400E', fontWeight: 700 }}>Kontaktieren Sie uns</Link>.
          </p>
        </div>

        {/* Aktionen */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            <i className="bi bi-house" /> Zur Startseite
          </Link>
          <Link to="/auftragsverfolgung" state={{ orderRef }} className="btn btn-lg" style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--dark)' }}>
            <i className="bi bi-search" /> Bestellung verfolgen
          </Link>
        </div>

      </div>
    </main>
  );
}
