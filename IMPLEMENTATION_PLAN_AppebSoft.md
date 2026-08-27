# AppebSoft CMS & Frontend Architecture Implementation Plan

## 1. Project Overview & Architecture

- **Frontend**: React 19 + Vite 8 + React Router DOM 7 + GSAP (Interactive 3D UI)
- **Backend CMS**: Laravel 12 + Filament 3 + MySQL 8 + Livewire 3
- **API Communication**: RESTful JSON API (`https://api.appebsoft.com/api/v1`)
- **Hosting**:
  - Frontend: Vercel / Cloudflare Pages
  - Backend CMS: Hostinger Cloud / VPS (PHP 8.2+ LTS, Nginx / Apache, MySQL)

---

## 2. API Service Layer Integration

The React frontend consumes the Laravel Headless CMS API through a centralized, resilient caching service layer:

- **`src/services/cmsApi.js`**: Core HTTP client with SWR-style caching, exponential retry, and error normalization.
- **`src/services/useCms.js`**: React hooks providing asynchronous state management with zero-latency fallback defaults.

### Endpoints Map

| Endpoint | Method | Frontend Hook / Method | Purpose |
|---|---|---|---|
| `/api/v1/routes` | GET | `fetchRoutes()` | Auto-routing discovery for all published CMS pages |
| `/api/v1/pages/{slug}` | GET | `fetchPage(slug)` | Retrieves dynamic page sections, fields, and SEO metadata |
| `/api/v1/services` | GET | `useServices()` | Populates 3D Services Universe, navigation menus, and service lists |
| `/api/v1/portfolio` | GET | `usePortfolio()` | Populates filterable portfolio projects with technology tags |
| `/api/v1/portfolio/categories` | GET | `usePortfolioCategories()` | Populates category filter pills |
| `/api/v1/settings` | GET | `useSiteSettings()` | Supplies global phone, email, address, working hours, and social URLs |
| `/api/v1/blog/posts` | GET | `fetchBlogPosts()` | Returns paginated blog articles with search & tag filtering |
| `/api/v1/blog/posts/{slug}` | GET | `fetchBlogPost(slug)` | Returns full rich-text blog post content |
| `/api/v1/blog/categories` | GET | `fetchBlogCategories()` | Retrieves blog categories with post count badges |
| `/api/v1/contact` | POST | `submitContactForm()` | Submits contact inquiries with reCAPTCHA v2 and honeypot validation |
| `/api/v1/start-project` | POST | `submitStartProjectForm()` | Submits detailed project requirements to backend |
| `/api/v1/newsletter/subscribe` | POST | `subscribeNewsletter()` | Registers unique newsletter subscribers |
| `/api/v1/og-image` | GET | `SEOHead.jsx` | Dynamically renders 1200x630px social preview cards |
| `/api/v1/sitemap.xml` | GET | Direct / Search Engines | Dynamic XML sitemap for search engine crawlers |

---

## 3. Form Handling & Email Processing

1. **Client-Side Validation**:
   - Indian mobile number validation (`validateIndianPhone`).
   - Email format checking.
   - Google reCAPTCHA v2 checkbox challenge.
   - Invisible honeypot field detection.

2. **Server-Side Processing**:
   - Sanitization and database storage in `contact_submissions` and `project_inquiries`.
   - Asynchronous email dispatch via Laravel `MailService` using authenticated business SMTP credentials.
   - Instant response back to frontend (zero UI freeze).

---

## 4. Page Hierarchy & Routing

- **Top-Level Pages (9)**: Home (`/`), About (`/about`), Services (`/services`), Portfolio (`/portfolio`), Blog (`/blog`), Contact (`/contact`), Careers (`/careers`), Case Studies (`/case-studies`), Technologies (`/technologies`).
- **Service Subpages (17)**: Nested under `/services/:slug` (e.g. `/services/web-development`, `/services/ai-chatbots`, etc.).
- **Legacy Redirects**: 301 client redirects ensure legacy flat URLs (e.g. `/web-development`) redirect seamlessly to `/services/web-development`.

---

## 5. Deployment & Environment Setup

### Frontend (`.env`):
```env
VITE_API_URL=https://api.appebsoft.com/api/v1
VITE_RECAPTCHA_SITE_KEY=your_google_recaptcha_v2_site_key
```

### Backend (`.env`):
```env
APP_NAME="AppebSoft CMS"
APP_ENV=production
APP_URL=https://api.appebsoft.com
FRONTEND_URL=https://appebsoft.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=appebsoft_cms
DB_USERNAME=root
DB_PASSWORD=your_db_password

MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=contact@appebsoft.com
MAIL_PASSWORD=your_smtp_password
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=contact@appebsoft.com
MAIL_FROM_NAME="AppebSoft"

RECAPTCHA_SECRET_KEY=your_google_recaptcha_v2_secret_key
```
