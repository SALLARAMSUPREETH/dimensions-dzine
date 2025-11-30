import { Link } from 'react-router-dom';
import { FaHammer, FaHome, FaPaintRoller, FaWrench } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './Renovation.css';

const Renovation = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('Renovation', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.renovation.title}
        description={serviceSeoData.renovation.description}
        keywords={serviceSeoData.renovation.keywords}
        canonical={serviceSeoData.renovation.canonical}
        ogImage="/images/services/renovation-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  Renovation <span className="title-highlight">Services</span>
                </h1>
                <p className="construction-hero-subtitle">
                  Transform your space with expert renovation, breathing new life into existing spaces with innovative solutions
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">Transform Your Space with Expert Renovation</h2>
                  <p className="intro-description">
                    From kitchen makeovers to complete home transformations — we renovate with precision, minimal disruption, and maximum impact. Our renovation experts help you modernize and enhance your existing spaces.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/renovation-services.jpg"
                    alt="Renovation Services"
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
                  <h3 className="service-title-construction">Home Renovation</h3>
                  <p className="service-desc-construction">
                    Complete home makeovers including structural and aesthetic improvements
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaHammer />
                  </div>
                  <h3 className="service-title-construction">Kitchen Remodeling</h3>
                  <p className="service-desc-construction">
                    Modern kitchen renovations with updated fixtures and layouts
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaPaintRoller />
                  </div>
                  <h3 className="service-title-construction">Bathroom Upgrades</h3>
                  <p className="service-desc-construction">
                    Transform bathrooms with modern fixtures and elegant finishes
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaWrench />
                  </div>
                  <h3 className="service-title-construction">Structural Repairs</h3>
                  <p className="service-desc-construction">
                    Fix structural issues while enhancing the overall design
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

          {/* Featured Projects - Auto-filtered by service */}
          <section className="construction-projects">
            <div className="container-large">
              <h2 className="section-title-construction">Featured Renovation Projects</h2>
              <p className="section-subtitle-construction">See how we've transformed existing spaces</p>
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
                <h2 className="cta-title-construction">Ready to Renovate Your Space?</h2>
                <p className="cta-text-construction">
                  Transform your existing space into something extraordinary. Schedule your free consultation today.
                </p>
                <div className="cta-buttons-construction">
                  <Link to="/contact" className="btn-primary-construction">
                    Get Your Free Quote
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

export default Renovation;
