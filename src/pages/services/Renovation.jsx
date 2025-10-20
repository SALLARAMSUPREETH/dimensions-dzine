import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './Renovation.css';

const Renovation = () => {
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
                <span className="const-breadcrumb-current">Renovation</span>
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
                  <h1 className="const-hero-title">Transform Your Space with Expert Renovation</h1>
                  <p className="const-hero-tagline">Breathe new life into existing spaces with innovative solutions.</p>
                  <p className="const-hero-description">
                    From kitchen makeovers to complete home transformations — we renovate with precision, minimal disruption, and maximum impact.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Get a Free Consultation</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/renovation-services.jpg"
                    alt="Professional Renovation Services"
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
                  <div className="const-stat-number">90+</div>
                  <div className="const-stat-label">Renovations Completed</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">95%</div>
                  <div className="const-stat-label">On-Budget Projects</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">10+</div>
                  <div className="const-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Renovation Projects */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Featured Renovation Projects</h2>
              <p className="const-section-subtitle">See how we've transformed existing spaces</p>
              <div className="const-projects-grid">
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/WhatsApp-Image-2025-04-04-at-2.31.34-PM-2.jpeg"
                      alt="Kitchen Renovation Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Modern Kitchen</h4>
                      <p className="const-project-details">Complete Makeover · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Enscape_2025-04-06-10-48-50.jpg"
                      alt="Living Space Renovation"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Living Space Update</h4>
                      <p className="const-project-details">Contemporary Design · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/WhatsApp-Image-2025-04-04-at-2.31.34-PM.jpeg"
                      alt="Commercial Renovation"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Cafe Renovation</h4>
                      <p className="const-project-details">Modern Ambiance · Hyderabad</p>
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
                <h2 className="const-cta-title">Ready to Renovate Your Space?</h2>
                <p className="const-cta-description">Transform your existing space into something extraordinary. Schedule your free consultation today.</p>
                <Link to="/contact" className="const-btn-primary">Get Your Free Quote</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Renovation;
