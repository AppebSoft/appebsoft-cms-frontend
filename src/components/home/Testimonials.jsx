import { useState, useEffect } from "react";
import gsap from "gsap";
import { useTestimonials } from "../../services/useCms";

import "./Testimonials.css";

const FALLBACK_TESTIMONIALS = [
  {
    client_name: "John Smith",
    client_company: "TechCorp",
    client_avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "AppebSoft completely transformed our digital presence and increased our conversions significantly."
  },
  {
    client_name: "Sarah Wilson",
    client_company: "Finova",
    client_avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Their design and development team delivered beyond expectations."
  },
  {
    client_name: "Michael Brown",
    client_company: "HealthSync",
    client_avatar:
      "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "Professional, innovative and highly reliable. A true technology partner."
  }
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const { data: apiTestimonials, loading } = useTestimonials();
  const testimonials = apiTestimonials?.length ? apiTestimonials : FALLBACK_TESTIMONIALS;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial-active",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1
      }
    );
  }, [active]);

  return (
    <section className="testimonials">

      <div className="container">

        <span className="section-tag">
          Testimonials
        </span>

        <h2>
          Trusted By Fast Growing
          Companies Worldwide
        </h2>

        <div className="testimonial-wrapper">

          <div className="testimonial-active">

            <img
              src={testimonials[active].client_avatar}
              alt=""
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.svg'; }}
            />

            <p>
              "{testimonials[active].quote}"
            </p>

            <h3>
              {testimonials[active].client_name}
            </h3>

            <span>
              {testimonials[active].client_company}
            </span>

          </div>

        </div>

        <div className="testimonial-nav">

          {testimonials.map((_, index) => (
            <button
              key={index}
              className={
                active === index
                  ? "active-dot"
                  : ""
              }
              onClick={() =>
                setActive(index)
              }
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;