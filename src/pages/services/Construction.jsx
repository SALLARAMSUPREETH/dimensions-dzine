import { Link } from 'react-router-dom';
import { FaClipboardList, FaCheckCircle, FaClock, FaTruck, FaHardHat, FaComments, FaStar } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './Construction.css';

const Construction = () => {
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
                <span className="const-breadcrumb-current">Construction</span>
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
                  <h1 className="const-hero-title">Building Dreams from Plans to Perfection</h1>
                  <p className="const-hero-tagline">Precision. Integrity. Craftsmanship. Every project delivered on time, every time.</p>
                  <p className="const-hero-description">
                    From concept to completion — we handle planning, design, and construction with unmatched precision and accountability.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Get a Free Consultation</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/construction-services.jpg"
                    alt="Professional Construction Services"
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
                  <div className="const-stat-number">120+</div>
                  <div className="const-stat-label">Projects Completed</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">100%</div>
                  <div className="const-stat-label">On-Time Delivery</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">10+</div>
                  <div className="const-stat-label">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Construction Projects */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Featured Construction Projects</h2>
              <p className="const-section-subtitle">Explore our recent works built with precision and trust</p>
              <div className="const-projects-grid">
                <Link to="/projects/smash-arena" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/1-min.png"
                      alt="Smash Arena Sports Facility Construction"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Smash Arena</h4>
                      <p className="const-project-details">15,000 sq ft Sports Facility · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/4-min.png"
                      alt="Commercial Building Construction"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Commercial Complex</h4>
                      <p className="const-project-details">Modern Architecture · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/3-min.png"
                      alt="Residential Construction Project"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Luxury Residence</h4>
                      <p className="const-project-details">Premium Finishes · Hyderabad</p>
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
                <h2 className="const-cta-title">Let's Build Your Vision Together</h2>
                <p className="const-cta-description">Ready to start your next project? Schedule your free consultation today.</p>
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

export default Construction;
