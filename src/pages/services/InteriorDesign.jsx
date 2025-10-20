import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './InteriorDesign.css';

const InteriorDesign = () => {
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
                <span className="const-breadcrumb-current">Interior Design</span>
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
                  <h1 className="const-hero-title">Spaces That Reflect Your Unique Style</h1>
                  <p className="const-hero-tagline">Bespoke interiors combining aesthetics, functionality, and your personality.</p>
                  <p className="const-hero-description">
                    From concept to completion — we create stunning interiors that inspire and delight, tailored to your lifestyle and preferences.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Get a Free Consultation</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/interior-services.jpg"
                    alt="Professional Interior Design Services"
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
                  <div className="const-stat-number">150+</div>
                  <div className="const-stat-label">Interiors Designed</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">98%</div>
                  <div className="const-stat-label">Client Satisfaction</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">10+</div>
                  <div className="const-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Interior Projects */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Featured Interior Design Projects</h2>
              <p className="const-section-subtitle">Explore our stunning interior transformations</p>
              <div className="const-projects-grid">
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Enscape_2025-05-06-18-05-41.png"
                      alt="Modern Living Room Interior Design"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Luxury Living Room</h4>
                      <p className="const-project-details">Contemporary Design · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/7-min.png"
                      alt="Kids Bedroom Interior Design"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Kids Bedroom</h4>
                      <p className="const-project-details">Playful & Functional · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/6-min.png"
                      alt="Master Bedroom Interior Design"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Master Bedroom</h4>
                      <p className="const-project-details">Elegant & Serene · Hyderabad</p>
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
                <h2 className="const-cta-title">Ready to Transform Your Space?</h2>
                <p className="const-cta-description">Let's create an interior that perfectly reflects your style. Schedule your free consultation today.</p>
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

export default InteriorDesign;
