import { Link } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { PRODUCTS } from '../data/products';

const STATS = [
  { n: '5–7',     l: 'Werktage Lieferzeit (DE)' },
  { n: '30 Tage', l: 'Rückgaberecht' },
  { n: '2 Jahre', l: 'Herstellergarantie' },
];

const VALUES = [
  {
    icon: 'bi-award',
    title: 'Qualität',
    text: 'Jeder Anhänger und jede Baumaschine wird vor der Auslieferung sorgfältig geprüft. Wir arbeiten ausschließlich mit zertifizierten Herstellern zusammen.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Transparenz',
    text: 'Keine versteckten Gebühren. Klare Preise, eindeutige Konditionen und eine vollständige Dokumentation bei jeder Bestellung.',
  },
  {
    icon: 'bi-headset',
    title: 'Service',
    text: 'Von der Beratung bis zur Lieferung stehen wir an Ihrer Seite. Unser Team beantwortet Fragen schnell und kompetent.',
  },
  {
    icon: 'bi-truck',
    title: 'Lieferung',
    text: 'Lieferung in 5–7 Werktagen (kostenlos). Wir koordinieren alles intern — Sie müssen sich um nichts kümmern.',
  },
  {
    icon: 'bi-currency-euro',
    title: 'Direktimport',
    text: 'Wir kaufen direkt beim Hersteller und geben den Preisvorteil vollständig an Sie weiter. Kein Zwischenhändler.',
  },
  {
    icon: 'bi-file-text',
    title: 'Rechtssicher',
    text: 'Alle Produkte erfüllen die europäischen Normen. Vollständige Rechnung, Garantie und technische Dokumentation inklusive.',
  },
];

export default function AboutPage() {
  const isMobile = useBreakpoint(768);
  const isTablet = useBreakpoint(1024);

  return (
    <main style={{ background: 'var(--white)' }}>

      {/* ── Hero ── */}
      <div style={{ background: 'var(--dark)', padding: isMobile ? '48px 0 40px' : '72px 0 64px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 16,
          }}>
            Über NexusTrailer
          </p>
          <h1 style={{
            fontSize: isMobile ? 28 : 44, fontWeight: 900,
            color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Ihr zuverlässiger Partner<br />für Transportlösungen
          </h1>
          <p style={{
            fontSize: isMobile ? 15 : 17, color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.75, maxWidth: 560,
          }}>
            NexusTrailer liefert Anhänger, Wohnwagen und Baumaschinen direkt vom Hersteller — zu fairen Preisen und mit persönlichem Service.
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
          }}>
            {STATS.map(({ n, l }, i) => (
              <div key={l} style={{
                padding: isMobile ? '24px 16px' : '28px 0',
                textAlign: 'center',
                borderRight: (!isMobile && i < 2) ? '1px solid var(--border)' : 'none',
                borderBottom: (isMobile && i < 1) ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ fontSize: isMobile ? 28 : 34, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {n}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6, fontWeight: 500 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Story ── */}
      <div className="container" style={{ maxWidth: 800, padding: isMobile ? '48px 24px' : '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 20 : 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 10 }}>
              Unsere Geschichte
            </p>
            <h2 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 800, color: 'var(--dark)', lineHeight: 1.25 }}>
              Gegründet mit einer klaren Vision
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              NexusTrailer wurde mit dem Ziel gegründet, Privatpersonen und Unternehmen in ganz Europa Zugang zu hochwertigen Transportlösungen zu verschaffen — ohne Kompromisse bei Qualität oder Preis.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Durch den Direktimport von geprüften Herstellern können wir Preise anbieten, die kein lokaler Händler erreicht. Gleichzeitig stehen wir für persönlichen Service: Jede Bestellung wird von unserem Team individuell begleitet.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Unser Kundenstamm reicht von Privatpersonen bis zu Unternehmen in Deutschland, Frankreich, Österreich und der Schweiz — mit persönlichem Service von Anfang bis Ende.
            </p>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* ── Values ── */}
      <div className="container" style={{ maxWidth: 900, padding: isMobile ? '48px 24px' : '72px 24px' }}>
        <div style={{ marginBottom: isMobile ? 32 : 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 10 }}>
            Unsere Werte
          </p>
          <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, color: 'var(--dark)' }}>
            Was uns auszeichnet
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 0 : '0 48px',
        }}>
          {VALUES.map(({ icon, title, text }) => (
            <div key={title} style={{
              padding: '22px 0',
              borderTop: '1px solid var(--border)',
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <i className={`bi ${icon}`} style={{ fontSize: 20, color: 'var(--dark)', flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>
                  {title}
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* ── Legal info ── */}
      <div className="container" style={{ maxWidth: 900, padding: isMobile ? '48px 24px' : '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 20 : 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 10 }}>
              Unternehmen
            </p>
            <h2 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 800, color: 'var(--dark)', lineHeight: 1.25 }}>
              Rechtliche Informationen
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
          }}>
            {[
              ['Firmenname', 'NET & CO ACCESS'],
              ['Handelsname', 'NexusTrailer'],
              ['Rechtsform', 'SAS (société par actions simplifiée)'],
              ['SIREN', '941 786 444'],
              ['SIRET', '941 786 444 00013'],
              ['Hauptsitz', '8 Rue de la Pointe, ZI A, 59113 Seclin, Frankreich'],
              ['E-Mail', 'info@nexustrailer.com'],
              ['Website', 'nexustrailer.com'],
            ].map(([label, value]) => (
              <div key={label} style={{ background: 'var(--white)', padding: '16px 20px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.4 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: 'var(--dark)', borderTop: '3px solid var(--accent)' }}>
        <div className="container" style={{
          maxWidth: 900,
          padding: isMobile ? '40px 24px' : '56px 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}>
          <div>
            <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800, color: 'white', marginBottom: 6 }}>
              Bereit einzukaufen?
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
              Entdecken Sie unser gesamtes Sortiment — {PRODUCTS.length}+ Produkte verfügbar.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-accent btn-lg">
              <i className="bi bi-grid" /> Zum Shop
            </Link>
            <Link to="/kontakt" className="btn btn-outline" style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
