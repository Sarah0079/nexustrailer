import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fmtEur } from '../utils/fmt';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { fetchReviews, submitReview } from '../api/client';

const TRUST_ITEMS = [
  { icon: 'bi-clock', text: 'Bearbeitungszeit: 1-2 Werktage (Mo–Fr) · Lieferzeit: 2-3 Werktage (Mo–Fr)' },
  { icon: 'bi-truck', text: 'Versandkostenfrei.' },
  { icon: 'bi-arrow-repeat', text: 'Rückgabe innerhalb von 30 Tagen. Rückerstattungsfrist: 3 Tage. Zollgebühren und Steuern werden nicht erstattet.' },
  { icon: 'bi-shield-lock', text: 'Garantiert sicherer Checkout.' },
];


// ── Étoiles ───────────────────────────────────────────────────────────────────
function Stars({ value, max = 5, size = 16, interactive = false, onChange }) {
  const [hovered, setHovered] = useState(0);
  const display = interactive ? (hovered || value) : value;
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < display;
        return (
          <i
            key={i}
            className={`bi bi-star${filled ? '-fill' : ''}`}
            style={{
              fontSize: size,
              color: filled ? '#F59E0B' : 'var(--border-strong)',
              cursor: interactive ? 'pointer' : 'default',
              transition: 'color 0.1s',
            }}
            onClick={() => interactive && onChange && onChange(i + 1)}
            onMouseEnter={() => interactive && setHovered(i + 1)}
            onMouseLeave={() => interactive && setHovered(0)}
          />
        );
      })}
    </span>
  );
}

function fmtReviewDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// ── Système d'avis ────────────────────────────────────────────────────────────
function ReviewsSection({ product }) {
  const isMobile = useBreakpoint(768);
  const formRef  = useRef(null);

  const [reviews,    setReviews]    = useState([]);
  const [avgRating,  setAvgRating]  = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [loading,    setLoading]    = useState(true);
  const [showForm,   setShowForm]   = useState(false);

  const [form,    setForm]    = useState({ author_name: '', author_email: '', rating: 0, comment: '' });
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      const data = await fetchReviews(product.slug);
      setReviews(data.reviews || []);
      setAvgRating(data.avg_rating);
      setTotalCount(data.total || 0);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [product.slug]);

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.author_name.trim()) return setError('Name ist erforderlich.');
    if (!form.author_email.trim()) return setError('E-Mail ist erforderlich.');
    if (form.rating < 1) return setError('Bitte wählen Sie eine Bewertung (1–5 Sterne).');
    if (!form.comment.trim()) return setError('Kommentar ist erforderlich.');
    if (form.comment.trim().length < 10) return setError('Kommentar zu kurz (min. 10 Zeichen).');
    setSending(true);
    try {
      await submitReview({
        product_slug: product.slug,
        product_name: product.name,
        author_name:  form.author_name.trim(),
        author_email: form.author_email.trim(),
        rating:       form.rating,
        comment:      form.comment.trim(),
      });
      setSuccess(true);
      setShowForm(false);
      setForm({ author_name: '', author_email: '', rating: 0, comment: '' });
    } catch (err) {
      setError(err.message || 'Fehler beim Senden. Bitte erneut versuchen.');
    } finally {
      setSending(false);
    }
  };

  const inputStyle = { width: '100%', padding: '10px 14px', border: '1.5px solid var(--border)', fontSize: 14, color: 'var(--dark)', background: 'white', outline: 'none', borderRadius: 0, fontFamily: 'inherit' };

  return (
    <div style={{ borderTop: '1px solid var(--border)', paddingTop: 48, marginBottom: 48 }}>

      {/* En-tête */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 6 }}>KUNDENSTIMMEN</p>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: 8 }}>Kundenbewertungen</h2>
          {totalCount > 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Stars value={Math.round(avgRating || 0)} size={18} />
              <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)' }}>{Number(avgRating).toFixed(1).replace('.', ',')} / 5</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>· {totalCount} {totalCount === 1 ? 'Bewertung' : 'Bewertungen'}</span>
            </div>
          ) : (
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Noch keine Bewertungen für dieses Produkt.</p>
          )}
        </div>
        {!showForm && !success && (
          <button
            onClick={handleShowForm}
            className="btn btn-accent btn-sm"
            style={{ flexShrink: 0, marginTop: 4 }}
          >
            <i className="bi bi-pencil-square" /> Bewertung schreiben
          </button>
        )}
      </div>

      {/* Message succès */}
      {success && (
        <div style={{ background: 'var(--green-light)', border: '1px solid rgba(26,120,64,0.25)', padding: '14px 18px', marginBottom: 28, display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--green)' }}>
          <i className="bi bi-check-circle-fill" style={{ fontSize: 17, flexShrink: 0 }} />
          <div>
            <strong>Vielen Dank für Ihre Bewertung!</strong>
            <p style={{ marginTop: 2, fontSize: 13, opacity: 0.85 }}>Ihre Bewertung wird nach Prüfung veröffentlicht.</p>
          </div>
        </div>
      )}

      {/* Formulaire */}
      {showForm && (
        <div ref={formRef} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: isMobile ? '20px 16px' : '28px 28px', marginBottom: 36 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 20 }}>Ihre Bewertung abgeben</h3>
          {error && (
            <div style={{ background: 'var(--sale-light)', border: '1px solid rgba(193,33,25,0.25)', padding: '10px 14px', marginBottom: 16, fontSize: 13, color: 'var(--sale)', display: 'flex', gap: 8, alignItems: 'center' }}>
              <i className="bi bi-exclamation-circle" style={{ flexShrink: 0 }} />{error}
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Name *</label>
                <input
                  style={inputStyle}
                  placeholder="Max Mustermann"
                  value={form.author_name}
                  onChange={e => setForm(f => ({ ...f, author_name: e.target.value }))}
                  maxLength={150}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>E-Mail *</label>
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="max@example.com"
                  value={form.author_email}
                  onChange={e => setForm(f => ({ ...f, author_email: e.target.value }))}
                  maxLength={254}
                />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Bewertung *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Stars value={form.rating} size={28} interactive onChange={v => setForm(f => ({ ...f, rating: v }))} />
                {form.rating > 0 && (
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                    {['', 'Sehr schlecht', 'Schlecht', 'Gut', 'Sehr gut', 'Ausgezeichnet'][form.rating]}
                  </span>
                )}
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Kommentar *</label>
              <textarea
                style={{ ...inputStyle, minHeight: 110, resize: 'vertical', lineHeight: 1.6 }}
                placeholder="Teilen Sie Ihre Erfahrung mit diesem Produkt…"
                value={form.comment}
                onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                maxLength={2000}
              />
              <p style={{ fontSize: 11, color: 'var(--text-light)', marginTop: 4, textAlign: 'right' }}>{form.comment.length} / 2000</p>
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setShowForm(false)} disabled={sending}>
                Abbrechen
              </button>
              <button type="submit" className="btn btn-accent" disabled={sending} style={{ minWidth: 160 }}>
                {sending ? <><i className="bi bi-hourglass-split" /> Wird gesendet…</> : <><i className="bi bi-send" /> Bewertung abgeben</>}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Liste des avis */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-muted)', fontSize: 14 }}>
          <i className="bi bi-hourglass-split" style={{ marginRight: 8 }} />Bewertungen werden geladen…
        </div>
      ) : reviews.length === 0 ? (
        !success && (
          <div style={{ textAlign: 'center', padding: '32px 0', color: 'var(--text-muted)', fontSize: 14 }}>
            <i className="bi bi-chat-square-text" style={{ fontSize: 32, display: 'block', marginBottom: 12, opacity: 0.4 }} />
            Seien Sie der Erste, der eine Bewertung hinterlässt.
          </div>
        )
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {reviews.map((r, idx) => (
            <div key={r.id} style={{ padding: '22px 0', borderTop: idx === 0 ? 'none' : '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                <div>
                  <Stars value={r.rating} size={14} />
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)', marginTop: 5 }}>{r.author_name}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{r.author_email}</p>
                </div>
                <span style={{ fontSize: 12, color: 'var(--text-light)', whiteSpace: 'nowrap', marginTop: 2 }}>{fmtReviewDate(r.created_at)}</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>
                &ldquo;{r.comment}&rdquo;
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const isInStock = product.stock === undefined || product.stock === 'instock' || product.stock > 0;

  const handleAdd = () => {
    if (!isInStock) return;
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
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px', background: '#EDECE9' }} />
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
                ? { background: 'var(--green-light)', color: 'var(--green)', border: '1px solid rgba(26,120,64,0.3)', borderRadius: 0, padding: '4px 12px', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 16 }
                : { background: 'var(--sale-light)', color: 'var(--sale)', border: '1px solid rgba(193,33,25,0.3)', borderRadius: 0, padding: '4px 12px', fontSize: 12, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 16 }
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
              <button onClick={handleAdd} disabled={!isInStock} style={{
                flex: 1, height: 44, borderRadius: 0, border: 'none',
                background: added ? 'var(--green)' : !isInStock ? 'var(--border-strong)' : 'var(--dark)',
                color: 'white', fontWeight: 800, fontSize: 14,
                cursor: isInStock ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'background 0.2s',
              }}>
                <i className={`bi ${added ? 'bi-check-lg' : !isInStock ? 'bi-x-circle' : 'bi-cart-plus'}`} />
                {added ? 'Hinzugefügt!' : !isInStock ? 'Nicht verfügbar' : 'In den Warenkorb'}
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

        {/* ── Kundenbewertungen ── */}
        <ReviewsSection product={product} />

        {/* ── Technische Daten ── */}
        {product.specs && (
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 32, marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: 'var(--dark)', marginBottom: 16 }}>Technische Daten</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px 12px' }}>
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} style={{ padding: '10px 14px', background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{k}</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
