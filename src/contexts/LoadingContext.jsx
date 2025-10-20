import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * LoadingContext
 * 
 * Provides global loading state management for the brick loader animation.
 * This context allows any component to trigger the loading animation,
 * particularly useful for route transitions and scroll restoration.
 */
const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Building Your Experience');

  const startLoading = useCallback((message = 'Building Your Experience') => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const setLoadingWithDelay = useCallback((message = 'Building Your Experience', delay = 1000) => {
    startLoading(message);
    setTimeout(() => {
      stopLoading();
    }, delay);
  }, [startLoading, stopLoading]);

  const value = {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    setLoadingWithDelay
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
