import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fmtEur } from '../utils/fmt';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';

const TRUST_ITEMS = [
  { icon: 'bi-clock', text: 'Bearbeitungszeit: 1-2 Werktage (Mo–Fr) · Lieferzeit: 2-3 Werktage (Mo–Fr)' },
  { icon: 'bi-truck', text: 'Versandkostenfrei.' },
  { icon: 'bi-arrow-repeat', text: 'Rückgabe innerhalb von 30 Tagen. Rückerstattungsfrist: 3 Tage. Zollgebühren und Steuern werden nicht erstattet.' },
  { icon: 'bi-shield-lock', text: 'Garantiert sicherer Checkout.' },
];


export default function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { add, setOpen } = useCart();
  const { toggle, has } = useWishlist();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const isMobile = useBreakpoint(768);
  const isNarrow = useBreakpoint(1100);

  if (!product) return (
    <div style={{ textAlign: 'center', padding: '120px 0' }}>
      <i className="bi bi-box-seam" style={{ fontSize: 56, color: 'var(--border-strong)', display: 'block', marginBottom: 20 }} />
      <p style={{ fontSize: 20, color: 'var(--text-muted)' }}>Produkt nicht gefunden.</p>
      <Link to="/shop" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>Zum Shop</Link>
    </div>
  );

  const fmt = fmtEur;
  const images = product.images?.length ? product.images : [product.image];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const isWished = has(product.id);

  const handleAdd = () => {
    add(product, qty);
    setAdded(true);
    setTimeout(() => { setAdded(false); setOpen(true); }, 800);
  };

  const prevImg = () => setActiveImg(i => (i - 1 + images.length) % images.length);
  const nextImg = () => setActiveImg(i => (i + 1) % images.length);

  const gridCols = isMobile ? '1fr' : isNarrow ? '1fr 1fr' : 'minmax(0,5fr) minmax(0,4fr) minmax(0,3fr)';

  return (
    <main>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Startseite</Link>
          <i className="bi bi-chevron-right" style={{ fontSize: 10 }} />
          <Link to="/shop" style={{ color: 'var(--text-muted)' }}>Shop</Link>
          <i className="bi bi-chevron-right" style={{ fontSize: 10 }} />
          <span style={{ color: 'var(--dark)', fontWeight: 500 }}>{product.name}</span>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px 72px' }}>

        {/* Title — full width */}
        <h1 style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', fontWeight: 900, color: 'var(--dark)', lineHeight: 1.25, marginBottom: 28, letterSpacing: '-0.02em' }}>
          {product.name}
        </h1>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: gridCols, gap: isMobile ? 24 : 28, alignItems: 'start', marginBottom: 48 }}>

          {/* ── Col 1 : Images ── */}
          <div style={{ minWidth: 0 }}>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--bg)', height: isMobile ? 260 : 400 }}>
              <img
                src={images[activeImg]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'var(--bg)' }}
              />
              {product.discount && (
                <span style={{ position: 'absolute', top: 14, left: 14, background: 'var(--sale)', color: 'white', fontWeight: 800, fontSize: 13, padding: '4px 10px', borderRadius: 0 }}>
                  -{product.discount}%
                </span>
              )}
              {images.length > 1 && (
                <>
                  <button onClick={prevImg} aria-label="Vorheriges Bild" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: 0, border: 'none', background: 'rgba(255,255,255,0.92)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                    <i className="bi bi-chevron-left" style={{ fontSize: 13 }} />
                  </button>
                  <button onClick={nextImg} aria-label="Nächstes Bild" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: 0, border: 'none', background: 'rgba(255,255,255,0.92)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
                    <i className="bi bi-chevron-right" style={{ fontSize: 13 }} />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto', paddingBottom: 4 }}>
                {images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{
                    width: 68, height: 54, borderRadius: 0, overflow: 'hidden', flexShrink: 0, padding: 0, cursor: 'pointer',
                    border: `2px solid ${i === activeImg ? 'var(--accent)' : 'var(--border)'}`,
                    transition: 'border-color 0.15s',
                  }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', background: '#F0F0EE' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Col 2 : Info ── */}
          <div style={{ minWidth: 0 }}>
            {/* Price */}
            <div style={{ marginBottom: 14 }}>
              {product.originalPrice && (
                <span style={{ fontSize: 16, color: 'var(--text-light)', textDecoration: 'line-through', display: 'block', marginBottom: 2 }}>
                  {fmt(product.originalPrice)}
                </span>
              )}
              <span style={{ fontSize: 30, fontWeight: 900, color: 'var(--sale)', letterSpacing: '-0.02em' }}>
                {fmt(product.price)}
              </span>
            </div>

            {/* Stock */}
            {product.stock !== undefined && (
              <span style={(product.stock === 'instock' || product.stock > 0)
                ? { background: '#ECFDF5', color: '#065F46', border: '1px solid #6EE7B7', borderRadius: 0, padding: '4px 12px', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 16 }
                : { background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', borderRadius: 0, padding: '4px 12px', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 16 }
              }>
                <i className={`bi ${(product.stock === 'instock' || product.stock > 0) ? 'bi-check-circle-fill' : 'bi-x-circle-fill'}`} style={{ fontSize: 10 }} />
                {(product.stock === 'instock' || product.stock > 0) ? 'AUF LAGER' : 'NICHT VERFÜGBAR'}
              </span>
            )}

            {/* Short description */}
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 16 }}>
              {product.description}
            </p>

            {/* Qty + Cart */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid var(--border-strong)', borderRadius: 0, overflow: 'hidden', userSelect: 'none', flexShrink: 0 }}>
                <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} disabled={qty <= 1}
                  style={{ width: 40, height: 44, border: 'none', background: 'transparent', cursor: qty <= 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: qty <= 1 ? 'var(--text-light)' : 'var(--dark)', fontSize: 18 }}>
                  <i className="bi bi-dash" />
                </button>
                <span style={{ width: 36, textAlign: 'center', fontWeight: 800, fontSize: 15 }}>{qty}</span>
                <button type="button" onClick={() => setQty(q => q + 1)}
                  style={{ width: 40, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark)', fontSize: 18 }}>
                  <i className="bi bi-plus" />
                </button>
              </div>
              <button onClick={handleAdd} style={{
                flex: 1, height: 44, borderRadius: 0, border: 'none',
                background: added ? 'var(--green)' : 'var(--dark)',
                color: 'white', fontWeight: 800, fontSize: 14, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'background 0.2s',
              }}>
                <i className={`bi ${added ? 'bi-check-lg' : 'bi-cart-plus'}`} />
                {added ? 'Hinzugefügt!' : 'In den Warenkorb'}
              </button>
            </div>

            {/* Wishlist */}
            <button onClick={() => toggle(product)} style={{
              width: '100%', padding: '10px', borderRadius: 0, marginBottom: 24,
              border: `1.5px solid ${isWished ? 'var(--accent)' : 'var(--border)'}`,
              background: isWished ? 'var(--accent-light)' : 'white',
              color: isWished ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}>
              <i className={`bi bi-heart${isWished ? '-fill' : ''}`} />
              {isWished ? 'Auf der Wunschliste' : 'Zur Wunschliste hinzufügen'}
            </button>

            {/* Specs */}
            {product.specs && (
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Technische Daten</p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '6px 10px' }}>
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} style={{ padding: '8px 12px', background: 'var(--bg)', borderRadius: 0 }}>
                      <p style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>{k}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--dark)' }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Col 3 : Trust (desktop only) ── */}
          {!isNarrow && (
            <div style={{ minWidth: 0 }}>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 16, marginBottom: 24 }}>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 4 }}>NexusTrailer</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.5 }}>
                  Kraft, Stabilität und Leistung — direkt vom Importeur.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {TRUST_ITEMS.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid var(--border)' }}>
                    <i className={`bi ${item.icon}`} style={{ fontSize: 18, color: 'var(--dark)', flexShrink: 0, marginTop: 1 }} />
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Description riche ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 40, marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--dark)', marginBottom: 20 }}>
            Produktbeschreibung
          </h2>
          {product.descriptionHtml ? (
            <div className="product-rich-description" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          ) : (
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 720 }}>{product.description}</p>
          )}
        </div>

        {/* ── Accessoires inclus ── */}
        {product.accessories?.length > 0 && (
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px 28px', marginBottom: 48 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="bi bi-gift" style={{ color: 'var(--accent)' }} /> Im Lieferumfang enthaltenes Zubehör – {product.accessories.length} kostenlose Artikel
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
              {product.accessories.map((acc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--green)', fontSize: 15, flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: 'var(--dark)', lineHeight: 1.5 }}>{acc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Produits similaires ── */}
        {related.length > 0 && (
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>ÄHNLICHE PRODUKTE</p>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--dark)', marginBottom: 24, letterSpacing: '-0.02em' }}>
              Das könnte Sie auch interessieren
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
