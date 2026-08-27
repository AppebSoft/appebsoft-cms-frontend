import Navbar from "../../components/layout/Navbar";
import SEOHead from "../../components/common/SEOHead";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import ServiceHeroSection from "../../components/services/ServiceHeroSection";
import ServicesSection from "../../components/services/ServicesSection";
import FloatingButtons from "../../components/layout/FloatingButtons";

function Services() {
  return (
    <>
      <SEOHead
        title="Our Services | Full-Spectrum Digital & AI Engineering"
        description="Explore AppebSoft's 17 core services: Web Development, Mobile Apps, AI Chatbots, Smart Analytics, Process Automation, UI/UX Design, SEO, SMM, and Digital Transformation."
        keywords="AppebSoft Services, Web Development Services, Mobile App Development, AI Chatbots, Process Automation, SEO Services"
      />

      <Navbar />

      <ServiceHeroSection />

      <ServicesSection />

      <FinalCTA />

      <NextChapter />

      <Footer />

      <FloatingButtons/>
    </>
  );
}

export default Services;
