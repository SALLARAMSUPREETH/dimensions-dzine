import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdArrowBack, MdCheck, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaPencilRuler, FaCube, FaPaintBrush, FaCouch, FaTools, FaCheckCircle } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { formatCurrency } from '../config/pricing';
import LazyImage from '../components/LazyImage';
import { useLoading } from '../contexts/LoadingContext';
import './FullHomeInteriorStepper.css';

const WardrobeCalculator = () => {
  const { startLoading, stopLoading } = useLoading();
  const [currentStep, setCurrentStep] = useState(1);
  const [wardrobeDetails, setWardrobeDetails] = useState({
    numberOfWardrobes: 1,
    wardrobeType: '2-door',
    includesLoft: false,
    includeMirror: false
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const steps = [
    { id: 1, title: 'Wardrobe Details', description: 'Select your options' },
    { id: 2, title: 'Package', description: 'Pick your package' },
    { id: 3, title: 'Estimate', description: 'View your estimate' }
  ];

  const packages = [
    {
      id: 'essentials',
      title: 'Essentials (₹₹)',
      description: 'Quality wardrobes with essential features and standard finishes.',
      features: ['Standard materials', 'Basic hardware', 'Essential accessories'],
      multiplier: 1.0,
      image: '/images/Home-011_1-p-1080.jpeg'
    },
    {
      id: 'premium',
      title: 'Premium (₹₹₹)',
      description: 'Enhanced wardrobes with premium materials and modern accessories.',
      features: ['Premium materials', 'Quality hardware', 'Designer accessories'],
      multiplier: 1.5,
      image: '/images/Home-016_1-p-1080.jpeg'
    },
    {
      id: 'luxe',
      title: 'Luxe (₹₹₹₹)',
      description: 'Luxury wardrobes with high-end finishes and smart features.',
      features: ['Luxury materials', 'Premium hardware', 'Smart accessories'],
      multiplier: 2.2,
      image: '/images/Home-020_1-p-1080.jpeg'
    }
  ];

  const wardrobeTypes = {
    '2-door': { name: '2-Door Wardrobe', basePrice: 35000 },
    '3-door': { name: '3-Door Wardrobe', basePrice: 50000 },
    '4-door': { name: '4-Door Wardrobe', basePrice: 65000 },
    'sliding': { name: 'Sliding Door Wardrobe', basePrice: 55000 }
  };

  const toggleAccordion = (section) => {
    setAccordionOpen(accordionOpen === section ? null : section);
  };

  const calculateEstimate = () => {
    if (!selectedPackage) return;

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowLoader = currentScrollPosition > 50;
    
    if (shouldShowLoader) startLoading();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const packageData = packages.find(pkg => pkg.id === selectedPackage);
    const wardrobeTypeData = wardrobeTypes[wardrobeDetails.wardrobeType];
    
    const baseWardrobeCost = Math.round(
      wardrobeTypeData.basePrice * 
      wardrobeDetails.numberOfWardrobes * 
      packageData.multiplier
    );
    
    const loftCost = wardrobeDetails.includesLoft ? (wardrobeDetails.numberOfWardrobes * 8000) : 0;
    const mirrorCost = wardrobeDetails.includeMirror ? (wardrobeDetails.numberOfWardrobes * 5000) : 0;
    
    const baseAmount = baseWardrobeCost + loftCost + mirrorCost;
    
    const designFees = 10000;
    const installationFees = 15000;
    const serviceFees = designFees + installationFees;
    
    const subtotal = baseAmount + serviceFees;
    const gst = Math.round(subtotal * 0.18);
    const finalAmount = subtotal + gst;
    
    const estimatedWeeks = Math.max(2, Math.min(6, wardrobeDetails.numberOfWardrobes * 1.5));
    
    setEstimate({
      finalAmount,
      packageMultiplier: packageData.multiplier,
      package: packageData,
      details: wardrobeDetails,
      wardrobeType: wardrobeTypeData.name,
      baseWardrobeCost,
      loftCost,
      mirrorCost,
      baseAmount,
      serviceFees,
      designFees,
      installationFees,
      gst,
      subtotal,
      estimatedWeeks
    });
    
    setTimeout(() => {
      setCurrentStep(3);
      if (shouldShowLoader) {
        setTimeout(() => stopLoading(), 150);
      }
    }, 50);
  };

  const navigateToStep = (newStep) => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowLoader = currentScrollPosition > 50;
    
    if (shouldShowLoader) startLoading();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setCurrentStep(newStep);
      if (shouldShowLoader) {
        setTimeout(() => stopLoading(), 150);
      }
    }, 50);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      if (currentStep === 2 && !selectedPackage) {
        alert('Please select a package');
        return;
      }
      navigateToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) navigateToStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2>Wardrobe Details</h2>
            <p>Tell us about your wardrobe requirements</p>
            <div className="rooms-grid">
              <div className="room-card">
                <span className="room-name">Number of Wardrobes</span>
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => setWardrobeDetails({...wardrobeDetails, numberOfWardrobes: Math.max(1, wardrobeDetails.numberOfWardrobes - 1)})}
                    disabled={wardrobeDetails.numberOfWardrobes <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{wardrobeDetails.numberOfWardrobes}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => setWardrobeDetails({...wardrobeDetails, numberOfWardrobes: wardrobeDetails.numberOfWardrobes + 1})}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="room-card" style={{gridColumn: '1 / -1'}}>
                <span className="room-name">Wardrobe Type</span>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1rem'}}>
                  {Object.entries(wardrobeTypes).map(([key, value]) => (
                    <button
                      key={key}
                      type="button"
                      className={`quantity-btn toggle-btn ${wardrobeDetails.wardrobeType === key ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setWardrobeDetails({...wardrobeDetails, wardrobeType: key});
                      }}
                      style={{width: '100%', padding: '0.875rem', fontSize: '0.95rem'}}
                    >
                      {value.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="room-card">
                <span className="room-name">Include Loft?</span>
                <div className="quantity-selector">
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${!wardrobeDetails.includesLoft ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setWardrobeDetails({...wardrobeDetails, includesLoft: false});
                    }}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${wardrobeDetails.includesLoft ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setWardrobeDetails({...wardrobeDetails, includesLoft: true});
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>

              <div className="room-card">
                <span className="room-name">Include Mirror?</span>
                <div className="quantity-selector">
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${!wardrobeDetails.includeMirror ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setWardrobeDetails({...wardrobeDetails, includeMirror: false});
                    }}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${wardrobeDetails.includeMirror ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setWardrobeDetails({...wardrobeDetails, includeMirror: true});
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2>Pick your package</h2>
            <div className="packages-grid">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <div className="package-image">
                    <LazyImage src={pkg.image} alt={`${pkg.title} wardrobe`} />
                    <div className="package-overlay">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.id}
                          checked={selectedPackage === pkg.id}
                          onChange={() => setSelectedPackage(pkg.id)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="package-content">
                    <div className="package-info">
                      <h3>{pkg.title}</h3>
                      <p>{pkg.description}</p>
                    </div>
                    <div className="package-features">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <MdCheck className="check-icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2>Your Wardrobe Estimate</h2>
            <p>Complete breakdown of your {estimate?.package?.title} package</p>
            
            <div className="estimate-display">
              <div className="project-overview-section">
                <h4>Project Overview</h4>
                <div className="overview-grid">
                  <div className="overview-item">
                    <span className="detail-label">Number of Wardrobes</span>
                    <span className="detail-value">{estimate?.details?.numberOfWardrobes}</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Wardrobe Type</span>
                    <span className="detail-value">{estimate?.wardrobeType}</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Package Selected</span>
                    <span className="detail-value">{estimate?.package?.title}</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Estimated Timeline</span>
                    <span className="detail-value">{estimate?.estimatedWeeks} weeks</span>
                  </div>
                </div>
              </div>

              <div className="price-breakdown">
                <h4>Detailed Cost Breakdown</h4>
                <div className="breakdown-accordion">
                  <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion('wardrobe')}>
                      <div className="accordion-title">
                        <span>Wardrobe Components</span>
                      </div>
                      <div className="accordion-price">
                        {formatCurrency(estimate?.baseAmount || 0)}
                      </div>
                      <div className="accordion-arrow">
                        {accordionOpen === 'wardrobe' ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                    <div className={`accordion-content ${accordionOpen === 'wardrobe' ? 'accordion-open' : 'accordion-closed'}`}>
                      <div className="breakdown-items">
                        <div className="breakdown-item">
                          <span>{estimate?.wardrobeType} ({estimate?.details?.numberOfWardrobes} units)</span>
                          <span>{formatCurrency(estimate?.baseWardrobeCost || 0)}</span>
                        </div>
                        {estimate?.loftCost > 0 && (
                          <div className="breakdown-item">
                            <span>Loft Addition</span>
                            <span>{formatCurrency(estimate?.loftCost)}</span>
                          </div>
                        )}
                        {estimate?.mirrorCost > 0 && (
                          <div className="breakdown-item">
                            <span>Mirror Addition</span>
                            <span>{formatCurrency(estimate?.mirrorCost)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion('services')}>
                      <div className="accordion-title">
                        <span>Professional Services</span>
                      </div>
                      <div className="accordion-price">
                        {formatCurrency(estimate?.serviceFees || 0)}
                      </div>
                      <div className="accordion-arrow">
                        {accordionOpen === 'services' ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                    <div className={`accordion-content ${accordionOpen === 'services' ? 'accordion-open' : 'accordion-closed'}`}>
                      <div className="breakdown-items">
                        <div className="breakdown-item">
                          <span>Design & Planning</span>
                          <span>{formatCurrency(estimate?.designFees || 0)}</span>
                        </div>
                        <div className="breakdown-item">
                          <span>Installation & Setup</span>
                          <span>{formatCurrency(estimate?.installationFees || 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cost-summary">
                    <div className="summary-item">
                      <span>Subtotal</span>
                      <span>{formatCurrency(estimate?.subtotal || 0)}</span>
                    </div>
                    <div className="summary-item">
                      <span>GST (18%)</span>
                      <span>{formatCurrency(estimate?.gst || 0)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="estimate-amount">
                <div className="amount-header">
                  <span className="amount-label">Total Project Cost</span>
                  <span className="amount-note">(Including GST)</span>
                </div>
                <span className="amount">{formatCurrency(estimate?.finalAmount || 0)}</span>
              </div>
            </div>

            <div className="whats-included-section">
              <h4>What's Included in Your Package</h4>
              <div className="included-grid">
                <div className="included-item">
                  <div className="included-icon"><FaPencilRuler /></div>
                  <div className="included-content">
                    <strong>Custom Design</strong>
                    <span>Personalized wardrobe design and planning</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaCube /></div>
                  <div className="included-content">
                    <strong>Quality Materials</strong>
                    <span>Premium laminates and hardware</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaPaintBrush /></div>
                  <div className="included-content">
                    <strong>Premium Finishes</strong>
                    <span>Designer handles and accessories</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaCouch /></div>
                  <div className="included-content">
                    <strong>Internal Fittings</strong>
                    <span>Shelves, drawers, and organizers</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaTools /></div>
                  <div className="included-content">
                    <strong>Professional Installation</strong>
                    <span>Expert installation with quality workmanship</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaCheckCircle /></div>
                  <div className="included-content">
                    <strong>Quality Assurance</strong>
                    <span>Regular inspections and quality checks</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="trust-badges">
              <div className="trust-badge">
                <span className="badge-icon">⭐</span>
                <div className="badge-content">
                  <strong>4.9/5 Rating</strong>
                  <span>200+ Happy Clients</span>
                </div>
              </div>
              <div className="trust-badge">
                <span className="badge-icon">🏆</span>
                <div className="badge-content">
                  <strong>10+ Years</strong>
                  <span>Industry Experience</span>
                </div>
              </div>
              <div className="trust-badge">
                <span className="badge-icon">✓</span>
                <div className="badge-content">
                  <strong>Quality Assured</strong>
                  <span>Premium Materials</span>
                </div>
              </div>
            </div>
            
            <div className="contact-section">
              <div className="contact-content">
                <h3>Ready to Start Your Wardrobe Project?</h3>
                <p>Book a free consultation with our design experts. Get personalized designs and exact pricing.</p>
                <div className="contact-cta">
                  <Link to="/contact" className="cta-button primary">
                    <span>Book Free Consultation</span>
                    <span className="cta-arrow">→</span>
                  </Link>
                  <a href="tel:+917093117486" className="cta-button secondary">
                    <span>Call: +91 70931 17486</span>
                  </a>
                </div>
                <div className="contact-benefits">
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Free home visit & consultation</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Personalized wardrobe design</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Detailed project timeline</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">✓</span>
                    <span>Transparent pricing breakdown</span>
                  </div>
                </div>
                <div className="download-estimate">
                  <button className="download-btn" onClick={() => window.print()}>
                    <span>📄 Download This Estimate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        <section className="stepper-hero">
          <div className="stepper-container">
            <div className="stepper-header">
              <h1>Wardrobe Design Estimate</h1>
              <p>Get a detailed estimate for your custom wardrobe project</p>
            </div>
            
            <div className="stepper-progress">
              <div className="progress-bar">
                {steps.map((step, index) => (
                  <div key={step.id} className="progress-step">
                    <div className={`step-circle ${currentStep >= step.id ? 'active' : ''}`}>
                      {currentStep > step.id ? <MdCheck /> : step.id}
                    </div>
                    <div className="step-info">
                      <span className="step-title">{step.title}</span>
                      <span className="step-description">{step.description}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`step-connector ${currentStep > step.id ? 'active' : ''}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="stepper-content">
              <div className="step-card">
                {renderStepContent()}
                
                <div className="step-navigation">
                  <button
                    className="nav-button back-button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                  >
                    <MdArrowBack />
                    BACK
                  </button>
                  
                  {currentStep === 2 ? (
                    <button
                      className="nav-button next-button"
                      onClick={calculateEstimate}
                      disabled={!selectedPackage}
                    >
                      <FaCalculator />
                      CALCULATE
                    </button>
                  ) : currentStep !== 3 && (
                    <button
                      className="nav-button next-button"
                      onClick={handleNext}
                    >
                      NEXT
                      <MdArrowForward />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WardrobeCalculator;
