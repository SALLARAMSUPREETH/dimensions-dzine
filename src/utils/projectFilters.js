/**
 * Project Filtering Utilities
 * 
 * Helper functions to filter projects by service
 */

import { portfolioProjects } from '../data/projects';

/**
 * Get projects filtered by service name
 * @param {string} serviceName - Service name (e.g., 'Construction', 'Interior Design')
 * @param {number} limit - Optional limit on number of projects to return
 * @returns {Array} Filtered projects
 */
export const getProjectsByService = (serviceName, limit = null) => {
  if (!serviceName) return [];
  
  const filtered = portfolioProjects.filter(project => 
    project.services && 
    Array.isArray(project.services) && 
    project.services.includes(serviceName)
  );
  
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Get featured projects filtered by service name
 * @param {string} serviceName - Service name
 * @param {number} limit - Optional limit
 * @returns {Array} Filtered featured projects
 */
export const getFeaturedProjectsByService = (serviceName, limit = 3) => {
  const allProjects = getProjectsByService(serviceName);
  return allProjects.filter(p => p.featured).slice(0, limit);
};

/**
 * Get all unique services from projects
 * @returns {Array} Array of unique service names
 */
export const getAllServicesFromProjects = () => {
  const servicesSet = new Set();
  portfolioProjects.forEach(project => {
    if (project.services && Array.isArray(project.services)) {
      project.services.forEach(service => servicesSet.add(service));
    }
  });
  return Array.from(servicesSet).sort();
};

