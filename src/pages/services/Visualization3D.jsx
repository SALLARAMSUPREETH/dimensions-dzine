import { Link } from 'react-router-dom';
import { FaEye, FaCube, FaCamera, FaDesktop } from 'react-icons/fa';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import LazyImage from '../../components/LazyImage';
import SEO from '../../components/SEO';
import { serviceSeoData } from '../../config/seoData';
import { getFeaturedProjectsByService } from '../../utils/projectFilters';
import './Visualization3D.css';

const Visualization3D = () => {
  // Automatically get projects for this service
  const serviceProjects = getFeaturedProjectsByService('3D Visualization', 3);

  return (
    <>
      <SEO
        title={serviceSeoData.visualization3D.title}
        description={serviceSeoData.visualization3D.description}
        keywords={serviceSeoData.visualization3D.keywords}
        canonical={serviceSeoData.visualization3D.canonical}
        ogImage="/images/services/3d-visualization-og.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
          
          {/* Hero Section */}
          <section className="construction-hero">
            <div className="container-large">
              <div className="construction-hero-content">
                <h1 className="construction-hero-title">
                  3D <span className="title-highlight">Visualization</span>
                </h1>
                <p className="construction-hero-subtitle">
                  See your vision before it's built with photorealistic 3D renderings and immersive virtual tours
                </p>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="construction-intro">
            <div className="container-large">
              <div className="intro-grid">
                <div className="intro-text-content">
                  <h2 className="section-title-construction">See Your Vision Before It's Built</h2>
                  <p className="intro-description">
                    Experience your project in stunning detail before construction begins — make confident decisions with our cutting-edge 3D visualization technology. Our photorealistic renders help you visualize every aspect of your design.
                  </p>
                </div>
                <div className="intro-image-wrapper">
                  <LazyImage
                    src="/images/services/3d - services.jpg"
                    alt="3D Visualization Services"
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
                    <FaEye />
                  </div>
                  <h3 className="service-title-construction">Photorealistic Renders</h3>
                  <p className="service-desc-construction">
                    Stunning 3D visualizations that look exactly like the finished space
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaCube />
                  </div>
                  <h3 className="service-title-construction">3D Modeling</h3>
                  <p className="service-desc-construction">
                    Detailed 3D models of your space with accurate dimensions and layouts
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaCamera />
                  </div>
                  <h3 className="service-title-construction">Virtual Tours</h3>
                  <p className="service-desc-construction">
                    Immersive walkthroughs that let you explore your design in 360 degrees
                  </p>
                </div>

                <div className="service-card-construction">
                  <div className="service-icon-construction">
                    <FaDesktop />
                  </div>
                  <h3 className="service-title-construction">Animation</h3>
                  <p className="service-desc-construction">
                    Dynamic animations showcasing your design from multiple perspectives
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
              <h2 className="section-title-construction">Featured 3D Visualizations</h2>
              <p className="section-subtitle-construction">Explore our photorealistic 3D renderings</p>
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
                    <Link to="/projects" className="link-btn-construction">View All Visualizations →</Link>
                  </div>
                </>
              ) : (
                <div className="projects-empty-state">
                  <p>No projects available yet. Check back soon!</p>
                  <Link to="/projects" className="link-btn-construction">View All Visualizations →</Link>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="construction-cta">
            <div className="container-large">
              <div className="cta-content-construction">
                <h2 className="cta-title-construction">Ready to See Your Vision Come to Life?</h2>
                <p className="cta-text-construction">
                  Experience your design in stunning detail before construction begins. Request your 3D visualization today.
                </p>
                <div className="cta-buttons-construction">
                  <Link to="/contact" className="btn-primary-construction">
                    Get Your 3D Rendering
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

export default Visualization3D;
