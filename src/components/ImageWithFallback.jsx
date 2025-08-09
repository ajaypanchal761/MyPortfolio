import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = null,
  loadingComponent = null,
  errorComponent = null,
  priority = false,
  lazy = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Memoize the image source to prevent unnecessary re-renders
  const memoizedSrc = useMemo(() => src, [src]);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setCurrentSrc(memoizedSrc);
  }, [memoizedSrc]);

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

  // Default loading component with better mobile optimization
  const defaultLoadingComponent = (
    <div className="flex items-center justify-center bg-gray-800 rounded-lg animate-pulse">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
    </div>
  );

  // Default error component
  const defaultErrorComponent = (
    <div className="flex items-center justify-center bg-gray-800 rounded-lg text-white text-center">
      <div className="text-xl mb-1">🖼️</div>
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
        loading={lazy && !priority ? "lazy" : "eager"}
        decoding="async"
        style={{
          // Prevent layout shift
          aspectRatio: 'auto',
          // Optimize for mobile
          imageRendering: 'auto',
          // Enable hardware acceleration
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
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

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallbackSrc: PropTypes.string,
  loadingComponent: PropTypes.node,
  errorComponent: PropTypes.node,
  priority: PropTypes.bool,
  lazy: PropTypes.bool
};

export default ImageWithFallback;
