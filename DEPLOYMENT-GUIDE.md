# Deployment Guide for Hostinger

## Overview
This guide helps you deploy your Astro site to Hostinger with full animations and interactive features working correctly.

## Build and Deploy Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Upload Files to Hostinger
Upload the entire contents of the `dist/` folder to your Hostinger public_html directory.

### 3. Required Files Structure
Make sure these files are present in your hosting root:
```
public_html/
├── index.html
├── static-fixes.js
├── manifest.webmanifest
├── sw.js
├── _astro/
│   ├── *.css files
│   └── *.js files
├── assets/
│   └── images and other assets
└── other pages and assets
```

## Static Hosting Optimizations Applied

### ✅ Animation Fixes
- **GSAP Loading**: Enhanced script loading with fallbacks
- **Alpine.js**: Improved initialization for static hosting
- **Custom Events**: Added `static-site-ready` and `gsap-ready` events

### ✅ Build Optimizations
- **Static Output**: Configured for `output: "static"`
- **Asset Management**: Optimized CSS and JS bundling
- **PWA Configuration**: Simplified for static hosting compatibility

### ✅ Script Loading
- **Multiple Initialization**: Scripts initialize on multiple events
- **Error Handling**: Graceful fallbacks if libraries don't load
- **Static Fixes**: Custom script (`static-fixes.js`) ensures proper loading

## Troubleshooting

### If Animations Don't Work
1. Check browser console for errors
2. Verify `static-fixes.js` is loading
3. Ensure GSAP and Alpine.js CDNs are accessible

### If Sidebar Navigation Doesn't Work
1. Verify Alpine.js is loading properly
2. Check for JavaScript errors in browser console
3. Ensure the navigation component scripts are initialized

### Performance Tips
- Enable gzip compression on your Hostinger hosting
- Set proper cache headers for static assets
- Consider using Hostinger's CDN if available

## Files Modified for Static Hosting
- `astro.config.ts` - Build optimizations
- `src/components/headers/Navigation.astro` - Enhanced script loading
- `src/components/primitives/Widget.astro` - Improved initialization
- `src/components/Head.astro` - Added static fixes script
- `public/static-fixes.js` - Custom script for static hosting

## Expected Site Features
✅ Animations and transitions
✅ Mobile navigation sidebar
✅ WhatsApp widget with animations
✅ Scroll-triggered animations
✅ PWA functionality
✅ SEO optimization
✅ Performance optimization

Your site should now work perfectly on Hostinger with all animations and interactive features functioning correctly!
