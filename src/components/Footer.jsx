import { Link } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';

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
  { label: 'E-Mail',          val: 'info@nexustrailer.com', href: 'mailto:info@nexustrailer.com' },
  { label: 'Telefon',         val: '+33 7 56 83 64 79',     href: 'tel:+33756836479' },
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

function ColLink({ item, small }) {
  const hover = (e) => { e.currentTarget.style.color = 'white'; };
  const leave = (e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; };
  return (
    <Link to={item.to} style={{ ...linkStyle, fontSize: small ? 11.5 : 13 }} onMouseEnter={hover} onMouseLeave={leave}>
      <i className="bi bi-chevron-right" style={{ fontSize: 9, opacity: 0.5 }} />
      {item.label}
    </Link>
  );
}

export default function Footer() {
  const isSmall  = useBreakpoint(576);   // < 576px  → 1 colonne
  const isMobile = useBreakpoint(768);   // < 768px  → 1 colonne (inclut isSmall)
  const isTablet = useBreakpoint(1024);  // < 1024px → 2 colonnes

  // Colonnes de la grille principale
  const gridCols = isMobile
    ? '1fr 1fr'
    : isTablet
      ? '1fr 1fr'
      : 'repeat(4, 1fr)';

  return (
    <footer style={{ background: 'var(--dark)', color: 'white' }}>

      {/* ── Trust strip ── */}
      <div style={{ background: 'var(--dark-2)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '14px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isSmall ? '12px 8px' : 10,
        }}>
          {TRUST.map(({ icon, label }) => (
            <span key={label} style={{
              fontSize: isSmall ? 11 : 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.6)',
              display: 'flex',
              flexDirection: isSmall ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isSmall ? 5 : 7,
              padding: isSmall ? '6px 4px' : '4px 8px',
              textAlign: 'center',
            }}>
              <i className={`bi ${icon}`} style={{ fontSize: isSmall ? 18 : 15, flexShrink: 0 }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="container" style={{ padding: isMobile ? '24px 16px 16px' : '56px 24px 40px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: gridCols,
          gap: isMobile ? '20px 14px' : isTablet ? 32 : 40,
          marginBottom: isMobile ? 24 : 40,
        }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', marginBottom: isMobile ? 10 : 16, textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: isMobile ? '3px 8px' : '4px 10px' }}>
                <img src="/image/NexusTrailer.png" alt="NexusTrailer" style={{ height: isMobile ? 36 : 56, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            </Link>
            <p style={{ fontSize: isMobile ? 11 : 13, color: 'rgba(255,255,255,0.42)', lineHeight: isMobile ? 1.65 : 1.8 }}>
              Ihr Partner für hochwertige Transportlösungen in ganz Europa. Robuste, sichere und langlebige Anhänger für Privatpersonen, Handwerker und Unternehmen.
            </p>
          </div>

          {/* Geschäftsinformationen */}
          <div>
            <p style={{ fontSize: isMobile ? 9.5 : 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: isMobile ? 8 : 14 }}>
              {isMobile ? 'Unternehmen' : 'Geschäftsinformationen'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 4 : 7 }}>
              {BUSINESS.map(({ label, val, href }) => (
                <div key={label} style={{ display: 'flex', gap: 5, fontSize: isMobile ? 10.5 : 12 }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0, minWidth: isMobile ? 62 : 100 }}>{label}:</span>
                  {href ? (
                    <a href={href} style={{ color: 'rgba(255,255,255,0.6)', wordBreak: 'break-all', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >{val}</a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.6)', wordBreak: 'break-all' }}>{val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <p style={{ fontSize: isMobile ? 9.5 : 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: isMobile ? 8 : 16 }}>
              Rechtliches
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: isMobile ? 6 : 10 }}>
              {RICHTLINIEN.map(item => (
                <li key={item.label}><ColLink item={item} small={isMobile} /></li>
              ))}
            </ul>
          </div>

          {/* Hilfe & Support */}
          <div>
            <p style={{ fontSize: isMobile ? 9.5 : 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: isMobile ? 8 : 16 }}>
              Hilfe & Support
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: isMobile ? 6 : 10 }}>
              {SUPPORT.map(item => (
                <li key={item.label}><ColLink item={item} small={isMobile} /></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: isMobile ? 14 : 20,
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 4 : 8,
        }}>
          <span style={{ fontSize: isMobile ? 10.5 : 12, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} NexusTrailer — Alle Rechte vorbehalten.
          </span>
          <span style={{ fontSize: isMobile ? 10.5 : 12, color: 'rgba(255,255,255,0.3)' }}>
            Ihr Lieferant für Nutzfahrzeuganhänger und Industriemaschinen
          </span>
        </div>
      </div>

    </footer>
  );
}
