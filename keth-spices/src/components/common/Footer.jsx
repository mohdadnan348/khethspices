import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>🌿 Kheth Spices</h3>
          <p>Pure, Natural, Homemade Masale</p>
          <p className="copyright">© 2026 Keth Spices. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Spices</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>📍 Ashok Nagar, Kanpur - 208012</li>
            <li>📞 <a href="tel:+916389709762">+91 63897 09762</a></li>
            <li>✉️ <a href="mailto:info@khethsipcies.com">info@khethsipcies.com</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a href="https://instagram.com/kethspices" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/kethspices" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kethspices" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}