import { useState, useEffect } from 'react';

export const useSlider = (images, autoPlay = true, autoPlayInterval = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying && autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, autoPlay, autoPlayInterval]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isPlaying,
    togglePlay
  };
};
