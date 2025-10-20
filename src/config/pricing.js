// Price Configuration for Dimension Dzine
// Update these prices as needed - no technical knowledge required!

export const PRICING_CONFIG = {
  // Base prices per square foot (in INR)
  basePrices: {
    'full-home-interior': 1200,    // Full home interior per sq ft
    'kitchen': 1800,               // Kitchen interior per sq ft
    'wardrobe': 800                // Wardrobe per sq ft
  },

  // Complexity level multipliers
  complexityMultipliers: {
    'basic': 1.0,        // Basic finish
    'standard': 1.3,     // Standard finish
    'premium': 1.6,      // Premium finish
    'luxury': 2.2        // Luxury finish
  },

  // Location multipliers (cost varies by city tier)
  locationMultipliers: {
    'tier1': 1.3,        // Mumbai, Delhi, Bangalore
    'tier2': 1.1,        // Pune, Hyderabad, Chennai
    'tier3': 1.0         // Other cities
  },

  // Timeline multipliers
  timelineMultipliers: {
    'urgent': 1.2,       // 1-2 months
    'normal': 1.0,       // 3-6 months
    'flexible': 0.9      // 6+ months
  },

  // Additional charges (fixed amounts)
  additionalCharges: {
    'full-home-interior': {
      'design-fee': 50000,        // Design consultation fee
      'site-supervision': 30000,  // Site supervision fee
      'material-handling': 25000  // Material handling fee
    },
    'kitchen': {
      'design-fee': 25000,        // Kitchen design fee
      'appliance-setup': 15000,   // Appliance setup fee
      'warranty': 10000           // Extended warranty
    },
    'wardrobe': {
      'design-fee': 15000,        // Wardrobe design fee
      'installation': 8000,       // Installation fee
      'hardware-upgrade': 12000   // Premium hardware upgrade
    }
  },

  // Minimum project values
  minimumValues: {
    'full-home-interior': 200000,  // Minimum 2 lakh
    'kitchen': 150000,             // Minimum 1.5 lakh
    'wardrobe': 80000              // Minimum 80k
  },

  // Package multipliers for Full Home Interior
  packageMultipliers: {
    'essentials': 1.0,      // Basic package
    'premium': 1.5,         // Premium package
    'luxe': 2.2             // Luxury package
  },

  // BHK area mapping (in sq ft)
  bhkAreaMapping: {
    '1-bhk': 600,
    '2-bhk-small': 700,
    '2-bhk-large': 1000,
    '3-bhk-small': 1000,
    '3-bhk-large': 1400,
    '4-bhk-small': 1400,
    '4-bhk-large': 2000,
    '5-bhk-plus': 2500
  },

  // Service descriptions for display
  serviceDescriptions: {
    'full-home-interior': {
      title: 'Full Home Interior',
      description: 'Complete home interior design and execution',
      features: [
        'Living room design',
        'Bedroom interiors',
        'Kitchen design',
        'Bathroom design',
        'Lighting design',
        'Furniture selection'
      ]
    },
    'kitchen': {
      title: 'Kitchen Interior',
      description: 'Complete kitchen design and modular solutions',
      features: [
        'Modular kitchen design',
        'Cabinet installation',
        'Countertop selection',
        'Appliance integration',
        'Lighting setup',
        'Storage optimization'
      ]
    },
    'wardrobe': {
      title: 'Wardrobe Design',
      description: 'Custom wardrobe design and installation',
      features: [
        'Custom wardrobe design',
        'Premium materials',
        'Space optimization',
        'Installation service',
        'Hardware selection',
        'Maintenance guide'
      ]
    }
  }
};

// Helper function to calculate estimate
export const calculateEstimate = (serviceType, area, complexity = 'standard', location = 'tier2', timeline = 'normal') => {
  const config = PRICING_CONFIG;
  
  // Get base price per sq ft
  const basePricePerSqFt = config.basePrices[serviceType] || 1000;
  
  // Apply multipliers
  const complexityMultiplier = config.complexityMultipliers[complexity] || 1.0;
  const locationMultiplier = config.locationMultipliers[location] || 1.0;
  const timelineMultiplier = config.timelineMultipliers[timeline] || 1.0;
  
  // Calculate base amount
  const baseAmount = area * basePricePerSqFt * complexityMultiplier * locationMultiplier * timelineMultiplier;
  
  // Add additional charges
  const additionalCharges = config.additionalCharges[serviceType] || {};
  const totalAdditional = Object.values(additionalCharges).reduce((sum, charge) => sum + charge, 0);
  
  // Calculate final amount
  let finalAmount = baseAmount + totalAdditional;
  
  // Apply minimum value
  const minimumValue = config.minimumValues[serviceType] || 0;
  finalAmount = Math.max(finalAmount, minimumValue);
  
  return {
    baseAmount: Math.round(baseAmount),
    additionalCharges: Math.round(totalAdditional),
    finalAmount: Math.round(finalAmount),
    breakdown: {
      area,
      basePricePerSqFt,
      complexityMultiplier,
      locationMultiplier,
      timelineMultiplier,
      additionalCharges
    }
  };
};

// Helper function to calculate package-based estimate for Full Home Interior
export const calculatePackageEstimate = (bhkType, size, packageType, rooms = {}) => {
  const config = PRICING_CONFIG;
  
  // Get area based on BHK and size
  const areaKey = size ? `${bhkType}-${size}` : bhkType;
  const area = config.bhkAreaMapping[areaKey] || 1000;
  
  // Get package multiplier
  const packageMultiplier = config.packageMultipliers[packageType] || 1.0;
  
  // Calculate base estimate
  const baseEstimate = calculateEstimate('full-home-interior', area, 'standard', 'tier2', 'normal');
  
  // Apply package multiplier
  const finalAmount = Math.round(baseEstimate.finalAmount * packageMultiplier);
  
  return {
    ...baseEstimate,
    finalAmount,
    packageMultiplier,
    area,
    bhkType,
    size,
    packageType,
    rooms
  };
};

// Helper function to format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};
