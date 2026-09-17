import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useBreakpoint } from '../hooks/useBreakpoint';
import ProductCard from '../components/ProductCard';

// ── Reveal on scroll ──────────────────────────────────────────────────────────
function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) { setVisible(true); return; }
    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true); return;
    }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Constants ─────────────────────────────────────────────────────────────────
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
  [PRODUCTS.length + '+', 'Produkte'],
  ['5–7',                 'Werktage Lieferzeit'],
  ['30 Tage',             'Rückgaberecht'],
  ['2 Jahre',             'Herstellergarantie'],
];

const FAQ_PREVIEW = [
  { q: 'Wie lange dauert die Lieferung?',      a: 'Standardlieferung in 5–7 Werktagen nach Zahlungsbestätigung. Express in 1–3 Werktagen auf Anfrage.' },
  { q: 'Welche Zahlungsmethoden gibt es?',     a: 'Ausschließlich SEPA-Banküberweisung — 100 % im Voraus oder 50 % Anzahlung, Rest vor Versand.' },
  { q: 'Kann ich den Wohnwagen zurückgeben?',  a: 'Ja. 30 Tage Rückgaberecht ab Lieferung. Wir organisieren die Abholung kostenlos.' },
  { q: 'Sind die Wohnwagen COC-zertifiziert?', a: 'Ja. Alle Wohnwagen werden mit dem EU-Übereinstimmungszertifikat (COC) geliefert — direkte Zulassung in allen EU-Ländern.' },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const isMobile = useBreakpoint(768);

  const featured = useMemo(() => PRODUCTS.filter(p => p.featured).slice(0, 4), []);

  const [openFaq,    setOpenFaq]    = useState(null);
  const [hoveredCat, setHoveredCat] = useState(null);

  const catImage = useMemo(() => {
    const map = {};
    for (const cat of CATEGORIES) {
      const first = PRODUCTS.find(p => p.category === cat.id);
      map[cat.id]  = first ? first.image : cat.image;
    }
    return map;
  }, []);

  const [refCat,   visCat]   = useReveal();
  const [refProd,  visProd]  = useReveal();
  const [refAbout, visAbout] = useReveal();
  const [refFaq,   visFaq]   = useReveal();
  const [refCta,   visCta]   = useReveal();

  const reveal = (vis) => ({
    opacity:    vis ? 1 : 0,
    transform:  vis ? 'translateY(0)' : 'translateY(22px)',
    transition: 'opacity 0.65s ease, transform 0.65s ease',
  });

  /* ── reused button styles ── */
  const btnAccent = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'var(--accent)', color: 'white',
    padding: '14px 28px', fontWeight: 700, fontSize: 14,
    textDecoration: 'none', flexShrink: 0,
    transition: 'background 0.15s',
  };
  const btnGhost = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'transparent', color: 'rgba(255,255,255,0.68)',
    padding: '14px 28px', fontWeight: 600, fontSize: 14,
    border: '1.5px solid rgba(255,255,255,0.20)',
    textDecoration: 'none', flexShrink: 0,
    transition: 'border-color 0.15s, color 0.15s',
  };

  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────────────────────────
          Layout : texte sur la moitié gauche, image produit occupe toute
          la moitié droite jusqu'au bord du viewport — sans container.
      ─────────────────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--dark)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center',
            padding: isMobile ? '72px 0 52px' : '96px 0 80px',
          }}>
            <div style={{ maxWidth: 520 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 20,
              }}>Direktimporteur</p>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? 'clamp(38px, 12vw, 58px)' : 'clamp(58px, 5.2vw, 86px)',
                fontWeight: 900, color: 'white',
                lineHeight: 0.9, textTransform: 'uppercase', letterSpacing: '-0.02em',
                marginBottom: isMobile ? 24 : 36,
              }}>
                Wohnwagen<br />& Anhänger<br />direkt
              </h1>

              <p style={{
                fontSize: isMobile ? 14 : 15,
                color: 'rgba(255,255,255,0.48)', lineHeight: 1.80,
                maxWidth: 420, marginBottom: 36,
              }}>
                Kein Händler, kein Aufpreis. COC-zertifizierte Wohnwagen und Anhänger direkt — versandkostenfrei in ganz Europa.
              </p>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link to="/shop"
                  style={btnAccent}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
                >
                  Katalog ansehen →
                </Link>
                <Link to="/kontakt"
                  style={btnGhost}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.50)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)'; e.currentTarget.style.color = 'rgba(255,255,255,0.68)'; }}
                >
                  Experten kontaktieren
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── KATEGORIEN ────────────────────────────────────────────────────────
          Grille éditoriale asymétrique :
          wohnwagen = 2/3 hauteur × 2/3 largeur (grande cellule),
          les autres en plus petit autour.
      ─────────────────────────────────────────────────────────────────────── */}
      <section ref={refCat} style={{ padding: isMobile ? '48px 0' : '80px 0', background: 'var(--bg)', ...reveal(visCat) }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'baseline',
            justifyContent: 'space-between', marginBottom: 28,
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 18 : 22, fontWeight: 800,
              color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.06em',
            }}>Kategorien</h2>
            <Link to="/shop" style={{
              fontSize: 12.5, color: 'var(--accent)', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none',
            }}>
              Alle ansehen <i className="bi bi-arrow-right" style={{ fontSize: 12 }} />
            </Link>
          </div>

          <div style={isMobile
            ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }
            : { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '280px 230px 190px', gap: 3 }
          }>
            {(isMobile ? CATEGORIES : CATEGORIES.filter(c => CAT_DESKTOP_IDS.includes(c.id))).map((cat, idx, arr) => {
              const pos = isMobile
                ? (idx === arr.length - 1 ? { gridColumn: 'span 2' } : {})
                : (CAT_DESKTOP_POS[cat.id] || {});
              const isHov = hoveredCat === cat.id;
              return (
                <Link
                  key={cat.id}
                  to={`/shop?category=${cat.id}`}
                  style={{
                    position: 'relative', overflow: 'hidden',
                    textDecoration: 'none', display: 'block',
                    ...(isMobile ? { aspectRatio: '4/3', ...pos } : pos),
                  }}
                  onMouseEnter={() => setHoveredCat(cat.id)}
                  onMouseLeave={() => setHoveredCat(null)}
                >
                  <div style={{ position: 'absolute', inset: 0, background: '#c0c8d0' }} />
                  <img
                    src={catImage[cat.id]}
                    alt={cat.label}
                    loading="lazy"
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%', objectFit: 'cover',
                      transform: isHov ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.60s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: isHov
                      ? 'linear-gradient(to top, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.18) 52%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.66) 0%, rgba(0,0,0,0.06) 50%, transparent 100%)',
                    transition: 'background 0.35s',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: isMobile ? '12px 14px' : '18px 22px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                  }}>
                    <p style={{ fontSize: isMobile ? 13 : 14, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                      {cat.label}
                    </p>
                    <i className="bi bi-arrow-right" style={{
                      fontSize: 13, color: 'rgba(255,255,255,0.55)', flexShrink: 0,
                      transform: isHov ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.2s',
                    }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SELEKTION ─────────────────────────────────────────────────────────
          Desktop : 1 grande carte featured (image overlay) + 3 produits
          en liste horizontale à droite.
          Mobile  : ProductCard standard × 3.
      ─────────────────────────────────────────────────────────────────────── */}
      <section ref={refProd} style={{ padding: isMobile ? '48px 0' : '80px 0', background: 'white', ...reveal(visProd) }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: 32, flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8,
              }}>Auswahl</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? 18 : 22, fontWeight: 800,
                color: 'var(--dark)', textTransform: 'uppercase', letterSpacing: '0.06em',
              }}>Empfohlene Produkte</h2>
            </div>
            <Link to="/shop" style={{
              fontSize: 12.5, color: 'var(--accent)', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none',
            }}>
              Alle ansehen <i className="bi bi-arrow-right" style={{ fontSize: 12 }} />
            </Link>
          </div>

          {isMobile ? (
            /* Mobile : cartes standard */
            <div style={{ display: 'grid', gap: 16 }}>
              {featured.slice(0, 3).map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            /* Desktop : layout éditorial asymétrique */
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 3, minHeight: 460,
            }}>

              {/* Grande carte featured — image full-height + texte en overlay */}
              {featured[0] && (
                <Link
                  to={`/product/${featured[0].slug}`}
                  style={{
                    position: 'relative', overflow: 'hidden',
                    textDecoration: 'none', display: 'block', minHeight: 460,
                  }}
                  onMouseEnter={() => setHoveredCat('f0')}
                  onMouseLeave={() => setHoveredCat(null)}
                >
                  <div style={{ position: 'absolute', inset: 0, background: '#bec8d0' }} />
                  <img
                    src={featured[0].image}
                    alt={featured[0].name}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%', objectFit: 'cover',
                      transform: hoveredCat === 'f0' ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.60s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.28) 48%, transparent 100%)',
                  }} />
                  {featured[0].discount && (
                    <div style={{
                      position: 'absolute', top: 18, left: 18,
                      background: 'var(--accent)', color: 'white',
                      fontSize: 11, fontWeight: 700, padding: '4px 10px',
                    }}>
                      -{featured[0].discount}%
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px' }}>
                    <p style={{
                      fontSize: 11, color: 'rgba(255,255,255,0.46)',
                      textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 8,
                    }}>
                      {featured[0].subtitle?.split(' · ')[0]}
                    </p>
                    <p style={{
                      fontSize: 18, fontWeight: 700, color: 'white',
                      lineHeight: 1.3, marginBottom: 16,
                    }}>
                      {featured[0].name.split('–')[0].trim()}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 28, fontWeight: 900, color: 'white',
                      }}>
                        {featured[0].price.toLocaleString('de-DE')} €
                      </span>
                      {featured[0].originalPrice && (
                        <span style={{
                          fontSize: 14, color: 'rgba(255,255,255,0.38)',
                          textDecoration: 'line-through',
                        }}>
                          {featured[0].originalPrice.toLocaleString('de-DE')} €
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              )}

              {/* Liste des 3 produits suivants */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {featured.slice(1, 4).map((p, i) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.slug}`}
                    style={{
                      display: 'flex', flex: 1, textDecoration: 'none',
                      borderBottom: i < 2 ? '3px solid var(--bg)' : 'none',
                      borderLeft: '3px solid var(--bg)',
                      overflow: 'hidden', position: 'relative',
                    }}
                    onMouseEnter={() => setHoveredCat('f' + (i + 1))}
                    onMouseLeave={() => setHoveredCat(null)}
                  >
                    {/* Vignette image */}
                    <div style={{
                      width: 160, flexShrink: 0,
                      position: 'relative', overflow: 'hidden', background: '#e4ecf2',
                    }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          position: 'absolute', inset: 0,
                          width: '100%', height: '100%', objectFit: 'cover',
                          transform: hoveredCat === 'f' + (i + 1) ? 'scale(1.06)' : 'scale(1)',
                          transition: 'transform 0.50s ease',
                        }}
                      />
                    </div>

                    {/* Infos */}
                    <div style={{
                      flex: 1, padding: '22px 24px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'center',
                      background: 'white',
                    }}>
                      <p style={{
                        fontSize: 10.5, color: 'var(--text-light)',
                        textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7,
                      }}>
                        {p.subtitle?.split(' · ')[0]}
                      </p>
                      <p style={{
                        fontSize: 14, fontWeight: 700, color: 'var(--dark)',
                        lineHeight: 1.35, marginBottom: 12,
                      }}>
                        {p.name.split('–')[0].trim()}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                        <span style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 18, fontWeight: 900, color: 'var(--dark)',
                        }}>
                          {p.price.toLocaleString('de-DE')} €
                        </span>
                        {p.originalPrice && (
                          <span style={{ fontSize: 12, color: 'var(--text-light)', textDecoration: 'line-through' }}>
                            {p.originalPrice.toLocaleString('de-DE')} €
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Badge remise */}
                    {p.discount && (
                      <div style={{
                        position: 'absolute', top: 14, right: 14,
                        background: 'var(--accent)', color: 'white',
                        fontSize: 10, fontWeight: 700, padding: '3px 7px',
                      }}>
                        -{p.discount}%
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── ÜBER UNS ──────────────────────────────────────────────────────────
          Dark section, grille asymétrique :
          texte + CTA (55%) | stats en grande typographie (45%).
      ─────────────────────────────────────────────────────────────────────── */}
      <section ref={refAbout} style={{
        background: 'var(--dark)',
        padding: isMobile ? '64px 0' : '100px 0',
        ...reveal(visAbout),
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '55% 45%',
            gap: isMobile ? 52 : 96,
            alignItems: 'start',
          }}>

            {/* Texte */}
            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 20,
              }}>Über NexusTrailer</p>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? 'clamp(28px, 7vw, 38px)' : 'clamp(32px, 3vw, 46px)',
                fontWeight: 800, color: 'white',
                textTransform: 'uppercase', letterSpacing: '-0.01em',
                lineHeight: 1.02, marginBottom: 24,
              }}>
                Ihr Spezialist für Wohnwagen & Anhänger
              </h2>

              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,0.48)',
                lineHeight: 1.82, marginBottom: 40, maxWidth: 440,
              }}>
                NexusTrailer liefert COC-zertifizierte Wohnwagen und Anhänger direkt vom Hersteller — ohne Zwischenhändler, mit persönlichem Service und kostenlosem Versand in ganz Europa.
              </p>

              <Link to="/uber-uns"
                style={{ ...btnAccent }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                Mehr über uns →
              </Link>
            </div>

            {/* Stats — typographie grande */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              alignItems: 'start', gap: 0,
            }}>
              {STATS.map(([num, label], i) => (
                <div key={label} style={{
                  padding: isMobile ? '24px 0' : '32px 0',
                  paddingLeft: i % 2 !== 0 ? (isMobile ? 20 : 32) : 0,
                  borderLeft: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  borderTop: i >= 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isMobile ? 38 : 52,
                    fontWeight: 900, color: 'white',
                    lineHeight: 1, marginBottom: 10, letterSpacing: '-0.02em',
                  }}>{num}</p>
                  <p style={{
                    fontSize: 11, color: 'rgba(255,255,255,0.32)',
                    textTransform: 'uppercase', letterSpacing: '0.10em', lineHeight: 1.5,
                  }}>{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────
          2 colonnes : intro (2/5) + accordéon (3/5).
          +/− accent, fond var(--bg).
      ─────────────────────────────────────────────────────────────────────── */}
      <section ref={refFaq} style={{
        padding: isMobile ? '56px 0' : '96px 0',
        background: 'var(--bg)',
        ...reveal(visFaq),
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr',
            gap: isMobile ? 44 : 96,
            alignItems: 'start',
          }}>

            <div>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 16,
              }}>Support</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? 22 : 'clamp(24px, 2.5vw, 32px)',
                fontWeight: 800, color: 'var(--dark)',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                lineHeight: 1.05, marginBottom: 18,
              }}>Häufige Fragen</h2>
              <p style={{
                fontSize: 14, color: 'var(--text-muted)',
                lineHeight: 1.82, marginBottom: 32,
              }}>
                Lieferung, Zahlung, Rückgabe und Garantie — die wichtigsten Antworten auf einen Blick.
              </p>
              <Link to="/kontakt" className="btn btn-primary">
                Kontakt aufnehmen
              </Link>
            </div>

            <div>
              {FAQ_PREVIEW.map(({ q, a }, i) => (
                <div key={q} style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '20px 0',
                      background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left', gap: 16,
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)' }}>{q}</span>
                    <span style={{
                      fontSize: 22, fontWeight: 300, color: 'var(--accent)',
                      lineHeight: 1, flexShrink: 0,
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{
                      paddingBottom: 20, fontSize: 14,
                      color: 'var(--text-muted)', lineHeight: 1.85,
                    }}>{a}</div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
              <div style={{ marginTop: 20 }}>
                <Link to="/faq" style={{
                  fontSize: 13, color: 'var(--accent)',
                  fontWeight: 600, textDecoration: 'none',
                }}>
                  Alle Fragen ansehen →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────────
          Dark, borderTop accent — titre XXL éditorial.
      ─────────────────────────────────────────────────────────────────────── */}
      <section ref={refCta} style={{
        background: 'var(--dark)',
        padding: isMobile ? '64px 0' : '104px 0',
        borderTop: '3px solid var(--accent)',
        ...reveal(visCta),
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? 36 : 80,
          }}>
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 18,
              }}>Jetzt entdecken</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? 'clamp(32px, 10vw, 52px)' : 'clamp(44px, 4.5vw, 68px)',
                fontWeight: 900, color: 'white',
                textTransform: 'uppercase', letterSpacing: '-0.02em',
                lineHeight: 0.93, marginBottom: 18,
              }}>
                Bereit für Ihren<br />neuen Wohnwagen?
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.36)', lineHeight: 1.7 }}>
                Kostenloser Versand · 2 Jahre Garantie · 30 Tage Rückgabe
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <Link to="/shop"
                style={{ ...btnAccent, padding: '16px 36px', fontSize: 15 }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                Zum Katalog <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/angebot"
                style={{ ...btnGhost, padding: '16px 36px', fontSize: 15 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.50)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.20)'; e.currentTarget.style.color = 'rgba(255,255,255,0.68)'; }}
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
