import { useState } from 'react';
import './ServiceAccordion.css';

const ServiceAccordion = ({ features }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent parent card click
    setIsOpen(!isOpen);
  };

  return (
    <div className="service-accordion" onClick={(e) => e.stopPropagation()}>
      <button 
        className={`accordion-toggle ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span>View Details</span>
        <svg 
          className="accordion-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
        >
          <path 
            d="M5 7.5L10 12.5L15 7.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <ul className="service-features-mobile">
          {features.map((feature, index) => (
            <li key={index} className="feature-item-mobile">
              <span className="feature-icon-mobile">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceAccordion;
