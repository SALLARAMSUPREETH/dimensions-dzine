import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';

/**
 * ScrollToTop Component
 * 
 * This component automatically scrolls to the top of the page whenever
 * the route changes. This is the industry-standard solution for SPAs
 * to ensure users always start at the top when navigating to a new page.
 * 
 * Features:
 * - Smooth scrolling animation for better UX
 * - Handles all route changes automatically
 * - Lightweight and performant
 * - Works with all React Router navigation methods
 */
function ScrollToTop({ 
  behavior = 'smooth', 
  delay = 0,
  preserveScrollOn = [], // Array of paths where scroll should be preserved
  showLoader = true // Whether to show the brick loader during scroll
}) {
  const { pathname } = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Skip scroll restoration for specified paths
    if (preserveScrollOn.includes(pathname)) {
      return;
    }

    const scrollToTop = () => {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only show loader if we're not already at the top and showLoader is enabled
      const shouldShowLoader = showLoader && currentScrollPosition > 50; // 50px threshold to account for minor variations
      
      if (shouldShowLoader) {
        // Start loading animation
        startLoading('Building Your Experience');
        
        // Perform the scroll
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: behavior === 'instant' ? 'auto' : 'smooth'
        });
        
        // Stop loading after minimum display time to prevent flickering (reduced for faster feel)
        setTimeout(() => {
          stopLoading();
        }, behavior === 'instant' ? 100 : 150);
      } else {
        // Perform the scroll without loader (either disabled or already at top)
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: behavior === 'instant' ? 'auto' : 'smooth'
        });
      }
    };

    if (delay > 0) {
      setTimeout(scrollToTop, delay);
    } else {
      scrollToTop();
    }
  }, [pathname, behavior, delay, preserveScrollOn, showLoader, startLoading, stopLoading]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
