import { Link } from 'react-router-dom';
import { FaHome, FaHardHat, FaTools, FaLightbulb } from 'react-icons/fa';
import Header from '../components/Layout/Header';
import LazyImage from '../components/LazyImage';
import Footer from '../components/Layout/Footer';
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
import './About.css';

const About = () => {
  return (
    <>
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonical={seoData.about.canonical}
        schema={seoData.about.schema}
        ogImage="/images/og-about.jpg"
      />
      <div className="page-wrapper-2">
        <Header />
        <main className="main-wrapper-2">

          {/* Hero Section */}
          <section className="about-hero-simple">
            <div className="container-large">
              <h1 className="about-hero-title">
                About <span className="brand-dimensions">Dimensions</span>{' '}
                <span className="brand-dzine">DZINE</span>
              </h1>
              <p className="about-hero-subtitle">
                Transforming spaces with premium design at budget-friendly prices
              </p>
            </div>
          </section>

          {/* Who We Are - Short & Simple */}
          <section className="about-intro-section">
            <div className="container-large">
              <div className="intro-content">
                <h2 className="section-title-simple">Who We Are</h2>
                <p className="intro-text">
                  We're a Hyderabad-based interior design and construction firm with 8+ years of experience.
                  We believe great design shouldn't break the bank—so we deliver premium quality at prices that work for you.
                </p>
              </div>
            </div>
          </section>

          {/* Partners/Founders */}
          <section className="partners-section">
            <div className="container-large">
              <h2 className="section-title-simple">Our Founders</h2>
              <div className="partners-grid">

                {/* Partner 1 */}
                <div className="partner-card">
                  <div className="partner-image">
                    <LazyImage
                      src="/images/team/founder-1.jpg"
                      alt="Co-Founder & Lead Designer"
                      className="partner-photo"
                    />
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-name">Rajesh Kumar</h3>
                    <p className="partner-role">Co-Founder & Lead Designer</p>
                    <p className="partner-exp">12+ Years Experience</p>
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="partner-card">
                  <div className="partner-image">
                    <LazyImage
                      src="/images/team/founder-2.jpg"
                      alt="Co-Founder & Architect"
                      className="partner-photo"
                    />
                  </div>
                  <div className="partner-info">
                    <h3 className="partner-name">Priya Sharma</h3>
                    <p className="partner-role">Co-Founder & Architect</p>
                    <p className="partner-exp">10+ Years Experience</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* What We Do - Simple Grid */}
          <section className="what-we-do-section">
            <div className="container-large">
              <h2 className="section-title-simple">What We Do</h2>
              <div className="services-simple-grid">
                <div className="service-simple-item">
                  <div className="service-simple-icon">
                    <FaHome />
                  </div>
                  <h3>Interior Design</h3>
                </div>
                <div className="service-simple-item">
                  <div className="service-simple-icon">
                    <FaHardHat />
                  </div>
                  <h3>Construction</h3>
                </div>
                <div className="service-simple-item">
                  <div className="service-simple-icon">
                    <FaTools />
                  </div>
                  <h3>Renovation</h3>
                </div>
                <div className="service-simple-item">
                  <div className="service-simple-icon">
                    <FaLightbulb />
                  </div>
                  <h3>Consultation</h3>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="about-cta-simple">
            <div className="container-large">
              <div className="cta-simple-content">
                <h2 className="cta-simple-title">Let's Build Something Amazing</h2>
                <p className="cta-simple-text">Get a free consultation and see how we can transform your space</p>
                <div className="cta-simple-buttons">
                  <Link to="/contact" className="btn-cta-primary">
                    Get Free Consultation
                  </Link>
                  <Link to="/projects" className="btn-cta-secondary">
                    View Projects
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

export default About;
