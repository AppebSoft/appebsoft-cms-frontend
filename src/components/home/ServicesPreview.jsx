import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useServices } from "../../services/useCms";

import "./ServicesPreview.css";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_SERVICES = [
  {
    title: "Web Development",
    short_description:
      "High performance websites built for speed, conversions and scalability.",
  },
  {
    title: "Mobile Applications",
    short_description:
      "Native and cross platform apps delivering exceptional user experiences.",
  },
  {
    title: "UI/UX Design",
    short_description:
      "Beautiful interfaces designed to engage and convert users.",
  },
  {
    title: "Custom Software",
    short_description:
      "Enterprise solutions tailored for business growth and automation.",
  },
];

function ServicesPreview() {
  const { data: apiServices } = useServices();
  const services = apiServices?.length ? apiServices : FALLBACK_SERVICES;

  useEffect(() => {
    gsap.from(".service-preview-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".services-preview",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section className="services-preview">

      <div className="container">

        <span className="section-tag">
          Services
        </span>

        <h2 className="services-title">
          Transforming Ideas Into
          Digital Excellence
        </h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="service-preview-card"
            >
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{service.title}</h3>

              <p>{service.short_description}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;