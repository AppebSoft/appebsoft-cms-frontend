import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass, MessageSquare, Sparkles, Layers, ShieldCheck } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import SEOHead from "../../components/common/SEOHead";
import "./NotFound.css";

export default function NotFound() {
  const quickLinks = [
    { title: "Web Development", path: "/services/web-development" },
    { title: "Mobile App Development", path: "/services/mobile-app-development" },
    { title: "UI/UX Design", path: "/services/ui-ux-design" },
    { title: "AI & ML Solutions", path: "/services/ai-ml-solutions" },
    { title: "Portfolio Projects", path: "/portfolio" },
    { title: "AppebSoft Blogs", path: "/blog" },
  ];

  return (
    <div className="notfound-page-wrapper">
      <SEOHead 
        title="404 — Page Not Found | AppebSoft" 
        description="The page you are looking for does not exist or has been moved."
      />

      <Navbar />

      <main className="notfound-main-content">
        <div className="notfound-glow-orb orb-top"></div>
        <div className="notfound-glow-orb orb-bottom"></div>

        <div className="container notfound-container">
          {/* Animated 404 Badge */}
          <div className="notfound-badge-wrapper">
            <span className="notfound-pill">
              <Sparkles size={14} className="sparkle-icon" />
              <span>HTTP 404 Error</span>
            </span>
            <h1 className="notfound-huge-code">404</h1>
          </div>

          <h2 className="notfound-headline">Page Lost in Cyberspace</h2>
          <p className="notfound-subtext">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us get you back on track.
          </p>

          {/* Core Action CTA Buttons */}
          <div className="notfound-actions">
            <Link to="/" className="notfound-btn primary-btn">
              <Home size={17} />
              <span>Back to Home</span>
            </Link>

            <Link to="/services" className="notfound-btn secondary-btn">
              <Compass size={17} />
              <span>Explore All Services</span>
            </Link>

            <Link to="/contact" className="notfound-btn outline-btn">
              <MessageSquare size={17} />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Helpful Navigation Grid */}
          <div className="notfound-quicklinks-box">
            <h3 className="notfound-quicklinks-title">
              <Layers size={16} />
              <span>Popular Destinations</span>
            </h3>
            <div className="notfound-links-grid">
              {quickLinks.map((item, idx) => (
                <Link key={idx} to={item.path} className="notfound-link-item">
                  <span>{item.title}</span>
                  <ArrowLeft size={13} className="arrow-flip" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}