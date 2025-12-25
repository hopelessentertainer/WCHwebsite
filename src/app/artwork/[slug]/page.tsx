"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { ZoomIn, ZoomOut, Share2, ShoppingCart, X } from "lucide-react";

// Mock artwork data - will be replaced with Sanity CMS data
const getArtworkBySlug = (slug: string) => {
  const artworks: Record<string, any> = {
    "abstract-composition-1": {
      id: "1",
      title: "Abstract Composition #1",
      artist: "Wesley Charles Holleman",
      price: 2500,
      slug: "abstract-composition-1",
      medium: "Acrylic on Canvas",
      dimensions: "24\" × 30\"",
      year: 2024,
      description: "A bold exploration of form and color, this piece represents a breakthrough in the artist's abstract expression. The composition balances dynamic movement with structural integrity, creating a visual narrative that invites multiple interpretations.",
      category: "Abstract",
      availability: "available",
    },
  };

  return artworks[slug] || artworks["abstract-composition-1"];
};

export default function ArtworkDetailPage({ params }: { params: { slug: string } }) {
  const artwork = getArtworkBySlug(params.slug);
  const [imageZoom, setImageZoom] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: artwork.id,
      title: artwork.title,
      price: artwork.price,
      image: artwork.slug,
      slug: artwork.slug,
    });
  };

  const handleInquire = () => {
    // Inquiry functionality
    window.location.href = `/contact?subject=artwork-inquiry&artwork=${artwork.id}`;
  };

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Artwork Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image */}
              <FadeIn>
                <div className="relative">
                  <div
                    className={`aspect-square bg-luxury-white border-2 border-luxury-black overflow-hidden cursor-zoom-in ${
                      imageZoom ? "fixed inset-4 z-50" : "relative"
                    }`}
                    onClick={() => setImageZoom(!imageZoom)}
                  >
                    <div className="w-full h-full bg-luxury-white flex items-center justify-center">
                      <span className="text-luxury-black font-serif text-2xl">
                        {artwork.title}
                      </span>
                    </div>
                  </div>
                  {imageZoom && (
                    <button
                      onClick={() => setImageZoom(false)}
                      className="absolute top-4 right-4 z-50 bg-luxury-black text-luxury-white p-2 rounded-full hover:bg-luxury-white hover:text-luxury-black hover:border-2 hover:border-luxury-black transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => setImageZoom(!imageZoom)}
                      className="flex items-center gap-2 text-luxury-black hover:opacity-70 font-sans text-sm uppercase tracking-wider transition-opacity"
                    >
                      {imageZoom ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                      {imageZoom ? "Zoom Out" : "Zoom In"}
                    </button>
                    <button className="flex items-center gap-2 text-luxury-black hover:opacity-70 font-sans text-sm uppercase tracking-wider transition-opacity">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </div>
              </FadeIn>

              {/* Details */}
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-4">
                      {artwork.title}
                    </h1>
                    <p className="text-xl text-luxury-black font-sans mb-6">
                      by {artwork.artist}
                    </p>
                  </div>

                  <div className="border-t-2 border-luxury-black pt-6">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Price
                        </p>
                        <p className="text-3xl font-serif font-bold text-luxury-black">
                          {formatPrice(artwork.price)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Availability
                        </p>
                        <p className="text-lg font-sans text-luxury-black capitalize">
                          {artwork.availability}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Medium
                        </p>
                        <p className="text-lg font-sans text-luxury-neutral-700">
                          {artwork.medium}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Dimensions
                        </p>
                        <p className="text-lg font-sans text-luxury-neutral-700">
                          {artwork.dimensions}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Year
                        </p>
                        <p className="text-lg font-sans text-luxury-neutral-700">
                          {artwork.year}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-luxury-black font-sans uppercase tracking-wider mb-1">
                          Category
                        </p>
                        <p className="text-lg font-sans text-luxury-neutral-700">
                          {artwork.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button size="lg" onClick={handleAddToCart} className="w-full">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleInquire}
                      className="w-full"
                    >
                      Request Information
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-20 bg-luxury-white border-t-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-luxury-black mb-6">
                About This Work
              </h2>
              <p className="text-lg text-luxury-black font-sans leading-relaxed">
                {artwork.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Works Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-luxury-black mb-12 text-center">
              Related Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Placeholder for related artworks */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-luxury-white border-2 border-luxury-black overflow-hidden">
                  <div className="w-full h-full bg-luxury-white flex items-center justify-center">
                    <span className="text-luxury-black font-serif">Related {item}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

