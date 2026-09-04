import { useState } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const CONTACT_INFO = [
  { icon: 'bi-geo-alt',   label: 'Adresse',         val: '21 Rue du Bouchet\n63350 Maringues, Frankreich' },
  { icon: 'bi-envelope',  label: 'E-Mail',           val: 'info@trailpro.com' },
  { icon: 'bi-telephone', label: 'Telefon',          val: '+33 7 56 83 64 79' },
  { icon: 'bi-clock',     label: 'Öffnungszeiten',   val: 'Mo–Fr: 9:00 – 18:00\nSa: 9:00 – 13:00' },
];

const FIELDS_DEF = [
  { key: 'name',    label: 'Name',     ph: 'Ihr Name',          required: true,  max: 80 },
  { key: 'email',   label: 'E-Mail',   ph: 'ihre@email.de',     required: true,  max: 100, type: 'email' },
  { key: 'phone',   label: 'Telefon',  ph: '+49 000 000 000',   required: false, max: 30 },
];

function validateContact(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name ist erforderlich';
  if (!form.email.trim()) {
    errors.email = 'E-Mail ist erforderlich';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Ungültige E-Mail-Adresse';
  }
  if (form.phone.trim() && !/^[0-9+\-\s()]{6,30}$/.test(form.phone.trim())) {
    errors.phone = 'Ungültige Telefonnummer';
  }
  if (!form.message.trim()) errors.message = 'Nachricht ist erforderlich';
  else if (form.message.trim().length < 10) errors.message = 'Mindestens 10 Zeichen';
  return errors;
}

function FieldRow({ def, value, error, onChange, touched, onBlur }) {
  const showError = touched && error;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
        <span>{def.label} {def.required && <span style={{ color: 'var(--sale)' }}>*</span>}</span>
        <span style={{ fontSize: 11, color: 'var(--text-light)', fontWeight: 400 }}>{value.length}/{def.max}</span>
      </label>
      <input
        className="input"
        type={def.type || 'text'}
        placeholder={def.ph}
        value={value}
        maxLength={def.max}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        style={{ borderColor: showError ? 'var(--sale)' : undefined, outline: showError ? '2px solid rgba(220,38,38,0.15)' : undefined }}
      />
      {showError && (
        <p style={{ fontSize: 11, color: 'var(--sale)', display: 'flex', alignItems: 'center', gap: 4 }}>
          <i className="bi bi-exclamation-circle" /> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const isMobile = useBreakpoint(640);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Allgemeine Anfrage', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [triedSubmit, setTriedSubmit] = useState(false);

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (touched[k]) setErrors(e => ({ ...e, [k]: validateContact({ ...form, [k]: v })[k] }));
  };
  const touch = (k) => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(e => ({ ...e, [k]: validateContact(form)[k] }));
  };

  const handleSubmit = () => {
    setTriedSubmit(true);
    setTouched({ name: true, email: true, phone: true, message: true });
    const errs = validateContact(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSent(true);
  };

  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: isMobile ? '36px 0 32px' : '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KONTAKT</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>
            Sprechen Sie mit unserem Team
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 15 }}>
            Wir antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: isMobile ? '32px 16px 64px' : '56px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.6fr', gap: isMobile ? 40 : 64 }}>

          {/* Info */}
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>Kontaktinformationen</h2>
            {CONTACT_INFO.map(({ icon, label, val }) => (
              <div key={label} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 18, color: 'var(--accent)' }} />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Formular */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: isMobile ? 20 : 36 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <i className="bi bi-check-circle-fill" style={{ fontSize: 56, color: 'var(--green)', display: 'block', marginBottom: 16 }} />
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>Nachricht erhalten!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="bi bi-send" style={{ color: 'var(--accent)' }} /> Nachricht senden
                </h3>

                {triedSubmit && Object.keys(validateContact(form)).length > 0 && (
                  <div style={{ marginBottom: 20, padding: '12px 16px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--r-md)', display: 'flex', gap: 10, alignItems: 'center' }}>
                    <i className="bi bi-exclamation-triangle-fill" style={{ color: 'var(--sale)', fontSize: 15 }} />
                    <span style={{ fontSize: 13, color: 'var(--sale)', fontWeight: 600 }}>Bitte korrigieren Sie die markierten Felder.</span>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                  {FIELDS_DEF.map(def => (
                    <FieldRow
                      key={def.key}
                      def={def}
                      value={form[def.key]}
                      error={errors[def.key]}
                      touched={touched[def.key] || triedSubmit}
                      onChange={v => update(def.key, v)}
                      onBlur={() => touch(def.key)}
                    />
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 13, fontWeight: 500 }}>Betreff</label>
                    <select value={form.subject} onChange={e => update('subject', e.target.value)}
                      style={{ padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-sm)', fontSize: 13, background: 'white' }}>
                      <option>Allgemeine Anfrage</option>
                      <option>Angebot anfordern</option>
                      <option>Lieferinformation</option>
                      <option>Nach dem Kauf</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 14 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
                    <span>Nachricht <span style={{ color: 'var(--sale)' }}>*</span></span>
                    <span style={{ fontSize: 11, color: 'var(--text-light)', fontWeight: 400 }}>{form.message.length}/1000</span>
                  </label>
                  <textarea
                    className="input" rows={5} maxLength={1000}
                    placeholder="Ihre Nachricht (mindestens 10 Zeichen)…"
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    onBlur={() => touch('message')}
                    style={{
                      resize: 'vertical',
                      borderColor: (touched.message || triedSubmit) && errors.message ? 'var(--sale)' : undefined,
                      outline: (touched.message || triedSubmit) && errors.message ? '2px solid rgba(220,38,38,0.15)' : undefined,
                    }}
                  />
                  {(touched.message || triedSubmit) && errors.message && (
                    <p style={{ fontSize: 11, color: 'var(--sale)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <i className="bi bi-exclamation-circle" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  className="btn btn-primary btn-lg btn-full"
                  style={{ marginTop: 20, justifyContent: 'center', gap: 8 }}
                  onClick={handleSubmit}
                >
                  <i className="bi bi-send" /> Nachricht senden
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
