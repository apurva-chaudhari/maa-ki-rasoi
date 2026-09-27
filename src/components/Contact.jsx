// Contact.jsx
function Contact() {
  return (
    <div className="page contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Order Your Tiffin</p>
        <h1>Get In Touch</h1>
        <p className="hero-sub">
          Call or WhatsApp to start your monthly tiffin subscription, or for
          a one-time order.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <span className="contact-icon">📞</span>
          <p className="contact-label">Call Us</p>
          <p className="contact-value">+91 98765 43210</p>
        </div>
        <div className="contact-card whatsapp-card">
          <span className="contact-icon">💬</span>
          <p className="contact-label">WhatsApp Order</p>
          <p className="contact-value">+91 98765 43210</p>
          <button className="whatsapp-btn">Chat on WhatsApp</button>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <p className="contact-label">Kitchen Address</p>
          <p className="contact-value">
            12, Shastri Nagar, Near Bus Stop, Pune
          </p>
        </div>
        <div className="contact-card">
          <span className="contact-icon">⏰</span>
          <p className="contact-label">Order Timing</p>
          <p className="contact-value">7:00 AM – 9:30 AM daily</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;