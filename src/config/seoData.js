/**
 * SEO Configuration for Dimensions Dzine
 * TOP-TIER SEO: Optimized for AI search, local SEO, and traditional search engines
 * Includes structured data, location targeting, and intent-focused keywords
 */

const siteUrl = 'https://dimensionsdzine.com';
const businessName = 'Dimensions Dzine';
const businessPhone = '+91-XXXXXXXXXX'; // Replace with actual phone
const businessEmail = 'info@dimensionsdzine.com'; // Replace with actual email

// Location-specific data for local SEO
export const locations = {
  primary: {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    postalCode: '500001',
    coordinates: { lat: 17.385044, lng: 78.486671 },
  },
  serviceAreas: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Telangana'],
};

// Organization Schema (Used across all pages)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.webp`,
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
    title: 'Interior Designers in Hyderabad | Dimensions Dzine',
    description: 'Premium interior design & construction services in Hyderabad. Modular kitchens, wardrobes, turnkey interiors. 200+ happy clients. Free consultation. Call now!',
    keywords: 'interior designers in Hyderabad, home interior design Hyderabad, modular kitchen Hyderabad, interior designers near me, best interior design firm Hyderabad, luxury interior designers, 3bhk interior design cost, office interior design company, interior design services Telangana, residential interior design Hyderabad',
    canonical: '/',
    faq: [
      {
        question: 'How much does interior design cost in Hyderabad?',
        answer: 'Interior design costs in Hyderabad typically range from ₹1,200 to ₹2,500 per sq ft depending on the scope, materials, and customization. We offer transparent pricing with detailed quotations.',
      },
      {
        question: 'What areas do you serve in Telangana?',
        answer: 'We serve Hyderabad, Warangal, Nizamabad, Karimnagar, Khammam, and surrounding areas across Telangana with complete interior design and construction services.',
      },
      {
        question: 'How long does a typical interior design project take?',
        answer: 'A 2BHK interior typically takes 45-60 days, while a 3BHK takes 60-90 days. Timelines vary based on project scope and customization requirements.',
      },
      {
        question: 'Do you provide 3D visualization before starting work?',
        answer: 'Yes, we provide detailed 3D visualizations and walkthroughs so you can see your space before construction begins. This is included in our design consultation.',
      },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: businessName,
      image: `${siteUrl}/images/og-home.webp`,
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
    title: 'About Us - Top Interior Designers in Hyderabad',
    description: '10+ years of excellence in interior design & construction. 200+ satisfied clients across Telangana. Expert team, premium quality, transparent pricing. Know our story.',
    keywords: 'about Dimensions Dzine, interior design company Hyderabad, best interior designers Telangana, professional interior design team, trusted construction company, interior design experts Hyderabad',
    canonical: '/about',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      mainEntity: organizationSchema,
    },
  },

  services: {
    title: 'Interior Design Services Hyderabad | Modular Kitchen & More',
    description: 'Complete interior design services: Modular kitchens, wardrobes, home interiors, renovation, 3D visualization. Premium quality, affordable prices. Free consultation.',
    keywords: 'interior design services Hyderabad, modular kitchen design Hyderabad, home renovation services, wardrobe design, false ceiling design, bathroom renovation Hyderabad, living room interior design, bedroom design services, commercial interior design, turnkey interior solutions',
    canonical: '/services',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
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
    title: 'Interior Design Projects Portfolio | Hyderabad',
    description: 'Browse 50+ completed interior design projects in Hyderabad. Real homes, real transformations. 2BHK, 3BHK interiors, modular kitchens, office spaces. Get inspired!',
    keywords: 'interior design portfolio Hyderabad, completed interior projects, home interior gallery, modular kitchen photos, 2bhk interior design ideas, 3bhk interior design, renovation before after, residential projects Hyderabad, modern living room interiors',
    canonical: '/projects',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Interior Design Projects Portfolio',
      description: 'Showcase of completed interior design and construction projects',
      provider: organizationSchema,
    },
  },

  contact: {
    title: 'Contact Us - Free Interior Design Consultation Hyderabad',
    description: 'Get free interior design consultation in Hyderabad. Call +91-XXXXXXXXXX or visit our office. Expert advice, transparent quotes, quick response. Book now!',
    keywords: 'contact interior designer Hyderabad, free design consultation Hyderabad, interior design inquiry, get quote interior design, construction services contact, home interior consultation, modular kitchen quote, interior designers near me',
    canonical: '/contact',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
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
    title: 'Interior Design Cost Calculator Hyderabad | Instant Estimate',
    description: 'Calculate interior design costs instantly. Get accurate estimates for 2BHK, 3BHK interiors, modular kitchens, wardrobes. Free online calculator. No signup required.',
    keywords: 'interior design cost calculator, 2bhk interior design cost, 3bhk interior design cost, modular kitchen price calculator, home interior cost estimate Hyderabad, renovation cost calculator, wardrobe design price, budget calculator interior',
    canonical: '/calculator',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Cost Calculator', url: '/calculator' },
    ],
    faq: [
      {
        question: 'How accurate is the interior design cost calculator?',
        answer: 'Our calculator provides estimates within 10-15% accuracy based on current market rates in Hyderabad. Final costs may vary based on material selection and customization.',
      },
      {
        question: 'What is included in the interior design cost?',
        answer: 'The cost includes design consultation, 3D visualization, materials, labor, installation, and project management. Detailed breakdowns are provided in quotations.',
      },
    ],
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

// Service-specific pages with enhanced SEO
export const serviceSeoData = {
  construction: {
    title: 'Construction Services Hyderabad | Residential & Commercial',
    description: 'Professional construction services in Hyderabad. New construction, civil work, structural projects. Quality materials, on-time delivery, transparent pricing. Get quote!',
    keywords: 'construction services Hyderabad, civil construction Telangana, building construction Hyderabad, residential construction, commercial construction, construction company near me, house construction Hyderabad',
    canonical: '/services/construction',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Construction', url: '/services/construction' },
    ],
    faq: [
      {
        question: 'What construction services do you offer in Hyderabad?',
        answer: 'We offer complete construction services including new residential construction, commercial buildings, civil work, structural modifications, and renovation projects across Hyderabad and Telangana.',
      },
      {
        question: 'How long does a typical construction project take?',
        answer: 'Construction timelines vary by project size. A typical residential construction takes 6-12 months, while renovations take 2-4 months. We provide detailed timelines during consultation.',
      },
    ],
  },
  
  interiorDesign: {
    title: 'Interior Design Services Hyderabad | Home & Office Interiors',
    description: 'Expert interior design services in Hyderabad. Residential & commercial interiors, space planning, furniture design. Modern, functional, affordable. Free consultation!',
    keywords: 'interior design services Hyderabad, home interior design, residential interior design, modern interior design, office interior design, budget interior design, interior decorator Hyderabad, luxury interior designers',
    canonical: '/services/interior-design',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Interior Design', url: '/services/interior-design' },
    ],
    faq: [
      {
        question: 'What is included in interior design services?',
        answer: 'Our interior design services include space planning, 3D visualization, color consultation, furniture selection, lighting design, material sourcing, and complete project execution.',
      },
      {
        question: 'Do you handle both residential and commercial interior design?',
        answer: 'Yes, we specialize in both residential interiors (homes, apartments, villas) and commercial spaces (offices, retail stores, restaurants) across Hyderabad.',
      },
    ],
  },
  
  renovation: {
    title: 'Home Renovation Services Hyderabad | Kitchen, Bathroom & More',
    description: 'Complete home renovation services in Hyderabad. Kitchen remodeling, bathroom renovation, living room makeover. Quality work, minimal disruption. Get free quote!',
    keywords: 'home renovation Hyderabad, house renovation services, kitchen renovation Hyderabad, bathroom renovation, room renovation, flat renovation, renovation contractors Hyderabad, home remodeling services',
    canonical: '/services/renovation',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Renovation', url: '/services/renovation' },
    ],
    faq: [
      {
        question: 'How much does home renovation cost in Hyderabad?',
        answer: 'Home renovation costs vary based on scope. Kitchen renovation starts from ₹2-4 lakhs, bathroom from ₹1-2 lakhs, and complete home renovation from ₹8-15 lakhs for a 2BHK.',
      },
      {
        question: 'Can I stay in my home during renovation?',
        answer: 'Yes, we plan renovations to minimize disruption. For partial renovations (kitchen, bathroom), you can stay. For complete home renovations, temporary relocation is recommended.',
      },
    ],
  },
  
  consultation: {
    title: 'Free Interior Design Consultation Hyderabad | Expert Advice',
    description: 'Get free interior design consultation from experts in Hyderabad. Personalized solutions, budget planning, material selection, design ideas. Book your session today!',
    keywords: 'interior design consultation Hyderabad, free design consultation, interior design advice, design planning, budget consultation, expert interior designer, home design consultation',
    canonical: '/services/consultation',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Consultation', url: '/services/consultation' },
    ],
    faq: [
      {
        question: 'Is the interior design consultation really free?',
        answer: 'Yes, we offer a complimentary initial consultation where we discuss your requirements, budget, timeline, and provide preliminary design ideas and cost estimates.',
      },
      {
        question: 'What should I prepare for the consultation?',
        answer: 'Bring floor plans if available, photos of spaces you like, your budget range, and any specific requirements. We\'ll guide you through the rest during the consultation.',
      },
    ],
  },
  
  visualization3D: {
    title: '3D Visualization Services Hyderabad | Interior 3D Rendering',
    description: 'Professional 3D visualization & rendering services in Hyderabad. See your interior design before construction. Realistic 3D renders, virtual walkthroughs. Quick turnaround!',
    keywords: '3D visualization Hyderabad, 3D rendering services, interior 3D design, architectural visualization, 3D floor plans, virtual home design, 3D interior rendering, photorealistic rendering',
    canonical: '/services/3d-visualization',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: '3D Visualization', url: '/services/3d-visualization' },
    ],
    faq: [
      {
        question: 'Why is 3D visualization important for interior design?',
        answer: '3D visualization helps you see exactly how your space will look before construction begins, allowing you to make changes early and avoid costly mistakes during execution.',
      },
      {
        question: 'How long does it take to create 3D renders?',
        answer: 'Typically 3-5 business days for standard residential projects. Complex commercial projects may take 7-10 days. We provide multiple views and revisions as needed.',
      },
    ],
  },
  
  materialSourcing: {
    title: 'Material Sourcing Services Hyderabad | Premium Interior Materials',
    description: 'Expert material sourcing for interior projects in Hyderabad. Access to premium materials at competitive prices. Quality assured, timely delivery, warranty support.',
    keywords: 'material sourcing Hyderabad, interior materials, construction materials, premium materials, material suppliers Hyderabad, quality materials, imported materials, local materials',
    canonical: '/services/material-sourcing',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Material Sourcing', url: '/services/material-sourcing' },
    ],
    faq: [
      {
        question: 'What types of materials do you source?',
        answer: 'We source all interior materials including tiles, flooring, kitchen hardware, bathroom fittings, lighting, furniture, fabrics, wallpapers, and decorative elements from trusted suppliers.',
      },
      {
        question: 'Do you offer warranty on materials?',
        answer: 'Yes, all materials come with manufacturer warranties. We also provide our own workmanship warranty and assist with any warranty claims during the coverage period.',
      },
    ],
  },
};

export default seoData;
