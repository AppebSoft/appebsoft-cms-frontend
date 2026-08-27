import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Plug,
  Code2,
  Server,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function EasyIntegration() {
  const [integType, setIntegType] = useState("rest");
  const [activeTab, setActiveTab] = useState("api");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Easy Integration & API Architecture"
        description="Seamless API gateway, REST, GraphQL, and microservices integration solutions for modern web & cloud platforms."
        keywords="API Integration, Microservices, REST API, GraphQL, System Integration"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Easy Integration" />

      {/* HERO WITH INTERACTIVE INTEGRATION SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Layers size={14} /> <span>SEAMLESS API & SOFTWARE INTEGRATION</span>
            </div>
            <h1 className="hero-title">
              Connect Disparate Software with <br />
              <span className="accent-gradient">Robust, High-Speed APIs & Webhooks</span>
            </h1>
            <p className="hero-desc">
              We design custom RESTful APIs, GraphQL endpoints, and middleware connectors that link legacy databases with modern cloud apps, SaaS tools, and payment gateways seamlessly.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                START YOUR INTEGRATION PROJECT <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View API Architecture
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>99.99% API Gateway Uptime & Low Latency</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Zero Data Packet Loss & End-to-End Encryption</span></div>
            </div>
          </div>

          {/* INTERACTIVE INTEGRATION SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${integType === "rest" ? "active" : ""}`}
                  onClick={() => setIntegType("rest")}
                >
                  <Plug size={13} /> REST Connector
                </button>
                <button
                  className={`device-btn ${integType === "graphql" ? "active" : ""}`}
                  onClick={() => setIntegType("graphql")}
                >
                  <Code2 size={13} /> GraphQL Mesh
                </button>
                <button
                  className={`device-btn ${integType === "legacy" ? "active" : ""}`}
                  onClick={() => setIntegType("legacy")}
                >
                  <Server size={13} /> Legacy Bridge
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {integType === "rest" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Plug size={12} /> RESTful API Gateway</div>
                    <h4>Stripe & SAP ERP Connector</h4>
                    <p>Sub-second bidirectional data synchronization protecting against rate limits.</p>
                    <div className="proto-stats">
                      <div><span>Throughput</span><strong>10,000 req/min</strong></div>
                      <div><span>Status</span><strong>200 OK (12ms)</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">High-Speed RESTful API Gateway</div>
                </div>
              )}

              {integType === "graphql" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><Code2 size={12} /> Unified GraphQL Mesh</div>
                    <h4>Federated GraphQL Schema</h4>
                    <p>Consolidated 6 microservice databases into a single queryable endpoint.</p>
                    <div className="proto-stats">
                      <div><span>Query Latency</span><strong>6ms Edge</strong></div>
                      <div><span>Data Overfetch</span><strong>0% Rate</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Unified GraphQL Data Mesh</div>
                </div>
              )}

              {integType === "legacy" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Server size={12} /> Legacy Mainframe Adapter</div>
                    <h4>SOAP to REST Middleware</h4>
                    <p>Modernized legacy XML SOAP protocols into modern JSON endpoints.</p>
                    <div className="proto-stats">
                      <div><span>Legacy Uptime</span><strong>99.99%</strong></div>
                      <div><span>Downtime Risk</span><strong>Zero</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Legacy Mainframe Middleware Bridge</div>
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
            <span className="badge-tag">INTEGRATION STACK</span>
            <h2>API Protocols & Middleware Architecture</h2>
            <p>High-reliability integration layers built for modern enterprise ecosystems.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "api" ? "active" : ""}`}
              onClick={() => setActiveTab("api")}
            >
              API Design & Standards
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "gateways" ? "active" : ""}`}
              onClick={() => setActiveTab("gateways")}
            >
              API Gateways
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "security" ? "active" : ""}`}
              onClick={() => setActiveTab("security")}
            >
              Authentication & Security
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "api" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Plug className="tech-icon" /> <h4>RESTful & OpenAPI Specs</h4></div>
                  <p>Building clean, self-documenting Swagger / OpenAPI 3.0 RESTful endpoints.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Code2 className="tech-icon" /> <h4>GraphQL & Apollo Server</h4></div>
                  <p>Flexible GraphQL schemas that allow frontend apps to request exact data payloads.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>gRPC High-Speed Streaming</h4></div>
                  <p>Protocol Buffer gRPC microservice connections built for high-throughput internal node communication.</p>
                </div>
              </>
            )}

            {activeTab === "gateways" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Server className="tech-icon" /> <h4>Kong & AWS API Gateway</h4></div>
                  <p>Deploying centralized API gateways with rate limiting, IP whitelisting, and circuit breakers.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layers className="tech-icon" /> <h4>Webhook Middleware Queues</h4></div>
                  <p>RabbitMQ and Redis message queues guaranteeing 100% webhook message delivery.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Database className="tech-icon" /> <h4>Real-Time Database Sync</h4></div>
                  <p>Two-way sync connectors maintaining exact data consistency across CRM, ERP, and payment platforms.</p>
                </div>
              </>
            )}

            {activeTab === "security" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><ShieldCheck className="tech-icon" /> <h4>OAuth2 & JWT Bearer Tokens</h4></div>
                  <p>Secure token authentication with automated token refresh rotation protocols.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>mTLS Encryption & HMAC</h4></div>
                  <p>Mutual TLS encryption and cryptographic HMAC signatures verifying webhook request integrity.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Server className="tech-icon" /> <h4>Rate Limiting & DDOS Shield</h4></div>
                  <p>Protecting backend database servers from traffic spikes and malicious scraping bots.</p>
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
            <span className="section-subtitle">INTEGRATION CAPABILITIES</span>
            <h2>Unify Your Digital Ecosystem</h2>
            <p>Connect software tools, databases, and third-party APIs into one cohesive workflow.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Plug size={32} /></div>
              <h3>Custom RESTful & GraphQL API Development</h3>
              <p>Designing secure, high-performance API endpoints that connect frontend apps with backend databases.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Server size={32} /></div>
              <h3>Legacy System Modernization Bridges</h3>
              <p>Building modern middleware adapters that allow legacy software to communicate with modern cloud SaaS tools.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Layers size={32} /></div>
              <h3>Third-Party API & Gateway Integration</h3>
              <p>Integrating Stripe, PayPal, Salesforce, HubSpot, SAP, Tally, and Google Cloud APIs into your platform.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><ShieldCheck size={32} /></div>
              <h3>High-Reliability Webhook Networks</h3>
              <p>Designing event-driven webhook message queues with automated retries and zero data loss guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Need to Connect Your Software Systems Seamlessly?</h2>
            <p>Partner with AppebSoft's API integration specialists to build high-speed, reliable data connectors.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              DISCUSS INTEGRATION NEEDS <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/easy-integration" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default EasyIntegration;
