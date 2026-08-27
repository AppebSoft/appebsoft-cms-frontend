// src/components/common/SEOHead.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEOHead({
  title,
  description,
  keywords,
  schema,
  canonical,
  ogImage,
  robots = "index, follow",
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const pageTitle = title ? `${title} | AppebSoft` : "AppebSoft - Amplifying Digital Power";
    document.title = pageTitle;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 3. Meta Description & Keywords
    const metaDesc =
      description ||
      "AppebSoft is a premier digital product studio delivering custom web development, mobile applications, enterprise software, and AI solutions.";
    setMetaTag('meta[name="description"]', 'name', 'description', metaDesc);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDesc);

    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);

    // 4. Robots Tag
    setMetaTag('meta[name="robots"]', 'name', 'robots', robots);

    // 5. OpenGraph & Twitter Images
    const defaultImage = title
      ? `https://api.appebsoft.com/api/v1/og-image?title=${encodeURIComponent(title)}`
      : "https://appebsoft.com/assets/og-preview.png";
    const imageToUse = ogImage || defaultImage;
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', imageToUse);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', imageToUse);
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // 6. Canonical URL normalization
    const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
    const pageUrl = canonical || `https://appebsoft.com${normalizedPath === "/" ? "" : normalizedPath}`;
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", pageUrl);

    // 7. Dynamic JSON-LD Schema
    const scriptId = "dynamic-jsonld-schema";
    let scriptEl = document.getElementById(scriptId);

    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      // Remove stale schema from prior page if current page doesn't define one
      scriptEl.remove();
    }

    return () => {
      // Cleanup dynamic schema on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, schema, canonical, ogImage, robots, location.pathname]);

  return null;
}

export default SEOHead;
