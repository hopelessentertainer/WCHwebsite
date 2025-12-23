# Image Setup Guide

This guide explains how to add artwork images to the Wesley Charles Holleman Fine Art Gallery website.

## Directory Structure

All images should be placed in the `public/images/` directory:

```
public/images/
├── artwork/          # Individual artwork images
├── collections/      # Collection cover images  
├── artist/          # Artist photos
└── featured/        # Featured artwork for homepage
```

## Adding Artwork Images

### Step 1: Prepare Your Images

1. **Format:** JPG or PNG
2. **Size:** Minimum 2000px on longest side (for high quality)
3. **Optimize:** Compress images to under 2MB for web performance
4. **Naming:** Use the artwork slug as the filename

### Step 2: Name Your Images

Images should be named to match the artwork slug. For example:
- Artwork slug: `abstract-composition-1`
- Image file: `abstract-composition-1.jpg`

### Step 3: Place Images in Correct Directory

- **Artwork images:** `public/images/artwork/`
- **Collection covers:** `public/images/collections/`
- **Artist photos:** `public/images/artist/`
- **Featured images:** `public/images/featured/`

### Step 4: Update Artwork Data

When you add images, the code will automatically look for them using the artwork slug. The image path is generated as:
```
/images/artwork/{slug}.jpg
```

For example, if your artwork has slug `abstract-composition-1`, the system will look for:
```
public/images/artwork/abstract-composition-1.jpg
```

## Example Workflow

1. **Prepare image:** `abstract-composition-1.jpg` (2000x2500px, optimized)
2. **Place in directory:** `public/images/artwork/abstract-composition-1.jpg`
3. **Artwork data already references:** `slug: "abstract-composition-1"`
4. **Image will automatically display** when the page loads

## Image Specifications

### Artwork Images
- **Location:** `public/images/artwork/`
- **Format:** JPG or PNG
- **Recommended size:** 2000px+ on longest side
- **Aspect ratio:** Maintain original artwork proportions
- **File size:** Under 2MB

### Collection Images
- **Location:** `public/images/collections/`
- **Format:** JPG or PNG
- **Recommended size:** 1200px × 900px (4:3)
- **File size:** Under 1MB

### Artist Images
- **Location:** `public/images/artist/`
- **Format:** JPG or PNG
- **Recommended size:** 1200px × 1200px (square) or 1200px × 1600px (portrait)
- **File size:** Under 1MB

### Featured Images
- **Location:** `public/images/featured/`
- **Format:** JPG or PNG
- **Recommended size:** 2000px × 2000px (square) or 2000px × 1500px
- **Naming:** `featured-1.jpg`, `featured-2.jpg`, etc.
- **File size:** Under 2MB

## Current Artwork Slugs

Based on the current mock data, you'll need images for these artworks:

1. `abstract-composition-1.jpg`
2. `color-field-study.jpg`
3. `textural-landscape.jpg`
4. `minimalist-form.jpg`
5. `abstract-composition-2.jpg`
6. `vibrant-expression.jpg`
7. `surface-tension.jpg`
8. `quiet-moment.jpg`
9. `abstract-composition-3.jpg`

## Tips

- Use image optimization tools before uploading (TinyPNG, ImageOptim, etc.)
- Maintain consistent aspect ratios within collections
- Use descriptive filenames that match artwork slugs
- Test images load correctly after adding them
- The system will show a placeholder if an image is missing

## Next Steps

1. Add your artwork images to `public/images/artwork/`
2. Add collection cover images to `public/images/collections/`
3. Add artist photos to `public/images/artist/`
4. Add featured images to `public/images/featured/`
5. Refresh the website to see your images!

