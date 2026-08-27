import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./AboutHero.css";

function AboutHero() {
  const changingWord = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

 useEffect(() => {

  const words = [
    "GLOBAL BRANDS",
    "MARKET LEADERS",
    "AI COMPANIES",
    // "DIGITAL ECOSYSTEMS",
    "FUTURE READY BUSINESSES",
  ];

  let index = 0;

  const interval = setInterval(() => {

    if (!changingWord.current) return;


    gsap.to(changingWord.current, {

      y: -50,

      opacity: 0,

      duration: 0.4,

      ease: "power3.inOut",

      onComplete: () => {


        index = (index + 1) % words.length;


        changingWord.current.innerText =
          words[index];


        gsap.fromTo(

          changingWord.current,

          {
            y:50,
            opacity:0,
          },

          {
            y:0,
            opacity:1,
            duration:.5,
            ease:"power3.out",
          }

        );


      }

    });


  },3000);



  return () => {
    if (changingWord.current) gsap.killTweensOf(changingWord.current);
    clearInterval(interval);
  };

}, []);
  return (
    <section
      className="about-hero"
      ref={sectionRef}
    >
      <div className="blob blob-a"></div>
      <div className="blob blob-b"></div>
      <div className="blob blob-c"></div>

      <div className="noise-layer"></div>

      <div
        className="about-content"
        ref={contentRef}
      >

        <span className="about-tag">
          ABOUT APPEESOFT
        </span>

        <div className="headline-group">

          <h1 className="line-1">
            WE BUILD
          </h1>

          <div
            ref={changingWord}
            className="changing-word"
          >
            GLOBAL BRANDS
          </div>

        </div>

        <p className="about-description">
          AppebSoft partners with startups,
          enterprises and ambitious businesses
          to create software, websites,
          ecommerce platforms, AI solutions
          and digital ecosystems that drive
          measurable growth across global markets.
        </p>

        <div className="hero-actions">

          <Link to="/contact" className="primary-btn1" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Start Your Project
          </Link>

          <Link to="/portfolio" className="secondary-btn" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            Explore Our Work
          </Link>

        </div>

        <div className="about-stats">

          <div>
            <h3>100+</h3>
            <span>Businesses Served</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Projects Delivered</span>
          </div>

          <div>
            <h3>5+</h3>
            <span>Countries Served</span>
          </div>

        </div>

      </div>

      <div className="floating-tech">

        <div className="tech-pill pill-1">
          Software Development
        </div>

        <div className="tech-pill pill-2">
          Mobile Apps
        </div>

        <div className="tech-pill pill-3">
          Ecommerce
        </div>

        <div className="tech-pill pill-4">
          Artificial Intelligence
        </div>

        <div className="tech-pill pill-5">
          Cloud Solutions
        </div>

        <div className="tech-pill pill-6">
          UI / UX Design
        </div>

      </div>

    </section>
  );
}

export default AboutHero;