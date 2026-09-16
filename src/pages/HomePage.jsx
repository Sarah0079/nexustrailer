import { useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, TESTIMONIALS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

const FEATURES = [
  { icon: 'bi-truck',         title: 'Kostenlose Lieferung',  desc: 'Versandkostenfrei in ganz Europa in 5–7 Werktagen. Express auf Anfrage.' },
  { icon: 'bi-shield-check',  title: '2 Jahre Garantie',      desc: 'Herstellergarantie auf alle Produkte gegen Fabrikationsfehler.' },
  { icon: 'bi-arrow-repeat',  title: '30 Tage Rückgabe',      desc: 'Nicht zufrieden? Wir holen das Produkt ab und erstatten den vollen Betrag.' },
  { icon: 'bi-patch-check',   title: 'COC-zertifiziert',      desc: 'Alle Wohnwagen mit EU-Übereinstimmungszertifikat für die direkte Zulassung.' },
];

const STATS = [
  ['1.000+', 'Zufriedene Kunden'],
  ['200+',   'Produkte auf Lager'],
  ['4,8★',   'Durchschnittsbewertung'],
  ['2–3',    'Werktage Lieferzeit'],
];

const FAQ_PREVIEW = [
  { q: 'Wie lange dauert die Lieferung?',   a: 'Standardlieferung in 5–7 Werktagen nach Zahlungsbestätigung. Express in 1–3 Werktagen auf Anfrage.' },
  { q: 'Welche Zahlungsmethoden gibt es?',  a: 'Ausschließlich SEPA-Banküberweisung — 100 % im Voraus oder 50 % Anzahlung, Rest vor Versand.' },
  { q: 'Kann ich den Wohnwagen zurückgeben?', a: 'Ja. 30 Tage Rückgaberecht ab Lieferung. Wir organisieren die Abholung kostenlos.' },
];

export default function HomePage() {
  const isMobile  = useBreakpoint(768);
  const featured  = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const videoRef  = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    v.play().catch(() => {});
    const restart = () => { v.currentTime = 0; v.play().catch(() => {}); };
    v.addEventListener('ended', restart);
    return () => v.removeEventListener('ended', restart);
  }, []);

  const counts = useMemo(() => {
    const c = {};
    PRODUCTS.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'center' }}>
        <video ref={videoRef} autoPlay loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src="/image/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.58) 60%, rgba(15,23,42,0.20) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1240, margin: '0 auto', padding: isMobile ? '7rem 1.5rem 5rem' : '7rem 2rem 5rem', width: '100%' }}>
          <div style={{ maxWidth: 660 }}>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', textWrap: 'balance', marginBottom: 20 }}>
              Wohnwagen & Anhänger —<br />direkt, zertifiziert, bis zu 55&nbsp;% günstiger.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 'clamp(.9rem, 2vw, 1.075rem)', lineHeight: 1.72, maxWidth: 520, marginBottom: 24 }}>
              Kein Händler, kein Aufpreis. Wir liefern hochwertige Wohnwagen, Kipperanhänger und Nutzfahrzeuge direkt — COC-zertifiziert, versandfertig, kostenlos in ganz Europa.
            </p>
            <div style={{ display: 'inline-flex', gap: '.625rem', alignItems: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 4, padding: '.5rem .875rem', marginBottom: 32 }}>
              <i className="bi bi-check2" style={{ color: 'var(--accent)', fontSize: 14 }} />
              <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '.82rem', fontWeight: 500 }}>COC-zertifiziert · 2 Jahre Garantie · 30 Tage Rückgabe</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn-accent btn-lg">Jetzt entdecken</Link>
              <Link to="/kontakt" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.10)', color: 'white', border: '1px solid rgba(255,255,255,0.20)' }}>
                Experten kontaktieren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white', padding: '14px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: 0 }}>
            {[
              { icon: 'bi-lock',         label: 'Sicheres Zahlen' },
              { icon: 'bi-truck',        label: 'Kostenloser Versand' },
              { icon: 'bi-shield-check', label: '2 Jahre Garantie' },
              { icon: 'bi-arrow-repeat', label: '30 Tage Rückgabe' },
              { icon: 'bi-headset',      label: 'Persönlicher Support' },
            ].map(({ icon, label }, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px', borderLeft: (!isMobile && i > 0) ? '1px solid var(--border)' : 'none', borderTop: (isMobile && i >= 2) ? '1px solid var(--border)' : 'none' }}>
                <i className={`bi ${icon}`} style={{ fontSize: 14, color: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--text-muted)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Kategorien ── */}
      <section className="section-sm" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>Kategorien</h2>
            <Link to="/shop" style={{ fontSize: 12.5, color: 'var(--accent)', fontWeight: 600 }}>Alle ansehen</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`, gap: 10 }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 16px', background: 'white',
                border: '1px solid var(--border)', textDecoration: 'none',
                transition: 'border-color 0.18s, box-shadow 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(224,38,26,0.10)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--dark)' }}>{cat.label}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{counts[cat.id] || 0}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Empfohlene Produkte ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Auswahl</p>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Empfohlene Produkte</h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">Alle ansehen <i className="bi bi-arrow-right" /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Warum NexusTrailer ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Unsere Garantien</p>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Warum NexusTrailer?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: 18, padding: '24px 24px', background: 'white', border: '1px solid var(--border)' }}>
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

      {/* ── Über uns teaser ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '55% 45%', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Über uns</p>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: 20, lineHeight: 1.1 }}>
                Ihr Spezialist für Wohnwagen & Anhänger seit 2015
              </h2>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                NexusTrailer wurde mit einem klaren Ziel gegründet: Hochwertige Wohnwagen und Anhänger für Privatpersonen und Unternehmen in ganz Europa zugänglich zu machen – zu fairen Preisen, mit transparentem Service.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                Wir arbeiten direkt mit Herstellern wie Sterckeman, ERIBA und Caravelair zusammen – kostenloser Versand und COC-Zertifikat inklusive.
              </p>
              <Link to="/uber-uns" className="btn btn-outline">
                Mehr über uns <i className="bi bi-arrow-right" />
              </Link>
            </div>
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

      {/* ── Kundenmeinungen ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: 14 }} />)}
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>4,8 / 5 · über 1.000 Bewertungen</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Das sagen unsere Kunden</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
            {TESTIMONIALS.map(({ name, role, rating, text }) => (
              <div key={name} style={{ background: 'white', padding: '28px 26px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(rating)].map((_, i) => <i key={i} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: 12 }} />)}
                </div>
                <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.8, flex: 1, fontStyle: 'italic' }}>„{text}"</p>
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

      {/* ── FAQ teaser ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>Häufige Fragen</p>
              <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
                Alles, was Sie wissen müssen
              </h2>
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
                Wir haben alle häufigen Fragen zu Lieferung, Zahlung, Rückgabe und Garantie beantwortet.
              </p>
              <Link to="/faq" className="btn btn-outline">
                Alle Fragen ansehen <i className="bi bi-arrow-right" />
              </Link>
            </div>
            <div>
              {FAQ_PREVIEW.map(({ q, a }, i) => (
                <div key={q} style={{ borderTop: '1px solid var(--border)', padding: '18px 0' }}>
                  <p style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{q}</p>
                  <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.72 }}>{a}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt & Angebot ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Wir sind für Sie da</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 8 }}>Privatpersonen oder Unternehmen — wir haben die passende Lösung.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>

            {/* Kontakt */}
            <div style={{ background: 'white', border: '1px solid var(--border)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ width: 48, height: 48, background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-chat-dots" style={{ fontSize: 22, color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)' }}>Eine Frage stellen</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Fragen zu einem Produkt, zur Lieferung oder zum Bestellprozess? Unser Team antwortet innerhalb von 24 Werktunden.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="mailto:info@nexustrailer.com" style={{ fontSize: 13.5, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="bi bi-envelope" style={{ color: 'var(--accent)' }} /> info@nexustrailer.com
                </a>
                <a href="tel:+33756836479" style={{ fontSize: 13.5, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="bi bi-telephone" style={{ color: 'var(--accent)' }} /> +33 7 56 83 64 79
                </a>
              </div>
              <Link to="/kontakt" className="btn btn-accent" style={{ marginTop: 8, justifyContent: 'center' }}>
                Kontakt aufnehmen
              </Link>
            </div>

            {/* Angebot */}
            <div style={{ background: 'var(--dark)', border: '1px solid var(--dark)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-briefcase" style={{ fontSize: 22, color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: 'white' }}>Angebot anfragen</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
                Für Unternehmen, Fuhrparkbetreiber und Wiederverkäufer. Individuelle Preise, Mengenrabatte und persönlicher Ansprechpartner ab 2 Einheiten.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                {['Mengenrabatte ab 2 Einheiten', 'Prioritätslieferung', 'Monatsrechnung möglich'].map(t => (
                  <li key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <i className="bi bi-check2" style={{ color: 'var(--accent)', fontSize: 14 }} /> {t}
                  </li>
                ))}
              </ul>
              <Link to="/angebot" className="btn btn-accent btn-lg" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Angebot anfragen <i className="bi bi-arrow-right" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ background: 'var(--dark)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(224,38,26,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
            <Link to="/angebot" className="btn btn-lg" style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.25)', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
