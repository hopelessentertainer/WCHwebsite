import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Wesley Charles Holleman | Fine Art Gallery",
  description: "Luxury art gallery showcasing the abstract fine art of Alabama native artist Wesley Charles Holleman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="pt-24 min-h-screen bg-luxury-white">
        {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
