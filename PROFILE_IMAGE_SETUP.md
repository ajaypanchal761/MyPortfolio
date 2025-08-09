# How to Add Your Profile Image

## Quick Steps:

1. **Copy your image** to the `src/assets/` folder
2. **Rename it** to `profile2.png` (replaces the current image)
   - OR use any name like `my-photo.jpg` and update the import below

## Update Import (if using different filename):

If you used a different filename (like `my-photo.jpg`), update this line in `src/components/About.jsx`:

```javascript
// Change this line:
import profileImage from '../assets/profile2.png';

// To your image filename:
import profileImage from '../assets/my-photo.jpg';
```

## Image Requirements:
- **Format**: PNG, JPG, JPEG
- **Size**: 500x500 pixels or larger
- **Style**: Professional headshot
- **Background**: Clean, professional

## After adding your image:
1. Save the file
2. The portfolio will automatically update
3. Your new profile image will appear in the About section

## Need Help?
If you're having trouble, just tell me:
- What filename you used for your image
- I'll update the import for you automatically
