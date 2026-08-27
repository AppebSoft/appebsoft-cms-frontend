import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReCAPTCHA from "react-google-recaptcha";

import { submitStartProjectForm } from "../../services/cmsApi";

import "./NextChapter.css";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TYPES = [
  "Web Platform",
  "Mobile App",
  "AI Solution",
  "Digital Marketing",
  "Custom Software",
];

function NextChapter() {
  const sectionRef = useRef();

  // Controlled field state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  // Form status state
  const [recaptchaError, setRecaptchaError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const recaptchaRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA.");
      return;
    }

    setRecaptchaError(null);
    setSubmitError(null);
    setSubmitting(true);

    try {
      const data = await submitStartProjectForm({ name, email, company, projectType, message, recaptchaToken });

      if (data.success) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setCompany("");
        setProjectType("");
        setMessage("");
        recaptchaRef.current?.reset();
      } else {
        setSubmitError(data.message || data.error || "Failed to send message.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      setSubmitError(err.message || "Network error — please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chapter-label", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".chapter-title span", {
        y: 150,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".chapter-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".conversation-left > *", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".chapter-conversation",
          start: "top 75%",
        },
      });

      gsap.from(".premium-form", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".premium-form",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="next-chapter"
      ref={sectionRef}
    >
      <div className="chapter-bg-text">
        CHAPTER 02
      </div>

      <div className="chapter-content">

        <span className="chapter-label">
          THE JOURNEY CONTINUES
        </span>

        <h2 className="chapter-title">
          <span>YOUR</span>
          <span>IDEA</span>
          <span>BECOMES</span>
          <span>REALITY.</span>
        </h2>

        <div className="chapter-line" />

        <div className="chapter-conversation">

          <div className="conversation-left">

            <span>LET'S TALK</span>

            <h3>
              Tell Us What
              You're Building.
            </h3>

            <p>
              Whether you're launching a startup,
              scaling an existing business,
              building an AI platform or creating
              the next big thing, we're ready
              to help bring it to life.
            </p>

          </div>

          <div className="conversation-right">

            <div className="form-bg">
              CREATE
            </div>

            {submitted ? (
              <div className="premium-form chapter-success">
                <div className="chapter-success-icon">✓</div>
                <h3>Got it — we'll reach out shortly.</h3>
                <p>Thank you for sharing your project idea. Our team will be in touch soon.</p>
                <button
                  className="submit-btn1"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px' }}
                >
                  Start Another Project
                </button>
              </div>
            ) : (
              <form className="premium-form" onSubmit={onSubmit}>

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="project-types">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`type-pill${projectType === type ? " active" : ""}`}
                      onClick={() => setProjectType(projectType === type ? "" : type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="input-group">
                  <textarea
                    rows="5"
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* reCAPTCHA */}
                <div style={{ margin: '16px 0' }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}
                    onChange={() => setRecaptchaError(null)}
                    theme="dark"
                  />
                  {recaptchaError && (
                    <p role="alert" style={{ fontSize: '12px', color: '#ff4d4f', marginTop: '6px' }}>
                      {recaptchaError}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p role="alert" style={{ fontSize: '14px', color: '#ff4d4f', marginBottom: '10px', fontWeight: 500 }}>
                    {submitError}
                  </p>
                )}

                <button
                  className="submit-btn1"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "SENDING…" : "START PROJECT →"}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default NextChapter;