export default function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  );
}
