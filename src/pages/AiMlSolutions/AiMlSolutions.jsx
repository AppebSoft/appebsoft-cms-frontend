import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Cpu,
  Bot,
  Zap,
  ArrowRight,
  Database,
  LineChart,
  CheckCircle2,
  Sparkles,
  Terminal,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function AiMlSolutions() {
  const [modelType, setModelType] = useState("vision");
  const [activeTab, setActiveTab] = useState("models");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="AI & Machine Learning Solutions"
        description="Custom ML models, computer vision, natural language processing, and predictive AI engineering."
        keywords="AI Solutions, Machine Learning, Deep Learning, Predictive AI, Computer Vision, NLP"
      />

      <Navbar />
      <BreadcrumbNav currentPage="AI & ML Solutions" />

      {/* HERO WITH INTERACTIVE AI MODEL PREDICTION SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <BrainCircuit size={14} /> <span>ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</span>
            </div>
            <h1 className="hero-title">
              Custom AI/ML Solutions to <br />
              <span className="accent-gradient">Automate Decisions & Solve Complex Problems</span>
            </h1>
            <p className="hero-desc">
              We build custom Artificial Intelligence and Machine Learning models, predictive analytics engines, NLP algorithms, and automated data pipelines that give your enterprise an unbeatable competitive edge.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                EXPLORE AI SOLUTIONS <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View AI Demos
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>99.4% Model Inference Accuracy</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Real-Time Neural Network Data Streaming</span></div>
            </div>
          </div>

          {/* INTERACTIVE AI PREDICTION SANDBOX */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${modelType === "vision" ? "active" : ""}`}
                  onClick={() => setModelType("vision")}
                >
                  <Cpu size={13} /> Computer Vision
                </button>
                <button
                  className={`device-btn ${modelType === "predict" ? "active" : ""}`}
                  onClick={() => setModelType("predict")}
                >
                  <LineChart size={13} /> Predictive AI
                </button>
                <button
                  className={`device-btn ${modelType === "nlp" ? "active" : ""}`}
                  onClick={() => setModelType("nlp")}
                >
                  <Bot size={13} /> NLP Agent
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {modelType === "vision" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Cpu size={12} /> Object Detection Neural Net</div>
                    <h4>Industrial Defect Classifier</h4>
                    <p>Real-time video frame scanning for manufacturing anomaly detection.</p>
                    <div className="proto-stats">
                      <div><span>Confidence</span><strong>99.4% Acc.</strong></div>
                      <div><span>Speed</span><strong>120 FPS</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Computer Vision Neural Network</div>
                </div>
              )}

              {modelType === "predict" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><LineChart size={12} /> Time-Series Model</div>
                    <h4>Customer Churn Predictor</h4>
                    <p>Analyzed 500,000 user activity logs to flag retention risks.</p>
                    <div className="proto-stats">
                      <div><span>Churn Alert</span><strong>High Risk</strong></div>
                      <div><span>Prevention</span><strong>+32% Saved</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Predictive Machine Learning</div>
                </div>
              )}

              {modelType === "nlp" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><Bot size={12} /> Transformer Model</div>
                    <h4>Custom Fine-Tuned LLM</h4>
                    <p>Domain-specific document parsing and automated text summarization.</p>
                    <div className="proto-stats">
                      <div><span>Throughput</span><strong>140 Tokens/s</strong></div>
                      <div><span>Latency</span><strong>14ms</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Natural Language Processing</div>
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
            <span className="badge-tag">AI TECH MATRIX</span>
            <h2>Machine Learning Tech & Frameworks</h2>
            <p>State-of-the-art frameworks engineered for production AI deployments.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "models" ? "active" : ""}`}
              onClick={() => setActiveTab("models")}
            >
              Models & Frameworks
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "pipelines" ? "active" : ""}`}
              onClick={() => setActiveTab("pipelines")}
            >
              Data Pipelines
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "deployment" ? "active" : ""}`}
              onClick={() => setActiveTab("deployment")}
            >
              Edge Deployment
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "models" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><BrainCircuit className="tech-icon" /> <h4>PyTorch & TensorFlow</h4></div>
                  <p>Building deep neural network architectures for classification, regression, and time-series forecasting.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Bot className="tech-icon" /> <h4>HuggingFace Transformers</h4></div>
                  <p>Fine-tuning open-source LLMs (Llama 3, Mistral) on proprietary enterprise data.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>OpenCV & Vision Models</h4></div>
                  <p>YOLOv8 and OpenCV algorithms for real-time video stream inspection and facial recognition.</p>
                </div>
              </>
            )}

            {activeTab === "pipelines" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Database className="tech-icon" /> <h4>Vector Databases (Pinecone / Chroma)</h4></div>
                  <p>Storing high-dimensional vector embeddings for sub-10ms semantic similarity search.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Feature Store Engineering</h4></div>
                  <p>Building Feast and Hopsworks feature stores for real-time model feature retrieval.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><LineChart className="tech-icon" /> <h4>Automated ETL Data Streaming</h4></div>
                  <p>Apache Kafka and Spark pipelines streaming millions of events per second for continuous AI training.</p>
                </div>
              </>
            )}

            {activeTab === "deployment" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Terminal className="tech-icon" /> <h4>Triton & ONNX Runtime</h4></div>
                  <p>Optimized model inference servers running ONNX Runtime on NVIDIA TensorRT GPUs.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>MLOps & MLflow Tracking</h4></div>
                  <p>Continuous model monitoring, versioning, drift detection, and automated retraining pipelines.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Cpu className="tech-icon" /> <h4>Edge AI (TensorFlow Lite)</h4></div>
                  <p>Quantizing models to run directly on mobile phones, IoT gateways, and embedded microcontrollers.</p>
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
            <span className="section-subtitle">AI & ML CAPABILITIES</span>
            <h2>Intelligent Systems Engineering</h2>
            <p>Transforming enterprise data into actionable predictive insights.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><BrainCircuit size={32} /></div>
              <h3>Custom ML Model Training</h3>
              <p>Developing bespoke machine learning models for classification, regression, computer vision, and recommendation engines.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><LineChart size={32} /></div>
              <h3>Predictive Analytics & Forecasting</h3>
              <p>Leveraging historical data models to forecast market demand, customer churn, financial risks, and inventory needs.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Bot size={32} /></div>
              <h3>Natural Language Processing (NLP)</h3>
              <p>Building custom sentiment analysis, document parsing, automated text summarization, and domain-specific AI agents.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Database size={32} /></div>
              <h3>Automated Data Engineering Pipelines</h3>
              <p>Clean, structure, and stream enterprise big data through automated ETL pipelines designed for AI training readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Harness AI for Your Enterprise?</h2>
            <p>Schedule a technical discovery session with AppebSoft's AI research & data science engineers.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              BOOK DISCOVERY CALL <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/ai-ml-solutions" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default AiMlSolutions;
