# Deployment Guide - Aakash Misal House

This guide provides step-by-step instructions for deploying the Aakash Misal House restaurant website to Vercel.

## Prerequisites

- GitHub repository: https://github.com/SandeshKhilari01/aakashmisalhouse
- Vercel account (sign up at https://vercel.com)
- SendGrid API key for email functionality

## Required Environment Variables

The following environment variables must be configured in your Vercel project settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `SENDGRID_API_KEY` | SendGrid API key for email sending | `SG.xxxxxxxxxxxxx` |
| `MAIL_FROM` | Sender email address | `tech.avinyaa@gmail.com` |
| `MAIL_TO` | Recipient email address for contact form | `sndsh.khilari@gmail.com` |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | (Optional) Tina CMS client ID | Leave empty if not using |
| `NEXT_PUBLIC_ORGANIZATION_NAME` | (Optional) Tina organization name | Leave empty if not using |
| `NEXT_PUBLIC_EDIT_BRANCH` | Git branch for CMS edits | `"master"` |
| `NEXT_PUBLIC_USE_LOCAL_CLIENT` | Use local CMS client | `""` (empty) |

## Deployment Steps

### 1. Push Code to GitHub

Ensure all your latest changes are pushed to GitHub:

```bash
cd /Users/sandeshsonabakhilari/Desktop/aakashmisalhouse
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub account and repository: `SandeshKhilari01/aakashmisalhouse`
4. Click "Import"

### 3. Configure Project Settings

Vercel should auto-detect Next.js. Verify the following settings:

- **Framework Preset**: Next.js
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

### 4. Add Environment Variables

In the Vercel project configuration:

1. Navigate to "Environment Variables" section
2. Add each variable from the table above
3. Set the appropriate values (use your actual SendGrid API key)
4. Select environment: **Production**, **Preview**, and **Development** (check all three)

**Important**: Do NOT commit `.env.local` to git. The `.gitignore` file already excludes it.

### 5. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll receive a production URL (e.g., `https://aakashmisalhouse.vercel.app`)

## Post-Deployment Verification

After deployment, verify the following:

### Automated Checks
- [ ] Site loads successfully at the Vercel URL
- [ ] All pages are accessible (Home, About, Menu, Gallery, Contact)
- [ ] No console errors in browser developer tools
- [ ] Images load correctly

### Manual Testing
- [ ] Test contact form submission
- [ ] Verify email is received at `MAIL_TO` address
- [ ] Check responsive design on mobile devices
- [ ] Test "Get Directions" and "Call Now" buttons
- [ ] Verify dark mode toggle works
- [ ] Test navigation between pages

## Custom Domain Setup (Optional)

To use a custom domain:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain (e.g., `aakashmisalhouse.com`)
4. Follow Vercel's instructions to configure DNS records
5. Wait for DNS propagation (can take 24-48 hours)

## Troubleshooting

### Build Fails

**Problem**: Build fails with module errors
**Solution**: 
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility (Next.js 12.1.0 requires Node 12.22.0+)
- Check build logs in Vercel dashboard for specific errors

### Environment Variables Not Working

**Problem**: Contact form not sending emails
**Solution**:
- Verify `SENDGRID_API_KEY` is correctly set in Vercel
- Check that the API key has permissions to send emails
- Verify `MAIL_FROM` is a verified sender in SendGrid

### Images Not Loading

**Problem**: Images return 404 errors
**Solution**:
- Ensure all images are in the `/public` directory
- Check that image paths in code don't include `/public` prefix
- Verify `next.config.js` image configuration

### TypeScript Errors

**Problem**: Build fails with TypeScript errors
**Solution**:
- Run `npm run lint` locally to identify errors
- Fix TypeScript issues before deployment
- Ensure `tsconfig.json` is properly configured

## Redeployment

Vercel automatically redeploys when you push to the `main` branch:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

Vercel will detect the push and trigger a new deployment automatically.

## Support

For issues specific to:
- **Vercel Platform**: https://vercel.com/support
- **Next.js Framework**: https://nextjs.org/docs
- **SendGrid Email**: https://docs.sendgrid.com

## Production URL

After deployment, your site will be available at:
- **Vercel URL**: `https://aakashmisalhouse.vercel.app` (or similar)
- **Custom Domain**: (if configured)

---

**Last Updated**: February 4, 2026
