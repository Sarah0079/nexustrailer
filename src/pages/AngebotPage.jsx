import { useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { sendAngebot } from '../api/client';

const PRODUCT_TYPES = [
  'Wohnwagen / Caravan',
  'Tiny House / Mobilheim',
  'Kipperanhänger',
  'Transportanhänger / Pritsche',
  'Verkaufsanhänger / Food Truck',
  'Kühlanhänger',
  'Baumaschinen / Bagger',
  'Sonstiges',
];

const QUANTITIES = ['1 Einheit', '2–5 Einheiten', '6–10 Einheiten', '10+ Einheiten'];

export default function AngebotPage() {
  const isMobile = useBreakpoint(768);
  const [form, setForm] = useState({
    company: '', name: '', email: '', phone: '',
    productType: '', quantity: '', budget: '', message: '', siret: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await sendAngebot({
        company:      form.company,
        name:         form.name,
        email:        form.email,
        phone:        form.phone || undefined,
        siret:        form.siret || undefined,
        product_type: form.productType,
        quantity:     form.quantity || undefined,
        budget:       form.budget || undefined,
        message:      form.message,
      });
      setSent(true);
    } catch (err) {
      setError(err.message || 'Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Header */}
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>PROFIS & UNTERNEHMEN</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Angebot anfragen
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 520 }}>
            Für gewerbliche Kunden, Fuhrparkbetreiber und Wiederverkäufer — individuelle Preise ab 2 Einheiten.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: 48, alignItems: 'start' }}>

          {/* Left — Vorteile */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 24 }}>Vorteile für Profis</h2>
            {[
              { icon: 'bi-percent', title: 'Mengenrabatte', desc: 'Ab 2 Einheiten erhalten Sie Sonderkonditionen.' },
              { icon: 'bi-truck', title: 'Prioritätslieferung', desc: 'Bevorzugte Bearbeitung und kürzere Lieferzeiten.' },
              { icon: 'bi-person-lines-fill', title: 'Persönlicher Ansprechpartner', desc: 'Ein fester Kontakt für alle Ihre Bestellungen.' },
              { icon: 'bi-file-earmark-text', title: 'Sammelrechnung', desc: 'Monatsrechnung möglich für regelmäßige Besteller.' },
              { icon: 'bi-tools', title: 'After-Sales Support', desc: 'Technischer Support und Ersatzteile auf Anfrage.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, background: 'var(--accent-light)', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`bi ${icon}`} style={{ color: 'var(--accent)', fontSize: 16 }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Formular */}
          <div>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '64px 32px', border: '1px solid var(--border)', background: 'white' }}>
                <i className="bi bi-check-circle-fill" style={{ fontSize: 44, color: 'var(--accent)', display: 'block', marginBottom: 20 }} />
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 10 }}>Anfrage eingegangen!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
                  Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Werktunden mit einem individuellen Angebot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ border: '1px solid var(--border)', background: 'white', padding: isMobile ? '28px 20px' : '40px 40px' }}>
                {error && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 4, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: '#991B1B' }}>
                    <i className="bi bi-exclamation-circle" style={{ marginRight: 6 }} />{error}
                  </div>
                )}
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  Ihre Angaben
                </h3>

                {/* Unternehmen + SIRET */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Unternehmen *</label>
                    <input className="input" required placeholder="Firmenname" value={form.company} onChange={set('company')} maxLength={100} />
                  </div>
                  <div>
                    <label style={labelStyle}>USt-IdNr. / SIRET</label>
                    <input className="input" placeholder="DE123456789" value={form.siret} onChange={set('siret')} maxLength={30} />
                  </div>
                </div>

                {/* Name + E-Mail */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Ansprechpartner *</label>
                    <input className="input" required placeholder="Vor- und Nachname" value={form.name} onChange={set('name')} maxLength={80} />
                  </div>
                  <div>
                    <label style={labelStyle}>E-Mail *</label>
                    <input className="input" type="email" required placeholder="ihre@firma.de" value={form.email} onChange={set('email')} maxLength={100} />
                  </div>
                </div>

                {/* Telefon */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Telefon</label>
                  <input className="input" placeholder="+49 000 000 000" value={form.phone} onChange={set('phone')} maxLength={30} />
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 20, paddingTop: 20, borderTop: '1px solid var(--border)', paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  Produktanfrage
                </h3>

                {/* Produkttyp + Menge */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Produktkategorie *</label>
                    <select className="input" required value={form.productType} onChange={set('productType')}
                      style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Kategorie wählen…</option>
                      {PRODUCT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Anzahl</label>
                    <select className="input" value={form.quantity} onChange={set('quantity')}
                      style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Menge wählen…</option>
                      {QUANTITIES.map(q => <option key={q} value={q}>{q}</option>)}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Budget (ca.)</label>
                  <input className="input" placeholder="z. B. 10.000 €" value={form.budget} onChange={set('budget')} maxLength={50} />
                </div>

                {/* Nachricht */}
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Weitere Angaben *</label>
                  <textarea className="input" required rows={5} placeholder="Beschreiben Sie Ihren Bedarf – Modellwünsche, Ausstattung, Lieferzeitraum…" value={form.message} onChange={set('message')} style={{ resize: 'vertical' }} maxLength={1500} />
                </div>

                <button type="submit" className="btn btn-accent btn-lg" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.75 : 1 }}>
                  {loading
                    ? <><i className="bi bi-hourglass-split" /> Wird gesendet…</>
                    : <><i className="bi bi-send" /> Angebot anfragen</>
                  }
                </button>
                <p style={{ fontSize: 12, color: 'var(--text-light)', textAlign: 'center', marginTop: 12 }}>
                  Antwort innerhalb von 24 Werktunden · Kostenlos & unverbindlich
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const labelStyle = { fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' };
