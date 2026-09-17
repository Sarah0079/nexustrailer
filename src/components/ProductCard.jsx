import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fmtEur } from '../utils/fmt';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { add, setOpen } = useCart();
  const { toggle, has } = useWishlist();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const fmt = fmtEur;
  const isWished = has(product.id);
  const isInStock = product.stock === undefined || product.stock === 'instock' || product.stock > 0;

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!isInStock) return;
    add(product, 1);
    setAdded(true);
    setTimeout(() => { setAdded(false); setOpen(true); }, 900);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggle(product);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.slug}`)}
      onKeyDown={e => { if (e.key === 'Enter') navigate(`/product/${product.slug}`); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      role="link"
      aria-label={product.name}
      style={{
        background: 'white', borderRadius: 'var(--r-lg)', overflow: 'hidden',
        cursor: 'pointer', display: 'flex', flexDirection: 'column',
        border: `1px solid ${hovered ? 'var(--border-strong)' : 'var(--border)'}`,
        transition: 'border-color 0.2s', outline: 'none',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#EDECE9' }}>
        <img
          src={product.image} alt={product.name} loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'contain', padding: '8px',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        {/* badges */}
        {product.discount && (
          <span className="badge badge-sale" style={{ position: 'absolute', top: 12, left: 12 }}>
            -{product.discount}%
          </span>
        )}
        {product.badge && (
          <span className="badge badge-new" style={{ position: 'absolute', top: product.discount ? 38 : 12, left: 12 }}>
            {product.badge}
          </span>
        )}

        {/* wishlist */}
        <button
          onClick={handleWishlist}
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 32, height: 32, borderRadius: 0,
            background: 'rgba(255,255,255,0.9)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'transform 0.2s',
            opacity: hovered || isWished ? 1 : 0,
          }}
        >
          <i className={`bi bi-heart${isWished ? '-fill' : ''}`}
            style={{ fontSize: 14, color: isWished ? 'var(--accent)' : '#9A9A9A' }} />
        </button>

        {/* hover overlay CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '28px 16px 14px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Ansehen <i className="bi bi-arrow-right" style={{ fontSize: 11 }} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 16px' }}>
        <p style={{
          fontSize: 10.5, color: 'var(--text-light)', marginBottom: 5,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{product.subtitle}</p>
        <h3 style={{
          fontSize: 14.5, fontWeight: 700, color: 'var(--dark)',
          lineHeight: 1.35, marginBottom: 10,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          height: '40px',
        }}>
          {product.name}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              {fmt(product.price)}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-light)', textDecoration: 'line-through', marginTop: 2, opacity: product.originalPrice ? 1 : 0 }}>
              {fmt(product.originalPrice || 0)}
            </div>
          </div>

          <button
            onClick={handleAdd}
            disabled={!isInStock}
            title={!isInStock ? 'Nicht verfügbar' : undefined}
            style={{
              width: 38, height: 38, borderRadius: 0, flexShrink: 0,
              background: added ? 'var(--green)' : !isInStock ? 'var(--border-strong)' : 'var(--accent)',
              border: 'none', cursor: isInStock ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: 16, transition: 'background 0.2s',
            }}
            onMouseEnter={e => !added && isInStock && (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => !added && isInStock && (e.currentTarget.style.background = 'var(--accent)')}
          >
            <i className={`bi bi-${added ? 'check-lg' : !isInStock ? 'x-circle' : 'cart-plus'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
