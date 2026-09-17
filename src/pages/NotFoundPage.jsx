import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 16 }}>FEHLER</p>
        <h1 style={{ fontSize: 'clamp(80px, 18vw, 140px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.04em', lineHeight: 0.9, marginBottom: 24 }}>404</h1>
        <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>Seite nicht gefunden</p>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 40 }}>
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            <i className="bi bi-house" /> Startseite
          </Link>
          <Link to="/shop" className="btn btn-outline btn-lg">
            <i className="bi bi-grid" /> Zum Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
