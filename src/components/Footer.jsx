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
  { label: 'Über uns',           to: '/uber-uns' },
  { label: 'Kontakt',            to: '/kontakt' },
  { label: 'Auftragsverfolgung', to: '/auftragsverfolgung' },
  { label: 'FAQ',                to: '/faq' },
  { label: 'Garantie',           to: '/garantie' },
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

const colLinkStyle = {
  fontSize: 13, color: 'rgba(255,255,255,0.55)',
  transition: 'color 0.15s', display: 'flex',
  alignItems: 'center', gap: 6, textDecoration: 'none',
};

function ColLink({ item }) {
  return (
    <Link to={item.to} style={colLinkStyle}
      onMouseEnter={e => e.currentTarget.style.color = 'white'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
    >
      <i className="bi bi-chevron-right" style={{ fontSize: 10, opacity: 0.5 }} />
      {item.label}
    </Link>
  );
}

const CAP = { fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', color: 'rgba(255,255,255,0.30)', marginBottom: 12 };

export default function Footer() {
  const isSmall  = useBreakpoint(576);
  const isMobile = useBreakpoint(768);
  const isTablet = useBreakpoint(1024);

  return (
    <footer style={{ background: 'var(--dark)', color: 'white' }}>

      {/* ── Trust strip ── */}
      <div style={{ background: 'var(--dark-2)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '12px 0' : '14px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: isSmall ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: isSmall ? '10px 8px' : 10,
        }}>
          {TRUST.map(({ icon, label }) => (
            <span key={label} style={{
              fontSize: isSmall ? 11 : 12, fontWeight: 600,
              color: 'rgba(255,255,255,0.6)',
              display: 'flex', flexDirection: isSmall ? 'column' : 'row',
              alignItems: 'center', justifyContent: 'center',
              gap: isSmall ? 5 : 7,
              padding: isSmall ? '4px 0' : '4px 8px',
              textAlign: 'center',
            }}>
              <i className={`bi ${icon}`} style={{ fontSize: isSmall ? 17 : 15, color: 'var(--accent)', flexShrink: 0 }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {isMobile ? (

        /* ════════════════════════════════
           MOBILE — layout repensé
           ════════════════════════════════ */
        <div style={{ padding: '28px 20px 24px' }}>

          {/* Brand */}
          <div style={{ marginBottom: 24 }}>
            <Link to="/" style={{ display: 'inline-flex', marginBottom: 12, textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '3px 10px' }}>
                <img src="/image/NexusTrailer.png" alt="NexusTrailer"
                  style={{ height: 38, width: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
            </Link>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: 300 }}>
              COC-zertifizierte Wohnwagen und Anhänger direkt vom Hersteller — versandkostenfrei in ganz Europa.
            </p>
          </div>

          {/* Contact rapide */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, marginBottom: 20 }}>
            <p style={CAP}>Kontakt</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:info@nexustrailer.com"
                style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              >
                <i className="bi bi-envelope" style={{ fontSize: 13, color: 'var(--accent)', flexShrink: 0 }} />
                info@nexustrailer.com
              </a>
              <a href="tel:+33756836479"
                style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
              >
                <i className="bi bi-telephone" style={{ fontSize: 13, color: 'var(--accent)', flexShrink: 0 }} />
                +33 7 56 83 64 79
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>
                <i className="bi bi-geo-alt" style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', flexShrink: 0, marginTop: 1 }} />
                21 Rue du Bouchet, 63350 Maringues
              </span>
            </div>
          </div>

          {/* Navigation — 2 colonnes */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, marginBottom: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>

              <div>
                <p style={CAP}>Rechtliches</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {RICHTLINIEN.map(item => (
                    <li key={item.label}>
                      <Link to={item.to}
                        style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.52)', textDecoration: 'none', lineHeight: 1.3, display: 'block' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
                      >{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p style={CAP}>Support</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {SUPPORT.map(item => (
                    <li key={item.label}>
                      <Link to={item.to}
                        style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.52)', textDecoration: 'none', lineHeight: 1.3, display: 'block' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.52)'}
                      >{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Mentions légales compactes */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.20)', lineHeight: 1.8 }}>
              LA REMORQUE M · SIREN 948 418 827 · SIRET 94841882700010 · USt-ID FR16948418827 · RCS Clermont-Ferrand
            </p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 10 }}>
              © {new Date().getFullYear()} NexusTrailer — Alle Rechte vorbehalten.
            </p>
          </div>

        </div>

      ) : (

        /* ════════════════════════════════
           DESKTOP / TABLETTE
           ════════════════════════════════ */
        <div className="container" style={{ padding: isTablet ? '40px 24px 32px' : '56px 24px 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isTablet ? 32 : 40,
            marginBottom: 40,
          }}>

            {/* Brand */}
            <div>
              <Link to="/" style={{ display: 'inline-flex', marginBottom: 16, textDecoration: 'none' }}>
                <div style={{ background: 'white', padding: '4px 10px' }}>
                  <img src="/image/NexusTrailer.png" alt="NexusTrailer"
                    style={{ height: 56, width: 'auto', objectFit: 'contain', display: 'block' }} />
                </div>
              </Link>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.8 }}>
                Ihr Partner für hochwertige Transportlösungen in ganz Europa. Robuste, sichere und langlebige Anhänger für Privatpersonen, Handwerker und Unternehmen.
              </p>
            </div>

            {/* Geschäftsinformationen */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 14 }}>
                Geschäftsinformationen
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {BUSINESS.map(({ label, val, href }) => (
                  <div key={label} style={{ display: 'flex', gap: 6, fontSize: 12 }}>
                    <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0, minWidth: 100 }}>{label}:</span>
                    {href ? (
                      <a href={href} style={{ color: 'rgba(255,255,255,0.6)', wordBreak: 'break-word', textDecoration: 'none', transition: 'color 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                      >{val}</a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.6)', wordBreak: 'break-word' }}>{val}</span>
                    )}
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
                {RICHTLINIEN.map(item => <li key={item.label}><ColLink item={item} /></li>)}
              </ul>
            </div>

            {/* Hilfe & Support */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
                Hilfe & Support
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SUPPORT.map(item => <li key={item.label}><ColLink item={item} /></li>)}
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
              © {new Date().getFullYear()} NexusTrailer — Alle Rechte vorbehalten.
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
              Ihr Lieferant für Nutzfahrzeuganhänger und Industriemaschinen
            </span>
          </div>
        </div>

      )}
    </footer>
  );
}
