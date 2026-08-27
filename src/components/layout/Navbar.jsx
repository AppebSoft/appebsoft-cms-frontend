import { useEffect, useState } from "react";
import "./Navbar.css";

import MenuOverlay from "./MenuOverlay";

import WhiteLogo from "../../assets/logo-white.png";
import ColorLogo from "../../assets/logo-color.png";

import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 991
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <>
      <header
        className={`navbar ${scrolled || isMobile ? "scrolled" : ""
          }`}
      >
        <div className="navbar-inner">

          <Link to="/" className="logo-link">
            <img
              src={isMobile || scrolled ? ColorLogo : WhiteLogo}
              alt="AppebSoft Logo"
              className="logo"
            />
          </Link>

          <button
            className="menu-button"
            onClick={() => setIsOpen(true)}
          >
            MENU
          </button>

        </div>
      </header>

      <MenuOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;