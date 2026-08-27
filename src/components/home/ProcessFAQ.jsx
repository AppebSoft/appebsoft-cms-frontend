import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ProcessFAQ.css";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects are completed within 4 to 12 weeks depending on scope."
  },
  {
    question: "Do you provide post launch support?",
    answer:
      "Yes. We provide maintenance, monitoring and ongoing improvements."
  },
  {
    question: "Can you redesign existing software?",
    answer:
      "Absolutely. We modernize websites, applications and platforms."
  },
  {
    question: "What technologies do you use?",
    answer:
      "React, Next.js, Node.js, MongoDB, PostgreSQL, AWS and many more."
  }
];

const process = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Testing",
  "Launch"
];

function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    gsap.from(".timeline-step", {
      opacity: 0,
      y: 80,
      stagger: 0.15,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-section",
        start: "top 70%"
      }
    });

    gsap.from(".faq-item", {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 75%"
      }
    });
  }, []);

  return (
    <section className="process-faq">

      <div className="container">

        <div className="process-section">

          <span className="section-tag">
            Our Process
          </span>

          <h2>
            How We Transform Ideas
            Into Digital Products
          </h2>

          <div className="timeline">

            {process.map((step, index) => (
              <div
                className="timeline-step"
                key={index}
              >
                <div className="timeline-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>
              </div>
            ))}

          </div>

        </div>

        <div className="faq-section">

          <span className="section-tag">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                openIndex === index
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >
                {faq.question}

                <span>
                  {openIndex === index
                    ? "−"
                    : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  openIndex === index
                    ? "show"
                    : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProcessFAQ;