import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  BarChart3,
  TrendingUp,
  Activity,
  ArrowRight,
  Database,
  CheckCircle2,
  PieChart,
  Zap,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function SmartAnalytics() {
  const [metricMode, setMetricMode] = useState("telemetry");
  const [activeTab, setActiveTab] = useState("dashboards");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Smart Analytics & Business Intelligence"
        description="Real-time telemetry, custom BI dashboards, and AI-driven predictive data analytics solutions."
        keywords="Smart Analytics, Business Intelligence, Predictive Analytics, Custom Dashboards, Data Insights"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Smart Analytics" />

      {/* HERO WITH INTERACTIVE SMART ANALYTICS SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <LineChart size={14} /> <span>SMART BUSINESS ANALYTICS & TELEMETRY</span>
            </div>
            <h1 className="hero-title">
              Turn Raw Enterprise Data into <br />
              <span className="accent-gradient">Predictive AI Insights & Dashboards</span>
            </h1>
            <p className="hero-desc">
              We build real-time telemetry dashboards, AI predictive forecasting engines, automated executive reports, and big data pipelines that help enterprise leaders make faster, smarter business decisions.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                BUILD YOUR ANALYTICS DASHBOARD <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View Analytics Demos
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Real-Time Sub-Second Data Streaming</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>96.8% Predictive Trend Forecasting Accuracy</span></div>
            </div>
          </div>

          {/* INTERACTIVE SMART ANALYTICS SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${metricMode === "telemetry" ? "active" : ""}`}
                  onClick={() => setMetricMode("telemetry")}
                >
                  <Activity size={13} /> Live Telemetry
                </button>
                <button
                  className={`device-btn ${metricMode === "forecast" ? "active" : ""}`}
                  onClick={() => setMetricMode("forecast")}
                >
                  <TrendingUp size={13} /> AI Forecast
                </button>
                <button
                  className={`device-btn ${metricMode === "reports" ? "active" : ""}`}
                  onClick={() => setMetricMode("reports")}
                >
                  <BarChart3 size={13} /> Automated Reports
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {metricMode === "telemetry" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Activity size={12} /> Real-Time Telemetry Stream</div>
                    <h4>Enterprise Revenue Monitor</h4>
                    <p>Live event streaming tracking transactions across 14 global markets.</p>
                    <div className="proto-stats">
                      <div><span>Events/Sec</span><strong>24,500 Stream</strong></div>
                      <div><span>Latency</span><strong>8ms</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Real-Time Data Streaming</div>
                </div>
              )}

              {metricMode === "forecast" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><TrendingUp size={12} /> Machine Learning Forecast</div>
                    <h4>Q4 Revenue & Demand Predictor</h4>
                    <p>Predicted +28% surge in seasonal demand with 96.8% historical confidence.</p>
                    <div className="proto-stats">
                      <div><span>Forecast Acc.</span><strong>96.8%</strong></div>
                      <div><span>Growth</span><strong>+28% Projected</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Predictive Machine Learning</div>
                </div>
              )}

              {metricMode === "reports" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><BarChart3 size={12} /> Executive Looker Dashboard</div>
                    <h4>Automated Weekly Executive Summary</h4>
                    <p>Auto-generated PDF & Slack alerts distributed every Monday at 8 AM.</p>
                    <div className="proto-stats">
                      <div><span>Hours Saved</span><strong>12 Hours/Wk</strong></div>
                      <div><span>Format</span><strong>Looker / PowerBI</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Automated Reporting Engine</div>
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
            <span className="badge-tag">ANALYTICS STACK</span>
            <h2>Enterprise Analytics & Data Engineering</h2>
            <p>From data warehousing to custom executive visual dashboards.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "dashboards" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboards")}
            >
              Interactive Dashboards
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "warehouse" ? "active" : ""}`}
              onClick={() => setActiveTab("warehouse")}
            >
              Data Warehousing
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "forecasting" ? "active" : ""}`}
              onClick={() => setActiveTab("forecasting")}
            >
              AI Predictive Models
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "dashboards" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><BarChart3 className="tech-icon" /> <h4>PowerBI & Looker Studio</h4></div>
                  <p>Custom executive dashboards visualizing real-time sales, user retention, and profit margins.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><PieChart className="tech-icon" /> <h4>Custom React Charts</h4></div>
                  <p>Lightweight, interactive D3.js and Recharts components integrated into your internal portals.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Real-Time Alert Triggers</h4></div>
                  <p>Automated Slack and Email notifications triggered when KPIs cross critical thresholds.</p>
                </div>
              </>
            )}

            {activeTab === "warehouse" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Database className="tech-icon" /> <h4>Snowflake & Google BigQuery</h4></div>
                  <p>Architecting cloud data warehouses capable of processing billions of rows in seconds.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>dbt & Automated ETL</h4></div>
                  <p>Building maintainable dbt data transformation models with full data lineage documentation.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><LineChart className="tech-icon" /> <h4>Kafka Data Streaming</h4></div>
                  <p>Apache Kafka pipelines streaming live operational metrics without database load spikes.</p>
                </div>
              </>
            )}

            {activeTab === "forecasting" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Time-Series Sales Forecasting</h4></div>
                  <p>Machine learning ARIMA and Prophet models predicting monthly revenue and inventory needs.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Customer Churn Modeling</h4></div>
                  <p>Identifying early warning behavioral signs of customer cancellation to maximize retention.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Activity className="tech-icon" /> <h4>Cohort & Funnel Analysis</h4></div>
                  <p>Granular user drop-off analysis identifying exact conversion bottlenecks in your product.</p>
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
            <span className="section-subtitle">ANALYTICS CAPABILITIES</span>
            <h2>Empower Decisions with Data</h2>
            <p>Transform raw database logs into clear, actionable executive insights.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><BarChart3 size={32} /></div>
              <h3>Executive KPI Dashboards</h3>
              <p>Consolidating all business metrics from Stripe, Google Analytics, CRM, and databases into one unified dashboard.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><TrendingUp size={32} /></div>
              <h3>AI Predictive Trend Forecasting</h3>
              <p>Leveraging machine learning models to forecast future revenue, demand fluctuations, and operational risks.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Database size={32} /></div>
              <h3>Cloud Data Warehousing & ETL</h3>
              <p>Building high-speed Snowflake, BigQuery, and Redshift data warehouses with automated ETL data pipelines.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Zap size={32} /></div>
              <h3>Automated Reporting & Alerts</h3>
              <p>Scheduled weekly PDF reports and automated Slack alerts keeping executive teams aligned in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Unlock Your Enterprise Data's Full Potential?</h2>
            <p>Schedule a data audit with AppebSoft's senior data engineers and analytics specialists.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET FREE DATA AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/smart-analytics" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default SmartAnalytics;
