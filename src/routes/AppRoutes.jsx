import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import WebDevelopment from "../pages/WebDevelopment/WebDevelopment";
import MobileAppDevelopment from "../pages/MobileAppDevelopment/MobileAppDevelopment";
import UiUxDesign from "../pages/UiUxDesign/UiUxDesign";
import SoftwareDevelopment from "../pages/SoftwareDevelopment/SoftwareDevelopment";
import EcommerceDevelopment from "../pages/EcommerceDevelopment/EcommerceDevelopment";
import DigitalTransformation from "../pages/DigitalTransformation/DigitalTransformation";
import SearchEngineOptimization from "../pages/SearchEngineOptimization/SearchEngineOptimization";
import SearchEngineMarketing from "../pages/SearchEngineMarketing/SearchEngineMarketing";
import SocialMediaMarketing from "../pages/SocialMediaMarketing/SocialMediaMarketing";
import AiMlSolutions from "../pages/AiMlSolutions/AiMlSolutions";
import AiOptimization from "../pages/AiOptimization/AiOptimization";
import LlmMarketing from "../pages/LlmMarketing/LlmMarketing";
import GoogleMarketing from "../pages/GoogleMarketing/GoogleMarketing";
import AiChatbots from "../pages/AiChatbots/AiChatbots";
import SmartAnalytics from "../pages/SmartAnalytics/SmartAnalytics";
import ProcessAutomation from "../pages/ProcessAutomation/ProcessAutomation";
import EasyIntegration from "../pages/EasyIntegration/EasyIntegration";

import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/Blog/BlogPost";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* TOP LEVEL ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* SERVICES (PARENT-CHILD HIERARCHY) */}
        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="ui-ux-design" element={<UiUxDesign />} />
          <Route path="software-development" element={<SoftwareDevelopment />} />
          <Route path="ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="digital-transformation" element={<DigitalTransformation />} />
          <Route path="search-engine-optimization" element={<SearchEngineOptimization />} />
          <Route path="search-engine-marketing" element={<SearchEngineMarketing />} />
          <Route path="social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="ai-ml-solutions" element={<AiMlSolutions />} />
          <Route path="ai-optimization" element={<AiOptimization />} />
          <Route path="llm-marketing" element={<LlmMarketing />} />
          <Route path="google-marketing" element={<GoogleMarketing />} />
          <Route path="ai-chatbots" element={<AiChatbots />} />
          <Route path="smart-analytics" element={<SmartAnalytics />} />
          <Route path="process-automation" element={<ProcessAutomation />} />
          <Route path="easy-integration" element={<EasyIntegration />} />
        </Route>

        {/* BLOG (PARENT-CHILD HIERARCHY) */}
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>

        {/* BACKWARDS COMPATIBILITY REDIRECTS (Legacy flat URLs -> Parent-Child canonical URLs) */}
        <Route path="/web-development" element={<Navigate to="/services/web-development" replace />} />
        <Route path="/mobile-app-development" element={<Navigate to="/services/mobile-app-development" replace />} />
        <Route path="/ui-ux-design" element={<Navigate to="/services/ui-ux-design" replace />} />
        <Route path="/software-development" element={<Navigate to="/services/software-development" replace />} />
        <Route path="/ecommerce-development" element={<Navigate to="/services/ecommerce-development" replace />} />
        <Route path="/digital-transformation" element={<Navigate to="/services/digital-transformation" replace />} />
        <Route path="/search-engine-optimization" element={<Navigate to="/services/search-engine-optimization" replace />} />
        <Route path="/search-engine-marketing" element={<Navigate to="/services/search-engine-marketing" replace />} />
        <Route path="/social-media-marketing" element={<Navigate to="/services/social-media-marketing" replace />} />
        <Route path="/ai-ml-solutions" element={<Navigate to="/services/ai-ml-solutions" replace />} />
        <Route path="/ai-optimization" element={<Navigate to="/services/ai-optimization" replace />} />
        <Route path="/llm-marketing" element={<Navigate to="/services/llm-marketing" replace />} />
        <Route path="/google-marketing" element={<Navigate to="/services/google-marketing" replace />} />
        <Route path="/ai-chatbots" element={<Navigate to="/services/ai-chatbots" replace />} />
        <Route path="/smart-analytics" element={<Navigate to="/services/smart-analytics" replace />} />
        <Route path="/process-automation" element={<Navigate to="/services/process-automation" replace />} />
        <Route path="/easy-integration" element={<Navigate to="/services/easy-integration" replace />} />

        {/* 404 NOT FOUND CATCH-ALL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;