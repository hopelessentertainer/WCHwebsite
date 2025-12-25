#!/bin/bash

###############################################################################
# Template Customization Script
# Quickly customize this template for a new project
###############################################################################

echo "========================================="
echo "Website Template Customization"
echo "========================================="
echo ""

# Get user input
read -p "Enter your name/brand name: " BRAND_NAME
read -p "Enter your initials/logo text: " INITIALS
read -p "Enter your tagline (e.g., 'Fine Art Gallery'): " TAGLINE
read -p "Enter your location: " LOCATION
read -p "Enter your email: " EMAIL
read -p "Enter your site description: " DESCRIPTION

echo ""
echo "Customizing your site..."
echo ""

# Files to update
FILES=(
  "src/app/layout.tsx"
  "src/app/page.tsx"
  "src/components/layout/Header.tsx"
  "src/components/layout/Footer.tsx"
  "src/app/about/page.tsx"
  "src/app/contact/page.tsx"
  "src/app/gallery/page.tsx"
  "package.json"
)

# Replace in files
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    # Replace brand name
    sed -i '' "s/Wesley Charles Holleman/$BRAND_NAME/g" "$file" 2>/dev/null
    sed -i '' "s/Wesley Charles Holeman/$BRAND_NAME/g" "$file" 2>/dev/null
    
    # Replace initials
    sed -i '' "s/WCH/$INITIALS/g" "$file" 2>/dev/null
    
    # Replace tagline
    sed -i '' "s/Fine Art Gallery/$TAGLINE/g" "$file" 2>/dev/null
    
    # Replace location
    sed -i '' "s/Alabama, United States/$LOCATION/g" "$file" 2>/dev/null
    
    # Replace email
    sed -i '' "s/info@wesleyholleman.com/$EMAIL/g" "$file" 2>/dev/null
    
    echo "✓ Updated $file"
  fi
done

# Update package.json name
if [ -f "package.json" ]; then
  # Create a safe name from brand name (lowercase, no spaces)
  SAFE_NAME=$(echo "$BRAND_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  sed -i '' "s/\"name\": \"wesley-holeman-gallery\"/\"name\": \"$SAFE_NAME\"/g" "package.json"
  echo "✓ Updated package.json"
fi

# Update metadata in layout.tsx
if [ -f "src/app/layout.tsx" ]; then
  sed -i '' "s/Luxury art gallery showcasing the abstract fine art of Alabama native artist Wesley Charles Holleman/$DESCRIPTION/g" "src/app/layout.tsx"
  echo "✓ Updated site description"
fi

echo ""
echo "========================================="
echo "Customization Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Review the updated files"
echo "2. Add your images to public/images/"
echo "3. Update artwork/product data in src/app/gallery/page.tsx"
echo "4. Customize colors in tailwind.config.ts (if needed)"
echo "5. Run 'npm run dev' to see your customized site"
echo ""
echo "Your site is ready to customize further!"

