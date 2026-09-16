import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

const SORTS = [
  { value: 'default',    label: 'Empfohlen' },
  { value: 'price-asc',  label: 'Preis: aufsteigend' },
  { value: 'price-desc', label: 'Preis: absteigend' },
  { value: 'discount',   label: 'Größter Rabatt' },
  { value: 'rating',     label: 'Beste Bewertung' },
];

const CARD_WIDTH = 272; // px — must match ProductCard width

/* Horizontal scroll rail for one category */
function CategoryRow({ cat, products }) {
  const railRef = useRef(null);
  const scroll = dir => {
    railRef.current?.scrollBy({ left: dir * (CARD_WIDTH + 20) * 2, behavior: 'smooth' });
  };

  return (
    <div style={{ marginBottom: 52 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, paddingRight: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.02em' }}>{cat.label}</h2>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{products.length} Artikel</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => scroll(-1)}
            style={{ width: 32, height: 32, border: '1.5px solid var(--border)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dark)'; e.currentTarget.style.color = 'var(--dark)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <i className="bi bi-chevron-left" style={{ fontSize: 13 }} />
          </button>
          <button
            onClick={() => scroll(1)}
            style={{ width: 32, height: 32, border: '1.5px solid var(--border)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--dark)'; e.currentTarget.style.color = 'var(--dark)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <i className="bi bi-chevron-right" style={{ fontSize: 13 }} />
          </button>
        </div>
      </div>

      {/* Scroll rail */}
      <div
        ref={railRef}
        style={{
          display: 'flex', gap: 20,
          overflowX: 'auto', overflowY: 'visible',
          paddingBottom: 12,
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--border-strong) transparent',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {products.map(p => (
          <div key={p.id} style={{ flexShrink: 0, width: CARD_WIDTH }}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryScrollBar({ categories, active, onSelect }) {
  const railRef = useRef(null);
  const [fadeLeft, setFadeLeft]   = useState(false);
  const [fadeRight, setFadeRight] = useState(true);

  const updateFades = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setFadeLeft(el.scrollLeft > 4);
    setFadeRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateFades();
    el.addEventListener('scroll', updateFades, { passive: true });
    return () => el.removeEventListener('scroll', updateFades);
  }, [updateFades]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Rail */}
      <div
        ref={railRef}
        style={{
          display: 'flex', gap: 8,
          overflowX: 'auto', paddingBottom: 6,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style>{`.cat-rail::-webkit-scrollbar{display:none}`}</style>
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            style={{
              padding: '7px 16px', fontSize: 13, fontWeight: 600, flexShrink: 0,
              background: active === c.id ? 'var(--dark)' : 'white',
              color: active === c.id ? 'white' : 'var(--text-muted)',
              border: `1.5px solid ${active === c.id ? 'var(--dark)' : 'var(--border)'}`,
              cursor: 'pointer', transition: 'all 0.15s',
              whiteSpace: 'nowrap',
            }}
          >
            {c.label}
          </button>
        ))}
        {/* Spacer so the last chip is never hidden behind the gradient */}
        <div style={{ flexShrink: 0, width: 24 }} />
      </div>

      {/* Left fade */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 6, width: 32,
        background: 'linear-gradient(to right, white 30%, transparent)',
        pointerEvents: 'none',
        opacity: fadeLeft ? 1 : 0,
        transition: 'opacity 0.2s',
      }} />

      {/* Right fade + chevron hint */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 6, width: 48,
        background: 'linear-gradient(to left, white 40%, transparent)',
        pointerEvents: 'none',
        opacity: fadeRight ? 1 : 0,
        transition: 'opacity 0.2s',
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      }}>
        <i className="bi bi-chevron-right" style={{ fontSize: 14, color: 'var(--text-muted)', marginRight: 2 }} />
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState(params.get('category') || 'all');
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');
  const isMobile = useBreakpoint(900);

  const counts = useMemo(() => {
    const c = {};
    PRODUCTS.forEach(p => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  const isGrouped = category === 'all' && !search.trim();

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.subtitle?.toLowerCase().includes(q));
    }
    if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'discount')   list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    else if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort, search]);

  /* Products grouped by category (for the rail view) */
  const grouped = useMemo(() => {
    return CATEGORIES
      .map(cat => ({ cat, products: PRODUCTS.filter(p => p.category === cat.id) }))
      .filter(g => g.products.length > 0)
      .sort((a, b) => b.products.length - a.products.length);
  }, []);

  const allCategories = [{ id: 'all', label: 'Alle Kategorien' }, ...CATEGORIES];

  const handleCategoryClick = (id) => {
    setCategory(id);
    if (id !== 'all') setParams({ category: id });
    else setParams({});
  };

  return (
    <main>
      {/* Hero */}
      <div style={{ background: 'var(--dark)', padding: isMobile ? '32px 0 28px' : '48px 0 40px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>
            UNSER SORTIMENT
          </p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', marginBottom: 10 }}>
            Anhänger kaufen – direkt vom Importeur
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <i className="bi bi-box-seam" />
            {PRODUCTS.length} Produkte verfügbar
            <i className="bi bi-truck" style={{ marginLeft: 8 }} />
            Kostenloser Versand
            <i className="bi bi-lightning" style={{ marginLeft: 8 }} />
            Sofort lieferbar
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '220px 1fr', gap: isMobile ? 20 : 40, alignItems: 'start' }}>

          {/* ── Sidebar (desktop) ── */}
          {!isMobile && (
            <aside style={{ position: 'sticky', top: 70, maxHeight: 'calc(100vh - 90px)', overflowY: 'auto' }}>

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 10 }}>Suche</p>
                <div style={{ position: 'relative' }}>
                  <i className="bi bi-search" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: 13, pointerEvents: 'none' }} />
                  <input className="input" placeholder="Produkt suchen..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 34, fontSize: 13 }} />
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 10 }}>Sortierung</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid var(--border)' }}>
                  {SORTS.map(s => (
                    <button key={s.value} onClick={() => setSort(s.value)} style={{
                      padding: '10px 14px', textAlign: 'left', fontSize: 13,
                      fontWeight: sort === s.value ? 700 : 400,
                      color: sort === s.value ? 'var(--accent)' : 'var(--text)',
                      background: sort === s.value ? 'var(--accent-light)' : 'white',
                      borderLeft: sort === s.value ? '3px solid var(--accent)' : '3px solid transparent',
                      cursor: 'pointer', transition: 'all 0.12s',
                    }}>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 10 }}>Kategorien</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid var(--border)' }}>
                  {allCategories.map(c => {
                    const n = c.id === 'all' ? PRODUCTS.length : (counts[c.id] || 0);
                    const active = category === c.id;
                    return (
                      <button key={c.id} onClick={() => handleCategoryClick(c.id)} style={{
                        padding: '11px 14px', textAlign: 'left', fontSize: 13,
                        fontWeight: active ? 700 : 400,
                        color: active ? 'var(--accent)' : 'var(--text)',
                        background: active ? 'var(--accent-light)' : 'white',
                        borderLeft: active ? '3px solid var(--accent)' : '3px solid transparent',
                        cursor: 'pointer', transition: 'all 0.12s',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8,
                      }}>
                        <span>{c.label}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, minWidth: 24, textAlign: 'center', background: active ? 'var(--accent)' : 'var(--bg-2)', color: active ? 'white' : 'var(--text-muted)', padding: '1px 6px' }}>{n}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {(category !== 'all' || search || sort !== 'default') && (
                <button className="btn btn-ghost btn-sm btn-full" style={{ marginTop: 16 }} onClick={() => { handleCategoryClick('all'); setSearch(''); setSort('default'); }}>
                  <i className="bi bi-x-circle" /> Filter zurücksetzen
                </button>
              )}
            </aside>
          )}

          {/* ── Hauptinhalt ── */}
          <div style={{ minWidth: 0 }}>

            {/* Mobile filters */}
            {isMobile && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ position: 'relative', marginBottom: 10 }}>
                  <i className="bi bi-search" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: 13, pointerEvents: 'none' }} />
                  <input className="input" placeholder="Produkt suchen..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 34 }} />
                </div>
                <CategoryScrollBar
                  categories={allCategories}
                  active={category}
                  onSelect={handleCategoryClick}
                />
              </div>
            )}

            {/* Résultats bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                {isGrouped
                  ? <><strong style={{ color: 'var(--dark)' }}>{PRODUCTS.length}</strong> Produkte in {CATEGORIES.length} Kategorien</>
                  : <><strong style={{ color: 'var(--dark)' }}>{filtered.length}</strong> Produkte gefunden{category !== 'all' && <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>· {CATEGORIES.find(c => c.id === category)?.label}</span>}</>
                }
              </p>
              {isMobile && (
                <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '8px 12px', border: '1.5px solid var(--border)', fontSize: 13, background: 'white', color: 'var(--dark)', cursor: 'pointer' }}>
                  {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
              )}
            </div>

            {/* ── Vue par catégorie (rails horizontaux) ── */}
            {isGrouped ? (
              <div>
                {grouped.map(({ cat, products }) => (
                  <CategoryRow key={cat.id} cat={cat} products={products} />
                ))}
              </div>
            ) : (
              /* ── Vue grille filtrée ── */
              filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 0' }}>
                  <i className="bi bi-search" style={{ fontSize: 48, color: 'var(--border-strong)', display: 'block', marginBottom: 16 }} />
                  <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 20 }}>Keine Produkte gefunden</p>
                  <button className="btn btn-outline" onClick={() => { handleCategoryClick('all'); setSearch(''); }}>
                    Filter zurücksetzen
                  </button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
                  {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
