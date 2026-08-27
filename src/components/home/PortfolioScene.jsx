import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./PortfolioScene.css";

gsap.registerPlugin(ScrollTrigger);

function PortfolioScene() {
  const sectionRef = useRef();
  const trackRef = useRef();

useEffect(() => {
  const ctx = gsap.context(() => {
    const panels = gsap.utils.toArray(".project-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + window.innerWidth * panels.length,
      },
    });

    gsap.utils.toArray(".project-image img").forEach((img) => {
      gsap.fromTo(
        img,
        {
          scale: 1.2,
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "left center",
            end: "right center",
            scrub: true,
            horizontal: true,
          },
        }
      );
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      className="portfolio-scene"
      ref={sectionRef}
    >
      <div
        className="portfolio-track"
        ref={trackRef}
      >

        <div className="project-panel">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <span>HEALTHCARE</span>

            <h2>
              Digital
              Healthcare
              Platform
            </h2>

            <p>
              End to end healthcare ecosystem
              connecting patients, doctors
              and hospitals.
            </p>

          </div>

          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt=""
            />
          </div>

        </div>

        <div className="project-panel">

          <div className="project-number">
            02
          </div>

          <div className="project-content">

            <span>FINTECH</span>

            <h2>
              Wealth
              Management
              Platform
            </h2>

            <p>
              Next generation investment
              dashboard for modern finance.
            </p>

          </div>

          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt=""
            />
          </div>

        </div>

        <div className="project-panel">

          <div className="project-number">
            03
          </div>

          <div className="project-content">

            <span>AI SAAS</span>

            <h2>
              Intelligent
              Automation
              Platform
            </h2>

            <p>
              AI powered business automation
              and workflow optimization.
            </p>

          </div>

          <div className="project-image">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              alt=""
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default PortfolioScene;