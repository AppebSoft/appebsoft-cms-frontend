import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  TrendingUp,
  MapPin,
  FileText,
  BarChart,
  ArrowRight,
  Target,
  Award,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function SearchEngineOptimization() {
  const [seoTab, setSeoTab] = useState("serp");
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Search Engine Optimization (SEO)"
        description="Technical SEO, local SEO, ecommerce SEO, and content optimization services to drive organic growth."
        keywords="SEO Services, Technical SEO, Local SEO, Organic Traffic, Search Engine Optimization"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Search Engine Optimization (SEO)" />

      {/* HERO WITH INTERACTIVE GOOGLE SERP & SEO AUDIT SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Search size={14} /> <span>SEARCH ENGINE OPTIMIZATION (SEO)</span>
            </div>
            <h1 className="hero-title">
              Dominate Google Search Results & <br />
              <span className="accent-gradient">Drive High-Intent Organic Traffic</span>
            </h1>
            <p className="hero-desc">
              We deliver data-driven SEO campaigns — from Technical Audits and Keyword Strategy to Local 3-Pack Optimization and High-Authority Link Building — that help your business outrank competitors and capture paying clients.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                GET FREE SEO AUDIT <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Ranking Proof
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Core Web Vitals 99/100 & Fast Indexing</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>High-DR Backlink Building & PR Placements</span></div>
            </div>
          </div>

          {/* INTERACTIVE GOOGLE SERP & AUDIT SCORECARD */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${seoTab === "serp" ? "active" : ""}`}
                  onClick={() => setSeoTab("serp")}
                >
                  <Search size={13} /> Live SERP #1
                </button>
                <button
                  className={`device-btn ${seoTab === "audit" ? "active" : ""}`}
                  onClick={() => setSeoTab("audit")}
                >
                  <BarChart size={13} /> SEO Audit 99%
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {seoTab === "serp" && (
                <div className="ux-proto-view" style={{ background: "#ffffff", border: "1px solid #e2e8f0", color: "#0b0a32", borderRadius: "14px" }}>
                  <div style={{ fontSize: "0.72rem", color: "#202124", marginBottom: "4px" }}>https://appebsoft.com › seo-services</div>
                  <h4 style={{ color: "#1a0dab", fontSize: "1.05rem", fontWeight: 700, marginBottom: "4px" }}>
                    #1 Professional SEO Agency & Growth Partner — AppebSoft
                  </h4>
                  <p style={{ color: "#4d5156", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>
                    Drive 10x organic growth with data-backed technical SEO, Core Web Vitals optimization, and high-authority link building...
                  </p>
                  <div className="mode-label" style={{ marginTop: "12px", color: "#7128ef" }}>Google Search Rank #1 Snippet</div>
                </div>
              )}

              {seoTab === "audit" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Award size={12} /> Technical Health Scorecard</div>
                    <h4>Core Web Vitals Audit</h4>
                    <p>Passed all Google Lighthouse performance metrics and mobile usability checks.</p>
                    <div className="proto-stats">
                      <div><span>SEO Score</span><strong>99 / 100</strong></div>
                      <div><span>LCP Speed</span><strong>0.8 Seconds</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Lighthouse SEO Audit Verified</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TECH MATRIX TABS */}
      <section className="creative-section">
        <div className="container">
          <div className="creative-head text-center">
            <span className="badge-tag">SEO METHODOLOGY</span>
            <h2>White-Hat SEO Optimization Framework</h2>
            <p>Proven strategies that build long-term search authority and steady organic lead flow.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "technical" ? "active" : ""}`}
              onClick={() => setActiveTab("technical")}
            >
              Technical SEO
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "content" ? "active" : ""}`}
              onClick={() => setActiveTab("content")}
            >
              On-Page & Keywords
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "offpage" ? "active" : ""}`}
              onClick={() => setActiveTab("offpage")}
            >
              Off-Page Authority
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "technical" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Search className="tech-icon" /> <h4>Core Web Vitals Optimization</h4></div>
                  <p>Minifying JS/CSS, optimizing LCP/CLS metrics, and implementing edge CDN caching.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Globe className="tech-icon" /> <h4>Structured Data Schema</h4></div>
                  <p>Adding Organization, Article, LocalBusiness, and Product JSON-LD rich snippets.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Crawl Budget & Indexation</h4></div>
                  <p>Fixing 404 redirect loops, canonical tag conflicts, and XML sitemap indexation.</p>
                </div>
              </>
            )}

            {activeTab === "content" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><FileText className="tech-icon" /> <h4>Commercial Intent Research</h4></div>
                  <p>Targeting high-value commercial keywords with buyer intent that convert visitors to leads.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>On-Page Meta & Heading Optimization</h4></div>
                  <p>Crafting click-worthy title tags, meta descriptions, H1-H3 structures, and internal linking grids.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>E-E-A-T Content Enhancement</h4></div>
                  <p>Demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness in every piece.</p>
                </div>
              </>
            )}

            {activeTab === "offpage" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><BarChart className="tech-icon" /> <h4>High-DR Guest Posts & PR</h4></div>
                  <p>Securing contextual backlink placements on DR70+ industry publications and news portals.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><MapPin className="tech-icon" /> <h4>Google Business Profile 3-Pack</h4></div>
                  <p>Optimizing GBP citations, geo-tagged photos, and review acquisition workflows for local maps.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Award className="tech-icon" /> <h4>Toxic Link Disavow Audits</h4></div>
                  <p>Monitoring toxic backlink profiles and filing Google Search Console disavow files.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="subpage-features-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR SEO CAPABILITIES</span>
            <h2>Comprehensive Organic Growth Services</h2>
            <p>Proven white-hat SEO strategies built for long-term Page 1 rankings.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Search size={32} /></div>
              <h3>Technical SEO Audits & Speed Fixes</h3>
              <p>Resolving crawl errors, Core Web Vitals, XML sitemaps, canonical tags, and JavaScript indexing bottlenecks.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><MapPin size={32} /></div>
              <h3>Local SEO & Google Business Profile</h3>
              <p>Optimizing GBP listings, NAP citation consistency, localized schema, and automated review management for local map rankings.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><FileText size={32} /></div>
              <h3>On-Page & Commercial Content SEO</h3>
              <p>Keyword research and high-converting content optimization aligned with buyer search intent for maximum CTR.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><BarChart size={32} /></div>
              <h3>Authority Backlink & PR Building</h3>
              <p>Earning authoritative, contextually relevant backlinks from top publications and industry portals to boost Domain Rating.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Want Your Website Ranking #1 on Google?</h2>
            <p>Claim your free 25-point Technical SEO & Keyword Opportunity Audit today.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              CLAIM FREE AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/search-engine-optimization" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default SearchEngineOptimization;
