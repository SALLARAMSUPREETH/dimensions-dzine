import { Link } from 'react-router-dom';
import { FaHardHat, FaClipboardList, FaTools, FaCheckCircle } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './Construction.css';

const Construction = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('Construction', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.construction.title}
        description={serviceSeoData.construction.description}
        keywords={serviceSeoData.construction.keywords}
        canonical={serviceSeoData.construction.canonical}
        ogImage="/images/services/construction-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  Construction <span className="title-highlight">Services</span>
                </h1>
                <p className="construction-hero-subtitle">
                  Building your vision with precision, quality, and timely delivery
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">Professional Construction Solutions</h2>
                  <p className="intro-description">
                    From foundation to finish, we handle every aspect of your construction project with expertise and care. Our team delivers quality workmanship, transparent pricing, and on-time completion.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/construction-services.jpg"
                    alt="Construction Services"
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
                    <FaHardHat />
                  </div>
                  <h3 className="service-title-construction">Residential Construction</h3>
                  <p className="service-desc-construction">
                    Custom homes, villas, and apartments built to your specifications
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaClipboardList />
                  </div>
                  <h3 className="service-title-construction">Commercial Projects</h3>
                  <p className="service-desc-construction">
                    Office spaces, retail stores, and commercial complexes
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaTools />
                  </div>
                  <h3 className="service-title-construction">Renovation & Remodeling</h3>
                  <p className="service-desc-construction">
                    Transform existing spaces with structural improvements
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaCheckCircle />
                  </div>
                  <h3 className="service-title-construction">Project Management</h3>
                  <p className="service-desc-construction">
                    End-to-end oversight ensuring quality and timely delivery
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
              <h2 className="section-title-construction">Featured Projects</h2>
              <p className="section-subtitle-construction">See our construction work in action</p>
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
                <h2 className="cta-title-construction">Ready to Start Your Project?</h2>
                <p className="cta-text-construction">
                  Get a free consultation and detailed quote for your construction needs
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

export default Construction;
