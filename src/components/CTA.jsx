import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to Transform Your <span className="cta-highlight">Space?</span>
            </h2>
            <p className="cta-subtitle">
              Let's discuss your project and bring your vision to life with our expert design team
            </p>
          </div>
          
          <div className="cta-actions">
            <Link to="/contact" className="cta-primary-btn">
              <span>Get Free Consultation</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/portfolio" className="cta-secondary-btn">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
