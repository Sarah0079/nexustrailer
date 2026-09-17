import Section from '../components/LegalSection';

export default function GarantiePage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KUNDENDIENST</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Garantie & Gewährleistung</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 12, fontSize: 15 }}>Alle unsere Produkte sind mit einer 2-jährigen Garantie abgedeckt.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 56 }}>
          {[
            { icon: 'bi-shield-fill-check', label: '2 Jahre',       desc: 'Herstellergarantie auf alle Produkte', color: 'var(--green)' },
            { icon: 'bi-patch-check-fill',  label: 'Zertifiziert',  desc: 'Übereinstimmungszertifikat (COC) inklusive', color: 'var(--accent)' },
            { icon: 'bi-tools',             label: 'Schneller Service', desc: 'Schnelle Bearbeitung von Reklamationen', color: 'var(--accent)' },
          ].map(({ icon, label, desc, color }) => (
            <div key={label} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '28px 24px', textAlign: 'center' }}>
              <i className={`bi ${icon}`} style={{ fontSize: 32, color, display: 'block', marginBottom: 12 }} />
              <p style={{ fontSize: 22, fontWeight: 900, color: 'var(--dark)', marginBottom: 6 }}>{label}</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>

        <Section title="Herstellergarantie (2 Jahre)">
          <p>
            NexusTrailer gewährt eine <strong>Herstellergarantie von 2 Jahren</strong> auf alle Produkte ab dem Lieferdatum. Diese Garantie deckt ab:
          </p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Herstellungs- und Materialfehler.</li>
            <li>Elektrische oder mechanische Fehlfunktionen, die nicht auf unsachgemäßen Gebrauch zurückzuführen sind.</li>
            <li>Ab Werk defekte Teile.</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Nicht abgedeckt sind: normaler Verschleiß, Schäden durch unsachgemäßen Gebrauch, Überlastung, Unfälle oder Veränderungen am Produkt.
          </p>
        </Section>

        <Section title="Gesetzliche Gewährleistung">
          <p>
            Gemäß den geltenden gesetzlichen Bestimmungen ist der Verkäufer verpflichtet, mangelfreie Ware zu liefern. Bei einem Sachmangel haben Sie Anspruch auf Nacherfüllung (Reparatur oder Ersatzlieferung) oder, falls dies scheitert, auf Minderung des Kaufpreises oder Rücktritt vom Vertrag.
          </p>
        </Section>

        <Section title="Garantie für versteckte Mängel">
          <p>
            Weist ein Produkt einen versteckten Mangel auf, der es für den vorgesehenen Gebrauch ungeeignet macht, können Sie die Auflösung des Kaufvertrags oder eine Preisminderung verlangen – innerhalb von 2 Jahren nach Entdeckung des Mangels.
          </p>
        </Section>

        <Section title="Garantieabwicklung">
          <p>So nehmen Sie Ihre Garantie in Anspruch:</p>
          <ol style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li>Kontaktieren Sie unseren Kundendienst unter <strong>info@nexustrailer.com</strong> mit Ihrer Bestellnummer und einer Beschreibung des Problems.</li>
            <li>Fügen Sie Fotos oder Videos bei, die den festgestellten Mangel zeigen.</li>
            <li>Unser Team antwortet innerhalb von 48 Stunden und teilt Ihnen das weitere Vorgehen mit (Reparatur, Austausch, Rücksendung).</li>
          </ol>
          <p style={{ marginTop: 12 }}>
            Im Garantiefall übernimmt NexusTrailer die Rücksendekosten.
          </p>
        </Section>

        <Section title="Übereinstimmungszertifikat (COC)">
          <p>
            Jedes bei NexusTrailer verkaufte Produkt wird mit seinem <strong>europäischen Übereinstimmungszertifikat (COC)</strong> geliefert – ein unverzichtbares Dokument für die Zulassung Ihres Anhängers oder Geräts. Bei Verlust kontaktieren Sie uns für ein Duplikat.
          </p>
        </Section>

      </div>
    </main>
  );
}
