import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, TRUST_BADGES, TESTIMONIALS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

/* ── Kontakt-Widget ──────────────────────────────────────────────────────── */
function KontaktWidget() {
  const [form, setForm] = useState({ name: '', email: '', nachricht: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const isMobile = useBreakpoint(640);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setSent(true); setLoading(false); }, 600);
  };

  return sent ? (
    <div style={{ textAlign: 'center', padding: '56px 24px', background: 'white', border: '1px solid var(--border)' }}>
      <i className="bi bi-check-circle-fill" style={{ fontSize: 36, color: 'var(--green)', display: 'block', marginBottom: 16 }} />
      <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 8 }}>Nachricht gesendet!</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65 }}>Wir antworten innerhalb von 24 Werktunden.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'white', padding: '36px 32px', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>Name *</label>
          <input className="input" required placeholder="Ihr Name" value={form.name} onChange={set('name')} maxLength={80} />
        </div>
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>E-Mail *</label>
          <input className="input" type="email" required placeholder="ihre@email.de" value={form.email} onChange={set('email')} maxLength={254} />
        </div>
      </div>
      <div>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 7, letterSpacing: '0.02em' }}>Nachricht *</label>
        <textarea className="input" required rows={5} placeholder="Womit können wir helfen?" value={form.nachricht} onChange={set('nachricht')} style={{ resize: 'vertical' }} maxLength={1000} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <button type="submit" className="btn btn-accent btn-lg" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
          {loading ? <><i className="bi bi-hourglass-split" /> Wird gesendet…</> : <><i className="bi bi-send" /> Nachricht senden</>}
        </button>
        <span style={{ fontSize: 12, color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: 5 }}>
          Antwort innerhalb 24 h
        </span>
      </div>
    </form>
  );
}

/* ── Daten ───────────────────────────────────────────────────────────────── */
const FEATURES = [
  { icon: 'bi-truck',         title: 'Kostenlose Lieferung',   desc: 'Versandkostenfrei in ganz Europa in 5–7 Werktagen. Express auf Anfrage.' },
  { icon: 'bi-shield-check',  title: '2 Jahre Garantie',       desc: 'Herstellergarantie auf alle Produkte gegen Fabrikationsfehler.' },
  { icon: 'bi-arrow-repeat',  title: '30 Tage Rückgabe',       desc: 'Nicht zufrieden? Wir holen das Produkt ab und erstatten den vollen Betrag.' },
  { icon: 'bi-patch-check',   title: 'COC-zertifiziert',       desc: 'Alle Wohnwagen mit EU-Übereinstimmungszertifikat für die direkte Zulassung.' },
];

const FAQS = [
  { q: 'Wie lange dauert die Lieferung?',          a: 'Die Standardlieferung dauert 5–7 Werktage nach Zahlungsbestätigung. Ein Express-Service in 1–3 Werktagen ist auf Anfrage mit Aufpreis verfügbar.' },
  { q: 'Sind die Wohnwagen in gutem Zustand?',     a: 'Ja. Jeder Wohnwagen wird vor dem Versand technisch geprüft und mit einem Zustandszertifikat geliefert.' },
  { q: 'Wie wird die Zahlung abgewickelt?',         a: 'Ausschließlich per SEPA-Banküberweisung – entweder 100 % im Voraus oder 50 % Anzahlung zur Reservierung, Rest vor Lieferung.' },
  { q: 'Kann ich den Wohnwagen zurückgeben?',       a: 'Sie haben 30 Tage ab Lieferung Rückgaberecht. Wir organisieren die Abholung und erstatten den vollen Kaufpreis.' },
];

const STATS = [
  ['1.000+', 'Zufriedene Kunden'],
  ['200+',   'Produkte auf Lager'],
  ['4,8★',   'Durchschnittsbewertung'],
  ['2–3',    'Werktage Lieferzeit'],
];

/* ── Komponente ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  const location = useLocation();
  const isMobile = useBreakpoint(768);
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const [openFaq, setOpenFaq] = useState(null);

  const counts = useMemo(() => {
    const c = {};
    PRODUCTS.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  useEffect(() => {
    const id = location.hash.replace('#', '');
    if (!id) return;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => clearTimeout(t);
  }, [location.hash]);

  const scrollToKontakt = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Background image */}
        <img
          src="/image/2.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.60) 0%, rgba(15,23,42,0.25) 45%, rgba(15,23,42,0.70) 100%)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: isMobile ? '0 24px' : '0 48px',
          maxWidth: 800,
        }}>
          {/* Badge pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.22)',
            borderRadius: 999,
            padding: '7px 20px',
            marginBottom: 32,
          }}>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'white', letterSpacing: '0.01em' }}>
              COC-zertifiziert · Direktversand aus Frankreich 🇫🇷
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: isMobile ? 'clamp(34px, 9vw, 52px)' : 'clamp(52px, 6vw, 78px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: 22,
            textWrap: 'balance',
          }}>
            Ihr Zuhause,{' '}
            <span style={{ color: 'var(--accent)' }}>wohin die Straße Sie führt</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: isMobile ? 14.5 : 17,
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.72,
            marginBottom: 40,
            maxWidth: 520,
          }}>
            Hochwertige Wohnwagen & Anhänger – zertifiziert, versandfertig,
            kostenlos geliefert in ganz Europa. Bis zu 55&nbsp;% unter Händlerpreis.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/shop" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'white', color: 'var(--dark)',
              borderRadius: 999, padding: isMobile ? '12px 24px' : '14px 32px',
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
              border: '1.5px solid transparent',
              transition: 'opacity 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Jetzt entdecken →
            </Link>
            <button onClick={scrollToKontakt} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: 'white',
              borderRadius: 999, padding: isMobile ? '12px 24px' : '14px 32px',
              fontWeight: 600, fontSize: 14,
              border: '1.5px solid rgba(255,255,255,0.38)',
              cursor: 'pointer', transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'}
            >
              Experten kontaktieren
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase',
          }}>
            Scrollen ↓
          </span>
        </div>
      </section>

      {/* ── Trust-Strip ──────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>
            {[
              { icon: 'bi-lock',         label: 'Sicheres Zahlen' },
              { icon: 'bi-truck',        label: 'Kostenloser Versand' },
              { icon: 'bi-shield-check', label: '2 Jahre Garantie' },
              { icon: 'bi-arrow-repeat', label: '30 Tage Rückgabe' },
              { icon: 'bi-headset',      label: 'Persönlicher Support' },
            ].map(({ icon, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 24px', borderLeft: i > 0 ? '1px solid var(--border)' : 'none' }}>
                <i className={`bi ${icon}`} style={{ fontSize: 14, color: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Kategorien ────────────────────────────────────────────────────── */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>Kategorien</h2>
            <Link to="/shop" style={{ fontSize: 12.5, color: 'var(--accent)', fontWeight: 600 }}>
              Alle ansehen
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`, gap: 10 }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 16px', background: 'white',
                border: '1px solid var(--border)', textDecoration: 'none',
                transition: 'border-color 0.18s, box-shadow 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(249,115,22,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--dark)' }}>{cat.label}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{counts[cat.id] || 0}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Empfohlene Produkte ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Auswahl</p>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Empfohlene Produkte</h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">
              Alle ansehen <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Kundenmeinungen ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: 14 }} />)}
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>4,8 / 5 · über 1.000 Bewertungen</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Das sagen unsere Kunden
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {TESTIMONIALS.map(({ name, role, rating, text }) => (
              <div key={name} style={{
                background: 'white', padding: '28px 26px',
                border: '1px solid var(--border)', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(rating)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: 12 }} />)}
                </div>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.8, flex: 1, fontStyle: 'italic' }}>
                  „{text}"
                </p>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, background: 'var(--accent-light)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--dark)' }}>{name}</p>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Über uns ──────────────────────────────────────────────────────── */}
      <section id="uber-uns" className="section" style={{ scrollMarginTop: '64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '55% 45%', gap: isMobile ? 48 : 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>
                Über uns
              </p>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: 20, lineHeight: 1.1 }}>
                Ihr Spezialist für Wohnwagen & Anhänger seit 2015
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                NexusTrailer wurde mit einem klaren Ziel gegründet: Hochwertige Wohnwagen und Anhänger für Privatpersonen und Unternehmen in ganz Europa zugänglich zu machen – zu fairen Preisen, mit transparentem Service und einem persönlichen Kundenerlebnis.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                Wir arbeiten direkt mit Herstellern wie Sterckeman, ERIBA und Caravelair zusammen, um Ihnen die besten Produkte zum günstigsten Preis zu bieten – kostenloser Versand und COC-Zertifikat inklusive.
              </p>
              <Link to="/shop" className="btn btn-primary">Zum Shop</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', border: '1px solid var(--border)' }}>
              {STATS.map(([n, l], i) => (
                <div key={l} style={{
                  padding: '32px 20px', textAlign: 'center',
                  background: i % 2 === 0 ? 'white' : 'var(--bg)',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.03em' }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.45 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Warum NexusTrailer ────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Unsere Garantien</p>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Warum NexusTrailer?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{
                display: 'flex', gap: 18, padding: '24px 24px',
                background: 'white', border: '1px solid var(--border)',
              }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 20, color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.72 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Häufige Fragen</p>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
                Alles, was Sie wissen müssen
              </h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                Wir beantworten die häufigsten Fragen. Haben Sie weitere? Schreiben Sie uns gerne.
              </p>
              <button onClick={scrollToKontakt} className="btn btn-outline">
                Uns kontaktieren
              </button>
            </div>
            <div>
              {FAQS.map(({ q, a }, i) => (
                <div key={q} style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                  >
                    <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--dark)' }}>{q}</span>
                    <i className={`bi bi-${openFaq === i ? 'dash' : 'plus'}`} style={{ fontSize: 18, color: 'var(--text-muted)', flexShrink: 0 }} />
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 18, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8 }}>
                      {a}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
              <div style={{ marginTop: 20 }}>
                <Link to="/faq" style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                  Alle Fragen anzeigen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt ───────────────────────────────────────────────────────── */}
      <section id="kontakt" className="section" style={{ background: 'var(--bg)', scrollMarginTop: '64px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>Kontakt</p>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 10 }}>Haben Sie eine Frage?</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Wir antworten innerhalb von 24 Werktunden. Sie erreichen uns auch per{' '}
              <a href="mailto:info@nexustrailer.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>info@nexustrailer.com</a>{' '}
              oder telefonisch unter{' '}
              <a href="tel:+33756836479" style={{ color: 'var(--accent)', fontWeight: 600 }}>+33 7 56 83 64 79</a>.
            </p>
          </div>
          <KontaktWidget />
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--dark)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(249,115,22,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <p style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 20 }}>
            Über 1.000 zufriedene Kunden
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 900, color: 'white', letterSpacing: '-0.025em', marginBottom: 16, lineHeight: 1.1 }}>
            Bereit für Ihren neuen Wohnwagen?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 40, maxWidth: 440, margin: '0 auto 40px' }}>
            Kostenloser Versand in ganz Europa. Ohne Überraschungen. Mit 2 Jahren Garantie.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-accent btn-lg">
              <i className="bi bi-grid" /> Zum Katalog
            </Link>
            <button
              onClick={scrollToKontakt}
              className="btn btn-lg"
              style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Angebot anfragen
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
