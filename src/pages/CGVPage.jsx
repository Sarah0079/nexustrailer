import Section from '../components/LegalSection';

export default function CGVPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Geltungsbereich">
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Kaufverträge, die über die Website NexusTrailer zwischen LA REMORQUE M (nachfolgend „Verkäufer") und dem Käufer (nachfolgend „Kunde") geschlossen werden.</p>
        </Section>

        <Section title="Vertragsgegenstand">
          <p>
            Der Verkäufer bietet neue Anhänger, Wohnwagen und Baumaschinen an, die den geltenden europäischen Normen entsprechen und mit einem Übereinstimmungszertifikat (COC) geliefert werden.
          </p>
          <p style={{ marginTop: 10 }}>
            Abbildungen und Produktbeschreibungen sind so genau wie möglich. Der Verkäufer haftet nicht für etwaige Fehler oder Auslassungen.
          </p>
        </Section>

        <Section title="Preise">
          <p>
            Alle Preise sind in Euro (€) angegeben. Der Verkäufer behält sich das Recht vor, seine Preise jederzeit zu ändern. Maßgeblich sind die zum Zeitpunkt der Bestellbestätigung gültigen Preise.
          </p>
        </Section>

        <Section title="Bestellung">
          <p>
            Die Bestellung gilt als bestätigt, sobald die Zahlung (Anzahlung oder Gesamtbetrag) eingegangen ist. Der Kunde erhält eine eindeutige Bestellnummer (Format NXT-JJJJ-XXXXXX) zur Zahlungsreferenz und Sendungsverfolgung.
          </p>
        </Section>

        <Section title="Zahlung">
          <p>Die Zahlung erfolgt ausschließlich per SEPA-Banküberweisung. Es stehen zwei Optionen zur Verfügung:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Vollständige Zahlung:</strong> Der Gesamtbetrag wird bei Bestellung überwiesen.</li>
            <li><strong>50 % Anzahlung:</strong> 50 % bei Bestellung, der Restbetrag ist vor dem Versand fällig.</li>
          </ul>
          <p style={{ marginTop: 10 }}>
            Der Verwendungszweck der Überweisung muss zwingend die Bestellnummer enthalten. Die Bestellung wird nach Zahlungseingang bearbeitet.
          </p>
        </Section>

        <Section title="Lieferung">
          <p>
            Die Lieferung erfolgt innerhalb von 5–7 Werktagen ab Zahlungseingang. Die Standardlieferung ist in ganz Europa kostenlos. Eine Expresslieferung (1–3 Werktage) ist kostenpflichtig und auf Anfrage erhältlich.
          </p>
          <p style={{ marginTop: 10 }}>
            Bei sichtbaren Transportschäden muss der Kunde beim Transportunternehmen Vorbehalte anmelden und uns innerhalb von 48 Stunden informieren.
          </p>
        </Section>

        <Section title="Widerrufsrecht">
          <p>
            Der Kunde hat das Recht, binnen 14 Tagen ab Warenerhalt ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Einzelheiten entnehmen Sie bitte der Widerrufsbelehrung.
          </p>
        </Section>

        <Section title="Gewährleistung & Garantie">
          <p>Es gelten folgende Gewährleistungs- und Garantieregelungen:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>Gesetzliche Gewährleistung:</strong> gemäß den anwendbaren gesetzlichen Vorschriften.</li>
            <li><strong>Herstellergarantie:</strong> 2 Jahre auf Fabrikations- und Materialfehler.</li>
          </ul>
        </Section>

        <Section title="Datenschutz">
          <p>
            Die bei der Bestellung erhobenen Daten werden gemäß unserer Datenschutzerklärung verarbeitet, die auf dieser Website einsehbar ist.
          </p>
        </Section>

        <Section title="Streitbeilegung">
          <p>
            Bei Streitigkeiten steht dem Kunden der Weg zur außergerichtlichen Streitbeilegung offen. Diese AGB unterliegen französischem Recht. Im Streitfall sind die zuständigen französischen Gerichte zuständig.
          </p>
          <p style={{ marginTop: 10 }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
              ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse für Verbraucherbeschwerden lautet: info@nexustrailer.com
          </p>
        </Section>

      </div>
    </main>
  );
}
