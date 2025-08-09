// Utility function to handle image imports with error handling
export const getImageUrl = (imagePath) => {
  try {
    // For development, use the imported image
    if (import.meta.env.DEV) {
      return imagePath;
    }
    
    // For production, ensure the path is correct
    return imagePath;
  } catch (error) {
    console.error('Error loading image:', error);
    // Return a fallback image or placeholder
    return '/placeholder-image.png';
  }
};

// Function to preload images with better mobile optimization
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error('No image source provided'));
      return;
    }

    const img = new Image();
    
    // Set crossOrigin for better caching
    img.crossOrigin = 'anonymous';
    
    // Optimize for mobile
    img.decoding = 'async';
    
    img.onload = () => {
      // Store in browser cache
      if ('caches' in window) {
        caches.open('image-cache').then(cache => {
          cache.put(src, new Response(img.src));
        }).catch(() => {
          // Cache storage failed, but image loaded successfully
        });
      }
      resolve(img);
    };
    
    img.onerror = (error) => {
      console.warn('Failed to preload image:', src, error);
      reject(error);
    };
    
    // Set source after setting up event handlers
    img.src = src;
  });
};

// Function to handle multiple image preloading with mobile optimization
export const preloadImages = async (imagePaths) => {
  try {
    // Filter out invalid paths
    const validPaths = imagePaths.filter(path => path && typeof path === 'string');
    
    if (validPaths.length === 0) {
      console.log('No valid images to preload');
      return;
    }

    // Preload images in batches to avoid overwhelming mobile devices
    const batchSize = 3; // Smaller batch size for mobile
    const batches = [];
    
    for (let i = 0; i < validPaths.length; i += batchSize) {
      batches.push(validPaths.slice(i, i + batchSize));
    }

    let loadedCount = 0;
    
    for (const batch of batches) {
      try {
        await Promise.allSettled(batch.map(preloadImage));
        loadedCount += batch.length;
        console.log(`Preloaded batch: ${loadedCount}/${validPaths.length} images`);
        
        // Small delay between batches for mobile optimization
        if (batches.length > 1) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      } catch (error) {
        console.warn('Batch preload failed:', error);
      }
    }
    
    console.log(`Image preloading completed: ${loadedCount}/${validPaths.length} images loaded`);
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};

// Function to check if image is cached
export const isImageCached = async (src) => {
  try {
    if ('caches' in window) {
      const cache = await caches.open('image-cache');
      const response = await cache.match(src);
      return !!response;
    }
    return false;
  } catch (error) {
    return false;
  }
};

// Function to clear image cache
export const clearImageCache = async () => {
  try {
    if ('caches' in window) {
      await caches.delete('image-cache');
      console.log('Image cache cleared');
    }
  } catch (error) {
    console.error('Error clearing image cache:', error);
  }
};

// Function to optimize image loading for mobile
export const optimizeImageForMobile = (src, options = {}) => {
  const { width = 300, quality = 0.8 } = options;
  
  // For mobile, we might want to use smaller images
  // This is a placeholder for actual image optimization logic
  return {
    src,
    width,
    quality,
    loading: 'lazy',
    decoding: 'async'
  };
};
