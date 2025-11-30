import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CTA from '../components/CTA';
import EstimateSection from '../components/EstimateSection';
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
import ServiceAccordion from '../components/ServiceAccordion';
import { useSlider } from '../hooks/useSlider';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FeaturedProjects from '../components/FeaturedProjects';
import LazyImage from '../components/LazyImage';
import { FaComments, FaPencilRuler, FaHammer, FaCogs, FaHandshake } from 'react-icons/fa';
import ScrollFadeIn from '../components/ScrollFadeIn';
import ScaleBounce from '../components/ScaleBounce';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // State for showing all projects
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Homepage Services - Limited selection
  const homepageServices = [
    {
      id: 1,
      title: "Construction",
      tagline: "BUILD YOUR DREAM",
      description: "From foundation to finish precise, reliable, on time.",
      image: "/images/services/construction-services.jpg",
      features: ["Project Management", "Quality Control", "Timeline Management", "End-to-End Material Sourcing"],
      cta: "Learn More",
      route: "/services/construction"
    },
    {
      id: 2,
      title: "Interior Design",
      tagline: "DESIGN YOUR SPACE",
      description: "Bespoke interiors that reflect your unique style.",
      image: "/images/services/interior-services.jpg",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
      cta: "Learn More",
      route: "/services/interior-design"
    },
    {
      id: 3,
      title: "Consultation",
      tagline: "EXPERT GUIDANCE",
      description: "Professional advice for your next project.",
      image: "/images/services/consultation - services.jpg",
      features: ["Design Consultation", "Budget Planning", "Style Assessment", "Project Guidance"],
      cta: "Learn More",
      route: "/services/consultation"
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      icon: FaComments,
      title: "Consultation",
      description: "Discuss your vision and needs",
      color: "#4A90E2"
    },
    {
      number: 2,
      icon: FaPencilRuler,
      title: "Design",
      description: "Create detailed concepts and 3D visuals",
      color: "#7C4DFF"
    },
    {
      number: 3,
      icon: FaHammer,
      title: "Materials",
      description: "Source premium materials and finishes",
      color: "#FF9800"
    },
    {
      number: 4,
      icon: FaCogs,
      title: "Execution",
      description: "Professional implementation with quality control",
      color: "#4CAF50"
    },
    {
      number: 5,
      icon: FaHandshake,
      title: "Handover",
      description: "Final walkthrough of your transformed space",
      color: "#E91E63"
    }
  ];

  // Testimonials data - Sourced from Google
  const testimonials = [
    {
      id: 1,
      name: "Sathwik Reddy",
      role: "Verified Google Review",
      project: "Home Interior Design",
      content: "I recently got my home interiors done, and I'm extremely happy with the results! The team went above and beyond my expectations while keeping the pricing very reasonable. What truly impressed me was how they actively took feedback throughout the work in progress, not just from me but also from other family members. Their dedication to quality and customer satisfaction really shows in the final outcome. Highly recommended!",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Deepak Somisetty",
      role: "Verified Google Review",
      project: "Interior Design Consultation",
      content: "We're impressed with the budget-friendly approach and the excellent teamwork. The creative direction and variety in interior design concepts from Dimensions Dzine truly stand out. We're happy to move forward and collaborate with them!",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Sirisha Karri",
      role: "Verified Google Review",
      project: "Complete Home Design",
      content: "The customer service and team work was top notch. Planning, designing and execution was exactly how i planned for my home. Thank you so much Dimensions Dzine team.",
      image: "/images/testimonial-3.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Ganesh Muthyala",
      role: "Verified Google Review",
      project: "Interior Design Project",
      content: "Friendly budget and team work is very good. We can proceed and collaborate with Dimensions Dezine. The thoughts of interior design is very good, I mean executing different types of designs are good.",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "Vara Prasad",
      role: "Verified Google Review",
      project: "Luxury Interior Design",
      content: "Dimensions Dzine team brings luxury and elegance to life with bespoke interior design solutions. Their creative vision and attention to detail redefine premium living spaces in Hyderabad. A top choice for those who seek timeless, high-end interiors with a personalized touch.",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "Raj Veer",
      role: "Verified Google Review",
      project: "Personalized Interior Design",
      content: "The professionalism, passion and personal touch they bring to their work truly set them apart. If you're dreaming of a space that reflects your personality and feels like 'you' this is the team to trust. ⭐⭐⭐⭐⭐",
      image: "/images/testimonial-3.jpg",
      rating: 5
    }
  ];



  // Trust Signals items for infinite scroll (duplicated in render for seamless loop)
  const trustItems = [
    {
      title: (
        <div className="trust-title">Trusted by <span className="highlight-number">200+</span> happy clients</div>
      ),
      description: <div className="trust-description">Serving Hyderabad, Warangal & across Telangana</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: (
        <div className="trust-title">Rated <span className="highlight-number">4.9/5</span> by 150+ clients</div>
      ),
      description: <div className="trust-description">Verified reviews on Google</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: <div className="trust-title">3D design previews included</div>,
      description: <div className="trust-description">See your space before construction begins</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: (
        <div className="trust-title">Fast delivery</div>
      ),
      description: <div className="trust-description">Quick turnaround without compromising quality</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: (
        <div className="trust-title">100% <span className="highlight-number">satisfaction</span> guarantee</div>
      ),
      description: <div className="trust-description">We ensure your complete satisfaction</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: (
        <div className="trust-title">Expert <span className="highlight-number">10+ years</span> experience</div>
      ),
      description: <div className="trust-description">Certified professionals with proven expertise</div>,
      icon: (
        <svg className="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // RAF-driven marquee refs/state
  const trustTrackRef = useRef(null);
  const trustAnimRef = useRef({ rafId: 0, lastTs: 0, x: 0, contentWidth: 0 });

  useEffect(() => {
    const trackEl = trustTrackRef.current;
    if (!trackEl) return;

    const state = trustAnimRef.current;

    const computeContentWidth = () => {
      const children = Array.from(trackEl.children);
      if (children.length === 0) return 0;
      // Sum width of first half (one set of items)
      const half = Math.floor(children.length / 2);
      let width = 0;
      for (let i = 0; i < half; i += 1) {
        const el = children[i];
        const styles = window.getComputedStyle(el);
        const marginRight = parseFloat(styles.marginRight) || 0;
        width += el.offsetWidth + marginRight;
      }
      return width;
    };

    const recalc = () => {
      state.contentWidth = computeContentWidth();
      // Normalize position to prevent drift
      if (state.contentWidth > 0) {
        state.x = ((state.x % state.contentWidth) + state.contentWidth) % state.contentWidth;
      }
      applyTransform();
    };

    const applyTransform = () => {
      trackEl.style.transform = `translate3d(${-state.x}px, 0, 0)`;
    };

    const speedPxPerSec = 60; // tune speed here

    const tick = (ts) => {
      if (!state.lastTs) state.lastTs = ts;
      const dt = (ts - state.lastTs) / 1000;
      state.lastTs = ts;
      if (state.contentWidth > 0) {
        state.x += speedPxPerSec * dt;
        if (state.x >= state.contentWidth) {
          state.x -= state.contentWidth;
        }
        applyTransform();
      }
      state.rafId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      // Force browser to finish layout before measuring
      cancelAnimationFrame(state.rafId);
      state.lastTs = 0;
      recalc();
      state.rafId = requestAnimationFrame(tick);
    };

    recalc();
    state.rafId = requestAnimationFrame(tick);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(state.rafId);
      state.lastTs = 0;
    };
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Reset progress animation when image changes
  useEffect(() => {
    const activeIndicator = document.querySelector('.indicator.active');
    if (activeIndicator) {
      const progressBar = activeIndicator.querySelector('::before');
      if (progressBar) {
        progressBar.style.animation = 'none';
        setTimeout(() => {
          progressBar.style.animation = 'progress 4s linear forwards';
        }, 10);
      }
    }
  }, [currentImageIndex]);

  // Helper function to get project descriptions
  

  const sliderImages = [
    "/images/Enscape_2025-05-06-18-01-37.png",
    "/images/Enscape_2025-04-06-10-48-50.jpg",
    "/images/WhatsApp-Image-2025-04-04-at-2.31.34-PM-2.jpeg",
    "/images/WhatsApp-Image-2025-04-04-at-2.31.34-PM.jpeg",
    "/images/Enscape_2025-04-06-10-21-11_MB3.jpg",
    "/images/4-min.png",
    "/images/5-min.png",
    "/images/4-min.png",
    "/images/3-min.png",
    "/images/1-min.png",
    "/images/7-min.png",
    "/images/6-min.png",
    "/images/Enscape_2025-04-06-10-21-11_MB2.jpg"
  ];

  const { currentSlide, nextSlide, prevSlide, goToSlide } = useSlider(sliderImages, true, 4000);

  

  return (
    <>
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonical={seoData.home.canonical}
        schema={seoData.home.schema}
        ogImage="/images/og-home.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">
        {/* Psychology-Optimized Hero Section */}
        <section className="section psychology-hero">
          <div className="hero-container">
            <div className="hero-content-split">
              {/* Left Side - Hook & Desire */}
              <div className="hero-left">
                <div className="brand-section">
                  {/* Clear Premium Branding */}
                  <div className="premium-branding">
                    <div className="brand-tagline">Luxury Interiors | Turnkey Projects</div>
                  </div>

                  {/* Aspirational Hook */}
                  <div className="slogan-section">
                    <h1 className="main-slogan">
                      <span className="slogan-line">Designing Spaces That Define</span>
                      <span className="slogan-line highlight">Your Lifestyle</span>
                    </h1>
                    <p className="supporting-text">
                      Timeless, functional, and personalized interiors delivered with precision across Telangana.
                    </p>
                  </div>

                  {/* Primary CTA - Value-Driven */}
                  <div className="cta-section">
                    <Link to="/contact" className="btn-primary-psychology">
                      <span className="btn-text-desktop">Book Your Free Design Consultation</span>
                      <span className="btn-text-mobile">Get Free Consultation</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <Link to="/portfolio" className="btn-secondary-psychology">
                      <span className="btn-text-desktop">View Our Portfolio</span>
                      <span className="btn-text-mobile">View Portfolio</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side - Proof & Aspiration */}
              <div className="hero-right">
                <div className="hero-image-container">
                  <div className="image-carousel">
                    <LazyImage
                      src="/images/Enscape_2025-05-06-18-01-37.png"
                      alt="Luxury interior design project showcasing modern living space with elegant furniture and natural lighting"
                      className={`hero-main-image ${currentImageIndex === 0 ? 'active' : ''}`}
                    />
                    <LazyImage
                      src="/images/Home-011_1-p-1080.jpeg"
                      alt="Contemporary living room design with premium finishes and sophisticated color scheme"
                      className={`hero-main-image ${currentImageIndex === 1 ? 'active' : ''}`}
                    />
                    <LazyImage
                      src="/images/Office-002_1-p-1080.jpeg"
                      alt="Executive office space design featuring modern workspace with professional aesthetics"
                      className={`hero-main-image ${currentImageIndex === 2 ? 'active' : ''}`}
                    />
                    <LazyImage
                      src="/images/Home-016_1-p-1080.jpeg"
                      alt="Luxury home interior design with high-end materials and custom architectural elements"
                      className={`hero-main-image ${currentImageIndex === 3 ? 'active' : ''}`}
                    />
                  </div>

                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    <button
                      className={`indicator ${currentImageIndex === 0 ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(0)}
                    ></button>
                    <button
                      className={`indicator ${currentImageIndex === 1 ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(1)}
                    ></button>
                    <button
                      className={`indicator ${currentImageIndex === 2 ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(2)}
                    ></button>
                    <button
                      className={`indicator ${currentImageIndex === 3 ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(3)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us-section">
              <h2 className="why-choose-us-heading">
                Why Choose <span className="company-name-gradient">Dimensions Dzine</span>
              </h2>
            </div>

            {/* Trust Signals - Infinite Scroll */}
            <div className="trust-signals-scroll">
              <div className="trust-signals-track" ref={trustTrackRef}>
                {[...trustItems, ...trustItems].map((item, index) => (
                  <div key={`trust-${index}`} className="trust-card">
                    <div className="trust-icon-container">
                      {item.icon}
                    </div>
                    <div className="trust-content">
                      {item.title}
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Our Services Section */}
        <section className="section services-section">
          <div className="padding-global-2">
            <div className="container-large-2">
              <div className="padding-vertical-2">
                {/* Homepage Services */}
                <div className="services-section-header">
                  <h3 className="services-category-title">Our Services</h3>
                  <p className="services-category-subtitle">Professional solutions for your every need</p>
                </div>
                <div className="services-grid">
                  {homepageServices.map((service) => (
                    <div key={service.id} className="service-card" onClick={() => navigate(service.route)} style={{ cursor: 'pointer' }}>
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

                {/* View More Services Button */}
                <div className="services-view-more">
                  <Link to="/services" className="btn-view-more-services">
                    <span>View All Services</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section process-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">How We Work</h2>
              <p className="section-subtitle mt-4 mx-auto">
                Our simple 5-step process to transform your space
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <ScaleBounce key={step.number} delay={index * 0.15}>
                  <div className="process-step">
                    <div className="process-icon" style={{ backgroundColor: `${step.color}15`, color: step.color }}>
                      <step.icon />
                    </div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-description">{step.description}</p>
                  </div>
                </ScaleBounce>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights Section */}
        <section className="section project-highlights-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Project Highlights</h2>
            </div>
            <div className="project-highlights-carousel">
              <div className="carousel-container">
                <div className="carousel-wrapper">
                  <div className="carousel-slides">
                    {sliderImages.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                      >
                        <div className="slide-image-wrapper">
                          <LazyImage
                            src={image}
                            alt={`Project highlight ${index + 1}`}
                            className="slide-image"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={prevSlide}
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={nextSlide}
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="carousel-indicators">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Client Stories Section */}
        <section className="section testimonials-section">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">Client Stories</h2>
              <p className="section-subtitle mt-2" style={{ fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>
                Sourced from Google Reviews
              </p>
            </div>

            <div className="testimonials-carousel-container">
              <div className="testimonials-carousel-wrapper">
                <button
                  className="testimonials-arrow testimonials-arrow-left"
                  onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="testimonials-content">
                  <div className="testimonials-rating">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="testimonials-star">★</span>
                    ))}
                  </div>
                  <blockquote className="testimonials-quote">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="testimonials-author">
                    <h4 className="testimonials-author-name">{testimonials[currentTestimonial].name}</h4>
                    <p className="testimonials-author-role">{testimonials[currentTestimonial].role}</p>
                    <span className="testimonials-author-project">{testimonials[currentTestimonial].project}</span>
                  </div>
                </div>

                <button
                  className="testimonials-arrow testimonials-arrow-right"
                  onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="testimonials-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`testimonials-indicator ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Estimate Section */}
        <EstimateSection />

        {/* CTA Section */}
        <CTA />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Home;