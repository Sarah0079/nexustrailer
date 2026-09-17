import Section from '../components/LegalSection';

const COOKIES = [
  { name: 'Notwendige Cookies',    desc: 'Für den Betrieb der Website unbedingt erforderlich (Warenkorb, Sitzung, Einstellungen). Können nicht deaktiviert werden.', examples: 'Warenkorb, Benutzersitzung', dauer: 'Sitzung / 1 Jahr' },
  { name: 'Analyse-Cookies',       desc: 'Ermöglichen die Messung der Website-Nutzung und die Verbesserung der Benutzererfahrung (besuchte Seiten, Verweildauer).', examples: 'Google Analytics (anonymisiert)', dauer: '13 Monate' },
  { name: 'Marketing-Cookies',     desc: 'Werden verwendet, um Ihnen auf anderen Websites personalisierte Werbung anzuzeigen.', examples: 'Facebook Pixel, Google Ads', dauer: '90 Tage' },
];

export default function CookiesPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Cookie-Richtlinie</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Was sind Cookies?">
          <p>
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät (Computer, Tablet, Smartphone) gespeichert werden. Sie ermöglichen es der Website, Informationen über Ihren Besuch zu speichern, z. B. Ihre bevorzugte Sprache und andere Einstellungen.
          </p>
        </Section>

        <Section title="Von uns verwendete Cookies">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
            {COOKIES.map(({ name, desc, examples, dauer }) => (
              <div key={name} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 20 }}>
                <p style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{name}</p>
                <p>{desc}</p>
                <p style={{ marginTop: 6 }}><strong>Beispiele:</strong> {examples}</p>
                <p><strong>Speicherdauer:</strong> {dauer}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Cookie-Einstellungen verwalten">
          <p>Sie können Ihre Cookie-Einstellungen jederzeit über die Einstellungen Ihres Browsers ändern:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Google Chrome:</strong> Einstellungen &gt; Datenschutz und Sicherheit &gt; Cookies</li>
            <li><strong>Mozilla Firefox:</strong> Optionen &gt; Datenschutz & Sicherheit</li>
            <li><strong>Safari:</strong> Einstellungen &gt; Datenschutz</li>
            <li><strong>Microsoft Edge:</strong> Einstellungen &gt; Datenschutz, Suche und Dienste</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Bitte beachten Sie: Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website beeinträchtigen (Warenkorb, Bestellverfolgung usw.).
          </p>
        </Section>

        <Section title="Kontakt">
          <p>Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte an: <strong>info@nexustrailer.com</strong></p>
        </Section>

      </div>
    </main>
  );
}
