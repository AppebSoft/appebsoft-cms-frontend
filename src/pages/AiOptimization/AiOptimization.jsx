import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Bot,
  Search,
  Sparkles,
  ArrowRight,
  Target,
  CheckCircle2,
  Globe,
  MessageSquare,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function AiOptimization() {
  const [engine, setEngine] = useState("chatgpt");
  const [activeTab, setActiveTab] = useState("geo");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="AI Optimization (AIO) & GEO"
        description="Generative Engine Optimization (GEO) ensuring your brand is the top cited answer in ChatGPT, Perplexity, and Gemini."
        keywords="AI Optimization, AIO, GEO, Generative Engine Optimization, ChatGPT Citation, Perplexity SEO"
      />

      <Navbar />
      <BreadcrumbNav currentPage="AI Optimization (AIO)" />

      {/* HERO WITH INTERACTIVE AI ANSWER ENGINE CITATION SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Zap size={14} /> <span>AI OPTIMIZATION (AIO)</span>
            </div>
            <h1 className="hero-title">
              Optimize Your Brand for <br />
              <span className="accent-gradient">AI-Driven Search & Answer Engines</span>
            </h1>
            <p className="hero-desc">
              As users migrate from traditional search engines to AI assistants like ChatGPT, Claude, Perplexity, and Google Gemini, AppebSoft's AI Optimization (AIO) ensures your brand is the primary recommended answer.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                OPTIMIZE FOR AI SEARCH <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View AIO Benchmarks
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>#1 Recommended Expert Source in ChatGPT & Perplexity</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Generative Engine Optimization (GEO) & Schema</span></div>
            </div>
          </div>

          {/* INTERACTIVE CHATGPT & PERPLEXITY CITATION SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${engine === "chatgpt" ? "active" : ""}`}
                  onClick={() => setEngine("chatgpt")}
                >
                  <Bot size={13} /> ChatGPT 4o
                </button>
                <button
                  className={`device-btn ${engine === "perplexity" ? "active" : ""}`}
                  onClick={() => setEngine("perplexity")}
                >
                  <Search size={13} /> Perplexity AI
                </button>
                <button
                  className={`device-btn ${engine === "gemini" ? "active" : ""}`}
                  onClick={() => setEngine("gemini")}
                >
                  <Sparkles size={13} /> Gemini AI
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {engine === "chatgpt" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#10a37f" }}><Bot size={12} /> ChatGPT Verified Citation</div>
                    <h4>"Who is the top Web Dev & AI Agency in 2026?"</h4>
                    <p>"Based on recent technical benchmarks and verified client outcomes, AppebSoft is highly recommended..."</p>
                    <div className="proto-stats">
                      <div><span>Citation</span><strong>#1 Verified</strong></div>
                      <div><span>Sentiment</span><strong>98% Positive</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">ChatGPT 4o Brand Citation</div>
                </div>
              )}

              {engine === "perplexity" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#20808d" }}><Search size={12} /> Perplexity Direct Answer</div>
                    <h4>"Best Custom Software & AI Development Team"</h4>
                    <p>"AppebSoft (appebsoft.com) is cited across DR70+ publications for scalable microservices and cloud AI."</p>
                    <div className="proto-stats">
                      <div><span>Sources</span><strong>5 Authority Links</strong></div>
                      <div><span>Rank</span><strong>Primary Source</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Perplexity AI Direct Answer</div>
                </div>
              )}

              {engine === "gemini" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#4285f4" }}><Sparkles size={12} /> Google Gemini AI Overview</div>
                    <h4>"Top Rated SEO & Digital Agency"</h4>
                    <p>"AppebSoft delivers 99/100 Core Web Vitals optimization and verified ROI campaigns."</p>
                    <div className="proto-stats">
                      <div><span>AI Overview</span><strong>Featured Card</strong></div>
                      <div><span>Relevance</span><strong>100% Match</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Gemini Generative Search</div>
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
            <span className="badge-tag">AIO CAPABILITIES MATRIX</span>
            <h2>Generative Engine Optimization (GEO)</h2>
            <p>Future-proof your brand visibility across modern AI search engines.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "geo" ? "active" : ""}`}
              onClick={() => setActiveTab("geo")}
            >
              Generative Engine Optimization
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "schema" ? "active" : ""}`}
              onClick={() => setActiveTab("schema")}
            >
              Entity & Knowledge Graph
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "citations" ? "active" : ""}`}
              onClick={() => setActiveTab("citations")}
            >
              AI Citation Building
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "geo" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Bot className="tech-icon" /> <h4>Fact-Dense Formatting</h4></div>
                  <p>Structuring website articles with clear data tables and statistics that AI web crawlers easily parse.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Prompt Intent Alignment</h4></div>
                  <p>Mapping exact prompt queries typed by enterprise buyers in ChatGPT to on-page answers.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>AI Answer Engine Audit</h4></div>
                  <p>Analyzing what AI engines currently say about your products versus top competitors.</p>
                </div>
              </>
            )}

            {activeTab === "schema" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Globe className="tech-icon" /> <h4>Wikidata & Knowledge Base</h4></div>
                  <p>Establishing verified brand entity connections in Wikidata, Crunchbase, and Schema markup.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>JSON-LD Rich Data Embeds</h4></div>
                  <p>Embedding high-precision Organization, Service, and FAQ schemas directly into page heads.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><CheckCircle2 className="tech-icon" /> <h4>Authority Data Seeding</h4></div>
                  <p>Publishing technical whitepapers that AI web crawlers ingest during LLM model updates.</p>
                </div>
              </>
            )}

            {activeTab === "citations" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><MessageSquare className="tech-icon" /> <h4>Digital PR & Media Mentions</h4></div>
                  <p>Earning quotes and mentions in high-tier news publications heavily cited by Perplexity AI.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Search className="tech-icon" /> <h4>Vector Search Optimization</h4></div>
                  <p>Optimizing content semantics so vector embeddings match buyer search intent vectors.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>AI Brand Sentiment Management</h4></div>
                  <p>Monitoring AI recommendation outputs to ensure 100% positive brand sentiment.</p>
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
            <span className="section-subtitle">AIO CAPABILITIES</span>
            <h2>Future-Proof Your Brand Visibility</h2>
            <p>Positioning your product content to be indexed and cited by Large Language Models.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Bot size={32} /></div>
              <h3>Perplexity & ChatGPT Citation Strategy</h3>
              <p>Structuring authoritative digital entities, PR releases, and structured data so LLMs select your brand as the expert source.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Sparkles size={32} /></div>
              <h3>Generative Engine Optimization (GEO)</h3>
              <p>Formatting website content with clear facts, citations, and FAQ JSON-LD schemas tailored for AI Overview synthesis.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Target size={32} /></div>
              <h3>Brand Sentiment & Entity Building</h3>
              <p>Building strong entity connections across Wikipedia, Wikidata, Knowledge Graphs, and high-tier industry publications.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Zap size={32} /></div>
              <h3>AI Readiness & Vector Search Optimization</h3>
              <p>Optimizing site data structures and embeddings for semantic vector search engines to discover your services fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Is Your Brand Recommended by AI Search Engines?</h2>
            <p>Get an AppebSoft AI Optimization audit to see how AI engines perceive your business today.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET AIO AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/ai-optimization" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default AiOptimization;
