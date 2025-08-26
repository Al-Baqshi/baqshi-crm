# Vercel Deployment Guide for BaQshi

## 🚀 Quick Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Build Settings**:
   Vercel should auto-detect your Astro project, but verify these settings:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**: Click "Deploy" and your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

## 🔧 Configuration Files

### ✅ vercel.json
Your project includes a `vercel.json` configuration with:
- Optimal build settings
- Security headers
- API function configuration
- Admin redirect (/admin → /keystatic)

### ✅ Site Configuration
Update `site.config.ts` with your actual Vercel domain once deployed:
```typescript
export const siteUrl = "https://your-actual-domain.vercel.app";
```

## 🌟 Features Working on Vercel

### ✅ Static Site Features
- **Animations**: All GSAP animations working
- **Navigation**: Mobile sidebar fully functional
- **PWA**: Service worker and offline capability
- **SEO**: Optimized meta tags and sitemap
- **Performance**: Optimized assets and caching

### ✅ API Routes
- **Contact Form**: `/api/contact-lead` endpoint working
- **RSS Feed**: `/rss.xml` generation
- **Dynamic Images**: OG image generation

### ✅ CMS Access
- **Keystatic CMS**: Available at `/keystatic`
- **Content Management**: Full editing capabilities
- **Admin Redirect**: `/admin` redirects to `/keystatic`

## 🎯 Environment Variables (if needed)

If your contact form or other features need environment variables:

1. **In Vercel Dashboard**:
   - Go to Project Settings
   - Navigate to Environment Variables
   - Add required variables

2. **Example Variables**:
   ```
   CONTACT_EMAIL=your-email@domain.com
   SITE_URL=https://your-domain.vercel.app
   ```

## 🔍 Testing Your Deployment

After deployment, test these features:

### ✅ Navigation
- [ ] Mobile hamburger menu works
- [ ] Side navigation opens/closes smoothly
- [ ] "Log In" button goes to `kiwipbc.com/crm`

### ✅ Animations
- [ ] Page transitions work
- [ ] Scroll animations trigger
- [ ] WhatsApp widget appears with animation

### ✅ Forms & API
- [ ] Contact form submits successfully
- [ ] API endpoints respond correctly

### ✅ CMS
- [ ] `/keystatic` loads the CMS interface
- [ ] Content editing works properly

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check Node.js version (use Node 18+)
   - Clear Vercel cache in project settings

2. **Animations Don't Work**:
   - Verify static-fixes.js is loading
   - Check browser console for errors

3. **API Routes Not Working**:
   - Ensure functions are in `src/pages/api/`
   - Check Vercel function logs

4. **CMS Access Issues**:
   - Verify `/keystatic` route is accessible
   - Check for build errors in Keystatic components

## 📈 Performance Optimization

Your site is already optimized with:
- **Image Optimization**: WebP conversion and responsive images
- **Asset Bundling**: Optimized CSS and JS
- **Caching**: Proper headers for static assets
- **PWA**: Service worker for offline access

## 🎉 Post-Deployment

After successful deployment:

1. **Update Domain**: Change `siteUrl` in `site.config.ts` to your actual domain
2. **Custom Domain**: Add your custom domain in Vercel settings if needed
3. **Analytics**: Consider adding Vercel Analytics
4. **Monitoring**: Set up error tracking if needed

Your BaQshi site should now be live on Vercel with all features working perfectly! 🚀
