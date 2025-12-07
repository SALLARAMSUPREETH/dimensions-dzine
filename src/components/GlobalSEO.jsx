import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import { seoData, serviceSeoData, organizationSchema } from '../config/seoData';

/**
 * Global SEO Wrapper Component
 * Automatically applies SEO based on current route
 * Can be overridden with custom props
 */
const GlobalSEO = ({ children, customSeo = null }) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Get SEO data based on current route
  const getSeoForRoute = () => {
    // Service pages
    if (pathname.startsWith('/services/')) {
      const serviceName = pathname.split('/services/')[1];
      const serviceKey = serviceName
        .split('-')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      return serviceSeoData[serviceKey] || seoData.services;
    }

    // Main pages
    const routeMap = {
      '/': 'home',
      '/about': 'about',
      '/services': 'services',
      '/projects': 'projects',
      '/portfolio': 'projects',
      '/contact': 'contact',
      '/calculator': 'calculator',
    };

    const pageKey = routeMap[pathname];
    return pageKey ? seoData[pageKey] : null;
  };

  const defaultSeo = getSeoForRoute();
  const finalSeo = customSeo || defaultSeo;

  // Track page views for analytics (if you add Google Analytics later)
  useEffect(() => {
    // Google Analytics pageview tracking
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      });
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!finalSeo) {
    return children;
  }

  return (
    <>
      <SEO
        title={finalSeo.title}
        description={finalSeo.description}
        keywords={finalSeo.keywords}
        canonical={finalSeo.canonical}
        schema={finalSeo.schema}
        breadcrumb={finalSeo.breadcrumb}
        faq={finalSeo.faq}
        ogImage={finalSeo.ogImage}
      />
      {children}
    </>
  );
};

export default GlobalSEO;
