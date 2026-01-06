# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Prerequisites

1. Ensure all dependencies are installed: `npm install`
2. Build the project locally to test: `npm run build`
3. Preview the build: `npm run preview`

## Vercel Deployment

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

### Option 2: CLI Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `npm run deploy:vercel`
3. Follow the prompts
4. Your site will be live at `https://[project-name].vercel.app`

### Custom Domain

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Update DNS records as instructed

## Netlify Deployment

### Option 1: Drag & Drop

1. Build your project: `npm run build`
2. Visit [app.netlify.com](https://app.netlify.com)
3. Drag the `dist` folder to the deployment area

### Option 2: GitHub Integration

1. Push code to GitHub
2. In Netlify, click "New site from Git"
3. Connect to GitHub and select repository
4. Build settings are auto-configured via `netlify.toml`
5. Click "Deploy site"

### Option 3: CLI Deployment

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify init`
3. Follow the prompts
4. Deploy: `npm run deploy:netlify`

## Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_ANALYTICS_ID=your-analytics-id
```

2. Add to hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

## Performance Monitoring

Both platforms offer analytics:

- **Vercel**: Built-in analytics dashboard
- **Netlify**: Analytics plugin available

## Continuous Deployment

Both platforms support automatic deployments:

1. Connect your GitHub repository
2. Set production branch (usually `main`)
3. Every push triggers a new deployment
4. Preview deployments for pull requests

## Build Optimization

Check build size and performance:

```bash
# Analyze bundle size
npm run analyze

# Check lighthouse scores
npx lighthouse https://your-site.com --view
```

## Troubleshooting

### Build Failures

1. Check Node version matches local: `node --version`
2. Clear cache and rebuild:
   - Vercel: Redeploy with "Clear cache"
   - Netlify: Clear cache in deploy settings

### 404 on Routes

Ensure SPA redirects are configured:
- Vercel: Check `vercel.json`
- Netlify: Check `netlify.toml`

### Slow Performance

1. Enable caching headers (already configured)
2. Check image sizes and formats
3. Verify lazy loading is working

## SSL/HTTPS

Both platforms provide free SSL certificates automatically.

## Monitoring

Set up monitoring for:
- Uptime: Use services like UptimeRobot
- Performance: Built-in analytics
- Errors: Add error tracking (e.g., Sentry)

## Backup Deployments

Always keep:
1. GitHub repository as source of truth
2. Local backups of important assets
3. Documentation of custom configurations

---

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# GitHub Pages (alternative)
npm run build && npx gh-pages -d dist
```

Remember to update your resume and social profiles with your new portfolio URL! 🚀
