import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Zap,
  ShieldCheck,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Package,
  Store,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FloatingButtons from "../../components/layout/FloatingButtons";
import SubpageNav from "../../components/common/SubpageNav";
import BreadcrumbNav from "../../components/common/BreadcrumbNav";
import "../UiUxDesign/UiUxDesign.css";
import SEOHead from "../../components/common/SEOHead";

function EcommerceDevelopment() {
  const [platformMode, setPlatformMode] = useState("headless");
  const [activeTab, setActiveTab] = useState("platforms");

  return (
    <div className="creative-subpage-white">
      <SEOHead
        title="Ecommerce Development Services"
        description="Custom Shopify, WooCommerce, and headless ecommerce platform development with high conversion rates."
        keywords="Ecommerce Development, Shopify Store, WooCommerce, Headless Ecommerce, Shopping Portals"
      />

      <Navbar />
      <BreadcrumbNav currentPage="Ecommerce Development" />

      {/* HERO WITH INTERACTIVE E-COMMERCE SPEED & PLATFORM SIMULATOR */}
      <section className="subpage-hero">
        <div className="hero-radial-grid"></div>
        <div className="container hero-content-grid">
          <div className="hero-text-block">
            <div className="hero-badge-tag">
              <ShoppingCart size={14} /> <span>HIGH-CONVERTING ECOMMERCE PLATFORMS</span>
            </div>
            <h1 className="hero-title">
              E-Commerce Stores Built to <br />
              <span className="accent-gradient">Maximize Sales & Global Growth</span>
            </h1>
            <p className="hero-desc">
              We build high-performance e-commerce stores on Shopify, WooCommerce, Magento, and custom Headless architectures designed for fast page load speed, high checkout conversion rates, and global payment integration.
            </p>
            <div className="hero-action-group">
              <Link to="/contact" className="creative-btn primary-glow-btn">
                BUILD YOUR STORE NOW <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="creative-btn glass-btn">
                View E-Commerce Work
              </Link>
            </div>
            <div className="hero-highlights">
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Sub-Second Page Loads & Instant Checkout</span></div>
              <div className="hl-item"><CheckCircle2 size={16} className="hl-check" /> <span>Multi-Currency & Global Payment Gateways</span></div>
            </div>
          </div>

          {/* INTERACTIVE STORE PLATFORM SIMULATOR */}
          <div className="device-simulator-wrapper">
            <div className="simulator-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="device-switchers">
                <button
                  className={`device-btn ${platformMode === "headless" ? "active" : ""}`}
                  onClick={() => setPlatformMode("headless")}
                >
                  <Zap size={13} /> Headless Next.js
                </button>
                <button
                  className={`device-btn ${platformMode === "shopify" ? "active" : ""}`}
                  onClick={() => setPlatformMode("shopify")}
                >
                  <Store size={13} /> Shopify Plus
                </button>
                <button
                  className={`device-btn ${platformMode === "woo" ? "active" : ""}`}
                  onClick={() => setPlatformMode("woo")}
                >
                  <ShoppingCart size={13} /> WooCommerce
                </button>
              </div>
            </div>

            <div className="simulator-screen">
              {platformMode === "headless" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#0284c7" }}><Zap size={12} /> Ultra-Fast Storefront</div>
                    <h4>Next.js Headless Commerce</h4>
                    <p>Sub-second page rendering connected to Shopify Storefront API.</p>
                    <div className="proto-stats">
                      <div><span>Page Load</span><strong>0.4 Seconds</strong></div>
                      <div><span>Conversion</span><strong>+38% Lift</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Headless Speed Engine</div>
                </div>
              )}

              {platformMode === "shopify" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge"><Store size={12} /> Shopify Custom Theme</div>
                    <h4>Shopify Plus Enterprise</h4>
                    <p>Custom liquid theme with 1-click checkout and multi-currency support.</p>
                    <div className="proto-stats">
                      <div><span>Cart Recovery</span><strong>+28%</strong></div>
                      <div><span>Gateways</span><strong>Razorpay, Stripe</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">Shopify Plus Storefront</div>
                </div>
              )}

              {platformMode === "woo" && (
                <div className="ux-proto-view">
                  <div className="proto-card">
                    <div className="proto-badge" style={{ background: "#7128ef" }}><ShoppingCart size={12} /> WooCommerce Customized</div>
                    <h4>High-Scalability WooCommerce</h4>
                    <p>Optimized MySQL caching and ERP inventory synchronization.</p>
                    <div className="proto-stats">
                      <div><span>SKUs Sync</span><strong>50,000+ Items</strong></div>
                      <div><span>Uptime</span><strong>99.9%</strong></div>
                    </div>
                  </div>
                  <div className="mode-label">WooCommerce ERP Integration</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK TABS */}
      <section className="creative-section">
        <div className="container">
          <div className="creative-head text-center">
            <span className="badge-tag">ECOMMERCE TECH MATRIX</span>
            <h2>E-Commerce Engineering & Architecture</h2>
            <p>From custom checkout flows to automated multi-warehouse fulfillment.</p>
          </div>

          <div className="matrix-tabs">
            <button
              className={`matrix-tab-btn ${activeTab === "platforms" ? "active" : ""}`}
              onClick={() => setActiveTab("platforms")}
            >
              Platforms & Headless
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "payments" ? "active" : ""}`}
              onClick={() => setActiveTab("payments")}
            >
              Payments & Checkout
            </button>
            <button
              className={`matrix-tab-btn ${activeTab === "integrations" ? "active" : ""}`}
              onClick={() => setActiveTab("integrations")}
            >
              ERP & Inventory
            </button>
          </div>

          <div className="matrix-grid">
            {activeTab === "platforms" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Store className="tech-icon" /> <h4>Shopify Plus Custom</h4></div>
                  <p>Custom Liquid themes, Checkout Extensions, and Storefront API integrations.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Zap className="tech-icon" /> <h4>Headless Next.js Storefront</h4></div>
                  <p>Edge-cached static pages with dynamic cart management for lightning speed.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><ShoppingCart className="tech-icon" /> <h4>WooCommerce Optimization</h4></div>
                  <p>Custom WooCommerce plugin development and database query optimization.</p>
                </div>
              </>
            )}

            {activeTab === "payments" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><CreditCard className="tech-icon" /> <h4>Razorpay & Stripe Integration</h4></div>
                  <p>1-click checkout, UPI, NetBanking, credit card, and recurring subscription setup.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Globe className="tech-icon" /> <h4>Multi-Currency Localization</h4></div>
                  <p>Auto-detect user IP location and show localized pricing in 40+ global currencies.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><ShieldCheck className="tech-icon" /> <h4>PCI-DSS Level 1 Compliance</h4></div>
                  <p>Bank-grade encryption protecting buyer credit card data against fraud.</p>
                </div>
              </>
            )}

            {activeTab === "integrations" && (
              <>
                <div className="tech-box">
                  <div className="tech-head"><Package className="tech-icon" /> <h4>ERP & CRM Sync</h4></div>
                  <p>Two-way real-time data sync with SAP, Tally, Zoho, and Salesforce ERP systems.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><TrendingUp className="tech-icon" /> <h4>Automated Shipping & Tracking</h4></div>
                  <p>Integration with Shiprocket, FedEx, and DHL for automated shipping label generation.</p>
                </div>
                <div className="tech-box">
                  <div className="tech-head"><Sparkles className="tech-icon" /> <h4>Abandoned Cart Recovery</h4></div>
                  <p>Automated WhatsApp & Email cart recovery workflows that recover up to 25% lost sales.</p>
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
            <span className="section-subtitle">ECOMMERCE SERVICES</span>
            <h2>Complete Online Retail Solutions</h2>
            <p>Everything you need to sell online, manage inventory, and scale your brand.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon"><Store size={32} /></div>
              <h3>Shopify & WooCommerce Stores</h3>
              <p>Custom theme design, app integrations, and conversion rate optimization for top retail platforms.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Zap size={32} /></div>
              <h3>Headless E-Commerce Architecture</h3>
              <p>Ultra-fast storefronts using Next.js/Vite connected to Shopify Plus or Commerce Layer APIs for sub-second page loads.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><CreditCard size={32} /></div>
              <h3>Payment & Gateway Integration</h3>
              <p>Seamless setup for Razorpay, Stripe, PayPal, Apple Pay, multi-currency conversion, and local payment methods.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon"><Package size={32} /></div>
              <h3>Inventory & Shipping ERP Sync</h3>
              <p>Automated real-time inventory synchronization with Shiprocket, ERPs, and multi-warehouse fulfillment partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="subpage-cta-banner">
        <div className="container">
          <div className="cta-inner-box">
            <h2>Ready to Outsell Competitors Online?</h2>
            <p>Let AppebSoft engineer an e-commerce platform that turns casual browsers into repeat buyers.</p>
            <Link to="/contact" className="creative-btn primary-glow-btn">
              GET FREE STORE AUDIT <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <SubpageNav currentPath="/services/ecommerce-development" />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default EcommerceDevelopment;
