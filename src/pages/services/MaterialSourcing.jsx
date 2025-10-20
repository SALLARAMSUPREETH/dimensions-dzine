import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './MaterialSourcing.css';

const MaterialSourcing = () => {
  return (
    <div className="page-wrapper-2">
      <Header />
      <main className="main-wrapper-2">
        {/* Breadcrumb */}
        <section className="const-breadcrumb-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="const-breadcrumb">
                <Link to="/">Home</Link>
                <span className="const-breadcrumb-sep">/</span>
                <Link to="/services">Services</Link>
                <span className="const-breadcrumb-sep">/</span>
                <span className="const-breadcrumb-current">Material Sourcing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="const-hero-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="const-hero-grid">
                <div className="const-hero-content">
                  <h1 className="const-hero-title">Premium Materials from Trusted Global Suppliers</h1>
                  <p className="const-hero-tagline">Quality materials that bring your design vision to life.</p>
                  <p className="const-hero-description">
                    Access the finest materials worldwide — from exclusive finishes to sustainable options, we source premium materials that ensure quality and value.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Request Material Sourcing</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/material-services.jpg"
                    alt="Professional Material Sourcing Services"
                    className="const-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="const-stats-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="const-stats-grid">
                <div className="const-stat-item">
                  <div className="const-stat-number">75+</div>
                  <div className="const-stat-label">Global Suppliers</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">100%</div>
                  <div className="const-stat-label">Quality Assured</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">30%</div>
                  <div className="const-stat-label">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Material Sourcing Projects */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Featured Material Sourcing Projects</h2>
              <p className="const-section-subtitle">Projects showcasing premium materials</p>
              <div className="const-projects-grid">
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Enscape_2025-04-06-10-21-11_MB3.jpg"
                      alt="Premium Materials in Parking Facility"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Premium Finishes</h4>
                      <p className="const-project-details">High-Quality Materials · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Enscape_2025-04-06-10-21-11_MB2.jpg"
                      alt="Sustainable Materials Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Sustainable Materials</h4>
                      <p className="const-project-details">Eco-Friendly Sourcing · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/4-min.png"
                      alt="Luxury Materials Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Luxury Materials</h4>
                      <p className="const-project-details">Exclusive Finishes · Hyderabad</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="const-projects-cta">
                <Link to="/portfolio" className="const-link-btn">View All Projects →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="const-cta-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="const-cta-content">
                <h2 className="const-cta-title">Need Premium Materials for Your Project?</h2>
                <p className="const-cta-description">Let us source the finest materials that bring your design vision to life. Get started today.</p>
                <Link to="/contact" className="const-btn-primary">Request Material Sourcing</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialSourcing;
