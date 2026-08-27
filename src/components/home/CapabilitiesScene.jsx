import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ServiceCube.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 0,
    number: "01",
    title: "Custom Software",
    description:
      "Enterprise grade CRM, ERP, SaaS and automation systems engineered to streamline operations and accelerate growth.",
    stats: "120+ Products Delivered",
  },

  {
    id: 1,
    number: "02",
    title: "Ecommerce",
    description:
      "Conversion focused ecommerce ecosystems built on Shopify, WooCommerce and custom commerce technologies.",
    stats: "₹12Cr+ Revenue Generated",
  },

  {
    id: 2,
    number: "03",
    title: "Web Experiences",
    description:
      "Award winning digital experiences powered by React, Next.js, GSAP and modern design systems.",
    stats: "99 Performance Score",
  },

  {
    id: 3,
    number: "04",
    title: "Digital Marketing",
    description:
      "SEO, paid advertising, analytics and performance campaigns designed for sustainable growth.",
    stats: "3.8M+ Reach Generated",
  },
];

function ServiceCube() {
  const sectionRef = useRef();
  const cubeRef = useRef();

  const [activeFace, setActiveFace] = useState(0);

  useEffect(() => {
    const cube = cubeRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 1,
        pin: true,
      },
    });

    tl.from(".hero-heading", {
      y: 200,
      opacity: 0,
      duration: 1,
    });

    tl.to(".hero-heading", {
      scale: 0.5,
      y: -250,
      opacity: 0.2,
      duration: 1,
    });

    tl.from(
      ".cube-wrapper",
      {
        y: 500,
        opacity: 0,
        duration: 1.5,
      },
      "-=0.5"
    );

    tl.to(cube, {
      rotateY: 90,
      duration: 1,
      onUpdate: () => {
        setActiveFace(1);
      },
    });

    tl.to(cube, {
      rotateY: 180,
      duration: 1,
      onUpdate: () => {
        setActiveFace(2);
      },
    });

    tl.to(cube, {
      rotateY: 270,
      duration: 1,
      onUpdate: () => {
        setActiveFace(3);
      },
    });

    tl.to(".cube-wrapper", {
      scale: 0.7,
      opacity: 0.2,
      duration: 1,
    });

    tl.from(".final-message", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);

  return (
    <section
      className="service-cube-section"
      ref={sectionRef}
    >
      <div className="background-word">
        EXPERTISE
      </div>

      <div className="hero-heading">
        <span>OUR EXPERTISE</span>

        <h2>
          Four Disciplines.
          <br />
          One Growth Engine.
        </h2>
      </div>

      <div className="main-layout">

        {/* LEFT SIDE */}

        <div className="cube-wrapper">
          <div
            className="cube"
            ref={cubeRef}
          >
            <div className="face front">
              <span>01</span>
              <h3>Software</h3>
            </div>

            <div className="face right">
              <span>02</span>
              <h3>Ecommerce</h3>
            </div>

            <div className="face back">
              <span>03</span>
              <h3>Web</h3>
            </div>

            <div className="face left">
              <span>04</span>
              <h3>Marketing</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="content-panel">
          <div className="content-inner">

            <div className="service-number">
              {services[activeFace].number}
            </div>

            <h3>
              {services[activeFace].title}
            </h3>

            <p>
              {services[activeFace].description}
            </p>

            <div className="stat-box">
              {services[activeFace].stats}
            </div>

            <ul>
              <li>Strategy First Approach</li>
              <li>Scalable Architecture</li>
              <li>Future Ready Technology</li>
              <li>Business Driven Results</li>
            </ul>

          </div>
        </div>

      </div>

      <div className="progress-wrapper">
        <div
          className={`dot ${
            activeFace >= 0 ? "active" : ""
          }`}
        />

        <div
          className={`dot ${
            activeFace >= 1 ? "active" : ""
          }`}
        />

        <div
          className={`dot ${
            activeFace >= 2 ? "active" : ""
          }`}
        />

        <div
          className={`dot ${
            activeFace >= 3 ? "active" : ""
          }`}
        />
      </div>

      <div className="final-message">
        <h2>
          Build.
          Scale.
          Dominate.
        </h2>

        <p>
          Everything your business needs
          under one digital ecosystem.
        </p>
      </div>
    </section>
  );
}

export default ServiceCube;