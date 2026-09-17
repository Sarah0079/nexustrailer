import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fmtEur } from '../utils/fmt';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { PRODUCTS } from '../data/products';

const NAV = [
  { to: '/', label: 'Startseite' },
  { to: '/shop', label: 'Shop' },
  { to: '/uber-uns', label: 'Über uns' },
  { to: '/faq', label: 'FAQ' },
  { to: '/angebot', label: 'Angebot anfragen' },
  { to: '/kontakt', label: 'Kontakt' },
];

const isActive = (to, pn) => {
  if (to.startsWith('/#')) return false;
  return pn === to;
};

export default function Header() {
  const { count, setOpen } = useCart();
  const { count: wCount } = useWishlist();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isMobile = useBreakpoint(1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const handleSearch = (v) => {
    setSearch(v);
    if (v.trim().length < 2) { setSearchResults([]); setSearchOpen(false); return; }
    const q = v.toLowerCase();
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || (p.subtitle && p.subtitle.toLowerCase().includes(q))
    ).slice(0, 5);
    setSearchResults(results);
    setSearchOpen(true);
  };

  const goProduct = (slug) => {
    setSearch(''); setSearchResults([]); setSearchOpen(false);
    navigate(`/product/${slug}`);
  };

  const fmt = fmtEur;

  return (
    <>
      {/* Main header */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'white',
        boxShadow: scrolled ? 'var(--shadow-md)' : '0 1px 0 var(--border)',
        transition: 'box-shadow 0.2s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 24, height: 76 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
            <img src="/image/NexusTrailer.png" alt="NexusTrailer" style={{ height: 74, width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Search */}
          {!isMobile && (
            <div style={{ flex: 1, maxWidth: 420, position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <i className="bi bi-search" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: 14, pointerEvents: 'none' }} />
                <input
                  className="input"
                  placeholder="Produkte suchen..."
                  value={search}
                  onChange={e => handleSearch(e.target.value)}
                  onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
                  style={{ paddingLeft: 36, fontSize: 13 }}
                />
              </div>
              {searchOpen && searchResults.length > 0 && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                  background: 'white', border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', zIndex: 50,
                  overflow: 'hidden',
                }}>
                  {searchResults.map(p => (
                    <div key={p.id} onClick={() => goProduct(p.slug)}
                      style={{ display: 'flex', gap: 12, padding: '10px 14px', cursor: 'pointer', alignItems: 'center', borderBottom: '1px solid var(--border)' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'white'}
                    >
                      <img src={p.image} alt={p.name} style={{ width: 44, height: 36, objectFit: 'contain', padding: '3px', borderRadius: 0, flexShrink: 0, background: '#EDECE9' }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>{fmt(p.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Nav desktop */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {NAV.map(({ to, label }) => (
                <Link key={to} to={to} style={{
                  padding: '6px 11px', borderRadius: 'var(--r-sm)',
                  fontSize: 13, fontWeight: isActive(to, pathname) ? 700 : 500,
                  color: isActive(to, pathname) ? 'var(--dark)' : 'var(--text-muted)',
                  background: isActive(to, pathname) ? 'var(--bg)' : 'transparent',
                  transition: 'color 0.15s, background 0.15s',
                }}
                  onMouseEnter={e => { if (pathname !== to) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg)'; } }}
                  onMouseLeave={e => { if (pathname !== to) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; } }}
                >{label}</Link>
              ))}
            </nav>
          )}

          {/* Right icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
            {/* Wishlist */}
            <Link to="/wishlist" style={{ position: 'relative', padding: 8, color: 'var(--text-muted)', display: 'flex', borderRadius: 'var(--r-sm)', transition: 'color 0.15s, background 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <i className="bi bi-heart" style={{ fontSize: 20 }} />
              {wCount > 0 && (
                <span style={{ position: 'absolute', top: 4, right: 4, background: 'var(--dark)', color: 'white', fontSize: 9, fontWeight: 800, width: 15, height: 15, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {wCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button onClick={() => setOpen(true)} style={{
              display: 'flex', alignItems: 'center', gap: 7, position: 'relative',
              background: count > 0 ? 'var(--dark)' : 'var(--bg)',
              border: `1.5px solid ${count > 0 ? 'var(--dark)' : 'var(--border)'}`,
              borderRadius: 'var(--r-sm)', padding: isMobile ? 8 : '8px 14px',
              color: count > 0 ? 'white' : 'var(--text)',
              transition: 'all 0.15s', cursor: 'pointer',
            }}>
              <i className="bi bi-cart3" style={{ fontSize: 17 }} />
              {!isMobile && (
                <span style={{ fontSize: 13, fontWeight: 600 }}>
                  {count > 0 ? `${count} Artikel` : 'Warenkorb'}
                </span>
              )}
              {isMobile && count > 0 && (
                <span style={{ position: 'absolute', top: -5, right: -5, background: 'var(--accent)', color: 'white', fontSize: 9, fontWeight: 800, width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {count}
                </span>
              )}
            </button>

            {/* Hamburger */}
            {isMobile && (
              <button onClick={() => setMenuOpen(o => !o)} style={{ padding: 8, color: 'var(--text)', borderRadius: 'var(--r-sm)' }}>
                <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: 20 }} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid var(--border)', animation: 'slideUp 0.18s ease' }}>
            {/* Recherche mobile */}
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'relative' }}>
                <i className="bi bi-search" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: 14, pointerEvents: 'none' }} />
                <input
                  className="input"
                  placeholder="Produkte suchen..."
                  value={search}
                  onChange={e => handleSearch(e.target.value)}
                  style={{ paddingLeft: 36, fontSize: 13 }}
                />
              </div>
              {searchOpen && searchResults.length > 0 && (
                <div style={{ marginTop: 6, border: '1px solid var(--border)', overflow: 'hidden' }}>
                  {searchResults.map(p => (
                    <div key={p.id}
                      onClick={() => { goProduct(p.slug); setMenuOpen(false); }}
                      style={{ display: 'flex', gap: 12, padding: '10px 14px', cursor: 'pointer', alignItems: 'center', borderBottom: '1px solid var(--border)', background: 'white' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'white'}
                    >
                      <img src={p.image} alt={p.name} style={{ width: 44, height: 36, objectFit: 'contain', padding: '3px', background: '#EDECE9', flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                        <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>{fmt(p.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '13px 20px',
                fontSize: 14, fontWeight: isActive(to, pathname) ? 700 : 400,
                color: isActive(to, pathname) ? 'var(--dark)' : 'var(--text-muted)',
                borderBottom: '1px solid var(--border)',
              }}>{label}</Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
