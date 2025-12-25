# Luxury Art Gallery Website Template

A beautiful, black & white Art Deco website template perfect for artists, galleries, portfolios, and luxury brands.

## 🚀 Quick Start

### 1. Use as Template

**Option A: Clone from GitHub**
```bash
git clone git@github.com:hopelessentertainer/WCHwebsite.git my-new-site
cd my-new-site
npm install
```

**Option B: Copy the directory**
```bash
cp -r WCHsite my-new-site
cd my-new-site
npm install
```

### 2. Quick Customization

Run the interactive customization script:
```bash
npm run customize
```

Or manually customize following the guide in `TEMPLATE_GUIDE.md`

### 3. Start Development

```bash
npm run dev
```

Visit http://localhost:3000

---

## 📋 What's Included

- ✅ **Complete Next.js 14 App** with TypeScript
- ✅ **Luxury Black & White Design** - Art Deco aesthetic
- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **E-commerce Ready** - Shopping cart & checkout
- ✅ **Image Management** - Organized directory structure
- ✅ **Animation System** - Framer Motion animations
- ✅ **Docker Support** - Containerized development
- ✅ **SEO Optimized** - Proper metadata & structure

---

## 🎨 Pages Included

- **Homepage** - Hero section with featured works
- **Gallery** - Grid layout with filtering
- **Artwork Detail** - Individual artwork/product pages
- **Collections** - Curated collection pages
- **About** - Artist/brand biography
- **Contact** - Contact form
- **Cart** - Shopping cart
- **Checkout** - Complete checkout flow

---

## 🛠️ Customization

### Essential Changes (5 minutes)

1. **Brand Name** - Replace "Wesley Charles Holleman" throughout
2. **Logo/Initials** - Update "WCH" to your initials
3. **Tagline** - Change "Fine Art Gallery" to your tagline
4. **Contact Info** - Update email and location

### Content Updates (15 minutes)

1. **Homepage Text** - Update hero description
2. **About Page** - Write your biography
3. **Artwork Data** - Add your products/artwork
4. **Images** - Add images to `public/images/`

### Design Customization (Optional)

- Colors in `tailwind.config.ts`
- Typography in `src/app/globals.css`
- Component styling in individual files

---

## 📁 Project Structure

```
WCHsite/
├── src/
│   ├── app/              # Next.js pages (App Router)
│   ├── components/        # React components
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── gallery/      # Gallery components
│   │   ├── ui/           # Reusable UI components
│   │   └── animations/   # Animation wrappers
│   └── lib/              # Utilities & helpers
├── public/
│   └── images/           # All images
│       ├── artwork/      # Individual artwork images
│       ├── collections/  # Collection covers
│       ├── artist/       # Artist photos
│       └── featured/     # Homepage featured images
└── Configuration files
```

---

## 🎯 Use Cases

Perfect for:
- **Artists** - Portfolio and gallery sites
- **Galleries** - Art gallery websites
- **Photographers** - Portfolio showcases
- **Luxury Brands** - High-end product sites
- **Portfolios** - Creative professional sites
- **E-commerce** - Product catalog sites

---

## 📚 Documentation

- `TEMPLATE_GUIDE.md` - Detailed customization guide
- `DEPLOY.md` - Deployment instructions
- `IMAGE_SETUP.md` - Image management guide
- `README.md` - Project overview

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

---

## 📝 License

Free to use and customize for your projects!

---

## 🚀 Deploy

**Recommended: Vercel**
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at vercel.com for auto-deployments.

---

## 💡 Tips

1. **Start with branding** - Update name, logo, tagline first
2. **Add your images** - Use the organized image directories
3. **Customize content** - Update text to match your brand voice
4. **Test locally** - Use `npm run dev` to preview changes
5. **Deploy early** - Get it live and iterate

---

## 🆘 Need Help?

1. Check `TEMPLATE_GUIDE.md` for detailed instructions
2. Review existing code - it's well-commented
3. Follow Next.js documentation for framework questions

Happy building! 🎨

