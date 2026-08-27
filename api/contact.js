/**
 * Vercel Serverless Endpoint — Contact Form Proxy
 * Forwards requests to the Laravel Headless CMS backend as the Single Source of Truth.
 */

const LARAVEL_API_URL = process.env.VITE_API_URL || 'https://api.appebsoft.com/api/v1';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, company, service, message, recaptchaToken } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }
    if (!recaptchaToken) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA token is missing.' });
    }

    // Forward to Laravel API (saves to DB with AES encryption & sends admin notification)
    const backendRes = await fetch(`${LARAVEL_API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ fullName, email, phone, company, service, message, recaptchaToken }),
    });

    const data = await backendRes.json().catch(() => ({}));

    if (!backendRes.ok || data.success === false) {
      return res.status(backendRes.status || 400).json({
        success: false,
        error: data.message || 'Failed to submit form to CMS backend.',
        errors: data.errors || null,
      });
    }

    return res.status(200).json({ success: true, message: data.message || 'Thank you! We will get back to you shortly.' });
  } catch (err) {
    console.error('contact form proxy error:', err);
    return res.status(500).json({ success: false, error: 'An unexpected error occurred. Please try again later.' });
  }
}
