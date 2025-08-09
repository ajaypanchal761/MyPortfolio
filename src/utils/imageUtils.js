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

// Function to preload images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Function to handle multiple image preloading
export const preloadImages = async (imagePaths) => {
  try {
    await Promise.all(imagePaths.map(preloadImage));
    console.log('All images preloaded successfully');
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};
