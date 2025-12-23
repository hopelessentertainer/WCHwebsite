"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden vintage-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-luxury-black mb-8 tracking-[0.15em] leading-tight">
                Wesley Charles
                <br />
                <span className="tracking-[0.2em]">Holleman</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-32 mx-auto mb-8"></div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl lg:text-2xl text-luxury-black mb-6 font-sans font-light tracking-[0.1em] uppercase">
                Fine Art Gallery
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-base md:text-lg text-luxury-black mb-16 max-w-2xl mx-auto font-sans font-light leading-relaxed tracking-wide">
                Abstract art by Alabama native artist. Discover a collection of contemporary works
                that blend classical elegance with modern expression.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/gallery">
                  <Button size="lg" className="group">
                    View Gallery
                    <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    About the Artist
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-luxury-white border-t-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-luxury-black mb-6 tracking-[0.1em]">
                Featured Works
              </h2>
              <div className="art-deco-divider w-24 mx-auto mb-6"></div>
              <p className="text-luxury-black font-sans text-sm max-w-2xl mx-auto tracking-wider uppercase font-light">
                Explore our curated selection of abstract masterpieces
              </p>
            </div>
          </FadeIn>

          {/* Placeholder for featured artwork grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <FadeIn key={item} delay={item * 0.1}>
                <div className="aspect-square bg-luxury-white border-2 border-luxury-black overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-luxury-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-luxury-black font-serif text-lg tracking-wider">
                      Artwork {item}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/gallery">
                <Button variant="outline" size="lg">
                  View All Works
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Artist Statement Section */}
      <section className="py-20 bg-luxury-black text-luxury-white border-t-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 text-center tracking-[0.1em]">
                Artist Statement
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-24 mx-auto mb-8"></div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-base text-luxury-white font-sans leading-relaxed font-light tracking-wide">
                <p>
                  Each piece in this collection represents a journey through abstraction,
                  where form and color converge to create emotional landscapes.
                </p>
                <p>
                  Drawing inspiration from the rich cultural heritage of Alabama and
                  the timeless elegance of classical art, these works invite viewers
                  to explore the boundaries between representation and pure expression.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black">
                    Learn More
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
