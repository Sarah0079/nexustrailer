import nodemailer from 'nodemailer';
import { generateReceiptPdf } from './pdfService.js';

function createTransport() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST || 'smtp.hostinger.com',
    port:   parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function formatPrice(n) {
  return n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

export async function sendOrderConfirmation({ orderRef, customer, items, total, amountDueNow, paymentOption, bank }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[MAIL] SMTP nicht konfiguriert — Bestätigungs-E-Mail nicht gesendet');
    return;
  }

  const transporter = createTransport();
  const from = `"NexusTrailer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;
  const admin = process.env.SMTP_ADMIN || process.env.SMTP_USER;

  const isDeposit = paymentOption === 'deposit';
  const itemsHtml = items.map(item => `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #E5E7EB;font-size:13px;color:#0F172A;">
        <div style="font-weight:600;">${item.product_name}</div>
        <div style="color:#6B7280;font-size:12px;margin-top:2px;">Menge: ${item.quantity} &nbsp;·&nbsp; ${formatPrice(item.unit_price)} / Stk.</div>
      </td>
      <td style="padding:12px 16px;border-bottom:1px solid #E5E7EB;text-align:right;font-weight:700;font-size:14px;color:#0F172A;white-space:nowrap;">${formatPrice(item.line_total)}</td>
    </tr>`).join('');

  const bankRowHtml = (label, value, mono = false) => `
    <tr>
      <td style="padding:6px 16px 6px 0;font-size:12px;color:#6B7280;vertical-align:top;white-space:nowrap;width:1%;">${label}</td>
      <td style="padding:6px 0;font-size:13px;font-weight:600;color:#0F172A;${mono ? 'font-family:monospace;white-space:nowrap;' : 'word-break:break-word;'}">${value || '—'}</td>
    </tr>`;

  const customerHtml = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  @media only screen and (max-width:600px){
    .wrapper{padding:16px !important;}
    .inner{padding:20px 16px !important;}
    .footer{padding:14px 16px !important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:Arial,sans-serif;color:#111827;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" class="wrapper" style="padding:24px 16px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">

    <!-- HEADER -->
    <tr><td style="background:#0F172A;padding:22px 24px;text-align:center;">
      <div style="font-size:20px;font-weight:900;color:#fff;letter-spacing:-.02em;">NexusTrailer</div>
      <div style="font-size:11px;color:rgba(255,255,255,.5);margin-top:3px;">Ihr Partner für Transportlösungen</div>
    </td></tr>

    <!-- BODY -->
    <tr><td class="inner" style="padding:24px 24px;">
      <p style="font-size:15px;font-weight:700;color:#0F172A;margin:0 0 6px;">Bestellbestätigung</p>
      <p style="font-size:13px;color:#6B7280;margin:0 0 20px;line-height:1.6;">
        Guten Tag ${customer.vorname} ${customer.nachname},<br>
        vielen Dank für Ihre Bestellung bei NexusTrailer.
      </p>

      <!-- REF -->
      <div style="background:#EFF6FF;border:2px solid #BFDBFE;border-radius:8px;padding:14px;text-align:center;margin-bottom:24px;">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#2563EB;margin-bottom:4px;">Bestellreferenz</div>
        <div style="font-size:20px;font-weight:900;font-family:monospace;color:#1E40AF;letter-spacing:.04em;word-break:break-all;">${orderRef}</div>
      </div>

      <!-- PRODUCTS -->
      <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7280;margin:0 0 8px;">Bestellübersicht</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;margin-bottom:8px;">
        <thead>
          <tr style="background:#F9FAFB;">
            <th style="padding:10px 16px;text-align:left;font-size:11px;color:#6B7280;font-weight:600;border-bottom:1px solid #E5E7EB;">Artikel</th>
            <th style="padding:10px 16px;text-align:right;font-size:11px;color:#6B7280;font-weight:600;border-bottom:1px solid #E5E7EB;">Betrag</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
        <tfoot>
          <tr style="background:#F9FAFB;">
            <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0F172A;">Gesamtbetrag</td>
            <td style="padding:12px 16px;text-align:right;font-size:15px;font-weight:900;color:#0F172A;white-space:nowrap;">${formatPrice(total)}</td>
          </tr>
          ${isDeposit ? `<tr style="background:#EFF6FF;">
            <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#1D4ED8;">Jetzt fällig (50&nbsp;% Anzahlung)</td>
            <td style="padding:10px 16px;text-align:right;font-size:15px;font-weight:900;color:#1D4ED8;white-space:nowrap;">${formatPrice(amountDueNow)}</td>
          </tr>` : ''}
        </tfoot>
      </table>

      <!-- BANK -->
      <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:8px;padding:16px;margin-top:20px;margin-bottom:20px;">
        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7280;margin:0 0 12px;">Bankverbindung für die Überweisung</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${bankRowHtml('Empfänger', bank.beneficiaire)}
          ${bankRowHtml('IBAN', bank.iban, true)}
          ${bankRowHtml('BIC / SWIFT', bank.bic, true)}
          ${bankRowHtml('Bank', bank.banque)}
          ${bankRowHtml('Verwendungszweck', `<strong style="color:#1D4ED8;">${orderRef}</strong>`)}
        </table>
        <div style="margin-top:12px;padding:10px 14px;background:#FFFBEB;border-left:3px solid #F59E0B;font-size:12px;color:#92400E;line-height:1.5;">
          ⚠ Bitte geben Sie die Bestellreferenz <strong>${orderRef}</strong> im Verwendungszweck an. Ihre Bestellung wird nach Zahlungseingang bearbeitet (1–3&nbsp;Werktage).
        </div>
      </div>

      <p style="font-size:12px;color:#6B7280;line-height:1.6;margin:0;">
        Bei Fragen: <a href="mailto:${process.env.SMTP_FROM || process.env.SMTP_USER}" style="color:#2563EB;">${process.env.SMTP_FROM || process.env.SMTP_USER}</a>
      </p>
    </td></tr>

    <!-- FOOTER -->
    <tr><td class="footer" style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:14px 24px;text-align:center;">
      <p style="font-size:11px;color:#9CA3AF;margin:0;line-height:1.6;">
        NexusTrailer · ${process.env.COMPANY_ADDRESS || '21 Rue du Bouchet, 63350 Maringues'}<br>
        SIREN ${process.env.COMPANY_SIREN || '948 418 827'} · <a href="https://${process.env.COMPANY_DOMAIN || 'nexustrailer.de'}" style="color:#9CA3AF;">${process.env.COMPANY_DOMAIN || 'nexustrailer.de'}</a>
      </p>
    </td></tr>

  </table>
</td></tr>
</table>
</body>
</html>`;

  const adminText = `Neue Bestellung: ${orderRef}
Kunde: ${customer.vorname} ${customer.nachname} <${customer.email}>
Betrag: ${formatPrice(total)}${isDeposit ? ` (Anzahlung: ${formatPrice(amountDueNow)})` : ''}
Artikel: ${items.map(i => `${i.product_name} x${i.quantity}`).join(', ')}`;

  // Générer le PDF reçu
  let pdfBuffer = null;
  try {
    pdfBuffer = await generateReceiptPdf({
      orderRef,
      customer,
      lineItems: items,
      bank,
      total,
      amountDueNow,
      paymentOption,
    });
  } catch (pdfErr) {
    console.error('[PDF] Generierung fehlgeschlagen:', pdfErr.message);
  }

  const customerMailOpts = {
    from,
    to: customer.email,
    subject: `Bestellbestätigung ${orderRef} — NexusTrailer`,
    html: customerHtml,
  };
  if (pdfBuffer) {
    customerMailOpts.attachments = [{
      filename:    `bestellung-${orderRef}.pdf`,
      content:     pdfBuffer,
      contentType: 'application/pdf',
    }];
  }

  await Promise.all([
    transporter.sendMail(customerMailOpts),
    transporter.sendMail({
      from,
      to: admin,
      subject: `[NexusTrailer] Neue Bestellung: ${orderRef}`,
      text: adminText,
    }),
  ]);
}

export async function sendAngebotNotification({ id, company, name, email, phone, siret, product_type, quantity, budget, message }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('[MAIL] SMTP nicht konfiguriert — Angebotsanfrage nicht gesendet');
    return;
  }

  const transporter = createTransport();
  const from  = `"NexusTrailer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;
  const admin = process.env.SMTP_ADMIN || process.env.SMTP_USER;

  await transporter.sendMail({
    from,
    to: admin,
    replyTo: email,
    subject: `[NexusTrailer] Neue Angebotsanfrage #${id} — ${company}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0F172A;padding:20px 28px;">
          <div style="font-size:18px;font-weight:900;color:#fff;">NexusTrailer — Angebotsanfrage #${id}</div>
        </div>
        <div style="padding:24px;border:1px solid #E5E7EB;">
          <table style="width:100%;font-size:13px;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#6B7280;width:140px;">Unternehmen</td><td style="padding:6px 0;font-weight:600;color:#0F172A;">${company}</td></tr>
            ${siret ? `<tr><td style="padding:6px 0;color:#6B7280;">USt-IdNr.</td><td style="padding:6px 0;color:#0F172A;">${siret}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#6B7280;">Ansprechpartner</td><td style="padding:6px 0;font-weight:600;color:#0F172A;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#6B7280;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#2563EB;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:6px 0;color:#6B7280;">Telefon</td><td style="padding:6px 0;color:#0F172A;">${phone}</td></tr>` : ''}
            <tr><td colspan="2" style="padding:10px 0 0;border-top:1px solid #E5E7EB;"></td></tr>
            <tr><td style="padding:6px 0;color:#6B7280;">Produktkategorie</td><td style="padding:6px 0;font-weight:600;color:#0F172A;">${product_type}</td></tr>
            ${quantity ? `<tr><td style="padding:6px 0;color:#6B7280;">Menge</td><td style="padding:6px 0;color:#0F172A;">${quantity}</td></tr>` : ''}
            ${budget   ? `<tr><td style="padding:6px 0;color:#6B7280;">Budget</td><td style="padding:6px 0;color:#0F172A;">${budget}</td></tr>` : ''}
          </table>
          <div style="margin-top:16px;padding:14px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;">
            <p style="font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Weitere Angaben</p>
            <p style="font-size:13px;color:#0F172A;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:16px;font-size:12px;color:#6B7280;">
            Verwalten: <a href="${process.env.FRONTEND_URL || 'http://localhost:5187'}/admin" style="color:#2563EB;">Admin-Bereich → Angebote</a>
          </p>
        </div>
      </div>
    `,
  });
}

const STATUS_LABELS = {
  pending:           'Bestellung eingegangen',
  payment_pending:   'Zahlung ausstehend',
  payment_confirmed: 'Zahlung bestätigt',
  processing:        'In Vorbereitung',
  shipped:           'Versandt',
  delivered:         'Geliefert',
  cancelled:         'Storniert',
  refunded:          'Rückerstattet',
};

const STATUS_COLORS = {
  pending:           '#92400E',
  payment_pending:   '#1D4ED8',
  payment_confirmed: '#065F46',
  processing:        '#5B21B6',
  shipped:           '#0E7490',
  delivered:         '#166534',
  cancelled:         '#991B1B',
  refunded:          '#374151',
};

export async function sendStatusEmail({ to, vorname, orderRef, status, reason }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return;

  const transporter = createTransport();
  const from        = `"NexusTrailer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;
  const label       = STATUS_LABELS[status] || status;
  const color       = STATUS_COLORS[status] || '#374151';
  const trackingUrl = `${process.env.FRONTEND_URL || 'http://localhost:5187'}/auftragsverfolgung`;

  const html = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F6F8FA;font-family:Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px">
<table width="600" cellpadding="0" cellspacing="0" style="background:white;overflow:hidden;border:1px solid #E2E8ED">
  <tr><td style="background:#1C2B3A;padding:24px 32px">
    <span style="font-size:20px;font-weight:900;color:white;letter-spacing:-0.02em">NexusTrailer</span>
  </td></tr>
  <tr><td style="padding:28px 32px">
    <p style="font-size:15px;color:#3A4F62;margin:0 0 6px">Guten Tag, <strong>${escHtml(vorname)}</strong></p>
    <p style="font-size:14px;color:#5A6B78;margin:0 0 24px">Ihre Bestellung wurde aktualisiert.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F8FA;border:1px solid #E2E8ED;margin-bottom:24px">
      <tr>
        <td style="padding:14px 18px">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#8FA0AE;text-transform:uppercase;letter-spacing:.07em">Bestellreferenz</p>
          <p style="margin:0;font-size:17px;font-weight:900;color:#1C2B3A;letter-spacing:.04em;font-family:monospace">${escHtml(orderRef)}</p>
        </td>
        <td style="padding:14px 18px;text-align:right">
          <span style="display:inline-block;padding:5px 12px;background:${color}1A;color:${color};border:1px solid ${color}40;font-size:12px;font-weight:700">${escHtml(label)}</span>
        </td>
      </tr>
    </table>

    ${reason ? `<p style="font-size:13px;color:#5A6B78;background:#F6F8FA;padding:12px 16px;border-left:3px solid #E0261A;margin-bottom:24px"><strong>Hinweis:</strong> ${escHtml(reason)}</p>` : ''}

    <a href="${trackingUrl}" style="display:inline-block;background:#E0261A;color:white;text-decoration:none;padding:12px 24px;font-size:14px;font-weight:700;margin-bottom:24px">
      Bestellung verfolgen
    </a>

    <p style="font-size:12px;color:#8FA0AE;margin:0">Fragen? Schreiben Sie uns: <a href="mailto:${process.env.SMTP_FROM || process.env.SMTP_USER}" style="color:#E0261A">${process.env.SMTP_FROM || process.env.SMTP_USER}</a></p>
  </td></tr>
  <tr><td style="background:#F6F8FA;padding:14px 32px;border-top:1px solid #E2E8ED">
    <p style="font-size:11px;color:#8FA0AE;margin:0">© NexusTrailer · SIREN ${process.env.COMPANY_SIREN || '948 418 827'}</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;

  await transporter.sendMail({
    from,
    to,
    subject: `Ihre Bestellung ${orderRef} — ${label}`,
    html,
    text: `Guten Tag ${vorname},\n\nIhre Bestellung ${orderRef} hat einen neuen Status: ${label}.\n${reason ? `Hinweis: ${reason}\n` : ''}\n${trackingUrl}\n\nNexusTrailer`,
  });
}

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function sendContactEmail({ name, email, subject, message }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('EMAIL_NOT_CONFIGURED');
  }

  const transporter = createTransport();
  const from = `"NexusTrailer Kontakt" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`;
  const admin = process.env.SMTP_ADMIN || process.env.SMTP_USER;

  await transporter.sendMail({
    from,
    to: admin,
    replyTo: email,
    subject: `[NexusTrailer Kontakt] ${subject}`,
    text: `Von: ${name} <${email}>\nBetreff: ${subject}\n\n${message}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#0F172A;">Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #E5E7EB;margin:16px 0;">
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `,
  });
}
