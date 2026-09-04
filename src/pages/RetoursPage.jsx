function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>{title}</h2>
      <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.9 }}>{children}</div>
    </div>
  );
}

const STEPS = [
  { n: '1', label: 'Kontakt aufnehmen', desc: 'Senden Sie eine E-Mail an info@trailpro.com mit Ihrer Bestellnummer und dem Grund für die Rücksendung.' },
  { n: '2', label: 'Bestätigung',        desc: 'Wir bestätigen Ihren Antrag innerhalb von 48 Stunden und teilen Ihnen die Rücksendeadresse mit.' },
  { n: '3', label: 'Versand',            desc: 'Senden Sie den Artikel in der Originalverpackung zurück. Bewahren Sie Ihren Versandnachweis auf.' },
  { n: '4', label: 'Erstattung',         desc: 'Nach Eingang und Prüfung des Artikels erstatten wir den Kaufpreis innerhalb von 14 Tagen.' },
];

export default function RetoursPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KUNDENDIENST</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Rückgabe & Erstattung</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 15 }}>30 Tage Rückgaberecht – volle Erstattung garantiert.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginBottom: 56 }}>
          {[
            { icon: 'bi-calendar-check', label: '30 Tage',         desc: 'Rückgabefrist ab Lieferung' },
            { icon: 'bi-currency-euro',  label: 'Volle Erstattung', desc: 'Des gezahlten Kaufpreises' },
            { icon: 'bi-clock-history',  label: '14 Tage',          desc: 'Erstattungsfrist' },
          ].map(({ icon, label, desc }) => (
            <div key={label} style={{ background: 'var(--accent-light)', border: '1.5px solid var(--accent)', borderRadius: 'var(--r-md)', padding: 24, textAlign: 'center' }}>
              <i className={`bi ${icon}`} style={{ fontSize: 28, color: 'var(--accent)', display: 'block', marginBottom: 10 }} />
              <p style={{ fontSize: 20, fontWeight: 900, color: 'var(--dark)', marginBottom: 4 }}>{label}</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>

        <Section title="Rückgabebedingungen">
          <p>Eine Rückgabe wird akzeptiert, wenn:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Der Artikel innerhalb von <strong>30 Tagen</strong> nach Lieferung zurückgesandt wird.</li>
            <li>Der Artikel in seinem Originalzustand ist – <strong>unbenutzt und nicht montiert</strong>.</li>
            <li>Die Originalverpackung unbeschädigt oder der Artikel für den Transport ordnungsgemäß verpackt ist.</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Personalisierte, benutzte oder vom Kunden beschädigte Artikel werden nicht zur Rückgabe akzeptiert.
          </p>
        </Section>

        <Section title="Rückgabeprozess – 4 Schritte">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map(({ n, label, desc }, i) => (
              <div key={n} style={{ display: 'flex', gap: 16, position: 'relative' }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 15, top: 36, bottom: 0, width: 2, background: 'var(--border)', zIndex: 0 }} />
                )}
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0, zIndex: 1 }}>{n}</div>
                <div style={{ paddingBottom: i < STEPS.length - 1 ? 24 : 0, paddingTop: 4 }}>
                  <p style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>{label}</p>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Rücksendekosten">
          <p>Die Rücksendekosten trägt der Kunde, außer in folgenden Fällen:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Defekter oder nicht vertragsgemäßer Artikel.</li>
            <li>Fehler unsererseits bei der Bestellvorbereitung.</li>
            <li>Während der Lieferung beschädigte Ware (mit Vorbehalten beim Spediteur).</li>
          </ul>
        </Section>

        <Section title="Erstattung">
          <p>
            Die Erstattung erfolgt per Banküberweisung auf das Konto, das für die ursprüngliche Zahlung verwendet wurde – spätestens innerhalb von <strong>14 Tagen</strong> nach Eingang und Prüfung des zurückgesandten Artikels.
          </p>
        </Section>

      </div>
    </main>
  );
}
