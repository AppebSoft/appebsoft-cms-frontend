// src/components/contact/ContactHero.jsx

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  sanitizePhoneInput,
  handlePhoneKeyDown,
  validateIndianPhone,
} from "../../utils/phoneValidation";
import { useSiteSettings } from "../../services/useCms";
import { submitContactForm } from "../../services/cmsApi";

import "./ContactHero.css";

function ContactHero() {
  const { data: settings } = useSiteSettings();
  const whatsappUrl = settings?.whatsapp_url || "https://wa.me/919836717849?text=Hello%20AppebSoft%2C%20I%20would%20like%20to%20get%20a%20free%20consultation";

  // Controlled field state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Form status state
  const [phoneError, setPhoneError] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const recaptchaRef = useRef(null);

  const onPhoneChange = (e) => {
    setPhone(sanitizePhoneInput(e.target.value));
    if (phoneError) setPhoneError(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const phoneValidationError = validateIndianPhone(phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      return;
    }
    setPhoneError(null);

    const recaptchaToken = recaptchaRef.current?.getValue();
    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA.");
      return;
    }

    setRecaptchaError(null);
    setSubmitError(null);
    setSubmitting(true);

    try {
      const data = await submitContactForm({
        fullName,
        email,
        phone,
        company,
        service,
        message,
        recaptchaToken,
      });

      if (data.success) {
        setSubmitted(true);
        setFullName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setService("");
        setMessage("");
        recaptchaRef.current?.reset();
      } else {
        setSubmitError(data.message || data.error || "Failed to send message.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      setSubmitError("Network error — please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-hero">
      {/* BACKGROUND */}
      <div className="contact-bg"></div>
      <div className="contact-grid"></div>
      <div className="noise-layer"></div>

      <div className="contact-container">
        {/* LEFT CONTENT */}
        <div className="contact-content">
          <span className="contact-tag">
            CONTACT APPEBSOFT
          </span>

          <div className="contact-headline">
            <h1>
              Let's Build
              <br />
              Something
              <br />
              Amazing
              <br />
              Together.
            </h1>
          </div>

          <p className="contact-description">
            Whether you need a website, mobile application,
            enterprise software, ecommerce platform or digital
            transformation solution, our experts are ready to
            help turn your ideas into reality.
          </p>

          <div className="contact-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn1"
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              Get Free Consultation
              <ArrowRight size={18}/>
            </a>

            <Link
              to="/portfolio"
              className="secondary-btn"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
            >
              View Portfolio
            </Link>
          </div>

          <div className="contact-highlights">
            <div className="highlight">
              <div className="highlight-icon">
                <Phone size={22}/>
              </div>
              <div>
                <h4>Call Us</h4>
                <a href={`tel:${settings?.phone?.replace(/\s/g, '') || '+919836717849'}`} style={{ color: "inherit", textDecoration: "none" }}>{settings?.phone || "+91 98367 17849"}</a>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">
                <Mail size={22}/>
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${settings?.email || 'contact@appebsoft.com'}`} style={{ color: "inherit", textDecoration: "none" }}>{settings?.email || "contact@appebsoft.com"}</a>
              </div>
            </div>

            <div className="highlight">
              <div className="highlight-icon">
                <MapPin size={22}/>
              </div>
              <div>
                <h4>Office</h4>
                <span>{settings?.address ? settings.address.split(',').slice(-2).join(',').trim() : "Uttarpara, West Bengal"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="contact-form-wrapper" id="contact-form-card">
          <div className="contact-card">
            <span className="card-tag">
              QUICK RESPONSE
            </span>

            <h2>Send Us A Message</h2>

            <p>
              Fill out the form and our team will get
              back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                <button
                  className="submit-btn"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '16px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="91 9477025830"
                    value={phone}
                    onChange={onPhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    maxLength={13}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                {phoneError && (
                  <p role="alert" style={{ fontSize: '12px', color: '#ff4d4f' }}>
                    {phoneError}
                  </p>
                )}

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Select Service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Software Development</option>
                  <option>Ecommerce Development</option>
                  <option>UI/UX Design</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                {/* reCAPTCHA */}
                <div style={{ margin: '16px 0' }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}
                    onChange={() => setRecaptchaError(null)}
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
                  className="submit-btn"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : (
                    <>Send Message <ArrowRight size={18}/></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;