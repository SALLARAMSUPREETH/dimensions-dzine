import { useState, useEffect, useRef, useCallback } from 'react';
import './LazyImage.css';

// Network connection detection
const getConnectionSpeed = () => {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      // effectiveType: 'slow-2g', '2g', '3g', '4g'
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') return 'slow';
      if (effectiveType === '3g') return 'medium';
      return 'fast';
    }
  }
  return 'auto';
};

// Generate low-quality placeholder using canvas (creates tiny base64 image)
const generateLQIP = (src, callback) => {
  if (!src) {
    callback('');
    return;
  }

  // For external URLs or if canvas fails, use blur technique
  const isExternal = typeof window !== 'undefined' && src.startsWith('http') && !src.includes(window.location.hostname);
  
  // Try to create a low-quality version
  const img = new Image();
  
  // Only set crossOrigin for external images
  if (isExternal) {
    img.crossOrigin = 'anonymous';
  }
  
  // Set timeout to prevent hanging
  const timeout = setTimeout(() => {
    callback(src); // Fallback after 2 seconds
  }, 2000);
  
  img.onload = () => {
    clearTimeout(timeout);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        callback(src); // Fallback if canvas not supported
        return;
      }
      
      // Create very small version (20px width max)
      const maxWidth = 20;
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = Math.max(1, Math.floor(img.width * ratio));
      canvas.height = Math.max(1, Math.floor(img.height * ratio));
      
      // Draw and compress
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.1); // Very low quality
      callback(dataUrl);
    } catch (e) {
      // CORS or other error - fallback to original src with blur
      callback(src);
    }
  };
  
  img.onerror = () => {
    clearTimeout(timeout);
    callback(src); // Fallback to original
  };
  
  img.src = src;
};

// Generate responsive srcset
const generateSrcSet = (src, sizes = [400, 800, 1200, 1600]) => {
  if (!src) return '';
  
  // If src already has query params or is external, return as-is
  if (src.includes('?') || src.startsWith('http')) {
    return '';
  }
  
  // For local images, we could generate srcset if using a CDN
  // For now, return empty and let browser handle it
  return sizes.map(size => `${src}?w=${size} ${size}w`).join(', ');
};

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  onClick,
  title,
  loading = 'lazy',
  quality = 'auto', // 'low', 'medium', 'high', 'auto'
  priority = false, // Load immediately if true (above fold)
  sizes, // For responsive images
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [lowQualitySrc, setLowQualitySrc] = useState('');
  const [isInView, setIsInView] = useState(priority); // Start true if priority
  const [retryCount, setRetryCount] = useState(0);
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate quality-appropriate src based on network speed
  const getQualitySrc = useCallback((originalSrc) => {
    if (!originalSrc) return '';
    
    const networkSpeed = quality === 'auto' ? getConnectionSpeed() : quality;
    
    // For CDN integration (Cloudinary, Imgix, etc.):
    // if (networkSpeed === 'slow' || quality === 'low') return `${originalSrc}?q=40&w=600`;
    // if (networkSpeed === 'medium' || quality === 'medium') return `${originalSrc}?q=70&w=1000`;
    // if (networkSpeed === 'fast' || quality === 'high') return `${originalSrc}?q=90&w=2000`;
    
    // For local images, return original (browser handles progressive JPEG)
    return originalSrc;
  }, [quality]);

  const finalSrc = getQualitySrc(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !containerRef.current) {
      setIsInView(true);
      return;
    }

    // Only observe if not already in view
    if (!isInView) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              // Stop observing once in view
              if (observerRef.current && containerRef.current) {
                observerRef.current.unobserve(containerRef.current);
              }
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before entering viewport
          threshold: 0.01,
        }
      );

      if (containerRef.current) {
        observerRef.current.observe(containerRef.current);
      }
    }

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
    };
  }, [priority, isInView]);

  // Generate low-quality placeholder
  useEffect(() => {
    if (!src || !isInView) return;

    // Generate LQIP for blur-up effect
    generateLQIP(src, (lqip) => {
      setLowQualitySrc(lqip);
    });
  }, [src, isInView]);

  // Load full quality image
  useEffect(() => {
    if (!src || !isInView || !finalSrc) return;

    const fullQualityImg = new Image();
    
    fullQualityImg.onload = () => {
      setImageLoaded(true);
      setImageError(false);
      setRetryCount(0);
    };
    
    fullQualityImg.onerror = () => {
      // Retry logic for slow connections
      if (retryCount < 2) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fullQualityImg.src = finalSrc + (finalSrc.includes('?') ? '&' : '?') + `retry=${retryCount + 1}`;
        }, 1000 * (retryCount + 1)); // Exponential backoff
      } else {
        setImageError(true);
        setImageLoaded(false);
      }
    };
    
    fullQualityImg.src = finalSrc;

    return () => {
      fullQualityImg.onload = null;
      fullQualityImg.onerror = null;
    };
  }, [src, finalSrc, isInView, retryCount]);

  const srcSet = generateSrcSet(src);
  const imageSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <div 
      ref={containerRef}
      className={`lazy-image-container ${className}`} 
      style={style} 
      onClick={onClick} 
      {...props}
    >
      {/* Low Quality Placeholder (Blurred) - Blur-up technique */}
      {lowQualitySrc && !imageLoaded && !imageError && (
        <img
          src={lowQualitySrc}
          alt=""
          aria-hidden="true"
          className="lazy-image-placeholder-blur"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}

      {/* Loading Skeleton (before any image loads) */}
      {!lowQualitySrc && !imageError && isInView && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton">
            <div className="skeleton-shimmer"></div>
          </div>
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="lazy-image-error">
          <div className="error-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
          </div>
          <span className="error-text">Failed to load image</span>
          {retryCount >= 2 && (
            <button 
              className="retry-button"
              onClick={(e) => {
                e.stopPropagation();
                setImageError(false);
                setRetryCount(0);
                setImageLoaded(false);
              }}
            >
              Retry
            </button>
          )}
        </div>
      )}

      {/* Full Quality Image - Only load when in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={finalSrc}
          srcSet={srcSet || undefined}
          sizes={imageSizes}
          alt={alt}
          title={title}
          loading={priority ? 'eager' : loading}
          decoding="async"
          className={`lazy-image ${imageLoaded ? 'loaded' : 'loading'}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (retryCount < 2) {
              setTimeout(() => {
                setRetryCount(prev => prev + 1);
                if (imgRef.current) {
                  imgRef.current.src = finalSrc + (finalSrc.includes('?') ? '&' : '?') + `retry=${retryCount + 1}`;
                }
              }, 1000 * (retryCount + 1));
            } else {
              setImageError(true);
            }
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;