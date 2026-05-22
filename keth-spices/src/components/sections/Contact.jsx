import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  // 🔁 IMPORTANT: Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_3il22n5';     // e.g., 'service_abc123'
  const TEMPLATE_ID = 'template_q3dwdo8';   // e.g., 'template_xyz789'
  const PUBLIC_KEY = '30i_F3j96iXVTapG7';     // e.g., '5eFg7...'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setIsLoading(false);
        setFormMessage('✅ Message sent successfully! We will get back to you soon.');
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsLoading(false);
        setFormMessage('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">📞 Get in Touch</span>
          <h2>Let’s Talk Spices</h2>
          <p>Need help with bulk orders? Want to partner with us? Just drop a message.</p>
        </div>

        <div className="contact-grid">
          {/* Left side – Contact Info (same as before) */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Our Address</h3>
                <p>Ashok Nagar, Kanpur - 208012<br />Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call / WhatsApp</h3>
                <p><a href="tel:+916389709762">+91 63897 09762</a></p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:info@khethspices.com">info@khethspices.com</a></p>
              </div>
            </div>
            <br /><br /><br />
            <a href="https://wa.me/916389709762" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              📲 Chat on WhatsApp
            </a>
          </div>

          {/* Right side – Email Form with EmailJS */}
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" name="user_phone" placeholder="Phone Number (optional)" />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message ➤'}
              </button>
            </form>
            {formMessage && <p className="form-message">{formMessage}</p>}
            <p className="form-note">We’ll get back to you within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}