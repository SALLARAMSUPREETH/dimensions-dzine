/**
 * PROJECTS DATA - FULLY AUTOMATED SYSTEM
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Create project data object (like smashArenaData below)
 * 2. Add it to projectsRegistry array%20at%20the bottom
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
      images: [], // No concept sketches available
      available: false
    },
    {
      name: "3D Renders",
      images: [
        {
          src: "/images/SmashArena/renders/1-min-p-3200.png",
          alt: "Smash Arena 3D render showing main entrance and exterior design",
          name: "Main Entrance Render",
          description: "3D visualization of the main entrance with outdoor seating",
          context: "Exterior design and entrance planning"
        },
        {
          src: "/images/SmashArena/renders/3-min-p-3200.png",
          alt: "Smash Arena interior badminton courts 3D render",
          name: "Court Interior Render",
          description: "3D render of the badminton courts with professional lighting",
          context: "Interior court design visualization"
        },
        {
          src: "/images/SmashArena/renders/4-min-p-3200.png",
          alt: "Smash Arena exterior night view 3D render",
          name: "Night View Render",
          description: "3D render showcasing architectural lighting design",
          context: "Night-time lighting and facade design"
        },
        {
          src: "/images/SmashArena/renders/5-min-p-3200.png",
          alt: "Smash Arena court interior detail 3D render",
          name: "Court Detail Render",
          description: "Detailed 3D view of court area with spectator seating",
          context: "Interior design with spectator facilities"
        },
        {
          src: "/images/SmashArena/renders/6-min.png",
          alt: "Smash Arena multi-court panoramic 3D render",
          name: "Multi-Court Render",
          description: "Panoramic 3D view of multiple courts and spectator areas",
          context: "Multi-court facility layout visualization"
        },
        {
          src: "/images/SmashArena/renders/7-min-p-3200.png",
          alt: "Smash Arena kids play area 3D render",
          name: "Kids Area Render",
          description: "3D render of children's play area with safety features",
          context: "Family-friendly play area design"
        }
      ],
      available: true
    },
    {
      name: "Progress Shots",
      images: [
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0009.jpg",
          alt: "Smash Arena construction progress - foundation work",
          name: "Foundation Stage",
          description: "Initial construction phase showing foundation work",
          context: "Early construction documentation"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0011.jpg",
          alt: "Smash Arena construction progress - structural development",
          name: "Structural Work",
          description: "Mid-construction showing structural development",
          context: "Structural phase progress"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0012.jpg",
          alt: "Smash Arena construction progress - interior framing",
          name: "Interior Framing",
          description: "Interior framing and partition work in progress",
          context: "Interior construction phase"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0013.jpg",
          alt: "Smash Arena construction progress - ceiling work",
          name: "Ceiling Installation",
          description: "Ceiling and overhead work installation",
          context: "Ceiling construction phase"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0014.jpg",
          alt: "Smash Arena construction progress - flooring preparation",
          name: "Flooring Prep",
          description: "Court flooring preparation and leveling",
          context: "Flooring installation phase"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0015.jpg",
          alt: "Smash Arena construction progress - electrical work",
          name: "Electrical Installation",
          description: "Electrical wiring and lighting installation",
          context: "MEP installation phase"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0016.jpg",
          alt: "Smash Arena construction progress - painting work",
          name: "Painting Phase",
          description: "Wall painting and finishing work",
          context: "Finishing phase documentation"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0017.jpg",
          alt: "Smash Arena construction progress - court marking",
          name: "Court Marking",
          description: "Professional court line marking in progress",
          context: "Court finishing details"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0018.jpg",
          alt: "Smash Arena construction progress - lighting setup",
          name: "Lighting Setup",
          description: "Professional sports lighting installation",
          context: "Lighting system installation"
        },
        {
          src: "/images/SmashArena/progressshots/IMG-20251101-WA0019.jpg",
          alt: "Smash Arena construction progress - seating installation",
          name: "Seating Installation",
          description: "Spectator seating area setup",
          context: "Seating and furniture installation"
        }
      ],
      available: true
    },
    {
      name: "Final Execution",
      images: [
        {
          src: "/images/SmashArena/final/IMG-20251101-WA0004.jpg",
          alt: "Smash Arena completed - main entrance view",
          name: "Main Entrance",
          description: "Completed main entrance with professional signage and landscaping",
          context: "Final entrance design and branding"
        },
        {
          src: "/images/SmashArena/final/IMG-20251101-WA0005.jpg",
          alt: "Smash Arena completed - interior courts view",
          name: "Badminton Courts",
          description: "Fully completed badminton courts with professional lighting and flooring",
          context: "Completed sports facility ready for play"
        },
        {
          src: "/images/SmashArena/final/IMG-20251101-WA0007.jpg",
          alt: "Smash Arena completed - overall facility view",
          name: "Facility Overview",
          description: "Complete facility view showing all courts and amenities",
          context: "Final project completion overview"
        }
      ],
      available: true
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

// Construction Project 1 Data
export const construction1Data = {
  title: "Commercial Construction Project",
  subtitle: "Modern commercial building construction with premium finishes and professional execution",
  completionDate: "October 2024",
  projectType: "Commercial Construction",
  heroImage: "/images/Construction_1/render/WhatsApp%20Image%202025-10-19%20at%2012.43.40%20PM.jpeg",
  heroImageAlt: "Commercial construction project showing modern building design and professional execution",

  tags: ["Construction", "Commercial", "Turnkey", "Building", "Modern"],
  industry: "Commercial",
  category: "Construction",
  budget: "₹50-100 Lakhs",
  teamSize: "12 members",

  story: [
    "This commercial construction project showcases our expertise in delivering high-quality building construction with attention to detail and timely execution.",
    "The project involved complete construction from foundation to finishing, including structural work, electrical, plumbing, and interior fit-outs.",
    "Our team ensured premium quality materials and professional workmanship throughout the construction process, resulting in a modern commercial facility."
  ],

  designPhases: [
    {
      name: "Concept Sketches",
      images: [],
      available: false
    },
    {
      name: "3D Renders",
      images: [
        {
          src: "/images/Construction_1/render/WhatsApp%20Image%202025-10-19%20at%2012.43.40%20PM.jpeg",
          alt: "Commercial construction 3D render showing building design",
          name: "Building Render",
          description: "3D visualization of the commercial building design",
          context: "Architectural design visualization"
        }
      ],
      available: true
    },
    {
      name: "Progress Shots",
      images: [
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.46%20PM.jpeg",
          alt: "Construction progress - initial phase",
          name: "Initial Phase",
          description: "Early construction phase documentation",
          context: "Foundation and initial work"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.48%20PM.jpeg",
          alt: "Construction progress - structural work",
          name: "Structural Work",
          description: "Structural development phase",
          context: "Building structure construction"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.49%20PM.jpeg",
          alt: "Construction progress - ongoing work",
          name: "Construction Progress",
          description: "Ongoing construction activities",
          context: "Mid-construction phase"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.50%20PM.jpeg",
          alt: "Construction progress - building development",
          name: "Building Development",
          description: "Building structure taking shape",
          context: "Structural development"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.51%20PM.jpeg",
          alt: "Construction progress - detailed work",
          name: "Detailed Work",
          description: "Detailed construction work in progress",
          context: "Precision construction"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.53%20PM.jpeg",
          alt: "Construction progress - advanced stage",
          name: "Advanced Stage",
          description: "Advanced construction phase",
          context: "Near completion work"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.39.56%20PM.jpeg",
          alt: "Construction progress - finishing work",
          name: "Finishing Work",
          description: "Finishing touches being applied",
          context: "Final construction phase"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.01%20PM.jpeg",
          alt: "Construction progress - quality check",
          name: "Quality Check",
          description: "Quality inspection during construction",
          context: "Quality assurance"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.09%20PM.jpeg",
          alt: "Construction progress - material installation",
          name: "Material Installation",
          description: "Premium materials being installed",
          context: "Material work"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.12%20PM.jpeg",
          alt: "Construction progress - professional execution",
          name: "Professional Execution",
          description: "Professional construction execution",
          context: "Expert workmanship"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.15%20PM.jpeg",
          alt: "Construction progress - structural details",
          name: "Structural Details",
          description: "Detailed structural work",
          context: "Structural precision"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.17%20PM.jpeg",
          alt: "Construction progress - building progress",
          name: "Building Progress",
          description: "Steady building progress",
          context: "Construction advancement"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.20%20PM.jpeg",
          alt: "Construction progress - ongoing development",
          name: "Ongoing Development",
          description: "Continuous development work",
          context: "Progress documentation"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.21%20PM.jpeg",
          alt: "Construction progress - construction site",
          name: "Construction Site",
          description: "Active construction site",
          context: "Site management"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.23%20PM.jpeg",
          alt: "Construction progress - work in progress",
          name: "Work in Progress",
          description: "Various construction activities",
          context: "Multi-tasking execution"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.30%20PM.jpeg",
          alt: "Construction progress - building structure",
          name: "Building Structure",
          description: "Building structure development",
          context: "Structural work"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.45%20PM.jpeg",
          alt: "Construction progress - construction details",
          name: "Construction Details",
          description: "Detailed construction work",
          context: "Attention to detail"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.40.53%20PM.jpeg",
          alt: "Construction progress - professional work",
          name: "Professional Work",
          description: "Professional construction standards",
          context: "Quality workmanship"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.03%20PM.jpeg",
          alt: "Construction progress - advanced construction",
          name: "Advanced Construction",
          description: "Advanced construction techniques",
          context: "Modern methods"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.22%20PM.jpeg",
          alt: "Construction progress - building development",
          name: "Building Development",
          description: "Steady building development",
          context: "Progress tracking"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.27%20PM.jpeg",
          alt: "Construction progress - construction phase",
          name: "Construction Phase",
          description: "Key construction phase",
          context: "Milestone achievement"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.40%20PM.jpeg",
          alt: "Construction progress - work execution",
          name: "Work Execution",
          description: "Efficient work execution",
          context: "Project management"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.47%20PM.jpeg",
          alt: "Construction progress - construction quality",
          name: "Construction Quality",
          description: "High-quality construction work",
          context: "Quality standards"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.41.53%20PM.jpeg",
          alt: "Construction progress - building progress",
          name: "Building Progress",
          description: "Visible building progress",
          context: "Progress visualization"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.42.21%20PM.jpeg",
          alt: "Construction progress - construction work",
          name: "Construction Work",
          description: "Ongoing construction work",
          context: "Active construction"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.42.29%20PM.jpeg",
          alt: "Construction progress - building structure",
          name: "Building Structure",
          description: "Building structure taking shape",
          context: "Structural development"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.42.43%20PM.jpeg",
          alt: "Construction progress - construction details",
          name: "Construction Details",
          description: "Detailed construction documentation",
          context: "Detail work"
        },
        {
          src: "/images/Construction_1/progress/WhatsApp%20Image 2025-10-19%20at%2012.43.30%20PM.jpeg",
          alt: "Construction progress - final stages",
          name: "Final Stages",
          description: "Final construction stages",
          context: "Near completion"
        }
      ],
      available: true
    },
    {
      name: "Final Execution",
      images: [],
      available: false
    }
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "6 months",
      detail: "From foundation to completion",
      value: "6 months"
    },
    {
      icon: "FaRulerCombined",
      title: "Project Size",
      description: "25,000 sq ft",
      detail: "Total built-up area",
      value: "25,000 sq ft"
    },
    {
      icon: "FaBuilding",
      title: "Client Type",
      description: "Commercial",
      detail: "Commercial building",
      value: "Commercial"
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
      description: "Turnkey Construction",
      detail: "Complete building construction",
      value: "Turnkey"
    }
  ],

  testimonial: {
    quote: "Excellent construction work with professional execution. The team delivered on time with quality materials and workmanship. Highly recommended for commercial projects.",
    author: "Project Owner",
    designation: "Commercial Developer",
    rating: 4.9,
    totalReviews: 5,
    verified: true
  }
};

// Sadbhavana Apartment Project Data
export const sadbhavanaApartmentData = {
  title: "Sadbhavana Apartment",
  subtitle: "Luxury residential apartment complex with modern interiors and premium amenities",
  completionDate: "September 2024",
  projectType: "Residential Apartment",
  heroImage: "/images/SadbhavanaApartment/renders/Image_1.png",
  heroImageAlt: "Sadbhavana Apartment luxury residential complex with modern design",

  tags: ["Residential", "Apartment", "Interior Design", "Luxury", "Modern"],
  industry: "Residential",
  category: "Residential Interiors",
  budget: "₹30-60 Lakhs",
  teamSize: "10 members",

  story: [
    "Sadbhavana Apartment represents a comprehensive residential interior design project featuring modern aesthetics and luxury finishes.",
    "The project involved complete interior design and execution for multiple apartment units, including living rooms, bedrooms, kitchens, and common areas.",
    "Our team created stunning 3D visualizations before execution, ensuring the client's vision was perfectly realized with premium materials and professional workmanship."
  ],

  designPhases: [
    {
      name: "Concept Sketches",
      images: [],
      available: false
    },
    {
      name: "3D Renders",
      images: [
        {
          src: "/images/SadbhavanaApartment/renders/Image_1.png",
          alt: "Sadbhavana Apartment 3D render - living area",
          name: "Living Area Render",
          description: "3D visualization of modern living space",
          context: "Living room design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Image_2.png",
          alt: "Sadbhavana Apartment 3D render - interior view",
          name: "Interior View",
          description: "Interior space visualization",
          context: "Interior design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Image_4.png",
          alt: "Sadbhavana Apartment 3D render - modern design",
          name: "Modern Design",
          description: "Contemporary design elements",
          context: "Modern aesthetics"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Image_5.png",
          alt: "Sadbhavana Apartment 3D render - elegant space",
          name: "Elegant Space",
          description: "Elegant interior design",
          context: "Luxury interiors"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Image.png",
          alt: "Sadbhavana Apartment 3D render - apartment view",
          name: "Apartment View",
          description: "Complete apartment visualization",
          context: "Full apartment design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 1_1.png",
          alt: "Sadbhavana Apartment scene 1",
          name: "Scene 1",
          description: "3D render scene 1",
          context: "Design visualization"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 2.png",
          alt: "Sadbhavana Apartment scene 2",
          name: "Scene 2",
          description: "3D render scene 2",
          context: "Interior scene"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 4.png",
          alt: "Sadbhavana Apartment scene 4",
          name: "Scene 4",
          description: "3D render scene 4",
          context: "Design scene"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 5_3.png",
          alt: "Sadbhavana Apartment scene 5",
          name: "Scene 5",
          description: "3D render scene 5",
          context: "Interior visualization"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 6.png",
          alt: "Sadbhavana Apartment scene 6",
          name: "Scene 6",
          description: "3D render scene 6",
          context: "Design perspective"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 7.png",
          alt: "Sadbhavana Apartment scene 7",
          name: "Scene 7",
          description: "3D render scene 7",
          context: "Interior design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 8.png",
          alt: "Sadbhavana Apartment scene 8",
          name: "Scene 8",
          description: "3D render scene 8",
          context: "Design view"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 8_4.png",
          alt: "Sadbhavana Apartment scene 8 variant",
          name: "Scene 8 Variant",
          description: "3D render scene 8 variant",
          context: "Alternative view"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 11_1.png",
          alt: "Sadbhavana Apartment scene 11",
          name: "Scene 11",
          description: "3D render scene 11",
          context: "Interior scene"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 12.png",
          alt: "Sadbhavana Apartment scene 12",
          name: "Scene 12",
          description: "3D render scene 12",
          context: "Design visualization"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 12_1.png",
          alt: "Sadbhavana Apartment scene 12 variant",
          name: "Scene 12 Variant",
          description: "3D render scene 12 variant",
          context: "Alternative perspective"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 14.png",
          alt: "Sadbhavana Apartment scene 14",
          name: "Scene 14",
          description: "3D render scene 14",
          context: "Interior design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 14_1.png",
          alt: "Sadbhavana Apartment scene 14 variant",
          name: "Scene 14 Variant",
          description: "3D render scene 14 variant",
          context: "Design view"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 42.png",
          alt: "Sadbhavana Apartment scene 42",
          name: "Scene 42",
          description: "3D render scene 42",
          context: "Interior visualization"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 85.png",
          alt: "Sadbhavana Apartment scene 85",
          name: "Scene 85",
          description: "3D render scene 85",
          context: "Design perspective"
        },
        {
          src: "/images/SadbhavanaApartment/renders/Scene 125.png",
          alt: "Sadbhavana Apartment scene 125",
          name: "Scene 125",
          description: "3D render scene 125",
          context: "Interior scene"
        },
        {
          src: "/images/SadbhavanaApartment/renders/12Image__4.png",
          alt: "Sadbhavana Apartment image 4",
          name: "Image 4",
          description: "3D render image 4",
          context: "Design visualization"
        },
        {
          src: "/images/SadbhavanaApartment/renders/12Scene 17_2.png",
          alt: "Sadbhavana Apartment scene 17",
          name: "Scene 17",
          description: "3D render scene 17",
          context: "Interior design"
        },
        {
          src: "/images/SadbhavanaApartment/renders/12Scene 19_1.png",
          alt: "Sadbhavana Apartment scene 19",
          name: "Scene 19",
          description: "3D render scene 19",
          context: "Design view"
        }
      ],
      available: true
    },
    {
      name: "Progress Shots",
      images: [],
      available: false
    },
    {
      name: "Final Execution",
      images: [],
      available: false
    }
  ],

  highlights: [
    {
      icon: "FaClock",
      title: "Timeline",
      description: "4 months",
      detail: "From design to completion",
      value: "4 months"
    },
    {
      icon: "FaRulerCombined",
      title: "Project Size",
      description: "15,000 sq ft",
      detail: "Total interior area",
      value: "15,000 sq ft"
    },
    {
      icon: "FaHome",
      title: "Client Type",
      description: "Residential",
      detail: "Apartment complex",
      value: "Residential"
    },
    {
      icon: "FaMapMarkerAlt",
      title: "Location",
      description: "Hyderabad, Telangana",
      detail: "Prime residential area",
      value: "Hyderabad"
    },
    {
      icon: "FaHammer",
      title: "Scope",
      description: "Interior Design + Execution",
      detail: "Complete interior solutions",
      value: "Turnkey Interior"
    }
  ],

  testimonial: {
    quote: "Outstanding interior design work! The 3D visualizations helped us visualize the final outcome perfectly. The execution matched the designs exactly. Beautiful work!",
    author: "Apartment Owner",
    designation: "Residential Client",
    rating: 4.8,
    totalReviews: 7,
    verified: true
  }
};

// CENTRALIZED PROJECT REGISTRY
// Add new projects here and they will automatically appear in the portfolio
// IMPORTANT: Add services array - projects will automatically appear in service filters
export const projectsRegistry = [
  {
    id: 'smash-arena',
    data: smashArenaData,
    status: 'Completed',
    featured: true,
    portfolioCategory: 'Commercial', // Commercial or Residential (shown on card)
    services: ['Construction', 'Interior Design', '3D Visualization'], // Services filter
    location: 'Hyderabad, India'
  },
  {
    id: 'construction-1',
    data: construction1Data,
    status: 'In Progress', // No final execution photos available
    featured: true,
    portfolioCategory: 'Commercial', // Commercial or Residential (shown on card)
    services: ['Construction', '3D Visualization'], // Services filter
    location: 'Hyderabad, India'
  },
  {
    id: 'sadbhavana-apartment',
    data: sadbhavanaApartmentData,
    status: 'In Progress', // No final execution photos available
    featured: true,
    portfolioCategory: 'Residential', // Commercial or Residential (shown on card)
    services: ['Interior Design', '3D Visualization', 'Material Sourcing'], // Services filter
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
    portfolioCategory: 'Commercial', // Commercial or Residential (shown on card)
    services: ['Construction', 'Interior Design'], // Array of services - auto-appears in filters
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
//   portfolioCategory: 'Commercial', // or 'Residential' (shown on card)
//   services: ['Construction', 'Interior Design'], // Array of services - auto-appears in filters
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
    category: project.portfolioCategory, // Commercial or Residential (shown on card)
    services: project.services || [], // Services array for filtering
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
