import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
import { portfolioProjects } from '../data/projects';
import { ALL_SERVICES } from '../config/services';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Use the auto-generated portfolio projects - completely dynamic!
  const allProjects = portfolioProjects.map(project => ({
    id: project.id,
    title: project.title,
    category: project.category, // Commercial or Residential (shown on card)
    services: project.services || [], // Services array for filtering
    description: project.description,
    image: project.image,
    status: project.status,
    year: project.year,
    location: project.location,
    features: project.features,
    link: project.route
  }));

  // Auto-generate service filters from actual project data
  // Get all unique services from projects
  const allServicesInProjects = new Set();
  allProjects.forEach(project => {
    if (project.services && Array.isArray(project.services)) {
      project.services.forEach(service => allServicesInProjects.add(service));
    }
  });
  
  // Only show services that have projects
  const availableServices = Array.from(allServicesInProjects).sort();
  const serviceFilters = ['All', ...availableServices];

  // Filter projects based on active service filter
  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => 
        project.services && project.services.includes(activeFilter)
      );

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <>
      <SEO
        title={seoData.projects.title}
        description={seoData.projects.description}
        keywords={seoData.projects.keywords}
        canonical={seoData.projects.canonical}
        schema={seoData.projects.schema}
        ogImage="/images/og-projects.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
      <main className="main-wrapper-2">
        <div className="portfolio-page">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="container">
            <div className="portfolio-hero-content">
              <h1 className="portfolio-hero-title">Our Projects</h1>
              <p className="portfolio-hero-subtitle">
                Discover our portfolio of exceptional projects that showcase our expertise in 
                interior design, construction, and innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section - Services */}
        <section className="portfolio-filter">
          <div className="container">
            <div className="portfolio-filter-tabs">
              {serviceFilters.map((service) => (
                <button 
                  key={service} 
                  className={`portfolio-filter-tab ${service === activeFilter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="portfolio-grid-section">
          <div className="container">
            <div className="portfolio-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="portfolio-card">
                  <div className="portfolio-image">
                    <LazyImage src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-status">
                        <span className={`portfolio-status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <div className="portfolio-meta">
                      <span className="portfolio-category">{project.category}</span>
                      <span className="portfolio-year">{project.year}</span>
                    </div>
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <div className="portfolio-location">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      {project.location}
                    </div>
                    <div className="portfolio-features">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="portfolio-feature-tag">{feature}</span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="portfolio-feature-tag more">+{project.features.length - 3} more</span>
                      )}
                    </div>
                    <div className="portfolio-actions">
                      {project.link !== '#' ? (
                        <Link to={project.link} className="portfolio-btn-view">
                          View Project
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      ) : (
                        <button className="portfolio-btn-view disabled" disabled>
                          Coming Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="portfolio-cta">
          <div className="container">
            <div className="portfolio-cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss your vision and create something extraordinary together.</p>
              <Link to="/contact" className="portfolio-btn-cta">
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Projects;