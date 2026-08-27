/**
 * useCms — React hooks for AppebSoft CMS API data
 * Usage: const { data, loading, error } = usePage('about')
 */
import { useState, useEffect, useCallback } from 'react';
import {
  fetchPage, fetchBlogPosts, fetchBlogPost, fetchBlogCategories,
  fetchFeaturedPost, fetchServices, fetchPortfolio, fetchPortfolioCategories,
  fetchTestimonials, fetchSettings, fetchNavigation,
  submitContactForm, submitStartProjectForm, subscribeNewsletter,
} from './cmsApi';

// ─── Generic fetch hook ───────────────────────────────────────────────────────
function useFetch(fetcher, deps = []) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetcher()
      .then(result => { if (!cancelled) { setData(result); setLoading(false); } })
      .catch(err   => { if (!cancelled) { setError(err.message); setLoading(false); } });
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

// ─── Page hooks ───────────────────────────────────────────────────────────────

/** Fetch a CMS page by slug including sections and SEO. */
export function usePage(slug) {
  return useFetch(() => fetchPage(slug), [slug]);
}

// ─── Blog hooks ───────────────────────────────────────────────────────────────

/** Fetch paginated blog posts. Pass params object: { page, category, search }. */
export function useBlogPosts(params = {}) {
  const key = JSON.stringify(params);
  return useFetch(() => fetchBlogPosts(params), [key]);
}

/** Fetch a single blog post by slug. */
export function useBlogPost(slug) {
  return useFetch(() => fetchBlogPost(slug), [slug]);
}

/** Fetch the featured blog post. */
export function useFeaturedPost() {
  return useFetch(fetchFeaturedPost, []);
}

/** Fetch all blog categories. */
export function useBlogCategories() {
  return useFetch(fetchBlogCategories, []);
}

// ─── Content hooks ────────────────────────────────────────────────────────────

/** Fetch all active services. */
export function useServices() {
  return useFetch(fetchServices, []);
}

/** Fetch portfolio items. Pass category slug or null for all. */
export function usePortfolio(category = null) {
  return useFetch(() => fetchPortfolio(category), [category]);
}

/** Fetch portfolio categories. */
export function usePortfolioCategories() {
  return useFetch(fetchPortfolioCategories, []);
}

/** Fetch visible testimonials. */
export function useTestimonials() {
  return useFetch(fetchTestimonials, []);
}

/** Fetch all public site settings as a key/value object. */
export function useSiteSettings() {
  return useFetch(fetchSettings, []);
}

/** Fetch navigation menu for a location: 'header' | 'footer' | 'mobile' */
export function useNavigation(location = 'header') {
  return useFetch(() => fetchNavigation(location), [location]);
}

// ─── Form hooks ───────────────────────────────────────────────────────────────

/** Hook for contact form submission. */
export function useContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState(null);

  const submit = useCallback(async (formData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await submitContactForm(formData);
      setResult(res);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { submit, submitting, result, error };
}

/** Hook for start-project form submission. */
export function useStartProjectForm() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState(null);

  const submit = useCallback(async (formData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await submitStartProjectForm(formData);
      setResult(res);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { submit, submitting, result, error };
}

/** Hook for newsletter subscription. */
export function useNewsletterSubscribe() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState(null);

  const subscribe = useCallback(async (email) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await subscribeNewsletter(email);
      setResult(res);
      return res;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { subscribe, submitting, result, error };
}
