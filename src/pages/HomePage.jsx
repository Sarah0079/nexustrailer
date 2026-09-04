import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, HERO_SLIDES, TRUST_BADGES, TESTIMONIALS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (i) => {
    setCurrent((i + HERO_SLIDES.length) % HERO_SLIDES.length);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <div style={{ position: 'relative', height: 'clamp(420px, 60vh, 680px)', overflow: 'hidden', background: 'var(--dark)' }}>
      {HERO_SLIDES.map((s, i) => (
        <img key={s.id} src={s.image} alt="" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.1) 100%)' }} />

      <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 560, animation: 'slideUp 0.5s ease', padding: '40px 0' }} key={current}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--accent)', borderRadius: 20, padding: '4px 14px', marginBottom: 10 }}>
            <i className="bi bi-patch-check-fill" style={{ color: 'white', fontSize: 12 }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'white', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              TrailPro – Zertifizierte Qualität
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(20px, 3vw, 44px)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: 10, letterSpacing: '-0.02em' }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, marginBottom: 20, maxWidth: 460 }}>
            {slide.subtitle}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn-accent btn-lg">
              <i className="bi bi-grid" /> {slide.cta}
            </Link>
            <Link to="/uber-uns" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}>
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
        {HERO_SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} style={{
            width: i === current ? 28 : 8, height: 8, borderRadius: 4,
            background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
            border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Arrows */}
      {[[-1, 'bi-chevron-left', 'left: 20px'], [1, 'bi-chevron-right', 'right: 20px']].map(([dir, icon, pos]) => (
        <button key={dir} onClick={() => go(current + dir)} style={{
          position: 'absolute', top: '50%', transform: 'translateY(-50%)',
          [pos.split(': ')[0]]: pos.split(': ')[1],
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)', color: 'white',
          border: '1px solid rgba(255,255,255,0.2)',
          fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
        >
          <i className={`bi ${icon}`} />
        </button>
      ))}
    </div>
  );
}

function TrustBar() {
  const items = [
    { icon: 'bi-patch-check', text: 'Zertifizierte Robustheit' },
    { icon: 'bi-truck', text: 'Schnelle & sichere Lieferung' },
    { icon: 'bi-headset', text: 'Personalisierte Unterstützung' },
    { icon: 'bi-lock', text: '100% sichere Zahlung' },
  ];
  return (
    <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {items.map(({ icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 24px', borderRight: '1px solid var(--border)', whiteSpace: 'nowrap' }}>
            <i className={`bi ${icon}`} style={{ fontSize: 15, color: 'var(--accent)' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-muted)' }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryGrid() {
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = CATEGORIES.length;

  const scrollTo = (i) => {
    const idx = (i + count) % count;
    setActive(idx);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx];
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setActive(a => { const next = (a + 1) % count; scrollTo(next); return next; }), 3500);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => setActive(a => { const next = (a + 1) % count; scrollTo(next); return next; }), 3500);
    return () => clearInterval(autoRef.current);
  }, []);

  const nav = (dir) => { resetAuto(); scrollTo(active + dir); };

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 6 }}>ALLE KATEGORIEN</p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>Nach Kategorien einkaufen</h2>
          </div>
          <Link to="/shop" className="btn btn-outline btn-sm">
            Alle ansehen <i className="bi bi-arrow-right" />
          </Link>
        </div>

        <div style={{ position: 'relative' }}>
          {[[-1, 'left'], [1, 'right']].map(([dir, side]) => (
            <button key={dir} onClick={() => nav(dir)} style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              [side]: -18, zIndex: 2,
              width: 42, height: 42, borderRadius: '50%',
              background: 'white', border: '1.5px solid var(--border-strong)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--dark)', fontSize: 17, transition: 'background 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--dark)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--dark)'; }}
            >
              <i className={`bi bi-chevron-${dir === -1 ? 'left' : 'right'}`} />
            </button>
          ))}

          <div ref={trackRef} style={{
            display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none', msOverflowStyle: 'none', paddingBottom: 4,
          }}>
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} onClick={resetAuto} style={{
                position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
                flexShrink: 0, width: 'clamp(220px, 28vw, 320px)', aspectRatio: '3/2',
                display: 'block', textDecoration: 'none', scrollSnapAlign: 'start',
                outline: i === active ? '2px solid var(--accent)' : 'none',
                outlineOffset: 2, transition: 'outline 0.2s',
              }}>
                <img src={cat.image} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.1) 60%)' }} />
                <div style={{ position: 'absolute', bottom: 16, left: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: 'white', letterSpacing: '-0.01em' }}>{cat.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 20 }}>
          {CATEGORIES.map((_, i) => (
            <button key={i} onClick={() => { resetAuto(); scrollTo(i); }} style={{
              width: i === active ? 24 : 7, height: 7, borderRadius: 4, border: 'none', padding: 0, cursor: 'pointer',
              background: i === active ? 'var(--accent)' : 'var(--border-strong)', transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const featured = PRODUCTS.filter(p => p.featured);
  const isMobile = useBreakpoint(640);
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 6 }}>HERVORGEHOBEN</p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>Empfohlene Produkte</h2>
          </div>
          <Link to="/shop" className="btn btn-outline btn-sm" style={{ flexShrink: 0 }}>
            Alle ansehen <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}

function SalesBanner() {
  return (
    <div style={{ background: 'var(--dark-2)', padding: '14px 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 80, animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
        {[...Array(3)].map((_, idx) => (
          <span key={idx} style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <i className="bi bi-fire" style={{ color: 'var(--accent)' }} />
            SONDERANGEBOT: Bis zu 61% Rabatt auf ausgewählte Modelle – Jetzt entdecken
            <i className="bi bi-arrow-right" style={{ opacity: 0.5 }} />
            &nbsp;&nbsp;&nbsp;
            <i className="bi bi-fire" style={{ color: 'var(--accent)' }} />
            SONDERANGEBOT: Bis zu 61% Rabatt auf ausgewählte Modelle – Jetzt entdecken
            <i className="bi bi-arrow-right" style={{ opacity: 0.5 }} />
            &nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </div>
  );
}

const BADGE_ICONS = {
  'Schnelle Lieferung': 'bi-truck',
  'Sicher bezahlen': 'bi-lock',
  'Garantie': 'bi-shield-check',
  'Support': 'bi-headset',
};

function TrustSection() {
  const isMobile = useBreakpoint(640);
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>WARUM TRAILPRO</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Warum über 1.000 Kunden uns wählen
          </h2>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            Qualität, Zuverlässigkeit und Service – alles aus einer Hand.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 24 }}>
          {TRUST_BADGES.map(b => {
            const iconKey = Object.keys(BADGE_ICONS).find(k => b.title.includes(k)) || 'bi-star';
            const iconName = BADGE_ICONS[iconKey] || b.icon || 'bi-star';
            return (
              <div key={b.title} style={{
                padding: '28px 20px', borderRadius: 'var(--r-lg)',
                border: '1px solid var(--border)', background: 'white',
                textAlign: 'center', transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className={`bi ${b.icon || iconName}`} style={{ fontSize: 24, color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { n: '1.000+', l: 'Zufriedene Kunden', icon: 'bi-people' },
    { n: '200+', l: 'Produkte auf Lager', icon: 'bi-box-seam' },
    { n: '2–3', l: 'Werktage Lieferzeit', icon: 'bi-truck' },
    { n: '4.8', l: 'Durchschnittsbewertung', icon: 'bi-star-fill' },
  ];
  return (
    <div style={{ background: 'var(--dark)', padding: '40px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 32 }}>
        {stats.map(({ n, l, icon }) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <i className={`bi ${icon}`} style={{ fontSize: 24, color: 'var(--accent)', display: 'block', marginBottom: 8 }} />
            <div style={{ fontSize: 32, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 6, letterSpacing: '0.03em' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KUNDENMEINUNGEN</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>
            <i className="bi bi-chat-quote" style={{ marginRight: 10 }} />
            Das sagen unsere Kunden
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 28 }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {[1,2,3,4,5].map(i => (
                  <i key={i} className={`bi bi-star${i <= t.rating ? '-fill' : ''}`} style={{ color: i <= t.rating ? '#F59E0B' : '#E2E8F0', fontSize: 16 }} />
                ))}
              </div>
              <p style={{ fontSize: 15, color: 'var(--dark)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-person" style={{ color: 'var(--accent)', fontSize: 18 }} />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)' }}>— {t.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section style={{ background: 'var(--dark)', padding: '72px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 12 }}>JETZT STARTEN</p>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', marginBottom: 16 }}>
          Bereit für Ihren neuen Anhänger?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>
          Über 200 Produkte. Kostenloser Versand. 30 Tage Rückgabe. Sofort lieferbar.
        </p>
        <Link to="/shop" className="btn btn-accent btn-lg">
          <i className="bi bi-grid" /> Jetzt alle Produkte entdecken
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <CategoryGrid />
      <FeaturedSection />
      <SalesBanner />
      <TrustSection />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
