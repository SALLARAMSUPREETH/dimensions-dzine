# Design System Documentation

## Overview

This design system provides a comprehensive, maintainable approach to typography and spacing across the React application. It's built with CSS custom properties (CSS variables) for consistency and easy theming.

## File Structure

```
src/
├── styles/
│   ├── design-system.css     # Core design system
│   └── README.md            # This documentation
├── utils/
│   └── classNames.js        # Utility functions and class generators
└── pages/
    └── Home.css            # Page-specific styles using the design system
```

## Core Principles

1. **Consistency**: All typography and spacing uses predefined scales
2. **Maintainability**: Centralized system with utility functions
3. **Responsiveness**: Fluid typography that scales across devices
4. **Performance**: Optimized CSS custom properties
5. **Accessibility**: Proper contrast, focus states, and semantic markup

## Design Tokens

### Typography Scale

```css
/* Font Families */
--font-family-primary: 'Sentient', 'Georgia', serif;
--font-family-secondary: 'Inter', 'Helvetica Neue', sans-serif;

/* Font Sizes (Fluid Typography) */
--text-xs: clamp(0.75rem, 0.9vw, 0.875rem);     /* 12-14px */
--text-sm: clamp(0.875rem, 1vw, 1rem);          /* 14-16px */
--text-base: clamp(1rem, 1.2vw, 1.125rem);      /* 16-18px */
--text-lg: clamp(1.125rem, 1.4vw, 1.25rem);     /* 18-20px */
--text-xl: clamp(1.25rem, 1.6vw, 1.5rem);       /* 20-24px */
--text-2xl: clamp(1.5rem, 2vw, 2rem);           /* 24-32px */
--text-3xl: clamp(2rem, 3vw, 2.5rem);           /* 32-40px */
--text-4xl: clamp(2.5rem, 4vw, 3.5rem);         /* 40-56px */
--text-5xl: clamp(3rem, 5vw, 4.5rem);           /* 48-72px */
--text-6xl: clamp(3.5rem, 6vw, 5.5rem);         /* 56-88px */

/* Font Weights */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

### Spacing Scale

```css
/* 8px base spacing scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */

/* Responsive Spacing */
--section-padding-y: clamp(3rem, 8vw, 6rem);
--section-padding-x: clamp(1rem, 4vw, 2rem);
--container-max-width: 1400px;
--container-padding: clamp(1rem, 4vw, 2rem);
--content-gap: clamp(1rem, 3vw, 2rem);
```

### Color Palette

```css
--color-primary: #546736;
--color-secondary: #7c4530;
--color-accent: #b8860b;
--color-text-primary: #1a1a1a;
--color-text-secondary: #4a5568;
--color-text-muted: #666666;
--color-background: #ffffff;
--color-background-alt: #f8f6f1;
```

## Usage Examples

### 1. Basic Typography Classes

```jsx
import React from 'react';

const MyComponent = () => (
  <div>
    <h1 className="hero-title">Main Hero Title</h1>
    <h2 className="section-title">Section Title</h2>
    <h3 className="card-title">Card Title</h3>
    <p className="body-large">Large body text</p>
    <p className="body-text">Regular body text</p>
    <p className="body-small">Small body text</p>
  </div>
);
```

### 2. Using Utility Functions

```jsx
import { cn, typography, layout } from '../utils/classNames';

const MyComponent = () => (
  <div className={cn(layout.section, layout.container)}>
    <h1 className={typography.heroTitle}>Hero Title</h1>
    <p className={typography.heroSubtitle}>Hero subtitle</p>
  </div>
);
```

### 3. Responsive Typography

```jsx
import { responsive } from '../utils/classNames';

const ResponsiveTitle = () => (
  <h1 className={responsive.text('text-2xl', 'text-4xl', 'text-5xl')}>
    This title scales responsively
  </h1>
);
```

### 4. Layout and Spacing

```jsx
import { layout, combinations } from '../utils/classNames';

const GridSection = () => (
  <section className={combinations.pageSection}>
    <div className={layout.gridCols3}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  </section>
);
```

## Semantic Typography Components

### Hero Typography
- `.hero-title` - Main hero titles
- `.hero-subtitle` - Hero subtitles  
- `.hero-tagline` - Small taglines above titles

### Section Typography
- `.section-title` - Main section titles
- `.section-subtitle` - Section subtitles

### Card Typography
- `.card-title` - Card titles
- `.card-subtitle` - Card subtitles
- `.card-description` - Card descriptions

### Body Text
- `.body-large` - Large body text
- `.body-text` - Regular body text
- `.body-small` - Small body text

## Spacing Utilities

### Margin Classes
```css
.m-{size}   /* All sides */
.mt-{size}  /* Top */
.mb-{size}  /* Bottom */
.ml-{size}  /* Left */
.mr-{size}  /* Right */
.mx-{size}  /* Horizontal */
.my-{size}  /* Vertical */
```

### Padding Classes
```css
.p-{size}   /* All sides */
.pt-{size}  /* Top */
.pb-{size}  /* Bottom */
.pl-{size}  /* Left */
.pr-{size}  /* Right */
.px-{size}  /* Horizontal */
.py-{size}  /* Vertical */
```

### Layout Classes
```css
.container          /* Standard container */
.section           /* Standard section padding */
.flex              /* Flexbox */
.grid              /* CSS Grid */
.grid-cols-{n}     /* Grid columns */
```

## Component Utilities

### Buttons
```css
.btn               /* Base button */
.btn-primary       /* Primary button */
.btn-secondary     /* Secondary button */
.btn-large         /* Large button */
.btn-small         /* Small button */
```

### Cards
```css
.card              /* Base card */
.card-body         /* Card content area */
```

## Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 768px)  { /* md: */ }
@media (min-width: 1024px) { /* lg: */ }
```

### Responsive Classes
```css
.md\:text-lg       /* Large text on medium screens and up */
.lg\:text-xl       /* Extra large text on large screens and up */
.md\:grid-cols-2   /* 2 columns on medium screens and up */
.lg\:grid-cols-3   /* 3 columns on large screens and up */
```

## Best Practices

### 1. Use Semantic HTML
```jsx
// Good
<h1 className="hero-title">Page Title</h1>
<h2 className="section-title">Section Title</h2>

// Avoid
<div className="hero-title">Page Title</div>
```

### 2. Combine Classes Properly
```jsx
import { cn } from '../utils/classNames';

// Good
const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);

// Avoid
const className = `base-class ${condition ? 'conditional-class' : ''} another-class`;
```

### 3. Use Design System Variables
```jsx
// Good - Uses design system
<div className="mb-8">Content</div>

// Avoid - Arbitrary values
<div style={{marginBottom: '35px'}}>Content</div>
```

### 4. Responsive Design
```jsx
// Good - Scales smoothly
<h1 className="hero-title">Title</h1>

// Avoid - Fixed sizes
<h1 style={{fontSize: '48px'}}>Title</h1>
```

## Accessibility Features

1. **Focus States**: All interactive elements have proper focus indicators
2. **Color Contrast**: All text meets WCAG AA standards
3. **Reduced Motion**: Respects user's motion preferences
4. **Screen Readers**: Proper semantic markup and sr-only classes

## Performance Optimizations

1. **CSS Custom Properties**: Efficient updates and theming
2. **Fluid Typography**: Reduces CSS bundle size with clamp functions
3. **Minimal Classes**: Only essential utilities included
4. **Critical CSS**: Design system loaded early

## Migration Guide

### From Inline Styles
```jsx
// Before
<h1 style={{fontSize: '48px', fontWeight: 'bold'}}>Title</h1>

// After
<h1 className="hero-title">Title</h1>
```

### From Custom CSS
```css
/* Before */
.my-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

/* After - Use existing classes */
<h2 className="section-title mb-8">Title</h2>
```

## Extending the System

### Adding New Components
1. Define component styles in the appropriate CSS file
2. Use existing design tokens
3. Add utility classes to `classNames.js`
4. Document the new component

### Adding New Tokens
1. Add CSS custom properties to `:root`
2. Create utility classes
3. Update documentation
4. Test across breakpoints

## Troubleshooting

### Common Issues
1. **Styles not applying**: Ensure design-system.css is imported
2. **Responsive not working**: Check if clamp() is supported
3. **Font not loading**: Verify font files are accessible
4. **Spacing inconsistent**: Use spacing scale instead of arbitrary values

### Debug Tips
1. Use browser dev tools to inspect CSS custom properties
2. Check if classes are being applied correctly
3. Verify import order in CSS files
4. Test across different screen sizes

## Support

For questions or issues with the design system:
1. Check this documentation first
2. Look at existing components for usage examples
3. Review the utility functions in classNames.js
4. Test with the provided responsive utilities