import "./Footer.css";
import WhiteLogo from "../../assets/logo-white.png";

import { Link } from "react-router-dom";
import { useSiteSettings } from "../../services/useCms";

function Footer() {
  const { data: settings } = useSiteSettings();
  return (
    <footer className="footer">

      <div className="footer-top">

        <span className="footer-tag">
          FINAL CHAPTER
        </span>

        <Link to="/" className="logo-link">
          <img
            src={WhiteLogo}
            alt="AppebSoft Logo"
            className="logo footer-logo"
          />
        </Link>

      </div>

      <div className="footer-middle">



        <p>
          Building digital products,
          intelligent experiences and
          scalable solutions for the future.
        </p>

        <div className="footer-links">

          <a href={settings?.social_facebook || "https://www.facebook.com/profile.php?id=61585505077330"} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>

          <a href={settings?.social_linkedin || "https://www.linkedin.com/company/appebsoft/home/"} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a
            href={settings?.portfolio_pdf_url || "/portfolio/Portfolio-of-Appebsoft.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </div>

  <div className="footer-bottom">
  <span>
    © 2026{" "}
    <Link to="/" className="footer-brand">
      AppebSoft
    </Link>
  </span>

  <span>
    Made In India • Built Worldwide
  </span>
</div>

    </footer>
  );
}

export default Footer;