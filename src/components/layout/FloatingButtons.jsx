import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi2";

import "./FloatingButtons.css";
import { useSiteSettings } from "../../services/useCms";

function FloatingButtons() {

  const { data: settings } = useSiteSettings();
  const whatsappUrl = settings?.whatsapp_url || "https://wa.me/919836717849?text=Hello%20AppebSoft%2C%20I%20would%20like%20to%20get%20a%20free%20consultation";

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 350);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >

        <FaWhatsapp />

      </a>

      <button
        className={`top-btn ${showTop ? "show" : ""}`}
        onClick={scrollTop}
      >

        <HiArrowUp />

      </button>

    </>

  );

}

export default FloatingButtons;