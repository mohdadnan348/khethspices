import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-text">
            <span className="about-badge">🌿 Our Story</span>
            <h2>Keth Spices – Born in Kanpur</h2>
            <p className="about-lead">
              We bring you <strong>fresh, chemical‑free spices</strong> – just like homemade, but in a pack.
            </p>
            <p>
              Keth Spices started its journey in Kanpur in 2026. We believe that good food is the one made without any adulteration. 
              That’s why our spices have <strong>no artificial colors, no preservatives</strong>. Just <strong>100% natural, hand‑pounded blends</strong> 
              that bring back the authentic taste to your dal, sabzi, or meat dishes.
            </p>
            <p>
              We grind in small batches so that every packet stays fresh. In a world of machine‑made everything, we are trying to bring back 
              the <strong>traditional stone‑mill flavor</strong> to your kitchen.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic & Natural</span>
              </div>
              <div className="stat">
                <span className="stat-number">0%</span>
                <span className="stat-label">Color / Preservatives</span>
              </div>
              <div className="stat">
                <span className="stat-number">EST 2026</span>
                <span className="stat-label">Kanpur, India</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="https://images.pexels.com/photos/6646194/pexels-photo-6646194.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Traditional Indian spices in wooden bowls"
                loading="lazy"
              />
              <div className="floating-card">
                <span>🌶️ Hand Pounded</span>
                <span>✨ No Preservatives</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-row">
          <div className="feature">
            <div className="feature-icon">🌾</div>
            <h3>100% Natural</h3>
            <p>No artificial colors, no MSG, no fillers. Pure and clean.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🏡</div>
            <h3>Direct from Kitchen</h3>
            <p>Small batch, fresh quality. Just like home.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📦</div>
            <h3>Eco‑Friendly Packing</h3>
            <p>Plastic‑free, food‑grade packaging. Committed to nature.</p>
          </div>
        </div>
      </div>
    </section>
  );
}