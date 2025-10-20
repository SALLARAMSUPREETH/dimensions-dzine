import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdArrowForward, MdArrowBack, MdCheck, MdHomeWork, MdDesignServices, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaPencilRuler, FaCube, FaPaintBrush, FaCouch, FaTools, FaCheckCircle } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { PRICING_CONFIG, formatCurrency } from '../config/pricing';
import LazyImage from '../components/LazyImage';
import { useLoading } from '../contexts/LoadingContext';
import './FullHomeInteriorStepper.css';

const FullHomeInteriorStepper = () => {
  const { startLoading, stopLoading } = useLoading();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRooms, setSelectedRooms] = useState({
    livingRoom: 1,
    kitchen: 1,
    bedroom: 2,
    bathroom: 2,
    dining: 1
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [showWhatsIncludedModal, setShowWhatsIncludedModal] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);





  // Direct handlers for instant accordion toggle
  const toggleRoomsAccordion = () => {
    setAccordionOpen(accordionOpen === 'rooms' ? null : 'rooms');
  };

  const toggleFeesAccordion = () => {
    setAccordionOpen(accordionOpen === 'fees' ? null : 'fees');
  };

  const steps = [
    { id: 1, title: 'Rooms', description: 'Select rooms to design' },
    { id: 2, title: 'Package', description: 'Pick your package' },
    { id: 3, title: 'Estimate', description: 'View your estimate' }
  ];

  const whatsIncluded = {
    'Living Room': 'TV unit, false ceiling, shoe rack sofa, coffee table, wallpapers, curtains and pooja unit',
    'Kitchen': 'Modular kitchen, loft, countertop, appliances, tiling and utility',
    'Bedroom': '2-door wardrobe, loft, false ceiling, tv unit, study unit, bed, side table, mattress and wooden flooring',
    'Other Bedroom': '2-door wardrobe and loft',
    'Bathroom': 'Vanity, tiling and shower cubicle',
    'Dining': 'Crockery unit, dining table with chairs and false ceiling'
  };


  const packages = [
    {
      id: 'essentials',
      title: 'Essentials (₹₹)',
      description: 'A range of essential home interior solutions that\'s perfect for all your needs.',
      features: ['Affordable pricing', 'Convenient designs', 'Basic accessories'],
      multiplier: 1.0,
      color: '#546736',
      image: '/images/Home-011_1-p-1080.jpeg'
    },
    {
      id: 'premium',
      title: 'Premium (₹₹₹)',
      description: 'Superior home interior solutions that will take your interiors to the next level.',
      features: ['Mid-range pricing', 'Premium designs', 'Wide range of accessories'],
      multiplier: 1.5,
      color: '#7c4530',
      image: '/images/Home-016_1-p-1080.jpeg'
    },
    {
      id: 'luxe',
      title: 'Luxe (₹₹₹₹)',
      description: 'High-end interior solutions for the ultimate home interior experience you deserve.',
      features: ['Elite pricing', 'Lavish designs', 'Premium accessories'],
      multiplier: 2.2,
      color: '#546736',
      image: '/images/Home-020_1-p-1080.jpeg'
    }
  ];

  const getTotalArea = () => {
    // Calculate total area based on selected rooms
    const roomAreaMap = {
      livingRoom: 300,
      kitchen: 150,
      bedroom: 200,
      bathroom: 80,
      dining: 150
    };

    let totalArea = 0;
    Object.entries(selectedRooms).forEach(([room, count]) => {
      totalArea += roomAreaMap[room] * count;
    });

    return totalArea;
  };

  const calculatePackageEstimate = () => {
    if (!selectedPackage) return;

    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Only show loader if we're not already at the top
    const shouldShowLoader = currentScrollPosition > 50; // 50px threshold

    if (shouldShowLoader) {
      startLoading();
    }

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const packageData = packages.find(pkg => pkg.id === selectedPackage);

    // Calculate room-wise costs with package multiplier applied
    const roomCosts = {
      livingRoom: Math.round((selectedRooms.livingRoom || 0) * 360000 * packageData.multiplier),
      kitchen: Math.round((selectedRooms.kitchen || 0) * 270000 * packageData.multiplier),
      bedroom: Math.round((selectedRooms.bedroom || 0) * 200000 * packageData.multiplier),
      bathroom: Math.round((selectedRooms.bathroom || 0) * 160000 * packageData.multiplier),
      dining: Math.round((selectedRooms.dining || 0) * 180000 * packageData.multiplier)
    };

    const baseAmount = Object.values(roomCosts).reduce((sum, cost) => sum + cost, 0);

    // Fixed service fees (not affected by package multiplier)
    const designFees = 50000;
    const supervisionFees = 30000;
    const materialFees = 25000;
    const serviceFees = designFees + supervisionFees + materialFees;

    // Calculate GST (18% on total)
    const subtotal = baseAmount + serviceFees;
    const gst = Math.round(subtotal * 0.18);

    // Final amount
    const finalAmount = subtotal + gst;

    // Estimated timeline based on rooms
    const totalRooms = Object.values(selectedRooms).reduce((sum, count) => sum + count, 0);
    const estimatedWeeks = Math.max(8, Math.min(20, totalRooms * 2 + 4));

    setEstimate({
      finalAmount,
      packageMultiplier: packageData.multiplier,
      package: packageData,
      area: getTotalArea(),
      rooms: selectedRooms,
      roomCosts,
      baseAmount,
      serviceFees,
      designFees,
      supervisionFees,
      materialFees,
      gst,
      subtotal,
      estimatedWeeks
    });

    // Set the step after a short delay to allow scroll to start
    setTimeout(() => {
      setCurrentStep(3);

      // Stop loading after step transition is complete (only if loader was shown)
      if (shouldShowLoader) {
        setTimeout(() => {
          stopLoading();
        }, 150);
      }
    }, 50);
  };

  const navigateToStep = (newStep) => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Only show loader if we're not already at the top
    const shouldShowLoader = currentScrollPosition > 50; // 50px threshold

    if (shouldShowLoader) {
      startLoading();
    }

    // Scroll to top immediately
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Set the new step after a short delay to allow scroll to start
    setTimeout(() => {
      setCurrentStep(newStep);

      // Stop loading after step transition is complete (only if loader was shown)
      if (shouldShowLoader) {
        setTimeout(() => {
          stopLoading();
        }, 150);
      }
    }, 50);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      // Check if at least one room is selected
      if (currentStep === 1) {
        const totalRooms = Object.values(selectedRooms).reduce((sum, count) => sum + count, 0);
        if (totalRooms === 0) {
          alert('Please select at least one room to proceed');
          return;
        }
      }

      if (currentStep === 2 && !selectedPackage) {
        alert('Please select a package');
        return;
      }

      navigateToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      navigateToStep(currentStep - 1);
    }
  };

  const handleRoomChange = (room, value) => {
    setSelectedRooms(prev => ({
      ...prev,
      [room]: Math.max(0, value)
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2>Select the rooms you'd like us to design</h2>
            <p>To know more about this, <button className="info-link" onClick={() => setShowWhatsIncludedModal(true)}>click here</button></p>
            <div className="rooms-grid">
              {Object.entries(selectedRooms).map(([room, count]) => (
                <div key={room} className="room-card">
                  <span className="room-name">
                    {room.charAt(0).toUpperCase() + room.slice(1).replace(/([A-Z])/g, ' $1')}
                  </span>
                  <div className="quantity-selector">
                    <button
                      className="quantity-btn"
                      onClick={() => handleRoomChange(room, count - 1)}
                      disabled={count <= 0}
                    >
                      -
                    </button>
                    <span className="quantity">{count}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleRoomChange(room, count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
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
                    <LazyImage src={pkg.image} alt={`${pkg.title} interior design`} />
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
            <h2>Your Detailed Estimate</h2>
            <p>Complete breakdown of your {estimate?.package?.title} package</p>

            <div className="estimate-display">
              {/* Project Overview - Full Width */}
              <div className="project-overview-section">
                <h4>Project Overview</h4>
                <div className="overview-grid">
                  <div className="overview-item">
                    <span className="detail-label">Total Area</span>
                    <span className="detail-value">{estimate?.area} sq ft</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Package Selected</span>
                    <span className="detail-value">{estimate?.package?.title}</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Estimated Timeline</span>
                    <span className="detail-value">{estimate?.estimatedWeeks} weeks</span>
                  </div>
                  <div className="overview-item overview-item-full">
                    <span className="detail-label">Rooms Included</span>
                    <div className="rooms-tags">
                      {Object.entries(estimate?.rooms || {}).map(([room, count]) =>
                        count > 0 && (
                          <span key={room} className="room-tag">
                            {room.replace(/([A-Z])/g, ' $1').trim()} ({count})
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="price-breakdown">
                <h4>Detailed Cost Breakdown</h4>
                <div className="breakdown-accordion">
                  {/* Room Costs Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header" onClick={toggleRoomsAccordion}>
                      <div className="accordion-title">
                        <MdHomeWork className="accordion-icon" />
                        <span>Room-wise Costs ({estimate?.package?.title})</span>
                      </div>
                      <div className="accordion-price">
                        {formatCurrency(estimate?.baseAmount || 0)}
                      </div>
                      <div className="accordion-arrow">
                        {accordionOpen === 'rooms' ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                    <div className={`accordion-content ${accordionOpen === 'rooms' ? 'accordion-open' : 'accordion-closed'}`}>
                      <div className="breakdown-items">
                        {selectedRooms?.livingRoom > 0 && (
                          <div className="breakdown-item">
                            <span>Living Room ({selectedRooms.livingRoom} × ₹{(360000 * estimate?.packageMultiplier).toLocaleString('en-IN')})</span>
                            <span>{formatCurrency(estimate?.roomCosts?.livingRoom || 0)}</span>
                          </div>
                        )}
                        {selectedRooms?.kitchen > 0 && (
                          <div className="breakdown-item">
                            <span>Kitchen ({selectedRooms.kitchen} × ₹{(270000 * estimate?.packageMultiplier).toLocaleString('en-IN')})</span>
                            <span>{formatCurrency(estimate?.roomCosts?.kitchen || 0)}</span>
                          </div>
                        )}
                        {selectedRooms?.bedroom > 0 && (
                          <div className="breakdown-item">
                            <span>Bedrooms ({selectedRooms.bedroom} × ₹{(200000 * estimate?.packageMultiplier).toLocaleString('en-IN')})</span>
                            <span>{formatCurrency(estimate?.roomCosts?.bedroom || 0)}</span>
                          </div>
                        )}
                        {selectedRooms?.bathroom > 0 && (
                          <div className="breakdown-item">
                            <span>Bathrooms ({selectedRooms.bathroom} × ₹{(160000 * estimate?.packageMultiplier).toLocaleString('en-IN')})</span>
                            <span>{formatCurrency(estimate?.roomCosts?.bathroom || 0)}</span>
                          </div>
                        )}
                        {selectedRooms?.dining > 0 && (
                          <div className="breakdown-item">
                            <span>Dining Area ({selectedRooms.dining} × ₹{(180000 * estimate?.packageMultiplier).toLocaleString('en-IN')})</span>
                            <span>{formatCurrency(estimate?.roomCosts?.dining || 0)}</span>
                          </div>
                        )}
                        <div className="breakdown-note">
                          <small>Includes: Modular units, false ceiling, flooring, lighting, furniture, soft furnishings, and complete installation</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Fees Accordion */}
                  <div className="accordion-item">
                    <div className="accordion-header" onClick={toggleFeesAccordion}>
                      <div className="accordion-title">
                        <MdDesignServices className="accordion-icon" />
                        <span>Professional Services</span>
                      </div>
                      <div className="accordion-price">
                        {formatCurrency(estimate?.serviceFees || 0)}
                      </div>
                      <div className="accordion-arrow">
                        {accordionOpen === 'fees' ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                    <div className={`accordion-content ${accordionOpen === 'fees' ? 'accordion-open' : 'accordion-closed'}`}>
                      <div className="breakdown-items">
                        <div className="breakdown-item">
                          <span>Design & 3D Visualization</span>
                          <span>{formatCurrency(estimate?.designFees || 0)}</span>
                        </div>
                        <div className="breakdown-item">
                          <span>Site Supervision & Project Management</span>
                          <span>{formatCurrency(estimate?.supervisionFees || 0)}</span>
                        </div>
                        <div className="breakdown-item">
                          <span>Material Sourcing & Logistics</span>
                          <span>{formatCurrency(estimate?.materialFees || 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtotal and GST */}
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

            {/* What's Included - Full Width */}
            <div className="whats-included-section">
              <h4>What's Included in Your Package</h4>
              <div className="included-grid">
                <div className="included-item">
                  <div className="included-icon">
                    <FaPencilRuler />
                  </div>
                  <div className="included-content">
                    <strong>Complete Design & Planning</strong>
                    <span>Space planning, mood boards, and detailed layouts</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon">
                    <FaCube />
                  </div>
                  <div className="included-content">
                    <strong>3D Visualization & Renders</strong>
                    <span>Photorealistic renders to preview your space</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon">
                    <FaPaintBrush />
                  </div>
                  <div className="included-content">
                    <strong>Premium Materials & Finishes</strong>
                    <span>Laminates, wall paints, handles, and quality surfaces</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon">
                    <FaCouch />
                  </div>
                  <div className="included-content">
                    <strong>Furniture & Soft Furnishings</strong>
                    <span>Beds, sofas, curtains, and decorative elements</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon">
                    <FaTools />
                  </div>
                  <div className="included-content">
                    <strong>Complete Installation</strong>
                    <span>Professional installation with quality workmanship</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="included-content">
                    <strong>Quality Assurance</strong>
                    <span>Regular site inspections and quality checks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
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

            {/* Contact Section */}
            <div className="contact-section">
              <div className="contact-content">
                <h3>Ready to Start Your Dream Project?</h3>
                <p>Book a free consultation with our design experts. Get personalized 3D designs and exact pricing.</p>
                <div className="contact-cta">
                  <Link to="/contact" className="cta-button primary">
                    <span>Book Free Consultation</span>
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
                    <span>Personalized 3D design renders</span>
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
              <h1>Full Home Interior Estimate</h1>
              <p>Get a detailed estimate for your complete home interior project</p>
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
                      onClick={calculatePackageEstimate}
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

      {/* What's Included Modal */}
      {showWhatsIncludedModal && (
        <div className="modal-overlay" onClick={() => setShowWhatsIncludedModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>What's included</h3>
              <button className="modal-close" onClick={() => setShowWhatsIncludedModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {Object.entries(whatsIncluded).map(([room, items]) => (
                <div key={room} className="included-room">
                  <h4><strong>{room}:</strong></h4>
                  <p>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullHomeInteriorStepper;
