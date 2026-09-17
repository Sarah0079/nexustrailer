import Section from '../components/LegalSection';

export default function RetractationPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Widerrufsbelehrung</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <div style={{ background: 'var(--accent-light)', border: '1.5px solid var(--accent)', borderRadius: 'var(--r-md)', padding: '18px 24px', marginBottom: 40, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <i className="bi bi-info-circle-fill" style={{ color: 'var(--accent)', fontSize: 20, flexShrink: 0, marginTop: 2 }} />
          <p style={{ fontSize: 14, color: 'var(--dark)', lineHeight: 1.7 }}>
            Sie haben das Recht, binnen <strong>14 Tagen</strong> ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          </p>
        </div>

        <Section title="Widerrufsfrist">
          <p>
            Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Ware in Besitz genommen haben bzw. hat.
          </p>
        </Section>

        <Section title="Ausübung des Widerrufsrechts">
          <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z. B. Brief, Telefax oder E-Mail) über Ihren Entschluss informieren:</p>
          <ul style={{ marginTop: 10, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <li><strong>E-Mail:</strong> info@nexustrailer.com</li>
            <li><strong>Telefon:</strong> +33 7 56 83 64 79</li>
            <li><strong>Post:</strong> LA REMORQUE M – 21 Rue du Bouchet, 63350 Maringues, Frankreich</li>
          </ul>
          <p style={{ marginTop: 12 }}>
            Sie können dafür das Muster-Widerrufsformular unten verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>
        </Section>

        <Section title="Muster-Widerrufsformular">
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: 24 }}>
            <p style={{ fontStyle: 'italic', marginBottom: 12 }}>An: LA REMORQUE M – 21 Rue du Bouchet, 63350 Maringues – info@nexustrailer.com</p>
            <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*):</p>
            <p style={{ marginTop: 8 }}>Bestellt am (*) / erhalten am (*): _______________</p>
            <p>Name des/der Verbraucher(s): _______________</p>
            <p>Anschrift des/der Verbraucher(s): _______________</p>
            <p>Bestellnummer: _______________</p>
            <p style={{ marginTop: 8 }}>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
            <p>Datum: _______________</p>
            <p style={{ marginTop: 10, fontSize: 12, opacity: 0.6 }}>(*) Unzutreffendes streichen.</p>
          </div>
        </Section>

        <Section title="Rücksendung der Ware">
          <p>
            Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen 14 Tagen ab dem Tag, an dem Sie uns über den Widerruf informieren, an uns zurückzusenden. Die Rücksendekosten tragen Sie.
          </p>
          <p style={{ marginTop: 10 }}>
            Die Ware muss in der Originalverpackung, unbeschädigt und unbenutzt zurückgesendet werden.
          </p>
        </Section>

        <Section title="Erstattung">
          <p>
            Wir erstatten alle Zahlungen, die wir von Ihnen erhalten haben, mittels Banküberweisung – spätestens 14 Tage ab Eingang Ihrer Widerrufsmitteilung. Wir können die Erstattung bis zum Eingang der zurückgesandten Waren zurückhalten.
          </p>
        </Section>

      </div>
    </main>
  );
}
