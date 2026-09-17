import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fmtEur } from '../utils/fmt';
import { useCart } from '../context/CartContext';
import { createOrder } from '../api/client';
import { useBreakpoint } from '../hooks/useBreakpoint';

const FIELDS = [
  { key: 'vorname',  label: 'Vorname',             span: 1, max: 40,  lettersOnly: true,  required: true },
  { key: 'nachname', label: 'Nachname',             span: 1, max: 40,  lettersOnly: true,  required: true },
  { key: 'email',    label: 'E-Mail',               span: 2, max: 100, required: true, type: 'email' },
  { key: 'telefon',  label: 'Telefon',              span: 2, max: 20,  required: true, type: 'tel', phoneOnly: true },
  { key: 'adresse',  label: 'Straße & Hausnummer',  span: 2, max: 80,  required: true },
  { key: 'plz',      label: 'PLZ',                  span: 1, max: 10,  required: true, digitsOnly: true },
  { key: 'stadt',    label: 'Stadt',                span: 1, max: 50,  lettersOnly: true,  required: true },
];

function Field({ field, value, error, onChange }) {
  const [touched, setTouched] = useState(false);
  const showError = touched && error;
  return (
    <div style={{ gridColumn: field.span === 2 ? '1 / -1' : undefined }}>
      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span>{field.label} <span style={{ color: 'var(--sale)' }}>*</span></span>
        <span style={{ fontWeight: 400, color: 'var(--text-light)' }}>{value.length}/{field.max}</span>
      </label>
      <input
        className="input"
        type={field.type || 'text'}
        value={value}
        maxLength={field.max}
        placeholder={field.label}
        required={field.required}
        onBlur={() => setTouched(true)}
        onChange={(e) => {
          let val = e.target.value;
          if (field.lettersOnly) val = val.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s'\-]/g, '');
          if (field.digitsOnly)  val = val.replace(/\D/g, '');
          if (field.phoneOnly)   val = val.replace(/[^0-9+\-\s()]/g, '');
          onChange(val);
        }}
        style={{ borderColor: showError ? 'var(--sale)' : undefined, outline: showError ? '2px solid rgba(193,33,25,0.15)' : undefined }}
      />
      {showError && (
        <p style={{ fontSize: 11, color: 'var(--sale)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <i className="bi bi-exclamation-circle" /> {error}
        </p>
      )}
    </div>
  );
}

const NAME_RE  = /^[a-zA-ZÀ-ÖØ-öø-ÿäöüÄÖÜß\s'\-]{2,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const HTML_RE  = /<[^>]*>/;

function validate(form) {
  const errors = {};
  FIELDS.forEach(({ key, label, required, max, lettersOnly }) => {
    const v = form[key]?.trim() || '';
    if (required && !v) { errors[key] = `${label} ist erforderlich`; return; }
    if (v.length > max) { errors[key] = `Maximal ${max} Zeichen`; return; }
    if (lettersOnly && v && !NAME_RE.test(v)) {
      errors[key] = 'Nur Buchstaben und Bindestriche erlaubt';
    }
  });
  if (form.email && !EMAIL_RE.test(form.email.trim())) errors.email = 'Ungültige E-Mail-Adresse';
  if (form.telefon && !/^[0-9+\-\s()]{6,20}$/.test(form.telefon.trim())) errors.telefon = 'Ungültige Telefonnummer';
  if (form.plz && !/^\d{4,10}$/.test(form.plz.trim())) errors.plz = 'Ungültige PLZ';
  if (form.adresse && HTML_RE.test(form.adresse)) errors.adresse = 'Ungültige Zeichen';
  if (form.hinweis && HTML_RE.test(form.hinweis)) errors.hinweis = 'HTML-Tags sind nicht erlaubt';
  return errors;
}

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useBreakpoint(768);
  const paymentType = location.state?.paymentType || 'full';

  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', telefon: '', adresse: '', plz: '', stadt: '', land: 'Deutschland', hinweis: '' });
  const [errors, setErrors] = useState({});
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [dsgvo, setDsgvo] = useState(false);
  const [dsgvoError, setDsgvoError] = useState(false);

  const fmt = fmtEur;
  const shipping = 0;
  const grand = total + shipping;
  const setField = (k) => (val) => setForm(f => ({ ...f, [k]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTriedSubmit(true);
    setServerError('');
    if (!dsgvo) { setDsgvoError(true); return; }
    setDsgvoError(false);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      // Le frontend envoie uniquement product_id + quantity
      // Le serveur calcule les montants depuis MySQL (jamais confiance aux prix du client)
      const payload = {
        form,
        items:         items.map((i) => ({ product_id: i.id, quantity: i.qty })),
        paymentOption: paymentType,
      };
      const result = await createOrder(payload);
      clear();
      navigate('/confirmation', {
        state: {
          orderRef:     result.orderRef,
          bank:         result.bank,
          paymentType:  result.paymentOption,
          total:        result.total,
          amountDueNow: result.amountDueNow,
        },
      });
    } catch (err) {
      setServerError(err.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <main style={{ textAlign: 'center', padding: '100px 24px' }}>
        <i className="bi bi-cart3" style={{ fontSize: 64, color: 'var(--border-strong)', display: 'block', marginBottom: 20 }} />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Ihr Warenkorb ist leer</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>Fügen Sie Produkte hinzu, um fortzufahren.</p>
        <Link to="/shop" className="btn btn-primary btn-lg"><i className="bi bi-grid" /> Zum Shop</Link>
      </main>
    );
  }

  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '40px 0 36px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Link to="/" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Startseite</Link>
            <i className="bi bi-chevron-right" style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }} />
            <Link to="/shop" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Shop</Link>
            <i className="bi bi-chevron-right" style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Kasse</span>
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Kasse</h1>
        </div>
      </div>

      <div className="container" style={{ padding: isMobile ? '32px 16px 60px' : '48px 24px 80px' }}>

        <div>

        {/* Erreurs de validation */}
        {triedSubmit && Object.keys(errors).length > 0 && (
          <div style={{ marginBottom: 24, padding: '14px 18px', background: 'var(--sale-light)', border: '1px solid rgba(193,33,25,0.3)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="bi bi-exclamation-triangle-fill" style={{ color: 'var(--sale)', fontSize: 16 }} />
            <span style={{ fontSize: 13, color: 'var(--sale)', fontWeight: 600 }}>
              Bitte korrigieren Sie die markierten Felder vor dem Absenden.
            </span>
          </div>
        )}

        {/* Erreur serveur */}
        {serverError && (
          <div style={{ marginBottom: 24, padding: '14px 18px', background: 'var(--sale-light)', border: '1px solid rgba(193,33,25,0.3)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="bi bi-wifi-off" style={{ color: 'var(--sale)', fontSize: 16 }} />
            <span style={{ fontSize: 13, color: 'var(--sale)', fontWeight: 600 }}>{serverError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'minmax(0,1fr)' : 'minmax(0,1fr) 360px', gap: isMobile ? 24 : 32, alignItems: 'start' }}>

            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>

              {/* Zahlungsart-Recap */}
              <div style={{ background: 'var(--bg)', borderLeft: '3px solid var(--accent)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <i className={`bi ${paymentType === 'full' ? 'bi-check-circle-fill' : 'bi-wallet2'}`} style={{ color: 'var(--accent)', fontSize: 18, flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--dark)' }}>
                      {paymentType === 'full' ? 'Vollständige Zahlung' : '50 % Anzahlung'}
                    </p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {paymentType === 'full'
                        ? `Zu zahlender Betrag: ${fmt(grand)}`
                        : `Anzahlung: ${fmt(grand * 0.5)} · Restbetrag: ${fmt(grand * 0.5)}`}
                    </p>
                  </div>
                </div>
                <button type="button" onClick={() => navigate(-1)} style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Ändern
                </button>
              </div>

              {/* Lieferadresse */}
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: isMobile ? 16 : 28 }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="bi bi-geo-alt" style={{ color: 'var(--accent)' }} /> Lieferadresse
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                  {FIELDS.map(f => (
                    <Field key={f.key} field={f} value={form[f.key]} error={errors[f.key]} onChange={setField(f.key)} />
                  ))}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Land <span style={{ color: 'var(--sale)' }}>*</span></label>
                    <select className="input" value={form.land} onChange={e => setField('land')(e.target.value)}>
                      {[
                        'Deutschland', 'Frankreich', 'Österreich', 'Schweiz',
                        'Belgien', 'Niederlande', 'Luxemburg', 'Spanien',
                        'Italien', 'Portugal', 'Polen', 'Tschechien',
                        'Ungarn', 'Dänemark', 'Schweden', 'Norwegen',
                        'Finnland', 'Irland', 'Griechenland', 'Rumänien',
                        'Bulgarien', 'Kroatien', 'Slowenien', 'Slowakei',
                        'Estland', 'Lettland', 'Litauen', 'Malta', 'Zypern',
                      ].map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Hinweis */}
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: isMobile ? 16 : 28 }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 14, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                  <i className="bi bi-chat-text" style={{ color: 'var(--accent)' }} /> Anmerkung zur Bestellung
                  <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--text-light)' }}>(optional)</span>
                </h2>
                <textarea
                  className="input" rows={3} maxLength={300}
                  placeholder="Besondere Anweisungen oder Hinweise…"
                  value={form.hinweis} onChange={e => setField('hinweis')(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
                <p style={{ fontSize: 11, color: 'var(--text-light)', textAlign: 'right', marginTop: 4 }}>{form.hinweis.length}/300</p>
              </div>
            </div>

            {/* RIGHT — sticky summary */}
            <div style={{ position: isMobile ? 'static' : 'sticky', top: 24, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 16, order: isMobile ? 1 : 0, minWidth: 0, width: '100%' }}>
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: isMobile ? 16 : 24 }}>
                <h2 style={{ fontSize: 15, fontWeight: 800, color: 'var(--dark)', marginBottom: 18 }}>Ihre Bestellung</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <img src={item.image} alt={item.name} style={{ width: 52, height: 52, objectFit: 'contain', padding: '4px', background: '#EDECE9', borderRadius: 0, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>× {item.qty}</p>
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)', flexShrink: 0 }}>{fmt(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)' }}>
                    <span>Zwischensumme</span><span>{fmt(total)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>
                    <span>Versand</span><span>Kostenlos</span>
                  </div>

                  {paymentType === 'deposit' ? (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)', paddingTop: 8, borderTop: '1px solid var(--border)', marginTop: 4 }}>
                        <span>Gesamtbestellung</span><span>{fmt(grand)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-muted)' }}>
                        <span>Restbetrag (vor dem Versand)</span><span>{fmt(grand * 0.5)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 900, color: 'var(--accent)', paddingTop: 10, borderTop: '1px solid var(--border)', marginTop: 4 }}>
                        <span>Anzahlung (50 %)</span><span>{fmt(grand * 0.5)}</span>
                      </div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 900, color: 'var(--dark)', paddingTop: 10, borderTop: '1px solid var(--border)', marginTop: 4 }}>
                      <span>Gesamtbetrag</span><span>{fmt(grand)}</span>
                    </div>
                  )}
                </div>
              </div>

              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={dsgvo}
                  onChange={e => { setDsgvo(e.target.checked); setDsgvoError(false); }}
                  style={{ marginTop: 2, flexShrink: 0, accentColor: 'var(--dark)', width: 15, height: 15 }}
                />
                <span style={{ fontSize: 12, color: dsgvoError ? 'var(--sale)' : 'var(--text-muted)', lineHeight: 1.6 }}>
                  Ich habe die <Link to="/datenschutz" target="_blank" style={{ color: 'var(--dark)', textDecoration: 'underline' }}>Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Daten zur Auftragsabwicklung einverstanden. *
                </span>
              </label>
              {dsgvoError && (
                <p style={{ fontSize: 11, color: 'var(--sale)', display: 'flex', alignItems: 'center', gap: 4, marginTop: -4 }}>
                  <i className="bi bi-exclamation-circle" /> Bitte stimmen Sie der Datenschutzerklärung zu.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-full"
                style={{ fontSize: 15, opacity: submitting ? 0.7 : 1, display: 'flex', boxSizing: 'border-box' }}
                disabled={submitting}
              >
                {submitting
                  ? <><i className="bi bi-hourglass-split" /> Wird verarbeitet…</>
                  : <><i className="bi bi-lock" /> Jetzt bestellen</>
                }
              </button>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                <i className="bi bi-shield-check" style={{ color: 'var(--green)', marginRight: 4 }} />
                SSL-verschlüsselt · Ihre Daten sind sicher
              </p>
            </div>

          </div>
        </form>
        </div>
      </div>
    </main>
  );
}
