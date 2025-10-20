/**
 * PROJECTS DATA - FULLY AUTOMATED SYSTEM
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Create project data object (like smashArenaData below)
 * 2. Add it to projectsRegistry array at the bottom
 * 3. That's it! The project will automatically appear in:
 *    - Portfolio page with filter functionality
 *    - Homepage featured projects (if featured: true)
 *    - Auto-generated route /projects/your-project-id
 *    - Navigation and links
 * 
 * REQUIRED FIELDS for project data:
 * - title: Project name
 * - subtitle: Brief description
 * - completionDate: "Month Year" format
 * - heroImage: Main project image path
 * - highlights: Array with Timeline and Project Size objects
 * - story: Array of description paragraphs
 * 
 * REQUIRED FIELDS for registry entry:
 * - id: URL-friendly project identifier (kebab-case)
 * - data: Reference to your project data object
 * - status: 'Completed', 'In Progress', or 'Planning'
 * - portfolioCategory: 'Commercial' or 'Residential'
 * - location: 'City, State/Country'
 * - featured: true/false (appears on homepage if true)
 */

export const smashArenaData = {
  title: "Smash Arena",
  subtitle: "Premium sports facility featuring multiple badminton courts, spectator areas, and modern amenities",
  completionDate: "March 2024",
  projectType: "Sports Facility",
  heroImage: "/images/1-min.png",
  heroImageAlt: "Smash Arena completed sports facility showing professional badminton courts with modern lighting and spectator seating",

  // Project metadata
  tags: ["Sports Facility", "Commercial", "Turnkey", "Badminton", "Recreation"],
  industry: "Sports & Recreation",
  category: "Commercial Interiors",
  budget: "₹25-50 Lakhs",
  teamSize: "8 members",
  awards: ["Best Sports Facility Design 2024", "Excellence in Commercial Interiors"],
  certifications: ["ISO 9001:2015", "Green Building Certified"],
  pressMentions: [
    {
      title: "Telangana Today",
      quote: "A landmark sports facility that sets new standards in design and functionality",
      date: "April 2024"
    },
    {
      title: "Hyderabad Chronicle",
      quote: "Innovative approach to sports facility design with exceptional attention to detail",
      date: "March 2024"
    }
  ],

  story: [
    "Smash Arena represents our commitment to creating world-class sports facilities that combine functionality with aesthetic excellence. This premium badminton and sports complex was designed to provide an exceptional experience for players and spectators alike.",
    "Our team delivered a complete turnkey solution, including interior design, lighting design, branding, and execution. The project was completed in just 45 days, showcasing our efficiency and attention to detail.",
    "The facility features multiple courts, spectator areas, changing rooms, and a reception area, all designed with modern aesthetics and optimal functionality in mind."
  ],

  designPhases: [
    {
      name: "Concept Sketches",
      images: [
        {
          src: "/images/Enscape_2025-05-06-18-01-37.png",
          alt: "Smash Arena initial concept design showing spatial layout and architectural planning for sports facility",
          name: "Initial Concept",
          description: "Initial design concept showing the overall layout and spatial planning",
          context: "Early stage design exploration for the sports arena layout"
        }
      ]
    },
    {
      name: "3D Renders",
      images: [
        {
          src: "/images/Enscape_2025-05-06-18-01-37.png",
          alt: "Smash Arena modern living room 3D visualization with contemporary furniture and lighting design",
          name: "Modern Living Room",
          description: "Detailed 3D visualization of the main living area with contemporary furniture",
          context: "3D render showcasing the reception and lounge area design"
        },
        {
          src: "/images/Enscape_2025-05-06-18-05-41.png",
          alt: "Smash Arena contemporary living room with integrated TV setup and entertainment area 3D render",
          name: "Living Room with TV",
          description: "3D render showcasing the entertainment area with integrated TV setup",
          context: "Entertainment zone design with modern AV integration"
        },
        {
          src: "/images/Enscape_2025-04-06-10-21-11_MB2.jpg",
          alt: "Smash Arena exterior parking area 3D visualization showing building facade and vehicle access",
          name: "Arena Parking",
          description: "Exterior view showing the parking area and building facade",
          context: "Exterior design and parking layout visualization"
        },
        {
          src: "/images/Enscape_2025-04-06-10-21-11_MB3.jpg",
          alt: "Smash Arena building parking structure 3D render with detailed access points and circulation",
          name: "Building Parking",
          description: "Detailed view of the parking structure and access points",
          context: "Parking structure design with circulation planning"
        }
      ]
    },
    {
      name: "Progress Shots",
      images: [
        {
          src: "/images/1-min.png",
          alt: "Smash Arena construction progress showing structural development and work in progress",
          name: "Construction Progress",
          description: "Mid-construction view showing the structural development",
          context: "Construction phase documentation showing project progress"
        }
      ]
    },
    {
      name: "Final Execution",
      images: [
        {
          src: "/images/1-min.png",
          alt: "Smash Arena completed main entrance with outdoor seating area and professional landscaping",
          name: "Main Entrance",
          description: "Completed main entrance with outdoor seating and landscaping",
          context: "Final execution showing the completed entrance design"
        },
        {
          src: "/images/3-min.png",
          alt: "Smash Arena interior badminton courts with professional lighting, flooring, and active players",
          name: "Badminton Courts",
          description: "Fully completed badminton courts with professional lighting and flooring",
          context: "Completed sports facility with professional court setup"
        },
        {
          src: "/images/4-min.png",
          alt: "Smash Arena exterior night view showcasing architectural lighting design and building illumination",
          name: "Night View",
          description: "Exterior night view showcasing the architectural lighting design",
          context: "Night-time architectural lighting and building illumination"
        },
        {
          src: "/images/5-min.png",
          alt: "Smash Arena badminton court interior detail showing spectator seating and court layout",
          name: "Court Interior",
          description: "Detailed interior view of the court area with spectator seating",
          context: "Interior court design with spectator facilities"
        },
        {
          src: "/images/6-min.png",
          alt: "Smash Arena multi-court arena panoramic view showing multiple badminton courts and spectator areas",
          name: "Multi-Court View",
          description: "Panoramic view of the multiple courts and spectator areas",
          context: "Multi-court facility layout and spectator arrangement"
        },
        {
          src: "/images/7-min.png",
          alt: "Smash Arena dedicated children's play area with safety features, colorful design, and child-friendly equipment",
          name: "Kids Area",
          description: "Dedicated children's play area with safety features and colorful design",
          context: "Family-friendly play area with safety-focused design"
        }
      ]
    }
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "45 days",
      detail: "From concept to completion",
      value: "45 days"
    },
    {
      icon: "FaRulerCombined",
      title: "Project Size",
      description: "15,000 sq ft",
      detail: "Total built-up area",
      value: "15,000 sq ft"
    },
    {
      icon: "FaBuilding",
      title: "Client Type",
      description: "Commercial",
      detail: "Sports facility business",
      value: "Commercial"
    },
    {
      icon: "FaUsers",
      title: "Capacity",
      description: "200+ players",
      detail: "Multi-court facility",
      value: "200+ players"
    },
    {
      icon: "FaMapMarkerAlt",
      title: "Location",
      description: "Hyderabad, Telangana",
      detail: "Prime location",
      value: "Hyderabad"
    },
    {
      icon: "FaHammer",
      title: "Scope",
      description: "Turnkey Solution",
      detail: "Design + Interiors + Branding",
      value: "Turnkey"
    }
  ],

  testimonial: {
    quote: "Working with Dimension DZine was seamless. They delivered exactly as promised in record time. The attention to detail and quality of execution exceeded our expectations. The arena has become a landmark in our area and we couldn't be happier with the results.",
    author: "Rajesh Kumar",
    designation: "Owner, Smash Arena",
    rating: 4.8,
    totalReviews: 12,
    clientImage: "/images/client-rajesh.jpg",
    verified: true
  }
};

// Modern Living Room Project Data
export const modernLivingRoomData = {
  title: "Modern Living Room",
  subtitle: "Contemporary living space with elegant furniture",
  completionDate: "February 2024",
  projectType: "Residential Interior",
  heroImage: "/images/Enscape_2025-05-06-18-01-37.png",
  heroImageAlt: "Modern living room with contemporary furniture and natural lighting",

  tags: ["Residential", "Interior Design", "Modern", "Living Room"],
  industry: "Residential",
  category: "Interior Design",
  budget: "₹8-15 Lakhs",
  teamSize: "4 members",

  story: [
    "Modern living room design with clean lines and natural light.",
    "Completed in 30 days with premium materials and finishes.",
    "Functional space that serves as the heart of the home."
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "30 days",
      detail: "From concept to completion",
      value: "30 days"
    },
    {
      icon: "FaRulerCombined",
      title: "Project Size",
      description: "800 sq ft",
      detail: "Living area",
      value: "800 sq ft"
    },
    {
      icon: "FaHome",
      title: "Client Type",
      description: "Residential",
      detail: "Family home",
      value: "Residential"
    }
  ],

  testimonial: {
    quote: "Great work on our living room. Clean, modern design exactly what we wanted.",
    author: "Priya Sharma",
    designation: "Homeowner",
    rating: 4.9,
    totalReviews: 8,
    verified: true
  }
};

// Luxury Kitchen Project Data
export const luxuryKitchenData = {
  title: "Luxury Kitchen",
  subtitle: "Premium kitchen with high-end appliances",
  completionDate: "January 2024",
  projectType: "Kitchen Interior",
  heroImage: "/images/WhatsApp-Image-2025-04-04-at-2.31.34-PM-2.jpeg",
  heroImageAlt: "Luxury kitchen with premium appliances and elegant finishes",

  tags: ["Kitchen", "Luxury", "Interior Design", "Premium"],
  industry: "Residential",
  category: "Kitchen Design",
  budget: "₹12-25 Lakhs",
  teamSize: "5 members",

  story: [
    "Premium kitchen design with high-end appliances.",
    "Smart storage solutions and quality materials.",
    "Completed in 40 days with excellent results."
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "40 days",
      detail: "From concept to completion",
      value: "40 days"
    },
    {
      icon: "FaRulerCombined",
      title: "Project Size",
      description: "400 sq ft",
      detail: "Kitchen area",
      value: "400 sq ft"
    },
    {
      icon: "FaUtensils",
      title: "Features",
      description: "Premium Appliances",
      detail: "High-end kitchen equipment",
      value: "Premium"
    }
  ],

  testimonial: {
    quote: "Beautiful kitchen design. Functional and stylish. We love cooking here now!",
    author: "Anita Patel",
    designation: "Homeowner",
    rating: 4.8,
    totalReviews: 6,
    verified: true
  }
};

// CENTRALIZED PROJECT REGISTRY
// Add new projects here and they will automatically appear in the portfolio
export const projectsRegistry = [
  {
    id: 'smash-arena',
    data: smashArenaData,
    status: 'Completed',
    featured: true,
    portfolioCategory: 'Commercial', // Commercial or Residential
    location: 'Hyderabad, India'
  },
  {
    id: 'modern-living-room',
    data: modernLivingRoomData,
    status: 'Completed',
    featured: true,
    portfolioCategory: 'Residential',
    location: 'Hyderabad, India'
  },
  {
    id: 'luxury-kitchen',
    data: luxuryKitchenData,
    status: 'Completed',
    featured: true,
    portfolioCategory: 'Residential',
    location: 'Hyderabad, India'
  }
  // ADD NEW PROJECTS HERE - they will automatically appear in portfolio
  // Example of how to add a new project:
  /*
  {
    id: 'luxury-office-space',
    data: luxuryOfficeSpaceData, // Create this data object above
    status: 'Completed',
    featured: true,
    portfolioCategory: 'Commercial',
    location: 'Mumbai, India'
  }
  */
];

/**
 * TEMPLATE FOR NEW PROJECT DATA:
 * Copy this template and fill in your project details
 * 
export const newProjectData = {
  title: "Your Project Name",
  subtitle: "Brief project description",
  completionDate: "Month Year", // e.g., "March 2024"
  projectType: "Project Type", // e.g., "Office Interior"
  heroImage: "/images/your-hero-image.jpg",
  heroImageAlt: "Alt text for your hero image",
  
  tags: ["Tag1", "Tag2", "Tag3"],
  industry: "Industry Type",
  category: "Category",
  budget: "₹X-Y Lakhs",
  teamSize: "X members",
  
  story: [
    "First paragraph describing the project...",
    "Second paragraph with more details...",
    "Third paragraph about results..."
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "X days", // REQUIRED for portfolio display
      detail: "From concept to completion",
      value: "X days"
    },
    {
      icon: "FaRulerCombined", 
      title: "Project Size",
      description: "X sq ft", // REQUIRED for portfolio display
      detail: "Total area",
      value: "X sq ft"
    }
    // Add more highlights as needed
  ],

  testimonial: {
    quote: "Client testimonial quote...",
    author: "Client Name",
    designation: "Client Title",
    rating: 4.8,
    totalReviews: 10,
    verified: true
  }
};

// Then add to projectsRegistry:
// {
//   id: 'your-project-id',
//   data: newProjectData,
//   status: 'Completed',
//   featured: true,
//   portfolioCategory: 'Commercial', // or 'Residential'
//   location: 'City, Country'
// }
 */

// AUTO-GENERATED: Don't modify these - they're generated from projectsRegistry
export const projectsData = projectsRegistry.reduce((acc, project) => {
  acc[project.id] = project.data;
  return acc;
}, {});

// AUTO-GENERATED: Portfolio projects for the projects page
export const portfolioProjects = projectsRegistry.map(project => {
  const data = project.data;

  // Extract key highlights for display
  const timelineHighlight = data.highlights?.find(h => h.title === 'Timeline');
  const sizeHighlight = data.highlights?.find(h => h.title === 'Project Size');
  const scopeHighlight = data.highlights?.find(h => h.title === 'Scope');
  const clientHighlight = data.highlights?.find(h => h.title === 'Client Type');

  // Create short, concise description (max 80 characters)
  const shortDescription = data.subtitle.length > 80
    ? data.subtitle.substring(0, 77) + '...'
    : data.subtitle;

  // Create concise feature tags from highlights
  const features = [
    timelineHighlight?.description || 'Quick delivery',
    sizeHighlight?.description || 'Optimized space',
    scopeHighlight?.description || clientHighlight?.description || data.projectType || 'Professional'
  ].filter(Boolean);

  return {
    id: project.id,
    title: data.title,
    subtitle: data.subtitle,
    description: shortDescription,
    image: data.heroImage,
    category: project.portfolioCategory,
    status: project.status,
    year: data.completionDate.split(' ')[1],
    location: project.location,
    completionDate: data.completionDate,
    timeline: timelineHighlight?.description || 'N/A',
    size: sizeHighlight?.description || 'N/A',
    budget: data.budget || 'Contact for quote',
    features: features,
    route: `/projects/${project.id}`,
    featured: project.featured
  };
});

// AUTO-GENERATED: Featured projects for homepage (only featured ones)
export const featuredProjects = portfolioProjects.filter(project => project.featured);
