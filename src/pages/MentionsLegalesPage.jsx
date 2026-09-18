import Section from '../components/LegalSection';

export default function MentionsLegalesPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px', borderBottom: '3px solid var(--accent)' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Impressum</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Anbieter">
          <p><strong>Unternehmensname:</strong> NET &amp; CO ACCESS</p>
          <p><strong>Handelsname:</strong> NexusTrailer</p>
          <p><strong>Rechtsform:</strong> SAS (société par actions simplifiée)</p>
          <p><strong>SIREN:</strong> 941 786 444</p>
          <p><strong>SIRET:</strong> 941 786 444 00013</p>
          <p><strong>Code NAF / APE:</strong> 29.20Z (Fabrication de carrosseries et remorques)</p>
          <p><strong>Anschrift:</strong> 8 Rue de la Pointe, ZI A, 59113 Seclin, Frankreich</p>
          <p><strong>Geschäftsführer:</strong> LES PYRAMIDES (SAS représentée par Livie Cremades-Marin)</p>
          <p><strong>E-Mail:</strong> info@nexustrailer.com</p>
        </Section>

        <Section title="Verantwortlicher für den Inhalt">
          <p>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV ist der Geschäftsführer von NET &amp; CO ACCESS.</p>
        </Section>

        <Section title="Hosting">
          <p><strong>Hosting-Anbieter:</strong> Hostinger International Ltd</p>
          <p><strong>Anschrift:</strong> 61 Lordou Vironos Street, 6023 Larnaca, Zypern</p>
          <p><strong>Website:</strong> www.hostinger.com</p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Icons, Sounds, Software usw.) sind – sofern nicht anders angegeben – Eigentum von NET &amp; CO ACCESS / NexusTrailer und urheberrechtlich geschützt.
          </p>
          <p style={{ marginTop: 10 }}>
            Jegliche Vervielfältigung, Verbreitung, Veröffentlichung oder Bearbeitung ohne vorherige schriftliche Genehmigung von NET &amp; CO ACCESS ist untersagt.
          </p>
        </Section>

        <Section title="Haftungsausschluss">
          <p>
            NexusTrailer übernimmt keine Haftung für Schäden, die durch die Nutzung dieser Website entstehen, insbesondere nicht für technische Störungen, Datenverlust oder unrichtige Angaben Dritter.
          </p>
        </Section>

        <Section title="Anwendbares Recht und Gerichtsstand">
          <p>
            Dieses Impressum unterliegt französischem Recht. Bei Streitigkeiten sind die zuständigen französischen Gerichte zuständig.
          </p>
        </Section>

      </div>
    </main>
  );
}
