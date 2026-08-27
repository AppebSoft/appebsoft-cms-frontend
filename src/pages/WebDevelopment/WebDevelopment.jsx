import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  Zap,
  ShieldCheck,
  Search,
  Layout,
  Layers,
  Code2,
  Rocket,
  Sparkles,
  ArrowRight,
  Monitor,
  Tablet,
  CheckCircle2,
  Cpu,
  Terminal,
  Activity,
  Server,
  Lock,
  Flame,
  Award,
  Users,
  TrendingUp,
  BarChart,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "./WebDevelopment.css";
import SEOHead from "../../components/common/SEOHead";

gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {
  const heroRef = useRef(null);
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [activeTechTab, setActiveTechTab] = useState("frontend");

  useEffect(() => {
    // Refresh ScrollTrigger for proper layout calculation
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="creative-webdev-page" ref={heroRef}>
      <SEOHead
        title="Web Development Services"
        description="Custom web development using React, Next.js, Node.js, and high-performance cloud architectures."
        keywords="Web Development, Custom Websites, React Apps, Next.js Studio, Progressive Web Apps"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Web Development" />

      {/* 1. CREATIVE HERO SECTION */}
      <section className="creative-hero">
        <div className="hero-radial-grid"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>

        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-glow-tag">
              <Sparkles size={14} className="sparkle-anim" />
              <span>NEXT-GEN WEB ENGINEERING</span>
            </div>

            <h1 className="hero-title-main">
              We Build <br />
              <span className="neon-gradient">Ultra-Fast Digital</span> <br />
              Web Experiences
            </h1>

            <p className="hero-subtitle">
              Crafting bespoke web applications, high-converting enterprise portals,
              and responsive digital platforms engineered for peak speed, security, and global scale.
            </p>

            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="creative-btn glass-btn">
                Talk To Our Experts
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>Mobile-First Fluid Layouts</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>Enterprise Grade Security</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE DEVICE PREVIEW SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              <div className="device-switchers">
                <button
                  className={`device-btn ${activeDevice === "desktop" ? "active" : ""}`}
                  onClick={() => setActiveDevice("desktop")}
                >
                  <Monitor size={15} /> Desktop
                </button>
                <button
                  className={`device-btn ${activeDevice === "tablet" ? "active" : ""}`}
                  onClick={() => setActiveDevice("tablet")}
                >
                  <Tablet size={15} /> Tablet
                </button>
                <button
                  className={`device-btn ${activeDevice === "mobile" ? "active" : ""}`}
                  onClick={() => setActiveDevice("mobile")}
                >
                  <Smartphone size={15} /> Mobile
                </button>
              </div>
            </div>

            <div className={`simulator-screen device-${activeDevice}`}>
              <div className="simulator-mock-nav">
                <div className="mock-logo">
                  <span className="logo-dot"></span> AppebSoft
                </div>
                <div className="mock-nav-links">
                  {activeDevice !== "mobile" && <span></span>}
                  <span></span><span></span>
                </div>
              </div>

              <div className="simulator-mock-hero">
                <div className="mock-badge">{activeDevice.toUpperCase()} MODE (100% RESPONSIVE)</div>
                <div className="mock-title-line line-1"></div>
                <div className="mock-title-line line-2"></div>
                <div className="mock-buttons">
                  <div className="mock-btn purple"></div>
                  {activeDevice !== "mobile" && <div className="mock-btn outline"></div>}
                </div>
              </div>

              <div className="simulator-metrics-bar">
                <div className="metric-pill">
                  <Flame size={14} className="flame-icon" /> <span>0.4s LCP</span>
                </div>
                <div className="metric-pill">
                  <Activity size={14} className="act-icon" /> <span>99/100 Speed</span>
                </div>
                {activeDevice !== "mobile" && (
                  <div className="metric-pill">
                    <ShieldCheck size={14} className="shield-icon" /> <span>SSL Active</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE ARCHITECTURE & WHY RESPONSIVE MATTERS */}
      <section className="creative-section intro-architect">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">WHY RESPONSIVE DESIGN MATTERS</div>
            <h2>Built For Every Screen, Optimized For Speed</h2>
            <p>
              Your customers browse on smartphones, tablets, and ultra-wide desktops.
              We fine-tune layouts, image pipelines, and modular code so your brand delivers
              unmatched performance across every single device.
            </p>
          </div>

          <div className="cards-trio-grid">
            <div className="creative-card glass-feature-card">
              <div className="card-ambient-glow glow-cyan"></div>
              <div className="card-icon-hex">
                <Layout size={32} />
              </div>
              <h3>Fluid Adaptive Grids</h3>
              <p>
                Calculated CSS Grid & Flexbox architectures that dynamically re-flow
                elements cleanly without breaking layout boundaries on any screen resolution.
              </p>
              <div className="card-tag">Self-Adjusting Layout</div>
            </div>

            <div className="creative-card glass-feature-card featured-center-card">
              <div className="card-ambient-glow glow-violet"></div>
              <div className="card-badge-top">BEST PRACTICE</div>
              <div className="card-icon-hex">
                <Zap size={32} />
              </div>
              <h3>Sub-Second Load Speeds</h3>
              <p>
                Next-gen image WebP/AVIF compression, code splitting, and browser caching engineered
                to score 95+ on Google Core Web Vitals.
              </p>
              <div className="card-tag">Peak Performance</div>
            </div>

            <div className="creative-card glass-feature-card">
              <div className="card-ambient-glow glow-blue"></div>
              <div className="card-icon-hex">
                <Smartphone size={32} />
              </div>
              <h3>50+ Device Testing</h3>
              <p>
                Rigorously validated across real iOS, Android, and desktop viewports to guarantee
                100% bug-free interaction and touch response.
              </p>
              <div className="card-tag">Cross-Platform Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TECH STACK MATRIX */}
      <section className="creative-section tech-matrix-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">OUR TECH MATRIX</div>
            <h2>Modern Full-Stack Technology Stack</h2>
            <p>
              We leverage modern frameworks and robust backend infrastructures to build scalable web products.
            </p>

            <div className="matrix-tabs">
              <button
                className={`matrix-tab-btn ${activeTechTab === "frontend" ? "active" : ""}`}
                onClick={() => setActiveTechTab("frontend")}
              >
                Frontend & UI
              </button>
              <button
                className={`matrix-tab-btn ${activeTechTab === "backend" ? "active" : ""}`}
                onClick={() => setActiveTechTab("backend")}
              >
                Backend & API
              </button>
              <button
                className={`matrix-tab-btn ${activeTechTab === "ecommerce" ? "active" : ""}`}
                onClick={() => setActiveTechTab("ecommerce")}
              >
                E-Commerce & CMS
              </button>
            </div>
          </div>

          <div className="matrix-content-display">
            {activeTechTab === "frontend" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Code2 size={24} className="tech-icon" />
                    <h4>React.js & Next.js</h4>
                  </div>
                  <p>Server-side rendering, static site generation, and lightning-fast SPA routing.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Layout size={24} className="tech-icon" />
                    <h4>TypeScript & Modern CSS</h4>
                  </div>
                  <p>Type-safe codebases with modular CSS3, Tailwind, and custom animation hooks.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Sparkles size={24} className="tech-icon" />
                    <h4>GSAP & Motion Animations</h4>
                  </div>
                  <p>Butter-smooth scroll triggers, 60fps micro-interactions, and 3D visual FX.</p>
                </div>
              </div>
            )}

            {activeTechTab === "backend" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Server size={24} className="tech-icon" />
                    <h4>Node.js & Express</h4>
                  </div>
                  <p>High-concurrency RESTful & GraphQL microservices built for heavy traffic.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Cpu size={24} className="tech-icon" />
                    <h4>Python & Cloud APIs</h4>
                  </div>
                  <p>Secure data processing, AI model integrations, and cloud worker pipelines.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <ShieldCheck size={24} className="tech-icon" />
                    <h4>PostgreSQL & Redis</h4>
                  </div>
                  <p>Scalable relational databases paired with in-memory caching for zero latency.</p>
                </div>
              </div>
            )}

            {activeTechTab === "ecommerce" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Globe size={24} className="tech-icon" />
                    <h4>Shopify & Headless Commerce</h4>
                  </div>
                  <p>Custom store designs with liquid templates and headless API storefronts.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Terminal size={24} className="tech-icon" />
                    <h4>WordPress & Custom CMS</h4>
                  </div>
                  <p>Tailored admin panels allowing your content team to edit content with ease.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Lock size={24} className="tech-icon" />
                    <h4>Payment Gateway Integration</h4>
                  </div>
                  <p>Stripe, PayPal, and multi-currency checkout flows with end-to-end encryption.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. STEPPED ENGINEERING PROCESS (TIMELINE) */}
      <section className="creative-section engineering-process">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">OUR METHODOLOGY</div>
            <h2>Our 4-Step Engineering Process</h2>
            <p>
              A systematic blueprint designed to turn strategic ideas into launch-ready web products.
            </p>
          </div>

          <div className="timeline-stepper">
            <div className="step-card creative-card">
              <div className="step-badge">STEP 01</div>
              <div className="step-icon-glow">
                <Search size={28} />
              </div>
              <h4>Discovery & Architecture</h4>
              <p>
                In-depth audit of business goals, user personas, wireframes, and tech stack mapping.
              </p>
            </div>

            <div className="step-card creative-card">
              <div className="step-badge">STEP 02</div>
              <div className="step-icon-glow">
                <Layers size={28} />
              </div>
              <h4>High-Fidelity UI/UX Design</h4>
              <p>
                Crafting interactive prototypes, component design systems, and responsive layouts.
              </p>
            </div>

            <div className="step-card creative-card">
              <div className="step-badge">STEP 03</div>
              <div className="step-icon-glow">
                <Code2 size={28} />
              </div>
              <h4>Clean Code Engineering</h4>
              <p>
                Developing modular codebases with responsive CSS grid, fast API routes, and security protocols.
              </p>
            </div>

            <div className="step-card creative-card">
              <div className="step-badge">STEP 04</div>
              <div className="step-icon-glow">
                <Rocket size={28} />
              </div>
              <h4>Audit, Launch & Growth</h4>
              <p>
                Performing Core Web Vitals speed tuning, SEO schema validation, and zero-downtime deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEASURABLE ADVANTAGES (WHAT YOU GAIN) */}
      <section className="creative-section advantages-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">THE APPEBSOFT ADVANTAGE</div>
            <h2>What You Gain With Our Web Solutions</h2>
            <p>
              Every website we deliver is engineered to maximize conversion rates and establish market authority.
            </p>
          </div>

          <div className="advantages-hex-grid">
            <div className="adv-card creative-card">
              <div className="adv-icon"><Zap size={24} /></div>
              <div className="adv-content">
                <h5>Sub-Second Speed</h5>
                <p>Ultra-fast server responses and optimized assets keep bounce rates under 25%.</p>
              </div>
            </div>

            <div className="adv-card creative-card">
              <div className="adv-icon"><TrendingUp size={24} /></div>
              <div className="adv-content">
                <h5>Higher Lead Conversions</h5>
                <p>Frictionless UX pathways designed to convert raw visitors into active buyers.</p>
              </div>
            </div>

            <div className="adv-card creative-card">
              <div className="adv-icon"><Search size={24} /></div>
              <div className="adv-content">
                <h5>SEO-First Codebase</h5>
                <p>Semantic HTML5, automated XML sitemaps, and Schema structured data built-in.</p>
              </div>
            </div>

            <div className="adv-card creative-card">
              <div className="adv-icon"><ShieldCheck size={24} /></div>
              <div className="adv-content">
                <h5>Fortified Security</h5>
                <p>Automated SSL certification, DDoS protection, and secure form validation.</p>
              </div>
            </div>

            <div className="adv-card creative-card">
              <div className="adv-icon"><Globe size={24} /></div>
              <div className="adv-content">
                <h5>Unified Cross-Device Polish</h5>
                <p>Impeccable visual harmony across smartphones, tablets, laptops, and 4K displays.</p>
              </div>
            </div>

            <div className="adv-card creative-card">
              <div className="adv-icon"><Award size={24} /></div>
              <div className="adv-content">
                <h5>Scalable Architecture</h5>
                <p>Modular code structure built to handle millions of visitors as your company scales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO WE EMPOWER (TARGET AUDIENCE) */}
      <section className="creative-section audience-empower">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">BUILT FOR SCALE</div>
            <h2>Perfect For Every Growing Enterprise</h2>
            <p>
              Custom web engineering tailored to the unique goals of modern digital businesses.
            </p>
          </div>

          <div className="empower-grid">
            <div className="empower-card creative-card">
              <div className="empower-num">01</div>
              <div className="empower-icon"><Rocket size={26} /></div>
              <h4>Startups & Scale-Ups</h4>
              <p>Launch fast with a stunning, conversion-engineered digital flagship site.</p>
            </div>

            <div className="empower-card creative-card">
              <div className="empower-num">02</div>
              <div className="empower-icon"><Server size={26} /></div>
              <h4>Legacy Modernization</h4>
              <p>Transform slow, outdated legacy websites into modern reactive web applications.</p>
            </div>

            <div className="empower-card creative-card">
              <div className="empower-num">03</div>
              <div className="empower-icon"><Globe size={26} /></div>
              <h4>E-Commerce Brands</h4>
              <p>High-conversion shopping platforms designed for fast checkout and high retention.</p>
            </div>

            <div className="empower-card creative-card">
              <div className="empower-num">04</div>
              <div className="empower-icon"><Users size={26} /></div>
              <h4>Enterprise Portals</h4>
              <p>Secure, high-traffic corporate portals tailored for global enterprise organizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-IMPACT CREATIVE CTA BANNER */}
      <section className="creative-section cta-banner-section">
        <div className="container">
          <div className="creative-cta-box">
            <div className="cta-ambient-laser"></div>
            <div className="cta-badge">LET'S BUILD SOMETHING GREAT</div>
            <h2>Ready to Build an Ultra-Fast, Responsive Website?</h2>
            <p>
              Partner with AppebSoft today to engineer a world-class web platform that elevates your brand and drives measurable market growth.
            </p>
            <Link to="/contact" className="creative-btn primary-glow-btn cta-large-btn">
              START YOUR PROJECT NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/web-development" />

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default WebDevelopment;
