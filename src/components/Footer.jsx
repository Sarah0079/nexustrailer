import { Link } from 'react-router-dom';

const RICHTLINIEN = [
  { label: 'Impressum',              to: '/impressum' },
  { label: 'Datenschutzerklärung',   to: '/datenschutz' },
  { label: 'AGB',                    to: '/agb' },
  { label: 'Widerrufsbelehrung',     to: '/widerrufsbelehrung' },
  { label: 'Cookie-Richtlinie',      to: '/cookie-richtlinie' },
  { label: 'Rückgabe & Erstattung',  to: '/rueckgabe' },
  { label: 'Lieferbedingungen',      to: '/lieferung' },
  { label: 'Zahlungsbedingungen',    to: '/zahlung' },
];

const SUPPORT = [
  { label: 'Über uns',              to: '/uber-uns' },
  { label: 'Kontakt',               to: '/kontakt' },
  { label: 'Auftragsverfolgung',    to: '/auftragsverfolgung' },
  { label: 'FAQ',                   to: '/faq' },
  { label: 'Garantie',              to: '/garantie' },
];

const TRUST = [
  { icon: 'bi-truck',        label: 'Kostenlose Lieferung' },
  { icon: 'bi-lock',         label: 'Sicheres Bezahlen' },
  { icon: 'bi-arrow-repeat', label: '30 Tage Rückgabe' },
  { icon: 'bi-shield-check', label: '2 Jahre Garantie' },
];

const BUSINESS = [
  { label: 'Firmenname',      val: 'LA REMORQUE M' },
  { label: 'Website',         val: 'nexustrailer.com' },
  { label: 'SIREN',           val: '948418827' },
  { label: 'SIRET',           val: '94841882700010' },
  { label: 'E-Mail',          val: 'info@nexustrailer.com' },
  { label: 'Telefon',         val: '+33 7 56 83 64 79' },
  { label: 'USt-ID',          val: 'FR16948418827' },
  { label: 'Handelsregister', val: '948 418 827 R.C.S. Clermont-Ferrand' },
  { label: 'Adresse',         val: '21 Rue du Bouchet, 63350 Maringues, Frankreich' },
];

const linkStyle = {
  fontSize: 13,
  color: 'rgba(255,255,255,0.55)',
  transition: 'color 0.15s',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  textDecoration: 'none',
};

function ColLink({ item }) {
  const hover = (e) => { e.currentTarget.style.color = 'white'; };
  const leave = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; };
  return (
    <Link to={item.to} style={linkStyle} onMouseEnter={hover} onMouseLeave={leave}>
      <i className="bi bi-chevron-right" style={{ fontSize: 10, opacity: 0.5 }} />
      {item.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: 'white' }}>

      {/* Trust strip */}
      <div style={{ background: 'var(--dark-2)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'nowrap' }}>
          {TRUST.map(({ icon, label }) => (
            <span key={label} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap' }}>
              <i className={`bi ${icon}`} style={{ fontSize: 15 }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="container" style={{ padding: '56px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', marginBottom: 16, textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: 0, padding: '4px 10px' }}>
                <img src="/image/logo.png" alt="NexusTrailer" style={{ height: 68, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            </Link>
            <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.8 }}>
              Ihr Partner für hochwertige Transportlösungen in ganz Europa. Robuste, sichere und langlebige Anhänger für Privatpersonen, Handwerker und Unternehmen.
            </p>
          </div>

          {/* Geschäftsinformationen */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>
              Geschäftsinformationen
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {BUSINESS.map(({ label, val }) => (
                <div key={label} style={{ display: 'flex', gap: 6, fontSize: 11.5 }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>{label}:</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
              Rechtliches
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {RICHTLINIEN.map(item => (
                <li key={item.label}><ColLink item={item} /></li>
              ))}
            </ul>
          </div>

          {/* Hilfe & Support */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
              Hilfe & Support
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SUPPORT.map(item => (
                <li key={item.label}><ColLink item={item} /></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            Copyright © {new Date().getFullYear()} NexusTrailer | Ihr Lieferant für Nutzfahrzeuganhänger und Industriemaschinen
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            Alle Rechte vorbehalten.
          </span>
        </div>
      </div>

    </footer>
  );
}
