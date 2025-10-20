import { Link, useLocation } from 'react-router-dom';
import LazyImage from '../LazyImage';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize Webflow mobile menu functionality
  useEffect(() => {
    const initWebflowMenu = () => {
      if (window.Webflow) {
        window.Webflow.push(() => {
          // Initialize Webflow components
          window.Webflow.require('ix2').init();
        });
      }
    };

    // Wait for Webflow to load
    if (window.Webflow) {
      initWebflowMenu();
    } else {
      const checkWebflow = setInterval(() => {
        if (window.Webflow) {
          initWebflowMenu();
          clearInterval(checkWebflow);
        }
      }, 100);
    }
  }, []);

  return (
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="menu-overlay"></div>
      <div className="padding-horizontal padding-small">
        <div className="navbar-block">
          <div className="navbar-base left-navbar">
            <Link to="/" className={`navbar-brand w-nav-brand ${location.pathname === '/' ? 'w--current' : ''}`}>
              <div className="brand-container">
                <div className="clip">
                  <div className="menu-logo">
                    <img  loading="lazy" src="/images/4-Logo.png" alt="Dimension DZine - Luxury Interior Design and Turnkey Projects" className="logo-2" />
                  </div>
                  <div className="menu-logo menue-logo-bottom">
                    <img  loading="lazy" src="/images/4-Logo.png" alt="Dimension DZine - Luxury Interior Design and Turnkey Projects" className="logo-2" />
                  </div>
                </div>
                <div className="brand-text">
                  <span className="brand-name">
                    <span className="brand-dimensions">Dimensions</span>
                    <span className="brand-dzine">Dzine</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="navbar-base">
            {/* Desktop Navigation Links */}
            <nav className="desktop-nav">
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
              <Link to="/portfolio" className={`nav-link ${(location.pathname === '/portfolio' || location.pathname === '/projects') ? 'active' : ''}`}>
                Portfolio
              </Link>
            </nav>
            <Link to="/contact" className="navbar-button-3 w-inline-block header-button-animate desktop-hire-btn">
              <span className="hire-us-text">Hire us</span>
            </Link>
            <div className={`main-nav-button hamburger-button-animate ${isMenuOpen ? 'w--open' : ''}`} onClick={toggleMenu}>
              <div className="nav-icon">
                <div className="nav-line"></div>
                <div className="nav-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Webflow mobile menu */}
      <nav className="w-nav-menu" data-nav-menu-open={isMenuOpen ? 'true' : undefined}>
        <div className="navbar-menu-base-3">
          <div className="navbar-menu-grid">
            <div className="into-view-5">
              <Link to="/services" className={`navbar-link-3 w-inline-block ${location.pathname === '/services' ? 'w--current' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <div className="clip">
                  <div className="button-text">
                    <div className="text-size-large">Services</div>
                  </div>
                  <div className="button-text button-text-bottom">
                    <div className="text-size-large">Services</div>
                  </div>
                </div>
                <div className="clip">
                  <div className="button-icon">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                  <div className="button-icon button-icon-bottom">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="into-view-5">
              <Link to="/about" className={`navbar-link-3 w-inline-block ${location.pathname === '/about' ? 'w--current' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <div className="clip">
                  <div className="button-text">
                    <div className="text-size-large">About</div>
                  </div>
                  <div className="button-text button-text-bottom">
                    <div className="text-size-large">About</div>
                  </div>
                </div>
                <div className="clip">
                  <div className="button-icon">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                  <div className="button-icon button-icon-bottom">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="into-view-5">
              <Link to="/portfolio" className={`navbar-link-3 w-inline-block ${(location.pathname === '/portfolio' || location.pathname === '/projects') ? 'w--current' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <div className="clip">
                  <div className="button-text">
                    <div className="text-size-large">Portfolio</div>
                  </div>
                  <div className="button-text button-text-bottom">
                    <div className="text-size-large">Portfolio</div>
                  </div>
                </div>
                <div className="clip">
                  <div className="button-icon">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                  <div className="button-icon button-icon-bottom">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="into-view-5">
              <Link to="/contact" className={`navbar-link-3 w-inline-block ${location.pathname === '/contact' ? 'w--current' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <div className="clip">
                  <div className="button-text">
                    <div className="text-size-large">Contact</div>
                  </div>
                  <div className="button-text button-text-bottom">
                    <div className="text-size-large">Contact</div>
                  </div>
                </div>
                <div className="clip">
                  <div className="button-icon">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                  <div className="button-icon button-icon-bottom">
                    <LazyImage  loading="lazy" src="/images/Right-arrow-slant---dark.svg" alt="" className="icon-1x1-small" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
