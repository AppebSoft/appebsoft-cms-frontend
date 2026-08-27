import "./ServicesSection.css";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Palette,
  MonitorCog,
  ShoppingCart,
  Sparkles,
  Search,
  TrendingUp,
  Share2,
  BrainCircuit,
  Zap,
  Bot,
  BarChart3,
  MessageSquare,
  LineChart,
  RefreshCw,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    link: "/services/web-development",
    description:
      "Modern responsive websites and enterprise web applications built for speed, security and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    link: "/services/mobile-app-development",
    description:
      "Android and iOS applications that deliver seamless user experiences across every device.",
  },
  {
    icon: Palette,
    title: "UI UX Design",
    link: "/services/ui-ux-design",
    description:
      "Creative interfaces and intuitive user experiences that increase engagement and conversions.",
  },
  {
    icon: MonitorCog,
    title: "Software Development",
    link: "/services/software-development",
    description:
      "Powerful custom software solutions tailored to automate and streamline your business.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    link: "/services/ecommerce-development",
    description:
      "High performance ecommerce platforms designed to maximize online sales and customer satisfaction.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    link: "/services/digital-transformation",
    description:
      "Helping businesses adopt cloud, automation and AI to stay competitive in the digital era.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    link: "/services/search-engine-optimization",
    description:
      "Boost your organic rankings, increase search visibility, and drive sustainable qualified traffic to your website.",
  },
  {
    icon: TrendingUp,
    title: "Search Engine Marketing (SEM)",
    link: "/services/search-engine-marketing",
    description:
      "High-converting paid search campaigns and PPC strategies that maximize ROI and instantly reach targeted buyers.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing (SMM)",
    link: "/services/social-media-marketing",
    description:
      "Engaging social campaigns, community building, and targeted brand awareness across top social media platforms.",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Solutions",
    link: "/services/ai-ml-solutions",
    description:
      "Custom artificial intelligence and machine learning models designed to automate decisions and solve complex problems.",
  },
  {
    icon: Zap,
    title: "AI Optimization (AIO)",
    link: "/services/ai-optimization",
    description:
      "Fine-tune workflows and digital assets for AI-driven engines to outperform competitors in modern AI search platforms.",
  },
  {
    icon: Bot,
    title: "LLM Marketing",
    link: "/services/llm-marketing",
    description:
      "Pioneer Generative AI and Large Language Model marketing strategies to position your brand inside modern AI assistants.",
  },
  {
    icon: BarChart3,
    title: "Google Marketing",
    link: "/services/google-marketing",
    description:
      "Comprehensive Google Ads, Local SEO, and Analytics optimization to dominate search results and capture high-intent leads.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    link: "/services/ai-chatbots",
    description:
      "Intelligent 24/7 AI conversational bots and virtual assistants trained on custom company knowledge.",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    link: "/services/smart-analytics",
    description:
      "Real-time AI telemetry dashboards, predictive forecasting, and automated executive reporting.",
  },
  {
    icon: RefreshCw,
    title: "Process Automation",
    link: "/services/process-automation",
    description:
      "Automating repetitive workflows, document processing, and inter-departmental operations.",
  },
  {
    icon: Layers,
    title: "Easy Integration",
    link: "/services/easy-integration",
    description:
      "Seamless RESTful & GraphQL API connectors linking legacy software with modern cloud tools.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-bg"></div>

      <div className="container">
        <div className="section-heading">
          <span>OUR EXPERTISE</span>
          <h2>
            Digital Solutions Built
            <br />
            For Modern Businesses
          </h2>
          <p>
            We combine strategy, creativity and technology to deliver
            digital products that accelerate growth and help businesses
            stay ahead in today's competitive market.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const CardContent = (
              <div className="service-card" key={index} style={{ cursor: service.link ? 'pointer' : 'default' }}>
                <div className="shine"></div>
                <div className="service-icon">
                  <Icon size={42} strokeWidth={1.8} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );

            return service.link ? (
              <Link to={service.link} key={index} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;