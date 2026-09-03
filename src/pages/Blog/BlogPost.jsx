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
import { fetchBlogPost, fetchBlogPosts } from "../../services/cmsApi";
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

/* --- Legacy hardcoded rich content removed -- all blog bodies are now CMS-driven --- */
/* â”€â”€â”€ FAQ Accordion â”€â”€â”€ */
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
  const [livePost, setLivePost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLivePost() {
      setLoading(true);
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
            intro: apiData.intro || null,
            sections: apiData.sections?.length ? apiData.sections : null,
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
        } else {
          setLivePost(null);
        }
      } catch (err) {
        console.warn("Failed to load blog post from CMS:", err.message);
        setLivePost(null);
      } finally {
        setLoading(false);
      }
    }
    loadLivePost();
  }, [slug]);

  // Fetch the full post list once, used for prev/next navigation and related posts.
  useEffect(() => {
    fetchBlogPosts({ per_page: 100 })
      .then((res) => {
        const raw = Array.isArray(res?.data) ? res.data : [];
        setAllPosts(
          raw.map((p) => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt || "",
            category: p.category?.name || "General",
            image: p.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
            featuredImage: p.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
          }))
        );
      })
      .catch((err) => console.warn("Failed to load blog post list:", err.message));
  }, []);

  const post = livePost;

  const content = post?.sections ? { intro: post.intro, sections: post.sections } : null;

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex > 0
      ? allPosts[currentIndex - 1]
      : allPosts[allPosts.length - 1];

  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : allPosts[0];

  const relatedPosts = allPosts
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

  if (loading) {
    return (
      <div className="blogpost-page">
        <Navbar />
        <div className="blogpost-not-found">
          <p>Loading article…</p>
        </div>
        <Footer />
      </div>
    );
  }

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

  const featureImage = post.image;
  const featureImageAlt = post.title;

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
                  <span className="bp-page-sub">â† PREVIOUS BLOG</span>
                  <span className="bp-page-title">{prevPost.title}</span>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="bp-page-link bp-next">
                  <span className="bp-page-sub">NEXT BLOG â†’</span>
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
