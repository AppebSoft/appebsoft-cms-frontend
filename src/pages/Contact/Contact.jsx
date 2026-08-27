import Navbar from "../../components/layout/Navbar";
import SEOHead from "../../components/common/SEOHead";
import FinalCTA from "../../components/home/FinalCTA";
import NextChapter from "../../components/home/NextChapter";
import Footer from "../../components/layout/Footer";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactMapSection from "../../components/contact/ContactMapSection";
import FloatingButtons from "../../components/layout/FloatingButtons";

function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | Start Your Digital Project"
        description="Get in touch with AppebSoft's experts for a free consultation. Call +91 98367 17849, email contact@appebsoft.com, or send us a message."
        keywords="Contact AppebSoft, AppebSoft Phone, AppebSoft Email, Web Development Consultation"
      />

      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactMapSection/>

      <FinalCTA />

      <NextChapter />

      <Footer />

      <FloatingButtons/>
    </>
  );
}

export default Contact;
