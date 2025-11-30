/**
 * SEO Configuration for Dimensions Dzine
 * Optimized for AI search and traditional SEO
 */

const siteUrl = 'https://dimensionsdzine.com';
const businessName = 'Dimensions Dzine';
const businessPhone = '+91-XXXXXXXXXX'; // Replace with actual phone
const businessEmail = 'info@dimensionsdzine.com'; // Replace with actual email

// Organization Schema (Used across all pages)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description: 'Budget-friendly interior design and construction services in Hyderabad, Telangana. Premium quality, timely delivery, transparent pricing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address', // Replace with actual address
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500001', // Replace with actual postal code
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 17.385044,
    longitude: 78.486671,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: businessPhone,
    contactType: 'Customer Service',
    areaServed: 'IN-TG',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  sameAs: [
    'https://www.facebook.com/dimensionsdzine', // Replace with actual social links
    'https://www.instagram.com/dimensionsdzine',
    'https://www.linkedin.com/company/dimensionsdzine',
  ],
  priceRange: '₹₹',
  areaServed: {
    '@type': 'City',
    name: 'Hyderabad',
  },
};

// Page-specific SEO Data
export const seoData = {
  home: {
    title: 'Budget Interior Design & Construction in Hyderabad',
    description: 'Transform your space with Dimensions Dzine - Hyderabad\'s trusted interior design & construction experts. Premium quality, affordable prices, timely delivery.',
    keywords: 'interior designers in Hyderabad, construction services Telangana, budget-friendly home interiors, affordable renovations Hyderabad, modular kitchen Hyderabad, interior design near me, best interior designers Hyderabad, home renovation services, civil construction Hyderabad, residential interior design',
    canonical: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: businessName,
      image: `${siteUrl}/images/og-home.jpg`,
      url: siteUrl,
      telephone: businessPhone,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.385044,
        longitude: 78.486671,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
      },
    },
  },

  about: {
    title: 'About Us - Premium Quality Interior Design Experts',
    description: 'Learn about Dimensions Dzine\'s mission to deliver budget-friendly, high-quality interior design & construction services in Hyderabad with transparent pricing.',
    keywords: 'about Dimensions Dzine, interior design company Hyderabad, construction company Telangana, quality interior designers, trusted renovation services, professional interior design team',
    canonical: '/about',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      mainEntity: organizationSchema,
    },
  },

  services: {
    title: 'Interior Design & Construction Services in Hyderabad',
    description: 'Explore our services: Modular Kitchen, Home Interiors, Renovation, Civil Work, False Ceiling, Wardrobe Design & more. Budget-friendly with premium quality.',
    keywords: 'interior design services Hyderabad, modular kitchen design, home renovation services, civil construction work, false ceiling design, wardrobe design Hyderabad, bathroom renovation, living room interior, bedroom design services, commercial interior design',
    canonical: '/services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Interior Design and Construction',
      provider: organizationSchema,
      areaServed: {
        '@type': 'City',
        name: 'Hyderabad',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Interior Design Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Modular Kitchen Design',
              description: 'Custom modular kitchen solutions with premium materials',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Home Interior Design',
              description: 'Complete home interior design and execution',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Renovation Services',
              description: 'Professional home and office renovation',
            },
          },
        ],
      },
    },
  },

  projects: {
    title: 'Our Projects - Interior Design Portfolio Hyderabad',
    description: 'Browse our completed interior design & construction projects in Hyderabad. Real homes, satisfied clients, stunning transformations. Get inspired!',
    keywords: 'interior design portfolio Hyderabad, completed projects, home interior gallery, modular kitchen photos, renovation before after, interior design ideas Hyderabad, residential projects, commercial interior projects',
    canonical: '/projects',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Interior Design Projects Portfolio',
      description: 'Showcase of completed interior design and construction projects',
      provider: organizationSchema,
    },
  },

  contact: {
    title: 'Contact Us - Get Free Interior Design Consultation',
    description: 'Contact Dimensions Dzine for free consultation. Serving Hyderabad & Telangana. Call now for budget-friendly interior design & construction services.',
    keywords: 'contact interior designer Hyderabad, free design consultation, interior design inquiry, get quote Hyderabad, construction services contact, home interior consultation, modular kitchen quote',
    canonical: '/contact',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Organization',
        name: businessName,
        url: siteUrl,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: businessPhone,
          email: businessEmail,
          contactType: 'Customer Service',
          areaServed: 'IN-TG',
          availableLanguage: ['English', 'Hindi', 'Telugu'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        },
      },
    },
  },

  calculator: {
    title: 'Interior Design Cost Calculator - Get Instant Estimate',
    description: 'Calculate your interior design project cost instantly. Get accurate estimates for modular kitchen, home interiors, wardrobes & more in Hyderabad.',
    keywords: 'interior design cost calculator, modular kitchen price calculator, home interior cost estimate, renovation cost calculator Hyderabad, wardrobe design price, budget calculator interior',
    canonical: '/calculator',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Interior Design Cost Calculator',
      applicationCategory: 'UtilityApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
    },
  },
};

// Service-specific pages
export const serviceSeoData = {
  construction: {
    title: 'Construction Services in Hyderabad - Quality & Timely',
    description: 'Professional construction services in Hyderabad. Residential & commercial projects with transparent pricing, quality materials, and on-time delivery.',
    keywords: 'construction services Hyderabad, civil construction Telangana, building construction, residential construction, commercial construction, construction company near me',
    canonical: '/services/construction',
  },
  
  interiorDesign: {
    title: 'Interior Design Services - Modern & Budget-Friendly',
    description: 'Transform your space with expert interior design services in Hyderabad. Modern designs, quality execution, affordable prices. Free consultation available.',
    keywords: 'interior design services, home interior design Hyderabad, residential interior design, modern interior design, budget interior design, interior decorator',
    canonical: '/services/interior-design',
  },
  
  renovation: {
    title: 'Home Renovation Services in Hyderabad - Expert Team',
    description: 'Complete home renovation services in Hyderabad. Kitchen, bathroom, living room makeovers. Quality work, transparent pricing, hassle-free experience.',
    keywords: 'home renovation Hyderabad, house renovation services, kitchen renovation, bathroom renovation, room renovation, renovation contractors Hyderabad',
    canonical: '/services/renovation',
  },
  
  consultation: {
    title: 'Free Interior Design Consultation - Expert Advice',
    description: 'Get free interior design consultation from experts. Personalized solutions, budget planning, material selection. Book your consultation today!',
    keywords: 'interior design consultation, free design consultation Hyderabad, interior design advice, design planning, budget consultation, expert interior designer',
    canonical: '/services/consultation',
  },
  
  visualization3D: {
    title: '3D Visualization Services - See Before You Build',
    description: 'Professional 3D visualization and rendering services. Visualize your dream space before construction. Realistic renders, quick turnaround.',
    keywords: '3D visualization Hyderabad, 3D rendering services, interior 3D design, architectural visualization, 3D floor plans, virtual home design',
    canonical: '/services/3d-visualization',
  },
  
  materialSourcing: {
    title: 'Material Sourcing - Premium Quality at Best Prices',
    description: 'Expert material sourcing services for your interior project. Access to premium materials at competitive prices. Quality assured, timely delivery.',
    keywords: 'material sourcing Hyderabad, interior materials, construction materials, premium materials, material suppliers, quality materials',
    canonical: '/services/material-sourcing',
  },
};

export default seoData;
