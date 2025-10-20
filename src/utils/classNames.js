/**
 * Utility function to combine class names
 * Similar to clsx or classnames libraries but lightweight
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Typography utility classes
 */
export const typography = {
  // Hero typography
  heroTitle: 'hero-title',
  heroSubtitle: 'hero-subtitle',
  heroTagline: 'hero-tagline',
  
  // Section typography
  sectionTitle: 'section-title',
  sectionSubtitle: 'section-subtitle',
  
  // Card typography
  cardTitle: 'card-title',
  cardSubtitle: 'card-subtitle',
  cardDescription: 'card-description',
  
  // Body text
  bodyLarge: 'body-large',
  bodyText: 'body-text',
  bodySmall: 'body-small',
  
  // Font families
  fontPrimary: 'font-primary',
  fontSecondary: 'font-secondary',
  
  // Font weights
  fontLight: 'font-light',
  fontNormal: 'font-normal',
  fontMedium: 'font-medium',
  fontSemibold: 'font-semibold',
  fontBold: 'font-bold',
  
  // Text colors
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  textMuted: 'text-muted',
  textBrandPrimary: 'text-brand-primary',
  textBrandSecondary: 'text-brand-secondary',
  textAccent: 'text-accent',
};

/**
 * Layout utility classes
 */
export const layout = {
  // Containers
  container: 'container',
  containerNarrow: 'container container-narrow',
  containerWide: 'container container-wide',
  
  // Sections
  section: 'section',
  sectionCompact: 'section section-compact',
  sectionSpacious: 'section section-spacious',
  
  // Flex utilities
  flex: 'flex',
  flexCol: 'flex flex-col',
  flexRow: 'flex flex-row',
  itemsCenter: 'items-center',
  itemsStart: 'items-start',
  itemsEnd: 'items-end',
  justifyCenter: 'justify-center',
  justifyBetween: 'justify-between',
  justifyStart: 'justify-start',
  justifyEnd: 'justify-end',
  
  // Grid utilities
  grid: 'grid',
  gridCols1: 'grid grid-cols-1',
  gridCols2: 'grid grid-cols-2',
  gridCols3: 'grid grid-cols-3',
  gridCols4: 'grid grid-cols-4',
  gridAutoFit: 'grid grid-auto-fit',
  
  // Text alignment
  textLeft: 'text-left',
  textCenter: 'text-center',
  textRight: 'text-right',
};

/**
 * Component utility classes
 */
export const components = {
  // Buttons
  btn: 'btn',
  btnPrimary: 'btn btn-primary',
  btnSecondary: 'btn btn-secondary',
  btnLarge: 'btn btn-large',
  btnSmall: 'btn btn-small',
  
  // Cards
  card: 'card',
  cardBody: 'card-body',
  
  // Backgrounds
  bgPrimary: 'bg-primary',
  bgAlt: 'bg-alt',
};

/**
 * Responsive utility functions
 */
export const responsive = {
  // Generate responsive text classes
  text: (base, md, lg) => {
    const classes = [base];
    if (md) classes.push(`md:${md}`);
    if (lg) classes.push(`lg:${lg}`);
    return classes.join(' ');
  },
  
  // Generate responsive grid classes
  grid: (base, md, lg) => {
    const classes = [`grid-cols-${base}`];
    if (md) classes.push(`md:grid-cols-${md}`);
    if (lg) classes.push(`lg:grid-cols-${lg}`);
    return `grid ${classes.join(' ')}`;
  },
};

/**
 * Common component combinations
 */
export const combinations = {
  // Hero section
  heroSection: cn(layout.section, 'psychology-hero'),
  heroContainer: cn(layout.container, 'hero-container'),
  heroContent: 'hero-content-split',
  
  // Services section
  servicesSection: cn(layout.section, 'services-section'),
  servicesGrid: cn(layout.gridCols3, 'services-grid'),
  
  // Trust signals
  trustSignals: 'trust-signals',
  trustCard: 'trust-card',
  
  // Page sections
  pageSection: cn(layout.section, layout.container),
  centeredSection: cn(layout.section, layout.container, layout.textCenter),
};

export default {
  cn,
  typography,
  layout,
  components,
  responsive,
  combinations,
};