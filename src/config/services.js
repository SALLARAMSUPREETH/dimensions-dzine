/**
 * SERVICE CONFIGURATION
 * 
 * This file defines all available services and their mappings.
 * When a project is added with services, it automatically appears in:
 * - Portfolio page filters
 * - Service page featured projects
 */

export const SERVICES = {
  CONSTRUCTION: 'Construction',
  INTERIOR_DESIGN: 'Interior Design',
  RENOVATION: 'Renovation',
  CONSULTATION: 'Consultation',
  VISUALIZATION_3D: '3D Visualization',
  MATERIAL_SOURCING: 'Material Sourcing'
};

// Service route mapping (for URL matching)
export const SERVICE_ROUTES = {
  'construction': SERVICES.CONSTRUCTION,
  'interior-design': SERVICES.INTERIOR_DESIGN,
  'renovation': SERVICES.RENOVATION,
  'consultation': SERVICES.CONSULTATION,
  '3d-visualization': SERVICES.VISUALIZATION_3D,
  'material-sourcing': SERVICES.MATERIAL_SOURCING
};

// Get service name from route
export const getServiceFromRoute = (route) => {
  return SERVICE_ROUTES[route] || null;
};

// Get route from service name
export const getRouteFromService = (serviceName) => {
  const entry = Object.entries(SERVICE_ROUTES).find(([_, name]) => name === serviceName);
  return entry ? `/services/${entry[0]}` : null;
};

// All services as an array
export const ALL_SERVICES = Object.values(SERVICES);

