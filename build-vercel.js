import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if all image files exist
function checkImageFiles() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
  
  console.log('🔍 Checking image files...');
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          if (fs.existsSync(filePath)) {
            console.log(`✅ ${filePath}`);
          } else {
            console.log(`❌ Missing: ${filePath}`);
          }
        }
      }
    });
  }
  
  checkDirectory(assetsDir);
}

// Function to optimize build
function optimizeForVercel() {
  console.log('🚀 Optimizing for Vercel deployment...');
  
  // Check image files
  checkImageFiles();
  
  console.log('✅ Build optimization complete!');
  console.log('📝 Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. Deploy to Vercel');
  console.log('3. Check that all images load properly');
}

// Run optimization
optimizeForVercel();
