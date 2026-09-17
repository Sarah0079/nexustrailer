import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    cat: 'Lieferung',
    items: [
      { q: 'Wie lange dauert die Lieferung?', a: '5–7 Werktage für die kostenlose Lieferung, 1–3 Werktage für die kostenpflichtige Expresslieferung.' },
      { q: 'Ist die Lieferung kostenlos?', a: 'Ja, die Lieferung ist für alle Bestellungen kostenlos – mit einer Lieferzeit von 5–7 Werktagen.' },
      { q: 'Werden die Anhänger montiert geliefert?', a: 'Die meisten unserer Anhänger werden fertig montiert und einsatzbereit geliefert. Bei einigen Modellen ist eine Teilmontage erforderlich. Eine Montageanleitung liegt immer bei.' },
      { q: 'Liefern Sie ins Ausland?', a: 'Ja, wir liefern europaweit.' },
    ],
  },
  {
    cat: 'Zahlung',
    items: [
      { q: 'Welche Zahlungsmethoden akzeptieren Sie?', a: 'Wir akzeptieren ausschließlich SEPA-Banküberweisung und SEPA-Echtzeitüberweisung. Sie können die gesamte Summe oder eine Anzahlung von 50 % leisten – der Restbetrag ist vor dem Versand fällig.' },
      { q: 'Kann ich in zwei Raten zahlen?', a: 'Ja, wir bieten eine Zahlung in zwei Raten an: 50 % Anzahlung bei Bestellung, der Restbetrag vor dem Versand Ihres Artikels.' },
      { q: 'Wozu dient meine Zahlungsreferenz?', a: 'Die Bestellreferenz (Format NXT-JJJJ-XXXXXX) muss zwingend als Verwendungszweck Ihrer Überweisung angegeben werden. So können wir Ihre Zahlung schnell zuordnen und Ihre Bestellung ohne Verzögerung bearbeiten.' },
    ],
  },
  {
    cat: 'Bestellung & Verfolgung',
    items: [
      { q: 'Wie verfolge ich meine Bestellung?', a: 'Gehen Sie zur Seite „Auftragsverfolgung" und geben Sie Ihre Bestellnummer (Format NXT-JJJJ-XXXXXX) ein, um den aktuellen Status einzusehen.' },
      { q: 'Kann ich meine Bestellung ändern oder stornieren?', a: 'Sie können Ihre Bestellung ändern oder stornieren, solange sie noch nicht versandt wurde. Kontaktieren Sie uns schnellstmöglich per E-Mail oder Telefon.' },
      { q: 'Was tun, wenn meine Bestellung nicht ankommt?', a: 'Prüfen Sie zunächst den Bestellstatus auf unserer Website. Falls sich der Status seit mehr als 5 Werktagen nicht verändert hat, kontaktieren Sie unseren Kundendienst mit Ihrer Bestellnummer.' },
    ],
  },
  {
    cat: 'Produkte & Technik',
    items: [
      { q: 'Brauche ich einen besonderen Führerschein zum Ziehen eines Anhängers?', a: 'Mit dem Führerschein der Klasse B dürfen Sie Anhänger bis 750 kg zGG ziehen, oder Gespanne bis maximal 3.500 kg Gesamtgewicht. Für schwerere Gespanne ist der Führerschein BE erforderlich. Das zGG finden Sie in der jeweiligen Produktbeschreibung.' },
      { q: 'Wie wähle ich den richtigen Anhänger für mein Fahrzeug?', a: 'Überprüfen Sie die zulässige Anhängelast in den Fahrzeugpapieren. Das zGG des Anhängers darf diesen Wert nicht überschreiten. Kontaktieren Sie uns gerne für eine persönliche Beratung.' },
      { q: 'Sind Ihre Produkte zugelassen?', a: 'Ja, alle unsere Produkte entsprechen den geltenden europäischen Vorschriften und werden mit einem Übereinstimmungszertifikat (COC) geliefert.' },
      { q: 'Bieten Sie Ersatzteile an?', a: 'Kontaktieren Sie uns direkt bei Ersatzteilvorgängen. Wir können die benötigten Teile über unsere Herstellerpartner beziehen.' },
    ],
  },
  {
    cat: 'Rückgabe & Garantie',
    items: [
      { q: 'Wie ist Ihre Rückgabepolitik?', a: 'Sie haben 30 Tage ab Lieferung Zeit, einen unbenutzten Artikel in der Originalverpackung zurückzusenden. Die Rücksendekosten trägt der Kunde, außer bei defekter oder falsch gelieferter Ware.' },
      { q: 'Welche Garantie gilt für Ihre Produkte?', a: 'Alle unsere Produkte verfügen über eine Garantie von 2 Jahren, die Herstellungs- und Materialfehler abdeckt, sowie die gesetzliche Gewährleistung.' },
      { q: 'Mein Artikel ist beschädigt angekommen – was soll ich tun?', a: 'Vermerken Sie die Schäden auf dem Lieferschein und kontaktieren Sie uns innerhalb von 48 Stunden mit Fotos. Wir kümmern uns um Ersatz oder Reparatur.' },
    ],
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', textAlign: 'left', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: 22, fontWeight: 300, color: 'var(--accent)', flexShrink: 0, lineHeight: 1, userSelect: 'none' }}>{open ? '−' : '+'}</span>
      </button>
      {open && <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, paddingBottom: 20 }}>{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>HILFE</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Häufig gestellte Fragen</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 12, fontSize: 15 }}>Alles, was Sie vor Ihrer Bestellung wissen müssen.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 900 }}>
        {FAQS.map(({ cat, items }) => (
          <div key={cat} style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 4 }}>{cat}</p>
            <div style={{ borderBottom: '1px solid var(--border)' }}>
              {items.map(({ q, a }) => <Item key={q} q={q} a={a} />)}
            </div>
          </div>
        ))}

        <div style={{ background: 'var(--dark)', borderTop: '3px solid var(--accent)', padding: '32px 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginTop: 16 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'white', marginBottom: 6 }}>Keine passende Antwort gefunden?</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Unser Team antwortet innerhalb von 24 Stunden.</p>
          </div>
          <Link to="/kontakt" className="btn btn-primary"><i className="bi bi-chat-dots" /> Kontakt aufnehmen</Link>
        </div>
      </div>
    </main>
  );
}
