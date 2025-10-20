import React, { useState, useEffect } from 'react';
import './BallLoader.css';

/**
 * BallLoader Component
 * 
 * A beautiful ball balancing animation that creates a mesmerizing loading effect.
 * Adapted from Uiverse.io by escannord with custom styling to match the application theme.
 */
const BallLoader = ({ isLoading }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowContent(true);
    } else {
      // Add a small delay before hiding to prevent flickering (reduced for faster feel)
      const timer = setTimeout(() => {
        setShowContent(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Cleanup effect to ensure loader hides when component unmounts
  useEffect(() => {
    return () => {
      setShowContent(false);
    };
  }, []);

  if (!isLoading && !showContent) return null;

  return (
    <div className={`ball-loader-overlay ${showContent ? 'show' : 'hide'}`}>
      <div className="ball-loader-container">
        <div className="ball-loader-title">
          <h2>Building Your Experience</h2>
          <p>Constructing something amazing...</p>
        </div>
        
        <div className="ball-loader-animation">
          <div className="loader">
            <span className="ball ball1" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallLoader;
