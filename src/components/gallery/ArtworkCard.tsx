"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    artist: string;
    price: number;
    image: string;
    slug: string;
    medium?: string;
    dimensions?: string;
  };
  index: number;
}

export function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/artwork/${artwork.slug}`}>
        <div className="group cursor-pointer">
          <div className="relative aspect-[3/4] bg-luxury-neutral-200 rounded-sm overflow-hidden mb-4">
            <div className="w-full h-full bg-gradient-to-br from-luxury-neutral-300 to-luxury-neutral-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
              <span className="text-luxury-neutral-600 font-serif text-lg">
                {artwork.title}
              </span>
            </div>
            <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors duration-300"></div>
          </div>
          <h3 className="text-xl font-serif font-bold text-luxury-black mb-1 group-hover:opacity-70 transition-opacity">
            {artwork.title}
          </h3>
          {artwork.medium && (
            <p className="text-sm text-luxury-neutral-600 font-sans mb-2">
              {artwork.medium}
            </p>
          )}
          <p className="text-lg font-serif font-bold text-luxury-black">
            {formatPrice(artwork.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

