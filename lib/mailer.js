import nodemailer from 'nodemailer';

export function getTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpUser || !smtpPassword) {
    throw new Error('SMTP_HOST, SMTP_USER, or SMTP_PASSWORD is not defined.');
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true = implicit TLS (465); false = STARTTLS (587)
    auth: { user: smtpUser, pass: smtpPassword },
  });
}

export async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) throw new Error('RECAPTCHA_SECRET_KEY environment variable is not defined.');

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
  });
  const json = await res.json();
  return json.success;
}
