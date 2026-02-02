# Deployment Guide - Sanjay Portfolio Feb 2026

## 🚀 Quick Start - Cloudflare Pages Deployment

### Prerequisites
- GitHub account
- Cloudflare account (free tier works!)
- Git installed locally

### Step 1: Push to GitHub

```bash
cd C:\personal_projects\data\sanjay_portfolio_feb_2026

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional portfolio Feb 2026"

# Create repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/sanjay-portfolio-feb-2026.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Cloudflare Pages

#### Option A: Dashboard (Recommended for first-time)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** → **Create**
3. Select **Pages** → **Connect to Git**
4. Authorize GitHub and select your repository
5. Configure build settings:
   - **Project name**: `sanjay-portfolio-feb-2026`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variables**: None required
6. Click **Save and Deploy**
7. Wait 2-3 minutes for deployment
8. Your site will be live at: `https://sanjay-portfolio-feb-2026.pages.dev`

#### Option B: Wrangler CLI (For advanced users)

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy
wrangler pages deploy out --project-name=sanjay-portfolio-feb-2026
```

### Step 3: Custom Domain (Optional)

1. In Cloudflare Pages dashboard, click your project
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Add your domain (e.g., `www.sanjaydev.online`)
5. Cloudflare will automatically configure DNS

## 📝 Environment Configuration

No environment variables needed! The portfolio is fully static and client-side.

## 🔄 Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback available from Cloudflare dashboard

## 🛠️ Local Development

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Preview production build locally
npx serve out
```

## 📊 Performance Optimizations

The portfolio is optimized for Cloudflare's edge network:
- ✅ Static HTML export (no Node.js runtime needed)
- ✅ Optimized images
- ✅ Minimal JavaScript bundle
- ✅ CSS properly tree-shaken
- ✅ CDN caching at edge
- ✅ Expected Lighthouse score: 95+

## 🐛 Troubleshooting

### Build fails with "Module not found"
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Images not loading
- Ensure images are in `public/` directory
- Use `/image.png` paths (with leading slash)

### Theme not working
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

## 🎉 Success!

Your portfolio should now be live at:
- **Cloudflare URL**: `https://YOUR-PROJECT.pages.dev`
- **Custom domain** (if configured): `https://www.sanjaydev.online`

---

Made with ❤️ using Next.js, Tailwind CSS, and Cloudflare Pages

