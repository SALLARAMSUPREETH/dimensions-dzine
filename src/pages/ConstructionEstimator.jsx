import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdArrowBack, MdCheck } from 'react-icons/md';
import { FaHardHat, FaRulerCombined, FaBuilding } from 'react-icons/fa';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { formatCurrency } from '../config/pricing';
import './FullHomeInteriorStepper.css';

const ConstructionEstimator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [constructionData, setConstructionData] = useState({
    sqft: '',
    floors: 1,
    constructionType: '',
    quality: ''
  });
  const [estimate, setEstimate] = useState(null);

  const steps = [
    { id: 1, title: 'Details', description: 'Area & Floors' },
    { id: 2, title: 'Type', description: 'Construction Type' },
    { id: 3, title: 'Quality', description: 'Select Quality' },
    { id: 4, title: 'Estimate', description: 'View Estimate' }
  ];

  const constructionTypes = [
    { id: 'residential', name: 'Residential', icon: '🏠', description: 'Homes, Villas, Apartments' },
    { id: 'commercial', name: 'Commercial', icon: '🏢', description: 'Offices, Shops, Showrooms' },
    { id: 'industrial', name: 'Industrial', icon: '🏭', description: 'Warehouses, Factories' }
  ];

  const qualityTiers = [
    {
      id: 'standard',
      name: 'Standard',
      pricePerSqft: 7200,
      features: [
        'Basic construction materials',
        'Standard finishes',
        'Basic electrical & plumbing',
        'Standard flooring',
        'Basic paint finish'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      pricePerSqft: 10000,
      features: [
        'Premium construction materials',
        'Quality finishes',
        'Modular electrical & plumbing',
        'Vitrified tiles flooring',
        'Premium paint & texture'
      ],
      popular: true
    },
    {
      id: 'luxe',
      name: 'Luxe',
      pricePerSqft: 14000,
      features: [
        'Luxury construction materials',
        'Designer finishes',
        'Smart home electrical',
        'Imported marble/granite',
        'Designer paint & wallpaper'
      ]
    }
  ];

  const calculateEstimate = () => {
    const sqft = parseInt(constructionData.sqft);
    const floors = parseInt(constructionData.floors);
    const selectedQuality = qualityTiers.find(q => q.id === constructionData.quality);

    if (!sqft || !selectedQuality) return;

    // Calculate base construction cost
    const totalSqft = sqft * floors;
    const basePrice = totalSqft * selectedQuality.pricePerSqft;
    
    // Design & planning fee (5% of base price)
    const designFee = Math.round(basePrice * 0.05);
    
    // Approval & documentation fee (₹50,000 per floor, minimum ₹50,000)
    const approvalFee = 50000 * floors;
    
    // Subtotal before GST
    const subtotal = basePrice + designFee + approvalFee;
    
    // GST (18% on subtotal)
    const gst = Math.round(subtotal * 0.18);
    
    // Final total
    const total = subtotal + gst;

    setEstimate({
      basePrice,
      designFee,
      approvalFee,
      subtotal,
      gst,
      total,
      sqft: totalSqft,
      quality: selectedQuality.name
    });
  };

  const handleNext = () => {
    if (currentStep === 1 && (!constructionData.sqft || constructionData.sqft < 100)) {
      alert('Please enter a valid area (minimum 100 sq ft)');
      return;
    }
    if (currentStep === 2 && !constructionData.constructionType) {
      alert('Please select a construction type');
      return;
    }
    if (currentStep === 3 && !constructionData.quality) {
      alert('Please select a quality tier');
      return;
    }

    if (currentStep === 3) {
      calculateEstimate();
    }

    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <>
      <Header />
      <div className="stepper-hero">
        <div className="stepper-container">
          {/* Header */}
          <div className="stepper-header">
            <h1>Construction Cost Estimator</h1>
            <p>Get an instant estimate for your construction project</p>
          </div>

          {/* Progress Steps */}
          <div className="steps-indicator">
            {steps.map((step, index) => (
              <div key={step.id} className="step-item-wrapper">
                <div className={`step-item ${currentStep >= step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}>
                  <div className="step-number">
                    {currentStep > step.id ? <MdCheck /> : step.id}
                  </div>
                  <div className="step-info">
                    <div className="step-title">{step.title}</div>
                    <div className="step-description">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="step-content-wrapper">
              {/* Step 1: Area & Floors */}
              {currentStep === 1 && (
                <div className="step-content">
                  <h2>Enter Construction Details</h2>
                  <p>Provide the area and number of floors</p>

                  <div className="input-group">
                    <label className="input-label">
                      <FaRulerCombined /> Total Built-up Area (sq ft)
                    </label>
                    <input
                      type="number"
                      className="input-field"
                      placeholder="Enter area in sq ft"
                      value={constructionData.sqft}
                      onChange={(e) => setConstructionData({ ...constructionData, sqft: e.target.value })}
                      min="100"
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">
                      <FaBuilding /> Number of Floors
                    </label>
                    <div className="floor-selector">
                      {[1, 2, 3, 4, 5].map(num => (
                        <button
                          key={num}
                          className={`floor-btn ${constructionData.floors === num ? 'active' : ''}`}
                          onClick={() => setConstructionData({ ...constructionData, floors: num })}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Construction Type */}
              {currentStep === 2 && (
                <div className="step-content">
                  <h2>Select Construction Type</h2>
                  <p>Choose the type of construction project</p>

                  <div className="construction-types-grid">
                    {constructionTypes.map(type => (
                      <div
                        key={type.id}
                        className={`construction-type-card ${constructionData.constructionType === type.id ? 'selected' : ''}`}
                        onClick={() => setConstructionData({ ...constructionData, constructionType: type.id })}
                      >
                        <div className="type-icon">{type.icon}</div>
                        <h3 className="type-name">{type.name}</h3>
                        <p className="type-description">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Quality Selection */}
              {currentStep === 3 && (
                <div className="step-content">
                  <h2>Choose Quality Tier</h2>
                  <p>Select the quality level for your construction</p>

                  <div className="packages-grid">
                    {qualityTiers.map(tier => (
                      <div
                        key={tier.id}
                        className={`package-card ${constructionData.quality === tier.id ? 'selected' : ''} ${tier.popular ? 'popular' : ''}`}
                        onClick={() => setConstructionData({ ...constructionData, quality: tier.id })}
                      >
                        {tier.popular && <div className="popular-badge">Most Popular</div>}
                        <h3 className="package-name">{tier.name}</h3>
                        <div className="package-price">
                          {formatCurrency(tier.pricePerSqft)}<span>/sq ft</span>
                        </div>
                        <ul className="package-features">
                          {tier.features.map((feature, idx) => (
                            <li key={idx}>
                              <MdCheck className="feature-check" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Estimate */}
              {currentStep === 4 && estimate && (
                <div className="step-content">
                  <h2>Your Construction Estimate</h2>
                  <p>Detailed cost breakdown for your project</p>

                  <div className="estimate-summary">
                    <div className="estimate-details">
                      <div className="estimate-row">
                        <span>Total Area:</span>
                        <strong>{estimate.sqft} sq ft</strong>
                      </div>
                      <div className="estimate-row">
                        <span>Floors:</span>
                        <strong>{constructionData.floors}</strong>
                      </div>
                      <div className="estimate-row">
                        <span>Quality Tier:</span>
                        <strong>{estimate.quality}</strong>
                      </div>
                      <div className="estimate-row">
                        <span>Construction Type:</span>
                        <strong className="capitalize">{constructionData.constructionType}</strong>
                      </div>
                    </div>

                    <div className="estimate-breakdown">
                      <h3>Cost Breakdown</h3>
                      <div className="breakdown-row">
                        <span>Base Construction Cost</span>
                        <span>{formatCurrency(estimate.basePrice)}</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Design & Planning (5%)</span>
                        <span>{formatCurrency(estimate.designFee)}</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Approval & Documentation</span>
                        <span>{formatCurrency(estimate.approvalFee)}</span>
                      </div>
                      <div className="breakdown-row">
                        <span>Subtotal</span>
                        <span>{formatCurrency(estimate.subtotal)}</span>
                      </div>
                      <div className="breakdown-row">
                        <span>GST (18%)</span>
                        <span>{formatCurrency(estimate.gst)}</span>
                      </div>
                      <div className="breakdown-total">
                        <span>Total Estimated Cost</span>
                        <span>{formatCurrency(estimate.total)}</span>
                      </div>
                    </div>

                    <div className="estimate-note">
                      <p>* This is an approximate estimate. Final costs may vary based on site conditions, material availability, and specific requirements.</p>
                    </div>

                    <div className="estimate-actions">
                      <Link to="/contact" className="btn-primary-estimate">
                        Get Detailed Quote
                      </Link>
                      <button onClick={() => { setCurrentStep(1); setEstimate(null); }} className="btn-secondary-estimate">
                        Start Over
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            {currentStep < 4 && (
              <div className="stepper-navigation">
                {currentStep > 1 && (
                  <button onClick={handleBack} className="btn-nav btn-back">
                    <MdArrowBack /> Back
                  </button>
                )}
                <button onClick={handleNext} className="btn-nav btn-next">
                  {currentStep === 3 ? 'Calculate' : 'Next'} <MdArrowForward />
                </button>
              </div>
            )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ConstructionEstimator;
