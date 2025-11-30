import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import BallLoader from './BallLoader';
import './ErrorBoundary.css';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      showLoader: false,
      error: null,
      errorInfo: null,
      errorLocation: null
    };
    this.loaderTimer = null;
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, showLoader: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Store error info and current location
    this.setState({ 
      errorInfo,
      errorLocation: this.props.location?.pathname 
    });
    
    // Show loader for 5 seconds before showing error page
    this.loaderTimer = setTimeout(() => {
      this.setState({ showLoader: false });
    }, 1000);
  } 

  componentDidUpdate(prevProps) {
    // Reset error boundary when route changes
    if (this.state.hasError && 
        this.props.location?.pathname !== this.state.errorLocation &&
        this.props.location?.pathname !== prevProps.location?.pathname) {
      this.resetErrorBoundary();
    }
  }

  componentWillUnmount() {
    // Clear timer if component unmounts
    if (this.loaderTimer) {
      clearTimeout(this.loaderTimer);
    }
  }

  resetErrorBoundary = () => {
    if (this.loaderTimer) {
      clearTimeout(this.loaderTimer);
    }
    this.setState({
      hasError: false,
      showLoader: false,
      error: null,
      errorInfo: null,
      errorLocation: null
    });
  };

  render() {
    if (this.state.hasError) {
      // Show loader for 5 seconds first
      if (this.state.showLoader) {
        return <BallLoader isLoading={true} />;
      }
      
      // After 5 seconds, show error page
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
                  <Link to="/" className="error-btn-primary" onClick={this.resetErrorBoundary}>
                    <FaHome />
                    <span>Back to Home</span>
                  </Link>
                  <Link to="/contact" className="error-btn-secondary" onClick={this.resetErrorBoundary}>
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

// Wrapper component to inject location prop
function ErrorBoundary({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <ErrorBoundaryClass location={location} navigate={navigate}>
      {children}
    </ErrorBoundaryClass>
  );
}

export default ErrorBoundary;
