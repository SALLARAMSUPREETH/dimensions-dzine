/**
 * SEO Helper Utilities
 * Global functions for SEO optimization across the site
 */

/**
 * Generate optimized image alt text
 * @param {string} imageName - The image file name
 * @param {string} context - Additional context (e.g., "living room", "kitchen")
 * @param {string} location - Location for local SEO
 * @returns {string} - SEO-optimized alt text
 */
export const generateImageAlt = (imageName, context = '', location = 'Hyderabad') => {
  const cleanName = imageName
    .replace(/\.(webp|jpg|jpeg|png)/gi, '')
    .replace(/[-_]/g, ' ')
    .replace(/\d+/g, '')
    .trim();
  
  const baseAlt = cleanName || 'interior design project';
  const contextPart = context ? ` ${context}` : '';
  const locationPart = location ? ` in ${location}` : '';
  
  return `${baseAlt}${contextPart}${locationPart} by Dimensions Dzine`;
};

/**
 * Generate structured data for a project/portfolio item
 * @param {object} project - Project data
 * @returns {object} - ImageObject schema
 */
export const generateProjectSchema = (project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    'contentUrl': project.image,
    'name': project.title,
    'description': project.description || `${project.category} project in ${project.location}`,
    'author': {
      '@type': 'Organization',
      'name': 'Dimensions Dzine',
    },
    'copyrightHolder': {
      '@type': 'Organization',
      'name': 'Dimensions Dzine',
    },
  };
};

/**
 * Generate service-specific schema
 * @param {object} service - Service data
 * @returns {object} - Service schema
 */
export const generateServiceSchema = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': service.title,
    'provider': {
      '@type': 'Organization',
      'name': 'Dimensions Dzine',
      'url': 'https://dimensionsdzine.com',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Hyderabad',
    },
    'description': service.description,
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'INR',
    },
  };
};

/**
 * Generate internal link with SEO-friendly anchor text
 * @param {string} url - Target URL
 * @param {string} keyword - Primary keyword
 * @param {string} context - Additional context
 * @returns {object} - Link data
 */
export const generateInternalLink = (url, keyword, context = '') => {
  return {
    url,
    text: context ? `${keyword} ${context}` : keyword,
    title: `Learn more about ${keyword}`,
  };
};

/**
 * Extract keywords from content for meta keywords
 * @param {string} content - Page content
 * @param {number} limit - Maximum keywords to extract
 * @returns {string} - Comma-separated keywords
 */
export const extractKeywords = (content, limit = 10) => {
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word));
  
  const frequency = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word]) => word)
    .join(', ');
};

/**
 * Generate location-specific keywords
 * @param {string} baseKeyword - Base keyword (e.g., "interior design")
 * @param {array} locations - Array of locations
 * @returns {array} - Array of location-specific keywords
 */
export const generateLocationKeywords = (baseKeyword, locations = ['Hyderabad', 'Telangana']) => {
  return locations.map(location => `${baseKeyword} ${location}`);
};

/**
 * Create SEO-friendly URL slug
 * @param {string} text - Text to convert to slug
 * @returns {string} - URL-friendly slug
 */
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Generate meta description from content
 * @param {string} content - Page content
 * @param {number} maxLength - Maximum length (default 155)
 * @returns {string} - Optimized meta description
 */
export const generateMetaDescription = (content, maxLength = 155) => {
  const cleaned = content.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxLength) return cleaned;
  
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

/**
 * Check if title length is optimal for SEO
 * @param {string} title - Page title
 * @returns {object} - Validation result
 */
export const validateTitle = (title) => {
  const length = title.length;
  return {
    isValid: length >= 50 && length <= 60,
    length,
    message: length < 50 ? 'Title too short' : length > 60 ? 'Title too long' : 'Title length optimal',
  };
};

/**
 * Check if description length is optimal for SEO
 * @param {string} description - Meta description
 * @returns {object} - Validation result
 */
export const validateDescription = (description) => {
  const length = description.length;
  return {
    isValid: length >= 150 && length <= 160,
    length,
    message: length < 150 ? 'Description too short' : length > 160 ? 'Description too long' : 'Description length optimal',
  };
};

/**
 * Generate review schema for testimonials
 * @param {object} review - Review data
 * @returns {object} - Review schema
 */
export const generateReviewSchema = (review) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'LocalBusiness',
      'name': 'Dimensions Dzine',
    },
    'author': {
      '@type': 'Person',
      'name': review.name,
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': review.rating,
      'bestRating': '5',
    },
    'reviewBody': review.content,
  };
};

export default {
  generateImageAlt,
  generateProjectSchema,
  generateServiceSchema,
  generateInternalLink,
  extractKeywords,
  generateLocationKeywords,
  createSlug,
  generateMetaDescription,
  validateTitle,
  validateDescription,
  generateReviewSchema,
};
