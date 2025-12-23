/**
 * Helper functions for image paths
 * All images should be placed in the public/images directory
 */

export function getArtworkImage(slug: string): string {
  // Returns the path to an artwork image
  // Image should be named: {slug}.jpg or {slug}.png
  return `/images/artwork/${slug}.jpg`;
}

export function getCollectionImage(slug: string): string {
  // Returns the path to a collection cover image
  return `/images/collections/${slug}.jpg`;
}

export function getArtistImage(filename: string = "artist-photo.jpg"): string {
  // Returns the path to an artist image
  return `/images/artist/${filename}`;
}

export function getFeaturedImage(index: number): string {
  // Returns the path to a featured image for homepage
  return `/images/featured/featured-${index}.jpg`;
}

/**
 * Example usage:
 * 
 * // In a component:
 * import Image from 'next/image';
 * import { getArtworkImage } from '@/lib/image-paths';
 * 
 * <Image
 *   src={getArtworkImage(artwork.slug)}
 *   alt={artwork.title}
 *   width={800}
 *   height={1000}
 * />
 */

