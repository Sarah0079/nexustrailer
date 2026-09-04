import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main style={{ textAlign: 'center', padding: '120px 24px' }}>
      <i className="bi bi-exclamation-circle" style={{ fontSize: 72, color: 'var(--border-strong)', display: 'block', marginBottom: 24 }} />
      <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.03em', marginBottom: 16 }}>404</h1>
      <p style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 12 }}>Seite nicht gefunden</p>
      <p style={{ fontSize: 15, color: 'var(--text-light)', marginBottom: 36 }}>Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
      <Link to="/" className="btn btn-primary btn-lg">
        <i className="bi bi-house" /> Zurück zur Startseite
      </Link>
    </main>
  );
}
