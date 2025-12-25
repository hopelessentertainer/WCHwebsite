# How to Share Your Website

## Option 1: Deploy to Vercel (Recommended - Free & Permanent)

Vercel is the easiest way to deploy Next.js apps and provides a permanent URL.

### Quick Deploy Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from your project directory**:
   ```bash
   cd "/Users/jesusrose/Documents/Cursor/Wesley Charles Holeman/wesley-holeman-gallery/WCHsite"
   vercel
   ```

3. **Follow the prompts:**
   - Login to Vercel (or create account)
   - Link to your GitHub repo (optional but recommended)
   - Deploy!

4. **You'll get a URL like:** `https://wch-gallery.vercel.app`

5. **For automatic deployments**, connect your GitHub repo:
   - Go to vercel.com
   - Import your GitHub repository: `hopelessentertainer/WCHwebsite`
   - Vercel will auto-deploy on every push!

### Benefits:
- ✅ Free hosting
- ✅ Permanent URL you can share
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Auto-deploys from GitHub

---

## Option 2: Quick Tunnel (Temporary - For Immediate Sharing)

### Using localtunnel (No signup required):

```bash
cd "/Users/jesusrose/Documents/Cursor/Wesley Charles Holeman/wesley-holeman-gallery/WCHsite"

# Make sure your dev server is running first
npm run dev

# In another terminal, run:
npx localtunnel --port 3000
```

This will give you a URL like: `https://random-name.loca.lt`

**Note:** This is temporary and the URL changes each time.

### Using ngrok (More stable, requires signup):

1. Sign up at https://ngrok.com (free)
2. Install: `brew install ngrok` (macOS) or download from ngrok.com
3. Run: `ngrok http 3000`
4. Share the HTTPS URL it provides

---

## Option 3: Deploy to Netlify (Alternative)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd "/Users/jesusrose/Documents/Cursor/Wesley Charles Holeman/wesley-holeman-gallery/WCHsite"
   netlify deploy
   ```

3. **For production**:
   ```bash
   netlify deploy --prod
   ```

---

## Recommended: Vercel Deployment

Since your code is already on GitHub, the easiest is to:

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import repository: `hopelessentertainer/WCHwebsite`
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Get your live URL in ~2 minutes!

**Your site will be live at:** `https://wchwebsite.vercel.app` (or similar)

Every time you push to GitHub, Vercel will automatically redeploy!

---

## Quick Command Reference

```bash
# Deploy to Vercel (one-time)
vercel

# Deploy to Vercel (production)
vercel --prod

# Quick tunnel (temporary)
npx localtunnel --port 3000

# Deploy to Netlify
netlify deploy --prod
```

