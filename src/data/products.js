export const CATEGORIES = [
  { id: 'wohnwagen', label: 'Wohnwagen & Caravans', image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&q=80' },
  { id: 'tinyhouse', label: 'Tiny House & Mobilheim', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80' },
  { id: 'bagger', label: 'Baumaschinen & Bagger', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
  { id: 'kipper', label: 'Kipperanhänger', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80' },
  { id: 'pritsche', label: 'Transportanhänger & Pritsche', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { id: 'food', label: 'Verkaufsanhänger & Food', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
  { id: 'kuehl', label: 'Kühlanhänger', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80' },
];

export const PRODUCTS = [
  // ── STERCKEMAN ────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'sterckeman-easy-420cp',
    name: 'Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg',
    subtitle: 'Wohnwagen · Coque Polyester · 4 Personen',
    category: 'wohnwagen',
    price: 7494,
    originalPrice: 15490,
    discount: 52,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/Principal.jpg',
      '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/EASY-460CP-3-1-768x1024-1.jpg',
      '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/EASY-460CP-4-768x1024-1.jpg',
      '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/Easy-420CP-Jour-2026-768x284-1.png',
      '/image/Sterckeman Easy 420CP – Wohnwagen 4 Personen, große Küche, 950 kg/Easy-420CP-NUIT-2026-768x284-1.png',
    ],
    specs: { Länge: '6,15 m', Breite: '2,10 m', Gewicht: '950 kg', Personen: '4', Typ: 'Coque Polyester' },
    description: 'Wohnwagen Sterckeman Easy 420CP – 4 Schlafplätze, Küche mit 120 cm Arbeitsplatte, 950 kg Gesamtgewicht, Gesamtlänge 6,15 m. Perfekt durchdachter Grundriss für angenehmes Reisen.',
    descriptionHtml: `<p>Sie werden in diesem perfekt gestalteten Wohnwagen gerne kochen, leben und reisen. Der Küchenbereich bietet eine Arbeitsplatte von 120 cm Länge, damit Sie Ihre Mahlzeiten mit Freude zubereiten können. Der 420CP ist der ideale Wohnwagen für alle, die ein hervorragendes Preis-Raumangebot in der Easy-Baureihe suchen.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (4 Personen)</h3>
<ul><li>4 Schlafplätze</li><li>Festes Querbett</li><li>Umbaubare Sitzecke</li></ul>
<h3><i class="bi bi-rulers"></i> Abmessungen</h3>
<ul>
<li>Gesamtlänge inkl. Kupplung: 6,15 m</li>
<li>Außenlänge Karosserie: 4,77 m</li>
<li>Innenlänge: 4,20 m</li>
<li>Gesamthöhe: 2,58 m</li>
<li>Innenhöhe: 1,95 m</li>
<li>Gesamtbreite: 2,10 m</li>
<li>Innenbreite: 1,94 m</li>
<li>Reserverad: 175R14C</li>
</ul>
<h3><i class="bi bi-speedometer2"></i> Gewicht</h3>
<ul><li>Zulässiges Gesamtgewicht (PTAC): 950 kg</li></ul>
<h3><i class="bi bi-fire"></i> Küche</h3>
<ul><li>Arbeitsplatte 120 cm</li><li>Funktionelle und gut ausgestattete Küche</li></ul>
<h3><i class="bi bi-tools"></i> Serienausstattung (Safety-Paket)</h3>
<ul>
<li>Schlingerdämpfer AKS 3004</li>
<li>Stoßdämpfer</li>
<li>Stahlreserverad</li>
<li>Verstärkte Stützfüße</li>
<li>Seitliche Außenklappe (100×40)</li>
</ul>
<h3><i class="bi bi-palette"></i> Design</h3>
<ul><li>Stoff: SYDNEY</li><li>Möbel: EAMES</li></ul>
<p><strong>Marke:</strong> Sterckeman (Trigano-Gruppe) | <strong>Baureihe:</strong> Easy | <strong>Modell:</strong> 420CP</p>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Verlängerungskabel 230V (10 m) – Für den Stromanschluss auf dem Campingplatz.',
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'sterckeman-easy-366pe-h',
    name: 'Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg',
    subtitle: 'Wohnwagen · Pavillon Élévable · Etagenbetten · 4 Personen',
    category: 'wohnwagen',
    price: 6490,
    originalPrice: 12990,
    discount: 50,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg/Principal.jpg',
      '/image/Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg/STERCKEMAN_EASY_366PE_002-1-768x1024-2.jpg',
      '/image/Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg/Easy-366PE-Jour-2026-768x318-2.png',
      '/image/Sterckeman Easy 366PE H – Familienwohnwagen 4 Personen, Etagenbetten, 800 kg/Easy-366PE-Nuit-2026-768x318-2.png',
    ],
    specs: { Länge: '5,30 m', Breite: '2,10 m', Gewicht: '800 kg', Personen: '4', Typ: 'Pavillon Élévable' },
    description: 'Wohnwagen Sterckeman Easy 366PE H – 4 Schlafplätze mit Etagenbetten, 800 kg Gesamtgewicht, 100% elektrische Ausstattung und exklusives Konnektivitätskonzept.',
    descriptionHtml: `<p>Neuer Familienwohnwagen für 4 Personen mit 100% elektrischer Ausstattung. Zusätzlich bietet er exklusiv und serienmäßig ein völlig neues Konnektivitätskonzept. Die Version 366PE H verfügt über Etagenbetten, die sich ideal für Familien mit Kindern eignen.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (4 Personen)</h3>
<ul>
<li>4 Schlafplätze</li>
<li>Etagenbetten (H-Version)</li>
<li>100% elektrische Ausstattung</li>
<li>Fahrradstaufach: 100×65 cm</li>
</ul>
<h3><i class="bi bi-rulers"></i> Abmessungen</h3>
<ul>
<li>Gesamtlänge inkl. Kupplung: 5,30 m</li>
<li>Außenlänge Karosserie: 4,17 m</li>
<li>Innenlänge: 3,60 m</li>
<li>Gesamthöhe: 2,58 m</li>
<li>Innenhöhe: 1,95 m</li>
<li>Gesamtbreite: 2,10 m</li>
<li>Innenbreite: 1,94 m</li>
<li>Reserverad: 185/70R14</li>
<li>Fahrradstaufach: 100×65 cm</li>
</ul>
<h3><i class="bi bi-speedometer2"></i> Gewicht</h3>
<ul><li>Zulässiges Gesamtgewicht (PTAC): 800 kg</li></ul>
<h3><i class="bi bi-tools"></i> Serienausstattung (Safety Light-Paket)</h3>
<ul>
<li>Schlingerdämpfer AKS 3004</li>
<li>Stoßdämpfer</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Highlights</h3>
<ul>
<li>100% elektrische Ausstattung</li>
<li>Exklusives neues Konnektivitätskonzept</li>
<li>Praktische Etagenbetten für Kinder</li>
</ul>
<p><strong>Marke:</strong> Sterckeman (Trigano-Gruppe) | <strong>Baureihe:</strong> Easy | <strong>Modell:</strong> 366PE H</p>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Verlängerungskabel 230V (10 m) – Für den Stromanschluss auf dem Campingplatz.',
    ],
    featured: true,
  },
  {
    id: 3,
    slug: 'sterckeman-easy-390cp-2021',
    name: 'Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt',
    subtitle: 'Wohnwagen · Coque Polyester · Baujahr 2021 · PLATA-Blau',
    category: 'wohnwagen',
    price: 7990,
    originalPrice: 15490,
    discount: 48,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/Principal.jpg',
      '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/easy-390-004.jpg',
      '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/easy-390-005.jpg',
      '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/easy-390-2021-a-002-scaled.jpg',
      '/image/Sterckeman Easy 390CP NEU 2021 – Neufahrzeug, 3 Schlafplätze, kompakt/easy-390-2021-a-003-scaled.jpg',
    ],
    specs: { Länge: 'kompakt', Breite: '–', Gewicht: '–', Personen: '3', Baujahr: '2021' },
    description: 'Neufahrzeug 2021 in PLATA-Blau: 3 Schlafplätze, festes Querbett 140×195 cm, elektrische Kassettentoilette, 85-L-Dreifach-Kühlschrank und Reserverad inklusive.',
    descriptionHtml: `<p>Der Sterckeman Easy 390CP NEU, Modelljahr 2021, in attraktivem PLATA-Blau-Stoff überzeugt durch seine kompakte Größe und gemütliches Interieur. Ideal für Paare und kleine Familien mit 3 Schlafplätzen.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3 Personen)</h3>
<ul>
<li>Festes Querbett: 140 × 195 cm (Comfort-Matratze 12 cm)</li>
<li>Umbaubare Dinette: 125/90 × 190 cm</li>
</ul>
<h3><i class="bi bi-grid"></i> Ausstattung</h3>
<ul>
<li>Elektrische Kassettentoilette</li>
<li>85 L Dreifach-Kühlbox (Gas / 230V / 12V)</li>
<li>3-Flammen-Gasherd + Edelstahlspüle</li>
<li>Reserverad 185/70 R14 inklusive</li>
<li>100% LED-Beleuchtung</li>
<li>XPS-Isolierung, verstärkter Polyester, gehämmertes Aluminiumblech</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Sterckeman (Trigano Gruppe)</li>
<li><strong>Modell:</strong> Easy 390CP – 2021</li>
<li><strong>Innenstoff:</strong> PLATA (Blau)</li>
<li><strong>Zustand:</strong> Neufahrzeug</li>
<li><strong>Schlafplätze:</strong> 3</li>
<li><strong>Querbett (fest):</strong> 140 × 195 cm</li>
<li><strong>Dinettenbett:</strong> 125/90 × 190 cm</li>
<li><strong>Kühlschrank:</strong> 85 L (Gas/230V/12V)</li>
<li><strong>WC:</strong> Elektrische Kassettentoilette</li>
<li><strong>Ersatzrad:</strong> 185/70 R14</li>
<li><strong>Beleuchtung:</strong> 100% LED</li>
<li><strong>Isolierung:</strong> XPS (exklusiv)</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in Europa.',
    ],
    featured: true,
  },
  {
    id: 4,
    slug: 'sterckeman-easy-470pe-kids-2021',
    name: "Sterckeman Easy 470PE KID'S 2021 – Familienwohnwagen, 6 Schlafplätze",
    subtitle: 'Wohnwagen · Pavillon Élévable · 6 Personen · Etagenbetten',
    category: 'wohnwagen',
    price: 8490,
    originalPrice: 16990,
    discount: 50,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman Easy 470PE KIDS 2021 – Familienwohnwagen, 6 Schlafplätze/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 470PE KIDS 2021 – Familienwohnwagen, 6 Schlafplätze/Principal.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2021 – Familienwohnwagen, 6 Schlafplätze/49ee8258-801a-4e77-a4ea-cb4ecda9001b-IMG_4486.JPG.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2021 – Familienwohnwagen, 6 Schlafplätze/84949995-807f-4de2-ac13-ec4ca1866037-IMG_4490.JPG.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2021 – Familienwohnwagen, 6 Schlafplätze/00401aaa-02c6-443f-8509-455367c24398-20240521_113750.jpg.jpg',
    ],
    specs: { Länge: '–', Breite: '–', Gewicht: '–', Personen: '6', Baujahr: '2021' },
    description: "Neufahrzeug 2021: 6 Schlafplätze mit 2 Etagenbetten (75×210 cm) und festem Querbett (140×210 cm), großes Fahrradfach (105×65 cm), 100% LED und XPS-Isolierung.",
    descriptionHtml: `<p>Der Sterckeman Easy 470PE KID'S, Modelljahr 2021, ist der ideale Familienwohnwagen für bis zu 6 Personen. Dank zwei Etagenbetten und einem festen Querbett bietet er maximale Flexibilität für die ganze Familie.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (6 Personen)</h3>
<ul>
<li>Festes Querbett: 140 × 210 cm (Comfort-Matratze 12 cm, gepolstert)</li>
<li>Etagenbett 1: 75 × 210 cm</li>
<li>Etagenbett 2: 75 × 210 cm</li>
<li>Dinettenbett: 110 × 170 cm</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
<ul>
<li>Kühlschrank: 85 L Tri-Mix (Gas / 230V / 12V)</li>
<li>Kochstelle: 3-Flammen-Gasherd + Edelstahlspüle (Glasabdeckung)</li>
<li>WC: Manuelle Kassettentoilette mit Waschbecken und Auffangbehälter</li>
</ul>
<h3><i class="bi bi-stars"></i> Besonderheiten</h3>
<ul>
<li>Großes Fahrradfach hinten (105 × 65 cm), zugänglich durch Anheben des unteren Bettes</li>
<li>Front, Heck, Dach und Unterboden aus verstärktem Polyester</li>
<li>Seiten aus gehämmertem Aluminiumblech</li>
<li>Exklusive XPS-Isolierung</li>
<li>100% LED-Beleuchtung, Radabdeckungen, Reserverad inklusive</li>
<li>Alle Fenster mit Verdunklungs- und Mückenschutzrollos</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Sterckeman (Trigano Gruppe)</li>
<li><strong>Modell:</strong> Easy 470PE KID'S – Modelljahr 2021</li>
<li><strong>Innenstoff:</strong> TORONTO</li>
<li><strong>Zustand:</strong> Neufahrzeug (Vorjahresmodell)</li>
<li><strong>Schlafplätze:</strong> 6</li>
<li><strong>Querbett (fest):</strong> 140 × 210 cm (Comfort-Matratze 12 cm)</li>
<li><strong>Etagenbetten (2x):</strong> 75 × 210 cm (je Bett)</li>
<li><strong>Dinettenbett:</strong> 110 × 170 cm</li>
<li><strong>Kühlschrank:</strong> 85 L Tri-Mix (Gas/230V/12V)</li>
<li><strong>Fahrradfach:</strong> 105 × 65 cm (hinten)</li>
<li><strong>Isolierung:</strong> XPS (exklusiv)</li>
<li><strong>Beleuchtung:</strong> 100% LED</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Zur sicheren Standsicherung auf unebenem Untergrund.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Verlängerungskabel 230V (10 m) – Für den Stromanschluss auf dem Campingplatz.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 5,
    slug: 'sterckeman-starlett-comfort-480cp-2021',
    name: 'Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett',
    subtitle: 'Wohnwagen · Coque Polyester · Zentralbett · Kollektion 2021',
    category: 'wohnwagen',
    price: 9490,
    originalPrice: 18990,
    discount: 50,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/Principal.webp',
    images: [
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/Principal.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/0d7e7248-5958-4aba-859f-4cfed9066577_large.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/430af25e-20dc-43c1-b1c9-d7a429ffaee8_large.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/486e9ae0-eff4-4039-81b5-1d18710103c3_large.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/5356bd5e-f581-4dea-9b15-ed8bd88f16b2_large.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/b0ed3dbb-d1ed-48e3-8f4d-c96d98a2595e_large.webp',
      '/image/Sterckeman Starlett Comfort 480CP 2021 – Wohnwagen mit Zentralbett/d798e398-210d-4dc9-afc2-29def90bc10c_large.webp',
    ],
    specs: { Länge: '–', Breite: '–', Gewicht: '–', Personen: '4', Baujahr: '2021' },
    description: 'Kollektion 2021: 4 Schlafplätze mit Zentralbett 150×195 cm (Comfort Plus 15 cm), 150-L-Kompressor-Kühlschrank XL, 50-L-Frischwassertank und TRUMA THERME Warmwasser.',
    descriptionHtml: `<p>Der Sterckeman Starlett Comfort 480CP aus der Kollektion 2021 bietet höchsten Wohnkomfort für bis zu 4 Personen. Mit Zentralbett, 150-L-Kompressor-Kühlschrank und großem Frischwassertank ist er perfekt für längere Camping-Aufenthalte ausgestattet.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafbereich (4 Personen)</h3>
<ul>
<li>Zentralbett: 150 × 195 cm mit „Comfort Plus"-Matratze (15 cm dick, gepolstert)</li>
<li>Umbaubares U-Sofa: Zusatzbett für 2 weitere Personen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
<ul>
<li>Kühlschrank: XL FREEZE 150 L Schubfach-Kühlschrank (Kompressor)</li>
<li>Kochstelle: 3-Flammen-Gasherd + Edelstahlspüle (Glasabdeckung)</li>
<li>WC: Kassettentoilette</li>
<li>Dusche: 5-L-TRUMA-THERME Wassererwärmer + flexible Handbrause</li>
<li>Frischwassertank: 50 L (fest eingebaut)</li>
<li>Abwassertank vorhanden</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Sterckeman (Trigano Gruppe)</li>
<li><strong>Modell:</strong> Starlett Comfort 480CP – Kollektion 2021</li>
<li><strong>Innenstoff:</strong> HANOI</li>
<li><strong>Zustand:</strong> Neufahrzeug (Vorjahresmodell)</li>
<li><strong>Schlafplätze:</strong> 4</li>
<li><strong>Zentralbett:</strong> 150 × 195 cm</li>
<li><strong>Matratze:</strong> Comfort Plus, 15 cm dick, gepolstert</li>
<li><strong>Kühlschrank:</strong> XL FREEZE, 150 L Kompressor (Schubfach)</li>
<li><strong>Warmwasser:</strong> TRUMA THERME 5 L</li>
<li><strong>Frischwassertank:</strong> 50 L (fest)</li>
<li><strong>WC:</strong> Kassettentoilette</li>
<li><strong>Dusche:</strong> Mit TRUMA THERME und Handbrause</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 6,
    slug: 'sterckeman-390cp-comfort-2023',
    name: 'Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze',
    subtitle: 'Wohnwagen · Coque Polyester · Neufahrzeug 2023 · AKS 3004',
    category: 'wohnwagen',
    price: 10490,
    originalPrice: 19990,
    discount: 48,
    stock: 'instock',
    badge: null,
    image: '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/Principal.jpeg',
    images: [
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/Principal.jpeg',
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/PC_4b19f26b-b394-492b-b9d2-0606560ffb08.jpeg',
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/PC_680ac6ff-862f-4bdc-9927-814cac85a814.jpeg',
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/PC_8f3e74ef-9872-4d5e-9538-db27255ab628.jpeg',
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/PC_9369fdae-6009-43d0-98c0-c6d9c9b57495.jpeg',
      '/image/Sterckeman 390CP Comfort 2023 – Neuer Wohnwagen, 4 Schlafplätze/PC_edd0322b-1190-48c1-ae66-ab6a99816f1b.jpeg',
    ],
    specs: { Länge: '–', Breite: '–', Gewicht: '–', Personen: '4', Baujahr: '2023' },
    description: 'Neufahrzeug 2023: 4 Schlafplätze mit festem Querbett 140×195 cm (15 cm Matratze), TrumaTherme, 50-L-Frischwassertank, AKS 3004 Stabilisator und Panoramadachfenster.',
    descriptionHtml: `<p>Der Sterckeman 390CP Comfort, Modelljahr 2023, überzeugt durch seine kompakte Größe, durchdachte Ausstattung und hochwertige Verarbeitung. Ideal für 4 Personen, die auf Campingplätzen echten Komfort genießen möchten.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze &amp; Wohnbereich (4 Personen)</h3>
<ul>
<li>Festes Querbett: 140 × 195 cm mit 15 cm dicker Matratze</li>
<li>Umbaubare Dinette: 125/90 × 190 cm (2. Schlafmöglichkeit)</li>
</ul>
<h3><i class="bi bi-shield-check"></i> Komfortausstattung (Serienausstattung)</h3>
<ul>
<li>Polyester-Seitenwände, AKS 3004 Stabilisator, Stoßdämpfer</li>
<li>Seitliches Außentürchen (100 × 40 cm)</li>
<li>TrumaTherme 5 L Warmwasserbereiter</li>
<li>Duschbrause mit Schlauch</li>
<li>30 L Abwasserbehälter auf Rollen</li>
<li>50 L Frischwassertank (fest eingebaut)</li>
<li>Panoramadachfenster (70 × 50 cm)</li>
<li>Innenstoff „Sydney", 15 cm dicke Matratze, Duschvorhang</li>
<li>Halterung für Ersatzrad im vorderen Stauraum</li>
</ul>
<h3><i class="bi bi-grid"></i> Weitere Ausstattung</h3>
<ul>
<li>Kühlschrank: 85 L Dreifach (12V / 230V / Gas)</li>
<li>3-Flammen-Gasherd + Edelstahlspüle (Glasabdeckung)</li>
<li>Aluminium-Seitenwand, doppelt verglaste Fenster mit Kombi-Rollo</li>
<li>Verlängerter Vorderstützfuß, Radblenden</li>
<li>Vorzeltbeleuchtung, Fahrradträgerstangen (oben + unten)</li>
<li>IRP-Technologie Bauweise</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Sterckeman (Trigano Gruppe)</li>
<li><strong>Modell:</strong> 390CP Comfort – Modelljahr 2023</li>
<li><strong>Zustand:</strong> Neufahrzeug</li>
<li><strong>Schlafplätze:</strong> 4</li>
<li><strong>Querbett (fest):</strong> 140 × 195 cm (15 cm Matratze)</li>
<li><strong>Dinettenbett:</strong> 125/90 × 190 cm</li>
<li><strong>Kühlschrank:</strong> 85 L Dreifach (12V/230V/Gas)</li>
<li><strong>Warmwasser:</strong> TrumaTherme 5 L</li>
<li><strong>Frischwassertank:</strong> 50 L (fest eingebaut)</li>
<li><strong>Abwassertank:</strong> 30 L (auf Rollen)</li>
<li><strong>Dachfenster:</strong> Panoramadachfenster 70 × 50 cm</li>
<li><strong>Stabilisator:</strong> AKS 3004</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Zur sicheren Standsicherung auf unebenem Untergrund.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Camping-Wasserkanister (20 L) – Faltbarer Kanister für die Frischwasserversorgung.',
    ],
    featured: true,
  },
  {
    id: 7,
    slug: 'sterckeman-480cp-sport-2024',
    name: 'Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze',
    subtitle: 'Wohnwagen · Sport Edition · Grau Matt · PTAC 1.300 kg',
    category: 'wohnwagen',
    price: 13490,
    originalPrice: 24990,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/Principal.jpg',
    images: [
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/Principal.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081075.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081076.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081077.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081078.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081079.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081080.jpg',
      '/image/Sterckeman 480 CP Sport Edition 2024 – Wohnwagen, 3-4 Schlafplätze/5199423783352081081.jpg',
    ],
    specs: { Länge: '6,75 m', Breite: '2,30 m', Gewicht: '1.300 kg', Personen: '3-4', Baujahr: '2024' },
    description: 'Neufahrzeug 2024 in Grau Matt: 3-4 Schlafplätze (Frontbett 150×198 cm + Mittelbett), 150-L-Kompressor-Kühlschrank, TRUMA 3400 Heizung und Alufelgen inklusive.',
    descriptionHtml: `<p>Der Sterckeman 480 CP Sport Edition 2024 verbindet elegantes Design in Grau-Matt mit moderner Technik und umfangreicher Serienausstattung. Ideal für 3 bis 4 Personen, die Stil und Komfort schätzen.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3-4 Personen)</h3>
<ul>
<li>Frontbett: 150 × 198 cm (mit Gasdruckunterstützung)</li>
<li>Mittelbett: 119/108 × 192 cm (mit Gasdruckunterstützung)</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
<ul>
<li>Kühlschrank: XL FREEZE Kompressor 150 L</li>
<li>Kochstelle: 3-Flammen-Gasherd + Edelstahlspüle (Glasabdeckung)</li>
<li>WC: Elektrische Kassettentoilette</li>
<li>Dusche: Separate Duschkabine mit Duschwanne</li>
</ul>
<h3><i class="bi bi-stars"></i> Sport Edition Extras</h3>
<ul>
<li>Alufelgen, Polyester-Seitenwände Grau Matt, Polyesterdach Grau Matt</li>
<li>Obere &amp; untere Fahrradträgerstangen</li>
<li>LED-Leseleuchten mit USB-Anschluss</li>
<li>TRUMA 3400 Heizung (Gas)</li>
<li>Vorinstallation Klimaanlage und TV</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge inkl. Kupplung:</strong> 6,75 m</li>
<li><strong>Außenlänge Karosserie:</strong> 5,62 m</li>
<li><strong>Innenlänge:</strong> 5,00 m</li>
<li><strong>Gesamthöhe:</strong> 2,58 m</li>
<li><strong>Innenhöhe:</strong> 1,95 m</li>
<li><strong>Gesamtbreite:</strong> 2,30 m</li>
<li><strong>Innenbreite:</strong> 2,14 m</li>
<li><strong>Ersatzrad:</strong> 185 R14C</li>
<li><strong>Leergewicht:</strong> 1.100 kg</li>
<li><strong>PTAC:</strong> 1.300 kg</li>
<li><strong>Markisenlänge:</strong> 9,74 m (±5%)</li>
<li><strong>Abwassertank:</strong> 30 L</li>
<li><strong>Steckdosen 230V:</strong> 4</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Markisenset (Heringe + Spannseile) – Für schnellen und stabilen Aufbau der Markise.',
      'Wohnwagen-Pflegeset – Reinigungsmittel für Außenhülle, Gummidichtungen und Markise.',
    ],
    featured: true,
  },
  {
    id: 8,
    slug: 'sterckeman-easy-460cp-2024',
    name: 'Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen',
    subtitle: 'Wohnwagen · Coque Polyester · Zentralbett · PTAC 1.100/1.300 kg',
    category: 'wohnwagen',
    price: 12490,
    originalPrice: 22990,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/Principal.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_15aef641-1c5f-4a7c-a620-8b3f06d8dcee.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_37ad50e2-2cf9-4ad2-b62d-0b1e3ad2fa70.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_788c33d0-fa77-478c-b9e4-f80c30ccb41b.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_9b9a1572-89d0-44e0-a682-9737726484ec.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_ad3cbd29-bc52-4701-a773-cd40dce6ed41.jpg',
      '/image/Sterckeman Easy 460CP 2024 – Wohnwagen mit Zentralbett, 3-4 Personen/PC_e15d8f7c-fe99-49d3-9463-20918a747050.jpg',
    ],
    specs: { Länge: '6,70 m', Breite: '2,10 m', Gewicht: '1.100 kg', Personen: '3-4', Baujahr: '2024' },
    description: 'Neufahrzeug 2024: Zentralbett 138×193 cm + hinteres Bett 125×190 cm, elektrische Kassettentoilette, Trimix-Kühlschrank 85 L, Klimaanlage & TV vorbereitet.',
    descriptionHtml: `<p>Der Sterckeman Easy 460CP, Modelljahr 2024, bietet mit einem komfortablen Zentralbett und einer umbaubaren Sitzecke die perfekte Lösung für kleine Familien von 3 bis 4 Personen. Erkunden Sie die Straßen mit allen Annehmlichkeiten an Bord.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3-4 Personen)</h3>
<ul>
<li>Vorderes Zentralbett: 138 × 193 cm</li>
<li>Hinteres Bett: 125 × 190 cm</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
<ul>
<li>Kühlschrank: Trimix 85 L (12V / 230V / Gas)</li>
<li>Kochstelle: 3-Flammen-Gasherd + Edelstahlspüle (Glasabdeckung)</li>
<li>WC: Elektrische Kassettentoilette</li>
<li>Dusche vorhanden</li>
</ul>
<h3><i class="bi bi-shield-check"></i> Serienmäßige Ausstattung</h3>
<ul>
<li>IRP-Technologie, Polyester-Seitenwände, Polyesterdach</li>
<li>Öffnende Doppelverglasung mit Kombi-Rollo (Verdunkelung + Mückenschutz)</li>
<li>Heckfenster, Markisenschiene, LED-Markisenbeleuchtung</li>
<li>Gasflaschenfach, verlängerte Vorderstützen</li>
<li>230V Stromversorgung mit Sicherung, USB-Steckdosen, LED-Beleuchtung</li>
<li>Vorinstallation Klimaanlage und TV</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge inkl. Kupplung:</strong> 6,70 m</li>
<li><strong>Außenlänge Karosserie:</strong> 5,57 m</li>
<li><strong>Innenlänge:</strong> 5,00 m</li>
<li><strong>Gesamthöhe:</strong> 2,58 m</li>
<li><strong>Innenhöhe:</strong> 1,95 m</li>
<li><strong>Gesamtbreite:</strong> 2,10 m</li>
<li><strong>Innenbreite:</strong> 1,94 m</li>
<li><strong>Ersatzrad:</strong> 175R14C</li>
<li><strong>Leergewicht:</strong> 955 kg</li>
<li><strong>PTAC:</strong> 1.100 / 1.300 kg</li>
<li><strong>Markisenlänge:</strong> 9,74 m (±5%)</li>
<li><strong>Frischwassertank:</strong> 12 L</li>
<li><strong>Steckdosen 230V:</strong> 4</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Verlängerungskabel 230V (10 m) – Für den Stromanschluss auf dem Campingplatz.',
    ],
    featured: false,
  },
  {
    id: 9,
    slug: 'sterckeman-426-pe-2024',
    name: 'Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze',
    subtitle: 'Wohnwagen · Pavillon Élévable · 5-6 Personen · PTAC 1.150/1.300 kg',
    category: 'wohnwagen',
    price: 11490,
    originalPrice: 21990,
    discount: 48,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/Principal.jpg',
    images: [
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/Principal.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081056.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081057.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081058.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081059.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081060.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081061.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081062.jpg',
      '/image/Sterckeman 426 PE 2024 – Familienwohnwagen, 5-6 Schlafplätze/5199423783352081063.jpg',
    ],
    specs: { Länge: '6,20 m', Breite: '2,30 m', Gewicht: '1.150 kg', Personen: '5-6', Baujahr: '2024' },
    description: 'Neufahrzeug 2024: 5-6 Schlafplätze (Frontbett 137×205 cm, Mittelbett + Etagenbett), 150-L-Kompressor-Kühlschrank XL, PTAC 1.150/1.300 kg, Klimaanlage & TV vorbereitet.',
    descriptionHtml: `<p>Entdecken Sie diesen neuen Sterckeman 426 PE, Modelljahr 2024 – perfekt für große Familien mit bis zu 5-6 Schlafplätzen. Er steht auf unserem Gelände zur Besichtigung bereit.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (5-6 Personen)</h3>
<ul>
<li>Vorderes Bett: 137 × 205 cm</li>
<li>Mittleres Bett: 110 × 168 cm</li>
<li>Etagenbett: 61 × 212 cm</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
<ul>
<li>Kühlschrank: Kompressor-Kühlschrank XL Freeze 150 L</li>
<li>Kochstelle: 3-Flammen-Herd kombiniert mit Edelstahlspüle (Glasabdeckung)</li>
<li>WC: Drehbare Kassettentoilette (manuell)</li>
<li>Dusche: Duschwanne vorhanden</li>
<li>Frischwassertank: 12 L</li>
</ul>
<h3><i class="bi bi-shield-check"></i> Serienmäßige Ausstattung</h3>
<ul>
<li>3. Bremsleuchte, Stützrad, verlängerte Stützen vorne</li>
<li>Radkappen, IRP-Technologie Karosserie</li>
<li>Markisenschiene, LED-Markisenbeleuchtung</li>
<li>Verdunkelungs- und Insektenschutzrollo an allen Fenstern</li>
<li>230-V-Stromversorgung mit Sicherung, USB-Steckdosen</li>
<li>Vorinstallation Klimaanlage, Vorinstallation TV</li>
<li>100% LED-Innenbeleuchtung</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge inkl. Kupplung:</strong> 6,20 m</li>
<li><strong>Außenlänge Karosserie:</strong> 5,07 m</li>
<li><strong>Innenlänge:</strong> 4,50 m</li>
<li><strong>Gesamthöhe:</strong> 2,58 m</li>
<li><strong>Innenhöhe:</strong> 1,95 m</li>
<li><strong>Gesamtbreite:</strong> 2,30 m</li>
<li><strong>Innenbreite:</strong> 2,14 m</li>
<li><strong>Ersatzrad:</strong> 175R14C</li>
<li><strong>Fahrradfach:</strong> 100 × 65 cm</li>
<li><strong>Leergewicht:</strong> 980 kg</li>
<li><strong>PTAC:</strong> 1.150 / 1.300 kg</li>
<li><strong>Markisenlänge:</strong> 9,24 m (±5%)</li>
<li><strong>Frischwassertank:</strong> 12 L</li>
<li><strong>Steckdosen 230V:</strong> 3</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Markisenset (Heringe + Spannseile) – Für schnellen und stabilen Aufbau der Markise.',
      'Campingführer Europa (aktuelles Jahr) – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: false,
  },
  {
    id: 10,
    slug: 'sterckeman-novastar-500cp',
    name: 'Wohnwagen Sterckeman Novastar 500 CP – Mittelbett, 4 Personen, klimatisiert',
    subtitle: 'Wohnwagen · Gebraucht · Baujahr 2007 · Klimaanlage · werkstattgeprüft',
    category: 'wohnwagen',
    price: 14990,
    originalPrice: 27990,
    discount: 46,
    stock: 'instock',
    badge: null,
    image: '/image/Wohnwagen Sterckeman Novastar 500 CP – Mittelbett, 4 Personen, klimatisiert/Principal.png',
    images: [
      '/image/Wohnwagen Sterckeman Novastar 500 CP – Mittelbett, 4 Personen, klimatisiert/Principal.png',
    ],
    specs: { Länge: '570 cm', Breite: '–', Gewicht: '–', Personen: '4', Baujahr: '2007' },
    description: 'Gebraucht, werkstattgeprüft: Sterckeman Novastar 500 CP (2007), 4 Schlafplätze, Mittelbett hochklappbar, Klimaanlage, Dusche, Kassettentoilette, 90-L-Kühlschrank.',
    descriptionHtml: `<p>Dieser gebrauchte Sterckeman-Wohnwagen (Trigano Gruppe), Modell Novastar 500, wurde am 25.06.2007 zugelassen. Er bietet 4 Schlafplätze und eine durchdachte Raumaufteilung für Familien.</p>
<h3><i class="bi bi-grid-3x3-gap"></i> Raumaufteilung &amp; Ausstattung</h3>
<ul>
<li><strong>Küche hinten:</strong> 3-Flammen-Gasherd, Spüle, 90-L-Kühlschrank</li>
<li><strong>Badezimmer:</strong> Dusche, Waschbecken, Kassettentoilette (neben der Küche)</li>
<li><strong>Wohnbereich:</strong> Dinette für 4 Personen, gegenüberliegende Sitzgruppe, umbaubar zu einem 2-Personen-Bett</li>
<li><strong>Schlafzimmer:</strong> Großes Elternzimmer mit hochklappbarem Mittelbett + zusätzlichem Stauraum darunter</li>
</ul>
<h3><i class="bi bi-wrench-adjustable"></i> Qualitätsprüfung vor Auslieferung</h3>
<p>Vor der Auslieferung wird der Wohnwagen von unserer Werkstatt vollständig geprüft: Dichtigkeit, Funktion aller Zubehörteile, Behebung von Mängeln und Ersatz defekter Teile.</p>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Sterckeman (Trigano Gruppe)</li>
<li><strong>Modell:</strong> Novastar 500 CP</li>
<li><strong>Baujahr:</strong> 2007</li>
<li><strong>Erstzulassung:</strong> 25.06.2007</li>
<li><strong>Gesamtlänge:</strong> ca. 570 cm</li>
<li><strong>Schlafplätze:</strong> 4</li>
<li><strong>Schlafzimmer:</strong> Mittelbett (hochklappbar)</li>
<li><strong>Dinettenbett:</strong> Umbaubar (2-Personen)</li>
<li><strong>Kühlschrank:</strong> 90 L</li>
<li><strong>Kochstelle:</strong> 3-Flammen-Gasherd</li>
<li><strong>Badezimmer:</strong> Dusche + Kassettentoilette + Waschbecken</li>
<li><strong>Klimaanlage:</strong> Ja</li>
<li><strong>Zustand:</strong> Gebraucht, werkstattgeprüft, dicht</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Hochwertiges Stützrad für einfaches Rangieren und sicheres Abstellen ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Kunststoff-Unterlegkeile zur sicheren Standsicherung auf unebenem Untergrund.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor zu hohem Leitungsdruck.',
      'Wohnwagen-Pflegeset – Reinigungsmittel und Pflegemittel für Außenhülle, Gummidichtungen und Markise.',
    ],
    featured: false,
  },

  // ── ERIBA ─────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: 'eriba-touring-310',
    name: 'ERIBA Touring 310 – Kompakter Kult-Wohnwagen, 3 Schlafplätze, Hubdach',
    subtitle: 'Wohnwagen · Hubdach · 3 Personen · 5,06 m · PTAC 1.000 kg',
    category: 'wohnwagen',
    price: 7490,
    originalPrice: 16490,
    discount: 55,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA Touring 310/Principal.jpg',
    images: [
      '/image/ERIBA Touring 310/Principal.jpg',
      '/image/ERIBA Touring 310/Zeriba_touring_310-1.webp',
      '/image/ERIBA Touring 310/touring_310_schlafbereich_vers01_fin-1-768x512.webp',
      '/image/ERIBA Touring 310/touring_310_sitzgruppe_fin_bildschirm-96-dpi-1-1-768x437.webp',
      '/image/ERIBA Touring 310/touring_310_durchschuss_h-v_fin-2-768x512.webp',
      '/image/ERIBA Touring 310/eriba-touring-620_touring-badezimmer_waschtisch-10.webp',
      '/image/ERIBA Touring 310/eriba_touring_interieur_02-8.webp',
    ],
    specs: { Länge: '5,06 m', Breite: '2,00 m', Gewicht: '1.000 kg', Personen: '3', Typ: 'Hubdach' },
    description: 'Kompakter Kult-Wohnwagen mit 3 Schlafplätzen, aerodynamischem Design, Hubdach und 5,06 m Länge. Gesamtgewicht: 1.000 kg. Ideal für kleine Zugfahrzeuge.',
    descriptionHtml: `<p>Der ERIBA Touring 310 ist ein kompakter Wohnwagen der kultigen ERIBA Touring-Baureihe. Mit seiner aerodynamischen Bauweise, dem charakteristischen Hubdach und einer Länge von 5,06 m bietet er bis zu 3 Schlafplätze bei einem zulässigen Gesamtgewicht von 1.000 kg und 190 kg Zuladung.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3 Personen)</h3>
<ul>
<li>Bettmaß Bug: 188 × 73–53 cm / 188 × 73 cm (optional)</li>
<li>Bettmaß Heck (Querbett): 188 × 140 cm</li>
<li>Federkern-Matratzen für Festbetten</li>
<li>Dinettenverlängerung zur Umbettung inkl. zusätzlicher Kissen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Edelstahlspüle mit Schneidebrett-Abdeckung als Arbeitsfläche</li>
<li>Kühlschrank: 81 L inkl. 10 L Gefrierfach</li>
<li>2 Kochfelder</li>
<li>Kompakte Nasszelle mit Dusche, integrierten Ablagen und Wandspiegel</li>
</ul>
<h3><i class="bi bi-stars"></i> Highlights</h3>
<ul>
<li>Aerodynamisches Hubdach (Polyester, hagelbeständig) mit Insektenschutzgitter</li>
<li>Truma S 3004 Gasheizung (3.500 W) mit 12-V-Warmluftgebläse</li>
<li>30-L-Frischwassertank mit Füllstandsanzeige via ERIBA Connect App</li>
<li>ERIBA Connect Starter-Paket: Reifendrucksensoren, Temperatursensor, Kontaktsensor</li>
<li>XL-Ambiente-Beleuchtung + 2 wiederaufladbare ERIBA Multifunktionslampen</li>
<li>Vollständig verzinktes Fahrgestell, AL-KO Schlingerdämpfer</li>
<li>Ausstattungslinien: Legend, Urban</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Elektrik &amp; Bordnetz</h3>
<ul>
<li>230-V-Steckdosen in Küche und Wohnraum (2–4 optional)</li>
<li>USB-Anschlüsse im Schlafbereich (4–6 optional) mit Handytasche</li>
<li>Universelle Außensteckdose (230 V, 12 V, TV)</li>
<li>Automatische Umschaltung auf das Zugfahrzeug</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge / -breite / -höhe:</strong> 506 / 200 / 227 cm</li>
<li><strong>Aufbaulänge außen:</strong> 371 cm</li>
<li><strong>Innenlänge / -breite:</strong> 366 / 190 cm</li>
<li><strong>Stehhöhe Wohnbereich:</strong> 195 cm</li>
<li><strong>Umlaufmaß Vorzelt:</strong> 635 cm</li>
<li><strong>Masse fahrbereit:</strong> 810 kg (770–851 kg)</li>
<li><strong>PTAC:</strong> 1.000 kg</li>
<li><strong>Zuladung:</strong> 190 kg</li>
<li><strong>Reifengröße:</strong> 185 R14 C 102 L</li>
<li><strong>Isolierung Boden / Wand / Dach:</strong> 35 / 28 / 26 mm</li>
<li><strong>Kupplungstyp:</strong> Kugelkupplung Ø 50 mm (AL-KO AKS)</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 12,
    slug: 'eriba-touring-530',
    name: 'ERIBA Touring 530 – Kult-Wohnwagen, 3 Schlafplätze, Hubdach, 5,99 m',
    subtitle: 'Wohnwagen · Hubdach · 3 Personen · 5,99 m · PTAC 1.300 kg',
    category: 'wohnwagen',
    price: 8490,
    originalPrice: 17390,
    discount: 51,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA Touring 530/Principal.webp',
    images: [
      '/image/ERIBA Touring 530/Principal.webp',
      '/image/ERIBA Touring 530/8-eriba_touring_530-2.webp',
      '/image/ERIBA Touring 530/eriba_katalog_motiv_touring_nugget_gold-2-768x518.webp',
      '/image/ERIBA Touring 530/touring-530_hinten-schraeg_fin_02_korr_2-1_alles-offen_1-1-768x480.webp',
      '/image/ERIBA Touring 530/hymer_touring530_schlafbereich_a_01_bildschirm-96-dpi-1-2.webp',
      '/image/ERIBA Touring 530/touring-530_sitzgruppe_fin_bildschirm-96-dpi-1-2.webp',
      '/image/ERIBA Touring 530/hymer_542_legend_badezimmer_ohne_licht_bildschirm-96-dpi-1-3.webp',
      '/image/ERIBA Touring 530/touring_530_edition_nugget_gold_lack_interieur_00186-1-768x512.webp',
    ],
    specs: { Länge: '5,99 m', Breite: '2,00 m', Gewicht: '1.300 kg', Personen: '3', Typ: 'Hubdach' },
    description: 'Kult-Wohnwagen mit 3 Schlafplätzen, aerodynamischem Design und 5,99 m Länge. Gesamtgewicht: 1.300 kg. Ideal für kleine Zugfahrzeuge und sparsamen Kraftstoffverbrauch.',
    descriptionHtml: `<p>Der ERIBA Touring 530 ist ein Wohnwagen der kultigen ERIBA Touring-Baureihe. Mit seiner aerodynamischen Bauweise, dem charakteristischen Hubdach und einer Länge von 5,99 m bietet er 3 Schlafplätze bei einem zulässigen Gesamtgewicht von 1.300 kg.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3 Personen)</h3>
<ul>
<li>Bettmaß Bug: 188 × 73–53 cm / 188 × 73 cm (optional)</li>
<li>Bettmaß Heck (Querbett): 188 × 140 cm</li>
<li>Federkern-Matratzen für Festbetten</li>
<li>Dinettenverlängerung zur Umbettung inkl. zusätzlicher Kissen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Edelstahlspüle mit Schneidebrett-Abdeckung als Arbeitsfläche</li>
<li>Kühlschrank: 81 L inkl. 10 L Gefrierfach</li>
<li>2 Kochfelder</li>
<li>Kompakte Nasszelle mit Dusche, integrierten Ablagen und Wandspiegel</li>
</ul>
<h3><i class="bi bi-stars"></i> Highlights</h3>
<ul>
<li>Aerodynamisches Hubdach (Polyester, hagelbeständig) mit Insektenschutzgitter</li>
<li>Truma S 3004 Gasheizung (3.500 W) mit 12-V-Warmluftgebläse</li>
<li>40-L-Frischwassertank mit Füllstandsanzeige via ERIBA Connect App</li>
<li>ERIBA Connect Starter-Paket: Reifendrucksensoren, Temperatursensor, Kontaktsensor</li>
<li>XL-Ambiente-Beleuchtung + 2 wiederaufladbare ERIBA Multifunktionslampen</li>
<li>Vollständig verzinktes Fahrgestell, AL-KO Schlingerdämpfer</li>
<li>Ausstattungslinien: Legend, Urban</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Elektrik &amp; Bordnetz</h3>
<ul>
<li>230-V-Steckdosen in Küche und Wohnraum (2–4 optional)</li>
<li>USB-Anschlüsse im Schlafbereich (4–6 optional) mit Handytasche</li>
<li>Universelle Außensteckdose (230 V, 12 V, TV)</li>
<li>Automatische Umschaltung auf das Zugfahrzeug</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge / -breite / -höhe:</strong> 600 / 200 / 227 cm</li>
<li><strong>Aufbaulänge außen:</strong> 465 cm</li>
<li><strong>Innenlänge / -breite:</strong> 460 / 190 cm</li>
<li><strong>Stehhöhe Wohnbereich:</strong> 195 cm</li>
<li><strong>Umlaufmaß Vorzelt:</strong> 670 cm</li>
<li><strong>Masse fahrbereit:</strong> 996 kg (946–1.046 kg)</li>
<li><strong>PTAC:</strong> 1.300 kg</li>
<li><strong>Zuladung:</strong> 304 kg</li>
<li><strong>Reifengröße:</strong> 185 R14 C 102 L</li>
<li><strong>Isolierung Boden / Wand / Dach:</strong> 35 / 28 / 26 mm</li>
<li><strong>Frischwassertank:</strong> 40 L</li>
<li><strong>Kupplungstyp:</strong> Kugelkupplung Ø 50 mm (AL-KO AKS)</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 13,
    slug: 'eriba-touring-542',
    name: 'ERIBA Touring 542 – Kult-Wohnwagen, 3 Schlafplätze, Hubdach, 5,99 m',
    subtitle: 'Wohnwagen · Hubdach · 3 Personen · Längseinzelbetten · PTAC 1.300 kg',
    category: 'wohnwagen',
    price: 8190,
    originalPrice: 16890,
    discount: 51,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA Touring 542/Principal.webp',
    images: [
      '/image/ERIBA Touring 542/Principal.webp',
      '/image/ERIBA Touring 542/7-eriba_touring_542-2.webp',
      '/image/ERIBA Touring 542/eriba_katalog_motiv_touring_tango_red-2-768x518.webp',
      '/image/ERIBA Touring 542/hymer_542_urban_schlafbereich_vers03_bildschirm-96-dpi-1-1-768x512.webp',
      '/image/ERIBA Touring 542/touring_542_edition_tango_red_lack_interior-1-768x512.webp',
      '/image/ERIBA Touring 542/eriba_touring_interieur_02-12.webp',
    ],
    specs: { Länge: '5,99 m', Breite: '2,00 m', Gewicht: '1.300 kg', Personen: '3', Typ: 'Hubdach' },
    description: 'Kult-Wohnwagen mit 3 Schlafplätzen, aerodynamischem Design und 5,99 m Länge. Gesamtgewicht: 1.300 kg. Grundriss: Längseinzelbetten hinten.',
    descriptionHtml: `<p>Der ERIBA Touring 542 ist ein Wohnwagen der kultigen ERIBA Touring-Baureihe. Mit seiner aerodynamischen Bauweise, dem charakteristischen Hubdach und einer Länge von 5,99 m bietet er 3 Schlafplätze bei einem zulässigen Gesamtgewicht von 1.300 kg.</p>
<p><strong>Hinweis:</strong> Das genaue Baujahr dieses Fahrzeugs ist auf dieser Produktseite nicht angegeben. Bitte kontaktieren Sie uns für eine Bestätigung des Baujahres vor dem Kauf.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (3 Personen)</h3>
<ul>
<li>Bettmaß Bug: 188 × 73–53 cm / 188 × 73 cm (optional)</li>
<li>Bettmaß Längsseite: 200 × 75 cm (Längseinzelbetten hinten)</li>
<li>Federkern-Matratzen für Festbetten</li>
<li>Dinettenverlängerung zur Umbettung inkl. zusätzlicher Kissen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Edelstahlspüle mit Schneidebrett-Abdeckung als Arbeitsfläche</li>
<li>Kühlschrank: 81 L inkl. 10 L Gefrierfach</li>
<li>2 Kochfelder</li>
<li>Kompakte Nasszelle mit Dusche, integrierten Ablagen und Wandspiegel</li>
</ul>
<h3><i class="bi bi-stars"></i> Highlights</h3>
<ul>
<li>Aerodynamisches Hubdach (Polyester, hagelbeständig) mit Insektenschutzgitter</li>
<li>Truma S 3004 Gasheizung (3.500 W) mit 12-V-Warmluftgebläse</li>
<li>40-L-Frischwassertank mit Füllstandsanzeige via ERIBA Connect App</li>
<li>ERIBA Connect Starter-Paket: Reifendrucksensoren, Temperatursensor, Kontaktsensor</li>
<li>XL-Ambiente-Beleuchtung + 2 wiederaufladbare ERIBA Multifunktionslampen</li>
<li>Vollständig verzinktes Fahrgestell, AL-KO Schlingerdämpfer</li>
<li>Ausstattungslinien: Legend, Urban</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Elektrik &amp; Bordnetz</h3>
<ul>
<li>230-V-Steckdosen in Küche und Wohnraum (2–4 optional)</li>
<li>USB-Anschlüsse im Schlafbereich (4–6 optional) mit Handytasche</li>
<li>Universelle Außensteckdose (230 V, 12 V, TV)</li>
<li>Automatische Umschaltung auf das Zugfahrzeug</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge / -breite / -höhe:</strong> 600 / 200 / 227 cm</li>
<li><strong>Aufbaulänge außen:</strong> 465 cm</li>
<li><strong>Innenlänge / -breite:</strong> 460 / 190 cm</li>
<li><strong>Stehhöhe Wohnbereich:</strong> 195 cm</li>
<li><strong>Umlaufmaß Vorzelt:</strong> 670 cm</li>
<li><strong>Masse fahrbereit:</strong> 1.006 kg (956–1.056 kg)</li>
<li><strong>PTAC:</strong> 1.300 kg</li>
<li><strong>Zuladung:</strong> 294 kg</li>
<li><strong>Reifengröße:</strong> 185 R14 C 102 L</li>
<li><strong>Isolierung Boden / Wand / Dach:</strong> 35 / 28 / 26 mm</li>
<li><strong>Frischwassertank:</strong> 40 L</li>
<li><strong>Kupplungstyp:</strong> Kugelkupplung Ø 50 mm (AL-KO AKS)</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 14,
    slug: 'eriba-touring-560',
    name: 'ERIBA Touring 560 – Kult-Wohnwagen, 4 Schlafplätze, Hubdach, 5,99 m',
    subtitle: 'Wohnwagen · Hubdach · 4 Personen · Heckwohnbereich · PTAC 1.300 kg',
    category: 'wohnwagen',
    price: 8590,
    originalPrice: 17990,
    discount: 52,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA Touring 560/Principal.webp',
    images: [
      '/image/ERIBA Touring 560/Principal.webp',
      '/image/ERIBA Touring 560/4-eriba_touring_560-2.webp',
      '/image/ERIBA Touring 560/touring_540_vorne-schraeg_fin_screen-96-dpi-1-3-768x512.webp',
      '/image/ERIBA Touring 560/touring_540_laengssitzgruppe-grosses-doppelbett_01_fin-3-768x512.webp',
      '/image/ERIBA Touring 560/touring_540_durchschuss_h-v_fin_bildschirm-96-dpi-1-3.webp',
      '/image/ERIBA Touring 560/eriba-touring-620_touring-badezimmer_waschtisch-15.webp',
      '/image/ERIBA Touring 560/eriba_touring_interieur_02-14.webp',
    ],
    specs: { Länge: '5,99 m', Breite: '2,00 m', Gewicht: '1.300 kg', Personen: '4', Typ: 'Hubdach' },
    description: 'Kult-Wohnwagen mit 4 Schlafplätzen, aerodynamischem Design und 5,99 m Länge. Gesamtgewicht: 1.300 kg. Grundriss: Heckwohnbereich mit Bayfenster links.',
    descriptionHtml: `<p>Der ERIBA Touring 560 ist ein Wohnwagen der kultigen ERIBA Touring-Baureihe. Mit seiner aerodynamischen Bauweise, dem charakteristischen Hubdach und einer Länge von 5,99 m bietet er 4 Schlafplätze bei einem zulässigen Gesamtgewicht von 1.300 kg.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (4 Personen)</h3>
<ul>
<li>Bettmaß Bug: 188 × 71 cm (optional)</li>
<li>Bettmaß Heck: 188 × 130 cm (quer, 2×)</li>
<li>Federkern-Matratzen für Festbetten</li>
<li>Dinettenverlängerung zur Umbettung inkl. zusätzlicher Kissen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Edelstahlspüle mit Schneidebrett-Abdeckung als Arbeitsfläche</li>
<li>Kühlschrank: 81 L inkl. 10 L Gefrierfach</li>
<li>2 Kochfelder</li>
<li>Kompakte Nasszelle mit Dusche, integrierten Ablagen und Wandspiegel</li>
</ul>
<h3><i class="bi bi-stars"></i> Highlights</h3>
<ul>
<li>Aerodynamisches Hubdach (Polyester, hagelbeständig) mit Insektenschutzgitter</li>
<li>Heckwohnbereich mit Bayfenster links – mehr Licht und Raumgefühl</li>
<li>Truma S 3004 Gasheizung (3.500 W) mit 12-V-Warmluftgebläse</li>
<li>40-L-Frischwassertank mit Füllstandsanzeige via ERIBA Connect App</li>
<li>ERIBA Connect Starter-Paket: Reifendrucksensoren, Temperatursensor, Kontaktsensor</li>
<li>XL-Ambiente-Beleuchtung + 2 wiederaufladbare ERIBA Multifunktionslampen</li>
<li>Vollständig verzinktes Fahrgestell, AL-KO Schlingerdämpfer</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Elektrik &amp; Bordnetz</h3>
<ul>
<li>230-V-Steckdosen in Küche und Wohnraum (2–4 optional)</li>
<li>USB-Anschlüsse im Schlafbereich (4–6 optional) mit Handytasche</li>
<li>Universelle Außensteckdose (230 V, 12 V, TV)</li>
<li>Automatische Umschaltung auf das Zugfahrzeug</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge / -breite / -höhe:</strong> 600 / 200 / 227 cm</li>
<li><strong>Aufbaulänge außen:</strong> 465 cm</li>
<li><strong>Innenlänge / -breite:</strong> 460 / 190 cm</li>
<li><strong>Stehhöhe Wohnbereich:</strong> 195 cm</li>
<li><strong>Umlaufmaß Vorzelt:</strong> 670 cm</li>
<li><strong>Masse fahrbereit:</strong> 1.063 kg (1.010–1.116 kg)</li>
<li><strong>PTAC:</strong> 1.300 kg</li>
<li><strong>Zuladung:</strong> 237 kg</li>
<li><strong>Reifengröße:</strong> 185 R14 C 102 L</li>
<li><strong>Isolierung Boden / Wand / Dach:</strong> 35 / 28 / 26 mm</li>
<li><strong>Frischwassertank:</strong> 40 L</li>
<li><strong>Kupplungstyp:</strong> Kugelkupplung Ø 50 mm (AL-KO AKS)</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 15,
    slug: 'eriba-touring-642',
    name: 'ERIBA Touring 642 – Großer Kult-Wohnwagen, 4 Schlafplätze, Hubdach, 6,49 m',
    subtitle: 'Wohnwagen · Hubdach · 4 Personen · Panoramafenster · PTAC 1.500 kg',
    category: 'wohnwagen',
    price: 8990,
    originalPrice: 17990,
    discount: 50,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA Touring 642/Principal.webp',
    images: [
      '/image/ERIBA Touring 642/Principal.webp',
      '/image/ERIBA Touring 642/1-eriba_touring_642-1.webp',
      '/image/ERIBA Touring 642/3_4_front_touring_642_bildschirm__96_dpi_freisteller-1-768x512.webp',
      '/image/ERIBA Touring 642/seite_touring_642_freisteller-3-768x512.webp',
      '/image/ERIBA Touring 642/touring_642_schlafbereich_hinten_vorne-2.webp',
      '/image/ERIBA Touring 642/eriba-touring-620_kueche-garderobe-5.webp',
      '/image/ERIBA Touring 642/eriba-touring-620_touring-badezimmer_waschtisch-18.webp',
    ],
    specs: { Länge: '6,49 m', Breite: '2,00 m', Gewicht: '1.500 kg', Personen: '4', Typ: 'Hubdach' },
    description: 'Großer Kult-Wohnwagen mit 4 Schlafplätzen, aerodynamischem Design und 6,49 m Länge. Gesamtgewicht: 1.500 kg. Grundriss: Heckwohnbereich mit Panoramafenster.',
    descriptionHtml: `<p>Der ERIBA Touring 642 ist der große Wohnwagen der kultigen ERIBA Touring-Baureihe. Mit seiner aerodynamischen Bauweise, dem charakteristischen Hubdach und einer Länge von 6,49 m bietet er 4 Schlafplätze bei einem zulässigen Gesamtgewicht von 1.500 kg.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze (4 Personen)</h3>
<ul>
<li>Bettmaß Bug: 188 × 73–53 cm / 188 × 73 cm (optional)</li>
<li>Bettmaß Heck: 188 × 140 cm (Querbett)</li>
<li>Federkern-Matratzen für Festbetten</li>
<li>Dinettenverlängerung zur Umbettung inkl. zusätzlicher Kissen</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Edelstahlspüle mit Schneidebrett-Abdeckung als Arbeitsfläche</li>
<li>Kühlschrank: 81 L inkl. 10 L Gefrierfach</li>
<li>2 Kochfelder</li>
<li>Kompakte Nasszelle mit Dusche, integrierten Ablagen und Wandspiegel</li>
</ul>
<h3><i class="bi bi-stars"></i> Highlights</h3>
<ul>
<li>Heckwohnbereich mit großem Panoramafenster – maximales Raumgefühl</li>
<li>Aerodynamisches Hubdach (Polyester, hagelbeständig) mit Insektenschutzgitter</li>
<li>Truma S 3004 Gasheizung (3.500 W) mit 12-V-Warmluftgebläse</li>
<li>50-L-Frischwassertank mit Füllstandsanzeige via ERIBA Connect App</li>
<li>ERIBA Connect Starter-Paket: Reifendrucksensoren, Temperatursensor, Kontaktsensor</li>
<li>XL-Ambiente-Beleuchtung + 2 wiederaufladbare ERIBA Multifunktionslampen</li>
<li>Vollständig verzinktes Fahrgestell, AL-KO Schlingerdämpfer</li>
</ul>
<h3><i class="bi bi-lightning-charge"></i> Elektrik &amp; Bordnetz</h3>
<ul>
<li>230-V-Steckdosen in Küche und Wohnraum (2–4 optional)</li>
<li>USB-Anschlüsse im Schlafbereich (4–6 optional) mit Handytasche</li>
<li>Universelle Außensteckdose (230 V, 12 V, TV)</li>
<li>Automatische Umschaltung auf das Zugfahrzeug</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Gesamtlänge / -breite / -höhe:</strong> 650 / 200 / 227 cm</li>
<li><strong>Aufbaulänge außen:</strong> 515 cm</li>
<li><strong>Innenlänge / -breite:</strong> 510 / 190 cm</li>
<li><strong>Stehhöhe Wohnbereich:</strong> 195 cm</li>
<li><strong>Umlaufmaß Vorzelt:</strong> 695 cm</li>
<li><strong>Masse fahrbereit:</strong> 1.230 kg (1.169–1.292 kg)</li>
<li><strong>PTAC:</strong> 1.400 kg</li>
<li><strong>Zuladung:</strong> 170 kg</li>
<li><strong>Reifengröße:</strong> 185 R14 C 102 L</li>
<li><strong>Isolierung Boden / Wand / Dach:</strong> 35 / 28 / 26 mm</li>
<li><strong>Frischwassertank:</strong> 50 L</li>
<li><strong>Kupplungstyp:</strong> Kugelkupplung Ø 50 mm (AL-KO AKS)</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Robuste Keile zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor Überdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 16,
    slug: 'eriba-reisefamilie-320-2023',
    name: 'ERIBA-REISEFAMILIE 320 – 2023 – Komfort, Freiheit und Abenteuer',
    subtitle: 'Wohnwagen · Einachser · Baujahr 2023 · EU-Zulassung · 750 kg',
    category: 'wohnwagen',
    price: 9490,
    originalPrice: 17990,
    discount: 47,
    stock: 'instock',
    badge: null,
    image: '/image/ERIBA-REISEFAMILIE 320 – 2023/Principal.png',
    images: [
      '/image/ERIBA-REISEFAMILIE 320 – 2023/Principal.png',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.47_db7404a9.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.48_36ac3db3.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.48_6591efc5.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.48_9b1a3552.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.48_af5dcb3d.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.48_cf9f9918.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.49_2520cc55.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.49_77e9915c.jpg',
      '/image/ERIBA-REISEFAMILIE 320 – 2023/WhatsApp-Image-2025-03-23-a-20.43.49_f87074f4.jpg',
    ],
    specs: { Länge: '6,00 m', Breite: '2,20 m', Gewicht: '750 kg', Personen: '4', Baujahr: '2023' },
    description: 'Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause. EU-Qualität · 2 Jahre Garantie · Versandkostenfrei · TÜV-konform. Sofort verfügbar, inklusive 6 Zubehörteile im Wert von 479 €.',
    descriptionHtml: `<p>Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause. Vollausgestattete Küche, Bad und Schlafbereich – alles an Bord. EU-Qualitätsfertigung mit 2 Jahren Garantie.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
<ul>
<li>2 Erwachsene + 2 Kinder (Etagenbett optional)</li>
<li>Bettgröße Längsbett: ca. 185 × 70 cm je Einzelbett</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>3-Flammen-Gaskocher, Spüle mit Mischbatterie, 60-L-Kühlschrank (12V/230V)</li>
<li>Schrank-WC mit Duschfunktion, Waschbecken, Kassettentoilette</li>
<li>Frischwassertank: 60 L · Abwassertank: 30 L (integriert)</li>
</ul>
<h3><i class="bi bi-shield-check"></i> Serienausstattung</h3>
<ul>
<li>Truma Combi 4 (Gas/230V) Warmluft-Gebläseheizung</li>
<li>Gaskasten für 2× 11 kg Flaschen mit Duo-Control-Regelanlage</li>
<li>SEITZ-Doppelverglasung mit integriertem Rollo und Insektenschutz</li>
<li>SEITZ S4 Dachluke mit Insektenschutz</li>
<li>Aluminium-Einstiegstür mit 3-Punkt-Verriegelung und Außenlicht</li>
<li>230V CEE-Anschluss 16A, 12V-Bordnetz · 75 Ah AGM-Aufbaubatterie</li>
<li>Sandwichbauweise, GFK-Außenhaut, 32 mm Sandwichpaneel</li>
</ul>
<h3><i class="bi bi-gift"></i> 6 Zubehörteile GRATIS (Wert: 479 €)</h3>
<ul>
<li>AL-KO AKS Diebstahlsicherung (Wert: 89 €)</li>
<li>Truma Wasserfilter-Set + 3 Ersatz-Filterpatronen (Wert: 54 €)</li>
<li>Solar-Ladeset 100W + MPPT-Laderegler 20A (Wert: 127 €)</li>
<li>GFK-Aufbau Pflegeset: Reiniger + Politur + Mikrofasertuch (Wert: 47 €)</li>
<li>Unterlegkeile &amp; Nivellierset + Digitale Wasserwaage (Wert: 63 €)</li>
<li>Klimaanlage inklusive (Wert: 99 €)</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Zul. Gesamtgewicht:</strong> 750 kg</li>
<li><strong>Leergewicht:</strong> ca. 610 kg · <strong>Nutzlast:</strong> ca. 140 kg</li>
<li><strong>Außenlänge (inkl. Deichsel):</strong> ca. 6,00 m</li>
<li><strong>Außenbreite / -höhe:</strong> 2,20 m / 2,52 m</li>
<li><strong>Innenlänge / -breite:</strong> ca. 4,20 m / ca. 2,00 m</li>
<li><strong>Stehhöhe innen:</strong> ca. 1,95 m</li>
<li><strong>Achstyp:</strong> AL-KO Starrachse mit Gummifederung</li>
<li><strong>Bremssystem:</strong> Auflaufbremse (AL-KO), 750 kg Klasse</li>
<li><strong>Reifengröße:</strong> 175/70 R13</li>
<li><strong>Kupplungskopf:</strong> AL-KO AKS 1300, 50 mm Kugelkupplung</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre Herstellergarantie</li>
</ul>`,
    accessories: [
      'AL-KO AKS Diebstahlsicherung – Hochwertige Kugelkopf-Diebstahlsicherung AL-KO AKS 1300 kompatibel.',
      'Truma Wasserfilter-Set – Inline-Wasserfilter + 3 Ersatz-Filterpatronen für 60-L-Frischwassertank.',
      'Solar-Ladeset 100W – 100W Solarmodul flexibel + MPPT-Laderegler 20A für 75Ah AGM-Aufbaubatterie.',
      'GFK-Aufbau Pflegeset – GFK-Reiniger 500ml + Wohnwagenpolitur 500ml + Mikrofasertuch.',
      'Unterlegkeile & Nivellierset – 2× Unterlegkeil + 2× Radkeil + Digitale Wasserwaage.',
      'Klimaanlage – Inklusive, sorgt für angenehme Temperaturen bei jedem Wetter.',
    ],
    featured: false,
  },

  // ── CARAVELAIR ────────────────────────────────────────────────────────
  {
    id: 17,
    slug: 'caravelair-alba-390-2025',
    name: 'Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6 m',
    subtitle: 'Wohnwagen · Neufahrzeug 2025 · 4 Personen · 595 cm',
    category: 'wohnwagen',
    price: 12990,
    originalPrice: 22990,
    discount: 44,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/Principal.jpg',
    images: [
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/Principal.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_2.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_3.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_4.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_5.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_6.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_7.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_8.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_9.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_10.jpg',
      '/image/Caravelair Alba 390 – Wohnwagen 2025, 4 Schlafplätze, unter 6m/335619_11.jpg',
    ],
    specs: { Länge: '595 cm', Breite: '–', Gewicht: '–', Personen: '4', Baujahr: '2025' },
    description: 'Neufahrzeug 2025 (Zulassung 04.07.2025): 4 Schlafplätze, festes Querbett 190×138 cm, 85-L-Kompressor-Kühlschrank, handlich und wendig – ideal für jeden Campingplatz.',
    descriptionHtml: `<p>Dieser brandneue Caravelair Alba 390, zugelassen am 04.07.2025, ist ein moderner und handlicher Wohnwagen für 4 Personen. Er vereint auf kompakten 4 Metern ein festes 140 cm breites Bett und einen großzügigen Wohnbereich.</p>
<h3><i class="bi bi-moon-stars"></i> Grundriss &amp; Schlafbereich (4 Personen)</h3>
<ul>
<li>Festes Querbett vorne: 190 × 138 cm</li>
<li>Dinette für 4 Personen: Gegenüberliegende Sitzgruppe, umbaubar zu einem 2-Personen-Bett (190 × 125/86 cm)</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>Kühlschrank: 85 L Kompressor</li>
<li>Kochstelle: 2-Flammen-Gasherd + Spüle</li>
<li>Badezimmer hinten links: Kassettentoilette + klappbares Waschbecken</li>
<li>Stauraum: Kleiderschrank gegenüber der Dinette + viele weitere Staufächer</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Marke:</strong> Caravelair</li>
<li><strong>Modell:</strong> Alba 390</li>
<li><strong>Baujahr / Zulassung:</strong> 2025 (04.07.2025)</li>
<li><strong>Zustand:</strong> Neufahrzeug</li>
<li><strong>Gesamtlänge:</strong> 595 cm</li>
<li><strong>Schlafplätze:</strong> 4</li>
<li><strong>Querbett (fest):</strong> 190 × 138 cm</li>
<li><strong>Dinettenbett:</strong> 190 × 125/86 cm</li>
<li><strong>Kühlschrank:</strong> 85 L Kompressor</li>
<li><strong>Kochstelle:</strong> 2-Flammen-Gasherd</li>
<li><strong>Badezimmer:</strong> Kassettentoilette + klappbares Waschbecken</li>
<li><strong>Garantie:</strong> 2 Jahre gesetzliche Gewährleistung</li>
</ul>`,
    accessories: [
      'Stützrad (Jockey Wheel) – Für einfaches Rangieren ohne Zugfahrzeug.',
      'Unterlegkeile (2er-Set) – Zur sicheren Standsicherung.',
      'Deichselschloss – Diebstahlsicherung für die Anhängerkupplung.',
      'Wasserdruckregler – Schützt das Wassersystem vor zu hohem Leitungsdruck.',
      'Campingführer Europa – Mit über 10.000 Campingplätzen in ganz Europa.',
    ],
    featured: true,
  },
  {
    id: 18,
    slug: 'caravelair-alba-350-2024',
    name: 'CARAVELAIR ALBA 350 – 2024 – Komfort, Freiheit und Abenteuer',
    subtitle: 'Wohnwagen · Kompakt · Einachser · Baujahr 2024 · 750 kg',
    category: 'wohnwagen',
    price: 10990,
    originalPrice: 20490,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/CARAVELAIR ALBA 350 – 2024/Principal.png',
    images: [
      '/image/CARAVELAIR ALBA 350 – 2024/Principal.png',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_3dba3a14-12d5-4534-96b1-b919f4f639f0-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_15c1dcd3-465a-4230-a7e7-afe78ccb60ea-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_3dba3a14-12d5-4534-96b1-b919f4f639f0-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_67800986-2a6f-4ddb-b896-3bd481b5bfaf-1-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_67800986-2a6f-4ddb-b896-3bd481b5bfaf-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_92b1ed69-69bc-4adc-9fed-2962940b1a81-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_96caa3cc-3c86-4cc4-a04c-939b442d7aab-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_9a49ff4f-b4bf-46c7-8bf8-22b29f97a87b-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_a885d92f-156f-4f6a-99b1-a5e30b27bc50-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_c68b44b4-d46b-4c22-ab1b-47491ba1be8a-1-768x576.webp',
      '/image/CARAVELAIR ALBA 350 – 2024/PC_d2b23e5e-35c5-4591-abfe-6378997e655a-768x576.webp',
    ],
    specs: { Länge: '5,80 m', Breite: '2,20 m', Gewicht: '750 kg', Personen: '2', Baujahr: '2024' },
    description: 'Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause. EU-Qualität · 2 Jahre Garantie · Versandkostenfrei · TÜV-konform. 5 Zubehörteile im Wert von 310 € GRATIS inklusive.',
    descriptionHtml: `<p>Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause. Vollausgestattete Küche, Bad und Schlafbereich – alles an Bord. EU-Qualitätsfertigung von CARAVELAIR (Trigano Group), Frankreich.</p>
<h3><i class="bi bi-moon-stars"></i> Schlafbereich (2 Personen)</h3>
<ul>
<li>Querbett Heck: ca. 190 × 125 cm</li>
</ul>
<h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
<ul>
<li>2-Flammen-Gaskocher, Spüle, 50-L-Kühlschrank (12V/230V)</li>
<li>Kompaktbad: Dusche, Kassettentoilette, Waschbecken</li>
<li>Frischwassertank: 40 L · Abwassertank: 20 L (integriert)</li>
</ul>
<h3><i class="bi bi-shield-check"></i> Serienausstattung</h3>
<ul>
<li>Truma Combi 4 (Gas/230V) Warmluft-Gebläseheizung</li>
<li>Gaskasten für 1× 11 kg Flasche, Druckminderer 30 mbar</li>
<li>Doppelglasscheiben mit integriertem Rollo und Insektenschutzgitter</li>
<li>Isolierte Einstiegstür mit 3-Punkt-Verriegelung</li>
<li>230V CEE-Anschluss 16A, 12V-Bordnetz · 60 Ah AGM-Aufbaubatterie</li>
<li>Sandwichbauweise, GFK-Außenhaut, 30 mm EPS-Sandwichpaneel</li>
</ul>
<h3><i class="bi bi-gift"></i> 5 Zubehörteile GRATIS (Wert: 310 €)</h3>
<ul>
<li>Kompakt-Schutzhülle ALBA 350 – atmungsaktiv, UV-beständig (Wert: 89 €)</li>
<li>CEE-Adapterset Camping 4-teilig – universell für alle Stellplätze (Wert: 63 €)</li>
<li>GPS-Wohnwagen-Tracker Mini – mit Magnetbefestigung + 12V-Adapter (Wert: 78 €)</li>
<li>Camping-Küchenzubehörset – Schüsseln + Besteck + Gewürzbox (Wert: 44 €)</li>
<li>Wohnwagen-Reinigungsset Komplett – Innen-Reiniger + Mikrofasertücher (Wert: 36 €)</li>
</ul>
<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
<li><strong>Zul. Gesamtgewicht:</strong> 750 kg</li>
<li><strong>Leergewicht:</strong> ca. 610 kg · <strong>Nutzlast:</strong> ca. 140 kg</li>
<li><strong>Außenlänge gesamt:</strong> ca. 5,80 m · <strong>Aufbaulänge:</strong> 3,50 m</li>
<li><strong>Außenbreite / -höhe:</strong> 2,20 m / 2,55 m</li>
<li><strong>Innenlänge / -breite:</strong> ca. 3,10 m / ca. 2,00 m</li>
<li><strong>Stehhöhe innen:</strong> ca. 1,92 m</li>
<li><strong>Achstyp:</strong> AL-KO Starrachse 750 kg mit Gummifederung</li>
<li><strong>Bremssystem:</strong> AL-KO Auflaufbremse, 750 kg Klasse</li>
<li><strong>Reifengröße:</strong> 175/70 R13</li>
<li><strong>Kupplungskopf:</strong> AL-KO AKS 1300, 50 mm Kugelkupplung</li>
<li><strong>Höchstgeschwindigkeit:</strong> 100 km/h</li>
<li><strong>Garantie:</strong> 2 Jahre Herstellergarantie</li>
</ul>`,
    accessories: [
      'Kompakt-Schutzhülle ALBA 350 – Maßgeschneiderte Wohnwagen-Außenplane 3,50m atmungsaktiv UV-beständig.',
      'CEE-Adapterset Camping 4-teilig – CEE 16A auf Schuko + CEE 16A auf CEE 32A + Schuko-Verlängerung 5m.',
      'GPS-Wohnwagen-Tracker Mini – Kompakter GPS-Tracker mit Magnetbefestigung + 12V-Adapter.',
      'Camping-Küchenzubehörset – Faltbare Silikonschüsseln 3× + Campingbesteck-Set + Gewürzbox 6-teilig.',
      'Wohnwagen-Reinigungsset Komplett – Innen-Reinigungsschaum + Mikrofasertuch-Set 5× + Scheibenreiniger.',
    ],
    featured: false,
  },
  {
    id: 19,
    slug: 'caravelair-486-sport-line-2024',
    name: 'CARAVELAIR 486 SPORT LINE – 2024 – Komfort, Freiheit und Abenteuer',
    subtitle: 'Tandemachser · 1.500 kg · 4 Personen · Sport Line',
    category: 'wohnwagen',
    price: 13990,
    originalPrice: 25490,
    discount: 45,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/CARAVELAIR 486 SPORT LINE – 2024/Principal.png',
    images: [
      '/image/CARAVELAIR 486 SPORT LINE – 2024/Principal.png',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_1.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_2.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_4.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_5.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_6.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_7.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_8.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_9.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_10.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_11.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_12.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_13.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_14.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_15.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_16.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_17.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_18.webp',
      '/image/CARAVELAIR 486 SPORT LINE – 2024/1_81579_19.webp',
    ],
    specs: { Länge: '8,20 m', Breite: '2,35 m', Gewicht: '1.500 kg', Personen: '4', Baujahr: '2024' },
    description: 'Le CARAVELAIR 486 SPORT LINE 2024 est un tandem-essieu spacieux de 8,20 m alliant confort premium, équipement sport et liberté de voyage pour 4 personnes.',
    descriptionHtml: `
      <p>Le <strong>CARAVELAIR 486 SPORT LINE 2024</strong> est un tandem-essieu de 8,20 m qui marie confort premium et esprit aventure. Avec 1.500 kg de PTAC et une finition Sport Line soignée, il s'impose comme le compagnon idéal pour les voyageurs exigeants.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Queensbett</strong> 200 × 145 cm — confort optimal pour 2 personnes</li>
        <li><strong>2 Längsbetten</strong> à l'arrière — idéaux pour enfants ou invités</li>
        <li>Total : <strong>4 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
      <ul>
        <li><strong>Kompressorkühlschrank 130 L</strong> — refroidissement efficace sans freon</li>
        <li><strong>4 Flammen Gasherd</strong> + Backofen intégré</li>
        <li><strong>Thetford Aqila WC</strong> — sanitaires intégrés</li>
        <li>Douche séparée avec mitigeur thermostatique</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li>Habillage extérieur Sport Line avec jantes alu</li>
        <li>LED-Beleuchtung innen und außen</li>
        <li>Klimaanlage-Vorbereitung intégrée</li>
        <li>AL-KO Fahrwerk mit Stabilisierungssystem</li>
        <li>Doppelverglasung &amp; Thermovorhänge</li>
      </ul>

      <h3><i class="bi bi-gift"></i> 5 Zubehörteile GRATIS (Wert 340 €)</h3>
      <ul>
        <li>Tandem-Radkeil-Set (68 €)</li>
        <li>Klimaanlage-Kit (94 €)</li>
        <li>Duschset (57 €)</li>
        <li>Backofen-Set (49 €)</li>
        <li>Smart-Hub USB-C (72 €)</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 8,20 m</li>
        <li><strong>Breite :</strong> 2,35 m</li>
        <li><strong>Gesamtgewicht :</strong> 1.500 kg</li>
        <li><strong>Achse :</strong> Tandemachser</li>
        <li><strong>Baujahr :</strong> 2024</li>
      </ul>
    `,
    accessories: [
      'Tandem-Radkeil-Set – jeu de cales roues tandem pour stationnement sécurisé (68 €).',
      'Klimaanlage-Kit – kit préparation climatisation compatible Sport Line (94 €).',
      'Duschset – ensemble de douche avec flexible et mitigeur de remplacement (57 €).',
      'Backofen-Set – plaque de cuisson et accessoires pour le four intégré (49 €).',
      'Smart-Hub USB-C – concentrateur USB-C pour recharge rapide à bord (72 €).',
    ],
    featured: false,
  },
  {
    id: 20,
    slug: 'alba-466-2024',
    name: 'ALBA 466 2024 Wohnwagen – Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause',
    subtitle: 'Top Wohnwagen · Direkt beim Importeur bestellen',
    category: 'wohnwagen',
    price: 13490,
    originalPrice: 24490,
    discount: 45,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/ALBA 466 2024 Wohnwagen/Principal.webp',
    images: [
      '/image/ALBA 466 2024 Wohnwagen/Principal.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-1-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-2-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-4-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-5-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-6-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-7-247x247-1-90x90.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-8-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-9-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-10-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-11-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-14-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-15-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-16-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/CARAVELAIR-ALBA-466-FAMILY-2024-17-247x247-1.webp',
      '/image/ALBA 466 2024 Wohnwagen/caravelair-alba-466-2024-1024x768-1-600x450-removebg-preview.png',
    ],
    specs: { Länge: '7,50 m', Breite: '2,30 m', Gewicht: '1.000 kg', Personen: '4', Baujahr: '2024' },
    description: 'Le ALBA 466 2024 est un Wohnwagen Einachser de 4,66 m alliant cuisine complète, salle de bain séparée et 4 couchages — votre maison mobile pour toutes vos aventures.',
    descriptionHtml: `
      <p>Le <strong>ALBA 466 2024 Wohnwagen</strong> combine confort, liberté et aventure dans un châssis Einachser de 4,66 m. Idéal pour familles, couples et voyageurs longue distance, il est livré avec 5 accessoires offerts (valeur 310 €).</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>2 Längsbetten</strong> — confort individuel pour 2 personnes</li>
        <li><strong>Heckdoppelbett</strong> 190 × 130 cm — pour couple ou 2 enfants</li>
        <li>Total : <strong>4 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
      <ul>
        <li><strong>3-Flammen-Gaskocher</strong> avec évier intégré</li>
        <li><strong>Kompressor-Kühlschrank 80 L</strong> (12V/230V)</li>
        <li><strong>Separates Bad</strong> : douche, kassettentoilette, lavabo, miroir</li>
        <li>Frischwassertank 80 L / Abwassertank 40 L</li>
      </ul>

      <h3><i class="bi bi-house-check"></i> Komfort &amp; Ausstattung</h3>
      <ul>
        <li><strong>Alde Kompakt 3010</strong> — chauffage gaz/230V, eau chaude</li>
        <li>Doppelglasscheiben avec rollo et moustiquaire intégrés</li>
        <li>Dachluke avec insektenschutz et verdunklungsrollo</li>
        <li>Porte isolée avec serrure 3 points</li>
        <li><strong>90 Ah AGM-Batterie</strong> + prise CEE 16A 230V</li>
      </ul>

      <h3><i class="bi bi-gift"></i> 5 Zubehörteile GRATIS (Wert 310 €)</h3>
      <ul>
        <li>Vorzelt-Anbauset ALBA 466 (84 €)</li>
        <li>AGM-Batterie Ladegerät 10A (69 €)</li>
        <li>Kassettentoiletten-Pflegeset (52 €)</li>
        <li>Alde Heizsystem Entlüftungsset (58 €)</li>
        <li>Europa-Camping-Stellplatzkarte 2024 (47 €)</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Aufbaulänge :</strong> 4,66 m / Außenlänge gesamt : 7,50 m</li>
        <li><strong>Breite :</strong> 2,30 m — Höhe : 2,72 m</li>
        <li><strong>zGG :</strong> 1.000 kg — Leergewicht : ca. 820 kg</li>
        <li><strong>Achse :</strong> AL-KO Einachser, Auflaufbremse</li>
        <li><strong>Baujahr :</strong> 2024 — CE-geprüft, TÜV-konform</li>
      </ul>
    `,
    accessories: [
      'Vorzelt-Anbauset ALBA 466 – Schiene 4,66 m + Zeltstäbe + Heringe 20× pour vorzelt sur mesure (84 €).',
      'AGM-Batterie Ladegerät 10A – chargeur automatique 12V avec maintien de charge pour batterie 90 Ah (69 €).',
      'Kassettentoiletten-Pflegeset – Thetford Reiniger 1L + désodorisant 6× + spray joint pour WC cassette (52 €).',
      'Alde Heizsystem Entlüftungsset – clé de purge + antigel 2L + clips tuyau silicone pour chauffage Alde (58 €).',
      'Europa-Camping-Stellplatzkarte 2024 – Guide ADAC Europe 2 tomes + pochette waterproof + carte parking EU (47 €).',
    ],
    featured: false,
  },
  {
    id: 21,
    slug: 'alba-426-family-2023',
    name: 'Wohnwagen ALBA 426 FAMILY 2023 – Komfort, Freiheit und Abenteuer – Ihr mobiles Zuhause',
    subtitle: 'Familienmodell · 6 Schlafplätze · 2.000 kg · Einachser',
    category: 'wohnwagen',
    price: 11490,
    originalPrice: 21490,
    discount: 47,
    stock: 'instock',
    badge: null,
    image: '/image/Wohnwagen ALBA 426 FAMILY 2023/Principal.png',
    images: [
      '/image/Wohnwagen ALBA 426 FAMILY 2023/Principal.png',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-1-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/caravelair-alba-426-family-2023-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-2-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-3-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-4-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-5-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-7-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-8-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-14-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-16-1024x768-1-768x576.webp',
      '/image/Wohnwagen ALBA 426 FAMILY 2023/CARAVELAIR-ALBA-426-FAMILY-2023-17-1024x768-1-768x576.webp',
    ],
    specs: { Länge: '8,20 m', Breite: '2,40 m', Gewicht: '2.000 kg', Personen: '6', Baujahr: '2023' },
    description: 'Le ALBA 426 FAMILY 2023 est un Wohnwagen familial Einachser de 4,26 m avec 6 couchages, chauffage Truma Combi 4, salle de bain séparée et 2.000 kg de PTAC.',
    descriptionHtml: `
      <p>Le <strong>Wohnwagen ALBA 426 FAMILY 2023</strong> a été spécialement conçu pour les familles : 6 couchages en configuration FAMILY, large espace de vie, cuisine complète et rangements généreux pour tous vos équipements de vacances.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>2 Einzelbetten</strong> — confort individuel pour adultes</li>
        <li><strong>Etagenbett</strong> — idéal pour 2 enfants</li>
        <li><strong>Hubbett</strong> — lit rabattable supplémentaire</li>
        <li>Total : <strong>6 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Badezimmer</h3>
      <ul>
        <li>Küche équipée avec gazinière multi-feux et évier</li>
        <li><strong>Separates Bad</strong> : douche, WC, lavabo</li>
        <li>Stehhöhe intérieure : 2,00 m — confort optimal</li>
      </ul>

      <h3><i class="bi bi-house-check"></i> Komfort &amp; Ausstattung</h3>
      <ul>
        <li><strong>Truma Combi 4</strong> (gaz/électricité) — chauffage air chaud + eau chaude</li>
        <li>Sandwichbauweise GFK 35 mm — isolation thermique renforcée</li>
        <li>AL-KO Stabilisierungskupplung AKS 3004 — sécurité optimale</li>
        <li>13-poliger Stecker ISO 11446 — compatibilité universelle</li>
        <li>Zulassung EU — CE-konform, TÜV-konform</li>
      </ul>

      <h3><i class="bi bi-people"></i> Ideal für</h3>
      <ul>
        <li><strong>Familien</strong> — vacances flexibles avec enfants</li>
        <li><strong>Groupes</strong> — festivals et séjours en groupe</li>
        <li><strong>Langzeitreisende</strong> — mois en route sans hébergement fixe</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Aufbaulänge :</strong> 4,26 m / Außenlänge gesamt : 8,20 m</li>
        <li><strong>Breite :</strong> 2,40 m — Höhe : 2,80 m</li>
        <li><strong>zGG :</strong> 2.000 kg — Leergewicht : ca. 1.680 kg — Nutzlast : 320 kg</li>
        <li><strong>Achse :</strong> AL-KO Einachser 2.000 kg, Auflaufbremse — Reifen 205/70 R15C</li>
        <li><strong>Baujahr :</strong> 2023 — Führerschein B+E erforderlich</li>
      </ul>
    `,
    accessories: [
      'Familien-Vorzeltset ALBA 426 – Schiene 4,26 m + mâts + piquets 24× pour vorzelt famille (89 €).',
      'Truma Combi Servicekit – filtres + joints + antigel pour entretien annuel Truma Combi 4 (64 €).',
      'Etagenbett-Sicherheitsnetz – filet de sécurité pour lit superposé, fixation universelle (38 €).',
      'AL-KO AKS 3004 Pflegeset – lubrifiant + kit de contrôle pour couplage stabilisateur (45 €).',
      'Familienpack Camping-Küche – set de vaisselle 6 pièces + ustensiles + rangement compact (72 €).',
    ],
    featured: false,
  },
  {
    id: 70,
    slug: 'sterckeman-easy-390cp-2024',
    name: 'Sterckeman Easy 390CP NEU 2024 – Kompakt, Leicht und Vollausgestattet',
    subtitle: 'CARAVANE · 950 kg PTAC · 4 Schlafplätze · Querbet',
    category: 'wohnwagen',
    price: 8490,
    originalPrice: 15990,
    discount: 47,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman Easy 390CP NEU 2024/Principal.png',
    images: [
      '/image/Sterckeman Easy 390CP NEU 2024/Principal.png',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957694.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957696.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957697.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957698.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957699.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957701.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957702.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957703.jpg',
      '/image/Sterckeman Easy 390CP NEU 2024/loisir_sterckeman-easy-390-cp_7957704.jpg',
    ],
    specs: { Länge: '5,95 m', Breite: '2,10 m', Gewicht: '950 kg', Personen: '4', Baujahr: '2024' },
    description: 'La Sterckeman Easy 390CP 2024 est une caravane légère et compacte de 5,95 m avec lit transversal, réfrigérateur trimixte 85L, WC électrique à cassette et coque polyester anti-grêle.',
    descriptionHtml: `
      <p>La <strong>Sterckeman Easy 390CP NEU 2024</strong> est la caravane idéale pour ceux qui cherchent confort, robustesse et légèreté à un prix imbattable. Sa coque polyester anti-grêle et son PTAC de 950 kg en font un véhicule facilement tractable, même par des voitures de taille modérée.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lit transversal</strong> — espace nuit spacieux et pratique pour 2 personnes</li>
        <li><strong>Couchage salon</strong> — 2 places supplémentaires en configuration nuit</li>
        <li>Total : <strong>4 Schlafplätze</strong></li>
        <li>Sommier relevable + sommier à lattes</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li><strong>Combiné réchaud 3 feux</strong> avec cuve évier inox</li>
        <li><strong>Réfrigérateur trimixte 85 L</strong> (gaz / 12V / 220V)</li>
        <li><strong>WC à cassette électrique</strong> — confort optimal</li>
        <li>Bac à douche intégré</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li>Coque PVC polyester — <strong>protection anti-grêle</strong> sur toute la coque</li>
        <li>Éclairage intérieur LED + éclaireur d'auvent</li>
        <li>Store combi occultant + moustiquaire</li>
        <li>Transformateur 230/12V + disjoncteur</li>
        <li>Vérins rallongés à l'avant + stabilisateur anti-lacets</li>
        <li>Enjoliveurs de roues + roue de secours</li>
        <li>Barres porte-vélo supérieure + inférieure</li>
        <li>Prises USB + prise 220V + variateur de lumière</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Garanties</h3>
      <ul>
        <li><strong>2 ans</strong> garantie constructeur cellule</li>
        <li><strong>7 ans</strong> garantie étanchéité</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 5,95 m — Breite : 2,10 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 950 kg</li>
        <li><strong>Schlafplätze :</strong> 4 — Lit transversal + couchage salon</li>
        <li><strong>Réservoir eau :</strong> 25 L</li>
        <li><strong>Baujahr :</strong> 2024 — Gamme EASY · Série rigide</li>
      </ul>
    `,
    accessories: [
      'Pack Safety1 Sterckeman – kit stabilisateur + anti-lacets + amortisseurs pour sécurité optimale en route (500 €).',
      'Ambiance Ottawa – pack décoration intérieure thème Ottawa : housses, coussins et rideaux assortis.',
      'Coyote 2 ans – abonnement GPS Coyote 2 ans pour alertes radars et sécurité routière (749 €).',
      'Porte-vélos rabattable – support 2 vélos compatible barres supérieure + inférieure Sterckeman Easy 390CP.',
      'Kit entretien WC électrique – produits Thetford spécifiques cassette électrique : désodorisant + rinçage + joint.',
    ],
    featured: false,
  },
  {
    id: 71,
    slug: 'sterckeman-easy-460cp-2025',
    name: 'Sterckeman Easy 460CP 2025 – Lit Central, Chauffage Truma, Pack Shower',
    subtitle: 'CARAVANE · 1.150 kg PTAC · 4 Schlafplätze · Série Printemps',
    category: 'wohnwagen',
    price: 12990,
    originalPrice: 23990,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman Easy 460CP 2025/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 460CP 2025/Principal.jpg',
      '/image/Sterckeman Easy 460CP 2025/a73c22ef-76e6-4a32-a603-43f6389ea7a5-IMG_4885.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/fb7162b2-6ef2-4e31-9aa4-f3fe94f101d9-IMG_4887.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/e809a3c0-c893-4ee9-b869-6f21807d95d6-IMG_4888.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/954fa1a3-3897-445d-acdd-9cc554645d3c-IMG_4889.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/21a7034a-b619-438c-ac68-92d76a8721d8-IMG_4890.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/2c829dab-26e9-47f7-9fcc-e03ab30c8740-IMG_4893.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/6618a5b0-bfe2-41d7-aaac-7824d4ac984f-IMG_4894.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/9aae3c27-eb38-47be-a00d-7711aee4f823-IMG_4895.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/a4187f65-133e-4627-b3d4-db13fd72c36a-IMG_4896.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/04bc10d9-80b0-4cd7-88a8-78d1837377f3-IMG_4897.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/72146ad2-d13c-462d-a496-b6b894444706-IMG_4898.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/ff88ce17-fe7c-4a43-9cf2-0168d958dc64-IMG_4899.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/b0e17d16-7a11-462e-943d-d6f3eb7e5eaf-IMG_4900.JPG.jpg',
      '/image/Sterckeman Easy 460CP 2025/e1242cb8-f25a-42e0-bfb4-a97e2d1f83d3-IMG_4902.JPG.jpg',
    ],
    specs: { Länge: '5,57 m', Breite: '2,10 m', Gewicht: '1.150 kg', Personen: '4', Baujahr: '2025' },
    description: 'La Sterckeman Easy 460CP Anniversary 2025 est une caravane polyester 4 couchages avec lit central, chauffage Truma gaz, Pack Shower complet et réfrigérateur 126L.',
    descriptionHtml: `
      <p>La <strong>Sterckeman Easy 460CP ANNIVERSARY 2025</strong> (Série Printemps) allie confort, légèreté et équipement complet dans un format de 5,57 m. Avec son lit central et son Pack Shower intégré, elle est prête pour toutes vos aventures dès la première nuit.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lit central</strong> — confort optimal pour 2 personnes</li>
        <li><strong>Lit dinette</strong> — salon face à face convertible en couchage</li>
        <li>Total : <strong>4 Schlafplätze</strong></li>
        <li>Matelas tapissier inclus</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li><strong>Plaques de cuisson 2 feux</strong> avec lavabo</li>
        <li><strong>Réfrigérateur/congélateur 126 L</strong></li>
        <li>WC intégré + douche (Pack Shower)</li>
        <li>Réservoir eaux propres 50 L / eaux usées 30 L</li>
        <li>Chauffe-eau électrique 5 L (Pack Shower)</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Chauffage Truma gaz</strong> — confort thermique assuré</li>
        <li>Carrosserie polyester — légèreté et durabilité</li>
        <li>Éclairage LED intérieur + lampe d'auvent</li>
        <li>Moustiquaire de porte + stores occultants</li>
        <li>Anti-lacets + roue de secours</li>
        <li>Réservoir d'eau usée mobile</li>
      </ul>

      <h3><i class="bi bi-droplet"></i> Pack Shower (inclus)</h3>
      <ul>
        <li>Support de douchette + douchette</li>
        <li>Rideau de douche</li>
        <li>Réservoir eau propre 50 L</li>
        <li>Chauffe-eau électrique 5 L</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 5,57 m — Breite : 2,10 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 1.150 kg — PVOM : 992 kg — Charge utile : 158 kg</li>
        <li><strong>Schlafplätze :</strong> 4 — Lit central + lit dinette</li>
        <li><strong>Garantie :</strong> 24 mois constructeur</li>
        <li><strong>Baujahr :</strong> 2025 — Gamme EASY ANNIVERSARY · Série Printemps</li>
      </ul>
    `,
    accessories: [
      'Pack Safety1 Sterckeman – stabilisateur + anti-lacets renforcé pour sécurité optimale en route (500 €).',
      'Abonnement Coyote 2 ans – alertes radars et assistance routière intégrées pour vos trajets (749 €).',
      'Ambiance Ottawa – pack décoration intérieure thème Ottawa : housses, coussins et rideaux coordonnés.',
      'Porte-vélos pliant 2 places – compatible attache-remorque, léger et rabattable, idéal 460CP.',
      'Kit rallonge Pack Shower – tuyau flexible 3 m + pompe 12V pour douche extérieure depuis réservoir 50 L.',
    ],
    featured: true,
  },
  {
    id: 72,
    slug: 'sterckeman-easy-470pe-kids-2024',
    name: "Sterckeman Easy 470PE KID'S 2024 – Familienwohnwagen, 6 Schlafplätze, Etagenbetten",
    subtitle: 'CARAVANE · 1.200 kg PTAC · 6 Schlafplätze · Lits superposés',
    category: 'wohnwagen',
    price: 9990,
    originalPrice: 18490,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman Easy 470PE KIDS 2024/Principal.jpg',
    images: [
      '/image/Sterckeman Easy 470PE KIDS 2024/Principal.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/a0fd1db4-662a-4d1b-9d8a-b64d25298fe3-IMG_20240926_140739.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/a0fd1db4-662a-4d1b-9d8a-b64d25298fe3-IMG_20240926_140739.jpg (1).jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/9c9a1fbe-e9e1-4b5d-bcca-31f30f78d4a8-IMG_20240926_140745.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/83865508-30c7-4fc8-839d-3ff56ede7493-IMG_20240926_140750.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/97b65a06-de1d-4e52-a824-329229c0c789-IMG_20240926_140814.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/893bedd7-9479-4cd7-8298-78131720cdf2-IMG_20240926_140842.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/c58db76f-2c6e-488b-85cd-1a15f8c4204a-IMG_20240926_140826.jpg.jpg',
      '/image/Sterckeman Easy 470PE KIDS 2024/b34f1a0d-4cf0-475a-9cfe-cc6495471b9c-IMG_20240926_140729.jpg.jpg',
    ],
    specs: { Länge: '6,40 m', Breite: '2,30 m', Gewicht: '1.200 kg', Personen: '6', Baujahr: '2024' },
    description: "La Sterckeman Easy 470PE KID'S 2024 est un Familienwohnwagen 6 couchages avec lits superposés, réfrigérateur 150L, chauffage et carrosserie polyester. Idéal pour les familles.",
    descriptionHtml: `
      <p>La <strong>Sterckeman Easy 470PE KID'S 2024</strong> a été conçue spécialement pour les familles avec enfants. Avec ses lits superposés, son large réfrigérateur 150L et son chauffage intégré, elle offre tout le confort nécessaire pour des vacances en famille réussies.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lits superposés</strong> — espace nuit dédié aux enfants</li>
        <li>Couchages adultes en zone salon</li>
        <li>Total : <strong>6 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li><strong>Réfrigérateur 150 L</strong> — capacité famille</li>
        <li>WC intégré + chauffe-eau</li>
        <li>Réservoir eaux propres 12 L / eaux usées intégré</li>
        <li>Lampe d'auvent extérieure</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Carrosserie polyester</strong> — légèreté et résistance</li>
        <li>Chauffage intégré pour toutes saisons</li>
        <li>Éclairage LED intérieur</li>
        <li>Anti-lacets + roue de secours</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 6,40 m — Breite : 2,30 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 1.200 kg — PVOM : 997 kg</li>
        <li><strong>Schlafplätze :</strong> 6 — Lits superposés</li>
        <li><strong>Garantie :</strong> 24 mois constructeur</li>
        <li><strong>Baujahr :</strong> 2024 — Gamme EASY KIDS · Série rigide polyester</li>
      </ul>
    `,
    accessories: [
      "Kit lits superposés KID'S – barrières de sécurité + échelle renforcée pour lits superposés Sterckeman 470PE.",
      'Pack Safety Sterckeman – stabilisateur + anti-lacets renforcé pour sécurité optimale en route (500 €).',
      'Porte-vélos enfants 3 places – support pliable 3 vélos compatible PTAC 1.200 kg, facile à monter.',
      'Store auvent famille 4 m – store dépliable 4 m avec piquets pour créer un espace ombragé devant la caravane.',
      'Kit câble électrique 25 m – rallonge CEE 230V 25 m pour connexion sur emplacement camping éloigné.',
    ],
    featured: false,
  },
  {
    id: 73,
    slug: 'sterckeman-390cp-comfort-2026',
    name: 'Sterckeman Easy 390CP 2026 – Compact, Toit Dôme, WC Électrique, 3 Couchages',
    subtitle: 'CARAVANE · 1.000 kg PTAC · 3 Schlafplätze · Toit Dôme',
    category: 'wohnwagen',
    price: 9490,
    originalPrice: 17490,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Sterckeman 390CP Comfort 2026/Principal.jpg',
    images: [
      '/image/Sterckeman 390CP Comfort 2026/Principal.jpg',
      '/image/Sterckeman 390CP Comfort 2026/5199423783352081093.jpg',
      '/image/Sterckeman 390CP Comfort 2026/5199423783352081094.jpg',
      '/image/Sterckeman 390CP Comfort 2026/5199423783352081095.jpg',
    ],
    specs: { Länge: '5,95 m', Breite: '2,10 m', Gewicht: '1.000 kg', Personen: '3', Baujahr: '2026' },
    description: 'La Sterckeman Easy 390CP 2026 est une caravane compacte 3 couchages avec toit dôme, WC à cassette électrique, réfrigérateur à compression 85L et chauffage gaz. Facile à manœuvrer.',
    descriptionHtml: `
      <p>La <strong>Sterckeman Easy 390CP 2026</strong> est la caravane compacte idéale pour voyager avec aisance. Facile à manœuvrer, elle accueille jusqu'à 3/4 personnes grâce à son lit transversal fixe et son lit dinette, le tout dans un habitacle lumineux sous toit dôme.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lit transversal fixe</strong> — espace nuit permanent et confortable</li>
        <li><strong>Lit dinette</strong> — salon face à face convertible en couchage</li>
        <li>Total : <strong>3 Schlafplätze</strong> (jusqu'à 4 personnes)</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li><strong>Plaques de cuisson 2 feux</strong> + lavabo</li>
        <li><strong>Réfrigérateur à compression 85 L</strong></li>
        <li><strong>WC à cassette électrique</strong> + douche</li>
        <li>Réservoir eaux propres 50 L / eaux usées 30 L</li>
        <li>Chauffe-eau intégré</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Toit dôme</strong> — volume et luminosité optimisés</li>
        <li><strong>Chauffage gaz</strong> — confort thermique toutes saisons</li>
        <li>Éclairage LED intérieur + lampe d'auvent</li>
        <li>Moustiquaire de porte + stores occultants</li>
        <li>Anti-lacets + roue de secours + vérins renforcés</li>
        <li>Stores occultants cabine</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 5,95 m — Breite : 2,10 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 1.000 kg — Charge utile : 153 kg</li>
        <li><strong>Schlafplätze :</strong> 3 (jusqu'à 4) — Lit transversal + dinette</li>
        <li><strong>Garantie :</strong> 24 mois constructeur</li>
        <li><strong>Baujahr :</strong> 2026 — Gamme EASY · Série rigide</li>
      </ul>
    `,
    accessories: [
      'Pack Safety Sterckeman – stabilisateur + anti-lacets renforcé pour remorquage sécurisé (500 €).',
      'Store auvent 3,5 m – store latéral dépliable 3,5 m pour espace ombragé devant la caravane.',
      'Kit entretien WC électrique – Thetford désodorisant + liquide rinçage + spray joint cassette électrique.',
      'Tapis de sol caravane 250×350 cm – tapis de protection extérieur imperméable et antidérapant.',
      'Câble rallonge CEE 25 m – rallonge 230V CEE 25 m pour emplacement camping éloigné du branchement.',
    ],
    featured: true,
  },
  {
    id: 74,
    slug: 'caravelair-alba-390-2026',
    name: 'Caravelair Alba 390 – 2026 – Compact, Lit Transversal, Pré-équipement Clim',
    subtitle: 'CARAVANE · 950 kg PTAC · 3 Schlafplätze · Lit Transversal',
    category: 'wohnwagen',
    price: 10490,
    originalPrice: 19490,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/Caravelair Alba 390 – 2026/Principal.jpeg',
    images: [
      '/image/Caravelair Alba 390 – 2026/Principal.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_3.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_4.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_5.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_6.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_7.jpeg',
      '/image/Caravelair Alba 390 – 2026/346351_9.jpeg',
    ],
    specs: { Länge: '5,95 m', Breite: '2,10 m', Gewicht: '950 kg', Personen: '3', Baujahr: '2026' },
    description: 'La Caravelair Alba 390 2026 est une caravane compacte 3 couchages avec lit transversal, baie arrière, pré-équipement climatiseur et garantie étanchéité 7 ans. Idéale pour la montagne et l\'aventure.',
    descriptionHtml: `
      <p>La <strong>Caravelair Alba 390 – 2026</strong> est la caravane compacte parfaite pour l'aventure en montagne sans sacrifier le confort. Son lit transversal fixe, sa baie arrière et son agencement optimisé en font le compagnon idéal pour les familles et les couples explorateurs.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lit transversal fixe</strong> — cocon douillet après randonnée ou ski</li>
        <li>Couchage supplémentaire en zone salon</li>
        <li>Total : <strong>3 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li>Cuisine équipée avec plaques de cuisson et évier</li>
        <li>Lanterneau salle de bain + bac de propreté</li>
        <li>Réservoir eaux propres 50 L / eaux usées 30 L</li>
        <li>Jerrican eaux propres 12 L additionnel</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Baie arrière</strong> + baies ouvrantes double vitrage</li>
        <li>Éclairage d'auvent LED + rail auvent</li>
        <li>Store combi occultant + moustiquaire</li>
        <li>Pré-équipement climatiseur + pré-équipement TV (antenne + 230V)</li>
        <li>Prises 230V + prises USB</li>
        <li>Compartiment bouteille à gaz avec sangle 2e bouteille</li>
        <li>Vérins rallongés à l'avant + regroupement eaux usées</li>
        <li>Enjoliveurs de roues</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Garanties</h3>
      <ul>
        <li><strong>24 mois</strong> garantie constructeur</li>
        <li><strong>7 ans</strong> garantie étanchéité</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 5,95 m — Breite : 2,10 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 950 kg</li>
        <li><strong>Schlafplätze :</strong> 3 — Lit transversal fixe</li>
        <li><strong>Réservoirs :</strong> eau propre 50 L + eaux usées 30 L</li>
        <li><strong>Baujahr :</strong> 2026 — Gamme ALBA · Série rigide</li>
      </ul>
    `,
    accessories: [
      'Pack Safety1 Caravelair – stabilisateur + anti-lacets pour sécurité optimale en remorquage (250 €).',
      'Pack Cosy1 – kit confort intérieur : accessoires déco et rangement pour un habitacle chaleureux (250 €).',
      'Pack Shower complet – réservoir eau 50 L + eaux usées 30 L + chauffe-eau 5 L pour douche à bord (1.000 €).',
      'Kit climatiseur Alba 390 – unité split compatible pré-équipement + télécommande + fixations (sur devis).',
      'Antenne TV + câble HDMI – kit antenne omnidirectionnelle + câble HDMI 3 m compatible pré-équipement TV.',
    ],
    featured: false,
  },
  {
    id: 75,
    slug: 'alba-466-2026',
    name: 'Caravelair 466 ALBA 2026 – Familiencaravan, 6 Schlafplätze, Lits Superposés',
    subtitle: 'CARAVANE · 1.150 kg PTAC · 6 Schlafplätze · Lit Transversal',
    category: 'wohnwagen',
    price: 14490,
    originalPrice: 26990,
    discount: 46,
    stock: 'instock',
    badge: 'NEU',
    image: '/image/ALBA 466 2026 Wohnwagen/Principal.jpg',
    images: [
      '/image/ALBA 466 2026 Wohnwagen/Principal.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_2.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_3.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_4.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_5.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_6.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_7.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_8.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_9.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_10.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_11.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_12.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_13.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_14.jpg',
      '/image/ALBA 466 2026 Wohnwagen/VFGN466C9T0T11627_Caravane  CARAVELAIR 466 ALBA Neuf_img_15.jpg',
    ],
    specs: { Länge: '6,65 m', Breite: '2,30 m', Gewicht: '1.150 kg', Personen: '6', Baujahr: '2026' },
    description: 'La Caravelair 466 ALBA 2026 est le caravane familiale par excellence : 6 couchages avec lits superposés pour les enfants, lit transversal pour les parents, légère et facile à tracter.',
    descriptionHtml: `
      <p>La <strong>Caravelair 466 ALBA 2026</strong> est pensée pour les familles qui veulent partir sans prise de tête. Son poids plume facilite la traction même pour les véhicules les moins puissants, tandis que son intérieur optimisé offre un espace confortable pour toute la tribu.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafplätze</h3>
      <ul>
        <li><strong>Lit transversal</strong> — espace nuit douillet pour les parents</li>
        <li><strong>Lits superposés</strong> — coin enfants indépendant et convivial</li>
        <li>Total : <strong>6 Schlafplätze</strong></li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Sanitär</h3>
      <ul>
        <li>Cuisine équipée avec coin repas convivial</li>
        <li>Sanitaires intégrés</li>
        <li>Réservoir eaux propres 12 L (extensible Pack Shower)</li>
      </ul>

      <h3><i class="bi bi-star"></i> Serienausstattung</h3>
      <ul>
        <li>Carrosserie rigide — robustesse et isolation optimale</li>
        <li>Espace de vie optimisé pour le confort familial</li>
        <li>Nombreux rangements intégrés</li>
        <li>Option PTAC 1.150 kg → 1.300 kg disponible</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Garanties</h3>
      <ul>
        <li><strong>2 ans</strong> pièces et main-d'œuvre</li>
        <li><strong>7 ans</strong> garantie étanchéité</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 6,65 m — Breite : 2,30 m — Höhe : 2,58 m</li>
        <li><strong>PTAC :</strong> 1.150 kg (option 1.300 kg)</li>
        <li><strong>Schlafplätze :</strong> 6 — Lit transversal + lits superposés</li>
        <li><strong>Réservoir eau :</strong> 12 L (extensible avec Pack Shower)</li>
        <li><strong>Baujahr :</strong> 2026 — Gamme ALBA · Série rigide</li>
      </ul>
    `,
    accessories: [
      'Pack Safety1 Caravelair – stabilisateur + anti-lacets pour sécurité optimale en remorquage familial (250 €).',
      'Pack Cosy1 – kit confort intérieur : accessoires déco et rangement pour un habitacle chaleureux (250 €).',
      'Pack Shower complet – réservoir eau 50 L + eaux usées 30 L + chauffe-eau 5 L pour douche à bord (1.000 €).',
      'Option PTAC 1.300 kg – upgrade de charge utile pour familles avec équipements supplémentaires.',
      'Filet de sécurité lits superposés – barrière de protection pour enfants, fixation universelle lits ALBA.',
    ],
    featured: true,
  },

  // ── TINY HOUSE & MOBILHEIM ────────────────────────────────────────────
  {
    id: 22,
    slug: 'vlemmix-tiny-house-anhaenger',
    name: 'Vlemmix Tiny House Anhänger – Freiheit und Komfort – Ihr mobiles Zuhause auf Rädern',
    subtitle: 'Tiny House · 3.500 kg · Tandemachse · EU-Straßenzulassung',
    category: 'tinyhouse',
    price: 8990,
    originalPrice: 15990,
    discount: 44,
    stock: 'instock',
    badge: null,
    image: '/image/Vlemmix Tiny House Anhänger/Principal.png',
    images: [
      '/image/Vlemmix Tiny House Anhänger/Principal.png',
    ],
    specs: { Länge: '6,00 m', Breite: '2,30 m', Gewicht: '3.500 kg', Achsen: 'Tandem', Zulassung: 'CE / TÜV' },
    description: 'Le Vlemmix Tiny House Anhänger est un mobil-home sur roues entièrement aménagé (cuisine, salle de bain, chambre), sur châssis tandem galvanisé, homologué CE et circulant légalement sur routes européennes.',
    descriptionHtml: `
      <p>Le <strong>Vlemmix Tiny House Anhänger</strong> (Pays-Bas) est votre maison mobile premium : entièrement aménagée, CE-certifiée et prête à prendre la route. Profitez d'une liberté totale de localisation sans renoncer au confort d'un vrai logement.</p>

      <h3><i class="bi bi-house-heart"></i> Ausstattung</h3>
      <ul>
        <li><strong>Küche</strong> — entièrement équipée, prête à l'emploi</li>
        <li><strong>Bad</strong> — salle de bain complète intégrée</li>
        <li><strong>Schlafbereich</strong> — espace nuit confortable</li>
        <li>Éclairage LED intérieur basse consommation</li>
        <li>Raccordement 230V (courant de camping / réseau)</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Konstruktion &amp; Chassis</h3>
      <ul>
        <li><strong>Châssis</strong> : acier galvanisé à chaud — résistance maximale</li>
        <li><strong>Wanddämmung</strong> : 80 mm laine minérale / PIR — isolation thermique premium</li>
        <li><strong>Außenverkleidung</strong> : bois thermique / panneaux sandwich aluminium</li>
        <li>Fenêtres double vitrage, cadres PVC</li>
        <li>Auflaufbremse homologuée EU</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Zulassung &amp; Technik</h3>
      <ul>
        <li>CE-konform · TÜV-geprüft · EU-straßenzugelassen</li>
        <li>Kupplung 50 mm (DIN ISO 1102) + 13-poliger Stecker ISO 11446</li>
        <li>Vitesse max. 100 km/h — Permis B+E requis</li>
        <li>Garantie 2 Jahre gesetzliche Gewährleistung</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 6,00 m — Breite : 2,30 m — Höhe : 2,80 m</li>
        <li><strong>Wohnfläche :</strong> 12–15 m² (Hauptebene)</li>
        <li><strong>zGG :</strong> 3.500 kg — Leergewicht : ca. 2.400 kg — Nutzlast : 1.100 kg</li>
        <li><strong>Achsen :</strong> Tandem (2 Achsen) — Reifen 195/50 R13</li>
        <li><strong>Lieferzeit :</strong> 3–14 Werktage, kostenloser Versand</li>
      </ul>
    `,
    accessories: [
      'Kit raccordement eau – tuyau flexible 10 m + raccord rapide pour branchement réseau eau courante.',
      'Panneau solaire 400 Wp – kit solaire portable pour autonomie électrique partielle hors réseau.',
      'Béquilles de stabilisation – 4 vérins d\'appui réglables pour nivellement parfait sur terrain inégal.',
      'Câble électrique camping 25 m – rallonge CEE 230V 25 m pour raccordement sur emplacement éloigné.',
      'Antenne TV omnidirectionnelle – réception HD sans orientation manuelle, compatible raccord intérieur.',
    ],
    featured: true,
  },
  {
    id: 23,
    slug: 'tiny-house-double-loft-30m2-restposten',
    name: 'Tiny House Mobilheim DOUBLE LOFT 30m² Wohnfläche – Restposten – Freiheit und Komfort – Ihr mobiles Zuhause auf Rädern',
    subtitle: 'Tiny House · 30 m² · 3.500 kg · Tandem · Doppel-Loft · EU-Straßenzulassung',
    category: 'tinyhouse',
    price: 24990,
    originalPrice: 44990,
    discount: 44,
    stock: 'instock',
    badge: 'SALE',
    image: '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Principal.webp',
    images: [
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Principal.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-30qm-Tinyhouse-Treppe-mit-Stauraum-225x300-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-30qm-Treppe-zum-Schlafbereich-225x300-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-30qm-Wohnflaeche-Moderne-Innenausstattung-225x300-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-Inennraum-Sitzecke-im-Tiny-House-300x400-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-Vollwertig-ausgestattetes-Bad-im-Tiny-House-225x300-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-Vollwertig-ausgestattetes-Bad-mit-Dusche-225x300-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-Vollwertig-ausgestattetes-Tiny-House-300x400-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/DOPPEL-LOFT-Mobilhome-vollwertige-Kueche-225x300-1-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-1-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-2-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-3-768x1152-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-6-1024x1536-1-768x1152.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-fuer-4-Personen-DOPPEL-LOFT-Mobilheim-30qm-ohne-Terrasse-900x900-1-768x768.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-auf-Trailer-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-01-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-05-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-07-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-10-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-auf-Raedern-mit-Trailer-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-mit-Raedern-768x512-1-1.webp',
      '/image/Tiny House Mobilheim DOUBLE LOFT 30m²/Tiny-House-Loft-Mobilheim-mit-Schornstein-768x512-1-1.webp',
    ],
    specs: { Länge: '7,25 m', Breite: '2,54 m', Gewicht: '3.500 kg', Wohnfläche: '30 m²', Baujahr: '2024' },
    description: 'Restposten zum Sonderpreis : Tiny House DOUBLE LOFT vollausgebaut, 30 m² Wohnfläche, 2 Schlafbereiche im Loft, vollständige Küche, Bad mit Dusche, CE-zertifiziert, sofort bezugsfertig.',
    descriptionHtml: `
      <p>Das <strong>Tiny House Mobilheim DOUBLE LOFT 30m²</strong> ist Ihr vollausgebautes, mobiles Zuhause auf einem robusten Tandem-Stahlchassis. 30 m² Wohnfläche auf zwei Ebenen, CE-konform und EU-weit straßenzugelassen — sofort einzugsbereit.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafbereiche (DOUBLE LOFT)</h3>
      <ul>
        <li>2 separate Schlafbereiche im Doppel-Loft</li>
        <li>Zugang via Treppe mit integriertem Stauraum</li>
        <li>Loftdeckenhöhe angepasst für komfortables Schlafen</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Bad</h3>
      <ul>
        <li>Vollwertige Küchenzeile mit Spüle und Herdanschluss</li>
        <li>Kompaktbad : Dusche, WC, Waschbecken</li>
        <li>Druckwasseranlage mit Frischwasseranschluss 1/2″</li>
        <li>Abwasserleitung DN 50 mit Außenanschluss</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Konstruktion &amp; Dämmung</h3>
      <ul>
        <li>Holzrahmenbau mit Dampfsperre und Holzaußenverkleidung</li>
        <li>Wanddämmung : Mineralwolle 100 mm (WLG 035)</li>
        <li>Dachdämmung : Mineralwolle 120 mm, wärmebrückenfrei</li>
        <li>Bodenaufbau : OSB 22 mm + Unterbodendämmung 80 mm</li>
        <li>Fenster Doppelverglasung PVC, U-Wert ≤ 1,1 W/m²K</li>
        <li>Isolierte Außentür mit Mehrpunktverriegelung</li>
      </ul>

      <h3><i class="bi bi-lightning-charge"></i> Elektro &amp; Heizung</h3>
      <ul>
        <li>230V / 16A CEE-Anschluss, Unterputz-Verkabelung</li>
        <li>Elektrische Fußbodenheizung oder Infrarotheizung (vorbereitet)</li>
        <li>13-poliger Stecker ISO 11446</li>
        <li>Mehrfach-Steckdosen und Lichtschalter im gesamten Innenraum</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
      <ul>
        <li>CE-konform — EU-weit straßenzugelassen</li>
        <li>Tandem-Stahlchassis feuerverzinkt, 50 mm Kugelkupplung mit Auflaufbremse</li>
        <li>Bereifung 225/75 R16 straßenzugelassen · max. 100 km/h</li>
        <li>Führerschein Klasse B+E erforderlich</li>
        <li>Garantie 2 Jahre auf Konstruktion und Technik</li>
        <li>Lieferung per Spezialfahrzeug, 2–3 Werktage</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 7,25 m — Breite : 2,54 m — Höhe : 3,31 m</li>
        <li><strong>Wohnfläche :</strong> ca. 30 m² (EG + Doppel-Loft)</li>
        <li><strong>zGG :</strong> 3.500 kg — Eigengewicht : ca. 3.200 kg</li>
        <li><strong>Achsen :</strong> Tandem — Deckenhöhe EG : ca. 2.300 mm</li>
        <li><strong>Herkunft :</strong> EU-Produktion (Deutschland / Polen)</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Extras beim Kauf</h3>
      <ul>
        <li>Smart-Thermostat Heizungssteuerung (Alexa/Google Home) — Wert 89 €</li>
        <li>CEE 16A Anschlusskabel 10 m IP44 — Wert 67 €</li>
        <li>Wasseranschluss-Set komplett (Schlauch 10 m, Druckminderer, Frostschutz) — Wert 74 €</li>
        <li>Rauchwarnmelder &amp; CO-Melder Set (DIN EN 14604) — Wert 58 €</li>
        <li>Holzschutz-Pflege Set Außenfassade (Öl 1L + Lasur 750ml) — Wert 62 €</li>
      </ul>
    `,
    accessories: [
      'Smart-Thermostat Heizungssteuerung – WLAN-fähig, compatible Alexa/Google Home, programme hebdomadaire et mode économie d\'énergie (89 €).',
      'CEE 16A Anschlusskabel 10 m – câble haute qualité 2,5 mm², protection IP44 pour camping et emplacements (67 €).',
      'Wasseranschluss-Set Tiny House – tuyau 10 m 1/2″ + raccord rapide + réducteur de pression + vanne antigel (74 €).',
      'Rauchwarnmelder & CO-Melder Set – 2× détecteurs DIN EN 14604 + 1× détecteur CO, fixation magnétique, 10 ans batterie (58 €).',
      'Holzschutz-Pflege Set Außenfassade – huile de protection 1L + lasure 750ml + pinceau, pour bardage bois extérieur (62 €).',
    ],
    featured: true,
  },
  {
    id: 24,
    slug: 'tiny-house-loft-mobilheim-25m2-autonom',
    name: 'Tiny House Loft Mobilheim 25m² autonom (Pelletofen + Solardach) – Freiheit und Komfort – Ihr mobiles Zuhause auf Rädern',
    subtitle: 'Tiny House · 25 m² · 3.500 kg · Tandem · Pelletofen · 800 Wp Solar · EU-Straßenzulassung',
    category: 'tinyhouse',
    price: 29990,
    originalPrice: 52990,
    discount: 43,
    stock: 'instock',
    badge: null,
    image: '/image/Tiny House Loft Mobilheim 25m²/Principal.webp',
    images: [
      '/image/Tiny House Loft Mobilheim 25m²/Principal.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-auf-Trailer-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-01-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-05-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-06-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-07-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-25qm-Wohnflaeche-ganzjaehrig-bewohnbar-10-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-auf-Raedern-mit-Trailer-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-mit-Raedern-768x512-1.webp',
      '/image/Tiny House Loft Mobilheim 25m²/Tiny-House-Loft-Mobilheim-mit-Schornstein-768x512-1.webp',
    ],
    specs: { Länge: '7,20 m', Breite: '2,54 m', Gewicht: '3.500 kg', Wohnfläche: '25 m²', Heizung: 'Pelletofen 8 kW' },
    description: 'Tiny House autonome 25 m² : pelletofen 8 kW + 800 Wp solaire + batterie LiFePO4 200 Ah — entièrement hors réseau. Cuisine, salle de bain, loft, vinyle, lärche sibirisch. CE, Tandem, B+E.',
    descriptionHtml: `
      <p>Le <strong>Tiny House Loft Mobilheim 25m² autonom</strong> vous offre une vie mobile et indépendante : chauffage au pellet, toit solaire 800 Wp et batterie LiFePO4 200 Ah pour une autonomie totale, partout en Europe.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafbereich (Loft)</h3>
      <ul>
        <li>Loft-Schlafbereich im Dachgeschoss — Liegefläche ca. 1,00 m Höhe</li>
        <li>Raumhöhe Erdgeschoss : 2,40 m</li>
        <li>Wohnfläche gesamt : 25 m² (EG + Loft)</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Bad</h3>
      <ul>
        <li>Küchenzeile : 2-Flammen-Gaskochfeld + Spüle + Kühlschrank 45 L</li>
        <li>Kompaktbad : Dusche, Komposttoilette, Waschbecken</li>
        <li>Elektrischer Durchlauferhitzer 5,5 kW</li>
        <li>Frischwassertank 120 L + Druckpumpe 12V</li>
        <li>Grauwassertank 80 L (Küche + Bad)</li>
      </ul>

      <h3><i class="bi bi-sun"></i> Autonomes Energiesystem</h3>
      <ul>
        <li>Solaranlage : 2× 400 W Module = <strong>800 Wp</strong> auf Dach</li>
        <li>Batteriespeicher : <strong>LiFePO4 200 Ah / 25,6 V (5,12 kWh)</strong></li>
        <li>Reiner Sinus-Wechselrichter 2.000 W / 230 V</li>
        <li>Netzanschluss CEE 16A (optionale Netzeinspeisung)</li>
        <li>6× 230V Schuko + 2× USB-Ladedosen innen</li>
      </ul>

      <h3><i class="bi bi-fire"></i> Heizsystem</h3>
      <ul>
        <li><strong>Pelletofen 8 kW</strong> Nennleistung — nachhaltige Biomasse-Heizung</li>
        <li>Pelletbehälter ca. 30 kg Fassungsvermögen</li>
        <li>Elektrische Fußbodenheizung vorbereitet (optional)</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Konstruktion &amp; Dämmung</h3>
      <ul>
        <li>Holzrahmenbau — Außenverkleidung <strong>sibirische Lärche</strong>, witterungsbeständig</li>
        <li>Wanddämmung : 100 mm Mineralwolle + 50 mm PIR — U-Wert 0,18 W/(m²K)</li>
        <li>Bodendämmung : 150 mm Polyurethan-Hartschaum</li>
        <li>Dachdämmung : 150 mm, Satteldach mit Loftausbau</li>
        <li>Fußboden innen : Vinylboden wasserabweisend 8 mm</li>
        <li>Fenster Doppelverglasung Uw ≤ 1,3 W/(m²K) mit Rollo</li>
        <li>Isolierte Außentür mit 3-Punkt-Verriegelung</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
      <ul>
        <li>EU-Straßenzulassung, TÜV-geprüft, CE-konform</li>
        <li>Tandem-Stahlchassis feuerverzinkt · Stützlast 100 kg</li>
        <li>Auflaufbremse EU-geprüft · 50 mm Kugelkupplung</li>
        <li>Führerschein Klasse B+E · max. 100 km/h</li>
        <li>Garantie 2 Jahre Herstellergarantie</li>
        <li>Lieferzeit ca. 4–8 Wochen per Spezialfahrzeug</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 7,20 m — Breite : 2,54 m — Höhe : 3,44 m</li>
        <li><strong>Wohnfläche :</strong> 25 m² (EG + Loft) — Lofthöhe : ca. 1,00 m</li>
        <li><strong>zGG :</strong> 3.500 kg — Eigengewicht : ca. 2.800 kg</li>
        <li><strong>Achsen :</strong> Tandem — Reifen : 195/50 R13C ou 185 R14C</li>
        <li><strong>Herkunft :</strong> EU-Produktion (Deutschland / Polen)</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Extras beim Kauf (Wert 376 €)</h3>
      <ul>
        <li>Pellet-Starter-Set 25 kg DINplus + Pelletzange + Aschekasten-Liner — Wert 72 €</li>
        <li>Solar-Monitoring-Display LCD 200A mit Shunt — Wert 89 €</li>
        <li>LiFePO4 Ladeprogramm-Set 20A 12V + Balancer-Kabel — Wert 94 €</li>
        <li>Wasserfilter-Set Loft 25m² (Vorfilter + Aktivkohle + Druckminderer) — Wert 63 €</li>
        <li>Lärche-Fassaden-Pflegeset UV-Öl 1L + Lasur 750ml — Wert 58 €</li>
      </ul>
    `,
    accessories: [
      'Pellet-Starter-Set 25 kg – pellets DINplus + pince à pellets + liner bac à cendres pour première mise en chauffe (72 €).',
      'Solar-Monitoring-Display – moniteur LCD 200A avec shunt, affichage temps réel charge/solar/consommation (89 €).',
      'LiFePO4 Ladeprogramm-Set – chargeur lithium 20A 12V + câbles balancer pour entretien optimal batterie (94 €).',
      'Wasserfilter-Set Loft 25m² – préfiltre + charbon actif + réducteur de pression pour réservoir 120 L (63 €).',
      'Lärche-Fassaden-Pflegeset – huile UV protection lärche 1L + lasure 750ml + pinceau, bardage extérieur (58 €).',
    ],
    featured: true,
  },
  {
    id: 25,
    slug: 'mobilheim-tiny-house-double-loft-terrasse',
    name: 'Mobilheim Tiny House DOUBLE LOFT mit Terrasse – Freiheit und Komfort – Ihr mobiles Zuhause auf Rädern',
    subtitle: 'Tiny House · 28 m² + Terrasse 6 m² · 3.500 kg · Tandem · Dreifachverglasung · EU-Straßenzulassung',
    category: 'tinyhouse',
    price: 34990,
    originalPrice: 59990,
    discount: 42,
    stock: 'instock',
    badge: null,
    image: '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Principal.webp',
    images: [
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Principal.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-30qm-Tinyhouse-Treppe-mit-Stauraum-225x300-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-Inennraum-Sitzecke-im-Tiny-House-300x400-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-Terrasse-und-Eingang-ins-Tinyhouse-1152x1536-1-768x1024.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-Vollwertig-ausgestattetes-Bad-mit-Dusche-225x300-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-Vollwertig-ausgestattetes-Tiny-House-mit-modernen-Geraeten-225x300-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/DOPPEL-LOFT-Mobilhome-vollwertige-Kueche-225x300-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Doppel-Loft-Tinyhouse-Ausstellung-1024x683-1-768x512.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-2-768x512-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-5-1024x1536-1-768x1152.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/IKEA-Inneneinrichtung-Design-Doppel-Loft-Tinyhouse-6-1024x1536-1-700x1050-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Mobilheim-DOPPEL-LOFT-Tiny-House-mit-Terrasse-ueberdacht-1536x1152-1-1024x768-1-768x576.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Mobilheim-DOPPEL-LOFT-Tiny-House-mit-ueberdachter-Terrasse-1536x1152-1-1024x768-1-768x576.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Mobilheim-mit-ueberdachter-Terrasse-auf-Tiny-Trailer-1152x1536-1-700x933-1.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Produktbild-ALBE-Tiny-House-Mobilheim-30qm-Wohnflaeche-Doppel-Loft-900x900-1-768x768 (1).webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Wintertaugliches-Tiny-House-mit-ueberdachter-Terrasse-1152x1536-1-1-768x1024.webp',
      '/image/Mobilheim Tiny House DOUBLE LOFT mit Terrasse/Wintertaugliches-Tiny-House-mit-ueberdachter-Terrasse-1152x1536-1-768x1024.webp',
    ],
    specs: { Länge: '7,25 m', Breite: '2,54 m', Gewicht: '3.500 kg', Wohnfläche: '28 m² + 6 m²', Terrasse: 'Oui – 6 m²' },
    description: 'Mobilheim DOUBLE LOFT premium avec terrasse couverte 6 m² : 28 m² intérieurs, 2 lofts, cuisine équipée, salle de bain avec séparation en verre, triple vitrage, Lärche sibirisch. CE, TÜV, B+E.',
    descriptionHtml: `
      <p>Le <strong>Mobilheim Tiny House DOUBLE LOFT mit Terrasse</strong> est le modèle premium de la gamme : 28 m² de surface habitable, deux lofts indépendants, une terrasse extérieure couverte de 6 m², triple vitrage et revêtement en lärche sibirisch — pour un confort quatre saisons sans compromis.</p>

      <h3><i class="bi bi-moon-stars"></i> Schlafbereiche (DOUBLE LOFT)</h3>
      <ul>
        <li>2 lofts séparés — hauteur loft ca. 0,95–1,05 m</li>
        <li>Accès via escalier avec rangements intégrés</li>
        <li>Raumhöhe Erdgeschoss : 2,40 m</li>
      </ul>

      <h3><i class="bi bi-cup-hot"></i> Küche &amp; Bad</h3>
      <ul>
        <li>Einbauküche : 3-Flammen-Gaskochfeld + Spüle + Einbaukühlschrank 60 L</li>
        <li>Kompaktbad : Dusche avec séparation en verre, WC, Waschbecken, Handtuchheizung</li>
        <li>Warmwasserboiler 30 L (druckfest)</li>
        <li>Festwasseranschluss ou Frischwassertank 150 L</li>
        <li>Festabwasser ou Grauwassertank 100 L</li>
      </ul>

      <h3><i class="bi bi-tree"></i> Terrasse &amp; Außenbereich</h3>
      <ul>
        <li>Terrasse couverte intégrée <strong>6 m²</strong> — Thermoholz-Dielen 28 mm</li>
        <li>Schiebeglastür 1,80 m breite mit Fliegengitter</li>
        <li>Außensteckdose 230V + LED-Terrassenbeleuchtung</li>
      </ul>

      <h3><i class="bi bi-lightning-charge"></i> Elektro &amp; Heizung</h3>
      <ul>
        <li>CEE 16A Außenanschluss 400V — FI-Schutzschalter 30mA</li>
        <li>8× 230V Schuko + 2× USB-Ladedosen + 1× Außensteckdose</li>
        <li>Elektrische Fußbodenheizung 230V + Infrarotheizung</li>
        <li>LED-Einbaustrahler innen + LED-Terrassenbeleuchtung</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Konstruktion &amp; Dämmung</h3>
      <ul>
        <li>Holzrahmenbau KVH — Außenverkleidung <strong>sibirische Lärche</strong> vorvergraut</li>
        <li>Wanddämmung : 120 mm Mineralwolle + 60 mm PIR — U-Wert 0,16 W/(m²K)</li>
        <li>Bodendämmung : 160 mm Polyurethan-Hartschaum</li>
        <li>Dachdämmung : 160 mm — Satteldach mit 2 Loftausbauten</li>
        <li>Fußboden : Echtholz-Landhausdiele 15 mm, geölt</li>
        <li>Dreifachverglasung Uw ≤ 0,9 W/(m²K) + Insektenschutz</li>
        <li>Eingangstür Holz-Alu, 3-fach verglast, 5-Punkt-Verriegelung</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
      <ul>
        <li>EU-Straßenzulassung, TÜV-geprüft, CE-konform</li>
        <li>Tandem-Stahlchassis feuerverzinkt · Stützlast 100 kg</li>
        <li>Auflaufbremse EU-geprüft · 50 mm Kugelkupplung</li>
        <li>Führerschein Klasse B+E · max. 100 km/h</li>
        <li>Garantie 2 Jahre Herstellergarantie (Konstruktion + Ausstattung)</li>
        <li>Lieferzeit ca. 4–8 Wochen per Spezialfahrzeug</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Länge :</strong> 7,25 m (inkl. Terrasse) — Breite : 2,54 m — Höhe : 3,31 m</li>
        <li><strong>Wohnfläche :</strong> 28 m² (EG + 2 Lofts) + Terrasse 6 m²</li>
        <li><strong>zGG :</strong> 3.500 kg — Eigengewicht : ca. 2.900 kg</li>
        <li><strong>Achsen :</strong> Tandem — Reifen : 195/50 R13C ou 185 R14C</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Extras beim Kauf (Wert 344 €)</h3>
      <ul>
        <li>Terrassen-Möbel-Set : 2× Faltstuhl Thermoholz + Klapptisch 60×60 cm — Wert 97 €</li>
        <li>LED-Terrassenbeleuchtung-Set : 5m LED IP65 + 2× Solar-Wandleuchte — Wert 74 €</li>
        <li>Boiler-Wartungsset 30L : entkalkungsmittel + Anodenstab + Dichtungsset — Wert 56 €</li>
        <li>Thermoholz-Pflege Set : Terrassenöl 1L + UV-Lasur 500ml + Applikationsrolle — Wert 68 €</li>
        <li>Schiebeglastür-Pflege-Kit : Glaspfleger + Dichtungsöl + Schienentreniger — Wert 49 €</li>
      </ul>
    `,
    accessories: [
      'Terrassen-Möbel-Set – 2× chaise pliante Thermoholz + table pliante 60×60 cm pour terrasse extérieure (97 €).',
      'LED-Terrassenbeleuchtung-Set – guirlande LED 5m warmweiß IP65 + 2× applique solaire extérieure (74 €).',
      'Boiler-Wartungsset 30L – anticalcaire 2×500ml + anode de remplacement + jeu de joints pour chauffe-eau 30L (56 €).',
      'Thermoholz-Pflege Set – huile terrasse Thermoholz 1L + lasure UV 500ml + rouleau applicateur pour lames de terrasse (68 €).',
      'Schiebeglastür-Pflege-Kit – nettoyant vitre + huile joint + nettoyant rail de guidage pour porte coulissante 1,80m (49 €).',
    ],
    featured: true,
  },

  // ── BAUMASCHINEN & BAGGER ─────────────────────────────────────────────
  {
    id: 26,
    slug: 'terra-cs11-r-minibagger',
    name: 'TERRA CS11-R Minibagger – 11,7 PS Diesel, Schwenkausleger, 1.090 kg – inkl. 2 Löffel',
    subtitle: 'Minibagger · 11,7 PS · 1.090 kg · Diesel EURO 5 · Hydraulik-Schwenkausleger',
    category: 'bagger',
    price: 3990,
    originalPrice: 6490,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/TERRA CS11-R Minibagger/Principal.jpg',
    images: [
      '/image/TERRA CS11-R Minibagger/Principal.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-3-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-4-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-5-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-6-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-7-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-8-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-9-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-controls-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-dimensions-v2-768x359.jpg',
      '/image/TERRA CS11-R Minibagger/terra-cs11-r-motor-v2-768x359.jpg',
    ],
    specs: { Leistung: '11,7 PS', Gewicht: '1.090 kg', Grabtiefe: '1,63 m', Breite: '930 mm', Antrieb: 'Diesel EURO 5' },
    description: 'Le TERRA CS11-R : minipelle 11,7 PS diesel EURO 5, flèche pivotante hydraulique, 930 mm de large. Livré complet avec godet denté 40 cm + godet de tranchée 60 cm GRATUIT. Garantie 24 mois.',
    descriptionHtml: `
      <p>Le <strong>TERRA CS11-R Minibagger</strong> est un minipelle compact 11,7 PS idéal pour les travaux de terrassement, aménagement paysager et tranchées sur espaces restreints. Livré <strong>complet et monté</strong> avec deux godets inclus.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Hydraulik</h3>
      <ul>
        <li>Moteur 4-temps Diesel <strong>EURO 5</strong> — 11,7 PS</li>
        <li>Débit hydraulique : 18 L/min — Réservoir hydraulique : 16 L (huile incluse)</li>
        <li>Réservoir carburant : 12 L</li>
        <li>Refroidisseur d'huile hydraulique avec ventilateur (série)</li>
        <li>Hydraulique auxiliaire de série (raccord pour accessoires)</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li>Flèche pivotante hydraulique — rotation Oberwagen 360°</li>
        <li>Godet denté 40 cm avec dents remplaçables (série)</li>
        <li>Godet de tranchée 60 cm — <strong>GRATUIT inclus</strong></li>
        <li>Lame de nivellement renforcée</li>
        <li>Chenilles 180 mm pour stabilité optimale</li>
        <li>Capot moteur à vérins à gaz — accès maintenance rapide</li>
        <li>Cabine avec toit rabattable</li>
        <li>Projecteur de travail de série</li>
        <li>Tension chenilles par graissage</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Portée max. : 2.900 mm</li>
        <li>Profondeur de fouille max. : 1.630 mm</li>
        <li>Hauteur de fouille max. : 2.750 mm</li>
        <li>Hauteur de vidage max. : 1.820 mm</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livré <strong>complet et monté</strong> — prêt à l'emploi dès réception</li>
        <li>Délai de livraison : 6–10 Werktage (coordination téléphonique)</li>
        <li>Garantie <strong>24 mois</strong> constructeur</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Motor :</strong> 4-Takt Diesel EURO 5 — 11,7 PS</li>
        <li><strong>Betriebsgewicht :</strong> 1.090 kg</li>
        <li><strong>Breite :</strong> 930 mm — Gesamthöhe : 2.250 mm</li>
        <li><strong>Raupenbreite :</strong> 180 mm</li>
        <li><strong>Hydraulikleistung :</strong> 18 L/min</li>
      </ul>
    `,
    accessories: [
      'Grabenräumlöffel 30 cm – godet de curage étroit pour tranchées profondes, compatible attache rapide TERRA CS11-R.',
      'Tieflöffel 20 cm – godet de fouille précis pour travaux de canalisation et drainage, dents renforcées.',
      'Hydraulikhammer – brise-roche hydraulique compact, compatible circuit auxiliaire de série du CS11-R.',
      'Erdbohrer 200 mm – tarière hydraulique 200 mm pour fondations poteaux et clôtures, adaptateur inclus.',
      'Transportplatte – plaque de chargement galvanisée avec rampes pliables pour transport du CS11-R sur remorque.',
    ],
    featured: true,
  },
  {
    id: 27,
    slug: 'terra-cs10-1-minibagger',
    name: 'TERRA CS10-1 Minibagger – 18,2 PS Diesel, Schnellwechsler, 1.000 kg – inkl. 4 Löffel + 7 Zubehör GRATIS',
    subtitle: 'Minibagger · 18,2 PS · 1.000 kg · Diesel · Schnellwechsler · Hilfshydraulik 28 L/min',
    category: 'bagger',
    price: 3490,
    originalPrice: 5790,
    discount: 40,
    stock: 'instock',
    badge: null,
    image: '/image/TERRA CS10-1 Minibagger/Principal.webp',
    images: [
      '/image/TERRA CS10-1 Minibagger/Principal.webp',
      '/image/TERRA CS10-1 Minibagger/Mini-pelle-TERRA-CS10-1-1-768x388.webp',
      '/image/TERRA CS10-1 Minibagger/Mini-pelle-TERRA-CS10-1A-1.webp',
      '/image/TERRA CS10-1 Minibagger/Mini-pelle-TERRA-CS10-1A-3.webp',
      '/image/TERRA CS10-1 Minibagger/Mini-pelle-TERRA-CS10-1A.webp',
    ],
    specs: { Leistung: '18,2 PS', Gewicht: '1.000 kg', Grabtiefe: '2,10 m', Breite: '930 mm', Antrieb: 'Diesel 2-Zyl.' },
    description: 'Le TERRA CS10-1 : minipelle bestseller 18,2 PS, Schnellwechsler série, 4 godets GRATUITS (20/40/60 cm + 72 cm), hydraulique 28 L/min. Paquet accessoires 1.666 € inclus. Garantie 24 mois.',
    descriptionHtml: `
      <p>Le <strong>TERRA CS10-1 Minibagger</strong> est notre bestseller : minipelle 1 tonne polyvalente, équipée de série d'un Schnellwechsler et d'une hilfshydraulique 28 L/min, livrée avec <strong>4 godets + 7 accessoires</strong> d'une valeur totale de <strong>1.666 €</strong>.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Hydraulik</h3>
      <ul>
        <li>Moteur 2-cylindres Diesel air refroidi — <strong>13,4 kW (18,2 PS)</strong> @ 3.000 tr/min</li>
        <li>Réservoir carburant : 16 L</li>
        <li>Pression hydraulique : 210 bar — Débit hilfshydraulique : <strong>28 L/min</strong></li>
        <li>Steuerung Joystick proportionnel — LED-Scheinwerfer série</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Schnellwechsler</strong> série — changement d'accessoire sans outil en quelques secondes</li>
        <li>Rotation Oberwagen 360° — vitesse 9,5 tr/min</li>
        <li>2 vitesses de déplacement — max. 4,8 km/h</li>
        <li>Chenilles caoutchouc 250 mm / voie 680 mm</li>
        <li>Cadre de sécurité ROPS — CE-zertifiziert</li>
        <li>Grabkraft godet : 10,5 kN — Grabkraft bras : 6,8 kN</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Inklusiv-Paket GRATIS (Wert 1.666 €)</h3>
      <ul>
        <li>3× Tieflöffel Hardox 20 / 40 / 60 cm — Wert 390 €</li>
        <li>Grabenräumlöffel 72 cm — Wert 245 €</li>
        <li>Schnellwechsler (inclus série) — Wert 189 €</li>
        <li>Hydraulik-Bohrhammer béton &amp; asphalte — Wert 320 €</li>
        <li>Erdbohrer Ø 20 cm pour poteaux &amp; fondations — Wert 198 €</li>
        <li>Hydrauliköl-Wartungsset 5L + filtre + joint — Wert 79 €</li>
        <li>Kettenpflege-Spray Set 2×500ml + brosse — Wert 54 €</li>
        <li>Schutzausrüstungs-Set casque + gilet + protection auditive — Wert 67 €</li>
        <li>Wartungsplan &amp; Logbuch officiel CS10-1 — Wert 38 €</li>
        <li>Löffelzahn-Ersatzset 4× dents + boulons — Wert 86 €</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : 2.100 mm</li>
        <li>Portée max. : 4.100 mm</li>
        <li>Hauteur de vidage max. : 2.850 mm</li>
        <li>Dimensions transport (L×l×H) : 2.850 × 930 × 2.600 mm</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei toute l'Europe — 5–14 Werktage</li>
        <li>Coordination téléphonique pour rendez-vous de livraison</li>
        <li>Garantie <strong>24 mois</strong> toutes pièces et composants</li>
        <li>Support technique avant et après achat inclus</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> 1.000 kg</li>
        <li><strong>Motor :</strong> 2-Zyl. Diesel — 13,4 kW (18,2 PS) @ 3.000 U/min</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 2.100 mm / 4.100 mm</li>
        <li><strong>Hydraulikdruck :</strong> 210 bar — Durchfluss : 28 L/min</li>
        <li><strong>Kettenbreite / Spurbreite :</strong> 250 mm / 680 mm</li>
      </ul>
    `,
    accessories: [
      'Hydraulik-Bohrhammer CS10 – brise-roche hydraulique pour béton et asphalte, compatible Schnellwechsler série (320 €).',
      'Erdbohrer Ø 20 cm – tarière hydraulique pour poteaux, clôtures et fondations, adaptateur inclus (198 €).',
      'Grabenräumlöffel 72 cm – godet de curage large pour planage et talus, Hardox, Schnellwechsler (245 €).',
      'Hydrauliköl-Wartungsset – huile 5L + filtre + joint pour entretien complet du circuit hydraulique (79 €).',
      'Löffelzahn-Ersatzset – 4 dents de remplacement Hardox + boulons pour godets CS10-1 (86 €).',
    ],
    featured: true,
  },
  {
    id: 28,
    slug: 'mini-hautbagger',
    name: 'Mini-Hautbagger – Longfront 33 PS, 3.500 kg, Grabtiefe 5,2 m – inkl. Zubehörpaket 778 € GRATIS',
    subtitle: 'Hochbagger · 33 PS · 3.500 kg · Longfront 3-teilig · Grabtiefe 5,2 m · CE/ROPS',
    category: 'bagger',
    price: 2990,
    originalPrice: 4990,
    discount: 40,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Hautbagger/Principal.webp',
    images: [
      '/image/Mini-Hautbagger/Principal.webp',
      '/image/Mini-Hautbagger/H2214cd7806074acb867a8b9134abadf33.webp',
      '/image/Mini-Hautbagger/H259642c7876b40f6afbeb8e8e3300dbc3.webp',
      '/image/Mini-Hautbagger/H434592aa2f0d4261beb09eaf569b9f45h.webp',
      '/image/Mini-Hautbagger/Hca2b28ad96004d288fa157ef24f18760a.webp',
      '/image/Mini-Hautbagger/He7c57ca415bb4e2ab6b5d8a3a25d76ffi.webp',
    ],
    specs: { Leistung: '33 PS', Gewicht: '3.500 kg', Grabtiefe: '5,20 m', Reichweite: '8,50 m', Antrieb: 'Diesel 4-Zyl.' },
    description: 'Mini-Hochbagger Longfront 33 PS, 3.500 kg, portée 8,5 m, hauteur de travail 9,2 m, profondeur 5,2 m. Joystick proportionnel, ROPS/FOPS, CE. Paquet accessoires 778 € GRATUIT.',
    descriptionHtml: `
      <p>Le <strong>Mini-Hautbagger</strong> est un engin de terrassement Longfront à haute portée : 3 sections de flèche, 8,5 m de portée horizontale et 5,2 m de profondeur — idéal pour les travaux en dévers, abattage, tranchées profondes et canalisations. Livré avec un paquet accessoires d'une valeur de <strong>778 € GRATUIT</strong>.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-cylindres Diesel refroidi par eau — <strong>24,4 kW (33 PS)</strong> @ 2.400 tr/min</li>
        <li>Réservoir carburant : 40 L — Réservoir hydraulique : 60 L</li>
        <li>Pompe à pistons axiaux double — Pression max. : 280 bar</li>
        <li>Débit hilfshydraulique : 50 L/min</li>
        <li>Chenilles 400 mm / voie 1.550 mm — vitesse max. 5,5 km/h</li>
        <li>Force de traction : 28 kN</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Longfront-Ausleger &amp; Ausstattung</h3>
      <ul>
        <li>Ausleger Longfront 3-teilig — portée horizontale max. <strong>8.500 mm</strong></li>
        <li>Hauteur de travail max. : <strong>9.200 mm</strong> — Hauteur de vidage : 7.800 mm</li>
        <li>Profondeur de fouille max. : <strong>5.200 mm</strong></li>
        <li>Force de levage au bras : 2.200 kg — Capacité godet : 0,08 m³</li>
        <li>Rotation 360° continue — vitesse 9,5 tr/min</li>
        <li>Joystick proportionnel gauche + droite</li>
        <li>LED-Arbeitsscheinwerfer avant</li>
        <li>Cadre sécurité ROPS/FOPS — CE-zertifiziert</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 778 €)</h3>
      <ul>
        <li>Grabenlöffel 250 mm Hardox — Wert 198 €</li>
        <li>Böschungsglätter / Trapezlöffel 800 mm — Wert 245 €</li>
        <li>Hydrauliköl-Set 30 L HLP 46 (3×10L + entonnoir + jauge) — Wert 112 €</li>
        <li>Erstservice-Kit moteur + hydraulique (filtres, huile 5L, graisse) — Wert 134 €</li>
        <li>Baustellensicherheits-Komplettset (casque, gilet, ruban 100m, cônes, trousse) — Wert 89 €</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Typische Einsatzbereiche</h3>
      <ul>
        <li>Hangabtrag et travaux en pente — profilage et talus</li>
        <li>Kanalarbeiten — tranchées profondes avec longue portée</li>
        <li>Gebäudeabbruch — démolition à distance de sécurité</li>
        <li>Böschungsarbeiten — terrassement de berges</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Lieferung versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> 3.500 kg — Motor : 24,4 kW (33 PS)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 5.200 mm / 8.500 mm</li>
        <li><strong>Arbeitshöhe / Entladehöhe :</strong> 9.200 mm / 7.800 mm</li>
        <li><strong>Kettenbreite / Spurweite :</strong> 400 mm / 1.550 mm</li>
        <li><strong>Hydraulikdruck :</strong> 280 bar — Durchfluss : 50 L/min</li>
        <li><strong>Transportmaße :</strong> 5.800 × 1.750 × 2.550 mm</li>
      </ul>
    `,
    accessories: [
      'Grabenlöffel 250 mm Hardox – godet de tranchée renforcé pour canalisations, compatible Longfront-Ausleger (198 €).',
      'Böschungsglätter 800 mm – godet trapézoïdal pour profilage de talus et berges, finition lisse (245 €).',
      'Hydrauliköl-Set 30 L HLP 46 – 3×10L huile hydraulique axiale + entonnoir + jaugeur, compatible pompes 280 bar (112 €).',
      'Erstservice-Kit Motor + Hydraulik – filtres moteur/diesel/air, huile 10W-40 5L, filtre hydraulique, graisse articulations (134 €).',
      'Baustellensicherheits-Set – casque visière + gilet + ruban 100m + 4 cônes + trousse DIN 13164 (89 €).',
    ],
    featured: false,
  },
  {
    id: 29,
    slug: 'minibagger-bobmaster-premium-1900kg',
    name: 'Minibagger „Bobmaster Premium" – Diesel, 1900 kg mit Knickarm + Joystick Steuerung',
    subtitle: 'Minibagger · 24 PS · 1.900 kg · Knickarm · Joystick · 360° Schwenk · CE',
    category: 'bagger',
    price: 6990,
    originalPrice: 11490,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Minibagger Bobmaster Premium/Principal.jpg',
    images: [
      '/image/Minibagger Bobmaster Premium/Principal.jpg',
      '/image/Minibagger Bobmaster Premium/04_BobMaster_PREMIUM_Minibagger_CT-18_freigestellt_21166_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_01_21167_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_07_edit_21173_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_11_21175_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_12_21174_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_18_21176_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_23_21168_600x600.jpg',
      '/image/Minibagger Bobmaster Premium/BobMaster_PREMIUM_Minibagger_CT-18_29_21171_600x600.jpg',
    ],
    specs: { Leistung: '24 PS', Gewicht: '1.900 kg', Grabtiefe: '1,80 m', Reichweite: '3,50 m', Antrieb: 'Diesel 4-Takt' },
    description: 'Minibagger Bobmaster Premium : 24 PS diesel, Knickarm, 1.900 kg, Joystick bilatéral, 360°, CE. Grabtiefe 1,80 m, portée 3,50 m. Idéal espaces restreints. Garantie 2 ans. Livraison 3–14 jours.',
    descriptionHtml: `
      <p>Le <strong>Minibagger „Bobmaster Premium"</strong> combine puissance et maniabilité : 24 PS diesel, Knickarm pour travailler dans les angles impossibles, pilotage bilatéral par joystick et rotation 360° — le compacteur professionnel pour chantiers exigus.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-temps Diesel — <strong>ca. 24 PS (17,6 kW)</strong></li>
        <li>Chenilles caoutchouc — Fahrantrieb hydrostatique 2 vitesses</li>
        <li>Dimensions transport : 3.200 × 1.100 mm</li>
        <li>Capacité godet : 0,04 m³</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Knickarm</strong> — flexibilité maximale dans les zones restreintes et les angles</li>
        <li>Steuerung par <strong>Joystick</strong> gauche + droite — pilotage intuitif et précis</li>
        <li>Rotation Oberwagen <strong>360°</strong> continu</li>
        <li>CE-zertifiziert, EU-konform — sofort einsatzbereit</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>1.800 mm</strong></li>
        <li>Portée max. : <strong>3.500 mm</strong></li>
        <li>Schwenkwinkel : 360°</li>
      </ul>

      <h3><i class="bi bi-check2-circle"></i> Ideal für</h3>
      <ul>
        <li>Gartenbau — travaux de terrassement, trous de plantation, drainages</li>
        <li>Tiefbau — canalisations et fouilles de fondations</li>
        <li>Landschaftsbau — étangs, chemins, modelage de terrain</li>
        <li>Kommunen — entretien voirie et espaces verts</li>
        <li>Vermieter — location rentable sur chantiers</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 3–14 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> constructeur</li>
        <li>CE-zertifiziert, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> ca. 1.900 kg</li>
        <li><strong>Motor :</strong> 4-Takt Diesel — ca. 24 PS (17,6 kW)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 1.800 mm / 3.500 mm</li>
        <li><strong>Schwenkbereich :</strong> 360° — Steuerung : Joystick L+R</li>
        <li><strong>Transportmaße :</strong> 3.200 × 1.100 mm — Schaufelinhalt : 0,04 m³</li>
      </ul>
    `,
    accessories: [
      'Tieflöffel 40 cm – godet de fouille standard, dents Hardox remplaçables, compatible Bobmaster Premium.',
      'Grabenräumlöffel 60 cm – godet de tranchée large pour canalisations et drainages, bord tranchant renforcé.',
      'Hydraulikhammer – brise-roche hydraulique pour béton, asphalte et maçonnerie, raccord hilfshydraulique.',
      'Erdbohrer Ø 25 cm – tarière hydraulique 250 mm pour poteaux, fondations et clôtures, adaptateur inclus.',
      'Wartungsset Bobmaster – filtres moteur + diesel + air + huile 10W-40 5L + graisse articulations, kit entretien complet.',
    ],
    featured: true,
  },
  {
    id: 30,
    slug: 'minibagger-bobmaster-pro-890kg',
    name: 'Minibagger „Bobmaster Pro" – Diesel, 890 kg mit Knickarm + Schaufel-Set',
    subtitle: 'Minibagger · 15,2 PS · 890 kg · Knickarm ±65° · Schaufel-Set 3-teilig · CE/ROPS',
    category: 'bagger',
    price: 4490,
    originalPrice: 7290,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Minibagger „Bobmaster Pro“/Principal.jpg',
    images: [
      '/image/Minibagger „Bobmaster Pro“/Principal.jpg',
      '/image/Minibagger „Bobmaster Pro“/BobMaster_PRO_Minibagger_CT-10_850kg_Schaufelset_25629_600x600-1 (1).jpg',
      '/image/Minibagger „Bobmaster Pro“/Minibagger_Bobmaster_Pro_Microbagger_890_kg_Bedienen_25609-768x511.jpg',
      '/image/Minibagger „Bobmaster Pro“/Minibagger_Bobmaster_Pro_Microbagger_890_kg_Garten_und_Landschaftsbau_25613-768x511.jpg',
      '/image/Minibagger „Bobmaster Pro“/Minibagger_Bobmaster_Pro_Microbagger_890_kg_gelaendegaengig_25614-768x511.jpg',
      '/image/Minibagger „Bobmaster Pro“/Minibagger_Bobmaster_Pro_Microbagger_890_kg_robust_25627_600x600.jpg',
      '/image/Minibagger „Bobmaster Pro“/Minibagger_Bobmaster_Pro_Microbagger_890_kg_wendig_25619-768x511.jpg',
    ],
    specs: { Leistung: '15,2 PS', Gewicht: '890 kg', Grabtiefe: '1,90 m', Reichweite: '3,80 m', Antrieb: 'Diesel 2-Zyl.' },
    description: 'Bobmaster Pro : 15,2 PS diesel, Knickarm ±65°, 890 kg, Schaufel-Set 3-teilig inclus (300/150/600 mm). Joystick, ROPS, CE. Paquet accessoires 826 € GRATUIT. Garantie 2 ans.',
    descriptionHtml: `
      <p>Le <strong>Minibagger „Bobmaster Pro"</strong> est le compacteur de 1 tonne le plus polyvalent : Knickarm à déport latéral ±65°, Schaufel-Set 3 godets inclus et paquet accessoires d'une valeur de <strong>826 € GRATUIT</strong>. Idéal pour les espaces restreints et les tranchées précises.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 2-cylindres Diesel air refroidi — <strong>11,2 kW (15,2 PS)</strong> @ 3.000 tr/min</li>
        <li>Réservoir carburant : 14 L — Réservoir hydraulique : 22 L</li>
        <li>Pompe hydraulique à engrenages — Pression max. : 200 bar</li>
        <li>Débit hilfshydraulique : 22 L/min</li>
        <li>Chenilles caoutchouc 230 mm / voie 600 mm — vitesse max. 4,5 km/h</li>
        <li>Bodenfreiheit : 155 mm</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Knickarm (Offset-Ausleger)</strong> — déport latéral ±65° sans déplacer l'engin</li>
        <li>Schnellwechsler mécanique série — changement godet sans outil</li>
        <li>Rotation 360° continue — vitesse 9 tr/min</li>
        <li>Joystick ergonomique gauche + droite</li>
        <li>LED-Arbeitsscheinwerfer — ROPS-Sicherheitsrahmen</li>
        <li>CE-zertifiziert, EU-konform</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Schaufel-Set 3-teilig (im Lieferumfang)</h3>
      <ul>
        <li>Grabschaufel 300 mm</li>
        <li>Grabschaufel 150 mm (Tieflöffel étroit)</li>
        <li>Grabenräumer 600 mm</li>
      </ul>

      <h3><i class="bi bi-star"></i> Gratis-Zubehörpaket (Wert 826 €)</h3>
      <ul>
        <li>Hydraulik-Abbruchhammer Mini (38 kg, 140 J) — Wert 295 €</li>
        <li>Tieflöffel 200 mm Hardox, dents remplaçables — Wert 165 €</li>
        <li>Hydrauliköl-Set 15 L HLP 46 + entonnoir + joints — Wert 79 €</li>
        <li>Ersatz-Gummikette 230 mm, renfort acier — Wert 189 €</li>
        <li>Erstservice-Set : huile moteur 3L + filtres + graisse articulations — Wert 98 €</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>1.900 mm</strong></li>
        <li>Portée max. : <strong>3.800 mm</strong></li>
        <li>Hauteur de vidage max. : 2.600 mm</li>
        <li>Grabkraft godet : 8,3 kN — bras : 5,5 kN</li>
        <li>Dimensions transport : 3.750 × 840 × 2.585 mm</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> 890 kg — Motor : 2-Zyl. Diesel 11,2 kW (15,2 PS)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 1.900 mm / 3.800 mm</li>
        <li><strong>Knickarm :</strong> ±65° Offset — Schnellwechsler : série</li>
        <li><strong>Hydraulikdruck :</strong> 200 bar — Durchfluss : 22 L/min</li>
        <li><strong>Kette / Spur :</strong> 230 mm / 600 mm</li>
      </ul>
    `,
    accessories: [
      'Hydraulik-Abbruchhammer Mini – brise-roche 38 kg, énergie 140 J, pour béton, pierres et démolition, compatible Bobmaster Pro (295 €).',
      'Tieflöffel 200 mm Hardox – godet de tranchée étroit, dents remplaçables, compatible Schnellwechsler série (165 €).',
      'Hydrauliköl-Set 15 L HLP 46 – huile hydraulique pompe engrenages + entonnoir + joints, compatible 200 bar (79 €).',
      'Ersatz-Gummikette 230 mm – chenille caoutchouc renforcée acier pour terrain dur et gravier (189 €).',
      'Erstservice-Set Bobmaster Pro – huile moteur 10W-40 3L + filtre huile + filtre air + filtre diesel + graisse (98 €).',
    ],
    featured: true,
  },
  {
    id: 31,
    slug: 'minibagger-kt562-06-tonnen',
    name: 'Minibagger KT562 – 0.6 Tonnen | Kompakt | Benzin Motor',
    subtitle: 'Minibagger · 13 PS · 620 kg · Benzin · 360° · Breite 750 mm · CE/TÜV',
    category: 'bagger',
    price: 2490,
    originalPrice: 4190,
    discount: 41,
    stock: 'instock',
    badge: null,
    image: '/image/Minibagger KT562 – 0.6 Tonnen/Principal.png',
    images: [
      '/image/Minibagger KT562 – 0.6 Tonnen/Principal.png',
    ],
    specs: { Leistung: '13 PS', Gewicht: '620 kg', Grabtiefe: '1,50 m', Breite: '750 mm', Antrieb: 'Benzin 4-Takt' },
    description: 'KT562 : minipelle 13 PS essence, 620 kg, largeur 750 mm (passe par toute porte). Grabtiefe 1,50 m, 360°, Planierschild intégré, CE/TÜV. Paquet accessoires 190 € GRATUIT. Garantie 2 ans.',
    descriptionHtml: `
      <p>Le <strong>Minibagger KT562</strong> est le plus compact de la gamme : seulement 750 mm de large, il passe par toutes les portes standard (dès 75 cm). Son moteur essence 13 PS et ses 620 kg en font l'outil idéal pour les jardins, intérieurs et espaces ultra-restreints.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-temps Benzin — <strong>ca. 13 PS (9,5 kW)</strong> — cylindrée 389 cm³</li>
        <li>Carburant : essence sans plomb — Réservoir : 5,5 L</li>
        <li>Hydraulique à engrenages — Volume huile : 20 L</li>
        <li>Chenilles caoutchouc 180 mm — Fahrgeschwindigkeit max. 2,5 km/h</li>
        <li>Kletterfähigkeit max. 30°</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li>Transportbreite <strong>750 mm</strong> — passe par toute porte dès 75 cm</li>
        <li>Planierschild intégré — nivelage inclus</li>
        <li>Schwenkwinkel Oberwagen : <strong>360°</strong> continu</li>
        <li>Raccords hydrauliques rapides pour anbaugeräte</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
        <li>Livré avec Standardlöffel 300 mm + manuel DE</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>1.500 mm</strong></li>
        <li>Portée max. : <strong>2.600 mm</strong></li>
        <li>Longueur bras : 1.200 mm — Longueur stiel : 750 mm</li>
        <li>Capacité godet : 0,025 m³ (25 L)</li>
        <li>Dimensions transport : 2.350 × 750 × 1.800 mm</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 190 €)</h3>
      <ul>
        <li>Schmallöffel 200 mm pour tranchées câbles/tuyaux — Wert 89 €</li>
        <li>Hydrauliköl-Set 5 L HLP 46 — Wert 34 €</li>
        <li>Wartungs-Werkzeugset (clés + filtre + montage) — Wert 28 €</li>
        <li>Abdeckplane Schutz intempéries/UV pour KT562 — Wert 39 €</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> ca. 620 kg — Motor : 4-Takt Benzin 13 PS (9,5 kW)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 1.500 mm / 2.600 mm</li>
        <li><strong>Kettenbreite / Transportbreite :</strong> 180 mm / 750 mm</li>
        <li><strong>Kraftstofftank :</strong> 5,5 L — Hydrauliköl : 20 L</li>
        <li><strong>Schalldruckpegel :</strong> ca. 90 dB(A) à pleine charge</li>
      </ul>
    `,
    accessories: [
      'Schmallöffel 200 mm – godet étroit pour tranchées câbles et canalisations, compatible raccords hydrauliques KT562 (89 €).',
      'Hydrauliköl-Set 5 L HLP 46 – huile hydraulique pour circuit basse pression KT562, protection optimale (34 €).',
      'Wartungs-Werkzeugset – clés, clé filtre à huile et outils de montage, spécifiques entretien KT562 (28 €).',
      'Abdeckplane KT562 – bâche de protection intempéries, poussière et UV, coupe adaptée KT562 (39 €).',
      'Tieflöffel 150 mm – godet de fouille ultra-étroit pour câbles enterrés et drainage en espace contraint (sur devis).',
    ],
    featured: false,
  },
  {
    id: 32,
    slug: 'minibagger-kt12sd-gz-zero-turn-12-tonnen',
    name: 'Minibagger KT12SD-GZ Zero Turn – 1.2 Tonnen | Doppelgeschwindigkeit | Kompakt',
    subtitle: 'Minibagger · 18 PS · 1.200 kg · Zero Turn · Doppelgeschwindigkeit · CE/TÜV',
    category: 'bagger',
    price: 4990,
    originalPrice: 8190,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Minibagger KT12SD-GZ Zero Turn/Principal.png',
    images: [
      '/image/Minibagger KT12SD-GZ Zero Turn/Principal.png',
    ],
    specs: { Leistung: '18 PS', Gewicht: '1.200 kg', Grabtiefe: '2,00 m', Reichweite: '3,40 m', Antrieb: 'Diesel/Benzin' },
    description: 'KT12SD-GZ : minipelle 18 PS, 1.200 kg, Zero Turn (rotation sur place), 2 vitesses, planierschild hydraulique, CE/TÜV. Paquet 6 accessoires 464 € GRATUIT. Grabtiefe 2 m. Garantie 2 ans.',
    descriptionHtml: `
      <p>Le <strong>Minibagger KT12SD-GZ Zero Turn</strong> combine la technologie Zero Turn (rotation sur place sans recul) et la Doppelgeschwindigkeit (2 vitesses) pour une maniabilité inégalée dans les espaces exigus — fondations, canalisations, forêt, zone agricole.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-temps Diesel/Benzin — <strong>ca. 18 PS (13,2 kW)</strong> — cylindrée 498 cm³</li>
        <li>Réservoir carburant : 7,5 L — Volume huile hydraulique : 35 L</li>
        <li>Pompe double à engrenages hydrostatique</li>
        <li>Chenilles caoutchouc renforcées 230 mm — Bodenfreiheit 140 mm</li>
        <li>Kletterfähigkeit max. 35°</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung &amp; Besonderheiten</h3>
      <ul>
        <li><strong>Zero-Turn (GZ)</strong> — rotation sur place sans déplacement, idéal en espace restreint</li>
        <li><strong>Doppelgeschwindigkeit (SD)</strong> — Kriechgang 1,5 km/h / Schnellgang 3,5 km/h</li>
        <li>Planierschild hydraulique intégré</li>
        <li>Schnellwechsler série — compatible Tiltrotator</li>
        <li>ROPS-Schutzrahmen — Joystick ergonomique</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
        <li>Livré avec Standardlöffel 400 mm + manuel DE</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>2.000 mm</strong></li>
        <li>Portée max. : <strong>3.400 mm</strong></li>
        <li>Capacité godet : 0,045 m³ (45 L) — Löffelbreite standard : 400 mm</li>
        <li>Schwenkbereich : 360° continu</li>
        <li>Dimensions transport : 3.050 × 990 × 2.200 mm</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 464 €)</h3>
      <ul>
        <li>Schmallöffel 250 mm pour leitungsgräben et canalisations — Wert 115 €</li>
        <li>Breitlöffel 600 mm pour planage et fondations — Wert 128 €</li>
        <li>Hydrauliköl-Set 10 L HLP 46 — Wert 58 €</li>
        <li>Profi-Wartungsset KT12 (filtre huile, air, bougie, joints) — Wert 67 €</li>
        <li>Sicherheitsset : casque + gilet EN ISO 20471 + gants — Wert 44 €</li>
        <li>Abdeckplane sur-mesure KT12SD-GZ, UV-résistante — Wert 52 €</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> ca. 1.200 kg — Motor : 4-Takt 18 PS (13,2 kW)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 2.000 mm / 3.400 mm</li>
        <li><strong>Zero Turn :</strong> Oui (GZ) — Doppelgeschwindigkeit : 1,5 / 3,5 km/h</li>
        <li><strong>Kettenbreite / Transportbreite :</strong> 230 mm / 990 mm</li>
        <li><strong>Schalldruckpegel :</strong> ca. 93 dB(A) à pleine charge</li>
      </ul>
    `,
    accessories: [
      'Schmallöffel 250 mm – godet de tranchée précis pour canalisations et câbles, compatible Schnellwechsler KT12 (115 €).',
      'Breitlöffel 600 mm – godet large pour planage, décapage de surface et fouilles de fondation (128 €).',
      'Hydrauliköl-Set 10 L HLP 46 – huile haute performance pour double pompe KT12SD-GZ (58 €).',
      'Profi-Wartungsset KT12 – filtre huile + filtre air + bougie + joints, kit entretien 12 mois complet (67 €).',
      'Hydraulikhammer KT12 – brise-roche hydraulique pour béton et asphalte, compatible Schnellwechsler serie (sur devis).',
    ],
    featured: false,
  },
  {
    id: 33,
    slug: 'minibagger-kt27sd-pro-27-tonnen',
    name: 'Minibagger KT27SD PRO – 2.7 Tonnen Doppelgeschwindigkeit Profi Maschine',
    subtitle: 'Minibagger · 25,2 PS · 2.700 kg · 3-Zyl. Diesel · Doppelgeschwindigkeit · Zero Tail Swing · CE',
    category: 'bagger',
    price: 8490,
    originalPrice: 13990,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Minibagger KT27SD PRO – 2.7 Tonnen/Principal.png',
    images: [
      '/image/Minibagger KT27SD PRO – 2.7 Tonnen/Principal.png',
    ],
    specs: { Leistung: '25,2 PS', Gewicht: '2.700 kg', Grabtiefe: '2,90 m', Reichweite: '4,63 m', Antrieb: 'Diesel 3-Zyl.' },
    description: 'KT27SD PRO : 25,2 PS 3-cylindres diesel, 2.700 kg, Load-Sensing, Doppelgeschwindigkeit, Zero Tail Swing. Grabtiefe 2,90 m, portée 4,63 m. Paquet 5 accessoires 386 € GRATUIT. Garantie 2 ans.',
    descriptionHtml: `
      <p>Le <strong>Minibagger KT27SD PRO</strong> est la machine professionnelle de la gamme 2,7 tonnes : 3 cylindres diesel refroidi eau, Load-Sensing hydraulique, Doppelgeschwindigkeit et Zero Tail Swing pour une puissance maximale avec un encombrement minimal.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 3-cylindres Diesel refroidi eau — <strong>18,5 kW (25,2 PS)</strong> @ 2.200 tr/min</li>
        <li>Hubraum : 1.267 cm³ — Couple : ca. 95 Nm</li>
        <li>Réservoir carburant : 20 L — Réservoir hydraulique : 35 L</li>
        <li>Load-Sensing hydraulique — 2 circuits — Pression travail : 200 bar / Déplacement : 250 bar</li>
        <li>Débit max. : 2 × 39 L/min</li>
        <li><strong>Doppelgeschwindigkeit</strong> : Kriechgang 1,5 km/h / Schnellgang 4,0 km/h</li>
        <li>Spurbreite réglable : 980 mm (rentré) / 1.380 mm (sorti)</li>
        <li>Kettenbreite 300 mm — Bodenfreiheit ca. 280 mm</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Zero Tail Swing</strong> — passage en milieu urbain sans risque de choc</li>
        <li>Schnellwechsler hydraulique CW05 compatible — changement d'accessoire du siège</li>
        <li>ROPS/FOPS Schutzkabine avec porte coulissante, climatisable</li>
        <li>Oberwagen 360° continu — vitesse 9,6 tr/min</li>
        <li>CE-zertifiziert, EU-Maschinenrichtlinie 2006/42/EG</li>
        <li>Livré Standardlöffel 70 L + manuel DE</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>2.900 mm</strong></li>
        <li>Portée horizontale max. : <strong>4.630 mm</strong></li>
        <li>Hauteur de vidage max. : 3.440 mm</li>
        <li>Reißkraft löffelzylinder : 18,6 kN — Stielzylinder : 13,2 kN</li>
        <li>Hublast max. : ca. 1.800 kg</li>
        <li>Löffelvolumen standard : 0,07 m³ (70 L)</li>
        <li>Dimensions : 3.950 × 1.280 × 2.350 mm</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 386 €)</h3>
      <ul>
        <li>Erdlöffel 300 mm Hardox CW05 — Wert 120 €</li>
        <li>KT27SD Wartungskit 1. Service (filtres moteur/carburant/air/hydraulique + 5L huile) — Wert 95 €</li>
        <li>Baggerführer PSA-Set PRO (casque EN397 + chaussures S3 T42 + gants + gilet) — Wert 89 €</li>
        <li>Logbuch &amp; Wartungsplan KT27SD (A4, 100 pages, autocollants service) — Wert 34 €</li>
        <li>Gummiketten-Pflegeset 2-teilig (spray conditionneur 500ml + nettoyant châssis 750ml) — Wert 48 €</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> Herstellergarantie</li>
        <li>CE-zertifiziert, EU-Maschinenrichtlinie 2006/42/EG</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> 2.700 kg — Motor : 3-Zyl. Diesel 18,5 kW (25,2 PS)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 2.900 mm / 4.630 mm</li>
        <li><strong>Hydraulik :</strong> Load-Sensing 200/250 bar — 2 × 39 L/min</li>
        <li><strong>Spur (ein/aus) :</strong> 980 / 1.380 mm — Kette : 300 mm</li>
        <li><strong>Zero Tail Swing :</strong> Oui — Doppelgeschwindigkeit : 1,5 / 4,0 km/h</li>
      </ul>
    `,
    accessories: [
      'Tieflöffel 200 mm CW05 – godet de tranchée étroit Hardox pour leitungsbau et câbles, compatible schnellwechsler CW05.',
      'Hydraulikhammer KT27 – brise-roche compact ca. 200 kg, 450–900 coups/min, pour béton et roche, CW05.',
      'Erdbohrer-Anbausatz KT27 – motoréducteur hydraulique + spirale Ø 150/200/300 mm pour pieux et clôtures.',
      'Tiltrotator KT27 – rotation 360° + inclinaison ±45° pour modelage précis du terrain, CW05-kompatibel.',
      'Transportanhänger KT27 (3.500 kg) – remorque surbaissée avec rampes, zGG 3.500 kg, pour transport du KT27SD PRO.',
    ],
    featured: true,
  },
  {
    id: 34,
    slug: 'mini-bagger-cl08',
    name: 'Mini-Bagger CL08 – 14,8 PS Benzin, 800 kg, Doppelgeschwindigkeit – inkl. 4 Zubehör GRATIS',
    subtitle: 'Minibagger · 14,8 PS · 800 kg · Benzin · Doppelgeschwindigkeit · 360° · CE/TÜV',
    category: 'bagger',
    price: 3190,
    originalPrice: 5290,
    discount: 40,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger CL08/Principal.webp',
    images: [
      '/image/Mini-Bagger CL08/Principal.webp',
      '/image/Mini-Bagger CL08/01-1.png',
      '/image/Mini-Bagger CL08/02-1.png',
      '/image/Mini-Bagger CL08/03-1.png',
    ],
    specs: { Leistung: '14,8 PS', Gewicht: '800 kg', Grabtiefe: '1,75 m', Breite: '860 mm', Antrieb: 'Benzin 4-Takt' },
    description: 'Mini-Bagger CL08 : 14,8 PS essence, 800 kg, Doppelgeschwindigkeit, Planierschild 860 mm, Grabtiefe 1,75 m. Ultra-compact 860 mm, passe dès 90 cm. CE/TÜV. 4 accessoires GRATUITS 177 €.',
    descriptionHtml: `
      <p>Le <strong>Mini-Bagger CL08</strong> est l'allrounder ultra-compact de la gamme : seulement 860 mm de large, moteur essence 14,8 PS et Doppelgeschwindigkeit pour une maniabilité parfaite dans les jardins, chantiers exigus et espaces intérieurs.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-temps Benzin refroidi air — <strong>ca. 14,8 PS (10,9 kW)</strong> — cylindrée 420 cm³</li>
        <li>Carburant : essence sans plomb — Réservoir : 6,5 L</li>
        <li>Hydraulique à engrenages hydrostatique — Volume huile : 28 L</li>
        <li>Chenilles caoutchouc renforcées 200 mm — Bodenfreiheit 115 mm</li>
        <li>Kletterfähigkeit max. 30°</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Doppelgeschwindigkeit</strong> : Kriechgang 1,8 km/h / Schnellgang 3,2 km/h</li>
        <li>Transportbreite <strong>860 mm</strong> — passe par toute ouverture dès 90 cm</li>
        <li>Planierschild intégré 860 mm</li>
        <li>Schnellwechselanschlüsse pour anbaugeräte</li>
        <li>ROPS-Schutzrahmen, Joystick gauche + droite</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
        <li>Livré Standardlöffel 350 mm (35 L) + manuel DE</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>1.750 mm</strong></li>
        <li>Portée max. : <strong>2.950 mm</strong></li>
        <li>Schwenkbereich : 360° continu</li>
        <li>Capacité godet : 0,035 m³ (35 L)</li>
        <li>Dimensions transport : 2.680 × 860 × 1.980 mm</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 177 €)</h3>
      <ul>
        <li>Grabenlöffel 200 mm pour leitungsgräben et drainages — Wert 79 €</li>
        <li>Hydrauliköl-Set 5 L HLP 46 pour mise en service — Wert 34 €</li>
        <li>Wartungsset CL08 Erstservice (filtre air + huile 1L + bougie + joints) — Wert 42 €</li>
        <li>Absperrband 50m + 2 cônes de sécurité chantier — Wert 22 €</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> ca. 800 kg — Motor : 4-Takt Benzin 14,8 PS (10,9 kW)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 1.750 mm / 2.950 mm</li>
        <li><strong>Kettenbreite / Transportbreite :</strong> 200 mm / 860 mm</li>
        <li><strong>Doppelgeschwindigkeit :</strong> 1,8 / 3,2 km/h</li>
        <li><strong>Schalldruckpegel :</strong> ca. 91 dB(A) à pleine charge</li>
      </ul>
    `,
    accessories: [
      'Grabenlöffel 200 mm CL08 – godet de tranchée étroit pour canalisations et drainages, compatible schnellwechsler CL08 (79 €).',
      'Hydrauliköl-Set 5 L HLP 46 – huile hydraulique pour première mise en service et vidange CL08 (34 €).',
      'Wartungsset CL08 Erstservice – filtre air + huile moteur 1L + bougie + joints, kit entretien première inspection (42 €).',
      'Abdeckplane CL08 – bâche de protection UV et intempéries, coupe adaptée Mini-Bagger CL08 (sur devis).',
      'Tieflöffel 150 mm CL08 – godet ultra-étroit pour câbles enterrés et tranchées millimétriques (sur devis).',
    ],
    featured: false,
  },
  {
    id: 35,
    slug: 'mini-bagger-cl10s-1t',
    name: 'Mini-Bagger CL10S (1t) – Kompaktbagger für enge Baustellen & Erdarbeiten',
    subtitle: 'Minibagger · 16,5 PS · 1.000 kg · Benzin · Doppelgeschwindigkeit · 360° · CE/TÜV',
    category: 'bagger',
    price: 3790,
    originalPrice: 6190,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger CL10S (1t)/Principal.png',
    images: [
      '/image/Mini-Bagger CL10S (1t)/Principal.png',
      '/image/Mini-Bagger CL10S (1t)/02.png',
      '/image/Mini-Bagger CL10S (1t)/03.png',
    ],
    specs: { Leistung: '16,5 PS', Gewicht: '1.000 kg', Grabtiefe: '1,90 m', Breite: '950 mm', Antrieb: 'Benzin 4-Takt' },
    description: 'CL10S 1t : 16,5 PS essence, 1.000 kg, Doppelgeschwindigkeit, Planierschild 950 mm, Grabtiefe 1,90 m. Compact CL-Klasse pour chantiers exigus. CE/TÜV. 4 accessoires 237 € GRATUITS.',
    descriptionHtml: `
      <p>Le <strong>Mini-Bagger CL10S (1t)</strong> est le compacteur de la CL-Klasse conçu pour les chantiers restreints : 950 mm de large, moteur essence 16,5 PS et Doppelgeschwindigkeit pour une efficacité maximale dans les jardins, tranchées et travaux de terrassement serrés.</p>

      <h3><i class="bi bi-gear"></i> Motor &amp; Antrieb</h3>
      <ul>
        <li>Moteur 4-temps Benzin refroidi air — <strong>ca. 16,5 PS (12,1 kW)</strong> — cylindrée 452 cm³</li>
        <li>Carburant : essence sans plomb — Réservoir : 7,5 L</li>
        <li>Hydraulique à engrenages hydrostatique — Volume huile : 32 L</li>
        <li>Chenilles caoutchouc renforcées 230 mm — Bodenfreiheit 130 mm</li>
        <li>Kletterfähigkeit max. 30°</li>
      </ul>

      <h3><i class="bi bi-tools"></i> Serienausstattung</h3>
      <ul>
        <li><strong>Doppelgeschwindigkeit (S)</strong> : Kriechgang 1,8 km/h / Schnellgang 3,4 km/h</li>
        <li>Transportbreite <strong>950 mm</strong> — CL-Klasse pour espaces restreints</li>
        <li>Planierschild intégré 950 mm</li>
        <li>Schnellwechselanschlüsse pour anbaugeräte</li>
        <li>ROPS-Schutzrahmen, Joystick ergonomique gauche + droite</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
        <li>Livré Standardlöffel 380 mm (40 L) + manuel DE</li>
      </ul>

      <h3><i class="bi bi-arrows-angle-expand"></i> Arbeitsbereich</h3>
      <ul>
        <li>Profondeur de fouille max. : <strong>1.900 mm</strong></li>
        <li>Portée max. : <strong>3.200 mm</strong></li>
        <li>Schwenkbereich : 360° continu</li>
        <li>Capacité godet : 0,04 m³ (40 L)</li>
        <li>Dimensions transport : 2.820 × 950 × 2.450 mm</li>
      </ul>

      <h3><i class="bi bi-gift"></i> Gratis-Zubehörpaket (Wert 237 €)</h3>
      <ul>
        <li>Schmallöffel 250 mm pour drainages et câbles, compatible Schnellwechsler CL10S — Wert 92 €</li>
        <li>Hydrauliköl-Set 8 L HLP 46 pour Erstbetrieb et vidange — Wert 48 €</li>
        <li>Erstservice-Kit CL10S (filtre air + huile 1,5L + bougie + joints) — Wert 52 €</li>
        <li>Schutzplane CL10S sur-mesure, UV-résistante avec sangles — Wert 45 €</li>
      </ul>

      <h3><i class="bi bi-shield-check"></i> Lieferung &amp; Garantie</h3>
      <ul>
        <li>Livraison versandkostenfrei — 2–3 Werktage</li>
        <li>Garantie <strong>2 Jahre</strong> gesetzliche Gewährleistung</li>
        <li>CE-zertifiziert, TÜV-geprüft, EU-konform</li>
      </ul>

      <h3><i class="bi bi-speedometer2"></i> Technische Daten</h3>
      <ul>
        <li><strong>Betriebsgewicht :</strong> ca. 1.000 kg — Motor : 4-Takt Benzin 16,5 PS (12,1 kW)</li>
        <li><strong>Grabtiefe / Reichweite :</strong> 1.900 mm / 3.200 mm</li>
        <li><strong>Kettenbreite / Transportbreite :</strong> 230 mm / 950 mm</li>
        <li><strong>Doppelgeschwindigkeit :</strong> 1,8 / 3,4 km/h</li>
        <li><strong>Schalldruckpegel :</strong> ca. 92 dB(A) à pleine charge</li>
      </ul>
    `,
    accessories: [
      'Schmallöffel 250 mm CL10S – godet de tranchée étroit pour drainages et câbles, compatible Schnellwechsler CL10S (92 €).',
      'Hydrauliköl-Set 8 L HLP 46 – huile hydraulique premium pour Erstbetrieb et vidange CL10S (48 €).',
      'Erstservice-Kit CL10S – filtre air + huile moteur 1,5L + bougie + joints, kit entretien première inspection (52 €).',
      'Schutzplane CL10S – bâche de protection UV et intempéries, coupe sur-mesure avec sangles de fixation (45 €).',
      'Tieflöffel 300 mm CL10S – godet de fouille standard Hardox, compatible schnellwechsler, pour terrassement général (sur devis).',
    ],
    featured: false,
  },
  {
    id: 36,
    slug: 'mini-bagger-koop-cl12-12t',
    name: 'Mini-Bagger KOOP CL12 (1,2t) – Kompaktbagger für enge Baustellen',
    subtitle: 'Minibagger · 18,5 PS · 1.200 kg · Benzin · Doppelgeschwindigkeit · CE/TÜV',
    category: 'bagger',
    price: 4290,
    originalPrice: 6990,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger KOOP CL12 (1,2t)/Principal.png',
    images: [
      '/image/Mini-Bagger KOOP CL12 (1,2t)/Principal.png',
      '/image/Mini-Bagger KOOP CL12 (1,2t)/00.png',
      '/image/Mini-Bagger KOOP CL12 (1,2t)/001-2.png',
      '/image/Mini-Bagger KOOP CL12 (1,2t)/002-2.png',
      '/image/Mini-Bagger KOOP CL12 (1,2t)/003-2.png',
    ],
    specs: { Leistung: '18,5 PS (13,6 kW)', Gewicht: '1.200 kg', Grabtiefe: '2,05 m', Breite: '930 mm', Antrieb: 'Benzin 498 cm³' },
    description: 'Le CL12 KOOP (1,2t) est un minibagger 4-Takt essence ultra-compact avec double vitesse, planierschild hydraulique 930 mm, homologation CE/TÜV et GRATIS accessoires d\'une valeur de 258 €.',
    descriptionHtml: `<p>Le <strong>Mini-Bagger KOOP CL12 (1,2t)</strong> est un compacteur professionnel à moteur 4-Takt benzin de 18,5 PS, conçu pour les chantiers étroits et les travaux de terrassement précis. Livré avec Standardlöffel 400 mm, manuel DE et <strong>GRATIS accessoires (valeur 258 €)</strong>.</p>

<h3><i class="bi bi-gear"></i> Moteur &amp; Transmission</h3>
<ul>
  <li>Moteur 4-Takt Benzin — 18,5 PS (13,6 kW) — 498 cm³</li>
  <li>Réservoir carburant : 8,5 L</li>
  <li>Hydraulique : Doppelzahnradpumpe — volume 38 L (HLP46)</li>
  <li>Doppelgeschwindigkeit : 1,9 / 3,6 km/h</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>Betriebsgewicht : ca. 1.200 kg</li>
  <li>Transportbreite : 930 mm</li>
  <li>Kettenbreite : 230 mm</li>
  <li>Planierschild hydraulique : 930 mm</li>
</ul>

<h3><i class="bi bi-arrow-down-circle"></i> Performances</h3>
<ul>
  <li>Grabtiefe max. : 2.050 mm</li>
  <li>Reichweite max. : 3.450 mm</li>
  <li>Löffelbreite standard : 400 mm (45 L)</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Certification &amp; Sécurité</h3>
<ul>
  <li>ROPS (protection anti-renversement)</li>
  <li>Homologation CE &amp; TÜV</li>
  <li>Livré avec manuel d'utilisation DE</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 258 €)</h3>
<ul>
  <li>Grabenlöffel 300 mm (valeur 98 €)</li>
  <li>Hydrauliköl 10 L HLP46 (valeur 58 €)</li>
  <li>Erstservice-Kit (valeur 55 €)</li>
  <li>PSA-Set : casque, gilet, gants (valeur 47 €)</li>
</ul>`,
    accessories: [
      'Grabenlöffel 300 mm – Fouille de tranchées précise (98 €).',
      'Hydrauliköl 10 L HLP46 – Huile hydraulique de remplissage (58 €).',
      'Erstservice-Kit – Kit de premier entretien complet (55 €).',
      'PSA-Set Casque + Gilet + Gants – Equipement de protection individuelle (47 €).',
      'Standardlöffel 400 mm (45 L) – Godet standard livré avec la machine (inclus).',
    ],
    featured: false,
  },
  {
    id: 37,
    slug: 'mini-bagger-1t2-cl12-js',
    name: 'Mini-Bagger 1T2 CL 12 JS – Joystick-Steuerung | 1,2 Tonnen | Benzin',
    subtitle: 'Minibagger · 18,5 PS · 1.200 kg · Benzin · Joystick JS · CE/TÜV',
    category: 'bagger',
    price: 4490,
    originalPrice: 7390,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger 1T2 CL 12 JS/Principal.webp',
    images: [
      '/image/Mini-Bagger 1T2 CL 12 JS/Principal.webp',
    ],
    specs: { Leistung: '18,5 PS (13,6 kW)', Gewicht: '1.200 kg', Grabtiefe: '2,05 m', Breite: '930 mm', Antrieb: 'Benzin 498 cm³' },
    description: 'Le CL12 JS (1,2t) se distingue par sa commande double-joystick ergonomique pour une précision maximale. Benzin 4-Takt 18,5 PS, double vitesse, planierschild hydraulique, CE/TÜV. GRATIS accessoires valeur 240 €.',
    descriptionHtml: `<p>Le <strong>Mini-Bagger 1T2 CL 12 JS</strong> intègre le système de pilotage <strong>Joystick JS</strong> (deux joysticks gauche/droite) pour une maniabilité professionnelle sur les chantiers étroits. Moteur 4-Takt Benzin 18,5 PS, double vitesse et homologation CE/TÜV. <strong>GRATIS accessoires d'une valeur de 240 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Moteur &amp; Commande</h3>
<ul>
  <li>Moteur 4-Takt Benzin (luftgekühlt) — 18,5 PS (13,6 kW) — 498 cm³</li>
  <li>Carburant : Benzin sans plomb — Réservoir : 8,5 L</li>
  <li>Bedienkonzept : JS (Joystick-Steuerung) — deux joysticks gauche/droite</li>
  <li>Hydraulique : Doppelzahnradpumpe — 38 L</li>
  <li>Doppelgeschwindigkeit : Kriechgang 1,9 km/h / Schnellgang 3,6 km/h</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>Betriebsgewicht : ca. 1.200 kg</li>
  <li>Transportbreite : 930 mm — Transportlänge : 3.100 mm — Transporthöhe : 2.050 mm</li>
  <li>Kettenbreite : 230 mm — Bodenfreiheit : 145 mm</li>
  <li>Kletterfähigkeit max. : 30°</li>
</ul>

<h3><i class="bi bi-arrow-down-circle"></i> Performances</h3>
<ul>
  <li>Grabtiefe max. : 2.050 mm</li>
  <li>Reichweite max. : 3.450 mm</li>
  <li>Auslegerlänge : 1.560 mm — Stielarm : 990 mm</li>
  <li>Schwenkwinkel Oberwagen : 360° continu</li>
  <li>Löffelbreite standard : 400 mm (45 L)</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Certification &amp; Livraison</h3>
<ul>
  <li>CE-zertifiziert, EU-konform, TÜV-geprüft</li>
  <li>2 Jahre gesetzliche Gewährleistung</li>
  <li>Livré avec Standardlöffel 400 mm + manuel DE</li>
  <li>Délai : 2–3 Werktage, livraison gratuite</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 240 €)</h3>
<ul>
  <li>Schmallöffel 250 mm JS-kompatibel (valeur 98 €)</li>
  <li>Hydrauliköl-Set 10 L HLP 46 (valeur 58 €)</li>
  <li>Joystick-Schutzabdeckung CL12 (valeur 29 €)</li>
  <li>Erstservice-Kit CL12 JS : Luftfilter, Motoröl, Zündkerze, Dichtungssatz (valeur 55 €)</li>
</ul>`,
    accessories: [
      'Schmallöffel 250 mm JS-kompatibel – Précision pour canaux et drainages (98 €).',
      'Hydrauliköl-Set 10 L HLP 46 – Protection optimale du système hydraulique (58 €).',
      'Joystick-Schutzabdeckung CL12 – Protection des joysticks contre poussière et humidité (29 €).',
      'Erstservice-Kit CL12 JS – Luftfilter + Motoröl 1,5 L + Zündkerze + Dichtungssatz (55 €).',
      'Standardlöffel 400 mm (45 L) – Godet standard livré avec la machine (inclus).',
    ],
    featured: false,
  },
  {
    id: 38,
    slug: 'mini-bagger-leite-cl20s-2t',
    name: 'Mini-Bagger LEITE CL20S (2t) – Kompaktbagger für Baustelle & Erdarbeiten',
    subtitle: 'Minibagger · 20 PS · 2.000 kg · Diesel · Joystick · CE/TÜV',
    category: 'bagger',
    price: 6490,
    originalPrice: 10490,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger LEITE CL20S (2t)/Principal.webp',
    images: [
      '/image/Mini-Bagger LEITE CL20S (2t)/Principal.webp',
    ],
    specs: { Leistung: '20 PS (14,7 kW)', Gewicht: '2.000 kg', Grabtiefe: '2,20 m', Breite: '1.150 mm', Antrieb: 'Diesel 880 cm³' },
    description: 'Le LEITE CL20S (2t) est un compacteur professionnel diesel de 20 PS à double-circuit hydraulique, joystick gauche/droite et 360° de rotation. Grabtiefe 2,20 m, Reichweite 3,80 m, CE/TÜV. Idéal pour chantiers, Tiefbau et Gartenbau.',
    descriptionHtml: `<p>Le <strong>Mini-Bagger LEITE CL20S (2t)</strong> allie puissance et compacité : moteur 4-Takt Diesel industriel wassergekühlter de 20 PS (14,7 kW), double-circuit hydraulique et commande Joystick ergonomique. Conçu pour les professionnels du Tiefbau, Gartenbau et Landschaftsbau.</p>

<h3><i class="bi bi-gear"></i> Moteur &amp; Hydraulique</h3>
<ul>
  <li>Moteur 4-Takt Diesel (wassergekühlter Industriemotor) — 20 PS (14,7 kW) — 880 cm³</li>
  <li>Hydrauliksystem : Doppelkreis-Hydraulik</li>
  <li>Schaufelkraft : ca. 18 kN</li>
  <li>Steuerung : Joystick (gauche/droite)</li>
  <li>Fahrantrieb : Gummiketten, hydrostatisch</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>Betriebsgewicht : ca. 2.000 kg (2 Tonnen)</li>
  <li>Transportbreite : 1.150 mm</li>
  <li>Transportlänge : 3.600 mm — Transporthöhe : 2.300 mm</li>
  <li>Schwenkwinkel Oberwagen : 360° (Vollschwenk)</li>
</ul>

<h3><i class="bi bi-arrow-down-circle"></i> Performances</h3>
<ul>
  <li>Grabtiefe max. : 2.200 mm</li>
  <li>Reichweite max. : 3.800 mm</li>
  <li>Schaufelbreite standard : 400 mm</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Certification &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, EU-konform, TÜV-geprüft</li>
  <li>2 Jahre Herstellergarantie + 2 Jahre gesetzliche Gewährleistung</li>
  <li>Livraison : 3–14 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Tieflöffel 300 mm – Pour tranchées étroites et canalisations.',
      'Grabenräumer 600 mm – Nettoyage de fossés et drainages.',
      'Hydraulikhammer-Vorbereitung – Connexion hydraulique pour marteau piqueur.',
      'Hydrauliköl HLP 46 – 20 L bidon pour premier remplissage (Doppelkreis).',
      'Erstservice-Kit CL20S – Filtres, huile moteur, joint — premier entretien complet.',
    ],
    featured: false,
  },
  {
    id: 39,
    slug: 'mini-bagger-cl40s2c',
    name: 'Mini-Bagger CL40S2C – Kompaktbagger für Baustelle & Landwirtschaft',
    subtitle: 'Kompaktbagger · 36 PS · 4.000 kg · Diesel · S2C Crawler · ROPS/FOPS · CE/TÜV',
    category: 'bagger',
    price: 11990,
    originalPrice: 19490,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Mini-Bagger CL40S2C/Principal.webp',
    images: [
      '/image/Mini-Bagger CL40S2C/Principal.webp',
      '/image/Mini-Bagger CL40S2C/002-1.png',
      '/image/Mini-Bagger CL40S2C/003-1.png',
      '/image/Mini-Bagger CL40S2C/004-1.png',
      '/image/Mini-Bagger CL40S2C/005-1.png',
    ],
    specs: { Leistung: '36 PS (26,5 kW)', Gewicht: '4.000 kg', Grabtiefe: '3,20 m', Breite: '1.740 mm', Antrieb: 'Diesel 1.642 cm³' },
    description: 'Le CL40S2C (4t) est le fleuron de la gamme : 36 PS diesel, Stahlkettenfahrwerk S2C, Axialkolbenpumpe Hochdruck, ROPS/FOPS, Grabtiefe 3,20 m, Reichweite 5,40 m. GRATIS accessoires valeur 433 €.',
    descriptionHtml: `<p>Le <strong>Mini-Bagger CL40S2C</strong> est un Kompaktbagger 4 tonnes à moteur 4-Takt Diesel industriel wassergekühlter de 36 PS (26,5 kW). Son Crawler S2C à Stahlkettenfahrwerk, sa pompe Axialkolben haute pression et sa cabine ROPS/FOPS en font le choix des professionnels du Tiefbau, de l'agriculture et de la démolition. <strong>GRATIS accessoires d'une valeur de 433 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Moteur &amp; Transmission</h3>
<ul>
  <li>Moteur 4-Takt Diesel (wassergekühlter Industriemotor) — 36 PS (26,5 kW) — 1.642 cm³</li>
  <li>Réservoir carburant : 20 L</li>
  <li>Hydrauliksystem : Axialkolbenpumpe Hochdruck — 65 L</li>
  <li>Doppelgeschwindigkeit S2C : Kriechgang 2,5 km/h / Schnellgang 5,0 km/h</li>
  <li>Steuerung : Joystick ISO/SAE (ergonomique)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>Betriebsgewicht : ca. 4.000 kg (4 Tonnen)</li>
  <li>Transportbreite : 1.740 mm — Transportlänge : 4.800 mm — Transporthöhe : 2.700 mm</li>
  <li>Fahrwerk : Stahlkettenfahrwerk (verstärkte Stahlraupen) — Kettenbreite : 400 mm</li>
  <li>Planierschild hydraulique : 1.740 mm</li>
  <li>Kletterfähigkeit max. : 35°</li>
</ul>

<h3><i class="bi bi-arrow-down-circle"></i> Performances</h3>
<ul>
  <li>Grabtiefe max. : 3.200 mm</li>
  <li>Reichweite max. : 5.400 mm</li>
  <li>Auslegerlänge : 2.350 mm — Stielarm : 1.480 mm</li>
  <li>Ausleger-Schwenkwinkel : gauche 70° / droite 55°</li>
  <li>Schwenkwinkel Oberwagen : 360° continu</li>
  <li>Löffelbreite standard : 500 mm (120 L)</li>
  <li>2 × Zusatzhydraulik pour outils hydrauliques (Hochdruckkreis)</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Sécurité &amp; Certification</h3>
<ul>
  <li>ROPS/FOPS Schutzrahmen (anti-renversement + protection chutes d'objets)</li>
  <li>CE-zertifiziert, EU-konform, TÜV-geprüft</li>
  <li>2 Jahre gesetzliche Gewährleistung</li>
  <li>Livré avec Standardlöffel 500 mm + manuel DE</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 433 €)</h3>
<ul>
  <li>Tiefenlöffel 350 mm CL40 – Schnellwechsler compatible (valeur 178 €)</li>
  <li>Hydrauliköl-Set 20 L HLP 46 – Erstbetrieb-Schutz circuit 65 L (valeur 89 €)</li>
  <li>PRO-Wartungskit CL40S2C – Dieselfilter + Luftfilter + Motoröl 5 L + Dichtungssatz (valeur 112 €)</li>
  <li>Kettenpflegeset S2C – Kettenspanngel + Rostschutzöl + Reinigungsbürste Stahlraupen (valeur 54 €)</li>
</ul>`,
    accessories: [
      'Tiefenlöffel 350 mm CL40 – Schnellwechsler pour tranchées profondes et canalisations (178 €).',
      'Hydrauliköl-Set 20 L HLP 46 – Protection complète du circuit hydraulique 65 L (89 €).',
      'PRO-Wartungskit CL40S2C – Dieselfilter + Luftfilter + Motoröl 5 L + Dichtungssatz (112 €).',
      'Kettenpflegeset S2C – Kettenspanngel + Rostschutzöl + Reinigungsbürste Stahlraupen (54 €).',
      'Standardlöffel 500 mm (120 L) – Godet standard livré avec la machine (inclus).',
    ],
    featured: true,
  },

  // ── KIPPERANHÄNGER ────────────────────────────────────────────────────
  {
    id: 40,
    slug: 'kippanhaenger-2500kg-doppelachse',
    name: 'Kippanhänger 2500 kg – Doppelachse, Hochplane & verstärkte Bordwände | Top-Angebot',
    subtitle: 'Kipperanhänger · 2.500 kg · 1.750 kg Nutzlast · Hydraulisch · Doppelachse · COC',
    category: 'kipper',
    price: 2490,
    originalPrice: 3990,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Kippanhänger 2500 kg – Doppelachse/Principal.png',
    images: [
      '/image/Kippanhänger 2500 kg – Doppelachse/Principal.png',
      '/image/Kippanhänger 2500 kg – Doppelachse/euro-1-768x512.png',
      '/image/Kippanhänger 2500 kg – Doppelachse/euro2-1-768x512.png',
      '/image/Kippanhänger 2500 kg – Doppelachse/euro4-1-768x512.png',
      '/image/Kippanhänger 2500 kg – Doppelachse/euro5-1-768x512.png',
      '/image/Kippanhänger 2500 kg – Doppelachse/euro6-1-768x512.png',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.750 kg', Achsen: '2 (Doppelachse)', Kippung: 'Hydraulisch', Material: 'Verzinkter Stahl' },
    description: 'Profi-Kippanhänger 2500 kg zGG | 1750 kg Nutzlast – Doppelachse, hydraulisches Kippen, Hochplane 120 cm (PVC 650g/m²), verstärkte abnehmbare Bordwände. COC-Zulassung inklusive. 7 GRATIS Zubehörteile im Wert von 869,93 €.',
    descriptionHtml: `<p>Le <strong>Kippanhänger 2500 kg – Doppelachse</strong> est un remorque-benne professionnelle à double essieu avec système de bâchage hydraulique, bâche haute PVC 650 g/m², bordures amovibles renforcées et homologation COC toute Europe. <strong>7 accessoires GRATIS d'une valeur de 869,93 €</strong> inclus exclusivement à l'achat.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Structure</h3>
<ul>
  <li>Kippsystem hydraulique — déchargement en quelques secondes</li>
  <li>Structure acier galvanisé anti-corrosion</li>
  <li>Doppelachse — stabilité maximale en charge</li>
  <li>Auflaufbremsanlage (freinage inertiel légal)</li>
  <li>Attelage standard 50 mm — compatible tous véhicules</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions</h3>
<ul>
  <li>Nutzlänge (innen) : 260 cm — Nutzbreite (innen) : 150 cm</li>
  <li>Bordwandhöhe : 40 cm standard / 80 cm avec Aufsatz</li>
  <li>Gesamtlänge : 390 cm — Gesamtbreite : 160 cm</li>
  <li>Innenhöhe unter Plane : 120 cm</li>
  <li>zGG : 2.500 kg — Nutzlast : 1.750 kg — Leergewicht : 650 kg</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Livraison standard</h3>
<ul>
  <li>Hochplane avec Spriegelgestell (imperméable, PVC 650 g/m²)</li>
  <li>Bordwandaufsatz extensible 40 → 80 cm</li>
  <li>Ersatzrad avec support inclus</li>
  <li>Stützrad automatique, points d'arrimage intérieurs</li>
  <li>LED-Rückleuchten norme EU</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>COC – Zulassung toute Europe (immédiatement immatriculable)</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 6–10 Werktage avec Terminvereinbarung, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 869,93 €)</h3>
<ul>
  <li>Alu-Rampen (valeur 149,99 €)</li>
  <li>Ersatzrad (valeur 99,99 €)</li>
  <li>PVC-Hochplane 650 g/m² (valeur 199,99 €)</li>
  <li>Verzurrgurten (valeur 59,99 €)</li>
  <li>Bordwand-Aufsatz (valeur 139,99 €)</li>
  <li>Sicherheitsschloss (valeur 49,99 €)</li>
  <li>LED-Set 7-pol. (valeur 69,99 €)</li>
</ul>`,
    accessories: [
      'Alu-Rampen – Rampes d\'accès aluminium pour chargement de machines (149,99 €).',
      'PVC-Hochplane 650 g/m² – Bâche haute imperméable UV-résistante 120 cm (199,99 €).',
      'Bordwand-Aufsatz – Extension bordures 40 → 80 cm (139,99 €).',
      'Ersatzrad – Roue de secours avec support (99,99 €).',
      'LED-Set 7-pol. – Kit feux arrière LED norme EU (69,99 €).',
    ],
    featured: true,
  },
  {
    id: 41,
    slug: 'anhaenger-kipper-debon-p33-black-edition',
    name: 'Anhänger Kipper Debon P 3.3 Black Edition ZGG 3500 kg',
    subtitle: 'Dreiseitenkipper · 3.500 kg · 2.610 kg Nutzlast · 12V Elektrohydraulik · Black Edition',
    category: 'kipper',
    price: 3290,
    originalPrice: 5290,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper Debon P 3.3 Black Edition/Principal.webp',
    images: [
      '/image/Anhänger Kipper Debon P 3.3 Black Edition/Principal.webp',
      '/image/Anhänger Kipper Debon P 3.3 Black Edition/41TROIS-937x625-1-768x512.webp',
      '/image/Anhänger Kipper Debon P 3.3 Black Edition/Pw33_DebonTrailers_rampes_800-768x512.webp',
      '/image/Anhänger Kipper Debon P 3.3 Black Edition/41TROIS-937x625-1-600x400__1_-removebg-preview-1.png',
    ],
    specs: { zGG: '3.500 kg', Nutzlast: '2.610 kg', Kippung: 'Dreiseitenkipper 45°', Hydraulik: '12V Elektrohydraulik', Bereifung: '225/75 R16C' },
    description: 'Debon P 3.3 Black Edition ZGG 3500 kg – Dreiseitenkipper (hinten, links & rechts), 12V Elektrohydraulik mit Fernbedienung, Riffelblech 3 mm, Full-LED, Gummifederachse. GRATIS Zubehör 182 € inclus.',
    descriptionHtml: `<p>Le <strong>Debon P 3.3 Black Edition</strong> (ZGG 3500 kg) est un Dreiseitenkipper professionnel avec hydraulique électrique 12V, télécommande câblée et finition Black Edition noir mat / anthracite. Conçu pour les pros et les particuliers exigeants. <strong>GRATIS accessoires d'une valeur de 182 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>Dreiseitenkipper : déversement arrière, gauche &amp; droite — angle jusqu'à 45°</li>
  <li>Hydraulikaggregat : 12V Elektrohydraulik</li>
  <li>Hydrauliksteuerung : Fernbedienung câblée</li>
  <li>Auflaufbremse hydraulique + Feststellbremse manuelle</li>
  <li>Kugelkupplung K80 (50 mm) — stecker 13-pol. ISO</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 3.500 kg — Nutzlast : ca. 2.610 kg — Leergewicht : ca. 890 kg</li>
  <li>Ladefläche : 330 × 180 cm — Bordwandhöhe : 35 cm</li>
  <li>Gesamtlänge : ca. 520 cm — Gesamtbreite : ca. 210 cm</li>
  <li>Bereifung : 225/75 R16C — Felgen Stahl 5-Loch</li>
  <li>Federung : Gummifederachse — 2 Achsen (1.800 kg/Achse)</li>
</ul>

<h3><i class="bi bi-palette"></i> Black Edition &amp; Construction</h3>
<ul>
  <li>Rahmenmaterial : Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahl verzinkt Riffelblech 3 mm</li>
  <li>Bordwände : Stahlwände noir pulverbeschichtet</li>
  <li>Lackierung : Black Edition – noir mat / anthracite</li>
  <li>Beleuchtung : Full-LED StVZO-konform</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Livraison</h3>
<ul>
  <li>EU-Typzulassung, TÜV-konform, StVZO</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 3–7 Werktage, versandkostenfrei</li>
  <li>Livré monté avec LED, hydraulique et documents de conformité</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 182 €)</h3>
<ul>
  <li>Radschloss antivol pour jantes 5 trous acier trempé (valeur 39 €)</li>
  <li>Sicherheitskette Stahl certifiée CE (valeur 29 €)</li>
  <li>Schutzplane imperméable 330×180 cm UV-résistante + sangles (valeur 65 €)</li>
  <li>Werkzeugset Montage avec clé dynamométrique pour montage roue (valeur 49 €)</li>
</ul>`,
    accessories: [
      'Radschloss antivol – Jante 5 trous acier trempé, sécurité renforcée (39 €).',
      'Sicherheitskette Stahl – Chaîne de sécurité CE pour attelage (29 €).',
      'Schutzplane 330×180 cm – Bâche imperméable UV-résistante + sangles (65 €).',
      'Werkzeugset Montage – Kit avec clé dynamométrique pour montage roue (49 €).',
      'Dreiseitenkipper avec télécommande 12V – Inclus de série (inclus).',
    ],
    featured: true,
  },
  {
    id: 42,
    slug: 'kipperanhänger-bateson-263h',
    name: 'KIPPERANHÄNGER BATESON 263 H – Robuster Dreiseitenkipper | 2.600 kg | Tandem',
    subtitle: 'Kipperanhänger · 2.600 kg · 2.000 kg Nutzlast · 3-Seiten-Kipper · 12V · TÜV',
    category: 'kipper',
    price: 1890,
    originalPrice: 3090,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/KIPPERANHÄNGER BATESON 263 H/Principal.png',
    images: [
      '/image/KIPPERANHÄNGER BATESON 263 H/Principal.png',
      '/image/KIPPERANHÄNGER BATESON 263 H/trail1-1.webp',
      '/image/KIPPERANHÄNGER BATESON 263 H/trail1-2.webp',
    ],
    specs: { zGG: '2.600 kg', Nutzlast: '2.000 kg', Achsen: '2 (Tandem)', Kippung: '3-Seiten 50°', Pumpe: '12V Elektrohydraulik' },
    description: 'Bateson 263 H – Dreiseitenkipper 2.600 kg zGG, 2.000 kg Nutzlast, Tandemachse, 12V Elektrohydraulik, kippwinkel 50°, Alu/Stahl-Bordwände, LED 7-pol., EU-Typgenehmigung TÜV-konform.',
    descriptionHtml: `<p>Le <strong>KIPPERANHÄNGER BATESON 263 H</strong> est un Dreiseitenkipper compact à tandem, pensé pour les professionnels et les particuliers exigeants. Avec ses 2.600 kg de zGG, 2.000 kg de Nutzlast et son système électrohydraulique 12V, il s'adapte à tous les chantiers.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>3-Seiten-Kipper (arrière, gauche &amp; droite) — angle jusqu'à 50°</li>
  <li>Pompe électrohydraulique 12V (Elektrohydraulische Pumpe)</li>
  <li>Commande électrique ou manuelle</li>
  <li>Auflaufbremse — Kugelkupplung Ø 50 mm</li>
  <li>Stecker LED 7-poliger</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 2.600 kg — Nutzlast : ca. 2.000 kg — Leergewicht : ca. 600 kg</li>
  <li>Laderaum : 2.200 × 1.340 mm — Bordwandhöhe : 300 mm</li>
  <li>Gesamtlänge : 2.630 mm — Gesamtbreite (außen) : 1.580 mm</li>
  <li>Bereifung : 195/50 R13C — 2 Achsen (Tandemachse)</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction</h3>
<ul>
  <li>Rahmenmaterial : Stahl verzinkt (St52)</li>
  <li>Bordwände : Aluminium / Stahl verzinkt</li>
  <li>Farbe : Verzinkt / Grau</li>
  <li>Stützrad klappbar — Stützlast max. 100 kg</li>
  <li>LED-Beleuchtung StVZO-konform</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>EU-Typgenehmigung, TÜV-konform, StVZO</li>
  <li>2 Jahre gesetzliche Gewährleistung</li>
  <li>Livraison : 3–7 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Schutzplane sur mesure 220×134 cm – Bâche imperméable UV-résistante pour Bateson 263 H.',
      'Bordwand-Aufsatz 300 mm – Rehausse bordures pour volume supplémentaire.',
      'Verzurrgurten 4-er Set – 4 sangles d\'arrimage 2 t pour charges lourdes.',
      'Radschloss antivol – Protection roue pour jante Stahl 195/50 R13C.',
      'Ersatzrad 195/50 R13C – Roue de secours avec support de fixation.',
    ],
    featured: false,
  },
  {
    id: 43,
    slug: 'anhaenger-kipper-750kg-gitteraufsatz',
    name: 'Anhänger Kipper 750 kg mit Gitteraufsatz – Dreiseitenkipper | 12V | Klasse B',
    subtitle: 'Kipperanhänger · 750 kg · 480 kg Nutzlast · Gitteraufsatz · 3-Seiten · 12V · TÜV',
    category: 'kipper',
    price: 890,
    originalPrice: 1490,
    discount: 40,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper 750 kg mit Gitteraufsatz/Principal.png',
    images: [
      '/image/Anhänger Kipper 750 kg mit Gitteraufsatz/Principal.png',
    ],
    specs: { zGG: '750 kg', Nutzlast: '480 kg', Achsen: '2 (Tandem)', Kippung: '3-Seiten 45°', Gitteraufsatz: '40 cm (total 70 cm)' },
    description: 'Kipper 750 kg avec Gitteraufsatz 40 cm amovible — Dreiseitenkipper 12V Elektrohydraulik, 255×125 cm, tandem Gummifederachse, acier feuerverzinkt, LED ECE-R48. Permis B suffisant. GRATIS 124 €.',
    descriptionHtml: `<p>Le <strong>Anhänger Kipper 750 kg mit Gitteraufsatz</strong> est un Dreiseitenkipper compact idéal pour les particuliers et professionnels. Grille amovible à schnellverschlüsse (+40 cm de hauteur), hydraulique 12V et acier feuerverzinkt — permis B suffisant. <strong>GRATIS accessoires d'une valeur de 124 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>3-Seiten-Kipper (arrière, gauche &amp; droite) — kippwinkel jusqu'à 45°</li>
  <li>Hydraulikaggregat : 12V Elektrohydraulikpumpe</li>
  <li>Hydrauliksteuerung : Fernbedienung câblée</li>
  <li>Auflaufbremse (mécanique) — Kugelkupplung 50 mm — stecker 13-pol. ISO</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 750 kg — Nutzlast : ca. 480 kg — Leergewicht : ca. 270 kg</li>
  <li>Ladefläche : 255 × 125 cm (3,19 m²) — Bordwandhöhe : 30 cm</li>
  <li>Gitteraufsatz : ca. 40 cm → hauteur totale ca. 70 cm</li>
  <li>Gesamtlänge : ca. 415 cm — Gesamtbreite : ca. 153 cm</li>
  <li>Bereifung : 155/70 R13C ou 165 R13C — Felgen Stahl 4-Loch verzinkt</li>
  <li>2 Achsen Tandem — Gummifederachse (750 kg par essieu)</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction &amp; Gitteraufsatz</h3>
<ul>
  <li>Rahmenmaterial : Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahlriffelblechboden feuerverzinkt</li>
  <li>Bordwände : Stahl pulverbeschichtet, 3-seitig klappbar</li>
  <li>Gitteraufsatz : Stahl verzinkt — fixation à schnellverschlüsse, amovible</li>
  <li>LED-Beleuchtung ECE-R48 / StVZO-konform</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Facilité</h3>
<ul>
  <li>Fahrzeugklasse O1 — Führerschein Klasse B suffisant</li>
  <li>EU-Typzulassung, TÜV-konform, CE-zertifiziert, StVZO</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 124 €)</h3>
<ul>
  <li>Sicherheitskette Stahl CE / StVZO pour attelage 50 mm (valeur 25 €)</li>
  <li>Schutzplane 255×125 cm imperméable UV avec sangles (valeur 35 €)</li>
  <li>Radschloss antivol jante 4 trous acier trempé (valeur 35 €)</li>
  <li>Spanngurt-Set 4-er — sangles d'arrimage 500 kg (valeur 29 €)</li>
</ul>`,
    accessories: [
      'Sicherheitskette Stahl CE – Chaîne de sécurité attelage 50 mm (25 €).',
      'Schutzplane 255×125 cm – Bâche imperméable UV-résistante avec sangles (35 €).',
      'Radschloss antivol – Jante Stahl 4 trous, acier trempé (35 €).',
      'Spanngurt-Set 4-er – 4 sangles d\'arrimage 500 kg pour Gitteraufsatz (29 €).',
      'Gitteraufsatz Zusatzset – Pièces de fixation Schnellverschluss de rechange.',
    ],
    featured: false,
  },
  {
    id: 44,
    slug: 'anhaenger-kipper-brenderup-2500kg',
    name: 'Anhänger Kipper 2.50m / 2500 kg Elektrische Pumpe BRENDERUP',
    subtitle: 'Kipperanhänger · BRENDERUP · 2.500 kg · 1.800 kg Nutzlast · 12V Elektropumpe · TÜV',
    category: 'kipper',
    price: 2790,
    originalPrice: 4490,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/Principal.webp',
    images: [
      '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/Principal.webp',
      '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/joom12-937x663-1-768x543.webp',
      '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/joom13-937x639-1-768x524.webp',
      '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/joom14-937x611-1-768x501.webp',
      '/image/Anhänger Kipper 2.50m  2500 kg BRENDERUP/joom15-937x309-1-768x253.webp',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.800 kg', Achsen: '2 (Tandem)', Kippung: '12V Elektropumpe 45°', Ladefläche: '2,50 × 1,50 m' },
    description: 'BRENDERUP Kipper 2500 kg — 1.800 kg Nutzlast, ladefläche 250×150 cm, 12V Elektrohydraulikpumpe + Fernbedienung, acier feuerverzinkt + pulverbeschichtet, LED 13-pol., CE/TÜV. GRATIS 174 €.',
    descriptionHtml: `<p>Le <strong>Anhänger Kipper BRENDERUP 2500 kg</strong> associe la qualité nordique à une hydraulique électrique 12V pour un déchargement sans effort. Ladefläche 250×150 cm (3,75 m²), acier feuerverzinkt, finition anthracite/noir. <strong>GRATIS accessoires d'une valeur de 174 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Hydraulique &amp; Kippung</h3>
<ul>
  <li>Kippsystem : Elektrohydraulikpumpe 12V + Fernbedienung</li>
  <li>Hydraulikzylinder einfachwirkend, wartungsarm</li>
  <li>Kippwinkel : 45°</li>
  <li>Auflaufbremse avec Abreißsicherung + Feststellbremse manuelle</li>
  <li>Kugelkupplung Ø 50 mm — stecker 13-pol. LED</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 2.500 kg — Nutzlast : ca. 1.800 kg — Leergewicht : ca. 700 kg</li>
  <li>Ladefläche : 2.500 × 1.500 mm (3,75 m²) — Bordwandhöhe : 300 mm</li>
  <li>Gesamtlänge : ca. 4.100 mm — Gesamtbreite : ca. 1.850 mm</li>
  <li>Bereifung : 195/55 R10 ou 195/60 R12 — Felgen Stahl 4-Loch</li>
  <li>2 Achsen Tandem gummigefedert</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction BRENDERUP</h3>
<ul>
  <li>Rahmen : Hochfester Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahl verzinkt 3 mm</li>
  <li>Bordwände : Stahl feuerverzinkt</li>
  <li>Finition : Anthrazit / Schwarz (feuerverzinkt + pulverbeschichtet)</li>
  <li>Stützrad schwenkbar — LED-Rücklichter ECE</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-Qualitätsstandard</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
  <li>Notice multilingue incluse</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 174 €)</h3>
<ul>
  <li>Elektrik-Wartungsset 12V : joints + Hydrauliköl 1 L + connecteurs câble (valeur 49 €)</li>
  <li>Diebstahlschutz-Schloss Kugelkupplung Ø 50 mm acier trempé (valeur 35 €)</li>
  <li>Zurrgurt-Set 4-teilig 5 m × 25 mm, 500 kg/gurt (valeur 38 €)</li>
  <li>Schutzplane 250×150 cm imperméable UV avec Spannschnüre (valeur 52 €)</li>
</ul>`,
    accessories: [
      'Elektrik-Wartungsset 12V – Joints + Hydrauliköl 1 L + connecteurs pour pompe BRENDERUP (49 €).',
      'Diebstahlschutz-Schloss – Acier trempé pour Kugelkupplung Ø 50 mm (35 €).',
      'Zurrgurt-Set 4-er 5 m × 25 mm – Sangles d\'arrimage 500 kg/gurt (38 €).',
      'Schutzplane 250×150 cm – Bâche UV imperméable sur mesure avec cordes (52 €).',
      'Bordwandaufsatz 300 mm – Rehausse bordures pour volume supplémentaire.',
    ],
    featured: false,
  },
  {
    id: 45,
    slug: 'anhaenger-kipper-böckmann-dk-al-2516-27p',
    name: 'Anhänger Kipper Böckmann DK-AL 2516/27 P – Aluminium Dreiseitenkipper | 2.700 kg',
    subtitle: 'Kipperanhänger · Böckmann · 2.700 kg · 2.170 kg Nutzlast · Alu AL-Serie · 12V · TÜV',
    category: 'kipper',
    price: 3490,
    originalPrice: 5590,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper Böckmann DK-AL 251627 P/Principal.webp',
    images: [
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/Principal.webp',
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/dk-al_2516_introseite_cmyk-rzimowrpcpcqwmg02318_200x200.webp',
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/dk-al_heck-deichsel-rechts_gekippt_cmyk-rzviommxffenymgc506a_200x200.webp',
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/dreiseitenkipper_kampagnenperspektive_cmyk_rz5mpqm4ulwopmm7c629_200x200.webp',
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/dreiseitenkipper_kampagnenperspektive_cmyk_rz5mpqm4ulwopmm7c629_200x200 (1).webp',
      '/image/Anhänger Kipper Böckmann DK-AL 251627 P/dk-st_stahleckrungen_cmykvbrahw7w0e7yn6df06_200x200-150x134.webp',
    ],
    specs: { zGG: '2.700 kg', Nutzlast: '2.170 kg', Achsen: '2 (Tandem AL-KO)', Kippung: 'Dreiseitenkipper 50°', Aufbau: 'Aluminium eloxiert' },
    description: 'Böckmann DK-AL 2516/27 P — Dreiseitenkipper 2.700 kg, 2.170 kg Nutzlast, alu eloxiert, AL-KO Gummifederachse, Kugelkupplung AK 270 K80, 12V Elektrohydraulik, LED ECE-R48. GRATIS 252 €.',
    descriptionHtml: `<p>Le <strong>Böckmann DK-AL 2516/27 P</strong> est le kipperanhänger premium de la série Aluminium-Leichtbau : 2.700 kg de zGG, 2.170 kg de Nutzlast, plancher et bordures en aluminium eloxiert pour un poids propre record d'environ 530 kg. Qualité Böckmann Fahrzeugwerke, made in Germany. <strong>GRATIS accessoires d'une valeur de 252 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Hydraulique &amp; Kippung</h3>
<ul>
  <li>Dreiseitenkipper (arrière, gauche &amp; droite) — kippwinkel jusqu'à 50°</li>
  <li>Hydraulikaggregat : 12V Elektrohydraulikpumpe + Fernbedienung câblée</li>
  <li>AL-KO Auflaufbremse hydraulique + Feststellbremse manuelle Handkurbelbremse</li>
  <li>AL-KO Kugelkupplung AK 270 (K80) — stecker 13-pol. ISO</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 2.700 kg — Nutzlast : ca. 2.170 kg — Leergewicht : ca. 530 kg</li>
  <li>Ladefläche : 250 × 160 cm — Bordwandhöhe : 30 cm (60 cm avec Aufsatzrahmen)</li>
  <li>Gesamtlänge : ca. 445 cm — Gesamtbreite : ca. 193 cm — Gesamthöhe : ca. 115 cm</li>
  <li>Bereifung : 185 R14C (LT) — Felgen Aluminium-Leichtmetall 5-Loch</li>
  <li>2 Achsen Tandem — AL-KO Gummifederachse</li>
</ul>

<h3><i class="bi bi-trophy"></i> Aluminium AL-Serie Böckmann</h3>
<ul>
  <li>Bordwände &amp; Boden : Aluminium eloxiert — rostfrei &amp; leicht</li>
  <li>Rahmen : Stahl feuerverzinkt</li>
  <li>Surface : Pulverbeschichtet, wetterfest</li>
  <li>LED-Vollbeleuchtung ECE-R48 / StVZO-konform</li>
  <li>Stützrad klappbar schwenkbar — Klappstützen beidseitig</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>EU-Typzulassung, TÜV-konform, StVZO, CE-zertifiziert</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 252 €)</h3>
<ul>
  <li>Radschloss antivol pour jantes Aluminium 5 trous (valeur 39 €)</li>
  <li>Sicherheitskette Stahl CE pour attelage K80 (valeur 29 €)</li>
  <li>Schutzplane 250×160 cm UV imperméable avec sangles (valeur 55 €)</li>
  <li>Montagewerkzeug-Set avec clé dynamométrique jantes alu (valeur 49 €)</li>
  <li>LED-Rücklichtset de rechange StVZO-konform (valeur 45 €)</li>
  <li>Aluminium-Pflegeset – nettoyant et protecteur pro pour alu (valeur 35 €)</li>
</ul>`,
    accessories: [
      'Radschloss antivol – Jante Aluminium 5 trous acier trempé (39 €).',
      'Schutzplane 250×160 cm – Bâche UV imperméable avec sangles sur mesure (55 €).',
      'LED-Rücklichtset de rechange – StVZO-konform, waterproof (45 €).',
      'Aluminium-Pflegeset – Nettoyant + protecteur professionnel pour alu (35 €).',
      'Aufsatzrahmen 30 cm – Rehausse bordures alu pour passer de 30 à 60 cm.',
    ],
    featured: true,
  },
  {
    id: 46,
    slug: 'anhaenger-kipper-debon-pw3-lux-3500kg',
    name: 'Anhänger Kipper Debon PW3 LUX 3500 kg – AR01369 | Dreiseitenkipper Premium',
    subtitle: 'Kipperanhänger · Debon LUX · 3.500 kg · 2.630 kg Nutzlast · 12V + Handpumpe · AL-KO',
    category: 'kipper',
    price: 3990,
    originalPrice: 6390,
    discount: 38,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/Principal.png',
    images: [
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/Principal.png',
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/1499-1-768x313.webp',
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/1501-768x513.webp',
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/1506-1-768x600.webp',
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/1507-1-768x499.webp',
      '/image/Anhänger Kipper Debon PW3 LUX 3500 kg/1513-1-768x509.webp',
    ],
    specs: { zGG: '3.500 kg', Nutzlast: '2.630 kg', Achsen: '2 (AL-KO Tandem)', Kippung: 'Dreiseitenkipper 50°', Hydraulik: '12V + Handpumpe LUX' },
    description: 'Debon PW3 LUX AR01369 — Dreiseitenkipper 3.500 kg, 2.630 kg Nutzlast, 300×175 cm, 12V Elektrohydraulik + Handpumpe, AL-KO Gummifederachse, Full-LED ECE-R48, LUX Hochglanz. GRATIS 251 €.',
    descriptionHtml: `<p>Le <strong>Debon PW3 LUX 3500 kg (AR01369)</strong> est le fleuron de la gamme Debon (Groupe Pommier) : Dreiseitenkipper premium avec hydraulique 12V + Handpumpe de secours, finition LUX Hochglanz multicouche et AL-KO sur chaque essieu. <strong>GRATIS accessoires d'une valeur de 251 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Hydraulique LUX &amp; Kippung</h3>
<ul>
  <li>Dreiseitenkipper (arrière, gauche &amp; droite) — kippwinkel jusqu'à 50°</li>
  <li>Hydraulikaggregat : 12V Elektrohydraulikpumpe LUX + Handpumpe de secours</li>
  <li>Hydrauliktank intégré acier 3 L</li>
  <li>AL-KO Auflaufbremse hydraulique + Feststellbremse Handkurbelbremse</li>
  <li>Kugelkupplung K80 (50 mm) — stecker 13-pol. ISO</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 3.500 kg — Nutzlast : ca. 2.630 kg — Leergewicht : ca. 870 kg</li>
  <li>Ladefläche : 300 × 175 cm — Bordwandhöhe : 35 cm (70 cm avec Aufsatzrahmen)</li>
  <li>Gesamtlänge : ca. 510 cm — Gesamtbreite : ca. 207 cm — Gesamthöhe : ca. 125 cm</li>
  <li>Bereifung : 195/50 R13C ou 185 R14C — Felgen Stahl verzinkt 5-Loch</li>
  <li>2 Achsen Tandem — AL-KO Gummifederachse (1.800 kg/Achse)</li>
</ul>

<h3><i class="bi bi-palette"></i> Finition LUX Premium</h3>
<ul>
  <li>Rahmenmaterial : Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahlriffelblechboden 3 mm feuerverzinkt</li>
  <li>Bordwände : Stahl pulverbeschichtet, 3-seitig öffenbar</li>
  <li>Oberfläche : LUX – Hochglanz-Lackierung Mehrschicht-Beschichtung</li>
  <li>Full-LED ECE-R48 / StVZO — stützrad avec manivelle</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>EU-Typzulassung, TÜV-konform, StVZO, CE-zertifiziert — Réf. AR01369</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 251 €)</h3>
<ul>
  <li>Radschloss Premium acier trempé pour jantes 5 trous (valeur 45 €)</li>
  <li>Sicherheitskette Stahl CE pour attelage K80 (valeur 29 €)</li>
  <li>Schutzplane LUX 300×175 cm UV imperméable avec sangles (valeur 69 €)</li>
  <li>LED-Ersatzlichtset complet StVZO-konform waterproof (valeur 49 €)</li>
  <li>Wartungsset Hydraulik LUX : Hydrauliköl + joints + outils (valeur 59 €)</li>
</ul>`,
    accessories: [
      'Radschloss Premium – Acier trempé pour jantes Stahl 5 trous (45 €).',
      'Schutzplane LUX 300×175 cm – Bâche UV imperméable sur mesure avec sangles (69 €).',
      'LED-Ersatzlichtset – Remplacement complet StVZO-konform, waterproof (49 €).',
      'Wartungsset Hydraulik LUX – Hydrauliköl + joints + outillage entretien annuel (59 €).',
      'Aufsatzrahmen 35 cm – Rehausse bordures Stahl pour passer de 35 à 70 cm.',
    ],
    featured: true,
  },
  {
    id: 47,
    slug: 'anhaenger-kipper-kerenzo-312x150-750kg',
    name: 'Anhänger Kipper Kerenzo 312 x 150 cm, 750 kg mit Bremse – AR00990',
    subtitle: 'Kipperanhänger · Kerenzo · 750 kg · 460 kg Nutzlast · 3-Seiten · 12V · Klasse B',
    category: 'kipper',
    price: 990,
    originalPrice: 1690,
    discount: 41,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Kipper Kerenzo 312 x 150 cm 750 kg/Principal.png',
    images: [
      '/image/Anhänger Kipper Kerenzo 312 x 150 cm 750 kg/Principal.png',
      '/image/Anhänger Kipper Kerenzo 312 x 150 cm 750 kg/1010-768x457.webp',
      '/image/Anhänger Kipper Kerenzo 312 x 150 cm 750 kg/1012-1-768x512.webp',
      '/image/Anhänger Kipper Kerenzo 312 x 150 cm 750 kg/1012-768x512.webp',
    ],
    specs: { zGG: '750 kg', Nutzlast: '460 kg', Achsen: '2 (Tandem)', Kippung: '3-Seiten 45°', Ladefläche: '3,12 × 1,50 m' },
    description: 'Kerenzo Kipper AR00990 — 750 kg zGG, 460 kg Nutzlast, ladefläche 312×150 cm (4,68 m²), Dreiseitenkipper 12V, tandem Gummifederachse, acier feuerverzinkt, LED ECE-R48. Permis B. GRATIS 158 €.',
    descriptionHtml: `<p>Le <strong>Kerenzo Kipper 312×150 cm, 750 kg mit Bremse (AR00990)</strong> est un Dreiseitenkipper compact avec une grande ladefläche de 4,68 m² pour seulement 750 kg de zGG. Permis B suffisant, électrohydraulique 12V avec Fernbedienung. <strong>GRATIS accessoires d'une valeur de 158 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>3-Seiten-Kipper (arrière, gauche &amp; droite) — kippwinkel jusqu'à 45°</li>
  <li>Kippantrieb : 12V Elektrohydraulik + Fernbedienung câblée</li>
  <li>Auflaufbremse (mécanique, gebremst) — Kugelkupplung 50 mm</li>
  <li>Stecker 13-pol. ISO — LED ECE-R48 / StVZO</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 750 kg — Nutzlast : ca. 460 kg — Leergewicht : ca. 290 kg</li>
  <li>Ladefläche : 312 × 150 cm (4,68 m²) — Bordwandhöhe : 35 cm</li>
  <li>Gesamtlänge : ca. 490 cm — Gesamtbreite : ca. 178 cm — Gesamthöhe : ca. 105 cm</li>
  <li>Bereifung : 185/70 R13C ou 155 R13C — Felgen Stahl 4 ou 5 trous</li>
  <li>2 Achsen Tandem — Gummifederachse (750 kg/essieu)</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction</h3>
<ul>
  <li>Rahmenmaterial : Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahlriffelblechboden verzinkt</li>
  <li>Bordwände : Stahl pulverbeschichtet, 3-seitig klappbar</li>
  <li>Stützrad klappbar — Klappstützen beidseitig</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Facilité &amp; Homologation</h3>
<ul>
  <li>Fahrzeugklasse O1 — Führerschein Klasse B suffisant (max. 750 kg)</li>
  <li>EU-Typzulassung, TÜV-konform, CE-zertifiziert, StVZO — Réf. AR00990</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 158 €)</h3>
<ul>
  <li>Sicherheitskette Stahl CE / StVZO pour attelage 50 mm (valeur 25 €)</li>
  <li>Schutzplane 312×150 cm UV imperméable avec sangles (valeur 49 €)</li>
  <li>LED-Rücklichtset de rechange StVZO-konform waterproof (valeur 39 €)</li>
  <li>Montagewerkzeug-Set avec clé dynamométrique (valeur 45 €)</li>
</ul>`,
    accessories: [
      'Sicherheitskette Stahl CE – Chaîne de sécurité attelage 50 mm (25 €).',
      'Schutzplane 312×150 cm – Bâche UV imperméable sur mesure avec sangles (49 €).',
      'LED-Rücklichtset de rechange – StVZO-konform, waterproof (39 €).',
      'Montagewerkzeug-Set – Clé dynamométrique + outils première mise en service (45 €).',
      'Bordwandaufsatz 35 cm – Rehausse bordures pour volume supplémentaire.',
    ],
    featured: false,
  },
  {
    id: 48,
    slug: 'kipper-rocko-rke-o2-13-23-151',
    name: 'Kipper ROCKO RKE O2 13-23-15,1 – Tandem Kipperanhänger | 1.300 kg | Handpumpe',
    subtitle: 'Kipperanhänger · ROCKO · 1.300 kg · 850 kg Nutzlast · Handpumpe · 2,30 m · TÜV',
    category: 'kipper',
    price: 1690,
    originalPrice: 2790,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Kipper ROCKO RKE O2 13-23-15,1/Principal.jpeg',
    images: [
      '/image/Kipper ROCKO RKE O2 13-23-15,1/Principal.jpeg',
      '/image/Kipper ROCKO RKE O2 13-23-15,1/b2f62c1f462a153948ea6b306e10485d-1024x683-1-768x512.jpeg',
      '/image/Kipper ROCKO RKE O2 13-23-15,1/6ccbf53000161feae63efe7c14120824.jpeg',
      '/image/Kipper ROCKO RKE O2 13-23-15,1/c75288b971e09c543b7cd678dfad7885.jpeg',
      '/image/Kipper ROCKO RKE O2 13-23-15,1/fdc1544bd380c1017593eea8c37f3926.jpeg',
      '/image/Kipper ROCKO RKE O2 13-23-15,1/14032e352e7b119033cc49224776e5ec.jpeg',
    ],
    specs: { zGG: '1.300 kg', Nutzlast: '850 kg', Achsen: '2 (Tandem)', Kippung: 'Handpumpe 45°', Ladefläche: '2,30 × 1,30 m' },
    description: 'ROCKO RKE O2 13-23-15,1 — 1.300 kg zGG, 850 kg Nutzlast, 230×130 cm (2,99 m²), Bordwand 510 mm, pompe hydraulique manuelle 45°, Tandem Starrachse, acier feuerverzinkt, LED 7-pol. GRATIS 125 €.',
    descriptionHtml: `<p>Le <strong>Kipper ROCKO RKE O2 13-23-15,1</strong> est un kipperanhänger tandem compact avec des bordures hautes de 510 mm et une pompe hydraulique manuelle fiable. Acier Hochfest feuerverzinkt, finition anthracite/noir. <strong>GRATIS accessoires d'une valeur de 125 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>Kippsystem : Hydraulische Handpumpe — kippwinkel 45°</li>
  <li>Hydraulikzylinder einfachwirkend, wartungsarm</li>
  <li>Auflaufbremse avec Abreißsicherung + Feststellbremse Handspindel</li>
  <li>Kugelkupplung Ø 50 mm — stecker 7-pol. LED</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Poids</h3>
<ul>
  <li>zGG : 1.300 kg — Nutzlast : ca. 850 kg — Leergewicht : ca. 450 kg</li>
  <li>Ladefläche : 2.300 × 1.300 mm (2,99 m²) — Bordwandhöhe : 510 mm</li>
  <li>Gesamtlänge : ca. 3.800 mm — Gesamtbreite : ca. 1.550 mm — Gesamthöhe : ca. 1.500 mm</li>
  <li>Bereifung : 155/70 R13 — Felgen Stahl 4-Loch</li>
  <li>2 Achsen Tandem — Starrachse gummigefedert</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction ROCKO</h3>
<ul>
  <li>Rahmen : Hochfester Stahl feuerverzinkt</li>
  <li>Bodenplatte : Stahl verzinkt 3 mm</li>
  <li>Bordwände : Hochkant-Stahlbordwände feuerverzinkt</li>
  <li>Finition : Anthrazit / Schwarz (feuerverzinkt + pulverbeschichtet)</li>
  <li>Stützrad schwenkbar — LED-Rücklichter ECE</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-Qualitätsstandard</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
  <li>Notice multilingue incluse</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 125 €)</h3>
<ul>
  <li>Hydraulik-Wartungsset RKE O2 : Hydrauliköl 500 ml + joints + gants (valeur 42 €)</li>
  <li>Spanngurt-Set 2-er 4 m × 25 mm, 750 kg/gurt avec rochet (valeur 28 €)</li>
  <li>Kupplungsschloss acier trempé Ø 50 mm, waterproof (valeur 33 €)</li>
  <li>Korrosionsschutz-Spray 500 ml pour acier galvanisé (valeur 22 €)</li>
</ul>`,
    accessories: [
      'Hydraulik-Wartungsset RKE O2 – Hydrauliköl 500 ml + joints + gants service (42 €).',
      'Spanngurt-Set 2-er 4 m × 25 mm – Sangles 750 kg avec rochet pour 2,30 m ladefläche (28 €).',
      'Kupplungsschloss Ø 50 mm – Acier trempé waterproof anti-vol attelage (33 €).',
      'Korrosionsschutz-Spray 500 ml – Spray antirouille professionnel pour acier galvanisé (22 €).',
      'Schutzplane 230×130 cm – Bâche UV imperméable avec sangles sur mesure.',
    ],
    featured: false,
  },
  {
    id: 49,
    slug: 'kipper-rocko-shrk-o2-18-25-151',
    name: 'Kipper ROCKO SHRK O2 18-25-15.1 – Hochbordkipper | 1.800 kg | 2,25 m³',
    subtitle: 'Kipperanhänger · ROCKO SHRK · 1.800 kg · 1.250 kg Nutzlast · Hochbord 600 mm · TÜV',
    category: 'kipper',
    price: 2190,
    originalPrice: 3590,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Kipper ROCKO SHRK O2 18-25-15.1/Principal.jpeg',
    images: [
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/Principal.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/1d7628f0f69da0d517690dbcd3f3c7da-1.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/1d7628f0f69da0d517690dbcd3f3c7da.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/245d82c479deec959c423042be89361a-5.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/a71d9cfdff8ff2be109aaa3c4f1354cb-2.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/b99c207e6e216653206f9dd5475d019e-2.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/c587f3ebaa6a01dc33708b799948874a-1.jpeg',
      '/image/Kipper ROCKO SHRK O2 18-25-15.1/f0f76b6e8b4bb7f935e784008f2f5045-2.jpeg',
    ],
    specs: { zGG: '1.800 kg', Nutzlast: '1.250 kg', Achsen: '2 (Tandem verstärkt)', Kippung: 'Handpumpe 45°', Hochbord: '600 mm (2,25 m³)' },
    description: 'ROCKO SHRK O2 18-25-15.1 — 1.800 kg zGG, 1.250 kg Nutzlast, Hochbordwände 600 mm (2,25 m³), ladefläche 250×150 cm, Handpumpe hydraulique 45°, renforcé, feuerverzinkt. GRATIS 235 €.',
    descriptionHtml: `<p>Le <strong>Kipper ROCKO SHRK O2 18-25-15.1</strong> est un Hochbordkipper avec des parois de 600 mm offrant un volume de 2,25 m³ — parfait pour les matériaux en vrac lourds. Rahmen et Bodenplatte renforcés (4 mm), Tandem Starrachse, Handpumpe hydraulique 45°. <strong>GRATIS accessoires d'une valeur de 235 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>Kippsystem : Hydraulische Handpumpe — kippwinkel 45°</li>
  <li>Hydraulikzylinder einfachwirkend druckgeprüft</li>
  <li>Auflaufbremse avec Abreißsicherung + Feststellbremse Handspindel</li>
  <li>Kugelkupplung Ø 50 mm — stecker 7-pol. LED</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Capacité</h3>
<ul>
  <li>zGG : 1.800 kg — Nutzlast : ca. 1.250 kg — Leergewicht : ca. 550 kg</li>
  <li>Ladefläche : 2.500 × 1.500 mm (3,75 m²) — Hochbordwände : 600 mm</li>
  <li>Innenvolumen : ca. 2,25 m³</li>
  <li>Gesamtlänge : ca. 4.200 mm — Gesamtbreite : ca. 1.750 mm — Gesamthöhe : ca. 1.500 mm</li>
  <li>Bereifung : 185/65 R14 — Felgen Stahl 5-Loch</li>
  <li>2 Achsen Tandem — Starrachse verstärkt gummigefedert</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction SHRK renforcée</h3>
<ul>
  <li>Rahmen : Hochfester Stahl feuerverzinkt verstärkt</li>
  <li>Bodenplatte : Stahl verzinkt 4 mm (renforcé)</li>
  <li>Bordwände : Hochkant-Stahlhochbordwände feuerverzinkt (600 mm)</li>
  <li>Finition : Anthrazit / Schwarz (feuerverzinkt + pulverbeschichtet)</li>
  <li>Stützrad schwenkbar — LED-Rücklichter ECE</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-Qualitätsstandard</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 235 €)</h3>
<ul>
  <li>Hydraulik-Wartungsset SHRK : Hydrauliköl 1 L + joints + manschetten (valeur 48 €)</li>
  <li>Profi-Zurrgurt-Set 4-er 6 m × 35 mm, 1.000 kg/gurt avec rochet (valeur 54 €)</li>
  <li>Schutzplane PVC 600 g/m² 250×150 cm UV waterproof (valeur 59 €)</li>
  <li>Doppeltes Sicherheitsschloss : Kupplungsschloss Ø 50 mm + Radkralle (valeur 45 €)</li>
  <li>Verzinkungs-Pflegeset : Zinkspray 500 ml + Politur + Mikrofasertuch (valeur 29 €)</li>
</ul>`,
    accessories: [
      'Hydraulik-Wartungsset SHRK – Hydrauliköl 1 L + joints + manschettes (48 €).',
      'Profi-Zurrgurt-Set 4-er 6 m × 35 mm – Sangles 1.000 kg avec rochet (54 €).',
      'Schutzplane PVC 600 g/m² 250×150 cm – Haute résistance UV et waterproof (59 €).',
      'Doppeltes Sicherheitsschloss – Kupplungsschloss Ø 50 mm + Radkralle (45 €).',
      'Verzinkungs-Pflegeset – Zinkspray 500 ml + Politur + Mikrofasertuch (29 €).',
    ],
    featured: false,
  },
  {
    id: 50,
    slug: 'kipper-rocko-shrk-o2-27-30-152-alu',
    name: 'Kipper ROCKO SHRK O2 27-30-15.2 mit ALU-Bordwänden – 2.700 kg | 2,70 m³',
    subtitle: 'Kipperanhänger · ROCKO SHRK · 2.700 kg · 2.000 kg Nutzlast · ALU-Hochbord 600 mm · TÜV',
    category: 'kipper',
    price: 2990,
    originalPrice: 4890,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/Principal.jpeg',
    images: [
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/Principal.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/f5db324e680939a48c6225fcf2e35b2f-1024x576-1-768x432.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/87d7a86ee10b23c703ecce64bddc34c5-1.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/245d82c479deec959c423042be89361a-1-768x558.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/a71d9cfdff8ff2be109aaa3c4f1354cb-1-768x555.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/b99c207e6e216653206f9dd5475d019e-1-1-768x555.jpeg',
      '/image/Kipper ROCKO SHRK O2 27-30-15.2 ALU-Bordwände/f0f76b6e8b4bb7f935e784008f2f5045-1-768x555.jpeg',
    ],
    specs: { zGG: '2.700 kg', Nutzlast: '2.000 kg', Achsen: '2 (Tandem verstärkt)', Bordwände: 'ALU eloxiert 600 mm', Volume: '2,70 m³' },
    description: 'ROCKO SHRK O2 27-30-15.2 ALU — 2.700 kg zGG, 2.000 kg Nutzlast, ALU-Hochbordwände 600 mm eloxiert (2,70 m³), 300×150 cm, Handpumpe 45°, acier feuerverzinkt renforcé 4 mm. GRATIS 243 €.',
    descriptionHtml: `<p>Le <strong>Kipper ROCKO SHRK O2 27-30-15.2 mit ALU-Bordwänden</strong> est le Schwerlastkipper alliant cadre acier renforcé et parois en aluminium eloxiert 600 mm (2,70 m³). Les Alu-Bordwände sont 80 kg plus légères que l'acier, ce qui accroît directement la Nutzlast. <strong>GRATIS accessoires d'une valeur de 243 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>Kippsystem : Hydraulische Handpumpe — kippwinkel 45°</li>
  <li>Hydraulikzylinder einfachwirkend druckgeprüft</li>
  <li>Auflaufbremse avec Abreißsicherung + Feststellbremse Handspindel</li>
  <li>Kugelkupplung Ø 50 mm — stecker 13-pol. (7+6) LED</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Capacité</h3>
<ul>
  <li>zGG : 2.700 kg — Nutzlast : ca. 2.000 kg — Leergewicht : ca. 700 kg</li>
  <li>Ladefläche : 3.000 × 1.500 mm (4,50 m²) — ALU-Hochbordwände : 600 mm</li>
  <li>Innenvolumen : ca. 2,70 m³</li>
  <li>Gesamtlänge : ca. 4.800 mm — Gesamtbreite : ca. 1.850 mm — Gesamthöhe : ca. 1.600 mm</li>
  <li>Bereifung : 195/55 R10C ou 195/65 R15 — Felgen Stahl 5-Loch verstärkt</li>
  <li>2 Achsen Tandem — Starrachse verstärkt pour 2.700 kg</li>
</ul>

<h3><i class="bi bi-layers"></i> Construction ALU + Acier</h3>
<ul>
  <li>Rahmen : Hochfester Stahl feuerverzinkt schwerlastgeeignet</li>
  <li>Bodenplatte : Stahl verzinkt 4 mm renforcé</li>
  <li>Bordwände : Aluminium-Profilbordwände eloxiert — 80 kg plus légères que l'acier</li>
  <li>Finition : Rahmen Anthrazit / Bordwände Aluminium-Natur eloxiert</li>
  <li>Stützrad schwenkbar — LED-Rücklichter ECE</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-Qualitätsstandard</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 243 €)</h3>
<ul>
  <li>Aluminium-Pflegeset Premium : Reiniger 750 ml + Politur + Versiegelung 250 ml + Applikator (valeur 56 €)</li>
  <li>Schwerlast-Zurrgurt-Set 4-er 8 m × 50 mm, 2.000 kg/gurt avec rochet (valeur 68 €)</li>
  <li>Hydraulik-Wartungsset SHRK : Hydrauliköl 2 L + joints + Druckprüfer-Adapter (valeur 54 €)</li>
  <li>Profi-Schutzplane PVC 650 g/m² 300×150 cm, 12 Ösen, UV-beständig (valeur 65 €)</li>
</ul>`,
    accessories: [
      'Aluminium-Pflegeset Premium – Reiniger 750 ml + Politur + Versiegelung 250 ml (56 €).',
      'Schwerlast-Zurrgurt-Set 4-er 8 m × 50 mm – Sangles 2.000 kg/gurt avec rochet (68 €).',
      'Hydraulik-Wartungsset SHRK – Hydrauliköl 2 L + joints + Druckprüfer-Adapter (54 €).',
      'Profi-Schutzplane PVC 650 g/m² 300×150 cm – 12 Ösen, UV-beständig witterungsfest (65 €).',
      'Radkralle + Kupplungsschloss – Double protection antivol Ø 50 mm acier trempé.',
    ],
    featured: false,
  },
  {
    id: 51,
    slug: 'kipper-trius-shdk-o2-27-36-202-alu',
    name: 'Kipper TRIUS SHDK O2 27-36-20.2 mit ALU-Bordwänden und Handpumpe',
    subtitle: 'Kipperanhänger · TRIUS SHDK · 2.700 kg · 1.900 kg Nutzlast · ALU 400 mm · 7,20 m² · TÜV',
    category: 'kipper',
    price: 3490,
    originalPrice: 5690,
    discount: 39,
    stock: 'instock',
    badge: null,
    image: '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/Principal.jpeg',
    images: [
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/Principal.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/65882f020cb66e940b847d56a1db831d.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/4210eef89dfc88747125a895cadcd01d-1.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/16bee8468a5e634810e751e09988467b-2.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/6f01afb993a07c3eea8f53e958b64233-2.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/75f80c6aade274a5568186a7125b72e7-2.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/d613fdb0d5edb4ef7a37eceae647c7fb-2.jpeg',
      '/image/Kipper TRIUS SHDK O2 27-36-20.2 ALU-Bordwände/d63d437855927c55f378ad9222937e70-2.jpeg',
    ],
    specs: { zGG: '2.700 kg', Nutzlast: '1.900 kg', Achsen: '2 (Tandem SHDK)', Bordwände: 'ALU eloxiert 400 mm', Ladefläche: '3,60 × 2,00 m (7,20 m²)' },
    description: 'TRIUS SHDK O2 27-36-20.2 ALU — flagship kipper 2.700 kg, 1.900 kg Nutzlast, XXL ladefläche 360×200 cm (7,20 m²), ALU-Bordwände 400 mm eloxiert (2,88 m³), Heckkipper Handpumpe 45°. GRATIS 403 €.',
    descriptionHtml: `<p>Le <strong>Kipper TRIUS SHDK O2 27-36-20.2</strong> est le fleuron de la gamme TRIUS : XXL-ladefläche de 7,20 m² (3,60 × 2,00 m), parois aluminium eloxiert 400 mm, cadre acier SHDK schwerlastgeeignet 4 mm. 100 kg plus léger qu'avec des parois acier → Nutzlast maximisée. <strong>GRATIS accessoires d'une valeur de 403 €</strong> inclus.</p>

<h3><i class="bi bi-gear"></i> Système de benne &amp; Hydraulique</h3>
<ul>
  <li>Kipprichtung : Heckkipper (rückwärtig) — kippwinkel 45°</li>
  <li>Kippsystem : Hydraulische Handpumpe kraftsparend</li>
  <li>Hydraulikzylinder einfachwirkend druckgeprüft pour 2.700 kg</li>
  <li>Auflaufbremse sur les deux essieux + Abreißsicherung + Feststellbremse Handspindel</li>
  <li>Kugelkupplung Ø 50 mm — stecker 13-pol. (7+6) LED</li>
</ul>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Capacité XXL</h3>
<ul>
  <li>zGG : 2.700 kg — Nutzlast : ca. 1.900 kg — Leergewicht : ca. 800 kg</li>
  <li>Ladefläche : 3.600 × 2.000 mm (7,20 m²) — ALU-Bordwände : 400 mm</li>
  <li>Innenvolumen : ca. 2,88 m³</li>
  <li>Gesamtlänge : ca. 5.400 mm — Gesamtbreite : ca. 2.250 mm — Gesamthöhe : ca. 1.700 mm</li>
  <li>Bereifung : 195/55 R10C (4× Reifen) — Felgen Stahl 4-Loch verstärkt</li>
  <li>2 Achsen Tandem gummigefedert verstärkt</li>
</ul>

<h3><i class="bi bi-layers"></i> Construction TRIUS SHDK</h3>
<ul>
  <li>Rahmen : Hochfester Stahl feuerverzinkt Schwerlastausführung</li>
  <li>Bodenplatte : Stahl verzinkt 4 mm schwerlastgeeignet</li>
  <li>Bordwände : ALU-Strangpressprofile eloxiert — 100 kg plus légères que l'acier</li>
  <li>Finition : Rahmen Anthrazit / Bordwände Aluminium-Natur eloxiert</li>
  <li>Stützrad schwenkbar — LED ECE 13-pol.</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-Qualitätsstandard</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 403 €)</h3>
<ul>
  <li>ALU-Pflegeset TRIUS : Reiniger 1 L + Politur 500 ml + Versiegelung + Applikator (valeur 58 €)</li>
  <li>Profi-Zurrgurt-Set 6-er 8 m × 50 mm, 2.000 kg/gurt avec rochet (valeur 88 €)</li>
  <li>Hydraulik-Wartungsset SHDK : Hydrauliköl 2 L + joints + Druckprüfadapter + manschetten (valeur 52 €)</li>
  <li>Schwerlastplane 680 g/m² 360×200 cm, 16 Ösen, UV-beständig + système tendeur (valeur 78 €)</li>
  <li>Tandem-Sicherheitsset : Kupplungsschloss Ø 50 mm + 2× Radkeile (valeur 47 €)</li>
  <li>LED-Rücklichtset TRIUS : 2× LED + câblage 13-pol. + fixations StVZO (valeur 44 €)</li>
  <li>Bordwand-Reparaturset ALU : Scharniere + Riegelbolzen + Stifte + outils (valeur 36 €)</li>
</ul>`,
    accessories: [
      'ALU-Pflegeset TRIUS – Reiniger 1 L + Politur 500 ml + Versiegelung + Applikator (58 €).',
      'Profi-Zurrgurt-Set 6-er 8 m × 50 mm – Sangles 2.000 kg avec rochet pour 3,60 m (88 €).',
      'Schwerlastplane 680 g/m² 360×200 cm – 16 Ösen UV-beständig + système tendeur (78 €).',
      'Tandem-Sicherheitsset – Kupplungsschloss Ø 50 mm + 2× Radkeile (47 €).',
      'LED-Rücklichtset TRIUS – 2× LED + câblage 13-pol. + fixations StVZO-konform (44 €).',
    ],
    featured: true,
  },

  // ── TRANSPORTANHÄNGER & PRITSCHE ─────────────────────────────────────
  {
    id: 52,
    slug: 'humbaur-baumaschinentransporter-serie-3000',
    name: 'Baumaschinentransporter HUMBAUR Serie 3000 – Gesamtgewicht 2500 kg',
    subtitle: 'Baumaschinentransporter · HUMBAUR · 2.500 kg · 1.840 kg Nutzlast · 4,96 m · CE/TÜV',
    category: 'pritsche',
    price: 3290,
    originalPrice: 4990,
    discount: 34,
    stock: 'instock',
    badge: null,
    image: '/image/Baumaschinentransporter HUMBAUR Serie 3000/Principal.png',
    images: [
      '/image/Baumaschinentransporter HUMBAUR Serie 3000/Principal.png',
      '/image/Baumaschinentransporter HUMBAUR Serie 3000/baumaschinentransporter-1_1280x1280-768x576.png',
      '/image/Baumaschinentransporter HUMBAUR Serie 3000/baumaschinentransporter-2_1280x1280-768x576.png',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.840 kg', Länge: '4.960 mm', Breite: '2.200 mm', Höhe: '485 mm' },
    description: 'HUMBAUR Baumaschinentransporter Serie 3000 — 2.500 kg zGG, 1.840 kg Nutzlast, ladefläche 4.960 × 2.200 mm, hauteur de chargement 485 mm, TÜV/EU. Idéal pour minibagger, compacteurs et engins de chantier.',
    descriptionHtml: `<p>Le <strong>Baumaschinentransporter HUMBAUR Serie 3000</strong> (zGG 2.500 kg) est la solution professionnelle pour le transport de compacteurs, minibagger et engins de chantier. Robuste, vollverzinkt et sofort einsatzbereit avec l'homologation CE/TÜV.</p>

<h3><i class="bi bi-rulers"></i> Dimensions</h3>
<ul>
  <li>zGG : 2.500 kg — Nutzlast : 1.840 kg</li>
  <li>Länge : 4.960 mm</li>
  <li>Breite : 2.200 mm</li>
  <li>Höhe (Aufbau) : 485 mm</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction &amp; Qualité HUMBAUR</h3>
<ul>
  <li>Structure acier vollverzinkt — protection anticorrosion permanente</li>
  <li>Qualité HUMBAUR — traitement de surface premium, jahrelanger Betrieb</li>
  <li>Kupplung standard — Schnelles An- und Abkuppeln, sofort fahrbereit</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>TÜV-konform — EU-Typzulassung, tous documents inclus, sofort straßenzugelassen</li>
  <li>2 Jahre gesetzliche Gewährleistung</li>
  <li>Livraison : 3–7 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Auffahrrampen Alu – Rampes d\'accès aluminium pour engins de chantier.',
      'Zurrgurt-Set 4-er Schwerlast – Sangles d\'arrimage 2.000 kg pour machines.',
      'Schutzplane 496×220 cm – Bâche sur mesure pour protection en transport.',
      'Radkeile 2-er Set – Cales de roue antiroulement pour engins lourds.',
      'Kupplungsschloss Ø 50 mm – Antivol attelage acier trempé.',
    ],
    featured: true,
  },
  {
    id: 54,
    slug: 'anhaenger-pritsche-pl27615020002-ptac-2000kg',
    name: 'Anhänger Pritsche PL27615020002 – PTAC 2000 kg (276×150cm) – SARIS',
    subtitle: 'Pritschenanhänger · SARIS · 2.000 kg · 1.480 kg Nutzlast · 2,76 × 1,50 m · Tandem · TÜV',
    category: 'pritsche',
    price: 1190,
    originalPrice: 1890,
    discount: 37,
    stock: 'instock',
    badge: null,
    image: '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/Principal.webp',
    images: [
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/Principal.webp',
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/remorque-plateau-pl27615020002-ptac-2000-kg-276x150-saris-768x768.webp',
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/remorque-plateau-pl27615020002-ptac-2000-kg-276x150-saris-1-700x700-1.webp',
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/remorque-plateau-pl27615020002-ptac-2000-kg-276x150-saris-2-768x768.webp',
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/remorque-plateau-pl27615020002-ptac-2000-kg-276x150-saris-3-768x768.webp',
      '/image/Anhänger Pritsche PL27615020002 – PTAC 2000 kg/remorque-plateau-pl27615020002-ptac-2000-kg-276x150-saris-4-768x768.webp',
    ],
    specs: { zGG: '2.000 kg', Nutzlast: '1.480 kg', Ladefläche: '2.760 × 1.500 mm', Achsen: '2 (Tandem)', Bordwände: '3-seitig 400 mm' },
    description: 'SARIS Pritsche PL27615020002 — 2.000 kg PTAC, 1.480 kg Nutzlast, ladefläche 276×150 cm, Bordwände 3-seitig klappbar 400 mm, Heckrampe, 10 Zurrösen, LED StVZO, Tandem. Permis BE. GRATIS 299 €.',
    descriptionHtml: `<p>Le <strong>SARIS Pritsche PL27615020002</strong> (2.000 kg PTAC) est un pritschenanhänger tandem ouvert avec bordures 3-seitig klappbar, heckrampe verzinkt intégrée et 10 Zurrösen. Structure feuerverzinkt + pulverbeschichtet anthrazit. <strong>GRATIS accessoires d'une valeur de 299 €</strong> inclus.</p>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Capacité</h3>
<ul>
  <li>zGG / PTAC : 2.000 kg — Nutzlast : ca. 1.480 kg — Leergewicht : ca. 520 kg</li>
  <li>Ladefläche : 2.760 × 1.500 mm — Bordwandhöhe : 400 mm (3-seitig klappbar)</li>
  <li>Ladehöhe (Plattform) : ca. 700 mm</li>
  <li>Gesamtlänge : ca. 5.100 mm — Gesamtbreite : ca. 1.780 mm</li>
  <li>Bereifung : 205/65 R15C — Felgen Stahl verzinkt</li>
  <li>2 Achsen Tandem — Auflaufbremse hydraulique + Handbremse</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Équipements de série</h3>
<ul>
  <li>Heckrampe klappbar verzinkt verstärkt — incluse</li>
  <li>10× Zurrösen intégrés (cadre &amp; côtés)</li>
  <li>A-Deichsel starre höhenverstellbar — Kupplung 50 mm DIN ISO 1103</li>
  <li>Stützrad klappbar — LED-Rückleuchten StVZO</li>
  <li>Unterfahrschutz intégré StVZO</li>
  <li>Stecker 13-pol. DIN ISO 11446</li>
</ul>

<h3><i class="bi bi-box-seam"></i> Construction SARIS</h3>
<ul>
  <li>Rahmen : Stahl feuerverzinkt verstärkt</li>
  <li>Plattform : Stahlrost verzinkt rutschfest</li>
  <li>Finition : Feuerverzinkt + Pulverbeschichtung anthrazit</li>
  <li>Vitesse max. : 100 km/h</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-konform — Führerschein BE erforderlich</li>
  <li>2 Jahre Herstellergarantie</li>
  <li>Livraison : 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-gift"></i> GRATIS Zubehör (valeur 299 €)</h3>
<ul>
  <li>Diebstahlschutz-Set PL276 : Kugelkopfschloss + Deichsel-Parkkralle (valeur 58 €)</li>
  <li>Auffahrrampen Stahl-Klappbar 2× (1.000 kg/Rampe) (valeur 74 €)</li>
  <li>Staubox abschließbar Deichsel-Halterung (valeur 49 €)</li>
  <li>Spanngurt Profi 4× 8 m 1.500 kg LC Flachhaken (valeur 63 €)</li>
  <li>Planen-Abdeckset PVC 650 g/m² 276×150 cm avec Ösen (valeur 55 €)</li>
</ul>`,
    accessories: [
      'Diebstahlschutz-Set PL276 – Kugelkopfschloss + Deichsel-Parkkralle (58 €).',
      'Auffahrrampen Stahl-Klappbar 2× – 1.000 kg par rampe pour machines larges (74 €).',
      'Staubox abschließbar – Rangement sécurisé sangles/outils sur déchsel (49 €).',
      'Spanngurt Profi 4× 8 m – Sangles 1.500 kg LC Flachhaken pour 2 t (63 €).',
      'Planen-Abdeckset PVC 650 g/m² 276×150 cm – Bâche sur mesure avec Ösen (55 €).',
    ],
    featured: false,
  },
  {
    id: 55,
    slug: 'maschinentraeger-brenderup-308-152',
    name: 'Maschinenträger BRENDERUP 3,08 m × 1,52 m',
    subtitle: 'Maschinenträger · BRENDERUP · 750 kg · 500 kg Nutzlast · 3,08 × 1,52 m · TÜV',
    category: 'pritsche',
    price: 1290,
    originalPrice: 1890,
    discount: 32,
    stock: 'instock',
    badge: null,
    image: '/image/Maschinenträger BRENDERUP 3,08 m × 1,52 m/Principal.webp',
    images: [
      '/image/Maschinenträger BRENDERUP 3,08 m × 1,52 m/Principal.webp',
      '/image/Maschinenträger BRENDERUP 3,08 m × 1,52 m/BR_P_PR_MT3080_front_001-1024x581-1-768x436.webp',
      '/image/Maschinenträger BRENDERUP 3,08 m × 1,52 m/BR_P_PR_MT3080_rear_folded_ramp_001-1024x281-1-768x211.webp',
      '/image/Maschinenträger BRENDERUP 3,08 m × 1,52 m/BR_P_PR_MT3080_side_folded_ramp_001-scaled-1-1024x247-1-768x185.webp',
    ],
    specs: { zGG: '750 kg', Nutzlast: '500 kg', Ladefläche: '3.080 × 1.520 mm', Achsen: '1', Marke: 'BRENDERUP', Rampe: 'klappbar' },
    description: 'BRENDERUP Maschinenträger 3,08 × 1,52 m — 750 kg PTAC, 500 kg Nutzlast, rampe klappbar, acier feuerverzinkt, LED StVZO, TÜV. Idéal pour transport de tondeuses, mini-engins et matériel de chantier léger.',
    descriptionHtml: `<p>Le <strong>BRENDERUP Maschinenträger MT3080</strong> (3,08 × 1,52 m) est un plateau porte-machine conçu pour le transport de tondeuses autoportées, de petits engins de chantier et de matériel lourd léger jusqu'à <strong>500 kg de charge utile</strong>. Rampe arrière klappbar intégrée pour un chargement facilité.</p>

<h3><i class="bi bi-rulers"></i> Dimensions &amp; Capacité</h3>
<ul>
  <li>PTAC : <strong>750 kg</strong> — Nutzlast : <strong>500 kg</strong></li>
  <li>Ladefläche : <strong>3.080 × 1.520 mm</strong></li>
  <li>Rampe arrière klappbar — accès facilité pour engins à roues</li>
  <li>Monoessieu — compacité maximale, manœuvrabilité aisée</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Construction &amp; Qualité BRENDERUP</h3>
<ul>
  <li>Structure acier vollverzinkt — protection anticorrosion durable</li>
  <li>Éclairage LED 7 broches — conforme StVZO</li>
  <li>Qualité BRENDERUP — fiabilité scandinave, jahrelanger Betrieb</li>
  <li>Kupplung standard Ø 50 mm — An- und Abkuppeln en quelques secondes</li>
</ul>

<h3><i class="bi bi-patch-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>TÜV-konform — EU-Typzulassung, tous documents inclus, sofort straßenzugelassen</li>
  <li>2 Jahre gesetzliche Gewährleistung</li>
  <li>Livraison : 3–7 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Zurrgurt-Set 2-er 500 kg – Sangles d\'arrimage pour machines légères.',
      'Radkeile 2-er Set – Cales de roue antiroulement.',
      'Schutzplane 310×160 cm – Bâche sur mesure pour protection en transport.',
      'Kupplungsschloss Ø 50 mm – Antivol attelage acier trempé.',
    ],
    featured: false,
  },
  {
    id: 56,
    slug: 'plattformanhaenger-brenderup-417-204',
    name: 'Plattformanhänger BRENDERUP 4,17 m x 2,04 m',
    subtitle: 'Plattformanhänger · BRENDERUP · 2.500 kg · 1.900 kg Nutzlast · 4,17 × 2,04 m · Tandem · TÜV',
    category: 'pritsche',
    price: 2490,
    originalPrice: 3790,
    discount: 34,
    stock: 'instock',
    badge: 'Bestseller',
    image: '/image/Plattformanhänger BRENDERUP 4,17 m x 2,04 m/Principal.webp',
    images: [
      '/image/Plattformanhänger BRENDERUP 4,17 m x 2,04 m/Principal.webp',
      '/image/Plattformanhänger BRENDERUP 4,17 m x 2,04 m/bt-st_au_introperspektive_fronta9381_600x600-1.webp',
      '/image/Plattformanhänger BRENDERUP 4,17 m x 2,04 m/bt-st_3016-30_au-deichsel-rechtsd0111_600x600-1.webp',
      '/image/Plattformanhänger BRENDERUP 4,17 m x 2,04 m/bt-st_3518-30_au_deichsel-links1aa1c_600x600-1.webp',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.900 kg', Ladefläche: '4.170 × 2.040 mm', Achsen: '2 (Tandem)', Marke: 'BRENDERUP', Bremse: 'Auflaufbremse', Beleuchtung: 'LED 7-pol.' },
    description: 'BRENDERUP Plattformanhänger 4,17 × 2,04 m — 2.500 kg PTAC, 1.900 kg Nutzlast, 8,5 m² Ladefläche, tandem, feuerverzinkt, LED StVZO, TÜV/CE. GRATIS Zubehörpaket 276 €.',
    descriptionHtml: `<p>Le <strong>BRENDERUP Plattformanhänger 4,17 m × 2,04 m</strong> (2.500 kg PTAC) est le pritschenanhänger XXL pour professionnels : <strong>8,5 m² de surface de charge</strong>, tandem à freins hydrauliques, cadre feuerverzinkt et homologation CE/TÜV complète. <strong>GRATIS : paquet d'accessoires d'une valeur de 276 €</strong> offert à l'achat.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 276 €)</h3>
<ul>
  <li><strong>Zurrnetz Plattform XL 4×2 m</strong> — Hochreißfestes Ladungssicherungsnetz mit Hakenösen (Wert 74 €)</li>
  <li><strong>BRENDERUP Wartungs-Kit Tandem</strong> — Schmierfett, DOT4, Glühbirnen-Ersatzset (Wert 59 €)</li>
  <li><strong>Auffahrkeile Set 4× Schwerlast</strong> — Kunststoff bis 3.000 kg je Keil, stapelbar (Wert 48 €)</li>
  <li><strong>Verzinkungsschutz-Spray Set</strong> — 2× Kaltgalvanik-Spray 400 ml für Stahlrahmen (Wert 42 €)</li>
  <li><strong>Deichsel-Parkkralle BRENDERUP</strong> — Gehärteter Stahl, Ø 50 mm, 2 Schlüssel (Wert 53 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.500 kg</strong> — Nutzlast : <strong>ca. 1.900 kg</strong> — Eigengewicht : ca. 600 kg</li>
  <li>Ladefläche (innen) : <strong>4.170 × 2.040 mm</strong> (ca. 8,5 m²)</li>
  <li>Fahrgestell : Tandemachse, gefedert · Bremssystem : Auflaufbremse hydraulique, Trommelbremse 4 Räder</li>
  <li>Bereifung : 185 R14 C · 8× Zurrösen 800 kg · Stützlast max. 100 kg</li>
  <li>Beleuchtung : LED StVZO · Elektroanschluss : 7-pol. DIN ISO 11446</li>
  <li>Führerschein : Klasse BE · Höchstgeschwindigkeit : 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Qualität &amp; Homologation</h3>
<ul>
  <li>Cadre feuerverzinkt — protection anticorrosion permanente · Fabrication danoise BRENDERUP Group A/S</li>
  <li>EU-Typgenehmigung, COC-Papiere inklusive, sofort zulassungsfähig</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>

<h3><i class="bi bi-check-circle"></i> Ideal für</h3>
<ul>
  <li>Handwerker, Landwirte, Gartenbau, Baubranche</li>
  <li>Transport de Baumaterialien, Maschinen, Ernte, Pflanzen</li>
  <li>Privatpersonen : Sperrgut, Möbel, Umzugsgut</li>
</ul>`,
    accessories: [
      'Zurrnetz Plattform XL 4×2 m — Hochreißfestes Ladungssicherungsnetz mit Hakenösen.',
      'Auffahrrampen Stahl klappbar — Rampes d\'accès acier pour machines et engins.',
      'Zurrgurt-Set 4-er 2.000 kg — Sangles d\'arrimage professionnelles.',
      'Schutzplane PVC 650g/m² 420×210 cm — Bâche sur mesure avec Ösen.',
      'Radkeile 4-er Set Schwerlast — Cales de roue jusqu\'à 3.000 kg par cale.',
    ],
    featured: true,
  },
  {
    id: 57,
    slug: 'asx-plattform-2500-405-rampen',
    name: 'ASX-Plattform 2500.405 mit Rampen und Rampenboxen',
    subtitle: 'Plattformanhänger · ASX · 2.500 kg · 1.720 kg Nutzlast · 4,05 × 2,08 m · Tandem · TÜV',
    category: 'pritsche',
    price: 2190,
    originalPrice: 3490,
    discount: 37,
    stock: 'instock',
    badge: 'Bestseller',
    image: '/image/ASX-Plattform 2500.405 mit Rampen/Principal.webp',
    images: [
      '/image/ASX-Plattform 2500.405 mit Rampen/Principal.webp',
      '/image/ASX-Plattform 2500.405 mit Rampen/plateau-asx-2500405-avec-rampes-logements-de-rampes.webp',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.720 kg', Ladefläche: '4.050 × 2.080 mm', Achsen: '2 (Tandem)', Marke: 'ASX', Rampen: '2× Alu klappbar', Rampenboxen: 'integriert', Plattform: 'Alu-Riffelblech' },
    description: 'ASX-Plattform 2500.405 — 2.500 kg PTAC, 1.720 kg Nutzlast, 2 rampes Alu klappbar + Rampenboxen intégrées abschließbar, Alu-Riffelblech, feuerverzinkt, 12 Zurrösen, LED 13-pol., TÜV/CE. GRATIS 249 €.',
    descriptionHtml: `<p>La <strong>ASX-Plattform 2500.405</strong> est le plattformanhänger professionnel avec rampes aluminium klappbar et Rampenboxen intégrées abschließbar — idéal pour le transport de motos, quads, mini-engins et véhicules jusqu'à <strong>1.720 kg de charge utile</strong>. <strong>GRATIS : paquet d'accessoires d'une valeur de 249 €</strong> offert à l'achat.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 249 €)</h3>
<ul>
  <li><strong>Motorrad-Zurrset 4× ASX</strong> — Gurte mit weichen Schlaufen, sans rayures (Wert 67 €)</li>
  <li><strong>Rampenbox-Schloss Sicherungsset</strong> — 2× Zusatzschlösser für Rampenboxen (Wert 38 €)</li>
  <li><strong>Radführungs-Schienen Alu 2×</strong> — Spurführungsschienen für präzises Auffahren (Wert 54 €)</li>
  <li><strong>LED-Arbeitsleuchten-Set 2×</strong> — Magnetische LED-Strahler für Plattform & Rampen (Wert 49 €)</li>
  <li><strong>Alu-Riffelblech Reinigungsset</strong> — Pflege & Reinigung, rutschfest & Glanz (Wert 41 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.500 kg</strong> — Nutzlast : <strong>ca. 1.720 kg</strong> — Eigengewicht : ca. 780 kg — Stützlast : 150 kg</li>
  <li>Ladefläche : <strong>4.050 × 2.080 mm</strong> — Plattformhöhe : ca. 720 mm</li>
  <li>Rampen : 2× Alu klappbar, 2.000 kg Tragkraft, ca. 1.600 mm lang · Rampenboxen : 2× intégrées, abschließbar</li>
  <li>Fahrgestell : Tandemachse · Bremse : Auflaufbremse hydraulique · Bereifung : 205/65 R15C Alu-Felgen</li>
  <li>Plattform : Aluminium-Riffelblech rutschfest · Rahmen : feuerverzinkt + Pulverbeschichtung RAL 7016</li>
  <li>12× Zurrösen · Deichsel : V-Deichsel Schwanenhals, höhenverstellbar · Kupplung : 50 mm</li>
  <li>LED StVZO · 13-pol. Stecker · Führerschein : Klasse BE · Max. 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Homologation &amp; Garantie</h3>
<ul>
  <li>CE-zertifiziert, TÜV-geprüft, EU-konform — alle Zulassungsdokumente inklusive</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Motorrad-Zurrset 4× ASX — Gurte mit weichen Schlaufen ohne Kratzer.',
      'Radführungs-Schienen Alu 2× — Spurführungsschienen für präzises Auffahren.',
      'Zurrgurt-Set 4-er 2.000 kg — Sangles d\'arrimage professionnelles.',
      'LED-Arbeitsleuchten-Set 2× — Magnetische LED-Strahler für Be-/Entladen.',
      'Rampenbox-Schloss Sicherungsset — 2× Zusatzschlösser für Rampenboxen.',
    ],
    featured: false,
  },
  {
    id: 58,
    slug: 'anssems-terrax-2-2600-294-150-basic',
    name: 'Anssems TERRAX-2 2600.294×150 Basic',
    subtitle: 'Maschinentransporter · ANSSEMS · 2.600 kg · 2.040 kg Nutzlast · Tieflader · Tandem · TÜV',
    category: 'pritsche',
    price: 2890,
    originalPrice: 4290,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/Anssems TERRAX-2 2600.294×150 Basic/Principal.jpg',
    images: [
      '/image/Anssems TERRAX-2 2600.294×150 Basic/Principal.jpg',
      '/image/Anssems TERRAX-2 2600.294×150 Basic/qergdfYbh6R6sQkWQDb_600x600-e1739971878790.jpg',
    ],
    specs: { zGG: '2.600 kg', Nutzlast: '2.040 kg', Ladefläche: '2.940 × 1.500 mm', Achsen: '2 (Tandem)', Marke: 'ANSSEMS', Typ: 'Tieflader', Rampen: '2× Stahl klappbar', Ladehöhe: 'ca. 370 mm' },
    description: 'Anssems TERRAX-2 2600.294×150 Basic — 2.600 kg PTAC, 2.040 kg Nutzlast, tieflader, 2 rampes Stahl klappbar, feuerverzinkt, 8 Zurrösen 2.000 kg, LED 13+7-pol., TÜV/CE. GRATIS Zubehör 5-teilig.',
    descriptionHtml: `<p>L'<strong>Anssems TERRAX-2 2600.294×150 Basic</strong> est un maschinentransporter tieflader professionnel fabriqué aux Pays-Bas (Anssems B.V.), avec <strong>2.040 kg de charge utile</strong>, 2 rampes Stahl klappbar et ladehöhe de seulement 370 mm pour un chargement facilité. <strong>5 accessoires GRATIS</strong> inclus à l'achat.</p>

<h3><i class="bi bi-gift"></i> GRATIS – 5 Zubehörteile inklusive</h3>
<ul>
  <li><strong>Zurrgurt-Set 4× 2t</strong> — Ratschenzurrgurte 50 mm / 2.000 kg LC, EN 12195-2</li>
  <li><strong>Unterlegkeile 2× 2.600 kg</strong> — Gummi-Unterlegkeile mit Grifföse pour tandem</li>
  <li><strong>Deichselschloss K80</strong> — Hochsicherheitsschloss K80-Kupplung 50 mm, 2 Schlüssel</li>
  <li><strong>Rampensicherungs-Ketten 2×</strong> — Stahl 90 cm + Haken pour klapprampen</li>
  <li><strong>LED-Arbeitsleuchte 12V</strong> — Magnetische LED 12V/20W pour Be-/Entladen</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.600 kg</strong> — Nutzlast : <strong>ca. 2.040 kg</strong> — Leergewicht : ca. 560 kg — Stützlast : 75 kg</li>
  <li>Ladefläche : <strong>2.940 × 1.500 mm</strong> — Ladehöhe (Tieflader) : ca. 370 mm</li>
  <li>Rampen : 2× Stahl klappbar hinten, Tragkraft gesamt 2.600 kg</li>
  <li>Seitenteile : Stahlbordwände 140 mm klappbar · 8× Zurrösen 2.000 kg · Riffelblech rutschfest</li>
  <li>Fahrgestell : Tandemachse, Achslast je 1.300 kg · Bremse : Auflaufbremse hydraulique · Bereifung : 195/55 R10C</li>
  <li>Deichsel : A-förmig feuerverzinkt · Kupplung : K80 50 mm · LED StVZO · 13-pol. + 7-pol. Adapter</li>
  <li>Führerschein : Klasse BE · Max. 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Qualität Anssems &amp; Homologation</h3>
<ul>
  <li>Feuerverzinkung complète — standard qualité Anssems, protection anticorrosion permanente</li>
  <li>EU-Typgenehmigung + TÜV-geprüft, alle Zulassungsdokumente inklusive</li>
  <li>2 Jahre Herstellergarantie · Livraison 3–7 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Zurrgurt-Set 4× 2t — Ratschenzurrgurte 50 mm EN 12195-2 pour 8 Zurrpunkte.',
      'Deichselschloss K80 — Hochsicherheitsschloss K80-Kupplung 50 mm, 2 Schlüssel.',
      'Unterlegkeile 2× 2.600 kg — Gummi mit Grifföse pour tandem.',
      'Rampensicherungs-Ketten 2× — Stahl 90 cm + Haken pour klapprampen.',
      'LED-Arbeitsleuchte 12V/20W — Magnetisch pour Be-/Entladen bei Dunkelheit.',
    ],
    featured: false,
  },
  {
    id: 59,
    slug: 'tablettanhaenger-getter-psx-2500-325-gb',
    name: 'Tablettanhänger GETTER PSX 2500.325 GB',
    subtitle: 'Tablettanhänger · GETTER · 2.500 kg · 1.920 kg Nutzlast · 3,25 m · Gitterboden · TÜV',
    category: 'pritsche',
    price: 2590,
    originalPrice: 3990,
    discount: 35,
    stock: 'instock',
    badge: 'Bestseller',
    image: '/image/Tablettanhänger GETTER PSX 2500.325 GB/Principal.webp',
    images: [
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/Principal.webp',
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/plateau-psx-2500325-version-go-getter.webp',
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/APLI2502325GG-Plateau-PSX-2500-325-version-Go-Getter-6.webp',
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/APLI2502325GG-Plateau-PSX-2500-325-version-Go-Getter-7.webp',
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/APLI2502325GG-Plateau-PSX-2500-325-version-Go-Getter-8.webp',
      '/image/Tablettanhänger GETTER PSX 2500.325 GB/APLI2502325GG-Plateau-PSX-2500-325-version-Go-Getter-9.webp',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.920 kg', Ladefläche: '3.250 × 1.900 mm', Achsen: '1', Marke: 'GETTER', Boden: 'Gitterboden (GB)', Bremse: 'Auflaufbremse mécanique' },
    description: 'GETTER PSX 2500.325 GB — 2.500 kg PTAC, 1.920 kg Nutzlast, Gitterboden verzinkt 6,2 m², Einzelachse, feuerverzinkt, 6 Zurrösen, LED 7-pol., TÜV/CE. GRATIS Zubehörpaket 269 €.',
    descriptionHtml: `<p>Le <strong>Tablettanhänger GETTER PSX 2500.325 GB</strong> est un plattformanhänger ouvert avec gitterboden (plancher grille verzinkt) pour une ventilation optimale et un drainage facilité. <strong>1.920 kg de charge utile</strong>, monoessieu léger, fabrication UE (Pologne). <strong>GRATIS : paquet d'accessoires 269 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 269 €)</h3>
<ul>
  <li><strong>Gitterboden-Schutzeinlage GETTER</strong> — Gummischutz 3,25 × 1,9 m passgenau, dämpft Vibrationen (Wert 78 €)</li>
  <li><strong>Plane & Spannset PSX 3,25 m</strong> — Abdeckplane 3,5 × 2,2 m, 120 g/m² wasserdicht + 8 Spanngummis (Wert 61 €)</li>
  <li><strong>V-Deichsel Sicherungsschloss GETTER</strong> — Gehärteter Stahl, wetterfest, 2 Schlüssel (Wert 49 €)</li>
  <li><strong>GETTER Achsschrauben-Wartungsset</strong> — Schmierfett 500g, Radmuttern-Sicherung, Achsschutz-Spray (Wert 45 €)</li>
  <li><strong>7-Pol Verlängerungskabel 5 m</strong> — StVZO-konform, wetterfest (Wert 36 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.500 kg</strong> — Nutzlast : <strong>ca. 1.920 kg</strong> — Eigengewicht : ca. 580 kg — Stützlast : 80 kg</li>
  <li>Ladefläche : <strong>3.250 × 1.900 mm</strong> (ca. 6,2 m²) — Boden : Gitterboden verzinkt, rutschfest</li>
  <li>Fahrgestell : Einzelachse, Blattfederung · Bremse : Auflaufbremse mécanique, Trommelbremse 2 Räder</li>
  <li>Bereifung : 195/50 R13 C · 6× Zurrösen 500 kg · Deichsel : V-Deichsel verzinkt · Kupplung : 50 mm</li>
  <li>LED StVZO · 7-pol. Stecker · Führerschein : Klasse BE · Max. 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Qualität &amp; Homologation</h3>
<ul>
  <li>Feuerverzinkter Stahlrahmen — EU-Qualitätsproduktion (Polen)</li>
  <li>EU-Typgenehmigung + COC-Papiere inklusive, sofort zulassungsfähig, TÜV-konform</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Gitterboden-Schutzeinlage GETTER 3,25×1,9 m — Gummischutz passgenau, dämpft Vibrationen.',
      'Plane & Spannset PSX 3,25 m — Abdeckplane wasserdicht + 8 Spanngummis.',
      'V-Deichsel Sicherungsschloss GETTER — Gehärteter Stahl, wetterfest, 2 Schlüssel.',
      'GETTER Achsschrauben-Wartungsset — Schmierfett, Radmuttern-Sicherung, Achsschutz-Spray.',
      '7-Pol Verlängerungskabel 5 m — StVZO-konform, wetterfest.',
    ],
    featured: false,
  },
  {
    id: 60,
    slug: 'pritschenanhaenger-lider-405-203',
    name: 'Pritschenanhänger LIDER – 405 x 203 x 6 cm – Doppelachse – Modell 39790',
    subtitle: 'Pritschenanhänger · LIDER · 3.500 kg · 2.820 kg Nutzlast · 4,05 × 2,03 m · Tandem · TÜV',
    category: 'pritsche',
    price: 3190,
    originalPrice: 4890,
    discount: 35,
    stock: 'instock',
    badge: 'Bestseller',
    image: '/image/Pritschenanhänger LIDER 405 x 203 x 6 cm/Principal.webp',
    images: [
      '/image/Pritschenanhänger LIDER 405 x 203 x 6 cm/Principal.webp',
    ],
    specs: { zGG: '3.500 kg', Nutzlast: '2.820 kg', Ladefläche: '4.050 × 2.030 mm', Achsen: '2 (Tandem)', Marke: 'LIDER', Modell: '39790', Boden: 'Tränenblech verzinkt', Bordwände: '60 mm' },
    description: 'LIDER Pritschenanhänger Modell 39790 — 3.500 kg PTAC, 2.820 kg Nutzlast, 8,2 m², Tandem hydraulique, Tränenblech feuerverzinkt, 8 Zurrösen, LED 7-pol., TÜV/CE. GRATIS Zubehörpaket 233 €.',
    descriptionHtml: `<p>Le <strong>Pritschenanhänger LIDER Modell 39790</strong> (405 × 203 × 6 cm) est la plateforme ouverte XXL de LIDER Trailers S.L. (Espagne) : <strong>3.500 kg PTAC</strong>, <strong>2.820 kg de charge utile</strong>, tandem hydraulique et plancher Tränenblech feuerverzinkt. <strong>GRATIS : paquet d'accessoires 233 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 233 €)</h3>
<ul>
  <li><strong>Gummi-Antirutschmatte Pritsche XL</strong> — 200 × 100 cm, 6 mm, vulkanisiert pour Tränenblech (Wert 67 €)</li>
  <li><strong>Sicherungsketten 2× mit Schloss</strong> — Gehärtet 8 mm, 1,5 m, pour machines & bois (Wert 55 €)</li>
  <li><strong>Tränenblech Pflegeset & Rostschutz</strong> — Zink-Spray 400 ml + Stahlbürste + Rost-Neutralisierer (Wert 44 €)</li>
  <li><strong>Kennzeichenbeleuchtung LED Nachrüst-Set</strong> — 7-pol., StVZO-zugelassen, wetterfest (Wert 38 €)</li>
  <li><strong>Warnflaggen-Set Überbreite 4×</strong> — Orange, StVZO-konform, Clip-Befestigung (Wert 29 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>3.500 kg</strong> — Nutzlast : <strong>ca. 2.820 kg</strong> — Eigengewicht : ca. 680 kg — Stützlast : 100 kg</li>
  <li>Ladefläche : <strong>4.050 × 2.030 mm</strong> (ca. 8,2 m²) — Bordwände : 60 mm (Rahmenhöhe)</li>
  <li>Boden : Tränenblech verzinkt · Rahmen : feuerverzinkt</li>
  <li>Fahrgestell : Tandem (Doppelachse), gefedert · Bremse : Auflaufbremse hydraulique, Trommelbremse 4 Räder</li>
  <li>Bereifung : 195/50 R13 C · 8× Zurrösen 500 kg · Kupplung : 50 mm · Stützrad : absenkbar</li>
  <li>LED StVZO · 7-pol. Stecker · Führerschein : Klasse BE · Max. 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Qualität LIDER &amp; Homologation</h3>
<ul>
  <li>Fabrication espagnole LIDER Trailers S.L. — feuerverzinkt, witterungs- und korrosionsbeständig</li>
  <li>EU-Typgenehmigung + COC-Papiere inklusive, sofort zulassungsfähig, TÜV-konform</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Gummi-Antirutschmatte Pritsche XL 200×100 cm — Vulkanisiert 6 mm pour Tränenblech.',
      'Sicherungsketten 2× 8 mm/1,5 m mit Schloss — Pour machines, engins, bois.',
      'Tränenblech Pflegeset & Rostschutz — Zink-Spray + Stahlbürste + Rost-Neutralisierer.',
      'Kennzeichenbeleuchtung LED Nachrüst-Set — 7-pol., StVZO, wetterfest.',
      'Warnflaggen-Set Überbreite 4× — Orange, StVZO-konform, Clip-Befestigung.',
    ],
    featured: true,
  },

  // ── VERKAUFSANHÄNGER & FOOD ───────────────────────────────────────────
  {
    id: 61,
    slug: 'tpv-foodtrailer-verkaufsanhaenger',
    name: 'TPV Foodtrailer Verkaufsanhänger',
    subtitle: 'Verkaufsanhänger · TPV · 2.500 kg · Vollausgestattet · HACCP · Street Food · TÜV',
    category: 'food',
    price: 8990,
    originalPrice: 13500,
    discount: 33,
    stock: 'instock',
    badge: 'new',
    image: '/image/TPV Foodtrailer Verkaufsanhänger/Principal.png',
    images: [
      '/image/TPV Foodtrailer Verkaufsanhänger/Principal.png',
      '/image/TPV Foodtrailer Verkaufsanhänger/104761356-1-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-2-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-3-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-4-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-5-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-7-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-9-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-10-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-11-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-12-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-13-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-14-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-15-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-21-768x576.jpg',
      '/image/TPV Foodtrailer Verkaufsanhänger/xxl_104761356-26-768x576.jpg',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.150 kg', Aufbaulänge: 'ca. 3,80 m', Stehhöhe: 'ca. 2,00 m', Marke: 'TPV', Strom: 'CEE 32A + CEE 16A', Wasser: 'Frisch- & Abwasser 100 L', Zulassung: 'CE/TÜV + HACCP' },
    description: 'TPV Foodtrailer Verkaufsanhänger — 2.500 kg PTAC, Edelstahl HACCP, 2-fach Spüle, Frischwasser 100 L, CEE 32A, LED, Markise klappbar, TÜV/CE. GRATIS Zubehörpaket 367 €.',
    descriptionHtml: `<p>Le <strong>TPV Foodtrailer Verkaufsanhänger</strong> est votre commerce mobile professionnel — vollausgestattet avec edelstahl-arbeitsküche HACCP, große Seitenöffnung mit Markise et strom/wasser intégré. Sofort einsatzbereit für Street Food, Catering, Märkte et Festivals. <strong>GRATIS : paquet de démarrage 367 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 367 €)</h3>
<ul>
  <li><strong>Werbe-Bannerset Street Food 3-teilig</strong> — 2 Rollup-Banner 60×160 cm + Beachflag 2,5 m, personnalisables (Wert 95 €)</li>
  <li><strong>Profi-Kochgeschirr-Set Edelstahl 8-teilig</strong> — Töpfe 10 L & 20 L, Pfanne Ø 36 cm, ustensiles (Wert 89 €)</li>
  <li><strong>Gastronomie-Feuerlöscher CO₂ 2 kg</strong> — Zugelassen Klasse F Fettbrände + Wandhalterung (Wert 72 €)</li>
  <li><strong>Digitales HACCP-Temperaturmess-Set</strong> — 2 Einstichthermometer –50/+300°C + Kühlschrankthermometer (Wert 64 €)</li>
  <li><strong>Frischwassertank-Winterschutz-Kit TPV</strong> — Ablasshahn-Set, Isolierband, frostsicheres Spülmittel (Wert 47 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.500 kg</strong> — Nutzlast : ca. 1.150 kg — Eigengewicht : ca. 1.350 kg — Stützlast : 120 kg</li>
  <li>Außenlänge : ca. 6,20 m — Aufbaulänge innen : ca. 3,80 m — Außenbreite : 2.100 mm — Stehhöhe : ca. 2,00 m</li>
  <li>Verkaufsöffnung : Seitenklapp 200×100 cm + Markise · Theke : Edelstahl klappbar</li>
  <li>Küche : Edelstahl-Arbeitsfläche, Hänge- & Unterschränke · Spüle : 2-fach HACCP · Boiler : Durchlauferhitzer 2.000 W</li>
  <li>Wasser : Frisch- & Abwassertank je 100 L · Strom : CEE 32A + CEE 16A · Lüftung : Dachlüfter + Abzugshaube Fettfilter</li>
  <li>Fahrgestell : Einzelachse · Bremse : Auflaufbremse · Bereifung : 195/70 R15C · Kupplung : 50 mm · Führerschein : BE</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
<ul>
  <li>Aufbau : Sandwichpaneel Alu/ISO/Alu lebensmittelecht · Boden : HACCP-konform rutschfest · Rahmen : feuerverzinkt</li>
  <li>CE-zertifiziert, TÜV-geprüft, HACCP-konform — alle Zulassungsdokumente inklusive</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Werbe-Bannerset Street Food 3-teilig — 2 Rollup + Beachflag 2,5 m, personnalisables.',
      'Profi-Kochgeschirr-Set Edelstahl 8-teilig — Töpfe 10 L & 20 L, Pfanne, ustensiles.',
      'Gastronomie-Feuerlöscher CO₂ 2 kg — Klasse F + Wandhalterung.',
      'HACCP-Temperaturmess-Set 2× digital — –50/+300°C + Kühlschrankthermometer.',
      'Frischwassertank-Winterschutz-Kit TPV — Ablasshahn, Isolierband, frostsicheres Spülmittel.',
    ],
    featured: true,
  },
  {
    id: 62,
    slug: 'pizzaanhaenger-foodtruck-360',
    name: 'Pizzaanhänger FOODTRUCK 360',
    subtitle: 'Pizzaanhänger · FOODTRUCK 360 · 2.500 kg · Steinbackofen 450°C · 360° Service · HACCP · TÜV',
    category: 'food',
    price: 11900,
    originalPrice: 17500,
    discount: 32,
    stock: 'instock',
    badge: null,
    image: '/image/Pizzaanhänger FOODTRUCK 360/Principal.png',
    images: [
      '/image/Pizzaanhänger FOODTRUCK 360/Principal.png',
      '/image/Pizzaanhänger FOODTRUCK 360/IMG20240710171723-1920x1440-1-1024x768-1-768x576.webp',
      '/image/Pizzaanhänger FOODTRUCK 360/IMG20240710171758-1920x2560-1-1152x1536-1-768x1024.webp',
      '/image/Pizzaanhänger FOODTRUCK 360/IMG20240710171814-1920x2560-1-1152x1536-1-768x1024.webp',
      '/image/Pizzaanhänger FOODTRUCK 360/IMG20240710171828-1920x1440-1-1024x768-1-768x576.webp',
      '/image/Pizzaanhänger FOODTRUCK 360/IMG20240710171849-1920x1440-1-1024x768-1-768x576.webp',
    ],
    specs: { zGG: '2.500 kg', Nutzlast: '1.050 kg', Aufbaulänge: 'ca. 4,00 m', Stehhöhe: 'ca. 2,00 m', Ofen: 'Steinbackofen Holz/Gas, Ø 80 cm, bis 450°C', Strom: 'CEE 32A + CEE 16A', Wasser: 'Frisch- & Abwasser 80 L', Zulassung: 'CE/TÜV + HACCP' },
    description: 'Pizzaanhänger FOODTRUCK 360 — 2.500 kg PTAC, Steinbackofen Holz/Gas Ø 80 cm 450°C, 360° Rundum-Klappen, Edelstahl HACCP, Frisch/Abwasser 80 L, CEE 32A, LED, TÜV/CE. GRATIS 295 €.',
    descriptionHtml: `<p>Le <strong>Pizzaanhänger FOODTRUCK 360</strong> est le food truck à pizza professionnel avec steinbackofen intégré (Holz/Gas, Ø 80 cm, jusqu'à <strong>450°C</strong>) et <strong>360° Rundum-Serviceklappen</strong> (L + R + Heck) pour servir dans toutes les directions. <strong>GRATIS : paquet Pizza 295 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 295 €)</h3>
<ul>
  <li><strong>Profi-Pizzaschieber-Set 4-teilig</strong> — Alu Ø 33 & 40 cm, Holzgriff-Schieber 130 cm + Reinigungsbürste (Wert 78 €)</li>
  <li><strong>Ofenstein-Reinigungsset FOODTRUCK 360</strong> — Naturstein-Pulver 1 kg, Lavastein-Öl 500 ml, Bürste + feuerfester Handschuh (Wert 63 €)</li>
  <li><strong>Kamin-Schutzabdeckung & Transportset</strong> — Passgenau FOODTRUCK 360, wetterfest + Montagewerkzeug (Wert 58 €)</li>
  <li><strong>Pizzateig-Starter-Gewürzset Italia</strong> — Oregano, Basilikum, Meersalz, Knoblauch, Olivenöl Extra Vergine (Wert 54 €)</li>
  <li><strong>Pizza-Transportboxen-Set 50-teilig</strong> — 3 Größen 24/30/40 cm, fettdicht, stapelbar (Wert 42 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.500 kg</strong> — Nutzlast : ca. 1.050 kg — Eigengewicht : ca. 1.450 kg — Stützlast : 120 kg</li>
  <li>Außenlänge : ca. 6,50 m — Aufbaulänge innen : ca. 4,00 m — Außenbreite : 2.200 mm — Stehhöhe : ca. 2,00 m</li>
  <li>Pizzaofen : Steinbackofen Holz/Gas, Ø 80 cm Backfläche, bis 450°C · Kaminabzug : Edelstahl abnehmbar</li>
  <li>Serviceklappen : 360° Rundum (L + R + Heck) · Arbeitsfläche : 2 × 1,20 m Edelstahl + Pizzaroller-Station</li>
  <li>Spüle : 2-fach HACCP · Wasser : Frisch- & Abwasser je 80 L · Boiler : 2.000 W · Lüftung : motorisierte Dunstabzugshaube Aktivkohlefilter</li>
  <li>Strom : CEE 32A + CEE 16A · LED innen & außen · Fahrgestell : Tandem · Bremse : Auflaufbremse · Bereifung : 195/70 R15C · Führerschein : BE</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
<ul>
  <li>Aufbau : Sandwichpaneel Alu/ISO/Alu lebensmittelecht · Rahmen : feuerverzinkt hitzebeständig · Boden : HACCP-konform</li>
  <li>CE-zertifiziert, TÜV-geprüft, HACCP-konform — alle Zulassungsdokumente inklusive</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Profi-Pizzaschieber-Set 4-teilig — Alu Ø 33 & 40 cm, Holzgriff 130 cm + Reinigungsbürste.',
      'Ofenstein-Reinigungsset — Naturstein-Pulver 1 kg + Lavastein-Öl + feuerfester Handschuh.',
      'Kamin-Schutzabdeckung & Transportset FOODTRUCK 360 — Passgenau, wetterfest.',
      'Pizzateig-Starter-Gewürzset Italia — Oregano, Basilikum, Meersalz, Knoblauch, Olivenöl.',
      'Pizza-Transportboxen-Set 50-teilig — 3 Größen, fettdicht, stapelbar.',
    ],
    featured: true,
  },
  {
    id: 63,
    slug: 'marktstand-aussensteher-marktanhaenger',
    name: 'Marktstand Außensteher Marktanhänger 300-170 950 kg (W09003594N0L48300)',
    subtitle: 'Marktanhänger · 950 kg · Außensteher · Klapptheke 3 m · Markise · CEE 16A · TÜV',
    category: 'food',
    price: 3490,
    originalPrice: 5200,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/Marktstand Außensteher Marktanhänger/Principal.png',
    images: [
      '/image/Marktstand Außensteher Marktanhänger/Principal.png',
      '/image/Marktstand Außensteher Marktanhänger/664765_aktionsanhaenger_marltstand_17auf4m_vorene-1.jpg.webp',
      '/image/Marktstand Außensteher Marktanhänger/664766_aktionsanhaenger_marltstand_17auf4m_hinten.jpg.webp',
      '/image/Marktstand Außensteher Marktanhänger/664767_aktionsanhaenger_verkaufsanhaenger_marktanhaenger_w09003133e0l48300_h-1.JPG.webp',
      '/image/Marktstand Außensteher Marktanhänger/664768_aktionsanhaenger_verkaufsanhaenger_marktanhaenger_w09003133e0l48300_v.JPG.webp',
      '/image/Marktstand Außensteher Marktanhänger/664769_aktionsanhaenger_verkaufsanhaenger_marktanhaenger_w09003133e0l48300_s.JPG.webp',
    ],
    specs: { zGG: '950 kg', Nutzlast: '470 kg', Standfläche: '3.000 × 1.700 mm', Stehhöhe: 'ca. 2,10 m', FIN: 'W09003594N0L48300', Theke: 'klappbar 300×60 cm', Markise: 'frontseitig 3,00 m', Strom: 'CEE 16A' },
    description: 'Marktstand Außensteher 300-170 — 950 kg PTAC, 470 kg Nutzlast, Klapptheke 300×60 cm, Markise 3 m, Seitenwände 3-seitig klappbar, CEE 16A, LED, TÜV/CE. FIN W09003594N0L48300. GRATIS 303 €.',
    descriptionHtml: `<p>Le <strong>Marktstand Außensteher Marktanhänger 300-170</strong> (FIN : W09003594N0L48300) est le marktanhänger professionnel pour Wochenmärkte, Messen et Open-Air-Events. <strong>Klapptheke 300×60 cm</strong>, Markise frontale 3 m, 3-seitig klappbare Seitenwände — aufgebaut in wenigen Minuten. <strong>GRATIS : paquet Marktstand 303 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 303 €)</h3>
<ul>
  <li><strong>Marktanhänger-Schutzhülle 300-170</strong> — Maßgefertigte Vollschutzabdeckung, wasser- & UV-beständig, 210D-Polyester (Wert 69 €)</li>
  <li><strong>Marktstand-Seitenwand-Windschutz-Set 3-teilig</strong> — 600D-Polyester je 3×2,1 m, UV-beständig, Ösen & Spannseile (Wert 86 €)</li>
  <li><strong>Warentrennständer & Preistafel-Set 8-teilig</strong> — 4 Trennwände Acryl + 4 Preistafeln DIN A4 beschreibbar (Wert 57 €)</li>
  <li><strong>Profi-Kassenbox & Geldwechsel-Set</strong> — Abschließbar, 8 Münzfächer, 5 Scheinfächer, Wandmontage (Wert 48 €)</li>
  <li><strong>LED-Marktstands-Zusatzbeleuchtung 5 m</strong> — IP65, warmweiß, 12V/230V-Adapter (Wert 43 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>950 kg</strong> — Nutzlast : ca. 470 kg — Eigengewicht : ca. 480 kg — Stützlast : 75 kg</li>
  <li>Standfläche : <strong>3.000 × 1.700 mm</strong> — Stehhöhe : ca. 2,10 m — Außenhöhe (mit Dach) : ca. 2,60 m</li>
  <li>Verkaufstheke : klappbar 300×60 cm · Seitenwände : 3-seitig klappbar · Rückwand : fest mit Lagerfach</li>
  <li>Markise : ausziehbar frontseitig 3,00 m · Stauraum : Unterflur-Stauboxen L & R</li>
  <li>Rahmen : feuerverzinkter Stahl · Dach : Stahl-Alu mit Wellblech · Boden : Stahl verzinkt rutschhemmend</li>
  <li>Strom : CEE 16A + Steckdosenleiste innen · LED 12V/230V · Fahrgestell : Einachser · Bereifung : 185/70 R13C · Führerschein : B</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
<ul>
  <li>FIN : W09003594N0L48300 · Zubehör inkl. : Unterlegkeile, Sicherheitskette, Deichselschloss</li>
  <li>CE-zertifiziert, TÜV-geprüft — alle Zulassungsdokumente inklusive · Führerschein Klasse B</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Marktanhänger-Schutzhülle 300-170 — Vollschutz wasser-/UV-beständig 210D-Polyester.',
      'Marktstand-Seitenwand-Windschutz-Set 3-teilig — 600D-Polyester 3×2,1 m, Ösen.',
      'Warentrennständer & Preistafel-Set 8-teilig — Acryl + DIN A4 beschreibbar.',
      'Profi-Kassenbox abschließbar — 8 Münzfächer, 5 Scheinfächer, Wandmontage.',
      'LED-Zusatzbeleuchtung 5 m IP65 — Warmweiß, 12V/230V-Adapter.',
    ],
    featured: false,
  },
  {
    id: 64,
    slug: 'food-truck-absinthe-anhaenger',
    name: 'FOOD TRUCK ABSINTHE ANHÄNGER',
    subtitle: 'Food Truck · ABSINTHE · 1.300 kg · Bar-Theke · Kühlschrank 120 L · CEE 16A · TÜV',
    category: 'food',
    price: 7490,
    originalPrice: 11200,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/FOOD TRUCK ABSINTHE ANHÄNGER/Principal.png',
    images: [
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/Principal.png',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorqueburgerjpg_5bfd57cdd01ef-removebg-preview-1.png',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquecuisinejpg_5bfd57cede48a-removebg-preview.png',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck10jpeg_6454c5b99dcf8-768x1024.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck11jpeg_6454c5b6588a9-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck12jpeg_6454c5b4acf5b-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck13jpeg_6454c5b808510-768x1024.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck14jpeg_6454c5ae2f4a4-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck15jpeg_6454c5b311535-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck16jpeg_6454c5afca1ae-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck17jpeg_6454c5bb2b1f5-1024x768-1-768x576.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquefoodtruck9jpeg_6454c5b16f1e0-768x1024.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquesnack2jpg_5e67b6cb36b5f-1152x1536-1-768x1024.jpeg',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquesnackjpg_5bfd57cf520a8-removebg-preview.png',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquestreetfoodjpg_5bfd57cf1b934-removebg-preview.png',
      '/image/FOOD TRUCK ABSINTHE ANHÄNGER/remorquetraiteurjpg_5bfd57ce12ee4-removebg-preview.png',
    ],
    specs: { zGG: '1.300 kg', Nutzlast: '350 kg', Karosserielänge: 'ca. 3,50 m', Innenhöhe: 'ca. 1,90 m', Kühlschrank: '120 L 2–8°C + Tiefkühl 30 L', Wasser: 'Frisch 100 L / Abwasser 80 L', Strom: 'CEE 16A + 12V Bordnetz', Zulassung: 'CE/TÜV + Lebensmittelbereich' },
    description: 'FOOD TRUCK ABSINTHE ANHÄNGER — 1.300 kg PTAC, 350 kg Nutzlast, Bar-Theke Edelstahl 120 cm, Kühlschrank 120 L + Tiefkühl 30 L, Doppelspüle, Frisch/Abwasser 100/80 L, CEE 16A, LED, TÜV/CE. GRATIS 341 €.',
    descriptionHtml: `<p>Le <strong>FOOD TRUCK ABSINTHE ANHÄNGER</strong> est la bar mobile professionnelle pour Absinthe, spiritueux, cocktails et événements exclusifs. Klapp-Ausgabefenster 150×80 cm avec markise, bartresen Edelstahl 120 cm, kühlschrank 120 L et LED-Neondesign ABSINTHE. <strong>GRATIS : paquet Bar 341 €</strong> inclus.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 341 €)</h3>
<ul>
  <li><strong>LED-Leuchtschild ABSINTHE</strong> — Neonschild 60×30 cm grün, 12V/230V, pour fenêtre & extérieur (Wert 79 €)</li>
  <li><strong>Absinthe-Gläser-Set 12er</strong> — 12× Loucheglas 200 ml Kristallglas + 2× Absinthlöffel Edelstahl (Wert 87 €)</li>
  <li><strong>Kassensystem-Halterung Tablet</strong> — Universale 360° + wasserdichte Abdeckung + Kabelmanagement POS (Wert 58 €)</li>
  <li><strong>Eiswürfelzange & Barzubehör</strong> — Zange Edelstahl + Jigger + Stir-Löffel 30 cm + 20 Untersetzer ABSINTHE (Wert 64 €)</li>
  <li><strong>Edelstahl-Reinigungsset Food Truck</strong> — Reiniger Konzentrat 1 L + Entfetter + Reinigungsbürsten 5-teilig (Wert 53 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>1.300 kg</strong> — Nutzlast : ca. 350 kg — Leergewicht : ca. 950 kg — Stützlast : 4× Kurbelstützen</li>
  <li>Karosserielänge : ca. 3,50 m — Außenbreite : ca. 2,10 m — Innenhöhe : ca. 1,90 m — Arbeitsfläche : ca. 4 m²</li>
  <li>Ausgabefenster : Klapp 150×80 cm + Markise · Bartresen außen : Edelstahl 120×50 cm klappbar</li>
  <li>Kühlanlage : Unterthekenkühlschrank 120 L (2–8°C) + Tiefkühlschublade 30 L (–18°C)</li>
  <li>Spüle : Edelstahl-Doppelspüle 2-Becken · Wasser : Frisch 100 L / Abwasser 80 L · Lüftung : Dachlüfter</li>
  <li>Strom : CEE 16A 230V + 12V Bordnetz, FI-Schutzschalter, 4× Schuko-Steckdosen IP44 · Bereifung : 195/70 R15C</li>
  <li>Fahrgestell : Einachser · Bremse : Auflaufbremse 1.300 kg · Führerschein : BE · Max. 100 km/h</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zulassung &amp; Garantie</h3>
<ul>
  <li>Innen : Hygieneblech Edelstahl / FRP-Panel · Außen : Stahlblech ABSINTHE-Branding · Boden : Gummi-Industrieboden lebensmittelgeeignet</li>
  <li>EU-Straßenzulassung, CE-geprüft, TÜV-konform, Lebensmittelbereich — alle Dokumente inklusive</li>
  <li>2 Jahre Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'LED-Leuchtschild ABSINTHE 60×30 cm — Neon grün 12V/230V pour fenêtre & extérieur.',
      'Absinthe-Gläser-Set 12er + 2 Absinthlöffel Edelstahl — Kristallglas 200 ml Loucheglas.',
      'Kassensystem-Halterung Tablet 360° — Wasserdicht + Kabelmanagement POS.',
      'Eiswürfelzange & Barzubehör Edelstahl — Jigger + Stir-Löffel + 20 Untersetzer.',
      'Edelstahl-Reinigungsset Food Truck — Konzentrat 1 L + Entfetter + Bürsten 5-teilig.',
    ],
    featured: false,
  },

  // ── KÜHLANHÄNGER ─────────────────────────────────────────────────────
  {
    id: 65,
    slug: 'variant-1315-k2-kuehl',
    name: 'Variant 1315 K2 Kühlanhänger',
    subtitle: 'Kühlanhänger · VARIANT · 1.315 kg · 650 kg Nutzlast · K2 ATP · –20°C/+12°C · Made in Germany',
    category: 'kuehl',
    price: 4290,
    originalPrice: 6500,
    discount: 34,
    stock: 'instock',
    badge: 'new',
    image: '/image/Variant 1315 K2 Kühlanhänger/Principal.jpg',
    images: [
      '/image/Variant 1315 K2 Kühlanhänger/Principal.jpg',
      '/image/Variant 1315 K2 Kühlanhänger/1315K237-2_600x600.jpg',
      '/image/Variant 1315 K2 Kühlanhänger/1315K237-2_600x600 (1).jpg',
      '/image/Variant 1315 K2 Kühlanhänger/1315K237-3_600x600.jpg',
    ],
    specs: { zGG: '1.315 kg', Nutzlast: '650 kg', Laderaum: '2.600 × 1.500 × 1.600 mm', Volumen: 'ca. 6,2 m³', Isolierklasse: 'K2 (ATP)', Temperatur: '–20°C bis +12°C', Kühlung: 'Diesel-Aggregat + 230V Standby', Isolierung: 'PU 60 mm' },
    description: 'Variant 1315 K2 — 1.315 kg PTAC, 650 kg Nutzlast, laderaum 6,2 m³, PU-Isolierung 60 mm, ATP K2, –20°C/+12°C, Diesel-Aggregat + 230V Standby, GFK innen, Alu außen, TÜV/CE. Made in Germany.',
    descriptionHtml: `<p>Le <strong>Variant 1315 K2 Kühlanhänger</strong> est le kühlkofferanhänger compact professionnel Made in Germany. Classe d'isolation <strong>K2 (ATP)</strong>, plage de température <strong>–20°C à +12°C</strong>, laderaum 6,2 m³ avec revêtement intérieur GFK lebensmittelecht. Idéal pour Metzger, Bäcker, Caterer et Pharma.</p>

<h3><i class="bi bi-gift"></i> GRATIS – 5 Zubehörteile inklusive</h3>
<ul>
  <li><strong>Digitales Thermometer</strong> — Précision température pour contrôle laderaum</li>
  <li><strong>Türdichtung K2 Ersatz</strong> — Original-Gummidichtung pour porte arrière</li>
  <li><strong>Extra LED-Innenleuchte 12V</strong> — LED pour laderaum</li>
  <li><strong>Kühleinheit Wartungsset</strong> — Entretien du groupe frigorifique</li>
  <li><strong>Spanngurt-Set 4×</strong> — Sécurisation de la charge</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>1.315 kg</strong> — Nutzlast : <strong>ca. 650 kg</strong> — Eigengewicht : ca. 665 kg — Stützlast : max. 75 kg</li>
  <li>Laderaum (L×B×H) : <strong>2.600 × 1.500 × 1.600 mm</strong> — Volumen : ca. 6,2 m³</li>
  <li>Isolierklasse : <strong>K2 ATP</strong> — Isolierung : PU-Hartschaum 60 mm — Temperatur : <strong>–20°C bis +12°C</strong></li>
  <li>Kühlaggregat : Diesel-Kühlaggregat autonome + 230V Standby-Anschluss</li>
  <li>Innen : GFK lebensmittelecht — Außen : Aluminium-Sandwichpaneel — Boden : Alu-Riffelblech rutschfest</li>
  <li>Türen : 1× zweiflügelig Hecktür 270° feststellbar · LED-Innenbeleuchtung 12V · Stützrad klappbar</li>
  <li>Fahrgestell : Einachser · Bremse : Auflaufbremse · Bereifung : 185/65 R14 · 13-pol. · Führerschein : B</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zertifizierung &amp; Garantie</h3>
<ul>
  <li>ATP-Zertifikat Klasse K2 — zugelassen für gewerblichen Lebensmitteltransport in ganz Europa</li>
  <li>EU-zugelassen, CE-konform, TÜV-geprüft, Made in Germany (Variant, Deutschland)</li>
  <li>2 Jahre gesetzliche Gewährleistung · Livraison 5–14 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Digitales Thermometer — Précision pour contrôle température laderaum.',
      'Türdichtung K2 Ersatz — Original-Gummidichtung pour porte arrière Variant.',
      'Extra LED-Innenleuchte 12V — Pour laderaum.',
      'Kühleinheit Wartungsset — Entretien groupe frigorifique Diesel.',
      'Spanngurt-Set 4× — Sécurisation de charge dans koffer.',
    ],
    featured: true,
  },
  {
    id: 66,
    slug: 'meyer-azkf3035180-kuehl',
    name: 'MEYER AZKF3035180 Kühlanhänger',
    subtitle: 'Kühlanhänger · MEYER · 1.800 kg · 950 kg Nutzlast · ATP · –20°C/+12°C · Made in Germany',
    category: 'kuehl',
    price: 8900,
    originalPrice: 13500,
    discount: 34,
    stock: 'instock',
    badge: null,
    image: '/image/MEYER AZKF3035180 Kühlanhänger/Principal.png',
    images: [
      '/image/MEYER AZKF3035180 Kühlanhänger/Principal.png',
      '/image/MEYER AZKF3035180 Kühlanhänger/meyer-azkf3035180-remorque-fourgon-frigorifique-5.webp',
      '/image/MEYER AZKF3035180 Kühlanhänger/meyer-azkf3035180-remorque-fourgon-frigorifique-6.webp',
      '/image/MEYER AZKF3035180 Kühlanhänger/meyer-azkf3035180-remorque-fourgon-frigorifique-7.webp',
      '/image/MEYER AZKF3035180 Kühlanhänger/meyer-azkf3035180-remorque-fourgon-frigorifique-8.webp',
      '/image/MEYER AZKF3035180 Kühlanhänger/meyer-azkf3035180-remorque-fourgon-frigorifique-9.webp',
    ],
    specs: { zGG: '1.800 kg', Nutzlast: '950 kg', Laderaum: '3.000 × 1.780 × 1.800 mm', Volumen: 'ca. 9,6 m³', Isolierung: 'PU 60 mm', Temperatur: '–20°C bis +12°C', Kühlung: 'Thermo King / Carrier Diesel + 230V Standby', Zertifizierung: 'ATP' },
    description: 'MEYER AZKF3035180 — 1.800 kg PTAC, 950 kg Nutzlast, laderaum 9,6 m³, PU 60 mm, ATP, –20°C/+12°C, Thermo King / Carrier Diesel + 230V Standby, GFK innen, Alu außen, TÜV/CE. Made in Germany.',
    descriptionHtml: `<p>Le <strong>MEYER AZKF3035180</strong> est le kühlkofferanhänger professionnel grande capacité Made in Germany (MEYER, Deutschland). <strong>9,6 m³</strong> de volume de chargement, isolation PU 60 mm, groupe frigorifique Thermo King / Carrier autonome Diesel + 230V Standby, homologation <strong>ATP</strong>. Idéal pour transport intensif de denrées périssables.</p>

<h3><i class="bi bi-gift"></i> GRATIS – 5 Zubehörteile inklusive</h3>
<ul>
  <li><strong>Digitales Thermometer</strong> — Précision température pour contrôle laderaum</li>
  <li><strong>Türdichtung Ersatz</strong> — PVC-Gummidichtung Ersatzsatz pour porte arrière</li>
  <li><strong>Innenraum-Reinigungsset</strong> — Lebensmittelsicher, pour GFK-Wände</li>
  <li><strong>Antirutschmatte</strong> — Rutschsicher pour Laderaumboden</li>
  <li><strong>Spanngurt-Set 4×</strong> — Sichere Ladungssicherung</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>1.800 kg</strong> — Nutzlast : <strong>ca. 950 kg</strong> — Eigengewicht : ca. 850 kg — Stützlast : max. 100 kg</li>
  <li>Laderaum (L×B×H) : <strong>3.000 × 1.780 × 1.800 mm</strong> — Volumen : ca. 9,6 m³</li>
  <li>Isolierung : PU-Schaum <strong>60 mm</strong> — Temperatur : <strong>–20°C bis +12°C</strong> — Zertifizierung : <strong>ATP</strong></li>
  <li>Kühlaggregat : Thermo King / Carrier, Diesel autonome + 230V Standby-Anschluss</li>
  <li>Innen : GFK lebensmittelecht — Außen : Aluminium-Sandwichpaneel — Boden : Alu-Riffelblech rutschfest</li>
  <li>Türen : 1× zweiflügelig Hecktür, 270° feststellbar, PVC-Gummidichtung umlaufend · LED 12V innen</li>
  <li>Fahrgestell : Einachser · Bremse : Auflaufbremse + Rückfahrsperre · Bereifung : 185 R14 C · 13-pol. · Führerschein : B</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zertifizierung &amp; Garantie</h3>
<ul>
  <li>ATP-Zertifikat — zugelassen für gewerblichen Lebensmitteltransport in ganz Europa</li>
  <li>EU-zugelassen, CE-konform, TÜV-geprüft, Made in Germany (MEYER, Deutschland)</li>
  <li>2 Jahre gesetzliche Gewährleistung · Livraison 5–14 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Digitales Thermometer — Précision pour contrôle température laderaum.',
      'Türdichtung Ersatz PVC — Gummidichtung Ersatzsatz porte arrière MEYER.',
      'Innenraum-Reinigungsset lebensmittelsicher — Pour GFK-Wände.',
      'Antirutschmatte Laderaum — Rutschsicher pour Alu-Riffelblech.',
      'Spanngurt-Set 4× — Ladungssicherung dans koffer.',
    ],
    featured: true,
  },
  {
    id: 67,
    slug: 'kuehlkofferanhaenger-h02c62630-14-1500',
    name: 'Kühlkofferanhänger H02C62630-14-1500',
    subtitle: 'Kühlkofferanhänger · 2.600 kg · 1.500 kg Nutzlast · ATP · –20°C/+12°C · Einachser · TÜV',
    category: 'kuehl',
    price: 5490,
    originalPrice: 8200,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/Kühlkofferanhänger H02C62630-14-1500/Principal.png',
    images: [
      '/image/Kühlkofferanhänger H02C62630-14-1500/Principal.png',
      '/image/Kühlkofferanhänger H02C62630-14-1500/688292_687494_aktionsanhaenger_kuelkoffer_300x150x190_2600kg_v.JPG.webp',
      '/image/Kühlkofferanhänger H02C62630-14-1500/688298_687497_aktionsanhaenger_kuelkoffer_300x150x190_2600kg_seitlich.JPG.webp',
      '/image/Kühlkofferanhänger H02C62630-14-1500/688300_687498_aktionsanhaenger_kuelkoffer_300x150x190_2600kg_h_offen.JPG.webp',
      '/image/Kühlkofferanhänger H02C62630-14-1500/688301_687496_aktionsanhaenger_kuelkoffer_300x150x190_2600kg_deteil2.JPG.webp',
    ],
    specs: { zGG: '2.600 kg', Nutzlast: '1.500 kg', Laderaum: '3.000 × 1.500 × 1.900 mm', Isolierung: 'PU 60 mm', Temperatur: '–20°C bis +12°C', Kühlung: 'Diesel-Aggregat + 230V Standby', Zertifizierung: 'ATP' },
    description: 'Kühlkofferanhänger H02C62630-14-1500 — 2.600 kg PTAC, 1.500 kg Nutzlast, laderaum 3.000×1.500×1.900 mm, PU 60 mm, ATP, –20°C/+12°C, Diesel-Aggregat + 230V Standby, GFK innen, Alu außen, TÜV/CE.',
    descriptionHtml: `<p>Le <strong>Kühlkofferanhänger H02C62630-14-1500</strong> est le kühlkofferanhänger einachsig de grande capacité : <strong>2.600 kg PTAC</strong>, <strong>1.500 kg de charge utile</strong>, laderaum 3.000×1.500×1.900 mm avec isolation PU 60 mm et certification <strong>ATP</strong>. Diesel-Kühlaggregat autonome + 230V Standby pour toutes les situations.</p>

<h3><i class="bi bi-gift"></i> GRATIS – 5 Zubehörteile inklusive</h3>
<ul>
  <li><strong>Digitales Thermometer</strong> — Précision pour surveillance température laderaum</li>
  <li><strong>Ersatz-Türdichtung</strong> — Gummidichtung de remplacement pour porte arrière</li>
  <li><strong>Extra LED-Innenleuchte</strong> — Meilleure illumination du laderaum</li>
  <li><strong>Antirutschmatte</strong> — Fixation sécurisée de la charge sur Alu-Riffelblech</li>
  <li><strong>Spanngurt-Set 4×</strong> — Ladungssicherung professionnelle</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.600 kg</strong> — Nutzlast : <strong>1.500 kg</strong> — Eigengewicht : ca. 1.100 kg — Stützlast : max. 100 kg</li>
  <li>Laderaum (L×B×H) : <strong>3.000 × 1.500 × 1.900 mm</strong></li>
  <li>Isolierung : PU <strong>60 mm</strong> — Temperatur : <strong>–20°C bis +12°C</strong> — Zertifizierung : <strong>ATP</strong></li>
  <li>Kühlaggregat : Diesel autonome + 230V Standby-Option</li>
  <li>Innen : GFK lebensmittelecht — Außen : Aluminium-Sandwichpaneel — Boden : Alu-Riffelblech rutschfest</li>
  <li>Türen : 1× zweiflügelig Hecktür mit Gummidichtung · LED-Innenbeleuchtung · Stützrad klappbar</li>
  <li>Fahrgestell : Einachser · Bremse : Auflaufbremse mit Feststeller · Bereifung : 195/65 R15 · 13-pol. · Führerschein : B</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zertifizierung &amp; Garantie</h3>
<ul>
  <li>ATP-Zertifikat — zugelassen für gewerblichen Lebensmitteltransport in ganz Europa</li>
  <li>EU-zugelassen, CE-konform, TÜV-geprüft — alle Zulassungsdokumente inklusive</li>
  <li>2 Jahre gesetzliche Gewährleistung · Livraison 5–14 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Digitales Thermometer — Surveillance précise température laderaum.',
      'Ersatz-Türdichtung Gummi — Remplacement joint porte arrière H02C62630.',
      'Extra LED-Innenleuchte — Meilleure illumination laderaum.',
      'Antirutschmatte — Fixation charge sur Alu-Riffelblech.',
      'Spanngurt-Set 4× — Ladungssicherung professionnelle.',
    ],
    featured: false,
  },
  {
    id: 68,
    slug: 'humbaur-5264-ka-kuehl',
    name: 'HUMBAUR 5264 KA Kühlanhänger',
    subtitle: 'Kühlanhänger · HUMBAUR · 2.600 kg · 1.740 kg Nutzlast · 20,7 m³ · ATP-FRC · –25°C/+25°C · Tandem',
    category: 'kuehl',
    price: 7290,
    originalPrice: 10900,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-2.webp',
    images: [
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-2.webp',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-2-removebg-preview.png',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-3.webp',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-4-e1705073484588.webp',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-6.webp',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-8.webp',
      '/image/HUMBAUR 5264 KA Kühlanhänger/humbaur-5264-ka-remorque-fourgon-frigorifique-9.webp',
    ],
    specs: { zGG: '2.600 kg', Nutzlast: '1.740 kg', Laderaum: '5.200 × 2.100 × 1.900 mm', Volumen: 'ca. 20,7 m³', Isolierung: 'PU 80 mm', Temperatur: '–25°C bis +25°C', Kühlung: 'HUMBAUR 12/24V + 230V CEE', Zertifizierung: 'ATP-FRC' },
    description: 'HUMBAUR 5264 KA — 2.600 kg PTAC, 1.740 kg Nutzlast, laderaum 20,7 m³, PU 80 mm, ATP-FRC, –25°C/+25°C, Kühlaggregat 12/24V + 230V CEE 16A, PE-HD innen antibakteriell, Alu außen, TÜV/CE.',
    descriptionHtml: `<p>Le <strong>HUMBAUR 5264 KA Kühlanhänger</strong> est le Großraum-Kühlanhänger tandem professionnel HUMBAUR : <strong>20,7 m³</strong> de volume utile, isolation PU <strong>80 mm</strong>, plage de température <strong>–25°C à +25°C</strong>, certification <strong>ATP-FRC</strong> et groupe frigorifique HUMBAUR 12/24V + 230V CEE. Pour les grandes livraisons alimentaires et pharmaceutiques.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 447 €)</h3>
<ul>
  <li><strong>HUMBAUR Fernüberwachungs-SIM-Modul Kühlmonitoring</strong> — GSM/GPS-Modul, température & position par smartphone (Wert 112 €)</li>
  <li><strong>HUMBAUR KA Kühlaggregat-Schutzgitter & Abdeckplane</strong> — Edelstahl-Schutzgitter + Standplane (Wert 97 €)</li>
  <li><strong>Großraumkoffer-Laderampen-Set klappbar 2-teilig</strong> — Alu, 500 kg je Rampe, pour laderaum (Wert 87 €)</li>
  <li><strong>HUMBAUR Kühlraum-Desinfektion Profi-Set 5264</strong> — Schaumdesinfektion 10 L + Sprühgerät + Schutzausrüstung (Wert 83 €)</li>
  <li><strong>HUMBAUR 5264 KA Türdichtungs-Erneuerungsset</strong> — Original-Umlaufdichtungen beide Heckflügeltüren + Montagematerial (Wert 68 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>2.600 kg</strong> — Nutzlast : <strong>ca. 1.740 kg</strong> — Eigengewicht : ca. 860 kg — Stützlast : max. 150 kg</li>
  <li>Laderaum (L×B×H) : <strong>5.200 × 2.100 × 1.900 mm</strong> — Innenvolumen : ca. 20,7 m³</li>
  <li>Isolierung : PU-Hartschaum <strong>80 mm</strong> (Wand + Boden + Decke) — Temperatur : <strong>–25°C bis +25°C</strong></li>
  <li>Kühlaggregat : HUMBAUR 12/24V Fahrbetrieb + 230V/16A CEE Standkühlung — Zertifizierung : <strong>ATP-FRC</strong></li>
  <li>Innen : PE-HD antibakteriell weiß + Alu-Riffelblech T-Nut-Profil — Außen : Alu-Sandwich GFK-verstärkt</li>
  <li>Türen : Doppel-Heckflügeltüren 270° Magnet-Arretierung, Umlaufdichtung, abschließbar · LED IP65 automatisch</li>
  <li>Fahrgestell : Tandem · Bremse : Auflaufbremse hydraulique · Bereifung : 225/75 R16C · 13-pol. · Führerschein : BE</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zertifizierung &amp; Garantie</h3>
<ul>
  <li>ATP-FRC — CE-zertifiziert, TÜV-geprüft, EU-Lebensmittelverordnung (EG) Nr. 852/2004 konform</li>
  <li>24 Monate HUMBAUR Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'HUMBAUR Fernüberwachungs-SIM-Modul — GSM/GPS température & position smartphone.',
      'Kühlaggregat-Schutzgitter Edelstahl + Abdeckplane HUMBAUR KA.',
      'Großraumkoffer-Laderampen Alu 2× klappbar — 500 kg par rampe.',
      'Kühlraum-Desinfektion Profi-Set — Schaumdesinfektion 10 L + Sprühgerät.',
      'Türdichtungs-Erneuerungsset HUMBAUR 5264 KA — Original Umlaufdichtungen.',
    ],
    featured: false,
  },
  {
    id: 69,
    slug: 'boeckmann-kk-2513-15-h-kuehl',
    name: 'Böckmann KK 2513/15 H Kühlanhänger',
    subtitle: 'Kühlanhänger · BÖCKMANN · 1.500 kg · 880 kg Nutzlast · ATP · –20°C/+10°C · Einachser · TÜV',
    category: 'kuehl',
    price: 9490,
    originalPrice: 14200,
    discount: 33,
    stock: 'instock',
    badge: null,
    image: '/image/Böckmann KK 251315 H Kühlanhänger/Principal.webp',
    images: [
      '/image/Böckmann KK 251315 H Kühlanhänger/Principal.webp',
      '/image/Böckmann KK 251315 H Kühlanhänger/37845_3848680365636.webp',
      '/image/Böckmann KK 251315 H Kühlanhänger/37845_388211152321.webp',
      '/image/Böckmann KK 251315 H Kühlanhänger/37845_9316228125981-768x512.webp',
      '/image/Böckmann KK 251315 H Kühlanhänger/37845_9375058830055-768x512.webp',
      '/image/Böckmann KK 251315 H Kühlanhänger/pboxx-pixelboxx-21233.webp',
    ],
    specs: { zGG: '1.500 kg', Nutzlast: '880 kg', Laderaum: '2.480 × 1.290 × 1.480 mm', Isolierung: 'PU 60 mm', Temperatur: '–20°C bis +10°C', Kühlung: 'Kühlaggregat 230V CEE', Zertifizierung: 'ATP', Deichsel: 'V-Deichsel Böckmann' },
    description: 'Böckmann KK 2513/15 H — 1.500 kg PTAC, 880 kg Nutzlast, laderaum 2.480×1.290×1.480 mm, PU 60 mm, ATP, –20°C/+10°C, Kühlaggregat 230V CEE, GFK/Alu außen, Heckflügeltüren 270°, TÜV/CE.',
    descriptionHtml: `<p>Le <strong>Böckmann KK 2513/15 H Kühlanhänger</strong> est le kühlkofferanhänger compact de la marque Böckmann (Allemagne) : <strong>1.500 kg PTAC</strong>, <strong>880 kg de charge utile</strong>, isolation PU 60 mm, température <strong>–20°C à +10°C</strong> et certification <strong>ATP</strong>. Idéal pour Metzger, Bäcker, Caterer et Pharmaunternehmen en einachser compact.</p>

<h3><i class="bi bi-gift"></i> GRATIS – Zubehörpaket (Wert 327 €)</h3>
<ul>
  <li><strong>Böckmann Kühlausfallalarm-System mit SMS-Benachrichtigung</strong> — Alarme température, schützt Kühlgut bei Aggregatausfall (Wert 79 €)</li>
  <li><strong>Digitales Kühlketten-Temperaturlogger-Set 3-teilig</strong> — Bluetooth-Datenlogger lückenlose Temperaturüberwachung (Wert 89 €)</li>
  <li><strong>CEE-Verlängerungskabel 230V/16A, 10 m</strong> — Industriekabel robuste pour Standkühlung (Wert 54 €)</li>
  <li><strong>Böckmann Kühlkoffer-Reinigungsset HACCP</strong> — Desinfektion + Schimmelschutz + Dichtungspflege (Wert 67 €)</li>
  <li><strong>Kühlgut-Etikettierungsset HACCP 200-teilig</strong> — Tiefkühl-beständig, MHD + Chargenkennzeichnung (Wert 38 €)</li>
</ul>

<h3><i class="bi bi-rulers"></i> Technische Daten</h3>
<ul>
  <li>PTAC : <strong>1.500 kg</strong> — Nutzlast : <strong>ca. 880 kg</strong> — Eigengewicht : ca. 620 kg — Stützlast : max. 100 kg</li>
  <li>Laderaum (L×B×H) : <strong>2.480 × 1.290 × 1.480 mm</strong></li>
  <li>Isolierung : PU-Hartschaum <strong>60 mm</strong> — Temperatur : <strong>–20°C bis +10°C</strong> — Zertifizierung : <strong>ATP</strong></li>
  <li>Kühlaggregat : Elektro 230V/50Hz Landstrom (CEE-Stecker)</li>
  <li>Innen : Lebensmittelgerechter Kunststoff, reinigungsfreundlich · Boden : Alu-Riffelblech rutschhemmend</li>
  <li>Außen : Alu-Sandwich GFK-verstärkt · Türen : Heckflügeltüren 270°, Gummidichtung, abschließbar · LED StVZO</li>
  <li>Fahrgestell : Einachser · Deichsel : Böckmann V-Deichsel höhenverstellbar · Bereifung : 195/70 R15C · 13-pol. · Führerschein : BE</li>
</ul>

<h3><i class="bi bi-shield-check"></i> Zertifizierung &amp; Garantie</h3>
<ul>
  <li>ATP-Zertifizierung — CE-zertifiziert, TÜV-geprüft, EU-Lebensmittelverordnung (EG) Nr. 852/2004 konform</li>
  <li>24 Monate Böckmann Herstellergarantie · Livraison 2–3 Werktage, versandkostenfrei</li>
</ul>`,
    accessories: [
      'Böckmann Kühlausfallalarm-System SMS — Alarme température, protection Kühlgut.',
      'Digitales Kühlketten-Temperaturlogger-Set 3× Bluetooth — Lückenlose Überwachung.',
      'CEE-Verlängerungskabel 230V/16A 10 m — Robuste pour Standkühlung.',
      'Böckmann Kühlkoffer-Reinigungsset HACCP — Desinfektion + Schimmelschutz.',
      'Kühlgut-Etikettierungsset HACCP 200-teilig — Tiefkühl-beständig MHD + Charge.',
    ],
    featured: true,
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Ihr Zuhause, wohin die Straße Sie führt',
    subtitle: 'Hochwertige Wohnwagen & Caravans – zertifiziert, versandfertig, kostenlos geliefert in ganz Europa.',
    cta: 'Jetzt entdecken',
    image: '/image/hero/1.jpg',
    accent: '#F97316',
  },
  {
    id: 2,
    title: 'Sterckeman & ERIBA – Europas Beste',
    subtitle: 'Entdecken Sie unsere Auswahl an Premium-Wohnwagen zu unschlagbaren Preisen – bis zu 55 % unter Neupreis.',
    cta: 'Zum Shop',
    image: '/image/hero/2.jpg',
    accent: '#16A34A',
  },
  {
    id: 3,
    title: 'Caravelair – Modernste Reisekultur',
    subtitle: 'Frische Modelle 2024 & 2025 mit COC-Zertifikat, 2 Jahren Garantie und kostenlosem Versand.',
    cta: 'Jetzt einkaufen',
    image: '/image/hero/3.jpg',
    accent: '#0F172A',
  },
];

export const TRUST_BADGES = [
  { icon: 'bi-truck', title: 'Kostenlose Lieferung', desc: 'Versandkostenfrei in ganz Europa – 5–7 Werktage' },
  { icon: 'bi-lock', title: 'Sicher bezahlen', desc: 'SSL-verschlüsselt · Nur SEPA-Banküberweisung' },
  { icon: 'bi-arrow-repeat', title: '30 Tage Rückgabe', desc: 'Nicht zufrieden? Volle Rückerstattung garantiert' },
  { icon: 'bi-shield-check', title: '2 Jahre Garantie', desc: 'Herstellergarantie auf alle Produkte' },
  { icon: 'bi-patch-check', title: 'COC-zertifiziert', desc: 'Alle Wohnwagen mit Übereinstimmungszertifikat' },
  { icon: 'bi-headset', title: 'Persönlicher Support', desc: 'Mo–Fr per Telefon erreichbar' },
  { icon: 'bi-tags', title: 'Beste Preise', desc: 'Direktimport – bis zu 55 % unter Neupreis' },
  { icon: 'bi-star', title: 'Geprüfte Qualität', desc: 'Jeder Wohnwagen vor Versand geprüft' },
];
