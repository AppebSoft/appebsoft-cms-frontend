import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useServices } from "../../services/useCms";
import "./ServicesUniverse.css";

const FALLBACK_SERVICES = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "Brand Identity",
  "AI Solutions",
  "Cloud Services",
  "Ecommerce",
  "CRM Systems",
  "ERP Solutions",
  "Maintenance",
];

function ServicesUniverse() {
  const { data: apiServices } = useServices();
  const services = apiServices && apiServices.length > 0
    ? apiServices.map((s) => s.title)
    : FALLBACK_SERVICES;
  const sectionRef = useRef(null);

useEffect(() => {

  const ctx = gsap.context(() => {

    const cards = gsap.utils.toArray(".service-card");


    gsap.set(cards, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    });


    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay:0.2,
      }
    );


    const handleMove = (e) => {

      const x =
        (window.innerWidth / 2 - e.clientX) / 40;

      const y =
        (window.innerHeight / 2 - e.clientY) / 40;


      gsap.to(cards, {

        rotateY:x,

        rotateX:y,

        transformPerspective:1000,

        transformOrigin:"center",

        duration:0.5,

        ease:"power2.out",

      });

    };


    window.addEventListener(
      "mousemove",
      handleMove
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMove
      );

    };


  }, sectionRef);


  return () => ctx.revert();


}, []);

  return (
    <section className="services-3d" ref={sectionRef}>
      <div className="services-head">
        <span>OUR SERVICES</span>
        <h2>Interactive Digital Capabilities</h2>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesUniverse;