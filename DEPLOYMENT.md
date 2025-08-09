# Deployment Guide

## Render Deployment

### Prerequisites
- GitHub repository with your portfolio code
- Render account

### Steps for Render Deployment

1. **Connect to GitHub**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Static Site"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables** (if using EmailJS):
     - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID
     - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key

3. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site

### Alternative: Netlify Deployment

1. **Connect to GitHub**
   - Go to [Netlify](https://netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

3. **Deploy**
   - Click "Deploy site"

### Environment Variables Setup

If you're using EmailJS for the contact form, set these environment variables in your deployment platform:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Troubleshooting

1. **Build Fails**: Make sure all import paths are correct
2. **Images Not Loading**: Check that all asset paths are relative to the components directory
3. **Contact Form Not Working**: Verify EmailJS environment variables are set correctly

### Local Testing

Before deploying, test locally:
```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview your production build.
