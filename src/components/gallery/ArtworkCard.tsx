"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import { getArtworkImage } from "@/lib/image-paths";

interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    artist: string;
    price: number;
    image?: string;
    slug: string;
    medium?: string;
    dimensions?: string;
  };
  index: number;
}

export function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  const imagePath = artwork.image || getArtworkImage(artwork.slug);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/artwork/${artwork.slug}`}>
        <div className="group cursor-pointer">
          <div className="relative aspect-[3/4] bg-luxury-white border-2 border-luxury-black overflow-hidden mb-4">
            <Image
              src={imagePath}
              alt={artwork.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            {/* Placeholder shown if image fails to load */}
            <div className="absolute inset-0 bg-luxury-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500 hidden">
              <span className="text-luxury-black font-serif text-lg">
                {artwork.title}
              </span>
            </div>
            <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-colors duration-300"></div>
          </div>
          <h3 className="text-xl font-serif font-bold text-luxury-black mb-1 group-hover:opacity-70 transition-opacity">
            {artwork.title}
          </h3>
          {artwork.medium && (
            <p className="text-sm text-luxury-black font-sans mb-2">
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

