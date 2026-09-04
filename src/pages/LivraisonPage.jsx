function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--dark)', marginBottom: 14, paddingBottom: 10, borderBottom: '2px solid var(--accent)' }}>{title}</h2>
      <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.9 }}>{children}</div>
    </div>
  );
}

const OPTIONEN = [
  {
    icon: 'bi-truck',
    title: 'Kostenlose Standardlieferung',
    delai: '5–7 Werktage',
    preis: 'Kostenlos',
    desc: 'Kostenlos in ganz Europa. Kein Mindestbestellwert. Lieferung durch einen spezialisierten Spediteur.',
    color: 'var(--green)',
    highlight: true,
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Expresslieferung',
    delai: '1–3 Werktage',
    preis: 'Kostenpflichtig',
    desc: 'Schnelle Lieferung nach Verfügbarkeit und Zielort. Preis wird bei der Bestellung mitgeteilt.',
    color: 'var(--accent)',
    highlight: false,
  },
];

export default function LivraisonPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KUNDENDIENST</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Versand- und Lieferbedingungen</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 15 }}>Kostenloser Versand in ganz Europa – Expresslieferung auf Anfrage.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Lieferoptionen">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 16 }}>
            {OPTIONEN.map(({ icon, title, delai, preis, desc, color, highlight }) => (
              <div key={title} style={{
                background: highlight ? 'var(--accent-light)' : 'var(--bg)',
                border: `1.5px solid ${highlight ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--r-lg)', padding: 24,
              }}>
                <i className={`bi ${icon}`} style={{ fontSize: 26, color, display: 'block', marginBottom: 12 }} />
                <p style={{ fontWeight: 800, color: 'var(--dark)', fontSize: 15, marginBottom: 6 }}>{title}</p>
                <p style={{ fontWeight: 700, color, fontSize: 18, marginBottom: 4 }}>{preis}</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>⏱ {delai}</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p>
            Die angegebenen Lieferzeiten gelten ab Eingang Ihrer vollständigen Zahlung. Sie können je nach Stoßzeiten oder Zielort leicht abweichen.
          </p>
        </Section>

        <Section title="Liefergebiet">
          <p>
            Wir liefern in <strong>ganz Europa</strong> – kostenlos und ohne Mindestbestellwert. Für die Expresslieferung kontaktieren Sie uns bitte, da der Preis je nach Zielort und Verfügbarkeit variiert.
          </p>
        </Section>

        <Section title="Versandmodalitäten">
          <p>
            Unsere Anhänger und Maschinen werden von spezialisierten Spediteuren (Tieflader oder Pritschenwagen) geliefert. Die Zustellung erfolgt an die bei der Bestellung angegebene Adresse, ebenerdig oder an einer für den Lkw zugänglichen Straße.
          </p>
          <p style={{ marginTop: 10 }}>
            Der Spediteur wird Sie vor der Lieferung kontaktieren, um einen geeigneten Liefertermin zu vereinbaren.
          </p>
        </Section>

        <Section title="Warenannahme">
          <p>Prüfen Sie bei der Lieferung bitte:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Den äußeren Zustand der Verpackung und des Produkts.</li>
            <li>Die Übereinstimmung des Produkts mit Ihrem Auftragsschein.</li>
            <li>Das Vorhandensein der Begleitdokumente (Übereinstimmungszertifikat, Montageanleitung).</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Bei sichtbaren Schäden vermerken Sie dies <strong>unbedingt auf dem Lieferschein</strong> und kontaktieren Sie uns innerhalb von 48 Stunden mit Fotos.
          </p>
        </Section>

        <Section title="Eigentums- und Gefahrenübergang">
          <p>
            Das Eigentum an den Produkten geht erst nach vollständiger Bezahlung des Kaufpreises auf den Käufer über. Die Gefahr des zufälligen Untergangs oder der Beschädigung geht mit der Übergabe der Ware auf den Kunden über.
          </p>
        </Section>

      </div>
    </main>
  );
}
