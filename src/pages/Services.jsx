import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
import ServiceAccordion from '../components/ServiceAccordion';
import './Home.css';

const Services = () => {
  const navigate = useNavigate();
  // All Services - Complete list
  const allServices = [
    {
      id: 1,
      title: "Construction",
      tagline: "BUILD YOUR DREAM",
      description: "From foundation to finish — precise, reliable, on time.",
      image: "/images/services/construction-services.jpg",
      features: ["Project Management", "Quality Control", "Timeline Management", "End-to-End Material Sourcing"],
      cta: "Learn More",
      link: "/services/construction"
    },
    {
      id: 2,
      title: "Interior Design",
      tagline: "DESIGN YOUR SPACE",
      description: "Bespoke interiors that reflect your unique style.",
      image: "/images/services/interior-services.jpg",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
      cta: "Learn More",
      link: "/services/interior-design"
    },
    {
      id: 3,
      title: "Renovation",
      tagline: "RENEW YOUR HOME",
      description: "Transform existing spaces with innovative solutions.",
      image: "/images/services/renovation-services.jpg",
      features: ["Kitchen Renovation", "Bathroom Remodeling", "Living Space Updates", "Structural Changes"],
      cta: "Learn More",
      link: "/services/renovation"
    },
    {
      id: 4,
      title: "Consultation",
      tagline: "EXPERT GUIDANCE",
      description: "Professional advice for your next project.",
      image: "/images/services/consultation - services.jpg",
      features: ["Design Consultation", "Budget Planning", "Style Assessment", "Project Guidance"],
      cta: "Learn More",
      link: "/services/consultation"
    },
    {
      id: 5,
      title: "3D Visualization",
      tagline: "SEE IT FIRST",
      description: "Experience your project before it's built.",
      image: "/images/services/3d - services.jpg",
      features: ["3D Rendering", "Virtual Tours", "AR Visualization", "Design Iterations"],
      cta: "Learn More",
      link: "/services/3d-visualization"
    },
    {
      id: 6,
      title: "Material Sourcing",
      tagline: "PREMIUM MATERIALS",
      description: "Finest materials from trusted suppliers worldwide.",
      image: "/images/services/material-services.jpg",
      features: ["Premium Materials", "Global Sourcing", "Quality Assurance", "Cost Optimization"],
      cta: "Learn More",
      link: "/services/material-sourcing"
    }
  ];

  return (
    <>
      <SEO
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
        canonical={seoData.services.canonical}
        schema={seoData.services.schema}
        ogImage="/images/og-services.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
      <main className="main-wrapper-2">
        {/* Services Section */}
        <section className="section services-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="padding-vertical-2">
                <div className="section-title margin-bottom margin-large">
                  <div className="overflow-hidden">
                    <h2>Our Services</h2>
                  </div>
                </div>

                {/* All Services Grid */}
                <div className="services-grid">
                  {allServices.map((service) => (
                    <div key={service.id} onClick={() => navigate(service.link)} className="service-card">
                      <div className="service-image-container">
                        <LazyImage src={service.image} alt={service.title} className="service-image" />
                        <div className="service-overlay">
                          <div className="service-tagline">{service.tagline}</div>
                          <div className="service-cta">
                              <span className="cta-text">{service.cta}</span>
                            <span className="cta-arrow">→</span>
                          </div>
                        </div>
                      </div>
                      <div className="service-content">
                        <h3 className="service-content-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        
                        {/* Desktop - Regular List */}
                        <ul className="service-features">
                          {service.features.map((feature, index) => (
                            <li key={index} className="feature-item">
                              <span className="feature-icon">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        {/* Mobile - Accordion */}
                        <ServiceAccordion features={service.features} />
                      </div>
                    </div>
                  ))}
                </div>
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

export default Services;
