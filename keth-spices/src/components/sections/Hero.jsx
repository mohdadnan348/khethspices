import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">✨ New Launch ✨</span>
        <h1 className="hero-title">
          Kheth Spices
          <span className="hero-subtitle">Pure • Natural • Homemade</span>
        </h1>
        <p className="hero-description">
          We are launching <strong>4 new spice blends</strong> – stone-ground in small batches, with no chemicals or artificial colors.  
          Authentic aroma, just like home.
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn-primary">🍛 Explore Spices</a>
          <a href="https://wa.me/916389709762" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            📞 Join on WhatsApp
          </a>
        </div>
        <div className="hero-launch-date">
          🚀 Launching Soon – May 2026
        </div>
      </div>
    </section>
  );
}