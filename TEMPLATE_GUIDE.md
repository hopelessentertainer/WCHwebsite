# Using This Site as a Template

This is a luxury black & white Art Deco website template that can be easily customized for any artist, gallery, or portfolio site.

## Quick Start - Using This Template

### Step 1: Clone/Copy the Template

```bash
# Option A: Clone from GitHub
git clone git@github.com:hopelessentertainer/WCHwebsite.git my-new-site
cd my-new-site

# Option B: Copy the directory
cp -r wesley-holeman-gallery/WCHsite my-new-site
cd my-new-site
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Customize Your Site

Use the customization checklist below, or run the setup script:

```bash
npm run customize
```

---

## Customization Checklist

### 1. Branding & Name (5 minutes)

**Files to update:**
- `src/app/layout.tsx` - Page title and metadata
- `src/components/layout/Header.tsx` - Logo/initials
- `src/components/layout/Footer.tsx` - Brand name and copyright
- `src/app/page.tsx` - Hero section name

**Search & Replace:**
- "Wesley Charles Holleman" → Your name/brand
- "WCH" → Your initials/logo
- "Fine Art Gallery" → Your tagline

### 2. Content & Copy (10 minutes)

**Files to update:**
- `src/app/page.tsx` - Homepage hero text and description
- `src/app/about/page.tsx` - Artist/brand biography
- `src/app/contact/page.tsx` - Contact information
- `src/app/gallery/page.tsx` - Artwork/product data

**Key sections:**
- Hero description
- Artist statement
- About page content
- Contact details (email, location)

### 3. Colors & Styling (Optional - 5 minutes)

**File:** `tailwind.config.ts`

The template uses pure black & white. To customize:

```typescript
colors: {
  luxury: {
    black: "#000000",  // Change to your primary color
    white: "#FFFFFF",  // Change to your background color
    // Add accent colors if needed
  },
}
```

**File:** `src/app/globals.css`

Update CSS variables if you want different fonts or styling.

### 4. Navigation Menu (2 minutes)

**File:** `src/components/layout/Header.tsx`

Update the navigation array:

```typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
```

### 5. Artwork/Product Data (15 minutes)

**File:** `src/app/gallery/page.tsx`

Replace the `mockArtworks` array with your actual products/artwork:

```typescript
const mockArtworks = [
  {
    id: "1",
    title: "Your Artwork Title",
    artist: "Your Name",
    price: 2500,
    slug: "artwork-slug",
    image: "/images/artwork/artwork-slug.jpg",
    medium: "Acrylic on Canvas",
    dimensions: "24\" × 30\"",
    category: "abstract",
  },
  // Add more...
];
```

### 6. Images (10 minutes)

Add your images to:
- `public/images/artwork/` - Individual artwork/product images
- `public/images/collections/` - Collection covers
- `public/images/artist/` - Artist/brand photos
- `public/images/featured/` - Homepage featured images

**Naming convention:** Match image filenames to artwork slugs.

### 7. Package.json (1 minute)

**File:** `package.json`

Update the name:
```json
{
  "name": "your-site-name",
  "version": "0.1.0",
  ...
}
```

### 8. Environment Variables (Optional)

**File:** `.env.example` → `.env`

Add any API keys or configuration:
- Stripe keys (for e-commerce)
- Sanity CMS credentials
- Email service API keys

---

## Template Structure

```
WCHsite/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── page.tsx            # Homepage
│   │   ├── gallery/           # Gallery page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── collections/        # Collections page
│   │   ├── artwork/[slug]/     # Artwork detail pages
│   │   ├── cart/               # Shopping cart
│   │   └── checkout/           # Checkout flow
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation
│   │   ├── gallery/            # Gallery components
│   │   ├── ui/                 # Reusable UI components
│   │   └── animations/         # Animation components
│   └── lib/
│       ├── utils.ts            # Utility functions
│       ├── image-paths.ts      # Image path helpers
│       └── cart-context.tsx    # Shopping cart state
├── public/
│   └── images/                 # All images go here
└── tailwind.config.ts          # Design system config
```

---

## What Makes This Template Special

✅ **Luxury Design System** - Black & white Art Deco aesthetic
✅ **Fully Responsive** - Works on all devices
✅ **E-commerce Ready** - Shopping cart and checkout included
✅ **Image Optimized** - Next.js Image component with fallbacks
✅ **Animation Ready** - Framer Motion animations throughout
✅ **Type Safe** - Full TypeScript support
✅ **SEO Optimized** - Proper metadata and structure
✅ **Docker Ready** - Containerized development environment

---

## Common Customizations

### Change the Design Style

Want a different aesthetic? Update:
- `tailwind.config.ts` - Color palette
- `src/app/globals.css` - Typography and base styles
- Component files - Specific styling

### Add New Pages

1. Create new page in `src/app/your-page/page.tsx`
2. Add route to navigation in `Header.tsx`
3. Follow existing page structure

### Integrate CMS

Replace mock data with:
- Sanity CMS (recommended for this template)
- Contentful
- Strapi
- Or any headless CMS

### Add Authentication

For admin/artist login:
- NextAuth.js
- Clerk
- Auth0

---

## Quick Customization Script

Run this to quickly update the main branding:

```bash
# Replace these values
OLD_NAME="Wesley Charles Holleman"
NEW_NAME="Your Name Here"
OLD_INITIALS="WCH"
NEW_INITIALS="YNH"

# Run find and replace
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/$OLD_NAME/$NEW_NAME/g"
find src -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/$OLD_INITIALS/$NEW_INITIALS/g"
```

---

## Template License

This template is ready to use for your projects. Customize freely!

---

## Need Help?

1. Check the code comments - everything is well-documented
2. Review the component structure - follows Next.js best practices
3. Look at existing pages - use them as examples for new pages

Happy customizing! 🎨

