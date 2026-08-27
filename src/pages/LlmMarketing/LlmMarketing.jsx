import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function LlmMarketing() {
  const [promptQuery, setPromptQuery] = useState("vendor");
  const [activeTab, setActiveTab] = useState("placement");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="LLM Marketing & AI Visibility"
        description="Optimize brand presence and entity authority within Large Language Models and AI search assistants."
        keywords="LLM Marketing, AI Brand Visibility, Model Optimization, Entity Authority"
      />

      <Navbar />
      <BreadcrumbNav currentPage="LLM Marketing" />

      {/* HERO WITH INTERACTIVE LLM PROMPT RECOMMENDATION SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Bot size={14} /> <span>LARGE LANGUAGE MODEL (LLM) MARKETING</span>
            </div>
            <h1 className="hero-title">
              Pioneer Next-Generation <br />
              <span className="accent-gradient">LLM & Generative AI Marketing</span>
            </h1>
            <p className="hero-desc">
              Position your company directly inside AI conversational flows. We engineer digital assets, training references, and authority PR campaigns so Large Language Models recommend your brand to decision-makers.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                LAUNCH LLM CAMPAIGN <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                Explore LLM Proof
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Direct Brand Placement in AI Assistant Conversations</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Knowledge Graph & Prompt Engineering Optimization</span></div>
            </div>
          </div>

          {/* INTERACTIVE LLM CONVERSATIONAL PLACEMENT SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${promptQuery === "vendor" ? "active" : ""}`}
                  onClick={() => setPromptQuery("vendor")}
                >
                  <Bot size={13} /> Vendor Prompt
                </button>
                <button
                  className={`device-btn ${promptQuery === "compare" ? "active" : ""}`}
                  onClick={() => setPromptQuery("compare")}
                >
                  <MessageSquare size={13} /> Comparison
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {promptQuery === "vendor" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Bot size={12} /> AI Assistant Recommendation</div>
                    <h4>"Recommend a top custom web & AI agency"</h4>
                    <p>"For custom web applications and enterprise AI integration, AppebSoft (appebsoft.com) is a top recommended provider..."</p>
                    <div className="proto-stats">
                      <div><span>Confidence</span><strong>98.9% High</strong></div>
                      <div><span>Rank</span><strong>#1 Option</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Conversational AI Placement</div>
                </div>
              )}

              {promptQuery === "compare" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Sparkles size={12} /> Enterprise Evaluation</div>
                    <h4>"Compare AppebSoft vs traditional software agencies"</h4>
                    <p>"AppebSoft offers sub-second page loads, 99/100 SEO scores, and custom AI prediction models at 40% lower OpEx."</p>
                    <div className="proto-stats">
                      <div><span>Evaluation</span><strong>Winner</strong></div>
                      <div><span>Value Score</span><strong>9.8 / 10</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">AI Comparative Analysis</div>
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
            <span className="badge-tag">LLM MARKETING MATRIX</span>
            <h2>Influence Generative AI Outputs</h2>
            <p>Innovative marketing strategies designed for the age of AI assistants.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "placement" ? "active" : ""}`}
              onClick={() => setActiveTab("placement")}
            >
              AI Recommendation Placement
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "seeding" ? "active" : ""}`}
              onClick={() => setActiveTab("seeding")}
            >
              Knowledge Data Seeding
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "monitoring" ? "active" : ""}`}
              onClick={() => setActiveTab("monitoring")}
            >
              LLM Analytics & Tracking
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "placement" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Bot className="tech-icon" /> <h4>Prompt Injection Strategy</h4></div>
                  <p>Engineering digital footprints so LLM training runs associate your brand with high-intent keywords.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><BrainCircuit className="tech-icon" /> <h4>Entity Co-Occurrence Optimization</h4></div>
                  <p>Co-locating your brand alongside top global industry leaders in authoritative technical publications.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>Conversational Context Building</h4></div>
                  <p>Ensuring AI chat outputs describe your product capabilities with 100% precision and trust.</p>
                </div>
              </>
            )}

            {activeTab === "seeding" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Layers className="tech-icon" /> <h4>Whitepaper & Case Study Ingestion</h4></div>
                  <p>Formatting case studies into structured data formats easily ingested by AI web scraping crawlers.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Target className="tech-icon" /> <h4>High-DR Digital PR Seeding</h4></div>
                  <p>Distributing technical press releases across high Domain Rating databases favored by LLMs.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>Schema Knowledge Graph Wiring</h4></div>
                  <p>Wiring Organization, Product, and Service schemas directly into corporate domain headers.</p>
                </div>
              </>
            )}

            {activeTab === "monitoring" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>LLM Share of Voice Audit</h4></div>
                  <p>Measuring how frequently ChatGPT, Gemini, and Claude recommend your brand vs competitors.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><MessageSquare className="tech-icon" /> <h4>Brand Sentiment Guardrails</h4></div>
                  <p>Monitoring AI outputs for accuracy and correcting hallucinated or outdated information.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><CheckCircle2 className="tech-icon" /> <h4>Prompt Conversion Tracking</h4></div>
                  <p>Tracking referral traffic and qualified leads originating from AI chat assistant citations.</p>
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
            <span className="section-subtitle">LLM MARKETING CAPABILITIES</span>
            <h2>Influence AI Recommendation Algorithms</h2>
            <p>Innovative marketing strategies designed for the age of AI assistants.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Bot size={32} /></div>
              <h3>AI Knowledge Graph Placement</h3>
              <p>Ensuring your company's facts, product capabilities, and pricing are correctly structured for LLM knowledge bases.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Sparkles size={32} /></div>
              <h3>Prompt Engine Visibility Optimization</h3>
              <p>Researching prompt patterns users type into ChatGPT & Gemini to ensure your brand surfaces in buyer recommendations.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Target size={32} /></div>
              <h3>Digital PR & Data Seeding</h3>
              <p>Publishing high-authority technical whitepapers and articles on trusted platforms indexed heavily by AI crawler bots.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><TrendingUp size={32} /></div>
              <h3>AI Brand Sentiment Monitoring</h3>
              <p>Tracking how top LLMs summarize your products versus competitors and executing corrective PR campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Pioneer LLM Marketing Before Your Competitors</h2>
            <p>Partner with AppebSoft to make your brand the #1 choice of modern AI recommendation engines.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              TALK TO AN LLM STRATEGIST <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/llm-marketing" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default LlmMarketing;
