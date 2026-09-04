import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

const SORTS = [
  { value: 'default', label: 'Empfohlen' },
  { value: 'price-asc', label: 'Preis: aufsteigend' },
  { value: 'price-desc', label: 'Preis: absteigend' },
  { value: 'discount', label: 'Größter Rabatt' },
  { value: 'rating', label: 'Beste Bewertung' },
];

export default function ShopPage() {
  const [params] = useSearchParams();
  const [category, setCategory] = useState(params.get('category') || 'all');
  const [sort, setSort] = useState('default');
  const [search, setSearch] = useState('');
  const isMobile = useBreakpoint(768);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'discount') list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort, search]);

  return (
    <main>
      {/* Hero */}
      <div style={{ background: 'var(--dark)', padding: isMobile ? '32px 0 28px' : '48px 0 40px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>UNSER SORTIMENT</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em', marginBottom: 10 }}>
            Anhänger kaufen – direkt vom Importeur
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <i className="bi bi-box-seam" />
            {PRODUCTS.length} Produkte verfügbar
            <i className="bi bi-truck" style={{ marginLeft: 8 }} />
            Kostenloser Versand
            <i className="bi bi-lightning" style={{ marginLeft: 8 }} />
            Sofort lieferbar
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ position: 'sticky', top: 68, zIndex: 40, background: 'white', borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
        <div className="container" style={{ padding: isMobile ? '12px 16px' : '14px 24px' }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: 180 }}>
              <i className="bi bi-search" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: 14, pointerEvents: 'none' }} />
              <input className="input" placeholder="Produkt suchen..." value={search} onChange={e => setSearch(e.target.value)} style={{ paddingLeft: 34 }} />
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{
              padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 'var(--r-sm)',
              fontSize: 13, background: 'white', color: 'var(--dark)', cursor: 'pointer', minWidth: 180,
            }}>
              {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, overflowX: 'auto', paddingBottom: 2 }}>
            {[{ id: 'all', label: 'Alle' }, ...CATEGORIES].map(c => (
              <button key={c.id} onClick={() => setCategory(c.id)} style={{
                padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                background: category === c.id ? 'var(--dark)' : 'var(--bg)',
                color: category === c.id ? 'white' : 'var(--text-muted)',
                border: `1.5px solid ${category === c.id ? 'var(--dark)' : 'var(--border)'}`,
                whiteSpace: 'nowrap', cursor: 'pointer', transition: 'all 0.15s',
              }}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container section">
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
          <strong style={{ color: 'var(--dark)' }}>{filtered.length}</strong> Produkte gefunden
        </p>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <i className="bi bi-search" style={{ fontSize: 56, color: 'var(--border-strong)', display: 'block', marginBottom: 16 }} />
            <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 20 }}>Keine Produkte gefunden</p>
            <button className="btn btn-outline" onClick={() => { setCategory('all'); setSearch(''); }}>Filter zurücksetzen</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </main>
  );
}
