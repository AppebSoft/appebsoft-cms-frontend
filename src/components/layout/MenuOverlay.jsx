import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";
import { useServices } from "../../services/useCms";
import { fetchBlogPosts } from "../../services/cmsApi";
import "./MenuOverlay.css";

const FALLBACK_SERVICES_SUBPAGES = [
  { title: "Web Development", path: "/services/web-development" },
  { title: "Mobile App Development", path: "/services/mobile-app-development" },
  { title: "UI UX Design", path: "/services/ui-ux-design" },
  { title: "Software Development", path: "/services/software-development" },
  { title: "Ecommerce Development", path: "/services/ecommerce-development" },
  { title: "Digital Transformation", path: "/services/digital-transformation" },
  { title: "Search Engine Optimization (SEO)", path: "/services/search-engine-optimization" },
  { title: "Search Engine Marketing (SEM)", path: "/services/search-engine-marketing" },
  { title: "Social Media Marketing (SMM)", path: "/services/social-media-marketing" },
  { title: "AI/ML Solutions", path: "/services/ai-ml-solutions" },
  { title: "AI Optimization (AIO)", path: "/services/ai-optimization" },
  { title: "LLM Marketing", path: "/services/llm-marketing" },
  { title: "Google Marketing", path: "/services/google-marketing" },
  { title: "AI Chatbots", path: "/services/ai-chatbots" },
  { title: "Smart Analytics", path: "/services/smart-analytics" },
  { title: "Process Automation", path: "/services/process-automation" },
  { title: "Easy Integration", path: "/services/easy-integration" },
];

const FALLBACK_BLOG_SUBPAGES = [
  { title: "All Blogs", path: "/blog" },
  { title: "SEO Consulting vs Full-Service", path: "/blog/seo-consulting-vs-full-service" },
  { title: "Ecommerce SEO Services", path: "/blog/ecommerce-seo-services" },
  { title: "Local SEO for Small Businesses", path: "/blog/local-seo-services-small-business" },
  { title: "Technical SEO Services", path: "/blog/technical-seo-services" },
  { title: "7 Reasons Website Not Ranking", path: "/blog/7-reasons-website-not-ranking" },
  { title: "How to Choose Web Dev Company", path: "/blog/how-to-choose-web-development-company" },
  { title: "Future of Web Dev 2026", path: "/blog/future-of-web-development-trends-2026" },
];

function MenuOverlay({ isOpen, setIsOpen }) {
  const { data: apiServices } = useServices();
  const [dynamicBlogSubpages, setDynamicBlogSubpages] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchBlogPosts({ per_page: 10 })
      .then((res) => {
        if (!cancelled && res?.data && res.data.length > 0) {
          const items = [
            { title: "All Blogs", path: "/blog" },
            ...res.data.map((p) => ({ title: p.title, path: `/blog/${p.slug}` })),
          ];
          setDynamicBlogSubpages(items);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const servicesSubpages = apiServices && apiServices.length > 0
    ? apiServices.map((s) => ({ title: s.title, path: `/services/${s.slug}` }))
    : FALLBACK_SERVICES_SUBPAGES;

  const blogSubpages = dynamicBlogSubpages || FALLBACK_BLOG_SUBPAGES;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isServiceSubpage = servicesSubpages.some(
    (s) => currentPath === s.path || currentPath === `/services${s.path}`
  );
  const isBlogSubpage = blogSubpages.some(
    (b) => currentPath === b.path || currentPath === `/blog${b.path}`
  );

  const isServicesActive = currentPath === "/services" || isServiceSubpage;
  const isBlogActive = currentPath === "/blog" || isBlogSubpage;

  const [activeTab, setActiveTab] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);

  // AUTO-EXPAND SUBPAGES FOR BOTH MAIN PAGES (/services, /blog) AND ALL SUBPAGES ON MOBILE & DESKTOP
  useEffect(() => {
    if (isOpen) {
      if (isServicesActive) {
        setActiveTab("services");
        setMobileServicesOpen(true);
        setMobileBlogOpen(false);
      } else if (isBlogActive) {
        setActiveTab("blog");
        setMobileServicesOpen(false);
        setMobileBlogOpen(true);
      } else {
        // Other main pages (Home, About, Portfolio, Contact) -> Keep subpages closed by default
        setActiveTab(null);
        setMobileServicesOpen(false);
        setMobileBlogOpen(false);
      }
    }
  }, [isOpen, currentPath, isServicesActive, isBlogActive]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === "/contact") {
      const formEl = document.getElementById("contact-form-card");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      navigate("/contact#contact-form-card");
      setTimeout(() => {
        const formEl = document.getElementById("contact-form-card");
        if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 350);
    }
  };

  return (
    <div className={`menu-overlay ${isOpen ? "active" : ""}`}>
      {/* FIXED PINNED CLOSE BUTTON */}
      <button
        className="close-btn"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        ×
      </button>

      <div className="overlay-scroll-container">
        
        {/* MOBILE VERTICAL TIMELINE METRO MENU */}
        <div className="mobile-timeline-wrapper">
          <div className="mobile-timeline-card">
            
            {/* TOP HEADER NODE */}
            <div className="timeline-header-node">
              <span className="header-title">AppebSoft Menu</span>
            </div>

            {/* VERTICAL TIMELINE TRACK */}
            <div className="timeline-track">
              
              {/* ITEM 1: HOME */}
              <div className="timeline-item">
                <span className={`node-dot ${currentPath === "/" ? "active-dot" : ""}`}></span>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                  <span>Home</span>
                  {currentPath === "/" && <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>}
                </NavLink>
              </div>

              {/* ITEM 2: ABOUT */}
              <div className="timeline-item">
                <span className={`node-dot ${currentPath === "/about" ? "active-dot" : ""}`}></span>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                  <span>About</span>
                  {currentPath === "/about" && <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>}
                </NavLink>
              </div>

              {/* ITEM 3: SERVICES */}
              <div className="timeline-item timeline-parent">
                <span className={`node-dot ${isServicesActive ? "active-dot" : ""}`}></span>
                <div
                  className="timeline-parent-header"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <div className="parent-title-group">
                    <NavLink to="/services" onClick={closeMenu} className={`parent-title ${isServicesActive ? "active-link" : ""}`}>
                      Services
                    </NavLink>
                    {currentPath === "/services" && (
                      <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>
                    )}
                    <span className="inline-chevron">
                      {mobileServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                </div>

                {mobileServicesOpen && (
                  <div className="sub-timeline-list">
                    {servicesSubpages.map((sub) => {
                      const isSubActive = currentPath === sub.path || currentPath === `/services${sub.path}`;
                      return (
                        <div className={`sub-timeline-item ${isSubActive ? "active-sub-wrapper" : ""}`} key={sub.path}>
                          <span className={`sub-node-dot ${isSubActive ? "active-sub-dot" : ""}`}></span>
                          <NavLink
                            to={sub.path}
                            onClick={closeMenu}
                            className={isSubActive ? "active-sub-link" : ""}
                          >
                            <span>{sub.title}</span>
                            {isSubActive && (
                              <span className="current-subpage-badge">
                                <CheckCircle2 size={11} /> YOU ARE HERE
                              </span>
                            )}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ITEM 4: PORTFOLIO */}
              <div className="timeline-item">
                <span className={`node-dot ${currentPath === "/portfolio" ? "active-dot" : ""}`}></span>
                <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                  <span>Portfolio</span>
                  {currentPath === "/portfolio" && <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>}
                </NavLink>
              </div>

              {/* ITEM 5: BLOG */}
              <div className="timeline-item timeline-parent">
                <span className={`node-dot ${isBlogActive ? "active-dot" : ""}`}></span>
                <div
                  className="timeline-parent-header"
                  onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                >
                  <div className="parent-title-group">
                    <NavLink to="/blog" onClick={closeMenu} className={`parent-title ${isBlogActive ? "active-link" : ""}`}>
                      Blog
                    </NavLink>
                    {currentPath === "/blog" && (
                      <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>
                    )}
                    <span className="inline-chevron">
                      {mobileBlogOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                </div>

                {mobileBlogOpen && (
                  <div className="sub-timeline-list">
                    {blogSubpages.map((sub) => {
                      const isSubActive = currentPath === sub.path || currentPath === `/blog${sub.path}`;
                      return (
                        <div className={`sub-timeline-item ${isSubActive ? "active-sub-wrapper" : ""}`} key={sub.path}>
                          <span className={`sub-node-dot ${isSubActive ? "active-sub-dot" : ""}`}></span>
                          <NavLink
                            to={sub.path}
                            onClick={closeMenu}
                            className={isSubActive ? "active-sub-link" : ""}
                          >
                            <span>{sub.title}</span>
                            {isSubActive && (
                              <span className="current-subpage-badge">
                                <CheckCircle2 size={11} /> YOU ARE HERE
                              </span>
                            )}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ITEM 6: CONTACT */}
              <div className="timeline-item">
                <span className={`node-dot ${currentPath === "/contact" ? "active-dot" : ""}`}></span>
                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                  <span>Contact Us</span>
                  {currentPath === "/contact" && <span className="current-page-pill"><CheckCircle2 size={12} /> YOU ARE HERE</span>}
                </NavLink>
              </div>

            </div>

            {/* BOTTOM CTA BUTTON */}
            <div className="timeline-footer">
              <button onClick={handleCtaClick} className="timeline-cta-btn" style={{ cursor: "pointer" }}>
                <Sparkles size={16} /> Get Started Now
              </button>
            </div>

          </div>
        </div>

        {/* DESKTOP MEGA GRID VIEW */}
        <div className={`container overlay-mega-grid desktop-only-grid ${activeTab ? "has-subpages" : "no-subpages"}`}>
          {/* LEFT COLUMN: MAIN NAV LINKS */}
          <div className="overlay-left-panel">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => `main-nav-item ${isActive ? "active" : ""}`}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => `main-nav-item ${isActive ? "active" : ""}`}
            >
              ABOUT
            </NavLink>

            <div className={`main-nav-item parent-nav-item ${activeTab === "services" || isServicesActive ? "active-tab" : ""}`}>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) => `parent-link ${isActive || isServiceSubpage ? "active" : ""}`}
              >
                SERVICES
              </NavLink>
              <button
                type="button"
                className={`desktop-sub-toggle ${activeTab === "services" ? "open" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(activeTab === "services" ? null : "services");
                }}
                title="Toggle Services subpages"
              >
                {activeTab === "services" ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </button>
            </div>

            <NavLink
              to="/portfolio"
              onClick={closeMenu}
              className={({ isActive }) => `main-nav-item ${isActive ? "active" : ""}`}
            >
              PORTFOLIO
            </NavLink>

            <div className={`main-nav-item parent-nav-item ${activeTab === "blog" || isBlogActive ? "active-tab" : ""}`}>
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) => `parent-link ${isActive || isBlogSubpage ? "active" : ""}`}
              >
                BLOG
              </NavLink>
              <button
                type="button"
                className={`desktop-sub-toggle ${activeTab === "blog" ? "open" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab(activeTab === "blog" ? null : "blog");
                }}
                title="Toggle Blog subpages"
              >
                {activeTab === "blog" ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </button>
            </div>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => `main-nav-item ${isActive ? "active" : ""}`}
            >
              CONTACT
            </NavLink>
          </div>

          {/* RIGHT COLUMN: SUBPAGES MEGA PANEL (AUTOMATICALLY SHOWN ON MAIN PAGES & SUBPAGES) */}
          {activeTab !== null && (
            <div className="overlay-right-panel">
              {activeTab === "services" && (
                <div className="subpages-content-box">
                  <div className="right-panel-header">
                    <h3>Explore All Services (17)</h3>
                  </div>

                  <div className="subpages-2col-grid">
                    {servicesSubpages.map((sub) => {
                      const isSubActive = currentPath === sub.path || currentPath === `/services${sub.path}`;
                      return (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMenu}
                          className={`subpage-card-link ${isSubActive ? "active-desktop-sub" : ""}`}
                        >
                          <span>{sub.title}</span>
                          {isSubActive && <span className="desktop-here-tag">YOU ARE HERE</span>}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "blog" && (
                <div className="subpages-content-box">
                  <div className="right-panel-header">
                    <h3>Latest Blog Posts</h3>
                  </div>

                  <div className="subpages-2col-grid">
                    {blogSubpages.map((sub) => {
                      const isSubActive = currentPath === sub.path || currentPath === `/blog${sub.path}`;
                      return (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMenu}
                          className={`subpage-card-link ${isSubActive ? "active-desktop-sub" : ""}`}
                        >
                          <span>{sub.title}</span>
                          {isSubActive && <span className="desktop-here-tag">YOU ARE HERE</span>}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default MenuOverlay;