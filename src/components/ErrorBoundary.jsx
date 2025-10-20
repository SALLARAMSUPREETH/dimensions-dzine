import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary-container">
            <div className="error-boundary-content">
              <div className="error-illustration">
                <img 
                  src="/images/error/undraw_construction-workers_z99i.svg" 
                  alt="Construction workers illustration"
                  className="error-image"
                />
              </div>
              
              <div className="error-text-content">
                <h1 className="error-title">Oops! Something Went Wrong</h1>
                <p className="error-subtitle">
                  We're working hard to fix this issue. Our team has been notified and we'll have things back up and running soon.
                </p>
                <p className="error-description">
                  In the meantime, you can return to our homepage or get in touch with us if you need immediate assistance.
                </p>
                
                <div className="error-actions">
                  <Link to="/" className="error-btn-primary">
                    <FaHome />
                    <span>Back to Home</span>
                  </Link>
                  <Link to="/contact" className="error-btn-secondary">
                    <FaEnvelope />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
