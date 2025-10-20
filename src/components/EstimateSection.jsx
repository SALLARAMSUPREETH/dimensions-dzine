import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdHome, MdKitchen, MdCheckroom } from 'react-icons/md';
import { FaCalculator } from 'react-icons/fa';
import { PRICING_CONFIG, calculateEstimate, formatCurrency } from '../config/pricing';
import './EstimateSection.css';

const EstimateSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [area, setArea] = useState('');
  const [complexity, setComplexity] = useState('standard');
  const [location, setLocation] = useState('tier2');
  const [estimate, setEstimate] = useState(null);

  const services = [
    {
      id: 'full-home-interior',
      icon: MdHome,
      title: 'Full Home Interior',
      description: 'Complete home interior design and execution',
      features: ['Living room design', 'Bedroom interiors', 'Kitchen design', 'Bathroom design'],
      color: '#546736'
    },
    {
      id: 'kitchen',
      icon: MdKitchen,
      title: 'Kitchen Interior',
      description: 'Complete kitchen design and modular solutions',
      features: ['Modular kitchen design', 'Cabinet installation', 'Countertop selection', 'Appliance integration'],
      color: '#7c4530'
    },
    {
      id: 'wardrobe',
      icon: MdCheckroom,
      title: 'Wardrobe Design',
      description: 'Custom wardrobe design and installation',
      features: ['Custom wardrobe design', 'Premium materials', 'Space optimization', 'Installation service'],
      color: '#546736'
    }
  ];

  const handleServiceSelect = (service) => {
    // Navigate to respective calculator pages
    if (service.id === 'full-home-interior') {
      navigate('/estimate/full-home-interior');
    } else if (service.id === 'kitchen') {
      navigate('/estimate/kitchen-interior');
    } else if (service.id === 'wardrobe') {
      navigate('/estimate/wardrobe-design');
    }
  };

  const handleCalculate = () => {
    if (!selectedService || !area) {
      alert('Please select a service and enter the area');
      return;
    }

    const areaNum = parseFloat(area);
    if (areaNum <= 0) {
      alert('Please enter a valid area');
      return;
    }

    const result = calculateEstimate(selectedService.id, areaNum, complexity, location);
    setEstimate(result);
  };

  const handleReset = () => {
    setSelectedService(null);
    setArea('');
    setComplexity('standard');
    setLocation('tier2');
    setEstimate(null);
  };

  return (
    <section className="estimate-section">
      <div className="estimate-container">
        {/* Header */}
        <div className="estimate-header">
          <h2 className="estimate-title">
            Get the estimate for your{' '}
            <span className="highlight-text">Dream Home</span>
          </h2>
          <p className="estimate-subtitle">
            Calculate the approximate cost of doing up your home interiors
          </p>
        </div>

        {/* Estimate Cards */}
        <div className="estimate-cards-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`estimate-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                onClick={() => handleServiceSelect(service)}
              >
                <div className="estimate-card-header">
                  <div className="estimate-icon-wrapper" style={{ backgroundColor: `${service.color}20` }}>
                    <IconComponent className="estimate-icon" style={{ color: service.color }} />
                  </div>
                  <div className="estimate-calculator-icon">
                    <FaCalculator />
                  </div>
                </div>

                <div className="estimate-card-content">
                  <h3 className="estimate-service-title">{service.title}</h3>
                  <p className="estimate-service-description">{service.description}</p>
                  <div className="estimate-service-features">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="estimate-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="estimate-card-action">
                  <button className="estimate-calculate-btn" style={{ backgroundColor: service.color }}>
                    CALCULATE &gt;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Estimate Form */}
        {selectedService && (
          <div className="estimate-form-container">
            <div className="form-card">
              <div className="form-header">
                <h3>Calculate Your {selectedService.title}</h3>
                <p>Fill in the details to get your instant estimate</p>
              </div>

              <div className="form-content">
                <div className="form-row">
                  <div className="form-group">
                    <label>Area (sq ft) *</label>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="e.g., 1200"
                      min="1"
                    />
                  </div>

                  <div className="form-group">
                    <label>Complexity Level</label>
                    <select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
                      <option value="basic">Basic</option>
                      <option value="standard">Standard</option>
                      <option value="premium">Premium</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Location</label>
                    <select value={location} onChange={(e) => setLocation(e.target.value)}>
                      <option value="tier1">Tier 1 City (Mumbai, Delhi, Bangalore)</option>
                      <option value="tier2">Tier 2 City (Pune, Hyderabad, Chennai)</option>
                      <option value="tier3">Tier 3 City (Other cities)</option>
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="primary-btn" onClick={handleCalculate}>
                    Get Estimate
                  </button>
                  <button className="secondary-btn" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Estimate Result */}
        {estimate && (
          <div className="estimate-result-container">
            <div className="result-card">
              <div className="result-header">
                <h3>Your Estimate</h3>
                <p>Based on {selectedService.title}</p>
              </div>

              <div className="result-amount">
                <span className="amount">{formatCurrency(estimate.finalAmount)}</span>
                <span className="amount-label">Estimated Total Cost</span>
              </div>

              <div className="result-breakdown">
                <div className="breakdown-item">
                  <span>Base Cost:</span>
                  <span>{formatCurrency(estimate.baseAmount)}</span>
                </div>
                <div className="breakdown-item">
                  <span>Additional Charges:</span>
                  <span>{formatCurrency(estimate.additionalCharges)}</span>
                </div>
                <div className="breakdown-item total">
                  <span>Total Estimate:</span>
                  <span>{formatCurrency(estimate.finalAmount)}</span>
                </div>
              </div>

              <div className="result-actions">
                <Link to="/contact" className="contact-btn">
                  Get Detailed Quote
                </Link>
                <Link to="/calculator" className="calculator-link">
                  More Options &gt;
                </Link>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default EstimateSection;
