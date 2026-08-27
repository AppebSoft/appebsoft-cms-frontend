import Navbar from "../../components/layout/Navbar";
import SEOHead from "../../components/common/SEOHead";

import HeroScene from "../../components/home/HeroScene";
import ManifestoScene from "../../components/home/ManifestoScene";
import ServicesUniverse from "../../components/home/ServicesUniverse";
import TechnologyEcosystem from "../../components/home/TechnologyEcosystem";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import AICommandCenter from "../../components/home/AICommandCenter";
import ServiceCube from "../../components/home/ServiceCube";
import PortfolioSection from "../../components/portfolio/PortfolioSection";
import FloatingButtons from "../../components/layout/FloatingButtons";

function Home() {
  return (
    <>
      <SEOHead
        title="Amplifying Digital Power | Web, Mobile & AI Solutions"
        description="AppebSoft is a premier digital product studio delivering custom web development, mobile applications, enterprise software, AI chatbots, smart analytics, and digital transformation solutions."
        keywords="AppebSoft, Web Development, Mobile Apps, Enterprise Software, AI Chatbots, Smart Analytics, Digital Transformation, React, Node.js"
      />

      <Navbar />

      <HeroScene />

      <ManifestoScene />

      <AICommandCenter />

      <PortfolioSection />

      <ServiceCube />

      <ServicesUniverse />

      <TechnologyEcosystem />

      <FinalCTA />

      <NextChapter />

      <Footer />

      <FloatingButtons/>
    </>
  );
}

export default Home;
