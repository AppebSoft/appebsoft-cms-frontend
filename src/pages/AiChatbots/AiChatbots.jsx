import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Bot,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Activity,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function AiChatbots() {
  const [botMode, setBotMode] = useState("support");
  const [activeTab, setActiveTab] = useState("nlp");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="AI Chatbots & Conversational Agents"
        description="Enterprise AI chatbot development, custom virtual assistants, and multi-channel LLM conversational integration by AppebSoft."
        keywords="AI Chatbots, RAG Assistant, Customer Support Bot, ChatGPT Integration, Conversational AI"
      />

      <Navbar />
      <BreadcrumbNav currentPage="AI Chatbots" />

      {/* HERO WITH INTERACTIVE CHATBOT SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <MessageSquare size={14} /> <span>24/7 AI CHATBOTS & VIRTUAL ASSISTANTS</span>
            </div>
            <h1 className="hero-title">
              Intelligent AI Chatbots Trained on <br />
              <span className="accent-gradient">Your Enterprise Knowledge</span>
            </h1>
            <p className="hero-desc">
              We engineer custom AI chatbots powered by OpenAI, Claude, and Llama 3 that resolve customer support queries, qualify leads, and automate internal business workflows 24/7.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                BUILD YOUR AI CHATBOT <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Live Demos
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Sub-15ms Natural Language Response Speed</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>98.5% Automated First-Contact Resolution</span></div>
            </div>
          </div>

          {/* INTERACTIVE CHATBOT SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${botMode === "support" ? "active" : ""}`}
                  onClick={() => setBotMode("support")}
                >
                  <Bot size={13} /> Support Bot
                </button>
                <button
                  className={`device-btn ${botMode === "lead" ? "active" : ""}`}
                  onClick={() => setBotMode("lead")}
                >
                  <Sparkles size={13} /> Lead Gen
                </button>
                <button
                  className={`device-btn ${botMode === "internal" ? "active" : ""}`}
                  onClick={() => setBotMode("internal")}
                >
                  <ShieldCheck size={13} /> Internal Assistant
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {botMode === "support" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Bot size={12} /> Live AI Support Bot</div>
                    <h4>"How do I upgrade my enterprise license?"</h4>
                    <p>"You can upgrade instantly from your Billing Settings. I've prepared a direct link for you!"</p>
                    <div className="proto-stats">
                      <div><span>Resolution Rate</span><strong>98.5%</strong></div>
                      <div><span>Response Time</span><strong>14ms</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">24/7 Automated Support Bot</div>
                </div>
              )}

              {botMode === "lead" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><Sparkles size={12} /> Lead Qualification Bot</div>
                    <h4>"Looking for custom software development"</h4>
                    <p>"Awesome! Let me connect you with a senior software architect for a free 1-on-1 audit."</p>
                    <div className="proto-stats">
                      <div><span>Conv. Lift</span><strong>+34% Leads</strong></div>
                      <div><span>CRM Sync</span><strong>Instant</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Smart Lead Qualifier</div>
                </div>
              )}

              {botMode === "internal" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#10a37f" }}><ShieldCheck size={12} /> Internal RAG Assistant</div>
                    <h4>"What is our Q3 cloud deployment protocol?"</h4>
                    <p>"According to Security Spec v4.2, all cluster deployments require double SOC2 verification."</p>
                    <div className="proto-stats">
                      <div><span>Knowledge Sync</span><strong>10,000+ Docs</strong></div>
                      <div><span>Accuracy</span><strong>99.4%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Private Enterprise RAG Assistant</div>
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
            <span className="badge-tag">CHATBOT ARCHITECTURE</span>
            <h2>Custom AI Chatbot Technology</h2>
            <p>From retrieval-augmented generation (RAG) to omnichannel messaging platforms.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "nlp" ? "active" : ""}`}
              onClick={() => setActiveTab("nlp")}
            >
              NLP & RAG Engines
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "channels" ? "active" : ""}`}
              onClick={() => setActiveTab("channels")}
            >
              Omnichannel Integration
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Enterprise Security
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "nlp" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Bot className="tech-icon" /> <h4>Retrieval-Augmented Generation (RAG)</h4></div>
                  <p>Connecting vector databases (Pinecone/Chroma) to deliver zero-hallucination factual answers.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Fine-Tuned LLMs</h4></div>
                  <p>Custom Llama 3, Claude 3.5, and GPT-4o fine-tuning tailored to your brand's unique tone and glossary.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Intent Classification</h4></div>
                  <p>Smart routing algorithms that automatically classify customer urgency and escalate to human agents.</p>
                </div>
              </>
            )}

            {activeTab === "channels" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><MessageSquare className="tech-icon" /> <h4>WhatsApp & Web Widgets</h4></div>
                  <p>Deploying responsive web chat widgets and official WhatsApp Business API chatbots.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Users className="tech-icon" /> <h4>Slack & MS Teams Bots</h4></div>
                  <p>Internal employee chatbots providing immediate HR, IT support, and document retrieval.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>CRM & Voice Integration</h4></div>
                  <p>Real-time sync with Salesforce, HubSpot, Zendesk, and AI voice agents.</p>
                </div>
              </>
            )}

            {activeTab === "security" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><ShieldCheck className="tech-icon" /> <h4>SOC2 & HIPAA Compliance</h4></div>
                  <p>Bank-grade data encryption preserving strict privacy for medical and financial chatbots.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Bot className="tech-icon" /> <h4>Prompt Injection Defense</h4></div>
                  <p>Hardened security guardrails protecting against adversarial prompt exploits and data leaks.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Self-Hosted Private AI</h4></div>
                  <p>On-premise LLM server deployments keeping all sensitive company data behind your firewall.</p>
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
            <span className="section-subtitle">OUR CHATBOT CAPABILITIES</span>
            <h2>Next-Gen Virtual Assistants</h2>
            <p>Empower your business with 24/7 automated AI conversations.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Bot size={32} /></div>
              <h3>24/7 Automated Support Bots</h3>
              <p>Resolve up to 90% of routine customer service tickets instantly without expanding headcount.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Sparkles size={32} /></div>
              <h3>Lead Qualification & Sales Assistants</h3>
              <p>Engage website visitors, collect user contact details, and automatically book calls directly into calendars.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><ShieldCheck size={32} /></div>
              <h3>Internal Knowledge Base RAG Bots</h3>
              <p>Empower employees to search thousands of PDFs, policies, and contracts using plain conversational language.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><MessageSquare size={32} /></div>
              <h3>Omnichannel WhatsApp & Social Bots</h3>
              <p>Deploy AI conversational agents across WhatsApp, Instagram DMs, Facebook Messenger, and website widgets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Automate Your Customer Support with AI?</h2>
            <p>Schedule a live demo to see how AppebSoft's AI chatbots can transform your operational efficiency.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET FREE CHATBOT DEMO <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/ai-chatbots" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default AiChatbots;
