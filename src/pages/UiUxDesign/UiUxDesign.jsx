import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Layout,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
  CheckCircle2,
  ArrowRight,
  MousePointer,
  PenTool,
  Grid,
  Check,
  Zap,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "./UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function UiUxDesign() {
  const [designMode, setDesignMode] = useState("prototype"); // wireframe, system, prototype
  const [activeTab, setActiveTab] = useState("research");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="UI/UX Design & Product Strategy"
        description="Human-centered UI/UX design, wireframing, interactive prototyping, and design systems for enterprise software."
        keywords="UI UX Design, User Experience, User Interface, Product Design, Design System"
      />

      <Navbar />
      <BreadcrumbNav currentPage="UI/UX Design" />

      {/* 1. HERO SECTION WITH INTERACTIVE FIGMA / DESIGN SYSTEM SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="glow-orb orb-1"></div>
        
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Palette size={14} /> <span>USER EXPERIENCE & INTERFACE DESIGN</span>
            </div>
            <h1 className="hero-title">
              Crafting Intuitive, <br />
              <span className="accent-gradient">Human-Centered Digital Experiences</span>
            </h1>
            <p className="hero-desc">
              We design sleek, responsive user interfaces and seamless user journeys that captivate audiences, increase engagement, and drive high conversion rates across all devices.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                START YOUR DESIGN PROJECT <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                Explore Design System
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Wireframing & Interactive Prototypes</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Design Systems & Component Libraries</span></div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE DESIGN SYSTEM & PROTOTYPE SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${designMode === "wireframe" ? "active" : ""}`}
                  onClick={() => setDesignMode("wireframe")}
                >
                  <Grid size={13} /> Wireframe
                </button>
                <button
                  className={`device-btn ${designMode === "system" ? "active" : ""}`}
                  onClick={() => setDesignMode("system")}
                >
                  <Palette size={13} /> Design System
                </button>
                <button
                  className={`device-btn ${designMode === "prototype" ? "active" : ""}`}
                  onClick={() => setDesignMode("prototype")}
                >
                  <MousePointer size={13} /> Live Prototype
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {designMode === "wireframe" && (
                <div className="ux-wireframe-view">
                  <div className="wire-header">
                    <div className="wire-box title-box"></div>
                    <div className="wire-nav">
                      <span className="wire-line"></span>
                      <span className="wire-line"></span>
                      <span className="wire-line"></span>
                    </div>
                  </div>
                  <div className="wire-hero-block">
                    <div className="wire-title"></div>
                    <div className="wire-sub"></div>
                    <div className="wire-btn-group">
                      <div className="wire-btn"></div>
                      <div className="wire-btn outline"></div>
                    </div>
                  </div>
                  <div className="wire-grid">
                    <div className="wire-card"></div>
                    <div className="wire-card"></div>
                    <div className="wire-card"></div>
                  </div>
                  <div className="mode-label">UX Blueprint & Spatial Flow Layout</div>
                </div>
              )}

              {designMode === "system" && (
                <div className="ux-system-view">
                  <div className="sys-group">
                    <span className="sys-title">Color Palette Tokens</span>
                    <div className="sys-swatches">
                      <div className="swatch v1" title="Primary Violet #7128ef">#7128EF</div>
                      <div className="swatch c1" title="Cyan Accent #62bdec">#62BDEC</div>
                      <div className="swatch d1" title="Dark Navy #0B0A32">#0B0A32</div>
                    </div>
                  </div>
                  <div className="sys-group">
                    <span className="sys-title">Typography & Micro-Interactions</span>
                    <div className="sys-buttons">
                      <button className="sys-btn p1">Primary Active</button>
                      <button className="sys-btn s1">Hover State</button>
                    </div>
                  </div>
                  <div className="mode-label">Design Tokens & Component Rules</div>
                </div>
              )}

              {designMode === "prototype" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Sparkles size={12} /> Live Interactive UX</div>
                    <h4>Enterprise SaaS Interface</h4>
                    <p>Sub-second response micro-interactions with 99.8% usability score.</p>
                    <div className="proto-stats">
                      <div><span>UX Rating</span><strong>99.8/100</strong></div>
                      <div><span>CTR Boost</span><strong>+185%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Figma High-Fidelity Prototype</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE DESIGN PROCESS TABS */}
      <section className="creative-section">
        <div className="container">
          <div className="creative-head text-center">
            <span className="badge-tag">OUR UX METHODOLOGY</span>
            <h2>Human-Centric 4-Step Design Framework</h2>
            <p>From user psychology and wireframes to pixel-perfect design systems.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "research" ? "active" : ""}`}
              onClick={() => setActiveTab("research")}
            >
              1. User Research
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "wireframe" ? "active" : ""}`}
              onClick={() => setActiveTab("wireframe")}
            >
              2. Wireframing
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "system" ? "active" : ""}`}
              onClick={() => setActiveTab("system")}
            >
              3. Design System
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "testing" ? "active" : ""}`}
              onClick={() => setActiveTab("testing")}
            >
              4. Usability Testing
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "research" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><PenTool className="tech-icon" /> <h4>User Personas</h4></div>
                  <p>Building detailed behavioral profiles to understand audience motivations and pain points.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Eye className="tech-icon" /> <h4>Heatmap Analysis</h4></div>
                  <p>Analyzing scroll depth and click tracks to eliminate visual friction points in conversion funnels.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layout className="tech-icon" /> <h4>Information Architecture</h4></div>
                  <p>Structuring sitemaps and navigation logic so users find key content effortlessly.</p>
                </div>
              </>
            )}

            {activeTab === "wireframe" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Grid className="tech-icon" /> <h4>Low-Fidelity Layouts</h4></div>
                  <p>Sketching structural layout blueprints to validate element hierarchy before visual styling.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><MousePointer className="tech-icon" /> <h4>User Journey Mapping</h4></div>
                  <p>Mapping every click and swipe pathway to ensure zero dead-ends and fast goal completion.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layers className="tech-icon" /> <h4>Interactive Prototypes</h4></div>
                  <p>Clickable Figma prototypes simulating full application logic for stakeholder review.</p>
                </div>
              </>
            )}

            {activeTab === "system" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Palette className="tech-icon" /> <h4>Color & Token Specs</h4></div>
                  <p>Defining accessible contrast color swatches, dark mode tokens, and WCAG AA compliance.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>Micro-Interactions</h4></div>
                  <p>Designing smooth hover effects, button states, loading skeletons, and subtle page transitions.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layout className="tech-icon" /> <h4>Figma Component Libraries</h4></div>
                  <p>Building reusable component libraries that accelerate frontend development by 3x.</p>
                </div>
              </>
            )}

            {activeTab === "testing" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Eye className="tech-icon" /> <h4>Usability Audits</h4></div>
                  <p>Real-user task completion testing to identify conversion bottlenecks and micro-adjust layouts.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><CheckCircle2 className="tech-icon" /> <h4>A/B Variant Testing</h4></div>
                  <p>Testing alternative CTA buttons, headlines, and card layouts to maximize conversion lift.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Smartphone className="tech-icon" /> <h4>Multi-Device QA</h4></div>
                  <p>Rigorous testing across 12+ screen resolutions from mobile phones to 4K desktop displays.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="subpage-features-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR DESIGN CAPABILITIES</span>
            <h2>End-to-End UI/UX Design Services</h2>
            <p>From initial wireframes and interactive prototypes to complete design systems.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Layout size={32} /></div>
              <h3>Wireframing & Prototyping</h3>
              <p>Architecting low & high-fidelity wireframes and interactive prototypes to validate user flows before coding.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Palette size={32} /></div>
              <h3>Design Systems & UI Kits</h3>
              <p>Building comprehensive, scalable design systems with reusable components to ensure visual consistency.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Smartphone size={32} /></div>
              <h3>Mobile App UI/UX</h3>
              <p>Designing touch-first mobile interfaces for iOS & Android optimized for thumb navigation and micro-interactions.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Eye size={32} /></div>
              <h3>User Research & Usability Testing</h3>
              <p>Conducting user interviews, heatmaps, and usability tests to eliminate friction points in your conversion funnels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Elevate Your Digital Product's UX?</h2>
            <p>Partner with AppebSoft's UI/UX specialists to turn complex product ideas into delightful user experiences.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET FREE DESIGN CONSULTATION <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/ui-ux-design" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default UiUxDesign;
