import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  Target,
  TrendingUp,
  BarChart,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PieChart,
  DollarSign,
  MousePointerClick,
  Award,
  Globe,
  Layers,
  ShoppingBag,
  MapPin,
  RefreshCw,
  Sliders,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "./SearchEngineMarketing.css";
import SEOHead from "../../components/common/SEOHead";

gsap.registerPlugin(ScrollTrigger);

function SearchEngineMarketing() {
  const pageRef = useRef(null);
  const [activeKeywordTab, setActiveKeywordTab] = useState("b2b");
  const [activeAdTab, setActiveAdTab] = useState("search");

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="creative-sem-page" ref={pageRef}>
      <SEOHead
        title="Search Engine Marketing (SEM)"
        description="Targeted PPC campaigns, Google Ads management, and performance marketing strategies for maximum ROI."
        keywords="Search Engine Marketing, SEM, Google Ads, PPC Campaigns, Performance Marketing"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Search Engine Marketing (SEM)" />

      {/* 1. HERO SECTION */}
      <section className="sem-hero">
        <div className="hero-radial-grid"></div>
        <div className="glow-orb orb-violet"></div>
        <div className="glow-orb orb-cyan"></div>

        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-glow-tag">
              <Sparkles size={14} className="sparkle-anim" />
              <span>DATA-DRIVEN PPC & SEM ENGINE</span>
            </div>

            <h1 className="hero-title-main">
              Turn Clicks Into Customers With <br />
              <span className="neon-gradient">High-Intent Search Engine</span> <br />
              Marketing (SEM)
            </h1>

            <p className="hero-subtitle">
              We blend strategy, intent targeting, high-converting ad copy, and smart bid optimization to drive immediate leads, sales, and maximum return on ad spend (ROAS).
            </p>

            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                Talk to our SEM experts <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Case Studies
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>Instant Google Page 1 Visibility</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>10/10 Quality Score Optimization</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>100% Transparent Live ROI Analytics</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SERP AD SIMULATOR */}
          <div className="serp-simulator-wrapper">
            <div className="serp-header">
              <div className="serp-search-bar">
                <Search size={14} className="search-icon" />
                <span className="query-text">
                  {activeKeywordTab === "b2b" && "Best Enterprise Software Solution"}
                  {activeKeywordTab === "local" && "Top Rated Local Services Near Me"}
                  {activeKeywordTab === "ecom" && "Buy Premium Products Online Free Delivery"}
                </span>
              </div>

              <div className="serp-keyword-toggles">
                <button
                  className={`kw-btn ${activeKeywordTab === "b2b" ? "active" : ""}`}
                  onClick={() => setActiveKeywordTab("b2b")}
                >
                  B2B Intent
                </button>
                <button
                  className={`kw-btn ${activeKeywordTab === "local" ? "active" : ""}`}
                  onClick={() => setActiveKeywordTab("local")}
                >
                  Local
                </button>
                <button
                  className={`kw-btn ${activeKeywordTab === "ecom" ? "active" : ""}`}
                  onClick={() => setActiveKeywordTab("ecom")}
                >
                  Shopping
                </button>
              </div>
            </div>

            <div className="serp-card-mock">
              <div className="serp-ad-tag">
                <span>Sponsored</span> • <span>appebsoft.com</span>
              </div>
              <h3 className="serp-ad-headline">
                {activeKeywordTab === "b2b" && "AppebSoft Enterprise SEM | 5x ROAS Guarantee"}
                {activeKeywordTab === "local" && "Instant 24/7 Service Calls | AppebSoft Local Ads"}
                {activeKeywordTab === "ecom" && "Top E-Commerce Deals | Fast Conversion Store"}
              </h3>
              <p className="serp-ad-desc">
                Capture high-intent searches when buyers are ready to take action. Optimized landing pages, smart bidding, and continuous A/B testing.
              </p>

              <div className="serp-ad-sitelinks">
                <span>Request Free Audit</span>
                <span>Our SEM Approach</span>
                <span>Client Case Studies</span>
              </div>

              <div className="serp-metrics-badge">
                <div className="sm-pill"><MousePointerClick size={13} /> <span>14.8% CTR</span></div>
                <div className="sm-pill"><Award size={13} /> <span>10/10 Quality</span></div>
                <div className="sm-pill"><DollarSign size={13} /> <span>-35% CPA</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SEM PILLARS */}
      <section className="sem-section sem-pillars-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">WHY SEM MATTERS</div>
            <h2>Immediate Search Engine Dominance</h2>
            <p>
              Search Engine Marketing gives your brand instant visibility on Google and Bing, putting your business in front of customers at the exact moment they search for your services.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card creative-card">
              <div className="pillar-icon"><Target size={28} /></div>
              <h3>Page 1 Visibility</h3>
              <p>Skip the waiting period and gain immediate top-of-page search placement for high-converting commercial keywords.</p>
              <div className="pillar-tag">Instant Reach</div>
            </div>

            <div className="pillar-card creative-card featured-pillar">
              <div className="pillar-badge">HIGH ROAS</div>
              <div className="pillar-icon"><DollarSign size={28} /></div>
              <h3>PPC Budget Control</h3>
              <p>Set precise daily budgets, bid limits, and location targets so every ad dollar is spent with maximum efficiency.</p>
              <div className="pillar-tag">Granular Control</div>
            </div>

            <div className="pillar-card creative-card">
              <div className="pillar-icon"><BarChart size={28} /></div>
              <h3>100% Measurable ROI</h3>
              <p>Track every click, lead form, and phone call directly back to your ad spend with real-time conversion attribution.</p>
              <div className="pillar-tag">Proven Value</div>
            </div>

            <div className="pillar-card creative-card">
              <div className="pillar-icon"><Zap size={28} /></div>
              <h3>Faster Lead Growth</h3>
              <p>Drive immediate targeted website traffic while building long-term organic search momentum through dual-channel synergy.</p>
              <div className="pillar-tag">Rapid Scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR 4-STAGE SEM APPROACH */}
      <section className="sem-section approach-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">HOW WE WORK</div>
            <h2>Our 4-Stage SEM Campaign Blueprint</h2>
            <p>A data-backed methodology designed to turn raw ad spend into predictable revenue growth.</p>
          </div>

          <div className="approach-stepper">
            <div className="approach-card creative-card">
              <div className="app-step-num">01</div>
              <div className="app-icon"><Search size={26} /></div>
              <h4>Research & Strategy</h4>
              <p>In-depth keyword research, competitor ad analysis, buyer intent profiling, and strict budget allocation.</p>
            </div>

            <div className="approach-card creative-card">
              <div className="app-step-num">02</div>
              <div className="app-icon"><Sliders size={26} /></div>
              <h4>Campaign Architecture</h4>
              <p>Structured ad groups, high-converting ad copy, bid strategies, and dedicated landing page alignment.</p>
            </div>

            <div className="approach-card creative-card">
              <div className="app-step-num">03</div>
              <div className="app-icon"><Zap size={26} /></div>
              <h4>Launch & Daily Audit</h4>
              <p>Real-time campaign deployment paired with daily monitoring to prevent negative keyword waste.</p>
            </div>

            <div className="approach-card creative-card">
              <div className="app-step-num">04</div>
              <div className="app-icon"><RefreshCw size={26} /></div>
              <h4>Optimize & Scale</h4>
              <p>Continuous A/B copy testing, bid adjustments, Quality Score improvements, and expansion into high-ROI channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE APPEBSOFT ADVANTAGE (4 NUMBERED CARDS) */}
      <section className="sem-section advantage-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">THE APPEBSOFT ADVANTAGE</div>
            <h2>Built For Maximum Conversion & ROAS</h2>
            <p>Why modern enterprises trust AppebSoft for search advertising management.</p>
          </div>

          <div className="advantage-grid">
            <div className="sem-adv-card creative-card">
              <div className="adv-num">01</div>
              <div className="sem-adv-text">
                <h4>Strategic Intent Targeting</h4>
                <p>Every campaign starts with data. We study your audience, competitors, and goals to build ad campaigns that convert.</p>
              </div>
            </div>

            <div className="sem-adv-card creative-card">
              <div className="adv-num">02</div>
              <div className="sem-adv-text">
                <h4>Certified PPC Specialists</h4>
                <p>Certified Google Ads experts manage your campaigns with transparent communication, timely reports, and zero guesswork.</p>
              </div>
            </div>

            <div className="sem-adv-card creative-card">
              <div className="adv-num">03</div>
              <div className="sem-adv-text">
                <h4>Cost-Effective Bidding</h4>
                <p>We focus on ROI, not ad spend. Smart automated bidding and negative keyword filtering keep your cost per lead minimal.</p>
              </div>
            </div>

            <div className="sem-adv-card creative-card">
              <div className="adv-num">04</div>
              <div className="sem-adv-text">
                <h4>100% Measurable Data</h4>
                <p>Every click, call, and conversion is tracked. You see clear data on performance, ad spend, and net ROI in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PPC CAMPAIGN MATRIX TABS */}
      <section className="sem-section campaign-matrix-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">SEM SERVICES WE OFFER</div>
            <h2>Full-Funnel Search Advertising Solutions</h2>
            <p>Targeting customers across search engines, display networks, and local maps.</p>

            <div className="matrix-tabs">
              <button
                className={`matrix-tab-btn ${activeAdTab === "search" ? "active" : ""}`}
                onClick={() => setActiveAdTab("search")}
              >
                Google & Bing Search
              </button>
              <button
                className={`matrix-tab-btn ${activeAdTab === "local" ? "active" : ""}`}
                onClick={() => setActiveAdTab("local")}
              >
                Local Search Ads
              </button>
              <button
                className={`matrix-tab-btn ${activeAdTab === "display" ? "active" : ""}`}
                onClick={() => setActiveAdTab("display")}
              >
                Display & Remarketing
              </button>
            </div>
          </div>

          <div className="matrix-display">
            {activeAdTab === "search" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Search size={24} className="tech-icon" />
                    <h4>Google Ads Management</h4>
                  </div>
                  <p>Targeted search ad campaigns engineered for high CTR, top ad positions, and immediate conversion growth.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Target size={24} className="tech-icon" />
                    <h4>Microsoft & Bing Ads</h4>
                  </div>
                  <p>Reach affluent desktop business audiences with lower competition and reduced Cost Per Click (CPC).</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <PieChart size={24} className="tech-icon" />
                    <h4>Conversion Rate Optimization (CRO)</h4>
                  </div>
                  <p>Optimizing landing page copy, forms, and call-to-action buttons to convert clicks into paying leads.</p>
                </div>
              </div>
            )}

            {activeAdTab === "local" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <MapPin size={24} className="tech-icon" />
                    <h4>Google Local Service Ads</h4>
                  </div>
                  <p>Location-based ads designed to capture nearby customers searching for immediate local solutions.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <CheckCircle2 size={24} className="tech-icon" />
                    <h4>Google Screened & Guaranteed</h4>
                  </div>
                  <p>Establish instant local trust with official Google verification badges for service-based businesses.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Globe size={24} className="tech-icon" />
                    <h4>Geo-Targeted PPC Campaigns</h4>
                  </div>
                  <p>Hyper-targeted Radius & ZIP code ad delivery tailored for retail stores, clinics, and regional services.</p>
                </div>
              </div>
            )}

            {activeAdTab === "display" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Layers size={24} className="tech-icon" />
                    <h4>Google Display Network Ads</h4>
                  </div>
                  <p>Eye-catching banner ad placements across millions of high-traffic partner websites and mobile apps.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <RefreshCw size={24} className="tech-icon" />
                    <h4>Dynamic Remarketing Ads</h4>
                  </div>
                  <p>Re-engage past website visitors who showed interest but left without completing a purchase or lead form.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <ShoppingBag size={24} className="tech-icon" />
                    <h4>Google Shopping & Performance Max</h4>
                  </div>
                  <p>Visual product listing ads (PLA) synced with live inventory to maximize e-commerce checkout sales.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. HIGH-IMPACT CREATIVE CTA BANNER */}
      <section className="sem-section cta-banner-section">
        <div className="container">
          <div className="creative-cta-box">
            <div className="cta-ambient-laser"></div>
            <div className="cta-badge">READY TO BOOST YOUR ROI?</div>
            <h2>Start a Digital Marketing Campaign With Us!</h2>
            <p>
              Struggling to promote your business online? Partner with AppebSoft today to build high-converting search advertising campaigns.
            </p>
            <Link to="/contact" className="creative-btn primary-glow-btn cta-large-btn">
              GET IN TOUCH NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/search-engine-marketing" />

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default SearchEngineMarketing;
