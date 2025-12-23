"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6">
                About the Artist
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-24 mx-auto mb-8"></div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <FadeIn>
                <div className="aspect-square bg-luxury-white border-2 border-luxury-black overflow-hidden">
                  <div className="w-full h-full bg-luxury-white flex items-center justify-center">
                    <span className="text-luxury-black font-serif text-xl">
                      Artist Photo
                    </span>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-black">
                    Wesley Charles Holleman
                  </h2>
                  <p className="text-lg text-luxury-black font-sans leading-relaxed">
                    Born and raised in Alabama, Wesley Charles Holleman has dedicated his life
                    to exploring the boundaries of abstract expression. His work reflects a deep
                    connection to the American South while embracing contemporary artistic movements.
                  </p>
                  <p className="text-lg text-luxury-black font-sans leading-relaxed">
                    With a career spanning over two decades, Holleman's art has evolved from
                    representational works to bold abstract compositions that challenge viewers
                    to see beyond the surface.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-luxury-white border-t-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-12 text-center">
                Artistic Process
              </h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-luxury-black">1</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-luxury-black mb-3">
                    Inspiration
                  </h3>
                  <p className="text-luxury-black font-sans">
                    Drawing from nature, music, and the rich cultural tapestry of Alabama,
                    each piece begins with a moment of inspiration.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-luxury-black">2</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-luxury-black mb-3">
                    Creation
                  </h3>
                  <p className="text-luxury-black font-sans">
                    Through layers of paint, texture, and color, the vision takes form on canvas,
                    evolving organically throughout the creative process.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif text-luxury-black">3</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-luxury-black mb-3">
                    Completion
                  </h3>
                  <p className="text-luxury-black font-sans">
                    Each work is refined until it achieves the perfect balance of emotion,
                    composition, and technical excellence.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-8 text-center">
                Artistic Philosophy
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-lg text-luxury-black font-sans leading-relaxed">
                <p>
                  "Art is not about replicating what we see, but about revealing what we feel.
                  My abstract works are windows into emotional landscapes—places where color,
                  form, and texture converge to tell stories that words cannot express."
                </p>
                <p>
                  "I believe that great art should challenge, inspire, and transform. Each
                  piece in my collection is an invitation to explore the boundaries between
                  the known and the unknown, the seen and the felt."
                </p>
                <p className="text-right text-luxury-black font-serif italic">
                  — Wesley Charles Holleman
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-luxury-black text-luxury-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Explore the Collection
              </h2>
              <p className="text-xl text-luxury-white font-sans mb-8">
                Discover the full range of abstract works available for acquisition
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/gallery">
                  <button className="font-sans font-medium transition-all duration-300 uppercase tracking-wider border-2 border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black px-8 py-4 text-lg">
                    View Gallery
                  </button>
                </a>
                <a href="/contact">
                  <button className="font-sans font-medium transition-all duration-300 uppercase tracking-wider bg-luxury-white text-luxury-black hover:bg-luxury-white px-8 py-4 text-lg border-2 border-luxury-white">
                    Get in Touch
                  </button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

