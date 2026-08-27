import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Cloud,
  Cpu,
  RefreshCw,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function DigitalTransformation() {
  const [cloudPillar, setCloudPillar] = useState("cloud");
  const [activeTab, setActiveTab] = useState("cloud");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Digital Transformation Consulting"
        description="Modernize legacy systems, migrate to cloud infrastructure, and adopt AI-driven processes with AppebSoft."
        keywords="Digital Transformation, Cloud Migration, Enterprise Modernization, Tech Consulting"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Digital Transformation" />

      {/* HERO WITH INTERACTIVE DIGITAL MATURITY SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <Sparkles size={14} /> <span>ENTERPRISE DIGITAL TRANSFORMATION</span>
            </div>
            <h1 className="hero-title">
              Empowering Businesses with <br />
              <span className="accent-gradient">Cloud, Automation & AI Innovation</span>
            </h1>
            <p className="hero-desc">
              We help forward-thinking enterprises modernize legacy IT systems, automate manual operations, migrate to high-efficiency cloud infrastructure, and adopt AI technologies to remain industry leaders.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                START YOUR TRANSFORMATION <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                Explore Enterprise Roadmaps
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>AWS, Azure & Google Cloud Migration</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Automated Workflows & 40%+ Cost Reduction</span></div>
            </div>
          </div>

          {/* INTERACTIVE CLOUD MATURITY SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${cloudPillar === "cloud" ? "active" : ""}`}
                  onClick={() => setCloudPillar("cloud")}
                >
                  <Cloud size={13} /> Cloud Infra
                </button>
                <button
                  className={`device-btn ${cloudPillar === "auto" ? "active" : ""}`}
                  onClick={() => setCloudPillar("auto")}
                >
                  <RefreshCw size={13} /> Automation
                </button>
                <button
                  className={`device-btn ${cloudPillar === "ai" ? "active" : ""}`}
                  onClick={() => setCloudPillar("ai")}
                >
                  <Cpu size={13} /> AI Adoption
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {cloudPillar === "cloud" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Cloud size={12} /> AWS Cloud Migration</div>
                    <h4>Enterprise Cloud Modernization</h4>
                    <p>Migrated 40+ legacy server workloads into containerized AWS ECS clusters.</p>
                    <div className="proto-stats">
                      <div><span>OpEx Saved</span><strong>-42% Cost</strong></div>
                      <div><span>Uptime</span><strong>99.99%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Zero-Downtime Cloud Migration</div>
                </div>
              )}

              {cloudPillar === "auto" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><RefreshCw size={12} /> Workflow Automation</div>
                    <h4>Inter-Department RPA Pipeline</h4>
                    <p>Automated invoice processing and inventory sync across 8 departments.</p>
                    <div className="proto-stats">
                      <div><span>Speed Boost</span><strong>+340% Fast</strong></div>
                      <div><span>Human Error</span><strong>0% Rate</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Robotic Process Automation</div>
                </div>
              )}

              {cloudPillar === "ai" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Cpu size={12} /> Enterprise AI Models</div>
                    <h4>AI Analytics Integration</h4>
                    <p>Embedded predictive AI forecasting model into internal management portal.</p>
                    <div className="proto-stats">
                      <div><span>Forecast Acc.</span><strong>96.4%</strong></div>
                      <div><span>Decision Time</span><strong>Instant</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Smart AI Integration</div>
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
            <span className="badge-tag">TRANSFORMATION STACK</span>
            <h2>Cloud & Automation Capabilities</h2>
            <p>Strategic technology solutions that streamline processes and increase profitability.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "cloud" ? "active" : ""}`}
              onClick={() => setActiveTab("cloud")}
            >
              Cloud Infrastructure
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "auto" ? "active" : ""}`}
              onClick={() => setActiveTab("auto")}
            >
              Process Automation
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "ai" ? "active" : ""}`}
              onClick={() => setActiveTab("ai")}
            >
              Enterprise AI & Data
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "cloud" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Cloud className="tech-icon" /> <h4>AWS / Azure / GCP Migration</h4></div>
                  <p>Migrating enterprise applications with automated terraform scripts and zero downtime.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>FinOps Cloud Optimization</h4></div>
                  <p>Optimizing server instance sizing and reserved capacity to slash monthly cloud bills by 40%+.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layers className="tech-icon" /> <h4>DevOps & Kubernetes</h4></div>
                  <p>Containerizing application workloads with automated zero-downtime CI/CD release cycles.</p>
                </div>
              </>
            )}

            {activeTab === "auto" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><RefreshCw className="tech-icon" /> <h4>Robotic Process Automation</h4></div>
                  <p>Eliminating manual data entry by connecting legacy software APIs with automated bot scripts.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Zapier & Make Custom Webhooks</h4></div>
                  <p>Building high-volume custom webhook connectors between CRM, ERP, and payment tools.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Document OCR Processing</h4></div>
                  <p>AI-powered document extraction that processes invoices, contracts, and PDFs in seconds.</p>
                </div>
              </>
            )}

            {activeTab === "ai" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>Private Enterprise LLMs</h4></div>
                  <p>Deploying secure, self-hosted LLM assistants trained exclusively on internal company knowledge.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>Predictive Analytics Dashboard</h4></div>
                  <p>Transforming raw database logs into real-time executive dashboards with AI trend predictions.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Customer Service AI Agents</h4></div>
                  <p>24/7 intelligent chatbots that resolve up to 75% of customer support inquiries instantly.</p>
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
            <span className="section-subtitle">TRANSFORMATION PILLARS</span>
            <h2>Modernize Your Digital Infrastructure</h2>
            <p>Strategic technology solutions that streamline processes and increase profitability.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Cloud size={32} /></div>
              <h3>Cloud Migration & Architecture</h3>
              <p>Seamlessly migrate enterprise workloads to AWS, Azure, or GCP with zero downtime and optimized cloud infrastructure costs.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><RefreshCw size={32} /></div>
              <h3>Business Process Automation</h3>
              <p>Automating repetitive manual tasks and inter-departmental workflows to reduce errors and boost operational speed.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Cpu size={32} /></div>
              <h3>AI & Smart Systems Integration</h3>
              <p>Integrating machine learning algorithms, chatbots, and predictive analytics into existing business software.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><TrendingUp size={32} /></div>
              <h3>Digital Strategy & Tech Roadmap</h3>
              <p>Comprehensive technology auditing and 3-year digital innovation roadmaps tailored to your company's growth targets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Transform Your Business Processes?</h2>
            <p>Schedule a strategic consultation with AppebSoft's digital transformation advisors.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              BOOK STRATEGY SESSION <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/digital-transformation" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default DigitalTransformation;
