import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Smartphone,
  Tablet,
  Zap,
  ShieldCheck,
  Search,
  Layers,
  Code2,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Flame,
  Award,
  Users,
  Bell,
  WifiOff,
  Activity,
  Lock,
  Globe,
  BarChart,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "./MobileAppDevelopment.css";
import SEOHead from "../../components/common/SEOHead";

gsap.registerPlugin(ScrollTrigger);

function MobileAppDevelopment() {
  const pageRef = useRef(null);
  const [activeOS, setActiveOS] = useState("ios");
  const [activeTechTab, setActiveTechTab] = useState("cross");

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="creative-mobile-page" ref={pageRef}>
      <SEOHead
        title="Mobile App Development"
        description="Native iOS, Android, and cross-platform Flutter and React Native mobile applications built for scale."
        keywords="Mobile App Development, iOS Apps, Android Apps, React Native, Flutter Apps"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Mobile App Development" />

      {/* 1. HERO SECTION */}
      <section className="mobile-hero">
        <div className="hero-radial-grid"></div>
        <div className="glow-orb orb-violet"></div>
        <div className="glow-orb orb-cyan"></div>

        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-glow-tag">
              <Sparkles size={14} className="sparkle-anim" />
              <span>NEXT-GEN MOBILE APP STUDIO</span>
            </div>

            <h1 className="hero-title-main">
              Empowering Brands With <br />
              <span className="neon-gradient">Native & Cross-Platform</span> <br />
              Mobile Applications
            </h1>

            <p className="hero-subtitle">
              We develop secure, scalable, and user-friendly mobile applications for iOS, Android, and hybrid cross-platform needs engineered for high engagement and retention.
            </p>

            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                Talk To Our Experts <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                Explore Our Work
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>iOS & Android Native Performance</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>React Native & Flutter Solutions</span>
              </div>
              <div className="hl-item">
                <CheckCircle2 size={18} className="hl-check" />
                <span>99.9% Crash-Free Stability</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE PHONE APP SIMULATOR */}
          <div className="phone-simulator-wrapper">
            <div className="phone-os-toggle">
              <button
                className={`os-btn ${activeOS === "ios" ? "active" : ""}`}
                onClick={() => setActiveOS("ios")}
              >
                 iOS App
              </button>
              <button
                className={`os-btn ${activeOS === "android" ? "active" : ""}`}
                onClick={() => setActiveOS("android")}
              >
                🤖 Android App
              </button>
            </div>

            <div className={`phone-frame os-${activeOS}`}>
              <div className="phone-notch"></div>
              
              <div className="phone-screen">
                <div className="phone-app-header">
                  <div className="phone-app-brand">AppebSoft Mobile</div>
                  <Bell size={16} className="bell-icon" />
                </div>

                <div className="phone-app-banner">
                  <span className="app-tag">{activeOS.toUpperCase()} NATIVE</span>
                  <h4>Mobile App Development That Empowers</h4>
                  <p>Fast, reliable, and built for your business goals.</p>
                </div>

                <div className="phone-features-grid">
                  <div className="phone-feat-pill">
                    <Bell size={13} /> Push Alerts
                  </div>
                  <div className="phone-feat-pill">
                    <WifiOff size={13} /> Offline Mode
                  </div>
                  <div className="phone-feat-pill">
                    <Lock size={13} /> Biometric ID
                  </div>
                </div>

                <div className="phone-app-stat">
                  <Activity size={16} className="act-icon" />
                  <div>
                    <strong>99.9% Crash-Free</strong>
                    <span>Core Performance Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE PILLARS (WHY MOBILE APPS) */}
      <section className="mobile-section value-pillars-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">WHY MOBILE APPS</div>
            <h2>Stay Connected With Your Users Everywhere</h2>
            <p>
              Mobile applications provide direct engagement, personalized user experiences, and a permanent brand presence directly on your customer’s device.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card creative-card">
              <div className="pillar-icon"><Smartphone size={28} /></div>
              <h3>Stay Connected</h3>
              <p>Direct engagement through real-time notifications, rich media messaging, and customized user feeds.</p>
              <div className="pillar-tag">User Retention</div>
            </div>

            <div className="pillar-card creative-card featured-pillar">
              <div className="pillar-badge">CORE SERVICE</div>
              <div className="pillar-icon"><Code2 size={28} /></div>
              <h3>What We Build</h3>
              <p>Native iOS (Swift), Android (Kotlin), cross-platform React Native & Flutter apps, and secure Cloud APIs.</p>
              <div className="pillar-tag">Full-Stack Mobile</div>
            </div>

            <div className="pillar-card creative-card">
              <div className="pillar-icon"><Rocket size={28} /></div>
              <h3>Development Cycle</h3>
              <p>End-to-end journey from research, wireframing, design, and coding to App Store & Play Store deployment.</p>
              <div className="pillar-tag">Full Lifecycle</div>
            </div>

            <div className="pillar-card creative-card">
              <div className="pillar-icon"><Award size={28} /></div>
              <h3>Why Invest in Apps</h3>
              <p>Boost customer lifetime value, enable offline capability, and strengthen your market competitive advantage.</p>
              <div className="pillar-tag">High Business ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE APPEBSOFT ENGINEERING STANDARD (4 NUMBERED PILLARS) */}
      <section className="mobile-section standard-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">THE APPEBSOFT STANDARD</div>
            <h2>Why Choose AppebSoft For Mobile Development</h2>
            <p>
              We combine human-centric UI/UX design with robust mobile engineering to deliver apps that users love.
            </p>
          </div>

          <div className="standard-grid">
            <div className="std-card creative-card">
              <div className="std-num">01</div>
              <h4>Thoughtful User Design</h4>
              <p>We design apps with user needs first. Every feature, layout, and flow is built for a smooth, intuitive experience.</p>
            </div>

            <div className="std-card creative-card">
              <div className="std-num">02</div>
              <h4>Professional Codebase</h4>
              <p>Our developers follow strict industry best practices. You get reliable, secure, and scalable mobile apps that perform consistently.</p>
            </div>

            <div className="std-card creative-card">
              <div className="std-num">03</div>
              <h4>Fair & Transparent Pricing</h4>
              <p>We deliver high-quality mobile apps within reasonable budgets. Our flexible packages benefit both startups and enterprises.</p>
            </div>

            <div className="std-card creative-card">
              <div className="std-num">04</div>
              <h4>Measurable Business ROI</h4>
              <p>We track app performance with analytics. Downloads, retention, and conversion metrics reveal your app's real value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECH MATRIX TABS */}
      <section className="mobile-section mobile-tech-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">MOBILE TECH MATRIX</div>
            <h2>Engineered With Modern Mobile Frameworks</h2>
            <p>Choosing the right mobile architecture for speed, performance, and cross-platform flexibility.</p>

            <div className="matrix-tabs">
              <button
                className={`matrix-tab-btn ${activeTechTab === "cross" ? "active" : ""}`}
                onClick={() => setActiveTechTab("cross")}
              >
                Cross-Platform
              </button>
              <button
                className={`matrix-tab-btn ${activeTechTab === "ios" ? "active" : ""}`}
                onClick={() => setActiveTechTab("ios")}
              >
                iOS Native
              </button>
              <button
                className={`matrix-tab-btn ${activeTechTab === "android" ? "active" : ""}`}
                onClick={() => setActiveTechTab("android")}
              >
                Android Native
              </button>
            </div>
          </div>

          <div className="matrix-display">
            {activeTechTab === "cross" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Code2 size={24} className="tech-icon" />
                    <h4>React Native</h4>
                  </div>
                  <p>Single codebase for iOS and Android with near-native performance and fast deployment.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Layers size={24} className="tech-icon" />
                    <h4>Flutter & Dart</h4>
                  </div>
                  <p>Custom widget rendering engine delivering 60fps fluid UI animations and expressiveness.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Cpu size={24} className="tech-icon" />
                    <h4>Rest APIs & GraphQL</h4>
                  </div>
                  <p>High-speed data synchronization and offline caching for uninterrupted mobile usage.</p>
                </div>
              </div>
            )}

            {activeTechTab === "ios" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Smartphone size={24} className="tech-icon" />
                    <h4>Swift & SwiftUI</h4>
                  </div>
                  <p>Native Apple iOS engineering optimized for iPhone, iPad, and Apple Watch ecosystem.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <ShieldCheck size={24} className="tech-icon" />
                    <h4>Keychain & Biometric Security</h4>
                  </div>
                  <p>Apple FaceID, TouchID, and hardware-encrypted secure storage protocols.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Bell size={24} className="tech-icon" />
                    <h4>Apple Push Notification Service (APNs)</h4>
                  </div>
                  <p>High-deliverability instant notification pipelines for user re-engagement.</p>
                </div>
              </div>
            )}

            {activeTechTab === "android" && (
              <div className="matrix-grid">
                <div className="tech-box">
                  <div className="tech-head">
                    <Tablet size={24} className="tech-icon" />
                    <h4>Kotlin & Jetpack Compose</h4>
                  </div>
                  <p>Modern Android app development recommended by Google for ultra-fast, bug-free apps.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Lock size={24} className="tech-icon" />
                    <h4>Android Keystore & Biometrics</h4>
                  </div>
                  <p>Enterprise encryption standards protecting sensitive user tokens and financial data.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head">
                    <Flame size={24} className="tech-icon" />
                    <h4>Firebase Cloud Messaging (FCM)</h4>
                  </div>
                  <p>Real-time database sync, push notifications, and remote config management.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. RELATED SERVICES */}
      <section className="mobile-section related-services-section">
        <div className="container">
          <div className="creative-head text-center">
            <div className="neon-pill">EXPAND YOUR DIGTAL REACH</div>
            <h2>Complementary Digital Services</h2>
            <p>Combine your mobile application with our web and marketing solutions for total digital dominance.</p>
          </div>

          <div className="related-grid">
            <div className="related-card creative-card">
              <div className="rel-icon"><Globe size={26} /></div>
              <h4>Website Development</h4>
              <p>Build a modern, high-speed responsive website that complements your mobile mobile application.</p>
              <Link to="/services/web-development" className="rel-link">
                Explore Website Development <ArrowRight size={14} />
              </Link>
            </div>

            <div className="related-card creative-card">
              <div className="rel-icon"><Search size={26} /></div>
              <h4>Search Engine Optimization (SEO)</h4>
              <p>Rank higher on Google, capture organic search traffic, and drive qualified leads to your business.</p>
              <Link to="/services/search-engine-optimization" className="rel-link">
                Explore SEO Services <ArrowRight size={14} />
              </Link>
            </div>

            <div className="related-card creative-card">
              <div className="rel-icon"><BarChart size={26} /></div>
              <h4>Google & Digital Ads</h4>
              <p>Targeted PPC marketing campaigns designed to capture high-intent searches and boost app downloads.</p>
              <Link to="/contact" className="rel-link">
                Start Campaign <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIGH IMPACT CREATIVE CTA BANNER */}
      <section className="mobile-section cta-banner-section">
        <div className="container">
          <div className="creative-cta-box">
            <div className="cta-ambient-laser"></div>
            <div className="cta-badge">STRUGGLING TO GROW ONLINE?</div>
            <h2>Start a Digital App & Marketing Campaign With Us!</h2>
            <p>
              Talk to our mobile development experts today and build an app that turns casual users into brand advocates.
            </p>
            <Link to="/contact" className="creative-btn primary-glow-btn cta-large-btn">
              GET IN TOUCH NOW <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/mobile-app-development" />

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default MobileAppDevelopment;
