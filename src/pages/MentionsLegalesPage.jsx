import Section from '../components/LegalSection';

export default function MentionsLegalesPage() {
  return (
    <main>
      <div style={{ background: 'var(--dark)', padding: '56px 0 48px' }}>
        <div className="container">
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: 8 }}>RECHTLICHES</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: 'white', letterSpacing: '-0.02em' }}>Impressum</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '56px 24px 80px', maxWidth: 800 }}>

        <Section title="Anbieter">
          <p><strong>Unternehmensname:</strong> LA REMORQUE M</p>
          <p><strong>Handelsname:</strong> NexusTrailer</p>
          <p><strong>Rechtsform:</strong> Einzelunternehmen (Frankreich)</p>
          <p><strong>SIREN:</strong> 948 418 827</p>
          <p><strong>SIRET:</strong> 94841882700010</p>
          <p><strong>USt-IdNr.:</strong> FR16948418827</p>
          <p><strong>Handelsregisternummer:</strong> 948 418 827 R.C.S. Clermont-Ferrand</p>
          <p><strong>Anschrift:</strong> 21 Rue du Bouchet, 63350 Maringues, Frankreich</p>
          <p><strong>Telefon:</strong> +33 7 56 83 64 79</p>
          <p><strong>E-Mail:</strong> info@nexustrailer.com</p>
        </Section>

        <Section title="Verantwortlicher für den Inhalt">
          <p>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV ist der Inhaber von LA REMORQUE M.</p>
        </Section>

        <Section title="Hosting">
          <p><strong>Hosting-Anbieter:</strong> Hostinger International Ltd</p>
          <p><strong>Anschrift:</strong> 61 Lordou Vironos Street, 6023 Larnaca, Zypern</p>
          <p><strong>Website:</strong> www.hostinger.com</p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Icons, Sounds, Software usw.) sind – sofern nicht anders angegeben – Eigentum von LA REMORQUE M / NexusTrailer und urheberrechtlich geschützt.
          </p>
          <p style={{ marginTop: 10 }}>
            Jegliche Vervielfältigung, Verbreitung, Veröffentlichung oder Bearbeitung ohne vorherige schriftliche Genehmigung von LA REMORQUE M ist untersagt.
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
