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
  console.log('[CMS API] Fetching:', url); // DEBUG
  const res = await fetch(url, {
    cache: 'no-cache', // always revalidate so Laravel changes appear immediately
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    console.error('[CMS API] Error:', res.status, url, body); // DEBUG
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
 * Fetch full page content (sections + SEO) by slug with automatic redirect handling.
 * @param {string} slug - e.g. 'about', 'services/web-development'
 */
export async function fetchPage(slug) {
  const cleanSlug = slug.replace(/^\//, '').replace(/\/+$/, '');
  try {
    return await apiFetch(`/pages/${cleanSlug}`);
  } catch (error) {
    if (error.status === 404) {
      return await followRedirect(cleanSlug, 'page');
    }
    throw error;
  }
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
 * Check if a slug has a redirect.
 * @param {string} slug - The slug to check (e.g., 'blog/my-post', 'services/web-dev', 'about')
 */
export async function checkRedirect(slug) {
  // Normalize: remove leading/trailing slashes, lowercase
  const normalizedSlug = slug.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();
  return apiFetch(`/redirects/check/${normalizedSlug}`);
}

/**
 * Follow redirect chain with loop detection and max hops.
 * @param {string} slug - The original slug
 * @param {string} type - Content type ('page', 'blog')
 * @param {number} hops - Current hop count (internal)
 * @param {Set<string>} visited - Visited slugs for loop detection (internal)
 * @returns {Promise<{data: any, redirect?: {old_slug: string, new_slug: string, status: number}}>}
 */
async function followRedirect(slug, type, hops = 0, visited = new Set()) {
  const MAX_HOPS = 3;
  const normalizedSlug = slug.toLowerCase();
  
  // Loop detection
  if (visited.has(normalizedSlug)) {
    console.warn(`Redirect loop detected for ${type}: ${slug}`);
    throw new ApiError(`Redirect loop detected for ${slug}`, 404);
  }
  
  // Max hops protection
  if (hops >= MAX_HOPS) {
    console.warn(`Max redirect hops (${MAX_HOPS}) exceeded for ${type}: ${slug}`);
    throw new ApiError(`Too many redirects for ${slug}`, 404);
  }
  
  visited.add(normalizedSlug);
  
  try {
    const redirect = await checkRedirect(slug);
    
    if (!redirect.redirected) {
      throw new ApiError(`No redirect found for ${slug}`, 404);
    }
    
    // Extract new slug based on type
    let newSlug = redirect.new_slug;
    if (type === 'blog') {
      newSlug = newSlug.replace('blog/', '');
    } else if (type === 'page') {
      // Page slugs are root-level, use as-is
      newSlug = newSlug.replace(/^\//, '');
    }
    
    // Recursively follow chain
    if (type === 'blog') {
      const result = await apiFetch(`/blog/posts/${newSlug}`).catch(async (error) => {
        if (error.status === 404) {
          return await followRedirect(`blog/${newSlug}`, 'blog', hops + 1, visited);
        }
        throw error;
      });
      // Include redirect info in result
      return { ...result, redirect: { old_slug: redirect.old_slug, new_slug: redirect.new_slug, status: redirect.status } };
    } else {
      const result = await apiFetch(`/pages/${newSlug}`).catch(async (error) => {
        if (error.status === 404) {
          return await followRedirect(newSlug, 'page', hops + 1, visited);
        }
        throw error;
      });
      return { ...result, redirect: { old_slug: redirect.old_slug, new_slug: redirect.new_slug, status: redirect.status } };
    }
  } catch (error) {
    // If redirect check fails, don't block - just throw original 404
    if (error.name === 'ApiError' && error.status === 404) {
      throw error;
    }
    // Network/other errors - log and throw original 404
    console.warn(`Redirect check failed for ${slug}:`, error.message);
    throw new ApiError(`Content not found: ${slug}`, 404);
  }
}

/**
 * Fetch a single blog post by slug with automatic redirect handling.
 */
export async function fetchBlogPost(slug) {
  const cleanSlug = slug.replace(/^\//, '').replace(/\/+$/, '');
  try {
    return await apiFetch(`/blog/posts/${cleanSlug}`);
  } catch (error) {
    if (error.status === 404) {
      return await followRedirect(`blog/${cleanSlug}`, 'blog');
    }
    throw error;
  }
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

export { ApiError };
