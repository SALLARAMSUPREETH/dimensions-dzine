import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import './Visualization3D.css';

const Visualization3D = () => {
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
                <span className="const-breadcrumb-current">3D Visualization</span>
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
                  <h1 className="const-hero-title">See Your Vision Before It's Built</h1>
                  <p className="const-hero-tagline">Photorealistic 3D renderings and immersive virtual tours.</p>
                  <p className="const-hero-description">
                    Experience your project in stunning detail before construction begins — make confident decisions with our cutting-edge 3D visualization technology.
                  </p>
                  <div className="const-hero-actions">
                    <Link to="/contact" className="const-btn-primary">Request 3D Rendering</Link>
                  </div>
                </div>
                <div className="const-hero-image-wrapper">
                  <LazyImage
                    src="/images/services/3d - services.jpg"
                    alt="Professional 3D Visualization Services"
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
                  <div className="const-stat-number">400+</div>
                  <div className="const-stat-label">3D Renders Created</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">100%</div>
                  <div className="const-stat-label">Photorealistic Quality</div>
                </div>
                <div className="const-stat-item">
                  <div className="const-stat-number">24-48h</div>
                  <div className="const-stat-label">Turnaround Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured 3D Visualization Projects */}
        <section className="const-projects-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <h2 className="const-section-title">Featured 3D Visualizations</h2>
              <p className="const-section-subtitle">Explore our photorealistic 3D renderings</p>
              <div className="const-projects-grid">
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/Enscape_2025-05-06-18-01-37.png"
                      alt="3D Visualization of Dining Space"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Luxury Dining</h4>
                      <p className="const-project-details">Photorealistic Render · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/projects/smash-arena" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/1-min.png"
                      alt="3D Visualization of Sports Facility"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Smash Arena</h4>
                      <p className="const-project-details">3D Architectural Render · Hyderabad</p>
                    </div>
                  </div>
                </Link>
                <Link to="/portfolio" className="const-project-card">
                  <div className="const-project-image-wrapper">
                    <LazyImage
                      src="/images/3-min.png"
                      alt="3D Visualization of Building Exterior"
                      className="const-project-image"
                    />
                    <div className="const-project-overlay">
                      <h4 className="const-project-name">Night View Render</h4>
                      <p className="const-project-details">Exterior Visualization · Hyderabad</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="const-projects-cta">
                <Link to="/portfolio" className="const-link-btn">View All Visualizations →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="const-cta-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="const-cta-content">
                <h2 className="const-cta-title">Ready to See Your Vision Come to Life?</h2>
                <p className="const-cta-description">Experience your design in stunning detail before construction begins. Request your 3D visualization today.</p>
                <Link to="/contact" className="const-btn-primary">Get Your 3D Rendering</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Visualization3D;
