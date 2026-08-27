import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MonitorCog,
  Code2,
  Cpu,
  Server,
  Lock,
  Zap,
  ArrowRight,
  Database,
  Terminal,
  CheckCircle2,
  Activity,
  Check,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function SoftwareDevelopment() {
  const [apiType, setApiType] = useState("rest");
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Custom Software Development"
        description="Scalable enterprise software development, SaaS platforms, and custom backend systems built by AppebSoft."
        keywords="Custom Software Development, Enterprise Software, SaaS Development, Cloud Backend"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Software Development" />

      {/* HERO SECTION WITH INTERACTIVE CODE TERMINAL & MICROSERVICE SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <MonitorCog size={14} /> <span>ENTERPRISE SOFTWARE ENGINEERING</span>
            </div>
            <h1 className="hero-title">
              Custom Software Solutions <br />
              <span className="accent-gradient">Tailored to Automate Your Business</span>
            </h1>
            <p className="hero-desc">
              We architect robust, enterprise-grade custom software, SaaS platforms, internal management systems, and backend microservices that streamline your operations and scale with your growth.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                DISCUSS YOUR SOFTWARE PROJECT <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Architecture
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Microservices & Event-Driven Architecture</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>99.99% Uptime & Automated CI/CD Pipelines</span></div>
            </div>
          </div>

          {/* INTERACTIVE CODE TERMINAL / API MONITOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${apiType === "rest" ? "active" : ""}`}
                  onClick={() => setApiType("rest")}
                >
                  <Terminal size={13} /> REST API
                </button>
                <button
                  className={`device-btn ${apiType === "graphql" ? "active" : ""}`}
                  onClick={() => setApiType("graphql")}
                >
                  <Code2 size={13} /> GraphQL
                </button>
                <button
                  className={`device-btn ${apiType === "micro" ? "active" : ""}`}
                  onClick={() => setApiType("micro")}
                >
                  <Server size={13} /> Microservices
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {apiType === "rest" && (
                <div className="ux-wireframe-view" style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#62bdec" }}>
                  <div style={{ color: "#a78bfa" }}>GET /api/v2/enterprise/metrics HTTP/1.1</div>
                  <div style={{ color: "#27c93f" }}>HTTP/1.1 200 OK (24ms)</div>
                  <pre style={{ color: "#fff", background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>{`{
  "status": "HEALTHY",
  "throughput": "14,500 req/sec",
  "latency": "18ms",
  "activeNodes": 12
}`}</pre>
                  <div className="mode-label">RESTful Endpoint Benchmarks</div>
                </div>
              )}

              {apiType === "graphql" && (
                <div className="ux-wireframe-view" style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#62bdec" }}>
                  <div style={{ color: "#a78bfa" }}>query GetClusterHealth &#123; nodes &#123; id status latency &#125; &#125;</div>
                  <div style={{ color: "#27c93f" }}>GraphQL Query Executed (12ms)</div>
                  <pre style={{ color: "#fff", background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "8px" }}>{`{
  "data": {
    "cluster": "aws-us-east-1",
    "uptime": "99.99%"
  }
}`}</pre>
                  <div className="mode-label">GraphQL Query Engine</div>
                </div>
              )}

              {apiType === "micro" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Activity size={12} /> Kubernetes Node Cluster</div>
                    <h4>Docker Container Mesh</h4>
                    <p>Auto-scaling microservice nodes operating with 0% dropped packets.</p>
                    <div className="proto-stats">
                      <div><span>Nodes</span><strong>16 Active</strong></div>
                      <div><span>Auto-Scale</span><strong>Enabled</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Event-Driven Microservices</div>
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
            <span className="badge-tag">ENGINEERING STACK</span>
            <h2>Custom Software Architecture & Stack</h2>
            <p>Modern backend and cloud technologies built for high concurrency.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "saas" ? "active" : ""}`}
              onClick={() => setActiveTab("saas")}
            >
              SaaS Development
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => setActiveTab("backend")}
            >
              Backend & APIs
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "database" ? "active" : ""}`}
              onClick={() => setActiveTab("database")}
            >
              Databases & Cloud
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "saas" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Code2 className="tech-icon" /> <h4>Multi-Tenant Auth</h4></div>
                  <p>Role-based access control (RBAC), OAuth2, and SSO authentication for enterprise teams.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Subscription Billing</h4></div>
                  <p>Stripe & Chargebee multi-tier subscription engines with automated invoicing and tax calculation.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Tenant Analytics</h4></div>
                  <p>Real-time telemetry and user usage analytics per organization account.</p>
                </div>
              </>
            )}

            {activeTab === "backend" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Server className="tech-icon" /> <h4>Node.js / Python FastAPI</h4></div>
                  <p>Asynchronous event loops capable of handling tens of thousands of concurrent requests.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>Microservices Architecture</h4></div>
                  <p>Decoupled services using gRPC and RabbitMQ for distributed data processing.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Lock className="tech-icon" /> <h4>Zero-Trust Security</h4></div>
                  <p>End-to-end data encryption in transit and at rest with automated vulnerability scanning.</p>
                </div>
              </>
            )}

            {activeTab === "database" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Database className="tech-icon" /> <h4>PostgreSQL & Redis</h4></div>
                  <p>High-availability Relational and In-Memory Caching databases for sub-10ms data lookup.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Server className="tech-icon" /> <h4>AWS & Kubernetes</h4></div>
                  <p>Containerized Docker deployments with Kubernetes auto-scaling across multi-region clusters.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Automated CI/CD</h4></div>
                  <p>GitHub Actions pipelines with automated test suites for continuous zero-downtime deployment.</p>
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
            <span className="section-subtitle">OUR SOFTWARE CAPABILITIES</span>
            <h2>Scalable Engineering Services</h2>
            <p>From legacy software modernization to cloud-native SaaS development.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Code2 size={32} /></div>
              <h3>Custom SaaS Platform Development</h3>
              <p>Building high-performance multi-tenant SaaS applications with automated billing, user roles, and scalable databases.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Server size={32} /></div>
              <h3>API & Microservices Engineering</h3>
              <p>Designing RESTful and GraphQL APIs with microservice architecture for high concurrency and integration agility.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Database size={32} /></div>
              <h3>Enterprise ERP & CRM Systems</h3>
              <p>Tailored enterprise resource planning and workflow automation software designed around your precise operations.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Lock size={32} /></div>
              <h3>Cloud Security & Legacy Modernization</h3>
              <p>Refactoring monolithic legacy software into cloud-native architectures with SOC2 compliance and zero-downtime migrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Need a Custom Software Solution Built Right?</h2>
            <p>AppebSoft's senior software engineers are ready to build software that accelerates your operational efficiency.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET IN TOUCH NOW <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/software-development" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default SoftwareDevelopment;
