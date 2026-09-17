import Section from '../components/LegalSection';

export default function ConfidentialitePage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Datenschutzerklärung</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 12, fontSize: 14 }}>Stand: Januar 2026</p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Verantwortliche Stelle">
          <p>
            LA REMORQUE M (NexusTrailer), 21 Rue du Bouchet, 63350 Maringues, Frankreich<br />
            E-Mail: info@nexustrailer.com – Telefon: +33 7 56 83 64 79
          </p>
        </Section>

        <Section title="Erhobene Daten">
          <p>Wir erheben folgende Daten bei der Nutzung unserer Website:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Bestelldaten:</strong> Name, Vorname, Lieferadresse, E-Mail, Telefonnummer.</li>
            <li><strong>Zahlungsdaten:</strong> Überweisungsreferenz (keine Bankdaten werden gespeichert).</li>
            <li><strong>Nutzungsdaten:</strong> IP-Adresse, besuchte Seiten, Sitzungsdauer (via Cookies).</li>
            <li><strong>Kontaktdaten:</strong> Nachrichten, die über das Kontaktformular gesendet werden.</li>
          </ul>
        </Section>

        <Section title="Zweck der Verarbeitung">
          <p>Ihre Daten werden verwendet für:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li>Bearbeitung und Verfolgung Ihrer Bestellungen.</li>
            <li>Versand von Bestätigungen und Benachrichtigungen zu Ihrer Bestellung.</li>
            <li>Beantwortung Ihrer Kontakt- oder Supportanfragen.</li>
            <li>Verbesserung der Nutzererfahrung (anonymisierte Daten).</li>
            <li>Erfüllung gesetzlicher Buchführungs- und Steuerplichten.</li>
          </ul>
        </Section>

        <Section title="Rechtsgrundlage">
          <p>Die Verarbeitung Ihrer Daten basiert auf:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Vertragserfüllung</strong> (Bestellabwicklung).</li>
            <li><strong>Einwilligung</strong> (nicht notwendige Cookies).</li>
            <li><strong>Berechtigtes Interesse</strong> (Website-Verbesserung, Sicherheit).</li>
            <li><strong>Gesetzliche Verpflichtung</strong> (Buchführungs- und Steuerplichten).</li>
          </ul>
        </Section>

        <Section title="Speicherdauer">
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Bestelldaten:</strong> 10 Jahre (gesetzliche Buchführungspflicht).</li>
            <li><strong>Kontaktdaten:</strong> 3 Jahre nach letztem Kontakt.</li>
            <li><strong>Nutzungsdaten:</strong> maximal 13 Monate.</li>
          </ul>
        </Section>

        <Section title="Weitergabe von Daten">
          <p>
            Ihre Daten können an unsere Logistikdienstleister (Spediteure) weitergegeben werden, soweit dies für die Lieferung Ihrer Bestellung erforderlich ist. Wir verkaufen Ihre Daten niemals an Dritte.
          </p>
        </Section>

        <Section title="Ihre Rechte (DSGVO)">
          <p>Gemäß der Datenschutz-Grundverordnung (DSGVO) stehen Ihnen folgende Rechte zu:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Auskunftsrecht:</strong> Kopie Ihrer gespeicherten Daten anfordern.</li>
            <li><strong>Berichtigungsrecht:</strong> Unrichtige Daten korrigieren lassen.</li>
            <li><strong>Recht auf Löschung:</strong> Löschung Ihrer Daten beantragen.</li>
            <li><strong>Recht auf Datenübertragbarkeit:</strong> Daten in einem lesbaren Format erhalten.</li>
            <li><strong>Widerspruchsrecht:</strong> Bestimmten Verarbeitungen widersprechen.</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Zur Ausübung dieser Rechte wenden Sie sich bitte an: <strong>info@nexustrailer.com</strong>. Sie können auch eine Beschwerde bei der zuständigen Datenschutzbehörde einreichen.
          </p>
        </Section>

      </div>
    </main>
  );
}
