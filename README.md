# MinT Presentation Project 

> **Deploy Like a Pro: Final Touch & Launch**
>
> 📅 December 10, 2025 • 🕓 4:20 - 6:00 PM WAT • 🌍 Online

## Project Structure

```
03-presentation-project/
├── index.html    # Beautiful workshop landing page
├── styles.css    # Premium rose gold theme
├── script.js     # Smooth animations & interactions
└── README.md     # Complete deployment guide
```

---

## Running Locally


Using VS Code Live Server:

```
1. Open this folder in VS Code
2. Install "Live Server" extension
3. Right-click index.html → "Open with Live Server"
4. Preview at http://127.0.0.1:5500
```

---

## Complete Deployment Guide

### Phase 1: Prepare Your Code

 Make sure all files are saved:

- `index.html`
- `styles.css`
- `script.js`

 Test locally to ensure everything works

---

### Phase 2: GitHub Pages Deployment

#### Step 1: Create Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `mint-workshop-deploy`
3. Set to **Public**
4. Click **Create repository**

#### Step 2: Initialize & Push

```bash
# 1. Initialize Git
git init

# 2. Stage all files
git add .

# 3. Create commit
git commit -m " Deploy like a pro - Workshop project"

# 4. Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/mint-workshop-deploy.git

# 5. Push to main branch
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings** tab
3. Click **Pages** in sidebar
4. **Source**: Select `main` branch
5. **Folder**: Select `/ (root)`
6. Click **Save**
7. Wait 2-3 minutes ⏳

#### Step 4: Access Your Site! 

```
https://YOUR-USERNAME.github.io/mint-workshop-deploy/
```

---

### Phase 3: Vercel Deployment

#### Option A: Import from GitHub (Recommended!)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import `mint-workshop-deploy`
5. Click **Deploy**
6. Your site is LIVE! 

**Your Vercel URL:**

```
https://mint-workshop-deploy.vercel.app
```

#### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd filename
vercel

# Follow prompts - accept defaults
# Site deployed! 
```


---

## Quick Commands Reference

### Git Essentials

```bash
git status              # Check what's changed
git add .               # Stage all changes
git commit -m "message" # Create commit
git push                # Upload to GitHub
git log --oneline -5    # View recent commits
```

### Initialize New Project

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USER/REPO.git
git branch -M main
git push -u origin main
```

### Update Existing Deployment

```bash
# Make your changes, then:
git add .
git commit -m "✨ Updated feature"
git push

# Both GitHub Pages & Vercel auto-update!
```

## Common Issues

### "Permission denied" when pushing

```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/USER/REPO.git
```

### "Everything up-to-date" but site doesn't update

Make sure you've actually committed your changes:

```bash
git status  # Check for uncommitted changes
git add .
git commit -m "Update"
git push
```

### GitHub Pages shows old version

- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Wait a few more minutes
- Check repository Settings → Pages

### Vercel build fails

- For static HTML sites, this shouldn't happen!
- Check that `index.html` exists in root
- All file names are lowercase

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [TinyPNG](https://tinypng.com)
- [Meta Tags Preview](https://metatags.io)
- [PageSpeed Insights](https://pagespeed.web.dev)

## Custom Domain Resources

- [Vercel Custom Domains Guide](https://vercel.com/docs/concepts/projects/domains)
- [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Where to Buy Domains

- [Namecheap](https://www.namecheap.com)
- [Porkbun](https://porkbun.com)
- [Google Domains](https://domains.google)# mint-deploy-v1
