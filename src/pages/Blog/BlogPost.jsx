import SEOHead from "../../components/common/SEOHead";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Share2,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import { blogPosts } from "../Blog/Blog";
import { fetchBlogPost } from "../../services/cmsApi";
import "./BlogPost.css";

// Inject white background override for this page
const styleOverride = document.createElement('style');
styleOverride.id = 'blogpost-bg-override';
styleOverride.textContent = `
  body.blog-post-active { background: #ffffff !important; }
  body.blog-post-active .blogpost-page,
  body.blog-post-active .bp-content-section,
  body.blog-post-active .bp-feature-image-wrap,
  body.blog-post-active .bp-related-section { background: #ffffff !important; }
`;

/* ─── Rich content for specific slugs ─── */
const richContent = {
  "seo-consulting-vs-full-service": {
    featureImage: "/blogs/ALL-Types-Of-Works.jpg",
    featureImageAlt: "SEO Consulting vs Full-Service SEO: The Real Difference",
    intro: `Discover how <strong>local SEO services</strong> and <strong>affordable SEO services for small businesses</strong> can help you dominate your city across India, Africa & globally, before your competitors take over. Read the exact 5-step system now.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "You're Invisible Online, And It's Costing You Every Single Day",
      },
      {
        type: "text",
        html: `<p>You built the business. You show up every day. You know your product or service is genuinely better than your competitors.</p>
<p>But when someone in your city opens Google and searches for exactly what you offer, your name doesn't appear. Your competitor does.</p>
<p>That's not a sales problem. That's not a quality problem. That is a <strong>local SEO problem</strong>, and it's 100% fixable. This is why <strong>local SEO services</strong> are no longer optional for small businesses; they are the difference between being found and being invisible, between ringing phones and empty calendars.</p>
<p>Whether you're running a pharmacy in Bengaluru, a law firm in Lagos, a bakery in Cape Town, or a repair shop anywhere in the world, your customers are searching online before they make a decision. Google processes over <strong>8.5 billion searches</strong> every single day. Billions of those searches are people in your city, right now, looking for exactly what you sell.</p>
<p>The businesses showing up at the top? They aren't smarter than you. They aren't better than you. They've simply invested in <strong>local SEO services</strong>, and those services are working.</p>
<p>This guide gives you the exact 5-step system. Whether you're doing it yourself or hiring professionals for <strong>affordable SEO services for small businesses</strong>, this is the blueprint that works in India, Africa, and globally.</p>`,
      },
      {
        type: "heading",
        tag: "h2",
        text: "What Is Local SEO? (Quick Answer for Google)",
      },
      {
        type: "text",
        html: `<p><strong>Local SEO (Local Search Engine Optimization)</strong> is the process of optimizing your business's online presence so it appears at the top of Google when people nearby search for your products or services.</p>
<p>When someone types "dentist near me in Delhi" or "best electrician in Nairobi," Google displays:</p>
<ul>
  <li><strong>A Local Pack</strong> (map + 3 business listings at the very top)</li>
  <li>Organic search results below</li>
</ul>
<p><strong>Local SEO services</strong> are focused on getting your business into that Local Pack and onto Page 1 because <strong>92% of searchers never go to Page 2.</strong></p>`,
      },
      {
        type: "stats-box",
        title: "Why Local SEO Is the Highest-ROI Marketing Move in 2026",
        stats: [
          { value: "46%", label: "of all Google searches have local intent" },
          { value: "76%", label: "of people who search nearby visit a business within 24 hours" },
          { value: "28%", label: "of local searches result in a same-day purchase" },
          { value: "200%+", label: "growth in mobile local searches in the last 2 years" },
        ],
      },
      {
        type: "heading",
        tag: "h2",
        text: "5 Steps to Rank #1 in Your City with Local SEO",
      },
      {
        type: "step",
        number: "01",
        title: "Claim Your Google Business Profile: The Foundation of Local SEO",
        html: `<p>If you do nothing else on this list, do this.</p>
<p>Your <strong>Google Business Profile (GBP)</strong> is the single most powerful tool in local SEO. It's what controls whether you appear in the Local Pack — that prime map section at the very top of Google results.</p>
<p><strong>Here's what a fully optimized GBP looks like:</strong></p>
<ul>
  <li><strong>Business name:</strong> matches your real-world signage exactly. No keyword stuffing.</li>
  <li><strong>Primary and secondary categories:</strong> be specific. "Women's Clothing Boutique," not just "Store."</li>
  <li><strong>Complete address and service area:</strong> critical for location targeting.</li>
  <li><strong>Phone number and website:</strong> both must be accurate and consistent.</li>
  <li><strong>Business hours:</strong> including weekends and public holidays.</li>
  <li><strong>High-quality photos:</strong> interior, exterior, team, and products. Businesses with photos receive 42% more requests for directions.</li>
  <li><strong>Regular Google Posts:</strong> promotions, events, offers. These signal activity to Google.</li>
  <li><strong>Keyword-rich business description:</strong> naturally include your core local SEO offering and location.</li>
</ul>`,
      },
      {
        type: "step",
        number: "02",
        title: "NAP Strategy: Build Citations That Google Trusts",
        html: `<p>NAP stands for <strong>Name, Address, Phone Number</strong>.</p>
<p>If your business appears differently across directory listings, Google's algorithm gets confused and won't rank you as highly.</p>
<p><strong>Your NAP action plan:</strong></p>
<ol>
  <li>Audit every directory your business is listed in</li>
  <li>Correct every single inconsistency: exact name, exact address, exact phone number</li>
  <li>Submit your business to key directories for your region (Justdial, IndiaMART, YellowPages, Bing Places, Yelp)</li>
</ol>`,
      },
      {
        type: "step",
        number: "03",
        title: "Build Local SEO-Optimized Website Content",
        html: `<p>Optimize core landing pages for local search queries (e.g. service + city), implement LocalBusiness schema markup, and publish locally relevant blog content that addresses region-specific customer questions.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Review Strategy: The Trust Signal Google Rewards",
        html: `<p>Customer reviews directly influence Local Pack rankings. Ask satisfied customers for Google reviews at peak moments, send direct review links, and respond promptly to all positive and negative feedback.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Backlink Strategy: The Advanced Ranking Layer",
        html: `<p>Acquire authoritative local backlinks from regional news outlets, chamber of commerce directories, local business partnerships, and community sponsorships to boost domain authority in your geo-target.</p>`,
      },
      {
        type: "quick-wins",
        title: "Quick Wins: Do These This Week",
        items: [
          "Claim your Google Business Profile if you haven't already. It's free and takes 20 minutes.",
          "Upload 10+ photos to your GBP — interior, exterior, products, and team.",
          "Message your top 5 customers on WhatsApp and ask them to leave a Google review today.",
          "Fix your homepage title tag — it should read: IT Service in Kolkata | AppebSoft.",
          "Check your NAP on 3 directories: Google, Facebook, and one local directory.",
        ],
      },
      {
        type: "faq",
        title: "FAQ: Local SEO for Small Businesses",
        items: [
          {
            q: "Q1: How long does it take to see results from local SEO?",
            a: "Most businesses begin seeing measurable movement in 4–8 weeks, with significant ranking improvements in 3–6 months. Results compound over time.",
          },
          {
            q: "Q2: Can I do local SEO myself, or do I need to hire someone?",
            a: "You can handle basic Google Business Profile setup and reviews yourself. For technical schema, backlink building, and sustainable growth, professional SEO services deliver faster, reliable ROI.",
          },
          {
            q: "Q3: Are there genuinely affordable SEO options for small businesses?",
            a: "Yes, AppebSoft provides tailored, affordable SEO packages with transparent deliverables, monthly progress reporting, and no lock-in contracts.",
          },
        ],
      },
    ],
  },

  "ecommerce-seo-services": {
    featureImage: "/blogs/ALL-Types-Of-Works.jpg",
    featureImageAlt: "Ecommerce SEO Services: Outsell Amazon & Flipkart on Google",
    intro: `E-commerce marketplaces like Amazon and Flipkart dominate generic search results, but independent e-commerce brands can win high-intent organic traffic by deploying strategic, targeted <strong>Ecommerce SEO Services</strong>.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "Why E-Commerce Stores Need Dedicated SEO Services in 2025",
      },
      {
        type: "text",
        html: `<p>Relying solely on paid ads (Google Shopping & Meta Ads) squeezes profit margins over time. Sustainable profit comes from building organic search channels that bring ready-to-buy shoppers directly to your product catalog without paying for every click.</p>
<p>By optimizing technical site speed, category page structures, product schema data, and long-tail transactional keywords, independent online stores can regularly outrank large marketplaces on long-tail purchase queries.</p>`,
      },
      {
        type: "stats-box",
        title: "E-Commerce Organic Search Benchmarks",
        stats: [
          { value: "37.5%", label: "of total e-commerce traffic originates from search engines" },
          { value: "2.5x", label: "higher conversion rate for organic traffic vs social ads" },
          { value: "14.6%", label: "close rate on SEO leads compared to 1.7% for outbound leads" },
          { value: "70%+", label: "of product searches begin on Google or Amazon" },
        ],
      },
      {
        type: "heading",
        tag: "h2",
        text: "7 Proven Strategies to Outsell Giant Marketplaces",
      },
      {
        type: "step",
        number: "01",
        title: "Target Long-Tail & High-Intent Commercial Keywords",
        html: `<p>Compete where giant marketplaces are weak. Large platforms use generic automated descriptions. Target specific buyer-intent search queries like "handmade genuine leather travel bag under ₹5000" rather than just "leather bag".</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "Implement Rich Product & Review Schema (Structured Data)",
        html: `<p>Add Schema.org Product, Offer, AggregateRating, and InStock tags. This gives your search listings gold review stars, price badges, and inventory badges directly on Google SERPs for higher Click-Through Rates (CTR).</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "Optimize Category Page Architecture & Internal Linking",
        html: `<p>Category pages capture broad commercial traffic. Structure logical hierarchy with breadcrumbs, clear URL slugs, and contextual internal links pointing from top articles to money category pages.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Eliminate Duplicate Content & Faceted Navigation Issues",
        html: `<p>Faceted filter sorting (color, size, price) creates thousands of duplicate URL parameters. Use canonical tags, robots.txt directives, and clean Parameter Handling to preserve crawl budget.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Maximize Page Speed & Core Web Vitals Performance",
        html: `<p>Every second delay drops conversions by 7%. Compress WebP images, lazy-load offscreen media, implement edge caching, and optimize JavaScript execution for sub-second mobile page loads.</p>`,
      },
      {
        type: "step",
        number: "06",
        title: "Leverage User-Generated Content & Real Reviews",
        html: `<p>Add verified customer photo reviews, Q&A sections, and video testimonials. Fresh user-generated content provides continuous long-tail keyword updates that search bots love.</p>`,
      },
      {
        type: "step",
        number: "07",
        title: "Build High-Authority E-Commerce Backlinks & Digital PR",
        html: `<p>Earn quality links via lifestyle blogger reviews, industry gift guides, influencer features, and brand story features on reputable retail publications.</p>`,
      },
      {
        type: "quick-wins",
        title: "Actionable E-Commerce SEO Checklist",
        items: [
          "Add Product Schema to your top 20 revenue-generating products.",
          "Write original, benefit-focused descriptions for key category pages.",
          "Compress all product catalog images into Next-Gen WebP format.",
          "Set canonical tags on all paginated and filtered product URLs.",
        ],
      },
    ],
  },

  "local-seo-services-small-business": {
    featureImage: "/blogs/ALL-Types-Of-Works.jpg",
    featureImageAlt: "Local SEO for Small Businesses: 5 Steps to Rank #1 in Your City",
    intro: `Dominate your local market and reach targeted customers in your city with AppebSoft's comprehensive <strong>Local SEO Services for Small Businesses</strong>.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "The Power of Local Search for Small & Regional Businesses",
      },
      {
        type: "text",
        html: `<p>Local customers are actively searching for nearby services every minute. Whether you manage a specialized clinic, law firm, home services company, or retail store, appearing in Google's Local 3-Pack places your business front-and-center when purchase intent is highest.</p>`,
      },
      {
        type: "step",
        number: "01",
        title: "Google Business Profile Optimization",
        html: `<p>Complete 100% of your GBP listing, choose exact service categories, upload high-res location photos weekly, and post regular business updates to maintain maximum visibility on Google Maps.</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "Consistent NAP Citation Management",
        html: `<p>Ensure your business Name, Address, and Phone Number match exactly across major regional directories such as Justdial, IndiaMART, Facebook, Yelp, and Bing Places.</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "Localized Landing Pages & On-Page Optimization",
        html: `<p>Build dedicated location pages for each city or district you serve, optimized with localized metadata, localized schema, and embedded Google Maps.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Automated Customer Review Acquisition",
        html: `<p>Set up SMS/WhatsApp review request workflows to generate steady 5-star Google reviews from happy clients, boosting both rankings and conversion trust.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Local Geo-Targeted Link Building",
        html: `<p>Secure backlinks from local news publications, business chambers, community events, and non-competing regional partners to solidify geo-relevance.</p>`,
      },
    ],
  },

  "technical-seo-services": {
    featureImage: "/blogs/ALL-Types-Of-Works.jpg",
    featureImageAlt: "Technical SEO Services: 11 Critical Fixes for Google Rankings",
    intro: `Without a solid technical foundation, even the best content fails to rank. AppebSoft's <strong>Technical SEO Services</strong> resolve underlying crawl, indexation, speed, and architecture bottlenecks.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "11 Technical Fixes That Deliver Fast Search Ranking Gains",
      },
      {
        type: "step",
        number: "01",
        title: "Core Web Vitals Optimization (LCP, INP, CLS)",
        html: `<p>Optimize Largest Contentful Paint (LCP < 2.5s), Interaction to Next Paint (INP < 200ms), and Cumulative Layout Shift (CLS < 0.1) for Google's page experience signals.</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "XML Sitemaps & Robots.txt Directives Audit",
        html: `<p>Clean up XML sitemap indexes to contain only 200-OK canonical URLs and streamline robots.txt to prevent search bots from wasting crawl budget on unnecessary parameter scripts.</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "HTTPS SSL & Security Protocol Hardening",
        html: `<p>Ensure strict HTTPS enforcement across all endpoints, resolve mixed-content warnings, and enable HSTS security headers.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Canonicalization & Duplicate Content Elimination",
        html: `<p>Implement proper self-referential and cross-domain rel="canonical" tags to prevent index cannibalization on dynamic pages.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Mobile-First Indexing & Responsive Rendering Fixes",
        html: `<p>Ensure 100% parity between mobile and desktop HTML DOMs, fixing viewport scaling errors, unclickable tap targets, and hidden mobile content.</p>`,
      },
      {
        type: "step",
        number: "06",
        title: "Advanced Schema Markup (JSON-LD)",
        html: `<p>Implement Organization, WebSite, BreadcrumbList, Article, Product, and Service JSON-LD structured data for rich snippet eligibility.</p>`,
      },
      {
        type: "step",
        number: "07",
        title: "Page Speed & Caching Strategy",
        html: `<p>Enable Gzip/Brotli compression, leverage browser caching, minify CSS/JS bundles, and utilize CDN edge delivery.</p>`,
      },
      {
        type: "step",
        number: "08",
        title: "404 Error Remediation & 301 Redirect Mapping",
        html: `<p>Audit broken links, repair internal 404s, and set up 1:1 301 redirects for legacy URLs to preserve link equity.</p>`,
      },
      {
        type: "step",
        number: "09",
        title: "JavaScript Indexability & Dynamic Rendering",
        html: `<p>Ensure client-rendered React/Vite/Next.js components are properly pre-rendered or server-side rendered (SSR) so Googlebot indexes all dynamic text.</p>`,
      },
      {
        type: "step",
        number: "10",
        title: "Hreflang Tags for Multi-Regional Sites",
        html: `<p>Implement exact language and regional hreflang annotations for international websites serving global audiences.</p>`,
      },
      {
        type: "step",
        number: "11",
        title: "Crawl Budget Optimization",
        html: `<p>Prune low-quality or dead pages, block internal search result indexation, and optimize site architecture depth to under 3 clicks from homepage.</p>`,
      },
    ],
  },

  "7-reasons-website-not-ranking": {
    featureImage: "/blogs/blog-3.jpg",
    featureImageAlt: "7 Reasons Your Website Is Not Ranking on Google",
    intro: `Is your website stuck on page 2 or invisible on Google? Here are the top 7 reasons why websites fail to rank and how AppebSoft fixes each one.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "Diagnose & Fix Your Google Search Ranking Obstacles",
      },
      {
        type: "step",
        number: "01",
        title: "Reason 1: Search Engines Are Blocked From Crawling or Indexing",
        html: `<p><strong>Fix:</strong> Check Google Search Console for "noindex" tags or restrictive robots.txt rules that accidentally prevent search bots from reading your site.</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "Reason 2: Poor Keyword Targeting & Search Intent Mismatch",
        html: `<p><strong>Fix:</strong> Align your content with exact user search intent — informational, commercial, or transactional — rather than stuffing generic keywords.</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "Reason 3: Slow Page Speed & Poor Core Web Vitals",
        html: `<p><strong>Fix:</strong> Optimize server response times, compress media assets, and clean up bloated code to pass Google's speed thresholds.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Reason 4: Thin, Low-Quality, or Duplicate Content",
        html: `<p><strong>Fix:</strong> Publish authoritative, in-depth content that comprehensively answers user queries and offers unique insights.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Reason 5: Lack of High-Quality Backlinks (Low Domain Authority)",
        html: `<p><strong>Fix:</strong> Build a natural backlink profile through guest posting, digital PR, and industry partner relationships.</p>`,
      },
      {
        type: "step",
        number: "06",
        title: "Reason 6: Unoptimized On-Page SEO (Titles, Meta, H1 Tags)",
        html: `<p><strong>Fix:</strong> Craft unique H1 tags, meta descriptions, and keyword-rich Title tags for every page on your website.</p>`,
      },
      {
        type: "step",
        number: "07",
        title: "Reason 7: Bad Mobile User Experience (UX)",
        html: `<p><strong>Fix:</strong> Design fully responsive, touch-friendly mobile layouts since Google uses mobile-first indexing for all websites.</p>`,
      },
    ],
  },

  "how-to-choose-web-development-company": {
    featureImage: "/blogs/Right-Web-Development-Company-.jpeg",
    featureImageAlt: "How to Choose the Right Web Development Company in 2026",
    intro: `Selecting the right web development partner determines your digital product's speed, security, scalability, and ROI. Here is your definitive decision checklist.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "10 Factors to Evaluate Before Hiring a Web Agency",
      },
      {
        type: "step",
        number: "01",
        title: "Review Their Portfolio & Case Studies",
        html: `<p>Examine real client websites they've built. Test live site performance, visual aesthetics, responsiveness, and user experience.</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "Assess Their Tech Stack Expertise",
        html: `<p>Ensure they specialize in modern, high-performance frameworks (React, Vite, Next.js, Node.js, Python) rather than outdated templates.</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "Check Client Reviews & Verifiable Testimonials",
        html: `<p>Look for third-party reviews on Google, Clutch, and GoodFirms to verify their reliability, communication, and project delivery deadlines.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Understand Their Agile Development Process",
        html: `<p>Choose an agency that provides clear project roadmaps, regular sprint demos, and milestone-based development tracking.</p>`,
      },
      {
        type: "step",
        number: "05",
        title: "Demand Transparent Pricing & Scope Clarity",
        html: `<p>Avoid agencies with hidden costs. Look for clear fixed-price or time-and-materials proposals with detailed deliverable breakdowns.</p>`,
      },
    ],
  },

  "future-of-web-development-trends-2026": {
    featureImage: "/blogs/web-development-trends-2026.jpg",
    featureImageAlt: "Future of Web Development Trends Businesses Must Know in 2026",
    intro: `Explore the top web development trends in 2026 — from AI integration to serverless edge computing and progressive web apps.`,
    sections: [
      {
        type: "heading",
        tag: "h2",
        text: "Key Web Development Trends Transforming Digital Apps in 2026",
      },
      {
        type: "step",
        number: "01",
        title: "AI-Powered Personalization & Autonomous Agents",
        html: `<p>Web applications are integrating custom AI models to provide real-time hyper-personalized content, predictive search, and smart workflows.</p>`,
      },
      {
        type: "step",
        number: "02",
        title: "Progressive Web Apps (PWAs) & Mobile-First Experiences",
        html: `<p>PWAs offer native app-like speed, offline functionality, and push notifications directly through web browsers without app store downloads.</p>`,
      },
      {
        type: "step",
        number: "03",
        title: "Serverless Edge Architecture & Ultra-Fast APIs",
        html: `<p>Edge computing delivers serverless code execution closer to the user, drastically lowering latency and boosting global web app performance.</p>`,
      },
      {
        type: "step",
        number: "04",
        title: "Motion UI, Micro-Animations & Dynamic Glassmorphism",
        html: `<p>Modern web design prioritizes rich interactive visual fidelity — smooth GSAP animations, glassmorphism cards, and fluid dark-mode themes.</p>`,
      },
    ],
  },
};

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="faq-answer" dangerouslySetInnerHTML={{ __html: a }} />}
    </div>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const staticPost = blogPosts.find((p) => p.slug === slug);
  const [livePost, setLivePost] = useState(staticPost || null);
  const content = richContent[slug];

  useEffect(() => {
    async function loadLivePost() {
      try {
        const res = await fetchBlogPost(slug);
        if (res && res.data) {
          const apiData = res.data;
          setLivePost({
            id: apiData.slug || slug,
            slug: apiData.slug || slug,
            title: apiData.title,
            excerpt: apiData.excerpt || "",
            content: apiData.content || null,
            category: apiData.category?.name || "General",
            readTime: `${apiData.read_time_minutes || 5} min read`,
            author: apiData.author?.name || "AppebSoft Team",
            date: apiData.published_at
              ? new Date(apiData.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
              : "",
            image: apiData.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
            featuredImage: apiData.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
            tags: apiData.tags ? apiData.tags.map((t) => t.name) : [],
          });
        }
      } catch (err) {
        console.warn("Using fallback static post:", err);
      }
    }
    loadLivePost();
  }, [slug]);

  const post = livePost || staticPost;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex > 0
      ? blogPosts[currentIndex - 1]
      : blogPosts[blogPosts.length - 1];

  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : blogPosts[0];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post?.category || true))
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Override global dark body background for this page
  useEffect(() => {
    if (!document.getElementById('blogpost-bg-override')) {
      document.head.appendChild(styleOverride);
    }
    document.body.classList.add('blog-post-active');
    return () => {
      document.body.classList.remove('blog-post-active');
    };
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="blogpost-page">
        <Navbar />
        <div className="blogpost-not-found">
          <BookOpen size={60} />
          <h2>Blog Post Not Found</h2>
          <p>The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="back-btn"><ArrowLeft size={18} /> Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const featureImage = content?.featureImage || post.image;
  const featureImageAlt = content?.featureImageAlt || post.title;

  return (
    <div className="blogpost-page">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, AppebSoft Blog, SEO, Web Development`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": {
            "@type": "Organization",
            "name": "AppebSoft"
          },
          "publisher": {
            "@type": "Organization",
            "name": "AppebSoft",
            "logo": {
              "@type": "ImageObject",
              "url": "https://appebsoft.com/logo-color.png"
            }
          },
          "datePublished": post.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://appebsoft.com/blog/${slug}`
          }
        }}
      />
      <Navbar />

      {/* HERO BANNER */}
      <section className="bp-hero">
        <div className="bp-hero-orb bp-orb-violet"></div>
        <div className="bp-hero-orb bp-orb-cyan"></div>
        <div className="bp-radial-grid"></div>
        <div className="container bp-hero-content">
          <div className="bp-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span className="bp-current">{post.category}</span>
          </div>
          <div className="bp-meta-top">
            <span className="bp-cat-tag"><Tag size={14} /> {post.category}</span>
            <span className="bp-meta-item"><Clock size={14} /> {post.readTime}</span>
            <span className="bp-meta-item"><Calendar size={14} /> {post.date}</span>
          </div>
          <h1 className="bp-title">{post.title}</h1>
          <div className="bp-author-row">
            <div className="bp-author">
              <div className="bp-author-avatar"><User size={18} /></div>
              <div>
                <span className="bp-author-name">{post.author}</span>
                <span className="bp-author-label">AppebSoft Team</span>
              </div>
            </div>
            <button className="bp-share-btn" onClick={handleShare}>
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <div className="bp-feature-image-wrap">
        <div className="container">
          <div className="bp-feature-image-box">
            <img
              src={featureImage}
              alt={featureImageAlt}
              className="bp-feature-image"
              onError={(e) => {
                if (!e.currentTarget.src.includes("ALL-Types-Of-Works.jpg")) {
                  e.currentTarget.src = "/blogs/ALL-Types-Of-Works.jpg";
                }
              }}
            />
            <div className="bp-image-overlay"></div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="bp-content-section">
        <div className="container bp-layout">
          <article className="bp-article">

            {/* INTRO */}
            {content?.intro ? (
              <div className="bp-article-intro">
                <p className="bp-lead" dangerouslySetInnerHTML={{ __html: content.intro }} />
              </div>
            ) : (
              <div className="bp-article-intro">
                <p className="bp-lead">{post.excerpt}</p>
              </div>
            )}

            {/* RICH SECTIONS */}
            {content?.sections ? (
              <div className="bp-rich-content">
                {content.sections.map((section, i) => {
                  if (section.type === "heading") {
                    const Tag = section.tag || "h2";
                    return <Tag key={i} className={`bp-section-heading bp-${section.tag}`}>{section.text}</Tag>;
                  }
                  if (section.type === "text") {
                    return <div key={i} className="bp-text-block" dangerouslySetInnerHTML={{ __html: section.html }} />;
                  }
                  if (section.type === "stats-box") {
                    return (
                      <div key={i} className="bp-stats-box">
                        <h4>{section.title}</h4>
                        <div className="bp-stats-grid">
                          {section.stats.map((s, si) => (
                            <div key={si} className="bp-stat-item">
                              <span className="bp-stat-value">{s.value}</span>
                              <span className="bp-stat-label">{s.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  if (section.type === "step") {
                    return (
                      <div key={i} className="bp-step-block">
                        <div className="bp-step-header">
                          <span className="bp-step-number">{section.number}</span>
                          <h3 className="bp-step-title">{section.title}</h3>
                        </div>
                        <div className="bp-step-body" dangerouslySetInnerHTML={{ __html: section.html }} />
                      </div>
                    );
                  }
                  if (section.type === "quick-wins") {
                    return (
                      <div key={i} className="bp-quick-wins">
                        <h3>{section.title}</h3>
                        <ul>
                          {section.items.map((item, ii) => (
                            <li key={ii}>
                              <CheckCircle2 size={18} className="bp-check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  if (section.type === "faq") {
                    return (
                      <div key={i} className="bp-faq-section">
                        <h3>{section.title}</h3>
                        {section.items.map((item, fi) => (
                          <FAQItem key={fi} q={item.q} a={item.a} />
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ) : post?.content ? (
              <div className="bp-rich-content bp-cms-content" style={{ fontSize: '1.1rem', lineHeight: '1.8' }} dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              /* Fallback for posts without rich content */
              <div className="bp-external-notice">
                <div className="bp-notice-text">
                  <h3>Read the Full Post on AppebSoft.com</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.externalUrl || `/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="bp-read-full-btn">
                    Read Full Post <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="bp-tags-section">
              <h4>Topics Covered</h4>
              <div className="bp-tags-list">
                {post.tags.map((tag) => (
                  <span key={tag} className="bp-tag"># {tag}</span>
                ))}
              </div>
            </div>

            <div className="bp-article-footer">
              <button className="bp-share-action" onClick={handleShare}>
                <Share2 size={16} /> Share this blog post
              </button>
              <Link to="/blog" className="bp-back-link">
                <ArrowLeft size={16} /> All Blogs
              </Link>
            </div>

            {/* BLOG POST PAGINATION BAR */}
            <div className="bp-pagination-bar">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="bp-page-link bp-prev">
                  <span className="bp-page-sub">← PREVIOUS BLOG</span>
                  <span className="bp-page-title">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="bp-page-link bp-next">
                  <span className="bp-page-sub">NEXT BLOG →</span>
                  <span className="bp-page-title">{nextPost.title}</span>
                </Link>
              )}
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="bp-sidebar">
            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">About the Author</h4>
              <div className="bp-sidebar-author">
                <div className="bp-sidebar-avatar"><User size={24} /></div>
                <div>
                  <strong>{post.author}</strong>
                  <p>Digital Marketing Specialist at AppebSoft with expertise in SEO, web development, and growth strategies.</p>
                </div>
              </div>
            </div>

            <div className="bp-sidebar-card">
              <h4 className="bp-sidebar-title">Blog Info</h4>
              <div className="bp-sidebar-info-grid">
                <div className="bp-info-row">
                  <span className="bp-info-label">Category</span>
                  <span className="bp-sidebar-cat">{post.category}</span>
                </div>
                <div className="bp-info-row">
                  <span className="bp-info-label">Read Time</span>
                  <span className="bp-meta-item"><Clock size={16} /> {post.readTime}</span>
                </div>
                <div className="bp-info-row">
                  <span className="bp-info-label">Published</span>
                  <span className="bp-meta-item"><Calendar size={16} /> {post.date}</span>
                </div>
              </div>
            </div>

            <div className="bp-sidebar-card bp-sidebar-cta">
              <h4>Need Help Growing Online?</h4>
              <p>Our SEO and digital marketing team can get your business ranking #1 in your city.</p>
              <Link to="/contact" className="bp-cta-btn">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="bp-related-section">
          <div className="container">
            <div className="bp-related-header">
              <h2>Related Blogs</h2>
              <Link to="/blog" className="bp-all-link">View All <ArrowRight size={16} /></Link>
            </div>
            <div className="bp-related-grid">
              {relatedPosts.map((related) => (
                <article key={related.id} className="bp-related-card">
                  <div className="bp-related-image">
                    <img src={related.image} alt={related.title}
                      onError={(e) => { e.target.parentElement.style.display = "none"; }} />
                    <span className="bp-related-cat">{related.category}</span>
                  </div>
                  <div className="bp-related-body">
                    <div className="bp-related-meta">
                      <span><Clock size={12} /> {related.readTime}</span>
                      <span><Calendar size={12} /> {related.date}</span>
                    </div>
                    <h3 className="bp-related-title">
                      <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                    </h3>
                    <Link to={`/blog/${related.slug}`} className="bp-related-read">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default BlogPost;
