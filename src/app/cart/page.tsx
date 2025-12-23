"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-white">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <ShoppingBag className="h-16 w-16 text-luxury-black mx-auto mb-6 opacity-30" />
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-4">
                  Your Cart is Empty
                </h1>
                <p className="text-xl text-luxury-black font-sans mb-8">
                  Start adding beautiful artwork to your collection
                </p>
                <Link href="/gallery">
                  <Button size="lg">Browse Gallery</Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Header */}
      <section className="py-12 md:py-20 border-b-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black">
              Shopping Cart
            </h1>
            <p className="text-luxury-black font-sans mt-2">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 mb-12">
              {items.map((item) => (
                <FadeIn key={item.id}>
                  <div className="bg-luxury-white p-6 border-2 border-luxury-black">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <Link href={`/artwork/${item.slug}`}>
                        <div className="w-full md:w-32 aspect-square bg-luxury-white border-2 border-luxury-black overflow-hidden cursor-pointer">
                          <div className="w-full h-full bg-luxury-white flex items-center justify-center">
                            <span className="text-luxury-black font-serif text-sm">
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <Link href={`/artwork/${item.slug}`}>
                              <h3 className="text-2xl font-serif font-bold text-luxury-black mb-2 hover:opacity-70 transition-opacity">
                                {item.title}
                              </h3>
                            </Link>
                            <p className="text-lg font-serif font-bold text-luxury-black">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-luxury-black hover:opacity-70 transition-opacity"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-luxury-black font-sans uppercase tracking-wider">
                            Quantity:
                          </span>
                          <div className="flex items-center gap-2 border-2 border-luxury-black">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-luxury-black hover:text-luxury-white transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-2 font-sans">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-luxury-black hover:text-luxury-white transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="text-lg font-serif font-bold text-luxury-black ml-auto">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Summary */}
            <FadeIn delay={0.3}>
              <div className="bg-luxury-white p-8 border-2 border-luxury-black">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-luxury-black font-sans">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-luxury-black font-sans">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t-2 border-luxury-black pt-4">
                    <div className="flex justify-between text-2xl font-serif font-bold text-luxury-black">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/checkout" className="flex-1">
                    <Button size="lg" className="w-full">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button variant="outline" size="lg">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

