// About.jsx
// Tells the cook's story + her specialties + the promise.

function About() {
  return (
    <div className="page about-page">
      <section className="about-hero">
        <div className="cook-photo">👩‍🍳</div>
        <div>
          <p className="eyebrow">The Story Behind Every Tiffin</p>
          <h1>Meet Sunita Ji</h1>
          <p className="hero-sub">
            15 years ago, Sunita Ji started cooking for 3 hostel students in
            her neighborhood who missed home food. Today, she cooks fresh
            tiffins for over 120 families and students every single day —
            still in the same kitchen, still with the same recipes her
            mother taught her.
          </p>
        </div>
      </section>

      <section className="specialty-section">
        <h2>Her Specialties</h2>
        <div className="specialty-row">
          <div className="specialty-card">
            <span className="specialty-icon">🥘</span>
            <p>Punjabi Dal Tadka</p>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">🫓</span>
            <p>Soft Phulka Rotis</p>
          </div>
          <div className="specialty-card">
            <span className="specialty-icon">🍛</span>
            <p>Home-style Rajma</p>
          </div>
        </div>
      </section>

      <section className="promise-section">
        <h2>Our Promise</h2>
        <ul className="promise-list">
          <li>Cooked fresh every morning — never previous day's food</li>
          <li>No artificial colors or preservatives</li>
          <li>Steel tiffins, not plastic — better for food and environment</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
