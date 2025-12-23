# Image Directory Structure

This directory contains all images for the Wesley Charles Holleman Fine Art Gallery website.

## Directory Structure

```
images/
├── artwork/          # Individual artwork images
│   ├── abstract-composition-1.jpg
│   ├── abstract-composition-2.jpg
│   └── ...
├── collections/      # Collection cover images
│   ├── abstract-landscapes.jpg
│   ├── color-studies.jpg
│   └── ...
├── artist/          # Artist photos and biography images
│   ├── artist-photo.jpg
│   └── studio.jpg
└── featured/        # Featured artwork for homepage
    ├── featured-1.jpg
    ├── featured-2.jpg
    └── featured-3.jpg
```

## Image Guidelines

### Artwork Images
- **Format:** JPG or PNG
- **Recommended size:** 2000px on longest side (minimum)
- **Aspect ratio:** Varies by artwork (maintain original proportions)
- **Naming convention:** Use slug format matching artwork slug (e.g., `abstract-composition-1.jpg`)
- **File size:** Optimize images to under 2MB for web performance

### Collection Images
- **Format:** JPG or PNG
- **Recommended size:** 1200px × 900px (4:3 aspect ratio)
- **File size:** Under 1MB

### Artist Images
- **Format:** JPG or PNG
- **Recommended size:** 1200px × 1200px (square) or 1200px × 1600px (portrait)
- **File size:** Under 1MB

### Featured Images
- **Format:** JPG or PNG
- **Recommended size:** 2000px × 2000px (square) or 2000px × 1500px
- **File size:** Under 2MB

## Usage in Code

Images in the `public` folder can be referenced directly:
- `/images/artwork/abstract-composition-1.jpg`
- `/images/collections/abstract-landscapes.jpg`
- `/images/artist/artist-photo.jpg`

## Next Steps

1. Add your artwork images to the `artwork/` directory
2. Add collection cover images to the `collections/` directory
3. Add artist photos to the `artist/` directory
4. Add featured images to the `featured/` directory
5. Update the artwork data in the codebase to reference these images

