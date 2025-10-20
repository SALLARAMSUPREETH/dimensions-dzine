import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide buttons based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`floating-buttons-new ${isVisible ? 'visible' : ''}`}>
      {/* Contact Us Button */}
      <Link to="/contact" className="floating-btn-new contact-btn-new" title="Contact Us">
        <div className="btn-icon-new">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <path d="M13 8H7"/>
            <path d="M17 12H7"/>
          </svg>
        </div>
        <span className="btn-text-new">Contact Us</span>
      </Link>

      {/* Go to Top Button */}
      <button 
        className="floating-btn-new top-btn-new"
        onClick={scrollToTop}
        title="Go to Top"
        aria-label="Go to top"
      >
        <div className="btn-icon-new">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </div>
        <span className="btn-text-new">Go to Top</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
