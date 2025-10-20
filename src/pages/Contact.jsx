import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdEmail,
  MdPhone,
  MdWork,
  MdCalculate,
  MdContentCopy
} from 'react-icons/md';
import { FaWhatsapp as FaWhatsappSolid, FaAward } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { GOOGLE_FORM_CONFIG } from '../config/formConfig';
import './Contact.css';

const Contact = () => {
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
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.projectName, 'Contact Page');
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.projectType, 'General Inquiry');
      submitData.append(GOOGLE_FORM_CONFIG.entryIds.source, 'Contact Page');

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
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="redesigned-contact-hero">
          <div className="contact-hero-layout">
            <div className="contact-hero-left">
              <h1 className="contact-main-title">
                <span className="title-line">LET'S <span className="build-highlight">BUILD</span></span>
                <span className="title-line">SOMETHING</span>
                <span className="title-line">AMAZING</span>
              </h1>
              <p className="contact-subtitle">
                Ready to start your next project? Get in touch and let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="contact-hero-right">
              {/* Contact Form */}
              <div className="contact-form-section">
                <form className="contact-form" onSubmit={handleFormSubmit}>
                  {/* Hidden fields for form context */}
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.projectName} value="Contact Page" />
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.projectType} value="General Inquiry" />
                  <input type="hidden" name={GOOGLE_FORM_CONFIG.entryIds.source} value="Contact Page" />

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

        {/* Connect With Us Section */}
        <section className="connect-with-us-section">
          <div className="connect-container">
            <h2>Connect With Us</h2>
            <p>Get in touch through multiple channels for the best experience</p>

            <div className="connect-cards">
              <a href="mailto:contact@dimensiondzine.com" className="connect-card email-card">
                <div className="connect-icon-wrapper">
                  <MdEmail className="connect-icon" />
                </div>
                <div className="connect-content">
                  <h3>Email Us</h3>
                  <p>For detailed inquiries and project discussions</p>
                  <span className="connect-link">contact@dimensiondzine.com</span>
                </div>
              </a>

              <div className="connect-card phone-card">
                <div className="connect-icon-wrapper">
                  <MdPhone className="connect-icon" />
                </div>
                <div className="connect-content">
                  <h3>Call Us</h3>
                  <p>Speak directly with our team</p>
                  <div className="phone-numbers">
                    <div className="phone-number-item">
                      <span className="phone-number">+91 70931 17486</span>
                      <button
                        className="copy-button"
                        onClick={() => navigator.clipboard.writeText('+917093117486')}
                        title="Copy number"
                      >
                        <MdContentCopy className="copy-icon" />
                      </button>
                    </div>
                    <div className="phone-number-item">
                      <span className="phone-number">+91 96751 85555</span>
                      <button
                        className="copy-button"
                        onClick={() => navigator.clipboard.writeText('+919675185555')}
                        title="Copy number"
                      >
                        <MdContentCopy className="copy-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917093117486?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card whatsapp-card"
              >
                <div className="connect-icon-wrapper">
                  <FaWhatsappSolid className="connect-icon" />
                </div>
                <div className="connect-content">
                  <h3>WhatsApp</h3>
                  <p>Quick questions and instant responses</p>
                  <span className="connect-link">Chat on WhatsApp</span>
                </div>
              </a>

              <a
                href="https://instagram.com/dimensiondzine"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card instagram-card"
              >
                <div className="connect-icon-wrapper">
                  <AiOutlineInstagram className="connect-icon" />
                </div>
                <div className="connect-content">
                  <h3>Follow Us</h3>
                  <p>See our latest work and updates</p>
                  <span className="connect-link">@dimensiondzine</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Action Cards Section */}
        <section className="contact-action-section">
          <div className="contact-action-container">
            <h2>Before You Contact Us</h2>
            <p>Explore our work and get an estimate to make the most of our conversation</p>

            <div className="action-cards">
              <Link to="/projects" className="action-card projects-card">
                <div className="card-icon-wrapper">
                  <MdWork className="card-icon" />
                </div>
                <div className="card-content">
                  <h3>View Our Work</h3>
                  <p>Explore our portfolio of completed projects to see our quality and style</p>
                </div>
                <div className="card-arrow">→</div>
              </Link>

              <Link to="/calculator" className="action-card calculator-card">
                <div className="card-icon-wrapper">
                  <MdCalculate className="card-icon" />
                </div>
                <div className="card-content">
                  <h3>Get Estimate</h3>
                  <p>Calculate project costs before contacting us for a more informed discussion</p>
                </div>
                <div className="card-arrow">→</div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
