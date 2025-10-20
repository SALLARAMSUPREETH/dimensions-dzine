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

const KitchenCalculator = () => {
  const { startLoading, stopLoading } = useLoading();
  const [currentStep, setCurrentStep] = useState(1);
  const [kitchenDetails, setKitchenDetails] = useState({
    kitchenSize: '',
    layout: '',
    cabinets: 'standard',
    countertop: 'granite',
    appliances: false,
    backsplash: false
  });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const steps = [
    { id: 1, title: 'Kitchen Details', description: 'Select your options' },
    { id: 2, title: 'Package', description: 'Pick your package' },
    { id: 3, title: 'Estimate', description: 'View your estimate' }
  ];

  const packages = [
    {
      id: 'essentials',
      title: 'Essentials (₹₹)',
      description: 'Quality modular kitchen with essential features and standard finishes.',
      features: ['Standard cabinets', 'Basic countertop', 'Essential hardware'],
      multiplier: 1.0,
      image: '/images/Kitchen/Essentials.jpg'
    },
    {
      id: 'premium',
      title: 'Premium (₹₹₹)',
      description: 'Enhanced kitchen with premium materials and modern accessories.',
      features: ['Premium cabinets', 'Quality countertop', 'Designer hardware'],
      multiplier: 1.5,
      image: '/images/Kitchen/premium.jpg'
    },
    {
      id: 'luxe',
      title: 'Luxe (₹₹₹₹)',
      description: 'Luxury modular kitchen with high-end finishes and smart features.',
      features: ['Luxury cabinets', 'Premium stone countertop', 'Premium accessories'],
      multiplier: 2.2,
      image: '/images/Kitchen/luxe.jpg'
    }
  ];

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

    // Base pricing per sqft
    const basePricePerSqft = 1800;
    const size = parseInt(kitchenDetails.kitchenSize) || 100;

    // Layout complexity multiplier
    const layoutMultipliers = {
      'straight': 1.0,
      'l-shaped': 1.15,
      'u-shaped': 1.3,
      'parallel': 1.25
    };
    const layoutMultiplier = layoutMultipliers[kitchenDetails.layout] || 1.0;

    // Calculate costs
    const baseKitchenCost = Math.round(size * basePricePerSqft * packageData.multiplier * layoutMultiplier);
    const appliancesCost = kitchenDetails.appliances ? 80000 : 0;
    const backsplashCost = kitchenDetails.backsplash ? 15000 : 0;

    const baseAmount = baseKitchenCost + appliancesCost + backsplashCost;

    const designFees = 15000;
    const installationFees = 20000;
    const serviceFees = designFees + installationFees;

    const subtotal = baseAmount + serviceFees;
    const gst = Math.round(subtotal * 0.18);
    const finalAmount = subtotal + gst;

    const estimatedWeeks = Math.max(3, Math.min(8, Math.ceil(size / 30)));

    setEstimate({
      finalAmount,
      packageMultiplier: packageData.multiplier,
      layoutMultiplier,
      package: packageData,
      size,
      details: kitchenDetails,
      baseKitchenCost,
      appliancesCost,
      backsplashCost,
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
      if (currentStep === 1) {
        if (!kitchenDetails.layout) {
          alert('Please select a kitchen layout');
          return;
        }
        if (!kitchenDetails.kitchenSize) {
          alert('Please enter kitchen size');
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
    if (currentStep > 1) navigateToStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2>Kitchen Details</h2>
            <p>Tell us about your kitchen requirements</p>

            {/* Kitchen Layout Selection */}
            <div className="layout-selection-section">
              <h3 className="service-section-subtitle">Select the layout of your kitchen</h3>
              <div className="layout-grid">
                <div
                  className={`layout-card ${kitchenDetails.layout === 'l-shaped' ? 'selected' : ''}`}
                  onClick={() => setKitchenDetails({ ...kitchenDetails, layout: 'l-shaped' })}
                >
                  <div className="layout-radio">
                    <input
                      type="radio"
                      name="layout"
                      value="l-shaped"
                      checked={kitchenDetails.layout === 'l-shaped'}
                      onChange={() => setKitchenDetails({ ...kitchenDetails, layout: 'l-shaped' })}
                    />
                  </div>
                  <div className="layout-image">
                    <svg viewBox="0 0 160 160" className="layout-svg">
                      <rect x="20" y="20" width="35" height="120" fill="#ffe3cbff" rx="3" />
                      <rect x="40" y="105" width="80" height="35" fill="#ffe3cbff" rx="3" />
                      <g transform="translate(27, 30)">
                        <rect x="0" y="0" width="22" height="18" fill="#e8e8e8" rx="2" />
                        <rect x="2" y="2" width="18" height="6" fill="#b8b8b8" rx="1" />
                        <circle cx="18" cy="13" r="2" fill="#888" />
                        <line x1="4" y1="11" x2="14" y2="11" stroke="#999" strokeWidth="1" />
                      </g>
                      <g transform="translate(28, 115)">
                        <rect x="0" y="0" width="18" height="16" fill="#7a9b9e" rx="2" />
                        <circle cx="9" cy="8" r="5" fill="#a8c5c7" />
                      </g>
                      <g transform="translate(85, 113)">
                        <rect x="0" y="0" width="24" height="20" fill="#d47c7c" rx="2" />
                        <circle cx="6" cy="6" r="3" fill="#e89999" />
                        <circle cx="18" cy="6" r="3" fill="#e89999" />
                        <circle cx="6" cy="14" r="3" fill="#e89999" />
                        <circle cx="18" cy="14" r="3" fill="#e89999" />
                      </g>
                    </svg>
                  </div>
                  <span className="layout-name">L-shaped</span>
                </div>

                <div
                  className={`layout-card ${kitchenDetails.layout === 'straight' ? 'selected' : ''}`}
                  onClick={() => setKitchenDetails({ ...kitchenDetails, layout: 'straight' })}
                >
                  <div className="layout-radio">
                    <input
                      type="radio"
                      name="layout"
                      value="straight"
                      checked={kitchenDetails.layout === 'straight'}
                      onChange={() => setKitchenDetails({ ...kitchenDetails, layout: 'straight' })}
                    />
                  </div>
                  <div className="layout-image">
                    <svg viewBox="0 0 160 160" className="layout-svg">
                      <rect x="35" y="55" width="140" height="35" fill="#ffe3cbff" rx="3" />
                      <g transform="translate(45, 64)">
                        <rect x="0" y="0" width="18" height="16" fill="#7a9b9e" rx="2" />
                        <circle cx="9" cy="8" r="5" fill="#a8c5c7" />
                      </g>
                      <g transform="translate(87, 63)">
                        <rect x="0" y="0" width="22" height="18" fill="#e8e8e8" rx="2" />
                        <rect x="2" y="2" width="18" height="6" fill="#b8b8b8" rx="1" />
                        <circle cx="18" cy="13" r="2" fill="#888" />
                        <line x1="4" y1="11" x2="14" y2="11" stroke="#999" strokeWidth="1" />
                      </g>
                      <g transform="translate(125, 61)">
                        <rect x="0" y="0" width="24" height="20" fill="#d47c7c" rx="2" />
                        <circle cx="6" cy="6" r="3" fill="#e89999" />
                        <circle cx="18" cy="6" r="3" fill="#e89999" />
                        <circle cx="6" cy="14" r="3" fill="#e89999" />
                        <circle cx="18" cy="14" r="3" fill="#e89999" />
                      </g>
                    </svg>
                  </div>
                  <span className="layout-name">Straight</span>
                </div>

                <div
                  className={`layout-card ${kitchenDetails.layout === 'u-shaped' ? 'selected' : ''}`}
                  onClick={() => setKitchenDetails({ ...kitchenDetails, layout: 'u-shaped' })}
                >
                  <div className="layout-radio">
                    <input
                      type="radio"
                      name="layout"
                      value="u-shaped"
                      checked={kitchenDetails.layout === 'u-shaped'}
                      onChange={() => setKitchenDetails({ ...kitchenDetails, layout: 'u-shaped' })}
                    />
                  </div>
                  <div className="layout-image">
                    <svg viewBox="0 0 160 160" className="layout-svg">
                      <rect x="20" y="20" width="35" height="120" fill="#ffe3cbff" rx="3" />
                      <rect x="50" y="105" width="60" height="35" fill="#ffe3cbff" rx="3" />
                      <rect x="100" y="20" width="35" height="120" fill="#ffe3cbff" rx="3" />
                      <g transform="translate(28, 40)">
                        <rect x="0" y="0" width="22" height="18" fill="#e8e8e8" rx="2" />
                        <rect x="2" y="2" width="18" height="6" fill="#b8b8b8" rx="1" />
                        <circle cx="18" cy="13" r="2" fill="#888" />
                        <line x1="4" y1="11" x2="14" y2="11" stroke="#999" strokeWidth="1" />
                      </g>
                      <g transform="translate(105, 40)">
                        <rect x="0" y="0" width="24" height="20" fill="#d47c7c" rx="2" />
                        <circle cx="6" cy="6" r="3" fill="#e89999" />
                        <circle cx="18" cy="6" r="3" fill="#e89999" />
                        <circle cx="6" cy="14" r="3" fill="#e89999" />
                        <circle cx="18" cy="14" r="3" fill="#e89999" />
                      </g>
                      <g transform="translate(68, 115)">
                        <rect x="0" y="0" width="18" height="16" fill="#7a9b9e" rx="2" />
                        <circle cx="9" cy="8" r="5" fill="#a8c5c7" />
                      </g>
                    </svg>
                  </div>
                  <span className="layout-name">U-shaped</span>
                </div>

                <div
                  className={`layout-card ${kitchenDetails.layout === 'parallel' ? 'selected' : ''}`}
                  onClick={() => setKitchenDetails({ ...kitchenDetails, layout: 'parallel' })}
                >
                  <div className="layout-radio">
                    <input
                      type="radio"
                      name="layout"
                      value="parallel"
                      checked={kitchenDetails.layout === 'parallel'}
                      onChange={() => setKitchenDetails({ ...kitchenDetails, layout: 'parallel' })}
                    />
                  </div>
                  <div className="layout-image">
                    <svg viewBox="0 0 160 160" className="layout-svg">
                      <rect x="20" y="35" width="120" height="35" fill="#ffe3cbff" rx="3" />
                      <rect x="20" y="95" width="120" height="35" fill="#ffe3cbff" rx="3" />
                      <g transform="translate(35, 45)">
                        <rect x="0" y="0" width="18" height="16" fill="#7a9b9e" rx="2" />
                        <circle cx="9" cy="8" r="5" fill="#a8c5c7" />
                      </g>
                      <g transform="translate(100, 45)">
                        <rect x="0" y="0" width="22" height="18" fill="#e8e8e8" rx="2" />
                        <rect x="2" y="2" width="18" height="6" fill="#b8b8b8" rx="1" />
                        <circle cx="18" cy="13" r="2" fill="#888" />
                        <line x1="4" y1="11" x2="14" y2="11" stroke="#999" strokeWidth="1" />
                      </g>
                      <g transform="translate(65, 102)">
                        <rect x="0" y="0" width="24" height="20" fill="#d47c7c" rx="2" />
                        <circle cx="6" cy="6" r="3" fill="#e89999" />
                        <circle cx="18" cy="6" r="3" fill="#e89999" />
                        <circle cx="6" cy="14" r="3" fill="#e89999" />
                        <circle cx="18" cy="14" r="3" fill="#e89999" />
                      </g>
                    </svg>
                  </div>
                  <span className="layout-name">Parallel</span>
                </div>
              </div>
            </div>

            <div className="rooms-grid">
              <div className="room-card room-card-input">
                <span className="room-name">Kitchen Size (sq ft)</span>
                <input
                  type="number"
                  value={kitchenDetails.kitchenSize}
                  onChange={(e) => setKitchenDetails({ ...kitchenDetails, kitchenSize: e.target.value })}
                  onWheel={(e) => e.target.blur()}
                  placeholder="Enter size"
                  className="size-input"
                  min="50"
                  max="500"
                />
              </div>
              <div className="room-card">
                <span className="room-name">Include Appliances?</span>
                <div className="quantity-selector">
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${!kitchenDetails.appliances ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setKitchenDetails({ ...kitchenDetails, appliances: false });
                    }}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${kitchenDetails.appliances ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setKitchenDetails({ ...kitchenDetails, appliances: true });
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
              <div className="room-card">
                <span className="room-name">Include Backsplash?</span>
                <div className="quantity-selector">
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${!kitchenDetails.backsplash ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setKitchenDetails({ ...kitchenDetails, backsplash: false });
                    }}
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className={`quantity-btn toggle-btn ${kitchenDetails.backsplash ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setKitchenDetails({ ...kitchenDetails, backsplash: true });
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
                    <LazyImage src={pkg.image} alt={`${pkg.title} kitchen`} />
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
            <h2>Your Kitchen Estimate</h2>
            <p>Complete breakdown of your {estimate?.package?.title} package</p>

            <div className="estimate-display">
              <div className="project-overview-section">
                <h4>Project Overview</h4>
                <div className="overview-grid">
                  <div className="overview-item">
                    <span className="detail-label">Kitchen Size</span>
                    <span className="detail-value">{estimate?.size} sq ft</span>
                  </div>
                  <div className="overview-item">
                    <span className="detail-label">Kitchen Layout</span>
                    <span className="detail-value">{estimate?.details?.layout?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
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
                    <div className="accordion-header" onClick={() => toggleAccordion('kitchen')}>
                      <div className="accordion-title">
                        <span>Kitchen Components</span>
                      </div>
                      <div className="accordion-price">
                        {formatCurrency(estimate?.baseAmount || 0)}
                      </div>
                      <div className="accordion-arrow">
                        {accordionOpen === 'kitchen' ? <MdExpandLess /> : <MdExpandMore />}
                      </div>
                    </div>
                    <div className={`accordion-content ${accordionOpen === 'kitchen' ? 'accordion-open' : 'accordion-closed'}`}>
                      <div className="breakdown-items">
                        <div className="breakdown-item">
                          <span>Modular Kitchen ({estimate?.size} sq ft × ₹{(1800 * estimate?.packageMultiplier * estimate?.layoutMultiplier).toLocaleString('en-IN', { maximumFractionDigits: 0 })})</span>
                          <span>{formatCurrency(estimate?.baseKitchenCost || 0)}</span>
                        </div>
                        {estimate?.appliancesCost > 0 && (
                          <div className="breakdown-item">
                            <span>Kitchen Appliances</span>
                            <span>{formatCurrency(estimate?.appliancesCost)}</span>
                          </div>
                        )}
                        {estimate?.backsplashCost > 0 && (
                          <div className="breakdown-item">
                            <span>Backsplash Tiling</span>
                            <span>{formatCurrency(estimate?.backsplashCost)}</span>
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
                    <strong>Complete Kitchen Design</strong>
                    <span>3D layouts, material selection, and planning</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaCube /></div>
                  <div className="included-content">
                    <strong>Modular Cabinets</strong>
                    <span>Custom-sized cabinets with quality hardware</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaPaintBrush /></div>
                  <div className="included-content">
                    <strong>Premium Finishes</strong>
                    <span>Laminates, handles, and surface treatments</span>
                  </div>
                </div>
                <div className="included-item">
                  <div className="included-icon"><FaCouch /></div>
                  <div className="included-content">
                    <strong>Countertop & Sink</strong>
                    <span>Quality countertop with sink installation</span>
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
                <h3>Ready to Start Your Kitchen Project?</h3>
                <p>Book a free consultation with our design experts. Get personalized 3D designs and exact pricing.</p>
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
                    <span>Personalized 3D kitchen design</span>
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
              <h1>Kitchen Interior Estimate</h1>
              <p>Get a detailed estimate for your modular kitchen project</p>
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

export default KitchenCalculator;
