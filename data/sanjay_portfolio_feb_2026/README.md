# Sanjay Naik - Professional Portfolio (Feb 2026)

A modern, high-performance portfolio website built with Next.js 14+, Tailwind CSS, and optimized for Cloudflare Pages deployment.

## 🚀 Features

- ⚡ **Next.js 14+** with App Router for optimal performance
- 🎨 **Tailwind CSS** for modern, responsive design
- 🌓 **Theme System** with Light, Dark, and System-default modes
- 📱 **Fully Responsive** across all devices
- ✨ **Smooth Animations** and interactive elements
- 🎯 **Bento Grid Layout** for projects showcase
- 📊 **Vertical Timeline** for work experience
- 🔍 **SEO Optimized** with meta tags and Open Graph
- ☁️ **Cloudflare Pages Ready** for instant deployment

## 🛠️ Tech Stack

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Cloudflare Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run build
```

## 🌐 Deployment to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Navigate to **Pages** > **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 18 or higher
6. Click **Save and Deploy**

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy out
```

## 📁 Project Structure

```
sanjay_portfolio_feb_2026/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx             # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── data.ts             # Portfolio content
├── public/                 # Static assets
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
└── wrangler.toml           # Cloudflare config
```

## 🎨 Customization

### Update Content

Edit `lib/data.ts` to update:
- Bio information
- Skills
- Work experience
- Projects
- Education
- Certifications

### Theme Colors

Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#854CE6',
    dark: '#7141c4',
    light: '#9d6ef0',
  },
  // ... more colors
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Sanjay Naik**
- LinkedIn: [sanjaynaikdev](https://www.linkedin.com/in/sanjaynaikdev/)
- GitHub: [@snaik4398](https://github.com/snaik4398)
- Website: [sanjaydev.online](https://www.sanjaydev.online/)
- Email: sanjaynaik.work@gmail.com

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and user experience.

---

Made with ❤️ using Next.js & Tailwind CSS
