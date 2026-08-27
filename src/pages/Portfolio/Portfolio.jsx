import Navbar from "../../components/layout/Navbar";
import SEOHead from "../../components/common/SEOHead";
import FinalCTA from "../../components/home/FinalCTA";
import Footer from "../../components/layout/Footer";
import PortfolioSection from "../../components/portfolio/PortfolioSection";
import FloatingButtons from "../../components/layout/FloatingButtons";

function Portfolio() {
  return (
    <>
      <SEOHead
        title="Our Portfolio | Case Studies & Featured Client Work"
        description="Browse AppebSoft's featured portfolio projects across Industrial, Corporate, Ecommerce, and Real Estate sectors including The IDTL, MACH SG, Piab, and Suta."
        keywords="AppebSoft Portfolio, AppebSoft Client Work, Web Development Case Studies, Ecommerce Projects"
      />

      <Navbar />
      <PortfolioSection />
      <FinalCTA />
      <Footer />
      <FloatingButtons/>
    </>
  );
}

export default Portfolio;
