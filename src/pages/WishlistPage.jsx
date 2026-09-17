import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '48px 0 40px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>WUNSCHLISTE</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>
            Meine Wunschliste
          </h1>
        </div>
      </div>

      <div className="container section">
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <i className="bi bi-heart" style={{ fontSize: 64, color: 'var(--border-strong)', display: 'block', marginBottom: 20 }} />
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Ihre Wunschliste ist leer</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>Fügen Sie Produkte hinzu, die Sie sich merken möchten.</p>
            <Link to="/shop" className="btn btn-primary btn-lg">
              <i className="bi bi-grid" /> Jetzt einkaufen
            </Link>
          </div>
        ) : (
          <>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>
              <strong style={{ color: 'var(--dark)' }}>{items.length}</strong> Produkt{items.length !== 1 ? 'e' : ''} auf Ihrer Wunschliste
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {items.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
