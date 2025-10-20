import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaClock, 
  FaHammer, 
  FaMapMarkerAlt, 
  FaUsers,
  FaRulerCombined,
  FaBuilding,
  FaAward
} from 'react-icons/fa';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import LazyImage from './LazyImage';
import { GOOGLE_FORM_CONFIG } from '../config/formConfig';
import './ProjectShowcase.css';

const ProjectShowcase = ({ projectData }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const validateForm = () => {
    const errors = {};
    
    // Name is required
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Either email or phone is required
    if (!formData.email.trim() && !formData.phone.trim()) {
      errors.contact = 'Please provide either email or phone number';
    } else {
      // Validate email if provided
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
      
      // Validate phone if provided
      if (formData.phone.trim() && !/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'Please enter a valid phone number';
      }
    }
    
    // Project type is required
    if (!formData.projectType) {
      errors.projectType = 'Please select a project type';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageClick = (index) => {
    setModalImageIndex(index);
    setShowModal(true);
    setIsZoomed(false);
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const getCurrentImages = () => {
    return projectData.designPhases[activePhase].images;
  };

  const handleNextImage = () => {
    const currentImages = getCurrentImages();
    setModalImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const handlePrevImage = () => {
    const currentImages = getCurrentImages();
    setModalImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'Escape') setShowModal(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');

    try {
      const submitData = new FormData();
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.name, formData.name);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.phone, formData.phone);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.projectTypeInquiry, formData.projectType);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.message, formData.message);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.projectName, projectData.title);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.projectType, projectData.projectType);
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.source, 'Project Showcase Page');
      
      // Submit to Google Forms
      await fetch(GOOGLE_FORM_CONFIG.action, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: submitData
      });

      // Since we're using no-cors, we can't check the response status
      // But if no error is thrown, we assume success
      setFormStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setFormErrors({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="page-wrapper-2">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="main-wrapper-2">
        {/* Hero Section */}
        <section className="project-hero">
          <div className="project-hero-content">
            <div className="project-breadcrumb">
              <Link to="/">Home</Link>
              <span> / </span>
              <Link to="/portfolio">Projects</Link>
              <span> / </span>
              <span className="breadcrumb-current">{projectData.title}</span>
            </div>
            <div className="project-meta">
              {projectData.projectType && (
                <span className="project-type">{projectData.projectType}</span>
              )}
              {projectData.completionDate && (
                <span className="project-date">Completed {projectData.completionDate}</span>
              )}
            </div>
            <h1 className="project-title">{projectData.title}</h1>
            <p className="project-subtitle">{projectData.subtitle}</p>
            <div className="project-hero-image">
              <LazyImage 
                src={projectData.heroImage} 
                alt={projectData.heroImageAlt || `${projectData.title} - Main View`} 
              />
            </div>
            
            {/* Hero CTA */}
            <div className="hero-cta">
              <Link to="/contact" className="hero-cta-button">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Design Process Gallery */}
        <section className="before-after-gallery">
          <div className="container gallery-project-container">
            <h2>Design Process</h2>
            <div className="gallery-tabs">
              {projectData.designPhases.map((phase, index) => (
                <button 
                  key={index}
                  className={`tab-button ${activePhase === index ? 'active' : ''}`}
                  onClick={() => setActivePhase(index)}
                >
                  {phase.name}
                </button>
              ))}
            </div>
            
            <div className="gallery-content">
              <div className="project-gallery">
                {getCurrentImages().map((image, index) => (
                  <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
                    <LazyImage 
                      src={image.src} 
                      alt={image.alt} 
                      title={image.context || image.description}
                    />
                    <div className="gallery-overlay">
                      <span>{image.name}</span>
                    </div>
                    {image.description && (
                      <div className="gallery-caption">
                        <p>{image.description}</p>
                        {image.context && (
                          <p className="gallery-context">{image.context}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="key-highlights">
          <div className="container">
            <h2>Project Highlights</h2>
            <div className="highlights-grid">
              {projectData.highlights.map((highlight, index) => {
                // Map highlight icons to appropriate React icons
                const getIcon = (iconName) => {
                  switch(iconName) {
                    case 'FaClock': return <FaClock />;
                    case 'FaRulerCombined': return <FaRulerCombined />;
                    case 'FaBuilding': return <FaBuilding />;
                    case 'FaUsers': return <FaUsers />;
                    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
                    case 'FaHammer': return <FaHammer />;
                    default: return <FaClock />;
                  }
                };
                
                return (
                  <div key={index} className="highlight-card">
                    <div className="highlight-icon">{getIcon(highlight.icon)}</div>
                    <div className="highlight-content">
                      <h3>{highlight.title}</h3>
                      <p className="highlight-description">{highlight.description}</p>
                      <p className="highlight-detail">{highlight.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Inquiry Form */}
        <section className="project-inquiry">
          <div className="container">
            <div className="inquiry-content">
              <div className="inquiry-text">
                <h2>Interested in a Similar Project?</h2>
                <p>Get a personalized quote and consultation for your project. Our team is ready to bring your vision to life.</p>
                <div className="inquiry-benefits">
                  <div className="benefit-item">
                    <FaClock className="benefit-icon" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="benefit-item">
                    <FaHammer className="benefit-icon" />
                    <span>Turnkey Solutions</span>
                  </div>
                  <div className="benefit-item">
                    <FaAward className="benefit-icon" />
                    <span>Quality Guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="inquiry-form">
                <form 
                  className="project-form" 
                  onSubmit={handleFormSubmit}
                >
                  {/* Hidden fields for project context */}
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.projectName} value={projectData.title} />
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.projectType} value={projectData.projectType} />
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.source} value="Project Showcase Page" />
                  
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *" 
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address" 
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number" 
                      className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                  </div>
                  
                  {formErrors.contact && (
                    <div className="form-group">
                      <span className="error-message">{formErrors.contact}</span>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={formErrors.projectType ? 'error' : ''}
                    >
                      <option value="">Project Type *</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Retail">Retail</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.projectType && <span className="error-message">{formErrors.projectType}</span>}
                  </div>
                  
                  <div className="form-group">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project (optional)" 
                      rows="4"
                    ></textarea>
                  </div>
                  
                  {/* Form Status Messages */}
                  {formStatus === 'success' && (
                    <div className="form-message success">
                      <FaAward className="message-icon" />
                      <span>Thank you! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="form-message error">
                      <span>Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Get Free Quote'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        {projectData.testimonial ? (
          <section className="client-testimonial">
            <div className="container">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <h2>Client Testimonial</h2>
                  <blockquote>
                    "{projectData.testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {projectData.testimonial.clientImage ? (
                        <LazyImage  src={projectData.testimonial.clientImage} alt={projectData.testimonial.author} />
                      ) : (
                        <div className="avatar-placeholder">
                          {projectData.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="author-info">
                      <h4>{projectData.testimonial.author}</h4>
                      <p>{projectData.testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="testimonial-fallback">
            <div className="container">
              <div className="fallback-content">
                <h2>Project Success</h2>
                <p>This project was completed successfully with full client satisfaction. We're proud of the results and the positive impact it has created.</p>
                <div className="success-metrics">
                  <div className="metric">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">On-Time Delivery</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Client Satisfaction</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">45</span>
                    <span className="metric-label">Days Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="project-showcase-cta">
          <div className="container">
            <div className="showcase-cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's create something amazing for your space</p>
              <Link to="/contact" className="showcase-cta-button">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {showModal && (
          <div 
            className="image-modal" 
            onClick={() => setShowModal(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
              
              {/* Navigation Arrows */}
              <button 
                className="modal-arrow modal-arrow-left" 
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              
              <button 
                className="modal-arrow modal-arrow-right" 
                onClick={handleNextImage}
                aria-label="Next image"
              >
                ›
              </button>

              {/* Zoom Button */}
              <button 
                className="zoom-button"
                onClick={handleZoomToggle}
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? "🔍-" : "🔍+"}
              </button>
              
            <LazyImage  
              src={getCurrentImages()[modalImageIndex].src} 
              alt={getCurrentImages()[modalImageIndex].alt}
              title={getCurrentImages()[modalImageIndex].context || getCurrentImages()[modalImageIndex].description}
              className={isZoomed ? 'modal-image-zoomed' : 'modal-image-normal'}
            />
              
              {/* Image Counter */}
              <div className="image-counter">
                {modalImageIndex + 1} / {getCurrentImages().length}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectShowcase;
