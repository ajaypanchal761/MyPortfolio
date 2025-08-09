import { useState, useEffect } from 'react';

// Image utility functions for better handling of problematic images

// List of known problematic images that might need special handling
export const PROBLEMATIC_IMAGES = {
  'pandas': 'pandas.png',
  'numpy': 'numpy.png', 
  'matplotlib': 'matplotlib.png',
  'wordpress': 'wordpress.png',
  'api': 'Apilogo.png'
};

// Fallback text for when images fail to load
export const getFallbackText = (imageName) => {
  const fallbacks = {
    'pandas': '📊',
    'numpy': '🔢',
    'matplotlib': '📈',
    'wordpress': '📝',
    'api': '🔗',
    'rest': '🔗'
  };
  
  const key = imageName.toLowerCase();
  return fallbacks[key] || '🖼️';
};

// Check if an image URL is likely to be problematic
export const isProblematicImage = (src) => {
  if (!src) return true;
  
  // Check if it's a base64 data URL (might indicate inlined small image)
  if (src.startsWith('data:')) return true;
  
  // Check if it's one of our known problematic PNG images
  const fileName = src.split('/').pop().toLowerCase();
  return Object.values(PROBLEMATIC_IMAGES).some(problematic => 
    fileName.includes(problematic.toLowerCase()) && fileName.endsWith('.png')
  );
};

// Generate a fallback component for problematic images
export const createFallbackComponent = (alt, className = "") => (
  <div className={`flex items-center justify-center bg-gray-800 rounded-lg text-white text-center ${className}`}>
    <div className="text-2xl mb-1">{getFallbackText(alt)}</div>
    <div className="text-xs">{alt || 'Image not available'}</div>
  </div>
);

// Mobile-optimized image loading hook
export const useImageLoader = (src, options = {}) => {
  const { priority = false, fallbackSrc = null } = options;
  
  const [state, setState] = useState({
    loading: true,
    error: false,
    loaded: false,
    src: src
  });

  useEffect(() => {
    if (!src) {
      setState({ loading: false, error: true, loaded: false, src: null });
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: false }));

    const img = new Image();
    
    // Optimize for mobile
    img.decoding = 'async';
    img.loading = priority ? 'eager' : 'lazy';
    
    img.onload = () => {
      setState({
        loading: false,
        error: false,
        loaded: true,
        src: src
      });
    };

    img.onerror = () => {
      if (fallbackSrc && src !== fallbackSrc) {
        // Try fallback
        img.src = fallbackSrc;
      } else {
        setState({
          loading: false,
          error: true,
          loaded: false,
          src: src
        });
      }
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc, priority]);

  return state;
};

// Optimize image dimensions for mobile
export const getOptimizedImageDimensions = (originalWidth, originalHeight, maxWidth = 300) => {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight };
  }
  
  const ratio = originalHeight / originalWidth;
  const newWidth = maxWidth;
  const newHeight = Math.round(maxWidth * ratio);
  
  return { width: newWidth, height: newHeight };
};

// Create responsive image srcset for mobile optimization
export const createResponsiveSrcSet = (src, sizes = [300, 600, 900]) => {
  // This is a placeholder - in a real implementation, you'd generate different sized images
  return sizes.map(size => `${src} ${size}w`).join(', ');
};
