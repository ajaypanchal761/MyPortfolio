import { useState, useEffect } from 'react';

// Utility function to detect mobile devices
export const isMobileDevice = () => {
  // Check for mobile user agent
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  // Mobile device detection patterns
  const mobilePatterns = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];
  
  // Check if any mobile pattern matches
  const isMobile = mobilePatterns.some(pattern => pattern.test(userAgent));
  
  // Additional check for screen width (backup method)
  const isSmallScreen = window.innerWidth <= 768;
  
  return isMobile || isSmallScreen;
};

// Hook to get mobile state with window resize listener
export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice());
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};



