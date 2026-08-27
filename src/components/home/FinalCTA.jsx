import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./FinalCTA.css";

gsap.registerPlugin(ScrollTrigger);

function FinalCTA() {
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRef = useRef();
  const glowRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-line", {
        y: 150,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cta-button", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glowRef.current, {
      x,
      y,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const magneticMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
    });
  };

  const magneticLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
    });
  };

  const handleStartProjectClick = () => {
    if (location.pathname === "/contact") {
      const formEl = document.getElementById("contact-form-card");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      navigate("/contact#contact-form-card");
      setTimeout(() => {
        const formEl = document.getElementById("contact-form-card");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 350);
    }
  };

  return (
    <section
      className="final-cta"
      ref={sectionRef}
      onMouseMove={handleMove}
    >
      <div className="cta-glow" ref={glowRef} />

      <div className="cta-content">
        <div className="cta-heading">
          <h2 className="cta-line">READY TO</h2>
          <h2 className="cta-line">BUILD</h2>
          <h2 className="cta-line">SOMETHING</h2>
          <h2 className="cta-line outline">EXTRAORDINARY?</h2>
        </div>

        <button
          ref={buttonRef}
          className="cta-button"
          onMouseMove={magneticMove}
          onMouseLeave={magneticLeave}
          onClick={handleStartProjectClick}
          style={{ cursor: "pointer" }}
        >
          START A PROJECT
          <span>→</span>
        </button>

        <p className="cta-bottom">
          SCROLL TO BEGIN THE NEXT CHAPTER
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;