import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdHome, MdKitchen, MdCheckroom, MdWork } from 'react-icons/md';
import { FaCalculator, FaHardHat } from 'react-icons/fa';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
import './Calculator.css';

const Calculator = () => {
  const navigate = useNavigate();

  const calculators = [
    {
      id: 'full-home-interior',
      icon: MdHome,
      title: 'Full Home Interior',
      description: 'Complete home interior design and execution',
      features: ['Living room design', 'Bedroom interiors', 'Kitchen design', 'Bathroom design'],
      color: '#546736',
      route: '/estimate/full-home-interior',
      calculatorName: 'Interior Calculator'
    },
    {
      id: 'kitchen',
      icon: MdKitchen,
      title: 'Kitchen Interior',
      description: 'Complete kitchen design and modular solutions',
      features: ['Modular kitchen design', 'Cabinet installation', 'Countertop selection', 'Appliance integration'],
      color: '#7c4530',
      route: '/estimate/kitchen-interior',
      calculatorName: 'Kitchen Calculator'
    },
    {
      id: 'wardrobe',
      icon: MdCheckroom,
      title: 'Wardrobe Design',
      description: 'Custom wardrobe design and installation',
      features: ['Custom wardrobe design', 'Premium materials', 'Space optimization', 'Installation service'],
      color: '#546736',
      route: '/estimate/wardrobe-design',
      calculatorName: 'Wardrobe Calculator'
    },
    {
      id: 'construction',
      icon: FaHardHat,
      title: 'Construction',
      description: 'Complete construction cost estimation',
      features: ['Residential construction', 'Commercial projects', 'Quality tiers', 'Multi-floor options'],
      color: '#7c4530',
      route: '/estimate/construction',
      calculatorName: 'Construction Calculator'
    }
  ];

  const handleCalculatorSelect = (calculator) => {
    navigate(calculator.route);
  };

  return (
    <>
      <SEO
        title={seoData.calculator.title}
        description={seoData.calculator.description}
        keywords={seoData.calculator.keywords}
        canonical={seoData.calculator.canonical}
        schema={seoData.calculator.schema}
        ogImage="/images/og-calculator.webp"
      />
      <div className="page-wrapper">
        <Header />
        <main className="main-wrapper">

          {/* Calculators Grid */}
          <section className="calculator-service-selection">
            <div className="calculator-container">
              <div className="section-header">
                <h2>Select Your Calculator</h2>
              </div>
              
              <div className="service-selection-grid">
                {calculators.map((calculator) => {
                  const IconComponent = calculator.icon;
                  return (
                    <div
                      key={calculator.id}
                      className="service-selection-card"
                      onClick={() => handleCalculatorSelect(calculator)}
                    >
                      <div className="service-card-header">
                        <div className="service-icon-wrapper" style={{ backgroundColor: `${calculator.color}20` }}>
                          <IconComponent className="service-icon" style={{ color: calculator.color }} />
                        </div>
                        <div className="calculator-badge">
                          <FaCalculator />
                        </div>
                      </div>
                      
                      <div className="service-card-content">
                        <h3 className="service-title">{calculator.title}</h3>
                        <p className="service-description">{calculator.description}</p>
                        <div className="service-features">
                          {calculator.features.map((feature, index) => (
                            <span key={index} className="feature-item">
                              • {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="service-card-action">
                        <button className="select-service-btn" style={{ backgroundColor: calculator.color }}>
                          {calculator.calculatorName}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Calculator;