import { useBreakpoint } from '../hooks/useBreakpoint';
import Section from '../components/LegalSection';

export default function PaiementPage() {
  const isMobile = useBreakpoint(640);
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>KUNDENDIENST</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Zahlungsbedingungen</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Akzeptierte Zahlungsart">
          <div style={{ background: 'var(--accent-light)', border: '1.5px solid var(--accent)', borderRadius: 'var(--r-md)', padding: '18px 24px', display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
            <i className="bi bi-bank2" style={{ fontSize: 28, color: 'var(--accent)', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: 4 }}>SEPA-Banküberweisung</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Einzige akzeptierte Zahlungsart – sicher und ohne zusätzliche Gebühren.</p>
            </div>
          </div>
          <p>
            Wir akzeptieren keine Zahlungen per Kreditkarte, PayPal oder Bargeld. Die SEPA-Überweisung gewährleistet die Sicherheit Ihrer Transaktion und die Nachvollziehbarkeit Ihrer Zahlung.
          </p>
        </Section>

        <Section title="Zahlungsoptionen">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16, marginBottom: 16 }}>
            {[
              { icon: 'bi-check-circle-fill', title: 'Vollständige Zahlung', desc: 'Überweisen Sie den Gesamtbetrag bei der Bestellung. Ihre Bestellung wird sofort nach Zahlungseingang bearbeitet.', color: 'var(--green)' },
              { icon: 'bi-percent',           title: '50 % Anzahlung',       desc: '50 % bei der Bestellung, der Restbetrag ist vor dem Versand Ihres Artikels fällig.', color: 'var(--accent)' },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 20 }}>
                <i className={`bi ${icon}`} style={{ fontSize: 22, color, display: 'block', marginBottom: 10 }} />
                <p style={{ fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{title}</p>
                <p style={{ fontSize: 13 }}>{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Bankverbindung">
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <i className="bi bi-lock-fill" style={{ fontSize: 22, color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              Unsere vollständigen Bankdaten (Empfänger, IBAN, BIC) werden Ihnen <strong>ausschließlich auf der Auftragsbestätigungsseite</strong> nach dem Abschluss Ihrer Bestellung mitgeteilt. Diese Information wird aus Sicherheitsgründen nicht öffentlich angezeigt.
            </p>
          </div>
        </Section>

        <Section title="Verwendungszweck / Zahlungsreferenz">
          <div style={{ background: '#FEF3C7', border: '1.5px solid #F59E0B', borderRadius: 'var(--r-md)', padding: '14px 20px', display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
            <i className="bi bi-exclamation-triangle-fill" style={{ color: '#D97706', fontSize: 18, flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 13, color: '#92400E', lineHeight: 1.7 }}>
              <strong>Wichtig:</strong> Ihre Bestellnummer (Format NXT-JJJJ-XXXXXX) muss zwingend als Verwendungszweck der Überweisung angegeben werden. Ohne diese Referenz kann Ihre Zahlung nicht zugeordnet werden und die Bearbeitung verzögert sich.
            </p>
          </div>
          <p>
            Die eindeutige Referenz wird automatisch auf Ihrer Bestellbestätigungsseite generiert. Sie dient auch zur Verfolgung Ihrer Bestellung auf der Auftragsverfolgungsseite.
          </p>
        </Section>

        <Section title="Bearbeitungszeit">
          <p>
            Ihre Bestellung wird bearbeitet, sobald Ihre Überweisung auf unserem Bankkonto eingegangen und überprüft ist – dies dauert in der Regel <strong>1–2 Werktage</strong>. Die Vorbereitung und der Versand erfolgen danach innerhalb von 24 bis 48 Stunden.
          </p>
        </Section>

      </div>
    </main>
  );
}
