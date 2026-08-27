import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ServiceCube.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Enterprise grade software solutions engineered to automate workflows, optimize operations and accelerate business growth.",
    features: [
      "CRM Systems",
      "ERP Platforms",
      "SaaS Products",
      "Business Automation",
    ],
  },

  {
    number: "02",
    title: "Ecommerce",
    description:
      "High converting ecommerce ecosystems built for performance, scalability and revenue generation.",
    features: [
      "Shopify",
      "WooCommerce",
      "Headless Commerce",
      "Marketplace Solutions",
    ],
  },

  {
    number: "03",
    title: "Website Development",
    description:
      "Modern websites and web applications designed for speed, engagement and digital excellence.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Web Applications",
      "Portfolio Platforms",
    ],
  },

  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Performance marketing strategies focused on visibility, lead generation and sustainable growth.",
    features: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Content Marketing",
    ],
  },
];

export default function ServiceCube() {
  const sectionRef = useRef(null);
  const cubeRef = useRef(null);
  const contentRef = useRef(null);

  const rotation = useRef(0);
  const startX = useRef(0);
  const dragging = useRef(false);
  const stepCount = useRef(0);

  const [activeFace, setActiveFace] = useState(0);

  const animateContent = () => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    }
  };

  // MANUAL ROTATION WITH CIRCULAR LOOPING (4 -> 1 & 1 -> 4)
  const rotateCube = (targetIndex) => {
    const currentIndex = ((stepCount.current % services.length) + services.length) % services.length;

    let diff = targetIndex - currentIndex;

    // Circular shortest path wrap (e.g. 4 to 1 advances forward +1 step instead of reversing -3)
    if (diff > services.length / 2) {
      diff -= services.length;
    } else if (diff < -services.length / 2) {
      diff += services.length;
    }

    stepCount.current += diff;
    rotation.current = stepCount.current * -90;

    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        rotateY: rotation.current,
        duration: 0.9,
        ease: "power4.inOut",
      });
    }

    setActiveFace(targetIndex);

    requestAnimationFrame(() => {
      animateContent();
    });
  };

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    const ctx = gsap.context(() => {
      gsap.set(cube, {
        rotateX: -18,
        rotateY: 0,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      });

      if (contentRef.current) {
        gsap.set(contentRef.current, {
          opacity: 1,
          y: 0,
        });
      }

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".cube-wrapper", {
        opacity: 0,
        y: 120,
        duration: 1,
      });

      tl.from(
        ".content-panel",
        {
          opacity: 0,
          x: 80,
          duration: 0.8,
        },
        "-=0.5"
      );

      const getX = (event) =>
        event.touches ? event.touches[0].clientX : event.clientX;

      const startDrag = (event) => {
        dragging.current = true;
        startX.current = getX(event);
      };

      const moveDrag = (event) => {
        if (!dragging.current) return;

        const currentX = getX(event);
        const delta = currentX - startX.current;

        rotation.current += delta * 0.45;

        gsap.set(cube, {
          rotateY: rotation.current,
        });

        startX.current = currentX;
      };

      const endDrag = () => {
        if (!dragging.current) return;

        dragging.current = false;

        // Snap to nearest 90-degree step
        const step = Math.round(rotation.current / -90);
        stepCount.current = step;
        rotation.current = step * -90;

        gsap.to(cube, {
          rotateY: rotation.current,
          duration: 0.8,
          ease: "power4.out",
        });

        const normalizedIndex = ((step % services.length) + services.length) % services.length;
        setActiveFace(normalizedIndex);

        requestAnimationFrame(() => {
          animateContent();
        });
      };

      cube.addEventListener("mousedown", startDrag);
      cube.addEventListener("touchstart", startDrag, { passive: true });

      window.addEventListener("mousemove", moveDrag);
      window.addEventListener("touchmove", moveDrag, { passive: true });

      window.addEventListener("mouseup", endDrag);
      window.addEventListener("touchend", endDrag);

      return () => {
        cube.removeEventListener("mousedown", startDrag);
        cube.removeEventListener("touchstart", startDrag);

        window.removeEventListener("mousemove", moveDrag);
        window.removeEventListener("touchmove", moveDrag);

        window.removeEventListener("mouseup", endDrag);
        window.removeEventListener("touchend", endDrag);
      };
    }, sectionRef);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="service-cube-section"
      ref={sectionRef}
    >
      <div className="background-word">
        SERVICES
      </div>

      <div className="service-header">
        <span>WHAT WE DO BEST</span>

        <h2>
          Expertise That
          <br />
          Drives Growth
        </h2>
      </div>

      <div className="service-layout">

        {/* ================= LEFT ================= */}

        <div className="cube-area">

          <div className="cube-wrapper">

            <div
              ref={cubeRef}
              className="cube"
            >
              <div className="face front">
                <span>01</span>
              </div>

              <div className="face right">
                <span>02</span>
              </div>

              <div className="face back">
                <span>03</span>
              </div>

              <div className="face left">
                <span>04</span>
              </div>

            </div>

          </div>

          <div className="cube-navigation">

            {services.map((service, index) => (

              <button
                key={service.number}
                className={
                  activeFace === index
                    ? "nav-number active"
                    : "nav-number"
                }
                onClick={() => rotateCube(index)}
              >
                {service.number}
              </button>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="content-panel">

          <div
            ref={contentRef}
            key={activeFace}
            className="content-inner"
          >

            <div className="content-tag">
              {services[activeFace].number}
            </div>

            <h3 className="service-title">
              {services[activeFace].title}
            </h3>

            <p className="service-description">
              {services[activeFace].description}
            </p>

            <div className="features-grid">

              {services[activeFace].features.map((feature) => (

                <div
                  key={feature}
                  className="feature-card"
                >
                  {feature}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}