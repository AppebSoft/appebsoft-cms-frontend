/**
 * Vercel Serverless Endpoint — Start Project Form Proxy
 * Forwards requests to the Laravel Headless CMS backend as the Single Source of Truth.
 */

const LARAVEL_API_URL = process.env.VITE_API_URL || 'https://api.appebsoft.com/api/v1';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, company, projectType, message, recaptchaToken } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
    }
    if (!recaptchaToken) {
      return res.status(400).json({ success: false, error: 'reCAPTCHA token is missing.' });
    }

    // Forward to Laravel API (saves to DB with AES encryption & sends admin notification)
    const backendRes = await fetch(`${LARAVEL_API_URL}/start-project`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, email, company, projectType, message, recaptchaToken }),
    });

    const data = await backendRes.json().catch(() => ({}));

    if (!backendRes.ok || data.success === false) {
      return res.status(backendRes.status || 400).json({
        success: false,
        error: data.message || 'Failed to submit project inquiry to CMS backend.',
        errors: data.errors || null,
      });
    }

    return res.status(200).json({ success: true, message: data.message || 'Your project inquiry has been received!' });
  } catch (err) {
    console.error('start-project form proxy error:', err);
    return res.status(500).json({ success: false, error: 'An unexpected error occurred. Please try again later.' });
  }
}
