import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import "./SubpageNav.css";

const servicesList = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
  { name: "UI UX Design", path: "/services/ui-ux-design" },
  { name: "Software Development", path: "/services/software-development" },
  { name: "Ecommerce Development", path: "/services/ecommerce-development" },
  { name: "Digital Transformation", path: "/services/digital-transformation" },
  { name: "Search Engine Optimization", path: "/services/search-engine-optimization" },
  { name: "Search Engine Marketing", path: "/services/search-engine-marketing" },
  { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  { name: "AI/ML Solutions", path: "/services/ai-ml-solutions" },
  { name: "AI Optimization (AIO)", path: "/services/ai-optimization" },
  { name: "LLM Marketing", path: "/services/llm-marketing" },
  { name: "Google Marketing", path: "/services/google-marketing" },
  { name: "AI Chatbots", path: "/services/ai-chatbots" },
  { name: "Smart Analytics", path: "/services/smart-analytics" },
  { name: "Process Automation", path: "/services/process-automation" },
  { name: "Easy Integration", path: "/services/easy-integration" },
];

function SubpageNav({ currentPath }) {
  const location = useLocation();
  const effectivePath = currentPath 
    ? (currentPath.startsWith("/services/") ? currentPath : `/services${currentPath.startsWith("/") ? "" : "/"}${currentPath}`)
    : location.pathname;

  const currentIndex = servicesList.findIndex((s) => s.path === effectivePath);
  
  const prevService =
    currentIndex > 0
      ? servicesList[currentIndex - 1]
      : servicesList[servicesList.length - 1];

  const nextService =
    currentIndex < servicesList.length - 1 && currentIndex >= 0
      ? servicesList[currentIndex + 1]
      : servicesList[0];

  return (
    <div className="subpage-pagination-container">
      <div className="container">
        <div className="subpage-pagination-box">
          <Link to={prevService.path} className="subpage-nav-btn prev-btn">
            <ArrowLeft size={18} />
            <div>
              <span className="nav-label">Previous Service</span>
              <span className="nav-title">{prevService.name}</span>
            </div>
          </Link>

          <Link to="/services" className="subpage-all-btn" title="View All Services">
            <Grid size={18} />
            <span>All Services</span>
          </Link>

          <Link to={nextService.path} className="subpage-nav-btn next-btn">
            <div>
              <span className="nav-label">Next Service</span>
              <span className="nav-title">{nextService.name}</span>
            </div>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubpageNav;
