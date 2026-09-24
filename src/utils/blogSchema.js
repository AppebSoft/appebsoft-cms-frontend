/**
 * Blog Schema Utilities
 * Generates Schema.org JSON-LD structured data for blog pages
 */

const SITE_URL = 'https://appebsoft.com';
const ORG_NAME = 'AppebSoft';
const ORG_LOGO = `${SITE_URL}/logo-color.png`;
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-preview.png`;

/**
 * Generate Organization schema (global site schema)
 * @returns {Object} Organization schema object
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    legalName: 'AppebSoft Pvt. Ltd.',
    url: SITE_URL,
    logo: ORG_LOGO,
    description: 'AppebSoft is a leading digital product studio providing enterprise web development, mobile apps, AI solutions, and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Uttarpara',
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9836717849',
      contactType: 'customer service',
      email: 'contact@appebsoft.com',
      availableLanguage: ['English', 'Hindi', 'Bengali'],
    },
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'AI Chatbots',
      'Smart Analytics',
      'Process Automation',
      'Enterprise Software',
      'UI/UX Design',
      'Search Engine Optimization',
      'Digital Transformation',
    ],
  };
}

/**
 * Generate Blog schema for the blog listing page
 * @param {Array} posts - Array of adapted blog posts
 * @param {Array} categories - Array of category names
 * @param {string} currentUrl - Current page URL
 * @returns {Object} Blog schema object
 */
export function generateBlogListingSchema(posts, categories, currentUrl) {
  const blogPosts = posts.map(post => ({
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: post.featuredImage
      ? [`${SITE_URL}${post.featuredImage}`]
      : [DEFAULT_OG_IMAGE],
    datePublished: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : undefined,
    author: {
      '@type': 'Person',
      name: post.author || ORG_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags?.join(', ') || '',
  })).filter(p => p.datePublished); // Only include posts with valid dates

  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'AppebSoft Blog & Insights',
    description: 'Expert blog posts on web development, AI automation, SEO strategies, and digital transformation trends.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: ORG_LOGO,
      },
    },
    blogPosts: blogPosts,
    inLanguage: 'en-IN',
  };
}

/**
 * Generate enhanced BlogPosting schema for a single blog post
 * @param {Object} post - The blog post data
 * @param {Array} allPosts - All posts (for prev/next context if needed)
 * @param {string} currentUrl - Current page URL
 * @returns {Object} BlogPosting schema object
 */
export function generateBlogPostingSchema(post, allPosts, currentUrl) {
  if (!post) return null;

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toISOString()
    : new Date().toISOString();

  // Use updated_at from API if available, otherwise fallback to publishedAt
  const modifiedDate = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedDate;

  // Estimate word count from content/excerpt
  const textContent = post.content || post.intro || post.excerpt || '';
  const wordCount = textContent ? Math.round(textContent.replace(/<[^>]*>/g, '').split(/\s+/).length) : 0;

  // Convert read_time_minutes to ISO 8601 duration (e.g., PT7M)
  const readTimeMinutes = post.read_time_minutes || 5;
  const timeRequired = `PT${readTimeMinutes}M`;

  // Build keywords from tags
  const keywords = post.tags?.length ? post.tags.join(', ') : '';

  // Featured image - ensure absolute URL
  const featuredImage = post.featuredImage
    ? `${SITE_URL}${post.featuredImage}`
    : DEFAULT_OG_IMAGE;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${currentUrl}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: [featuredImage],
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author || ORG_NAME,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: ORG_LOGO,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
    articleSection: post.category,
    keywords: keywords,
    wordCount: wordCount,
    timeRequired: timeRequired,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    // Optional: Add breadcrumb reference if needed
    // breadcrumb: { '@id': `${currentUrl}#breadcrumb` },
  };
}

/**
 * Generate BreadcrumbList schema for blog post page
 * @param {Object} post - The blog post data
 * @param {string} currentUrl - Current page URL
 * @returns {Object} BreadcrumbList schema object
 */
export function generateBreadcrumbSchema(post, currentUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category || 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: currentUrl,
      },
    ],
  };
}