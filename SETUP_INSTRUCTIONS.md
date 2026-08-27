# SETUP_INSTRUCTIONS.md — AppebSoft Frontend Setup (Vercel)

This file covers the setup for the **AppebSoft React Frontend** hosted on **Vercel**, communicating with the **Laravel Headless CMS** on **Hostinger**.

---

## 1. Create Google reCAPTCHA v2 Keys

1. Go to **https://www.google.com/recaptcha/admin**
2. Click **+ Create** (or "Add site")
3. Fill in the form:
   - **Label**: `AppebSoft Website` (or anything descriptive)
   - **reCAPTCHA type**: Select **reCAPTCHA v2 → "I'm not a robot" Checkbox**
   - **Domains** — add all of the following:
     - `appebsoft.com` (production domain)
     - `www.appebsoft.com`
     - `dev.appebsoft.com`
     - `localhost` (for local development)
     - `*.vercel.app` (for preview deployments)
4. Accept the Terms of Service and click **Submit**
5. Copy the two keys shown:
   - **Site Key** → public, used in the React frontend (`VITE_RECAPTCHA_SITE_KEY`)
   - **Secret Key** → private, configured on the Hostinger CMS backend (`RECAPTCHA_SECRET_KEY`)

---

## 2. Add Environment Variables to Vercel

In your Vercel Project → **Settings → Environment Variables**, add:

| Variable Name | Value | Description |
|---|---|---|
| `VITE_API_URL` | `https://api.appebsoft.com/api/v1` | Points to Hostinger Laravel CMS API |
| `VITE_RECAPTCHA_SITE_KEY` | *(your Site Key from step 1)* | Public Google reCAPTCHA v2 key |

> **Note**: In local development, `.env.local` defaults `VITE_API_URL` to `http://localhost:8000/api/v1` (or `https://api.appebsoft.com/api/v1`).

---

## 3. Form Handling Flow

1. **Visitor Submits Form**: User fills out the Contact or "Start Project" form and completes the reCAPTCHA checkbox.
2. **Frontend Request**: The React SPA sends a `POST` request with the JSON payload and reCAPTCHA token to:
   - `https://api.appebsoft.com/api/v1/contact`
   - `https://api.appebsoft.com/api/v1/start-project`
3. **Backend Processing (Hostinger)**:
   - Laravel verifies the token against Google's API.
   - Stores the inquiry in the MySQL database (visible in Filament Admin under **Contact Submissions** / **Project Inquiries**).
   - Sends an immediate email notification via Hostinger SMTP (`mail.appebsoft.com`).
4. **Instant Feedback**: The React UI updates to a confirmation state without a full page reload.

---

## 4. Verification Checklist

- [ ] Google reCAPTCHA v2 Site Key added to Vercel environment variables.
- [ ] Backend `RECAPTCHA_SECRET_KEY` and MySQL/SMTP configured in Hostinger `.env`.
- [ ] Vercel build succeeds (`npm run build`).
- [ ] Submitting Contact form (`/contact`) shows success and records lead in Hostinger CMS.
- [ ] Submitting Start Project form (home page) shows success and records lead in Hostinger CMS.

