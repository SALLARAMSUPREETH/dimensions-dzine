import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './Consultation.css';

const Consultation = () => {
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
                <span className="const-breadcrumb-current">Consultation</span>
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
                  <h1 className="const-hero-title">Expert Guidance for Your Design Journey</h1>
                  <p className="const-hero-tagline">Professional advice to make informed decisions and avoid costly mistakes.</p>
                  <p className="const-hero-description">
                    From concept to execution — get expert consultation on design, budget, style, and project planning to ensure your vision becomes reality.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Book Free Consultation</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/consultation - services.jpg"
                    alt="Professional Design Consultation Services"
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
                  <div className="const-stat-number">500+</div>
                  <div className="const-stat-label">Consultations Provided</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">100%</div>
                  <div className="const-stat-label">Client Satisfaction</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">10+</div>
                  <div className="const-stat-label">Years Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Consultation Success Stories */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Consultation Success Stories</h2>
              <p className="const-section-subtitle">Projects that started with expert guidance</p>
              <div className="const-projects-grid">
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Home-011_1-p-1080.jpeg"
                      alt="Residential Consultation Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Luxury Home</h4>
                      <p className="const-project-details">Complete Design Guidance · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Office-002_1-p-1080.jpeg"
                      alt="Office Consultation Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Corporate Office</h4>
                      <p className="const-project-details">Strategic Planning · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Home-016_1-p-1080.jpeg"
                      alt="Interior Consultation Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Modern Residence</h4>
                      <p className="const-project-details">Style & Budget Consultation · Hyderabad</p>
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
                <h2 className="const-cta-title">Need Expert Design Advice?</h2>
                <p className="const-cta-description">Get professional guidance to make your design project a success. Schedule your free consultation today.</p>
                <Link to="/contact" className="const-btn-primary">Book Your Consultation</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
