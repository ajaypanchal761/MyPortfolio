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
