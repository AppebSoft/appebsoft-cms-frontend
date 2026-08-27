import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "THINK BIG.",
  "BUILD BOLD.",
  "WE DESIGN WITH PURPOSE.",
  "WE ENGINEER FOR SCALE.",
  "WE BUILD THE DIGITAL FUTURE."
];

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const texts = gsap.utils.toArray(".who-line");

    gsap.set(texts, {
      opacity: 0,
      y: 100,
      scale: 0.96,
    });

    gsap.set(texts[0], {
      opacity: 1,
      y: 0,
      scale: 1,
    });

    gsap.set(".who-card", {
      opacity: 1,
      y: 100,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: contentRef.current,
        start: "top top",
        end: () =>
          `+=${window.innerHeight * 0.8}`,
        scrub: 0.6,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    /* Hold first text */
    tl.to({}, { duration: 0.45 });

    texts.forEach((text, index) => {
      if (index === 0) return;

      tl.to(
        texts[index - 1],
        {
          opacity: 0,
          y: -80,
          scale: 1.02,
          duration: 0.55,
          ease: "power2.out",
        }
      );

      tl.fromTo(
        text,
        {
          opacity: 0,
          y: 80,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
        },
        "<"
      );
    });

    /* Hold the final text */
    tl.to({}, { duration: 0.3 });

    /* Slide the card in while keeping opacity at 1 */
    tl.to(
      ".who-card",
      {
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      },
      "<"
    );

    /* Hold everything */
    tl.to({}, { duration: 1.2 });

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => {
    ctx.revert();
  };
}, []);

    return (
    <section
      className="whoSection"
      ref={sectionRef}
    >
      <div
        className="content"
        ref={contentRef}
      >
        <div className="bg-word">
          APPEESOFT
        </div>

        <div className="smallTitle">
          WHO WE ARE
        </div>

        <div className="story">
          {lines.map((line, index) => (
            <h2
              key={index}
              className="who-line"
            >
              {line}
            </h2>
          ))}
        </div>

        <div className="who-card">

          <h3>
            Building The Digital Future.
          </h3>

          <p>
            AppebSoft is a digital transformation company helping startups,
            brands and enterprises build modern digital experiences through
            strategy, design, engineering and innovation.

            We create websites, mobile applications,
            enterprise software, AI powered solutions,
            cloud platforms and digital marketing strategies
            that help businesses grow with confidence.
          </p>

          <div className="divider" />

          <div className="stats">

            <div>
              <h4>100+</h4>
              <span>Projects</span>
            </div>

            <div>
              <h4>20+</h4>
              <span>Clients</span>
            </div>

            <div>
              <h4>25+</h4>
              <span>Experts</span>
            </div>

            <div>
              <h4>5+</h4>
              <span>Countries</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );

}