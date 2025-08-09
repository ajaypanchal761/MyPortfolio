import { useState, useEffect } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = null,
  loadingComponent = null,
  errorComponent = null 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  // Default loading component
  const defaultLoadingComponent = (
    <div className="flex items-center justify-center bg-gray-800 rounded-lg">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
    </div>
  );

  // Default error component
  const defaultErrorComponent = (
    <div className="flex items-center justify-center bg-gray-800 rounded-lg text-white text-center">
      <div className="text-2xl mb-1">🖼️</div>
      <div className="text-xs">Image not available</div>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0">
          {loadingComponent || defaultLoadingComponent}
        </div>
      )}
      
      {imageError && (
        <div className="absolute inset-0">
          {errorComponent || defaultErrorComponent}
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
