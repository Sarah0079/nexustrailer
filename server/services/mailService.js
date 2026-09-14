import nodemailer from 'nodemailer';

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
  const itemsHtml = items.map(item =>
    `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #E5E7EB;">${item.product_name}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #E5E7EB;text-align:center;">${item.quantity}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #E5E7EB;text-align:right;">${formatPrice(item.unit_price)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #E5E7EB;text-align:right;font-weight:600;">${formatPrice(item.line_total)}</td>
    </tr>`
  ).join('');

  const customerHtml = `
    <!DOCTYPE html>
    <html lang="de">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#F9FAFB;font-family:Arial,sans-serif;color:#111827;">
      <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">
        <div style="background:#0F172A;padding:28px 32px;text-align:center;">
          <div style="font-size:22px;font-weight:900;color:#fff;letter-spacing:-.02em;">NexusTrailer</div>
          <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;">Ihr Partner für Transportlösungen</div>
        </div>
        <div style="padding:32px;">
          <h1 style="font-size:20px;font-weight:800;color:#0F172A;margin:0 0 8px;">Bestellbestätigung</h1>
          <p style="color:#6B7280;font-size:14px;margin:0 0 24px;">
            Guten Tag ${customer.vorname} ${customer.nachname},<br>
            vielen Dank für Ihre Bestellung bei NexusTrailer. Ihre Bestellreferenz lautet:
          </p>
          <div style="background:#EFF6FF;border:2px solid #BFDBFE;border-radius:8px;padding:14px 20px;text-align:center;margin-bottom:28px;">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#2563EB;margin-bottom:4px;">Bestellreferenz</div>
            <div style="font-size:22px;font-weight:900;font-family:monospace;color:#1E40AF;letter-spacing:.04em;">${orderRef}</div>
          </div>
          <h2 style="font-size:14px;font-weight:700;color:#0F172A;margin:0 0 12px;text-transform:uppercase;letter-spacing:.06em;">Bestellübersicht</h2>
          <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:16px;">
            <thead>
              <tr style="background:#F9FAFB;">
                <th style="padding:8px 12px;text-align:left;color:#6B7280;font-weight:600;border-bottom:2px solid #E5E7EB;">Artikel</th>
                <th style="padding:8px 12px;text-align:center;color:#6B7280;font-weight:600;border-bottom:2px solid #E5E7EB;">Menge</th>
                <th style="padding:8px 12px;text-align:right;color:#6B7280;font-weight:600;border-bottom:2px solid #E5E7EB;">Einzelpreis</th>
                <th style="padding:8px 12px;text-align:right;color:#6B7280;font-weight:600;border-bottom:2px solid #E5E7EB;">Gesamt</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="padding:12px;text-align:right;font-weight:700;color:#0F172A;">Gesamtbetrag:</td>
                <td style="padding:12px;text-align:right;font-weight:900;color:#0F172A;font-size:15px;">${formatPrice(total)}</td>
              </tr>
              ${isDeposit ? `<tr>
                <td colspan="3" style="padding:4px 12px;text-align:right;font-weight:600;color:#2563EB;">Jetzt fällig (50 % Anzahlung):</td>
                <td style="padding:4px 12px;text-align:right;font-weight:900;color:#2563EB;font-size:15px;">${formatPrice(amountDueNow)}</td>
              </tr>` : ''}
            </tfoot>
          </table>
          <div style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:8px;padding:20px;margin-bottom:24px;">
            <h2 style="font-size:14px;font-weight:700;color:#0F172A;margin:0 0 14px;text-transform:uppercase;letter-spacing:.06em;">Bankverbindung für die Überweisung</h2>
            <table style="width:100%;font-size:13px;">
              <tr><td style="color:#6B7280;padding:4px 0;width:160px;">Empfänger</td><td style="font-weight:600;color:#0F172A;">${bank.beneficiaire || '—'}</td></tr>
              <tr><td style="color:#6B7280;padding:4px 0;">IBAN</td><td style="font-weight:700;font-family:monospace;letter-spacing:.04em;color:#0F172A;">${bank.iban || '—'}</td></tr>
              <tr><td style="color:#6B7280;padding:4px 0;">BIC / SWIFT</td><td style="font-weight:600;font-family:monospace;color:#0F172A;">${bank.bic || '—'}</td></tr>
              <tr><td style="color:#6B7280;padding:4px 0;">Bank</td><td style="color:#0F172A;">${bank.banque || '—'}</td></tr>
              <tr><td style="color:#6B7280;padding:4px 0;">Verwendungszweck</td>
                <td style="font-weight:900;color:#1D4ED8;font-family:monospace;font-size:14px;">${orderRef}</td></tr>
            </table>
            <div style="margin-top:14px;padding:10px 14px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:6px;font-size:12px;color:#92400E;">
              ⚠ Bitte geben Sie unbedingt die Bestellreferenz <strong>${orderRef}</strong> im Verwendungszweck an. Ihre Bestellung wird nach Zahlungseingang bearbeitet (1–3 Werktage).
            </div>
          </div>
          <p style="font-size:13px;color:#6B7280;line-height:1.7;">
            Bei Fragen stehen wir Ihnen gerne unter <a href="mailto:${process.env.SMTP_FROM || process.env.SMTP_USER}" style="color:#2563EB;">${process.env.SMTP_FROM || process.env.SMTP_USER}</a> zur Verfügung.
          </p>
        </div>
        <div style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:20px 32px;text-align:center;">
          <p style="font-size:11px;color:#9CA3AF;margin:0;">
            NexusTrailer · ${process.env.COMPANY_ADDRESS || 'LA REMORQUE M · 21 Rue du Bouchet, 63350 Maringues, Frankreich'}<br>
            SIREN ${process.env.COMPANY_SIREN || '948 418 827'} · <a href="https://${process.env.COMPANY_DOMAIN || 'nexustrailer.com'}" style="color:#9CA3AF;">${process.env.COMPANY_DOMAIN || 'nexustrailer.com'}</a>
          </p>
        </div>
      </div>
    </body>
    </html>`;

  const adminText = `Neue Bestellung: ${orderRef}
Kunde: ${customer.vorname} ${customer.nachname} <${customer.email}>
Betrag: ${formatPrice(total)}${isDeposit ? ` (Anzahlung: ${formatPrice(amountDueNow)})` : ''}
Artikel: ${items.map(i => `${i.product_name} x${i.quantity}`).join(', ')}`;

  await Promise.all([
    transporter.sendMail({
      from,
      to: customer.email,
      subject: `Bestellbestätigung ${orderRef} — NexusTrailer`,
      html: customerHtml,
    }),
    transporter.sendMail({
      from,
      to: admin,
      subject: `[NexusTrailer] Neue Bestellung: ${orderRef}`,
      text: adminText,
    }),
  ]);
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
