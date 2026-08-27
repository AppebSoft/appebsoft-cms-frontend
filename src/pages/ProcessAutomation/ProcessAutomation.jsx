import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RefreshCw,
  Zap,
  Workflow,
  CheckCircle2,
  ArrowRight,
  Cpu,
  FileText,
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

function ProcessAutomation() {
  const [autoPillar, setAutoPillar] = useState("ocr");
  const [activeTab, setActiveTab] = useState("rpa");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Process Automation & RPA Solutions"
        description="Automate repetitive workflows, enterprise integrations, and data processing with AppebSoft Robotic Process Automation."
        keywords="Process Automation, RPA, Workflow Automation, Data Processing, Enterprise Automation"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Process Automation" />

      {/* HERO WITH INTERACTIVE AUTOMATION SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <RefreshCw size={14} /> <span>ROBOTIC PROCESS AUTOMATION (RPA)</span>
            </div>
            <h1 className="hero-title">
              Eliminate Manual Tasks with <br />
              <span className="accent-gradient">Automated Intelligent Workflows</span>
            </h1>
            <p className="hero-desc">
              We design end-to-end process automation pipelines, document OCR processors, and webhooks that eliminate manual data entry, reduce human errors to 0%, and slash operational costs by over 40%.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                AUTOMATE YOUR WORKFLOWS <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Automation ROI
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>+340% Faster Task Processing Speed</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Zero Human Error & 40%+ OpEx Savings</span></div>
            </div>
          </div>

          {/* INTERACTIVE AUTOMATION SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${autoPillar === "ocr" ? "active" : ""}`}
                  onClick={() => setAutoPillar("ocr")}
                >
                  <FileText size={13} /> Document OCR
                </button>
                <button
                  className={`device-btn ${autoPillar === "erp" ? "active" : ""}`}
                  onClick={() => setAutoPillar("erp")}
                >
                  <Workflow size={13} /> ERP Pipeline
                </button>
                <button
                  className={`device-btn ${autoPillar === "bot" ? "active" : ""}`}
                  onClick={() => setAutoPillar("bot")}
                >
                  <Zap size={13} /> Custom Webhooks
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {autoPillar === "ocr" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><FileText size={12} /> AI Document Extraction</div>
                    <h4>Automated Invoice OCR Reader</h4>
                    <p>Processed 1,200 PDF invoices with line-item data extraction into QuickBooks.</p>
                    <div className="proto-stats">
                      <div><span>Processing Time</span><strong>1.2 Seconds/PDF</strong></div>
                      <div><span>Accuracy</span><strong>99.9%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">AI Document OCR Extraction</div>
                </div>
              )}

              {autoPillar === "erp" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><Workflow size={12} /> Inter-Department Pipeline</div>
                    <h4>Multi-Warehouse Inventory Sync</h4>
                    <p>Auto-updated stock count across Shopify, Amazon, and Tally ERP every 5 minutes.</p>
                    <div className="proto-stats">
                      <div><span>Manual Time Saved</span><strong>35 Hrs/Wk</strong></div>
                      <div><span>Error Rate</span><strong>0.00%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Multi-Warehouse ERP Automation</div>
                </div>
              )}

              {autoPillar === "bot" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Zap size={12} /> Custom Webhook Network</div>
                    <h4>Automated CRM Lead Router</h4>
                    <p>Instantly routed high-priority leads from web form to Slack & assigned sales rep.</p>
                    <div className="proto-stats">
                      <div><span>Lead Response</span><strong>Immediate</strong></div>
                      <div><span>Trigger</span><strong>Webhooks</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Event-Driven Webhook Automation</div>
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
            <span className="badge-tag">AUTOMATION FRAMEWORK</span>
            <h2>Robotic & Intelligent Workflow Engineering</h2>
            <p>Bridging legacy software systems with zero-code and custom API automation.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "rpa" ? "active" : ""}`}
              onClick={() => setActiveTab("rpa")}
            >
              Robotic Process Automation
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "document" ? "active" : ""}`}
              onClick={() => setActiveTab("document")}
            >
              AI Document Processing
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "integrations" ? "active" : ""}`}
              onClick={() => setActiveTab("integrations")}
            >
              Webhook Workflows
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "rpa" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><RefreshCw className="tech-icon" /> <h4>UiPath & Python RPA Bots</h4></div>
                  <p>Automating repetitive desktop clicks and legacy database form entries seamlessly.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Workflow className="tech-icon" /> <h4>Inter-App Workflow Engine</h4></div>
                  <p>Connecting ERP, CRM, and accounting software into one synchronized operational flow.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Exception Handling Guardrails</h4></div>
                  <p>Built-in fail-safe loops that alert human supervisors if an unexpected edge case arises.</p>
                </div>
              </>
            )}

            {activeTab === "document" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><FileText className="tech-icon" /> <h4>Smart Vision OCR Parsing</h4></div>
                  <p>Extracting unstructured tabular data from invoices, contracts, receipts, and identity documents.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>LLM Document Summarization</h4></div>
                  <p>Using AI models to extract key legal clauses and financial terms in seconds.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><CheckCircle2 className="tech-icon" /> <h4>Automated PDF Generation</h4></div>
                  <p>Auto-populating contracts and shipping manifests with customer database info.</p>
                </div>
              </>
            )}

            {activeTab === "integrations" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Zapier & Make Custom Apps</h4></div>
                  <p>Building high-performance private connectors for Zapier, Make, and n8n workflow platforms.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Layers className="tech-icon" /> <h4>Real-Time Event Webhooks</h4></div>
                  <p>Event-driven micro-triggers ensuring data updates instantly across all connected applications.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Audit Logging & Monitoring</h4></div>
                  <p>Centralized logging dashboards tracking every automated execution and time savings.</p>
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
            <span className="section-subtitle">AUTOMATION SERVICES</span>
            <h2>Automate Your Core Operations</h2>
            <p>Free your team from repetitive manual tasks so they can focus on high-value growth.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><RefreshCw size={32} /></div>
              <h3>Robotic Process Automation (RPA)</h3>
              <p>Automating repetitive data entry, system logins, report generation, and database updates with software bots.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><FileText size={32} /></div>
              <h3>AI Document & Invoice OCR Parsing</h3>
              <p>Extracting structured tabular data from invoices, contracts, and PDFs directly into your accounting software.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Workflow size={32} /></div>
              <h3>Enterprise ERP & CRM Sync</h3>
              <p>Real-time two-way synchronization between legacy ERP systems, Salesforce, Tally, Zoho, and e-commerce stores.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Zap size={32} /></div>
              <h3>Custom Zapier & Make Webhook Pipelines</h3>
              <p>Designing high-throughput webhook pipelines that connect disparate cloud applications with zero manual intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Eliminate Manual Data Entry Forever?</h2>
            <p>Schedule a process automation assessment with AppebSoft's workflow specialists.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              BOOK AUTOMATION AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/process-automation" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default ProcessAutomation;
