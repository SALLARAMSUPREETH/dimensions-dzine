# LazyImage Component

A reusable higher-order component that wraps images with beautiful loading states and error handling.

## Features

- ✨ **Beautiful Loading Animation**: Skeleton shimmer effect while loading
- 🔄 **Smooth Transitions**: Fade-in animation when image loads
- ❌ **Error Handling**: Graceful fallback for failed image loads
- 📱 **Responsive**: Works on all screen sizes
- ♿ **Accessible**: Supports reduced motion preferences
- 🌙 **Dark Mode**: Automatic dark mode support
- ⚡ **Performance**: Lazy loading by default

## Usage

### Basic Usage
```jsx
import LazyImage from './components/LazyImage';

<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description of image" 
/>
```

### With Custom Styling
```jsx
<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description of image"
  className="my-custom-class"
  style={{ borderRadius: '8px' }}
/>
```

### With Click Handler
```jsx
<LazyImage 
  src="/path/to/image.jpg" 
  alt="Description of image"
  onClick={() => console.log('Image clicked!')}
/>
```

### All Props
```jsx
<LazyImage 
  src="/path/to/image.jpg"           // Required: Image source
  alt="Description"                  // Required: Alt text
  className="custom-class"           // Optional: CSS class
  style={{ width: '100%' }}         // Optional: Inline styles
  onClick={handleClick}              // Optional: Click handler
  title="Tooltip text"               // Optional: Tooltip
  loading="lazy"                     // Optional: Loading strategy
  {...otherProps}                    // Any other props passed to container
/>
```

## Styling

The component uses these CSS classes:
- `.lazy-image-container` - Main container
- `.lazy-image-placeholder` - Loading state
- `.lazy-image-skeleton` - Skeleton animation
- `.lazy-image-loader` - Spinner and text
- `.lazy-image-error` - Error state
- `.lazy-image` - Actual image when loaded

## States

1. **Loading**: Shows skeleton shimmer + spinner
2. **Loaded**: Shows actual image with fade-in
3. **Error**: Shows error icon and message

## Accessibility

- Respects `prefers-reduced-motion`
- Proper alt text support
- High contrast mode support
- Keyboard navigation friendly