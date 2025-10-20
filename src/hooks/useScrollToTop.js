import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for scroll restoration
 * 
 * This hook provides different scroll restoration strategies:
 * - 'instant': Immediate scroll to top
 * - 'smooth': Smooth scroll animation (default)
 * - 'preserve': Keep current scroll position
 * - 'custom': Accept a custom scroll function
 */
export const useScrollToTop = (behavior = 'smooth') => {
  const location = useLocation();

  useEffect(() => {
    if (behavior === 'preserve') {
      return; // Don't scroll if preserving position
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior === 'instant' ? 'auto' : 'smooth'
      });
    };

    scrollToTop();
  }, [location.pathname, behavior]);

  return null;
};

/**
 * Alternative scroll restoration hook with more granular control
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.behavior - 'instant', 'smooth', or 'preserve'
 * @param {number} options.delay - Delay in milliseconds before scrolling
 * @param {Function} options.onScrollStart - Callback before scrolling
 * @param {Function} options.onScrollComplete - Callback after scrolling
 */
export const useAdvancedScrollToTop = (options = {}) => {
  const {
    behavior = 'smooth',
    delay = 0,
    onScrollStart,
    onScrollComplete
  } = options;

  const location = useLocation();

  useEffect(() => {
    if (behavior === 'preserve') {
      return;
    }

    const scrollToTop = () => {
      if (onScrollStart) {
        onScrollStart();
      }

      const scrollOptions = {
        top: 0,
        left: 0,
        behavior: behavior === 'instant' ? 'auto' : 'smooth'
      };

      if (delay > 0) {
        setTimeout(() => {
          window.scrollTo(scrollOptions);
          if (onScrollComplete) {
            setTimeout(onScrollComplete, behavior === 'smooth' ? 500 : 0);
          }
        }, delay);
      } else {
        window.scrollTo(scrollOptions);
        if (onScrollComplete) {
          setTimeout(onScrollComplete, behavior === 'smooth' ? 500 : 0);
        }
      }
    };

    scrollToTop();
  }, [location.pathname, behavior, delay, onScrollStart, onScrollComplete]);

  return null;
};
