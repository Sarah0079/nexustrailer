import PDFDocument from 'pdfkit';

const COMPANY = {
  name:    'NexusTrailer',
  address: process.env.COMPANY_ADDRESS || '21 Rue du Bouchet, 63350 Maringues',
  city:    process.env.COMPANY_CITY    || 'Frankreich',
  siren:   `SIREN ${process.env.COMPANY_SIREN || '948 418 827'}`,
  email:   process.env.SMTP_FROM       || 'info@nexustrailer.com',
  web:     process.env.COMPANY_DOMAIN  || 'nexustrailer.com',
};

const DARK   = '#1C2B3A';
const ACCENT = '#E0261A';
const MUTED  = '#5A6B78';
const BORDER = '#E2E8ED';
const BG     = '#F6F8FA';

function fmt(n) {
  return Number(n).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

function hline(doc, y, color = BORDER, lw = 0.5) {
  doc.save().strokeColor(color).lineWidth(lw).moveTo(50, y).lineTo(545, y).stroke().restore();
}

export function generateReceiptPdf({ orderRef, customer, lineItems, bank, total, amountDueNow, paymentOption, createdAt }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const chunks = [];
    doc.on('data', c => chunks.push(c));
    doc.on('end',  () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const date    = createdAt ? new Date(createdAt) : new Date();
    const dateStr = date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const isDeposit = paymentOption === 'deposit';

    /* ── HEADER ── */
    doc.rect(50, 45, 495, 70).fill(DARK);
    doc.fontSize(22).font('Helvetica-Bold').fillColor('white').text('NexusTrailer', 65, 60);
    doc.fontSize(9).font('Helvetica').fillColor('rgba(255,255,255,0.55)').text('Ihr Partner für Anhänger & Transportlösungen', 65, 87);
    doc.fontSize(11).font('Helvetica-Bold').fillColor(ACCENT).text('BESTELLBELEG', 340, 66, { align: 'right', width: 190 });
    doc.fontSize(9).font('Helvetica').fillColor('rgba(255,255,255,0.65)').text(dateStr, 340, 84, { align: 'right', width: 190 });

    let y = 135;

    /* ── REF BAND ── */
    doc.rect(50, y, 495, 36).fill(BG);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(MUTED).text('BESTELLNUMMER', 65, y + 6);
    doc.fontSize(13).font('Helvetica-Bold').fillColor(DARK).text(orderRef, 65, y + 17);
    y += 52;

    /* ── TWO COLUMNS: Company | Client ── */
    hline(doc, y - 4);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(MUTED).text('VERKÄUFER', 50,  y);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(MUTED).text('KÄUFER',    300, y);
    y += 14;

    const compLines = [COMPANY.name, COMPANY.address, COMPANY.city, COMPANY.siren, COMPANY.email, COMPANY.web];
    const cliLines  = [
      `${customer.vorname} ${customer.nachname}`,
      customer.adresse,
      `${customer.plz} ${customer.stadt}`,
      customer.land || 'Deutschland',
      customer.email,
      customer.telefon || '',
    ].filter(Boolean);

    const lineH = 13;
    compLines.forEach((line, i) => {
      doc.fontSize(9).font(i === 0 ? 'Helvetica-Bold' : 'Helvetica').fillColor(DARK)
        .text(line, 50, y + i * lineH, { width: 230 });
    });
    cliLines.forEach((line, i) => {
      doc.fontSize(9).font(i === 0 ? 'Helvetica-Bold' : 'Helvetica').fillColor(DARK)
        .text(line, 300, y + i * lineH, { width: 230 });
    });

    y += Math.max(compLines.length, cliLines.length) * lineH + 20;
    hline(doc, y - 6);

    /* ── ITEMS TABLE ── */
    doc.rect(50, y, 495, 20).fill(DARK);
    doc.fontSize(8).font('Helvetica-Bold').fillColor('white');
    doc.text('ARTIKEL',      65,  y + 6);
    doc.text('ANZ.',        360,  y + 6, { width: 40,  align: 'right' });
    doc.text('E.-PREIS',    405,  y + 6, { width: 60,  align: 'right' });
    doc.text('GESAMT',      470,  y + 6, { width: 70,  align: 'right' });
    y += 20;

    lineItems.forEach((item, idx) => {
      const rowBg = idx % 2 === 0 ? 'white' : BG;
      doc.rect(50, y, 495, 24).fill(rowBg);
      doc.fontSize(9).font('Helvetica').fillColor(DARK);
      doc.text(item.product_name || item.productName || item.name, 65, y + 7, { width: 285 });
      doc.text(String(item.quantity || item.qty),                  360, y + 7, { width: 40,  align: 'right' });
      doc.text(fmt(item.unit_price || item.unitPrice || item.price),405, y + 7, { width: 60,  align: 'right' });
      doc.text(fmt(item.line_total || item.lineTotal || ((item.unit_price || item.price) * item.quantity)), 470, y + 7, { width: 70, align: 'right' });
      y += 24;
    });

    hline(doc, y, DARK, 1);
    y += 10;

    /* ── TOTALS ── */
    const totals = [
      ['Zwischensumme', fmt(total)],
      ['Versand',       'Inklusive'],
      ['BESTELLSUMME',  fmt(total)],
    ];
    if (isDeposit) {
      totals.push(['Anzahlung (50 %) jetzt fällig', fmt(amountDueNow)]);
      totals.push(['Restbetrag vor Lieferung',       fmt(total - amountDueNow)]);
    }

    totals.forEach(([label, val], i) => {
      const isOrderTotal = label === 'BESTELLSUMME';
      const isLast       = i === totals.length - 1;
      const isBold       = isOrderTotal || isLast;

      if (isBold) {
        doc.rect(300, y - 2, 245, 20).fill(isDeposit && isLast ? '#FFF2F2' : BG);
      }

      doc.fontSize(isBold ? 10 : 9)
        .font(isBold ? 'Helvetica-Bold' : 'Helvetica')
        .fillColor(isOrderTotal ? DARK : (isLast && isDeposit ? ACCENT : MUTED))
        .text(label, 300, y, { width: 155, align: 'right' });

      doc.fontSize(isBold ? 10 : 9)
        .font(isBold ? 'Helvetica-Bold' : 'Helvetica')
        .fillColor(isOrderTotal ? DARK : (isLast && isDeposit ? ACCENT : DARK))
        .text(val, 460, y, { width: 80, align: 'right' });

      y += 20;
    });

    y += 14;
    hline(doc, y);
    y += 16;

    /* ── BANK DETAILS ── */
    doc.fontSize(10).font('Helvetica-Bold').fillColor(DARK).text('Bankverbindung', 50, y);
    y += 16;

    const bankRows = [
      ['Empfänger',    bank.beneficiaire],
      ['IBAN',         bank.iban],
      ['BIC/SWIFT',    bank.bic],
      ['Bank',         bank.banque],
      ['Verwendungszweck', orderRef],
    ];

    bankRows.forEach(([label, val]) => {
      doc.rect(50, y, 495, 20).fill(BG);
      doc.fontSize(9).font('Helvetica-Bold').fillColor(MUTED).text(label, 65, y + 5, { width: 110 });
      doc.fontSize(9).font(label === 'IBAN' ? 'Courier-Bold' : 'Helvetica-Bold').fillColor(DARK)
        .text(val || '—', 185, y + 5, { width: 345 });
      y += 20;
    });

    y += 16;

    /* ── AMOUNT TO PAY ── */
    doc.rect(50, y, 495, 34).fill('#FEF2F2');
    doc.save().strokeColor(ACCENT).lineWidth(1).rect(50, y, 495, 34).stroke().restore();
    const amountLine = isDeposit
      ? `Anzahlung zu überweisen: ${fmt(amountDueNow)}`
      : `Zu überweisender Betrag: ${fmt(amountDueNow)}`;
    doc.fontSize(12).font('Helvetica-Bold').fillColor(ACCENT)
      .text(amountLine, 65, y + 10, { width: 465, align: 'center' });
    y += 50;

    /* ── WARNING ── */
    doc.rect(50, y, 495, 24).fill('#FFFBEB');
    doc.fontSize(8).font('Helvetica').fillColor('#92400E')
      .text(`Bitte geben Sie unbedingt die Bestellreferenz "${orderRef}" im Verwendungszweck der Überweisung an.`, 65, y + 8, { width: 465 });
    y += 36;

    /* ── FOOTER ── */
    hline(doc, y);
    y += 10;
    doc.fontSize(8).font('Helvetica').fillColor(MUTED)
      .text(
        `© ${new Date().getFullYear()} NexusTrailer · ${COMPANY.address}, ${COMPANY.city} · ${COMPANY.siren}`,
        50, y, { align: 'center', width: 495 }
      );

    doc.end();
  });
}
