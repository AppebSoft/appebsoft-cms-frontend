import "./ContactMapSection.css";

function ContactMapSection() {
  return (
    <section className="contact-map-section">

      <div className="container">

        <div className="map-heading">

          <span>OUR LOCATION</span>

          <h2>
            Visit Our Office
          </h2>

          <p>
            We'd love to meet you. Visit our office or schedule
            a meeting with our team.
          </p>

        </div>

        <div className="map-wrapper">

          <iframe
            title="AppebSoft Location"
            src="https://www.google.com/maps?q=AppebSoft%20Pvt%20Ltd%20Kolkata&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

        <div className="container" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
            <strong>AppebSoft</strong> — Uttarpara, West Bengal, India | Phone: <a href="tel:+919836717849" style={{ color: '#62bdec' }}>+91 98367 17849</a> | Email: <a href="mailto:contact@appebsoft.com" style={{ color: '#62bdec' }}>contact@appebsoft.com</a>
          </p>
        </div>

      </div>

    </section>
  );
}

export default ContactMapSection;