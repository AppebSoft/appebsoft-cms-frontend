/**
 * AppebSoft CMS — API Service Layer
 * Connects the React frontend to the Laravel backend.
 *
 * Set VITE_API_URL in .env.local or .env.production:
 *   VITE_API_URL=https://dev-cms.appebsoft.com/api/v1
 */

const API_BASE = import.meta.env.VITE_API_URL || 'https://dev-cms.appebsoft.com/api/v1';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    cache: 'no-cache', // always revalidate so Laravel changes appear immediately
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(body.message || `API error ${res.status}`, res.status);
  }
  return res.json();
}

// ─── ROUTING ────────────────────────────────────────────────────────────────

/**
 * Fetch all published page routes for auto-routing.
 * @returns {Promise<Array<{slug, title, layout}>>}
 */
export async function fetchRoutes() {
  const data = await apiFetch('/routes');
  return data.routes;
}

/**
 * Fetch full page content (sections + SEO) by slug.
 * @param {string} slug - e.g. 'about', 'services/web-development'
 */
export async function fetchPage(slug) {
  const cleanSlug = slug.replace(/^\//, '');
  return apiFetch(`/pages/${cleanSlug}`);
}

// ─── BLOG ────────────────────────────────────────────────────────────────────

/**
 * Fetch paginated blog posts.
 * @param {Object} params - { page, per_page, category, search }
 */
export async function fetchBlogPosts(params = {}) {
  const qs = new URLSearchParams(params).toString();
  return apiFetch(`/blog/posts${qs ? `?${qs}` : ''}`);
}

/**
 * Fetch a single blog post by slug.
 */
export async function fetchBlogPost(slug) {
  return apiFetch(`/blog/posts/${slug}`);
}

/**
 * Fetch the featured blog post.
 */
export async function fetchFeaturedPost() {
  return apiFetch('/blog/featured');
}

/**
 * Fetch all blog categories with post counts.
 */
export async function fetchBlogCategories() {
  return apiFetch('/blog/categories');
}

// ─── CONTENT ─────────────────────────────────────────────────────────────────

/**
 * Fetch all active services (for navbar, homepage, etc.).
 */
export async function fetchServices() {
  const data = await apiFetch('/services');
  return data.data;
}

/**
 * Fetch portfolio items, optionally filtered by category slug.
 * @param {string|null} category
 */
export async function fetchPortfolio(category = null) {
  const qs = category && category !== 'all' ? `?category=${category}` : '';
  const data = await apiFetch(`/portfolio${qs}`);
  return data.data;
}

/**
 * Fetch portfolio categories.
 */
export async function fetchPortfolioCategories() {
  const data = await apiFetch('/portfolio/categories');
  return data.data;
}

/**
 * Fetch visible testimonials.
 */
export async function fetchTestimonials() {
  const data = await apiFetch('/testimonials');
  return data.data;
}

/**
 * Fetch all public site settings as a key/value object.
 */
export async function fetchSettings() {
  const data = await apiFetch('/settings');
  return data.data;
}

/**
 * Fetch navigation menu for a given location.
 * @param {'header'|'footer'|'mobile'} location
 */
export async function fetchNavigation(location = 'header') {
  const data = await apiFetch(`/navigation/${location}`);
  return data.data;
}

// ─── FORMS ───────────────────────────────────────────────────────────────────

/**
 * Submit the contact form.
 * @param {Object} formData - { fullName, email, phone, company, service, message, recaptchaToken }
 */
export async function submitContactForm(formData) {
  return apiFetch('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

/**
 * Submit the Start Project form.
 * @param {Object} formData - { name, email, company, projectType, message, recaptchaToken }
 */
export async function submitStartProjectForm(formData) {
  return apiFetch('/start-project', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

/**
 * Subscribe to newsletter.
 * @param {string} email
 */
export async function subscribeNewsletter(email) {
  return apiFetch('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

// ─── CACHE HELPERS ────────────────────────────────────────────────────────────

const _cache = new Map();

/**
 * Cached version of apiFetch — useful for settings, navigation, services.
 * @param {string} endpoint
 * @param {number} ttlMs - cache duration in ms (default: 5 minutes)
 */
export async function fetchCached(endpoint, ttlMs = 60 * 1000) {
  const cached = _cache.get(endpoint);
  if (cached && Date.now() - cached.timestamp < ttlMs) {
    return cached.data;
  }
  const data = await apiFetch(endpoint);
  _cache.set(endpoint, { data, timestamp: Date.now() });
  return data;
}

export { ApiError };
