import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Search,
  MapPin,
  Target,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  Zap,
  Globe,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function GoogleMarketing() {
  const [googleMode, setGoogleMode] = useState("search");
  const [activeTab, setActiveTab] = useState("ads");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Google Marketing & Ads Strategy"
        description="Google Search Ads, Performance Max, Display Network, and Youtube advertising managed by certified experts."
        keywords="Google Marketing, Google Ads, Performance Max, Search Ads, PPC Management"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Google Marketing" />

      {/* HERO WITH INTERACTIVE GOOGLE ADS & MAPS 3-PACK SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <BarChart3 size={14} /> <span>360° GOOGLE MARKETING SERVICES</span>
            </div>
            <h1 className="hero-title">
              Dominate Google Search, Ads & <br />
              <span className="accent-gradient">Local Maps to Capture High-Intent Leads</span>
            </h1>
            <p className="hero-desc">
              We combine Google Search Ads, Performance Max campaigns, Google Maps 3-Pack SEO, and Google Analytics (GA4) attribution to turn Google into your most profitable revenue engine.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                START GOOGLE CAMPAIGN <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View PPC Proof
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Google Premier Partner Certified Strategies</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Quality Score 10/10 & Maximum ROAS Optimization</span></div>
            </div>
          </div>

          {/* INTERACTIVE GOOGLE ADS & MAPS SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${googleMode === "search" ? "active" : ""}`}
                  onClick={() => setGoogleMode("search")}
                >
                  <Search size={13} /> Search Ads
                </button>
                <button
                  className={`device-btn ${googleMode === "maps" ? "active" : ""}`}
                  onClick={() => setGoogleMode("maps")}
                >
                  <MapPin size={13} /> Local 3-Pack
                </button>
                <button
                  className={`device-btn ${googleMode === "pmax" ? "active" : ""}`}
                  onClick={() => setGoogleMode("pmax")}
                >
                  <TrendingUp size={13} /> Performance Max
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {googleMode === "search" && (
                <div className="ux-proto-view" style={{ background: "#ffffff", border: "1px solid #e2e8f0", color: "#0b0a32", borderRadius: "14px" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#1a73e8", marginBottom: "4px" }}>Ad · https://appebsoft.com/google-ads</div>
                  <h4 style={{ color: "#1a0dab", fontSize: "1rem", fontWeight: 700, marginBottom: "4px" }}>
                    Top Rated Web & Software Agency — High Converting PPC
                  </h4>
                  <p style={{ color: "#4d5156", fontSize: "0.78rem", lineHeight: 1.5, margin: 0 }}>
                    Maximize ROI with high-intent search ads, negative keyword management, and custom landing pages...
                  </p>
                  <div className="mode-label" style={{ marginTop: "12px", color: "#1a73e8" }}>Google Search Ad #1 Sponsored</div>
                </div>
              )}

              {googleMode === "maps" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#ea4335" }}><MapPin size={12} /> Google Business Profile #1</div>
                    <h4>AppebSoft Digital Agency</h4>
                    <p>⭐ 4.9 (120+ Verified Reviews) · Web & Software Services</p>
                    <div className="proto-stats">
                      <div><span>Map Position</span><strong>#1 Local 3-Pack</strong></div>
                      <div><span>Phone Calls</span><strong>+180% Lift</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Google Local Maps 3-Pack</div>
                </div>
              )}

              {googleMode === "pmax" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#fbbc04", color: "#0b0a32" }}><TrendingUp size={12} /> Performance Max AI</div>
                    <h4>Omnichannel Google Campaign</h4>
                    <p>Automated bidding across YouTube, Search, Gmail, and Discover network.</p>
                    <div className="proto-stats">
                      <div><span>ROAS</span><strong>5.4x Return</strong></div>
                      <div><span>Quality Score</span><strong>10 / 10</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Google Performance Max AI</div>
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
            <span className="badge-tag">GOOGLE ECOSYSTEM MATRIX</span>
            <h2>Complete Google Marketing Suite</h2>
            <p>Integrated paid search, local SEO, and analytics tracking.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "ads" ? "active" : ""}`}
              onClick={() => setActiveTab("ads")}
            >
              Google PPC Ads
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "maps" ? "active" : ""}`}
              onClick={() => setActiveTab("maps")}
            >
              Google Maps 3-Pack
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "ga4" ? "active" : ""}`}
              onClick={() => setActiveTab("ga4")}
            >
              GA4 Analytics & Tag Manager
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "ads" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>Exact Match Commercial Bidding</h4></div>
                  <p>Targeting buyer intent keywords with high commercial value to maximize ROAS.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Award className="tech-icon" /> <h4>Quality Score 10/10</h4></div>
                  <p>Building high-converting landing pages aligned with ad copy for lowest Cost-Per-Click.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Performance Max Automation</h4></div>
                  <p>Leveraging Google AI bidding models to capture buyers across YouTube, Gmail, and Search.</p>
                </div>
              </>
            )}

            {activeTab === "maps" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><MapPin className="tech-icon" /> <h4>Google Business Profile Audit</h4></div>
                  <p>Optimizing GBP categories, NAP consistency, attributes, and geo-targeted photo updates.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Globe className="tech-icon" /> <h4>Local Citation Building</h4></div>
                  <p>Building high-authority local directory citations to boost map ranking authority.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><CheckCircle2 className="tech-icon" /> <h4>Automated Review Systems</h4></div>
                  <p>Setting up automated SMS & email review invitation workflows to generate 5-star Google reviews.</p>
                </div>
              </>
            )}

            {activeTab === "ga4" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><BarChart3 className="tech-icon" /> <h4>GA4 Event Attribution</h4></div>
                  <p>Configuring custom conversion events, purchase tracking, and multi-channel attribution models.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Google Tag Manager (GTM)</h4></div>
                  <p>Server-side Tag Manager container setup for reliable conversion tracking without script lag.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Looker Studio Dashboards</h4></div>
                  <p>Live real-time performance dashboards tracking Cost-Per-Lead, total spend, and ROAS.</p>
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
            <span className="section-subtitle">GOOGLE MARKETING PILLARS</span>
            <h2>Complete Google Ecosystem Dominance</h2>
            <p>Integrated strategies that maximize impression share and customer acquisition.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Target size={32} /></div>
              <h3>Google Search & Shopping Ads</h3>
              <p>High-converting PPC ads, negative keyword management, and shopping feed optimization for maximum ROAS.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><MapPin size={32} /></div>
              <h3>Google Business Profile & Local 3-Pack</h3>
              <p>Local SEO optimization, review acquisition systems, and geo-targeted citations to capture nearby buyer searches.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><TrendingUp size={32} /></div>
              <h3>Performance Max & YouTube Ads</h3>
              <p>AI-driven Performance Max campaigns across Search, Display, Discover, Gmail, and YouTube video ads.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><BarChart3 size={32} /></div>
              <h3>GA4 Analytics & Conversion Tracking</h3>
              <p>Precision conversion event setup in Google Analytics 4 & Tag Manager for accurate revenue attribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Maximize Your Google Marketing ROI?</h2>
            <p>Get a complimentary Google Ads & Organic Visibility Audit from AppebSoft's certified Google Partners.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET FREE GOOGLE AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/google-marketing" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default GoogleMarketing;
