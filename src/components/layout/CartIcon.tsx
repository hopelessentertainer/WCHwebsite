"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingBag className="h-5 w-5 text-luxury-black hover:opacity-70 transition-opacity" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-luxury-black text-luxury-white text-xs font-bold w-5 h-5 flex items-center justify-center border border-luxury-black">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}

