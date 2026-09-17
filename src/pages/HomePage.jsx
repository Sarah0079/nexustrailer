import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

const FEATURES = [
  { icon: 'bi-truck',         title: 'Kostenlose Lieferung',  desc: 'Versandkostenfrei in ganz Europa in 5–7 Werktagen. Express auf Anfrage.' },
  { icon: 'bi-shield-check',  title: '2 Jahre Garantie',      desc: 'Herstellergarantie auf alle Produkte gegen Fabrikationsfehler.' },
  { icon: 'bi-arrow-repeat',  title: '30 Tage Rückgabe',      desc: 'Nicht zufrieden? Wir holen das Produkt ab und erstatten den vollen Betrag.' },
  { icon: 'bi-patch-check',   title: 'COC-zertifiziert',      desc: 'Alle Wohnwagen mit EU-Übereinstimmungszertifikat für die direkte Zulassung.' },
];

const FAQ_PREVIEW = [
  { q: 'Wie lange dauert die Lieferung?',      a: 'Standardlieferung in 5–7 Werktagen nach Zahlungsbestätigung. Express in 1–3 Werktagen auf Anfrage.' },
  { q: 'Welche Zahlungsmethoden gibt es?',     a: 'Ausschließlich SEPA-Banküberweisung — 100 % im Voraus oder 50 % Anzahlung, Rest vor Versand.' },
  { q: 'Kann ich den Wohnwagen zurückgeben?',  a: 'Ja. 30 Tage Rückgaberecht ab Lieferung. Wir organisieren die Abholung kostenlos.' },
  { q: 'Sind die Wohnwagen COC-zertifiziert?', a: 'Ja. Alle Wohnwagen werden mit dem EU-Übereinstimmungszertifikat (COC) geliefert — direkte Zulassung in allen EU-Ländern.' },
];

// Positions éditoriales pour la grille desktop des catégories
// Sur desktop : 6 catégories en grille éditoriale 3-col × 3-row
// (kuehl reste accessible depuis /shop via "Alle ansehen")
const CAT_DESKTOP_POS = {
  wohnwagen: { gridColumn: '1/3', gridRow: '1/3' },
  tinyhouse: { gridColumn: '3',   gridRow: '1'   },
  bagger:    { gridColumn: '3',   gridRow: '2'   },
  kipper:    { gridColumn: '1',   gridRow: '3'   },
  pritsche:  { gridColumn: '2',   gridRow: '3'   },
  food:      { gridColumn: '3',   gridRow: '3'   },
};
const CAT_DESKTOP_IDS = Object.keys(CAT_DESKTOP_POS);

const STATS = [
  [PRODUCTS.length + '+', 'Produkte im Katalog'],
  ['5–7',                 'Werktage Lieferzeit'],
  ['30 Tage',             'Rückgaberecht'],
  ['2 Jahre',             'Herstellergarantie'],
];

export default function HomePage() {
  const isMobile = useBreakpoint(768);
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const [openFaq,     setOpenFaq]     = useState(null);
  const [hoveredCat,  setHoveredCat]  = useState(null);

  const catImage = useMemo(() => {
    const map = {};
    for (const cat of CATEGORIES) {
      const first = PRODUCTS.find(p => p.category === cat.id);
      map[cat.id] = first ? first.image : cat.image;
    }
    return map;
  }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ background: 'var(--dark)', padding: isMobile ? '72px 0 56px' : '100px 0 84px' }}>
        <div className="container">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? 'clamp(26px, 10vw, 48px)' : 'clamp(72px, 8vw, 118px)',
            fontWeight: 900, color: 'white',
            lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.01em',
            marginBottom: isMobile ? 28 : 44,
          }}>
            Wohnwagen &<br />Anhänger direkt
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
            gap: isMobile ? 24 : 52,
            alignItems: 'flex-end',
            marginBottom: isMobile ? 28 : 36,
          }}>
            <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(255,255,255,0.50)', lineHeight: 1.78, maxWidth: 460 }}>
              Kein Händler, kein Aufpreis. COC-zertifizierte Wohnwagen und Anhänger direkt — versandkostenfrei in ganz Europa.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/shop"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: 'white', padding: isMobile ? '13px 22px' : '15px 30px', fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                Katalog ansehen →
              </Link>
              <Link to="/kontakt"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: 'rgba(255,255,255,0.70)', padding: isMobile ? '13px 22px' : '15px 30px', fontWeight: 600, fontSize: 14, border: '1.5px solid rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.70)'; }}
              >
                Experten kontaktieren
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 0', borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: 20 }}>
            {['Wohnwagen', 'Tiny House', 'Kipper', 'Baumaschinen', 'Food-Trucks'].map((type, i, arr) => (
              <span key={type} style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.30)', textTransform: 'uppercase', letterSpacing: '0.09em', paddingRight: 14, marginRight: 14, borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none' }}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Réassurance ── */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)' }}>
            {[
              { icon: 'bi-truck',        label: 'Kostenloser Versand' },
              { icon: 'bi-shield-check', label: '2 Jahre Garantie' },
              { icon: 'bi-arrow-repeat', label: '30 Tage Rückgabe' },
              { icon: 'bi-lock',         label: 'Sicheres Bezahlen' },
            ].map(({ icon, label }, i) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: isMobile ? '14px 12px' : '16px 20px',
                borderLeft: i > 0 && !(isMobile && i === 2) ? '1px solid var(--border)' : 'none',
                borderTop: isMobile && i >= 2 ? '1px solid var(--border)' : 'none',
              }}>
                <i className={`bi ${icon}`} style={{ fontSize: 16, color: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Kategorien ── */}
      <section style={{ padding: isMobile ? '48px 0' : '72px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 22 : 28, fontWeight: 800, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Kategorien
            </h2>
            <Link to="/shop" style={{ fontSize: 12.5, color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              Alle ansehen <i className="bi bi-arrow-right" style={{ fontSize: 12 }} />
            </Link>
          </div>

          <div style={isMobile
            ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }
            : { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '260px 240px 210px', gap: 3 }
          }>
            {(isMobile ? CATEGORIES : CATEGORIES.filter(c => CAT_DESKTOP_IDS.includes(c.id))).map((cat, idx, arr) => {
              const pos = isMobile ? (idx === arr.length - 1 ? { gridColumn: 'span 2' } : {}) : (CAT_DESKTOP_POS[cat.id] || {});
              const isHovered = hoveredCat === cat.id;
              return (
                <Link
                  key={cat.id}
                  to={`/shop?category=${cat.id}`}
                  style={{ position: 'relative', overflow: 'hidden', textDecoration: 'none', display: 'block', ...(isMobile ? { aspectRatio: '4/3', ...pos } : pos) }}
                  onMouseEnter={() => setHoveredCat(cat.id)}
                  onMouseLeave={() => setHoveredCat(null)}
                >
                  <div style={{ position: 'absolute', inset: 0, background: '#E8EAEC' }} />
                  <img
                    src={catImage[cat.id]}
                    alt={cat.label}
                    loading="lazy"
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', display: 'block',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.55s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: isHovered
                      ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.14) 55%, rgba(0,0,0,0) 100%)',
                    transition: 'background 0.3s',
                  }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: isMobile ? '12px 14px' : '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <p style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>{cat.label}</p>
                    <i className="bi bi-arrow-right" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', transform: isHovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Empfohlene Produkte ── */}
      <section style={{ padding: isMobile ? '48px 0' : '72px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>Auswahl</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 22 : 28, fontWeight: 800, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                Empfohlene Produkte
              </h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">
              Alle ansehen <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Über uns ── */}
      <section style={{ background: 'var(--dark)', padding: isMobile ? '56px 0' : '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>

            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
                Über NexusTrailer
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(26px, 7vw, 36px)' : 'clamp(30px, 3vw, 42px)', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.05, marginBottom: 22 }}>
                Ihr Spezialist für Wohnwagen & Anhänger
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.54)', lineHeight: 1.82, marginBottom: 36, maxWidth: 480 }}>
                NexusTrailer liefert COC-zertifizierte Wohnwagen und Anhänger direkt vom Hersteller — ohne Zwischenhändler, mit persönlichem Service und kostenlosem Versand in ganz Europa.
              </p>
              <Link to="/uber-uns"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', color: 'white', padding: '13px 26px', fontWeight: 700, fontSize: 14, textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                Mehr über uns →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {STATS.map(([num, label], i) => (
                <div key={label} style={{
                  padding: '28px 24px',
                  borderTop: i < 2 ? 'none' : '1px solid rgba(255,255,255,0.09)',
                  borderLeft: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.09)' : 'none',
                }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 28 : 34, fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: 8 }}>{num}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.5 }}>{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Warum NexusTrailer ── */}
      <section style={{ padding: isMobile ? '48px 0' : '72px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>Unsere Stärken</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 22 : 28, fontWeight: 800, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Warum NexusTrailer?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0 72px' }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 18, padding: '24px 0', borderTop: '1px solid var(--border)' }}>
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 18, color: 'var(--accent)', lineHeight: 1 }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: isMobile ? '48px 0' : '72px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>

            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>Support</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.05, marginBottom: 20 }}>
                Häufige Fragen
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                Lieferung, Zahlung, Rückgabe und Garantie — die wichtigsten Antworten.
              </p>
              <Link to="/kontakt" className="btn btn-outline">
                Kontakt aufnehmen
              </Link>
            </div>

            <div>
              {FAQ_PREVIEW.map(({ q, a }, i) => (
                <div key={q} style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--dark)' }}>{q}</span>
                    <i className={`bi bi-${openFaq === i ? 'dash' : 'plus'}`} style={{ fontSize: 18, color: 'var(--text-muted)', flexShrink: 0 }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 18, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>{a}</div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
              <div style={{ marginTop: 20 }}>
                <Link to="/faq" style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                  Alle Fragen ansehen →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ background: 'var(--dark)', padding: isMobile ? '56px 0' : '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', gap: isMobile ? 28 : 64 }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 14 }}>
                Jetzt entdecken
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(26px, 8vw, 36px)' : 'clamp(30px, 3vw, 42px)', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.05, marginBottom: 12 }}>
                Bereit für Ihren neuen Wohnwagen?
              </h2>
              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                Kostenloser Versand · 2 Jahre Garantie · 30 Tage Rückgabe
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
              <Link to="/shop" className="btn btn-accent btn-lg">
                Zum Katalog <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/angebot" className="btn btn-lg"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.22)', color: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.background = 'transparent'; }}
              >
                Angebot anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
