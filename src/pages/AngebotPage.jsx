import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[0-9+\-\s()]{6,30}$/;
const HTML_RE  = /<[^>]*>/;

function validateAngebot(form) {
  const errors = {};
  if (form.company.trim() && HTML_RE.test(form.company)) errors.company = 'Ungültige Zeichen';

  const n = form.name.trim();
  if (!n)                                            errors.name        = 'Ansprechpartner ist erforderlich';
  else if (!NAME_RE.test(n))                         errors.name        = 'Nur Buchstaben und Bindestriche erlaubt';

  if (!form.email.trim())                            errors.email       = 'E-Mail ist erforderlich';
  else if (!EMAIL_RE.test(form.email.trim()))        errors.email       = 'Ungültige E-Mail-Adresse';

  if (!form.phone.trim())                                      errors.phone = 'Telefon ist erforderlich';
  else if (!PHONE_RE.test(form.phone.trim()))                  errors.phone = 'Nur Ziffern, +, - und Klammern erlaubt';

  if (!form.productType)                             errors.productType = 'Produktkategorie ist erforderlich';

  const msg = form.message.trim();
  if (!msg)                                          errors.message     = 'Nachricht ist erforderlich';
  else if (msg.length < 10)                          errors.message     = 'Mindestens 10 Zeichen';
  else if (HTML_RE.test(msg))                        errors.message     = 'HTML-Tags sind nicht erlaubt';

  return errors;
}

export default function AngebotPage() {
  const isMobile = useBreakpoint(768);
  const [form, setForm] = useState({
    company: '', name: '', email: '', phone: '',
    productType: '', quantity: '', budget: '', message: '', siret: '',
  });
  const [errors, setErrors]         = useState({});
  const [touched, setTouched]       = useState({});
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [sent, setSent]             = useState(false);
  const [loading, setLoading]       = useState(false);
  const [serverError, setServerError] = useState('');
  const [dsgvo, setDsgvo]           = useState(false);
  const [dsgvoError, setDsgvoError] = useState(false);

  const setField = (k, filter) => e => {
    let val = e.target.value;
    if (filter === 'name')  val = val.replace(/[0-9]/g, '');
    if (filter === 'phone') val = val.replace(/[^0-9+\-\s()]/g, '');
    setForm(f => ({ ...f, [k]: val }));
    if (touched[k]) {
      setErrors(prev => ({ ...prev, [k]: validateAngebot({ ...form, [k]: val })[k] }));
    }
  };

  const touch = k => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(prev => ({ ...prev, [k]: validateAngebot(form)[k] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setTriedSubmit(true);
    setTouched({ company: true, name: true, email: true, phone: true, productType: true, message: true });
    if (!dsgvo) { setDsgvoError(true); return; }
    setDsgvoError(false);
    const errs = validateAngebot(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setServerError('');
    setLoading(true);
    try {
      await sendAngebot({
        company:      form.company.trim(),
        name:         form.name.trim(),
        email:        form.email.trim(),
        phone:        form.phone.trim() || undefined,
        siret:        form.siret.trim() || undefined,
        product_type: form.productType,
        quantity:     form.quantity || undefined,
        budget:       form.budget.trim() || undefined,
        message:      form.message.trim(),
      });
      setSent(true);
    } catch (err) {
      setServerError(err.message || 'Anfrage konnte nicht gesendet werden. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  const showErr = k => (touched[k] || triedSubmit) && errors[k];
  const errStyle = { fontSize: 11, color: 'var(--sale)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 };
  const inputStyle = k => ({ borderColor: showErr(k) ? 'var(--sale)' : undefined, outline: showErr(k) ? '2px solid rgba(193,33,25,.15)' : undefined });

  return (
    <main>
      {/* Header */}
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>PROFIS & UNTERNEHMEN</p>
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
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>VORTEILE</p>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 24 }}>Vorteile für Profis</h2>
            {[
              { icon: 'bi-percent', title: 'Mengenrabatte', desc: 'Ab 2 Einheiten erhalten Sie Sonderkonditionen.' },
              { icon: 'bi-truck', title: 'Prioritätslieferung', desc: 'Bevorzugte Bearbeitung und kürzere Lieferzeiten.' },
              { icon: 'bi-person-lines-fill', title: 'Persönlicher Ansprechpartner', desc: 'Ein fester Kontakt für alle Ihre Bestellungen.' },
              { icon: 'bi-file-earmark-text', title: 'Sammelrechnung', desc: 'Monatsrechnung möglich für regelmäßige Besteller.' },
              { icon: 'bi-tools', title: 'After-Sales Support', desc: 'Technischer Support und Ersatzteile auf Anfrage.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <i className={`bi ${icon}`} style={{ fontSize: 18, color: 'var(--dark)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--dark)', marginBottom: 3 }}>{title}</p>
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
                  Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ border: '1px solid var(--border)', background: 'white', padding: isMobile ? '28px 20px' : '40px 40px' }}>

                {triedSubmit && Object.keys(errors).length > 0 && (
                  <div style={{ background: 'var(--sale-light)', border: '1px solid rgba(193,33,25,0.3)', borderRadius: 0, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: 'var(--sale)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <i className="bi bi-exclamation-triangle-fill" /><span>Bitte korrigieren Sie die markierten Felder.</span>
                  </div>
                )}
                {serverError && (
                  <div style={{ background: 'var(--sale-light)', border: '1px solid rgba(193,33,25,0.3)', borderRadius: 0, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: 'var(--sale)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <i className="bi bi-exclamation-circle" /><span>{serverError}</span>
                  </div>
                )}

                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  Ihre Angaben
                </h3>

                {/* Unternehmen + SIRET */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Unternehmen</label>
                    <input className="input" placeholder="Firmenname" value={form.company}
                      onChange={setField('company')} onBlur={() => touch('company')}
                      maxLength={100} style={inputStyle('company')} />
                    {showErr('company') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.company}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>USt-IdNr. / SIRET</label>
                    <input className="input" placeholder="DE123456789" value={form.siret}
                      onChange={setField('siret')} maxLength={30} />
                  </div>
                </div>

                {/* Name + E-Mail */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Ansprechpartner *</label>
                    <input className="input" placeholder="Vor- und Nachname" value={form.name}
                      onChange={setField('name', 'name')} onBlur={() => touch('name')}
                      maxLength={80} style={inputStyle('name')} autoComplete="name" />
                    {showErr('name') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.name}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>E-Mail *</label>
                    <input className="input" type="email" placeholder="ihre@firma.de" value={form.email}
                      onChange={setField('email')} onBlur={() => touch('email')}
                      maxLength={100} style={inputStyle('email')} autoComplete="email" />
                    {showErr('email') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.email}</p>}
                  </div>
                </div>

                {/* Telefon */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Telefon *</label>
                  <input className="input" placeholder="+49 000 000 000" value={form.phone}
                    onChange={setField('phone', 'phone')} onBlur={() => touch('phone')}
                    maxLength={30} inputMode="tel" autoComplete="tel" style={inputStyle('phone')} />
                  {showErr('phone') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.phone}</p>}
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 20, paddingTop: 20, borderTop: '1px solid var(--border)', paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  Produktanfrage
                </h3>

                {/* Produkttyp + Menge */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Produktkategorie *</label>
                    <select className="input" value={form.productType}
                      onChange={setField('productType')} onBlur={() => touch('productType')}
                      style={{ ...inputStyle('productType'), appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%236B7280\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="">Kategorie wählen…</option>
                      {PRODUCT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {showErr('productType') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.productType}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Anzahl</label>
                    <select className="input" value={form.quantity} onChange={setField('quantity')}
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
                  <input className="input" placeholder="z. B. 10.000 €" value={form.budget}
                    onChange={setField('budget')} maxLength={50} />
                </div>

                {/* Nachricht */}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ ...labelStyle, display: 'flex', justifyContent: 'space-between' }}>
                    <span>Weitere Angaben *</span>
                    <span style={{ fontWeight: 400 }}>{form.message.length}/1500</span>
                  </label>
                  <textarea className="input" rows={5}
                    placeholder="Beschreiben Sie Ihren Bedarf – Modellwünsche, Ausstattung, Lieferzeitraum…"
                    value={form.message} onChange={setField('message')} onBlur={() => touch('message')}
                    style={{ resize: 'vertical', ...inputStyle('message') }} maxLength={1500} />
                  {showErr('message') && <p style={errStyle}><i className="bi bi-exclamation-circle" /> {errors.message}</p>}
                </div>

                <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', marginBottom: 16 }}>
                  <input
                    type="checkbox"
                    checked={dsgvo}
                    onChange={e => { setDsgvo(e.target.checked); setDsgvoError(false); }}
                    style={{ marginTop: 2, flexShrink: 0, accentColor: 'var(--dark)', width: 15, height: 15 }}
                  />
                  <span style={{ fontSize: 12, color: dsgvoError ? 'var(--sale)' : 'var(--text-muted)', lineHeight: 1.6 }}>
                    Ich habe die <Link to="/datenschutz" target="_blank" style={{ color: 'var(--dark)', textDecoration: 'underline' }}>Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *
                  </span>
                </label>
                {dsgvoError && (
                  <p style={{ fontSize: 11, color: 'var(--sale)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12, marginTop: -8 }}>
                    <i className="bi bi-exclamation-circle" /> Bitte stimmen Sie der Datenschutzerklärung zu.
                  </p>
                )}
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.75 : 1 }}>
                  {loading
                    ? <><i className="bi bi-hourglass-split" /> Wird gesendet…</>
                    : <><i className="bi bi-send" /> Angebot anfragen</>
                  }
                </button>
                <p style={{ fontSize: 12, color: 'var(--text-light)', textAlign: 'center', marginTop: 12 }}>
                  Antwort innerhalb von 24 Stunden · Kostenlos & unverbindlich
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
