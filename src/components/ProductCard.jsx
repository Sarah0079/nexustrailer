import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { add, setOpen } = useCart();
  const { toggle, has } = useWishlist();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const fmt = (n) => n.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' €';
  const isWished = has(product.id);

  const handleAdd = (e) => {
    e.stopPropagation();
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white', borderRadius: 'var(--r-lg)', overflow: 'hidden',
        cursor: 'pointer', display: 'flex', flexDirection: 'column',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#F0F0EE' }}>
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
            style={{ fontSize: 14, color: isWished ? '#E63946' : '#94A3B8' }} />
        </button>

        {/* hover overlay CTA */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '28px 16px 14px',
          background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 100%)',
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
          fontSize: 11, color: 'var(--text-muted)', marginBottom: 4,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', height: '30px',
        }}>{product.subtitle}</p>
        <h3 style={{
          fontSize: 14, fontWeight: 700, color: 'var(--dark)',
          lineHeight: 1.35, marginBottom: 10,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          height: '38px',
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
            style={{
              width: 38, height: 38, borderRadius: 0, flexShrink: 0,
              background: added ? 'var(--green)' : 'var(--accent)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: 16, transition: 'background 0.2s, transform 0.15s',
              transform: added ? 'scale(1.1)' : 'scale(1)',
            }}
            onMouseEnter={e => !added && (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => !added && (e.currentTarget.style.background = 'var(--accent)')}
          >
            <i className={`bi bi-${added ? 'check-lg' : 'cart-plus'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
