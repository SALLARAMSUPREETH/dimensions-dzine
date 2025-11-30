import { Link } from 'react-router-dom';
import { FaPaintBrush, FaPalette, FaHome, FaLightbulb } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './InteriorDesign.css';

const InteriorDesign = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('Interior Design', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.interiorDesign.title}
        description={serviceSeoData.interiorDesign.description}
        keywords={serviceSeoData.interiorDesign.keywords}
        canonical={serviceSeoData.interiorDesign.canonical}
        ogImage="/images/services/interior-design-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  Interior <span className="title-highlight">Design</span>
                </h1>
                <p className="construction-hero-subtitle">
                  Spaces that reflect your unique style with bespoke interiors combining aesthetics, functionality, and your personality
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">Spaces That Reflect Your Unique Style</h2>
                  <p className="intro-description">
                    From concept to completion — we create stunning interiors that inspire and delight, tailored to your lifestyle and preferences. Our design philosophy combines timeless aesthetics with modern functionality.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/interior-services.jpg"
                    alt="Interior Design Services"
                    className="intro-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What We Offer */}
          <section className="construction-services">
            <div className="container-large">
              <h2 className="section-title-construction">What We Offer</h2>
              <div className="services-grid-construction">
                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaHome />
                  </div>
                  <h3 className="service-title-construction">Residential Interiors</h3>
                  <p className="service-desc-construction">
                    Complete home interiors from living rooms to bedrooms, designed to perfection
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaPalette />
                  </div>
                  <h3 className="service-title-construction">Color Consultation</h3>
                  <p className="service-desc-construction">
                    Expert color schemes that enhance your space and reflect your personality
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaPaintBrush />
                  </div>
                  <h3 className="service-title-construction">Space Planning</h3>
                  <p className="service-desc-construction">
                    Optimize your space with intelligent layouts and functional design solutions
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaLightbulb />
                  </div>
                  <h3 className="service-title-construction">Lighting Design</h3>
                  <p className="service-desc-construction">
                    Create ambiance with strategic lighting that enhances your interior spaces
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="construction-why">
            <div className="container-large">
              <h2 className="section-title-construction">Why Choose Us</h2>
              <div className="why-grid">
                <div className="why-item">
                  <div className="why-number">01</div>
                  <h3 className="why-title">Quality Materials</h3>
                  <p className="why-desc">We use only premium, certified materials for lasting durability</p>
                </div>
                <div className="why-item">
                  <div className="why-number">02</div>
                  <h3 className="why-title">Experienced Team</h3>
                  <p className="why-desc">Skilled professionals with 10+ years of construction expertise</p>
                </div>
                <div className="why-item">
                  <div className="why-number">03</div>
                  <h3 className="why-title">On-Time Delivery</h3>
                  <p className="why-desc">Strict timelines and project management for punctual completion</p>
                </div>
                <div className="why-item">
                  <div className="why-number">04</div>
                  <h3 className="why-title">Transparent Pricing</h3>
                  <p className="why-desc">Clear quotations with no hidden costs or surprises</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="construction-projects">
            <div className="container-large">
              <h2 className="section-title-construction">Featured Interior Design Projects</h2>
              <p className="section-subtitle-construction">Explore our stunning interior transformations</p>
              {serviceProjects.length > 0 ? (
                <>
                  <div className="projects-grid-construction">
                    {serviceProjects.map((project) => (
                      <Link key={project.id} to={project.route} className="project-card-construction">
                        <div className="project-image-wrapper">
                          <LazyImage
                            src={project.image}
                            alt={project.title}
                            className="project-image-construction"
                          />
                        </div>
                        <div className="project-info-construction">
                          <h3 className="project-name-construction">{project.title}</h3>
                          <p className="project-details-construction">{project.category} · {project.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="projects-cta-construction">
                    <Link to="/projects" className="link-btn-construction">View All Projects →</Link>
                  </div>
                </>
              ) : (
                <div className="projects-empty-state">
                  <p>No projects available yet. Check back soon!</p>
                  <Link to="/projects" className="link-btn-construction">View All Projects →</Link>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="construction-cta">
            <div className="container-large">
              <div className="cta-content-construction">
                <h2 className="cta-title-construction">Ready to Transform Your Space?</h2>
                <p className="cta-text-construction">
                  Let's create an interior that perfectly reflects your style. Schedule your free consultation today.
                </p>
                <div className="cta-buttons-construction">
                  <Link to="/contact" className="btn-primary-construction">
                    Get Free Consultation
                  </Link>
                  <Link to="/calculator" className="btn-secondary-construction">
                    Calculate Cost
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default InteriorDesign;
