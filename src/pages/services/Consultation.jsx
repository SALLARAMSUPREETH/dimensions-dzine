import { Link } from 'react-router-dom';
import { FaComments, FaClipboardCheck, FaChartLine, FaHandshake } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './Consultation.css';

const Consultation = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('Consultation', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.consultation.title}
        description={serviceSeoData.consultation.description}
        keywords={serviceSeoData.consultation.keywords}
        canonical={serviceSeoData.consultation.canonical}
        ogImage="/images/services/consultation-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  Design <span className="title-highlight">Consultation</span>
                </h1>
                <p className="construction-hero-subtitle">
                  Expert guidance for your design journey with professional advice to make informed decisions
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">Expert Guidance for Your Design Journey</h2>
                  <p className="intro-description">
                    From concept to execution — get expert consultation on design, budget, style, and project planning to ensure your vision becomes reality. Our experienced consultants help you avoid costly mistakes and make informed decisions.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/consultation - services.jpg"
                    alt="Design Consultation Services"
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
                    <FaComments />
                  </div>
                  <h3 className="service-title-construction">Design Consultation</h3>
                  <p className="service-desc-construction">
                    Professional advice on style, layout, and design concepts for your space
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaChartLine />
                  </div>
                  <h3 className="service-title-construction">Budget Planning</h3>
                  <p className="service-desc-construction">
                    Strategic budget allocation and cost optimization for your project
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaClipboardCheck />
                  </div>
                  <h3 className="service-title-construction">Style Assessment</h3>
                  <p className="service-desc-construction">
                    Identify your design preferences and create a cohesive style guide
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaHandshake />
                  </div>
                  <h3 className="service-title-construction">Project Guidance</h3>
                  <p className="service-desc-construction">
                    End-to-end support and expert recommendations throughout your project
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
              <h2 className="section-title-construction">Consultation Success Stories</h2>
              <p className="section-subtitle-construction">Projects that started with expert guidance</p>
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
                <h2 className="cta-title-construction">Need Expert Design Advice?</h2>
                <p className="cta-text-construction">
                  Get professional guidance to make your design project a success. Schedule your free consultation today.
                </p>
                <div className="cta-buttons-construction">
                  <Link to="/contact" className="btn-primary-construction">
                    Book Your Consultation
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

export default Consultation;
