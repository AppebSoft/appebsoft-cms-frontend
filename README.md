# AppebSoft — React 19 Frontend (Vercel)

This is the production frontend application for [AppebSoft](https://appebsoft.com), built with **React 19**, **Vite 8**, **GSAP**, and **Lenis**.

It connects to the Headless CMS backend hosted on Hostinger (`https://api.appebsoft.com/api/v1`).

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure local environment (`.env.local`):
   ```env
   VITE_API_URL=http://localhost:8000/api/v1
   VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Deploy to Vercel

### Step 1: Connect Repository to Vercel
1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Set the configuration:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `AppebSoft` (or `./` if deployed standalone)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 2: Set Environment Variables in Vercel
In **Vercel Project Settings > Environment Variables**, add:
- `VITE_API_URL` = `https://api.appebsoft.com/api/v1`
- `VITE_RECAPTCHA_SITE_KEY` = `your_google_recaptcha_v2_site_key`

### Step 3: Domain DNS Setup
- Attach custom domain `appebsoft.com` and `www.appebsoft.com` in Vercel Settings > Domains.
- In your DNS provider:
  - Add `A` record `@` -> `76.76.21.21`
  - Add `CNAME` record `www` -> `cname.vercel-dns.com`

