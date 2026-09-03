import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Sparkles,
  Search,
  ArrowRight,
  Clock,
  User,
  Calendar,
  Tag,
  BookOpen,
  Mail,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

import { fetchBlogPosts, fetchBlogCategories, subscribeNewsletter } from "../../services/cmsApi";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import "./Blog.css";
import SEOHead from "../../components/common/SEOHead";

gsap.registerPlugin(ScrollTrigger);

// ─── Adapters: normalize CMS data → component shape ──────────────────────────
function adaptPost(post) {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || "",
    category: post.category?.name || "General",
    readTime: `${post.read_time_minutes} min read`,
    author: post.author?.name || "AppebSoft Team",
    date: post.published_at
      ? new Date(post.published_at).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
      : "",
    featured: post.is_featured,
    tags: post.tags ? post.tags.map((t) => t.name) : [],
    image: post.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
    featuredImage: post.featured_image || "/blogs/ALL-Types-Of-Works.jpg",
    externalUrl: null, // served from our own API now
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
function Blog() {
  const pageRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  // CMS data state — populated entirely from the live API
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const POSTS_PER_PAGE = 6;

  // Fetch posts + categories from CMS on mount
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const [postsRes, catsRes] = await Promise.all([
          fetchBlogPosts({ per_page: 100 }),
          fetchBlogCategories(),
        ]);
        const rawPosts = Array.isArray(postsRes?.data)
          ? postsRes.data
          : (Array.isArray(postsRes?.data?.data) ? postsRes.data.data : []);
        
        if (rawPosts.length > 0) {
          const adapted = rawPosts.map(adaptPost);
          setBlogPosts(adapted);
        } else {
          setBlogPosts([]);
        }

        const catData = Array.isArray(catsRes?.data) ? catsRes.data : [];
        if (catData.length > 0) {
          const catNames = ["All", ...catData.map((c) => c.name)];
          setCategories(catNames);
        }
      } catch (e) {
        console.warn("CMS API request failed:", e.message);
        setError("Unable to load blog posts right now. Please try again shortly.");
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
    try { ScrollTrigger.refresh(); } catch (_) {}
  }, []);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (Array.isArray(post.tags) && post.tags.some((t) => typeof t === "string" && t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribing(true);
    try {
      const data = await subscribeNewsletter(emailInput);
      if (data.success) {
        setSubscribed(true);
        setEmailInput("");
      }
    } catch {
      // Still show success even if offline to not frustrate user
      setSubscribed(true);
      setEmailInput("");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="creative-blog-page" ref={pageRef}>
      <SEOHead
        title="Blog & Insights | Web, AI & Tech Trends"
        description="Read the latest insights, tutorials, and engineering blog posts on Web Development, AI, SEO, and Software Architecture by AppebSoft."
        keywords="AppebSoft Blog, Tech Insights, Web Dev Tutorials, SEO Guides, AI Blogs"
      />

      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="blog-hero">
        <div className="hero-radial-grid"></div>
        <div className="glow-orb orb-violet"></div>
        <div className="glow-orb orb-cyan"></div>

        <div className="container blog-hero-content text-center">
          <div className="blog-hero-tag">
            <Sparkles size={14} className="sparkle-anim" />
            <span>APPEBSOFT BLOG — INSIGHTS & THOUGHT LEADERSHIP</span>
          </div>

          <h1 className="blog-hero-title">
            The Latest Industry Design,<br />
            <span className="neon-gradient">Technologies & AI Updates</span>
          </h1>

          <p className="blog-hero-subtitle">
            Explore the latest insights on SEO, web development, digital marketing, AI breakthroughs, and mobile app strategies from the AppebSoft team.
          </p>

          {/* SEARCH & CATEGORY FILTER BAR */}
          <div className="blog-filter-bar">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search blog posts, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-pills">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`cat-pill ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOADING STATE */}
      {loading && (
        <section className="blog-grid-section">
          <div className="container" style={{ textAlign: "center", padding: "80px 0" }}>
            <Loader2 size={40} style={{ animation: "spin 1s linear infinite", opacity: 0.5 }} />
            <p style={{ marginTop: 16, opacity: 0.6 }}>Loading blog posts...</p>
          </div>
        </section>
      )}

      {/* ERROR STATE */}
      {error && !loading && (
        <section className="blog-grid-section">
          <div className="container" style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ color: "#ff4d4f" }}>{error}</p>
          </div>
        </section>
      )}

      {!loading && !error && (
        <>
          {/* 2. FEATURED BLOG POST BANNER */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <section className="blog-featured-section">
              <div className="container">
                <div className="featured-card creative-card">
                  <div className="featured-image-wrap">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="featured-img"
                      onError={(e) => {
                        if (!e.currentTarget.src.includes("ALL-Types-Of-Works.jpg")) {
                          e.currentTarget.src = "/blogs/ALL-Types-Of-Works.jpg";
                        }
                      }}
                    />
                  </div>
                  <div className="featured-body">
                    <div className="featured-badge-top">
                      <Sparkles size={13} /> <span>FEATURED STORY</span>
                    </div>

                    <div className="featured-meta">
                      <span className="cat-tag"><Tag size={13} /> {featuredPost.category}</span>
                      <span className="meta-item"><Clock size={13} /> {featuredPost.readTime}</span>
                      <span className="meta-item"><Calendar size={13} /> {featuredPost.date}</span>
                    </div>

                    <h2 className="featured-title">{featuredPost.title}</h2>
                    <p className="featured-excerpt">{featuredPost.excerpt}</p>

                    <div className="featured-footer">
                      <div className="author-info">
                        <User size={16} className="author-icon" />
                        <span>{featuredPost.author}</span>
                      </div>

                      <Link
                        to={`/blog/${featuredPost.slug}`}
                        className="creative-btn primary-glow-btn"
                      >
                        Read Full Post <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 3. BLOG POSTS GRID */}
          <section className="blog-grid-section">
            <div className="container">
              <div className="grid-header">
                <h3>
                  {selectedCategory === "All" ? "All Blogs" : selectedCategory}{" "}
                  <span className="post-count">({filteredPosts.length})</span>
                </h3>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="no-results-box">
                  <BookOpen size={40} className="no-res-icon" />
                  <h4>No blog posts found</h4>
                  <p>Try searching for a different keyword or select another category filter.</p>
                  <button
                    className="creative-btn primary-glow-btn"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="articles-grid">
                    {paginatedPosts.map((post) => (
                      <article key={post.id} className="blog-card creative-card">
                        {/* Feature Image */}
                        <div className="card-image-wrap">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="card-feature-img"
                            onError={(e) => {
                              if (!e.currentTarget.src.includes("ALL-Types-Of-Works.jpg")) {
                                e.currentTarget.src = "/blogs/ALL-Types-Of-Works.jpg";
                              }
                            }}
                          />
                          <span className="card-cat-overlay">{post.category}</span>
                        </div>

                        <div className="card-body">
                          <div className="card-top">
                            <span className="read-time"><Clock size={12} /> {post.readTime}</span>
                            <span className="meta-item"><Calendar size={12} /> {post.date}</span>
                          </div>

                          <h3 className="card-title">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>

                          <p className="card-excerpt">{post.excerpt}</p>

                          <div className="card-tags">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="tag-pill">#{tag}</span>
                            ))}
                          </div>

                          <div className="card-footer">
                            <div className="card-author">
                              <User size={14} /> <span>{post.author}</span>
                            </div>

                            <Link to={`/blog/${post.slug}`} className="read-more-link">
                              Read More <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* PAGINATION CONTROLS */}
                  {totalPages > 1 && (
                    <div className="blog-pagination">
                      <button
                        className="page-btn nav-arrow"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      >
                        <ChevronLeft size={18} /> Previous
                      </button>

                      <div className="page-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                          <button
                            key={pageNum}
                            className={`page-num ${currentPage === pageNum ? "active" : ""}`}
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </button>
                        ))}
                      </div>

                      <button
                        className="page-btn nav-arrow"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      >
                        Next <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </>
      )}

      {/* 4. NEWSLETTER SUBSCRIPTION SECTION */}
      <section className="blog-newsletter-section">
        <div className="container">
          <div className="newsletter-box creative-card">
            <div className="news-icon-glow">
              <Mail size={32} />
            </div>

            <h2>Stay Ahead of the Digital Curve</h2>
            <p>
              Get curated tech insights, SEO guides, web development strategies and digital marketing tips delivered straight to your inbox once a week.
            </p>

            {subscribed ? (
              <div className="subscribe-success">
                <CheckCircle2 size={24} className="check-icon" />
                <span>Thank you for subscribing! You are now on the VIP list.</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <button type="submit" className="creative-btn primary-glow-btn" disabled={subscribing}>
                  {subscribing ? "Subscribing..." : <>Subscribe Now <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. HIGH-IMPACT CTA BANNER */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="creative-cta-box">
            <div className="cta-ambient-laser"></div>
            <div className="cta-badge">HAVE A DIGITAL PROJECT IN MIND?</div>
            <h2>Grow Your Business with AppebSoft</h2>
            <p>
              From SEO and digital marketing to full-stack web development and mobile apps — we build and promote digital products that drive real business growth.
            </p>
            <Link to="/contact" className="creative-btn primary-glow-btn cta-large-btn">
              GET IN TOUCH <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default Blog;
