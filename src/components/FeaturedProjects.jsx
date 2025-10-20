import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import LazyImage from './LazyImage';
import { featuredProjects } from '../data/projects';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section projects-section" 
      aria-labelledby="featured-projects-title"
    >
      <div className="container">
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-4">
            <h2 id="featured-projects-title" className="section-title">
              Featured Projects
            </h2>
          </div>
          <p className="section-subtitle mx-auto">
            Discover our most impactful architectural projects that showcase innovation, 
            sustainability, and exceptional design excellence.
          </p>
        </div>
        
        <div className="projects-grid" role="list">
          {featuredProjects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.route} 
              className="project-card"
              role="listitem"
              aria-label={`View details for ${project.title} project`}
              tabIndex={0}
            >
              <div className="project-image-wrapper">
                <LazyImage 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project showcasing ${project.description}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="project-image"
                />
                <div className="project-overlay" aria-hidden="true">
                  <div className="project-category">{project.category}</div>
                  <div className="service-cta">
                    <span className="cta-text">View Details</span>
                    <div className="cta-arrow">→</div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta" aria-label="Project details">
                    <div className="project-timeline" title="Project timeline">
                      <span className="sr-only">Timeline: </span>
                      {project.timeline}
                    </div>
                    <div className="project-size" title="Project scale">
                      <span className="sr-only">Scale: </span>
                      {project.size}
                    </div>
                  </div>
                </div>
                

              </div>
            </Link>
          ))}
        </div>
        
        <div className="projects-view-more">
          <Link 
            to="/projects" 
            className="btn-view-more-projects"
            aria-label="View all architectural projects in our portfolio"
          >
            <span>View All Projects</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              aria-hidden="true"
              role="presentation"
            >
              <path 
                d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;