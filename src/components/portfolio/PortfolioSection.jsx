// src/components/portfolio/PortfolioSection.jsx

import { useState } from "react";
import { usePortfolio, usePortfolioCategories } from "../../services/useCms";
import {
  ArrowUpRight,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  MonitorCog,
} from "lucide-react";

import "./PortfolioSection.css";

const iconMap = {
  Globe: Globe,
  ShoppingBag: ShoppingBag,
  LayoutDashboard: LayoutDashboard,
  MonitorCog: MonitorCog,
};

const fallbackPortfolio = [
  {
    id: 1,
    category: "Industrial",
    title: "The IDTL",
    image: "/portfolio/IDTL.jpg",
    link: "https://theidtl.com/",
    icon: MonitorCog,
    description: "NABL accredited laboratory website providing diagnostic testing and healthcare services.",
    tech: ["Wordpress", "Responsive", "Industrial"],
  },
  {
    id: 2,
    category: "Corporate",
    title: "WASH_E LAUNDRY",
    image: "/portfolio/WASH_E.jpg",
    link: "https://www.washelaundry.in/",
    icon: MonitorCog,
    description: "Wash-E Laundry takes it off your hands from hotel linen and hostel bedding to corporate uniforms and university wear.",
    tech: ["React", "Responsive", "Corporate"],
  },
  {
    id: 3,
    category: "Corporate",
    title: "MACH SG",
    image: "/portfolio/MACSG.jpg",
    link: "https://www.machsg.com/",
    icon: Globe,
    description: "Corporate engineering and manufacturing website showcasing industrial solutions and global capabilities.",
    tech: ["React", "Corporate", "Seo"],
  },
  {
    id: 4,
    category: "Industrial",
    title: "Piab",
    image: "/portfolio/piab.png",
    link: "https://www.piab.com/",
    icon: Globe,
    description: "Corporate industrial website focused on vacuum automation, gripping and lifting solutions.",
    tech: ["Wordpress", "UI/UX", "Industrial"],
  },
  {
    id: 5,
    category: "Ecommerce",
    title: "Nasty Gal",
    image: "/portfolio/nasty-gal.jpg",
    link: "https://www.nastygal.com/",
    icon: ShoppingBag,
    description: "Global fashion ecommerce platform with modern shopping experience and premium UI.",
    tech: ["Shopify", "UX", "Ecommerce"],
  },
  {
    id: 6,
    category: "Ecommerce",
    title: "Suta",
    image: "/portfolio/suta.jpg",
    link: "https://suta.in/",
    icon: ShoppingBag,
    description: "Premium Indian fashion and lifestyle ecommerce platform with beautiful storytelling.",
    tech: ["Shopify", "UI/UX", "Ecommerce"],
  },
  {
    id: 7,
    category: "Corporate",
    title: "Ambey Group",
    image: "/portfolio/ambey-group.jpg",
    link: "https://ambeygroup.net/",
    icon: Globe,
    description: "Corporate business website showcasing manufacturing excellence and global presence.",
    tech: ["Wordpress", "Responsive", "Corporate"],
  },
  {
    id: 8,
    category: "Ecommerce",
    title: "House of Indya",
    image: "/portfolio/indya.jpg",
    link: "https://www.houseofindya.com/",
    icon: ShoppingBag,
    description: "Leading ethnic fashion ecommerce platform with premium shopping experience.",
    tech: ["Shopify", "SEO", "Ecommerce"],
  },
  {
    id: 9,
    category: "Real Estate",
    title: "Sobha",
    image: "/portfolio/sobha.jpg",
    link: "https://www.sobha.com/",
    icon: LayoutDashboard,
    description: "Luxury real estate website showcasing premium residential and commercial properties.",
    tech: ["Wordpress", "SEO", "Real Estate"],
  },
];

function PortfolioSection() {
  const { data: apiPortfolioData } = usePortfolio();
  const { data: apiCategories } = usePortfolioCategories();

  const [active, setActive] = useState("All");

  // Adapt API data to component shape, falling back to hardcoded data
  const portfolioData = (apiPortfolioData && apiPortfolioData.length > 0)
    ? apiPortfolioData.map((item) => ({
        id: item.id,
        category: item.category?.name || "Corporate",
        title: item.title,
        image: item.thumbnail_image || "/portfolio/IDTL.jpg",
        link: item.website_url || "#",
        icon: iconMap[item.lucide_icon] || Globe,
        description: item.description || "",
        tech: item.tech_tags || [],
      }))
    : fallbackPortfolio;

  const filters = (apiCategories && apiCategories.length > 0)
    ? ["All", ...apiCategories.map((c) => c.name)]
    : ["All", "Corporate", "Ecommerce", "Industrial", "Real Estate"];

  const projects =
    active === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <section className="portfolio-section">
      <div className="portfolio-bg"></div>

      <div className="container">
        <div className="portfolio-heading">
          <span>OUR PORTFOLIO</span>
          <h2>
            We Build Digital
            <br />
            Products That Drive Growth
          </h2>
          <p>
            Explore our latest work across web development, mobile applications, software solutions, ecommerce platforms and digital transformation.
          </p>
        </div>

        <div className="portfolio-filter">
          {filters.map((item) => (
            <button
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const Icon = project.icon || Globe;

            return (
              <article className="portfolio-card" key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      const currentSrc = e.currentTarget.src;
                      if (currentSrc && !currentSrc.includes("IDTL.jpg")) {
                        const lower = currentSrc.toLowerCase();
                        if (currentSrc !== lower) {
                          e.currentTarget.src = lower;
                          return;
                        }
                        e.currentTarget.src = "/portfolio/IDTL.jpg";
                      }
                    }}
                  />

                  <div className="portfolio-overlay">
                    <div className="portfolio-arrow">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </a>

                <div className="portfolio-content">
                  <div className="portfolio-header">
                    <div className="portfolio-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{project.title}</h3>
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <p className="portfolio-description">{project.description}</p>

                  <div className="portfolio-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    Visit Website
                  </a>
                </div>
              </article>
            );
          })}

          {projects.length === 0 && (
            <div className="portfolio-empty">
              <h3>Coming Soon</h3>
            </div>
          )}
        </div>

        <div className="portfolio-bottom">
          <h3>Explore Our Portfolio</h3>
          <p>
            Discover our latest projects, innovative solutions, and digital experiences crafted for businesses across industries.
          </p>

          <a
            href="/portfolio/Portfolio-of-Appebsoft.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            <span>Download Portfolio</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;