"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartIcon } from "./CartIcon";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-white/98 backdrop-blur-sm border-b-2 border-luxury-black">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-3xl font-serif font-normal text-luxury-black tracking-[0.2em]">
              WCH
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-luxury-black hover:text-luxury-black font-sans text-xs uppercase tracking-[0.15em] transition-opacity duration-300 font-light hover:opacity-70"
              >
                {item.name}
              </Link>
            ))}
            <CartIcon />
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center gap-4">
            <CartIcon />
            <button
              type="button"
              className="text-luxury-black hover:opacity-70"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 border-t-2 border-luxury-black",
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-luxury-black hover:text-luxury-black font-sans text-xs uppercase tracking-[0.15em] transition-opacity duration-300 font-light hover:opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

