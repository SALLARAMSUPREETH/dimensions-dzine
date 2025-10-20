import { useState, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  onClick,
  title,
  loading = 'lazy',
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
      setImageError(false);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(false);
    };
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`lazy-image-container ${className}`} style={style} onClick={onClick} {...props}>
      {/* Placeholder/Loader */}
      {!imageLoaded && !imageError && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton">
            <div className="skeleton-shimmer"></div>
          </div>
          <div className="lazy-image-loader">
            <div className="loader-spinner"></div>
            <span className="loader-text">Loading...</span>
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
        </div>
      )}

      {/* Actual Image */}
      {imageLoaded && (
        <img
          src={imageSrc}
          alt={alt}
          title={title}
          loading={loading}
          className={`lazy-image ${imageLoaded ? 'loaded' : ''}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default LazyImage;