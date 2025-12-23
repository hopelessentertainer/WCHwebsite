"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArtworkCard } from "@/components/gallery/ArtworkCard";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

// Mock artwork data - will be replaced with Sanity CMS data
const mockArtworks = [
  {
    id: "1",
    title: "Abstract Composition #1",
    artist: "Wesley Charles Holleman",
    price: 2500,
    slug: "abstract-composition-1",
    medium: "Acrylic on Canvas",
    dimensions: "24\" × 30\"",
    category: "abstract",
  },
  {
    id: "2",
    title: "Color Field Study",
    artist: "Wesley Charles Holleman",
    price: 1800,
    slug: "color-field-study",
    medium: "Oil on Canvas",
    dimensions: "20\" × 24\"",
    category: "color-studies",
  },
  {
    id: "3",
    title: "Textural Landscape",
    artist: "Wesley Charles Holleman",
    price: 3200,
    slug: "textural-landscape",
    medium: "Mixed Media",
    dimensions: "30\" × 40\"",
    category: "textural",
  },
  {
    id: "4",
    title: "Minimalist Form",
    artist: "Wesley Charles Holleman",
    price: 1500,
    slug: "minimalist-form",
    medium: "Acrylic on Canvas",
    dimensions: "16\" × 20\"",
    category: "minimalist",
  },
  {
    id: "5",
    title: "Abstract Composition #2",
    artist: "Wesley Charles Holleman",
    price: 2800,
    slug: "abstract-composition-2",
    medium: "Oil on Canvas",
    dimensions: "24\" × 36\"",
    category: "abstract",
  },
  {
    id: "6",
    title: "Vibrant Expression",
    artist: "Wesley Charles Holleman",
    price: 2200,
    slug: "vibrant-expression",
    medium: "Acrylic on Canvas",
    dimensions: "22\" × 28\"",
    category: "color-studies",
  },
  {
    id: "7",
    title: "Surface Tension",
    artist: "Wesley Charles Holleman",
    price: 3500,
    slug: "surface-tension",
    medium: "Mixed Media",
    dimensions: "32\" × 42\"",
    category: "textural",
  },
  {
    id: "8",
    title: "Quiet Moment",
    artist: "Wesley Charles Holleman",
    price: 1200,
    slug: "quiet-moment",
    medium: "Acrylic on Canvas",
    dimensions: "14\" × 18\"",
    category: "minimalist",
  },
  {
    id: "9",
    title: "Abstract Composition #3",
    artist: "Wesley Charles Holleman",
    price: 2900,
    slug: "abstract-composition-3",
    medium: "Oil on Canvas",
    dimensions: "26\" × 34\"",
    category: "abstract",
  },
];

const categories = [
  { id: "all", label: "All Works" },
  { id: "abstract", label: "Abstract" },
  { id: "color-studies", label: "Color Studies" },
  { id: "textural", label: "Textural" },
  { id: "minimalist", label: "Minimalist" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const filteredArtworks = mockArtworks.filter((artwork) => {
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    const matchesPrice = artwork.price >= priceRange[0] && artwork.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6">
                Gallery
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-24 mx-auto mb-8"></div>
              <p className="text-xl text-luxury-black font-sans max-w-2xl mx-auto">
                Explore our complete collection of abstract fine art
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b-2 border-luxury-black sticky top-24 bg-luxury-white/98 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 font-sans text-sm uppercase tracking-wider transition-all border-2 ${
                    selectedCategory === category.id
                      ? "bg-luxury-black text-luxury-white border-luxury-black"
                      : "bg-luxury-white text-luxury-black border-luxury-black hover:bg-luxury-black hover:text-luxury-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredArtworks.map((artwork, index) => (
                <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-luxury-black font-sans">
                No artworks found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

