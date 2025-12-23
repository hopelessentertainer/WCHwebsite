"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <div className="w-20 h-20 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-luxury-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-luxury-black font-sans mb-8">
                Your order has been received and is being processed.
              </p>
              <p className="text-lg text-luxury-black font-sans mb-12">
                You will receive an email confirmation shortly with your order details
                and shipping information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/gallery">
                  <Button size="lg">Continue Shopping</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg">
                    Return Home
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

