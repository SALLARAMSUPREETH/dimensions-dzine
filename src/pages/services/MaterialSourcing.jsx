import { Link } from 'react-router-dom';
import { FaBox, FaGlobe, FaShieldAlt, FaTruck } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './MaterialSourcing.css';

const MaterialSourcing = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('Material Sourcing', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.materialSourcing.title}
        description={serviceSeoData.materialSourcing.description}
        keywords={serviceSeoData.materialSourcing.keywords}
        canonical={serviceSeoData.materialSourcing.canonical}
        ogImage="/images/services/material-sourcing-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  Material <span className="title-highlight">Sourcing</span>
                </h1>
                <p className="construction-hero-subtitle">
                  Premium materials from trusted global suppliers with quality materials that bring your design vision to life
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">Premium Materials from Trusted Global Suppliers</h2>
                  <p className="intro-description">
                    Access the finest materials worldwide — from exclusive finishes to sustainable options, we source premium materials that ensure quality and value. Our extensive network of suppliers guarantees competitive pricing and timely delivery.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/material-services.jpg"
                    alt="Material Sourcing Services"
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
                    <FaGlobe />
                  </div>
                  <h3 className="service-title-construction">Global Sourcing</h3>
                  <p className="service-desc-construction">
                    Access to premium materials from trusted suppliers worldwide
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaShieldAlt />
                  </div>
                  <h3 className="service-title-construction">Quality Assurance</h3>
                  <p className="service-desc-construction">
                    Certified materials with guaranteed quality and durability
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaBox />
                  </div>
                  <h3 className="service-title-construction">Wide Selection</h3>
                  <p className="service-desc-construction">
                    Extensive range of finishes, tiles, fixtures, and fittings
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaTruck />
                  </div>
                  <h3 className="service-title-construction">Timely Delivery</h3>
                  <p className="service-desc-construction">
                    Efficient logistics ensuring materials arrive when you need them
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
              <h2 className="section-title-construction">Featured Material Sourcing Projects</h2>
              <p className="section-subtitle-construction">Projects showcasing premium materials</p>
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
                <h2 className="cta-title-construction">Need Premium Materials for Your Project?</h2>
                <p className="cta-text-construction">
                  Let us source the finest materials that bring your design vision to life. Get started today.
                </p>
                <div className="cta-buttons-construction">
                  <Link to="/contact" className="btn-primary-construction">
                    Request Material Sourcing
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

export default MaterialSourcing;
