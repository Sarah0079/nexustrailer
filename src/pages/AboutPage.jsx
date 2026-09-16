import { Link } from 'react-router-dom';
import { useBreakpoint } from '../hooks/useBreakpoint';

const STATS = [
  { n: '1.000+', l: 'Kunden',   d: 'Zufriedene Kunden europaweit', icon: 'bi-people' },
  { n: '200+',   l: 'Produkte', d: 'Immer auf Lager verfügbar',    icon: 'bi-box-seam' },
  { n: '2–3',    l: 'Tage',     d: 'Lieferzeit deutschlandweit',   icon: 'bi-truck' },
  { n: '100%',   l: 'Qualität', d: 'TÜV-geprüft & zertifiziert',  icon: 'bi-patch-check' },
];

export default function AboutPage() {
  const isMobile = useBreakpoint(768);
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>ÜBER UNS</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>
            Ihr Partner für hochwertige Transportlösungen
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 900 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 48, marginBottom: 56, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, color: 'var(--dark)' }}>Wer wir sind</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
              NexusTrailer ist ein führender Anbieter von Anhängern, Wohnwagen und Baumaschinen mit Sitz in Frankreich. Wir importieren direkt vom Hersteller und geben den Vorteil an unsere Kunden weiter.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Seit unserer Gründung haben wir über 1.000 zufriedene Kunden in ganz Europa beliefert. Qualität, Zuverlässigkeit und persönlicher Service stehen dabei immer an erster Stelle.
            </p>
          </div>
          <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '4/3' }}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" alt="NexusTrailer Lager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 24, marginBottom: 56 }}>
          {STATS.map(({ n, l, d, icon }) => (
            <div key={l} style={{ padding: '28px 24px', background: 'var(--bg)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <i className={`bi ${icon}`} style={{ fontSize: 28, color: 'var(--accent)', display: 'block', marginBottom: 10 }} />
              <div style={{ fontSize: 32, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: 4 }}>{n}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{l}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--dark)', borderRadius: 'var(--r-xl)', padding: '40px 48px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 8 }}>Bereit einzukaufen?</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>Entdecken Sie unser gesamtes Sortiment.</p>
          </div>
          <Link to="/shop" className="btn btn-accent btn-lg" style={{ flexShrink: 0 }}>
            <i className="bi bi-grid" /> Zum Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
