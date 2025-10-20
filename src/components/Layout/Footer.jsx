import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaClock, FaAward, FaUsers, FaHome, FaTools, FaLightbulb, FaSolarPanel, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="modern-footer">
      
      <div className="footer-content">
        {/* Contact & Social Links */}
        <div className="footer-links-section">
          <div className="footer-links-grid">
            
            {/* Contact Information */}
            <div className="footer-column contact-info">
              <h4 className="footer-title">Get in Touch</h4>
              <div className="contact-links">
                <a 
                  href="tel:+917093117486" 
                  className="contact-link phone-link"
                  aria-label="Call us"
                >
                  <FaPhone className="contact-icon" />
                  <span>+91 70931 17486</span>
                </a>
                
                <a 
                  href="mailto:dimensionsdzine@gmail.com" 
                  className="contact-link email-link"
                  aria-label="Send us an email"
                >
                  <FaEnvelope className="contact-icon" />
                  <span>dimensionsdzine@gmail.com</span>
                </a>
                
                <div className="contact-link address-link">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="footer-column social-media">
              <h4 className="footer-title">Social Media</h4>
              <div className="social-links">
                <a 
                  href="http://instagram.com/dimensionsdzine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram-link"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="social-icon" />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://api.whatsapp.com/send/?phone=917093117486&text=Hey!%20I%20came%20across%20your%20website%20dimensionsdzine.com%20and%20wanted%20to%20reach%20out.&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link whatsapp-link"
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp className="social-icon" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Links - Space for future additions */}
            <div className="footer-column quick-links">
              <h4 className="footer-title">Quick Links</h4>
              <div className="quick-links-list">
                <Link to="/" className="quick-link">Home</Link>
                <Link to="/about" className="quick-link">About</Link>
                <Link to="/services" className="quick-link">Services</Link>
                <Link to="/portfolio" className="quick-link">Portfolio</Link>
                <Link to="/contact" className="quick-link">Contact</Link>
              </div>
            </div>

                {/* Services */}
                <div className="footer-column services-links">
                  <h4 className="footer-title">Our Services</h4>
                  <div className="services-links-list">
                    <Link to="/services/construction" className="service-link">Construction</Link>
                    <Link to="/services" className="service-link">Interior Design</Link>
                    <Link to="/services" className="service-link">Renovation</Link>
                    <Link to="/services" className="service-link">Consultation</Link>
                    <Link to="/services" className="service-link">3D Visualization</Link>
                    <Link to="/services" className="service-link">Material Sourcing</Link>
                  </div>
                </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Dimensions Dzine. All rights reserved.
            </p>
            <p className="tagline">
              Crafting spaces that inspire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
