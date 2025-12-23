"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

// Mock collections data - will be replaced with Sanity CMS data
const collections = [
  {
    id: 1,
    title: "Abstract Landscapes",
    description: "A series exploring the intersection of nature and abstraction",
    imageCount: 12,
    slug: "abstract-landscapes",
  },
  {
    id: 2,
    title: "Color Studies",
    description: "Bold explorations of color relationships and emotional resonance",
    imageCount: 8,
    slug: "color-studies",
  },
  {
    id: 3,
    title: "Textural Explorations",
    description: "Works focusing on surface, texture, and materiality",
    imageCount: 15,
    slug: "textural-explorations",
  },
  {
    id: 4,
    title: "Minimalist Compositions",
    description: "Stripped-down forms that speak through simplicity",
    imageCount: 10,
    slug: "minimalist-compositions",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6">
                Collections
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-24 mx-auto mb-8"></div>
              <p className="text-xl text-luxury-neutral-600 font-sans max-w-2xl mx-auto">
                Explore curated series of works organized by theme, style, and artistic vision
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {collections.map((collection, index) => (
                <FadeIn key={collection.id} delay={index * 0.1}>
                  <Link href={`/collections/${collection.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="aspect-[4/3] bg-luxury-neutral-200 rounded-sm overflow-hidden mb-6">
                        <div className="w-full h-full bg-gradient-to-br from-luxury-neutral-300 to-luxury-neutral-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <span className="text-luxury-neutral-600 font-serif text-2xl">
                            {collection.title}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-luxury-black mb-3 group-hover:opacity-70 transition-opacity">
                        {collection.title}
                      </h2>
                      <p className="text-luxury-neutral-600 font-sans mb-4 leading-relaxed">
                        {collection.description}
                      </p>
                      <p className="text-sm text-luxury-neutral-500 font-sans uppercase tracking-wider">
                        {collection.imageCount} Works
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-luxury-black text-luxury-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                View All Artwork
              </h2>
              <p className="text-xl text-luxury-neutral-300 font-sans mb-8">
                Browse the complete gallery of available works
              </p>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black">
                  Explore Gallery
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

