import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { preloadImages } from './utils/imageUtils'

// Register service worker for better caching
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.warn('Service Worker registration failed:', error);
    }
  }
};

// Preload critical images to prevent reloading issues
const preloadCriticalImages = async () => {
  try {
    // Import all images from constants to ensure they're bundled
    const imageImports = await import('./constants.js');
    
    // Extract image paths from the constants
    const imagePaths = [];
    
    // Add skills images
    imageImports.SkillsInfo.forEach(category => {
      category.skills.forEach(skill => {
        if (skill.logo) imagePaths.push(skill.logo);
      });
    });
    
    // Add experience images
    imageImports.experiences.forEach(exp => {
      if (exp.img) imagePaths.push(exp.img);
    });
    
    // Add education images
    imageImports.education.forEach(edu => {
      if (edu.img) imagePaths.push(edu.img);
    });
    
    // Add project images
    imageImports.projects.forEach(project => {
      if (project.image) imagePaths.push(project.image);
    });
    
    // Add certification images
    imageImports.certifications.forEach(cert => {
      if (cert.imageUrl) imagePaths.push(cert.imageUrl);
      if (cert.multipleCertificates) {
        cert.multipleCertificates.forEach(multiCert => {
          if (multiCert.imageUrl) imagePaths.push(multiCert.imageUrl);
        });
      }
    });
    
    // Preload all images
    await preloadImages(imagePaths);
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Image preloading failed:', error);
  }
};

// Initialize app optimizations
const initializeApp = async () => {
  // Register service worker first
  await registerServiceWorker();
  
  // Then preload images
  await preloadCriticalImages();
};

// Start initialization
initializeApp();

createRoot(document.getElementById('root')).render(
  <App />
)
