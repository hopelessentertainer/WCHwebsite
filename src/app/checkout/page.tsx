"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In production, this would integrate with Stripe
    // For now, we'll just simulate success
    clearCart();
    setIsProcessing(false);
    router.push("/checkout/success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-luxury-white">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-4">
                  No Items in Cart
                </h1>
                <p className="text-xl text-luxury-black font-sans mb-8">
                  Please add items to your cart before checkout
                </p>
                <Button onClick={() => router.push("/gallery")} size="lg">
                  Browse Gallery
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-cream">
      {/* Header */}
      <section className="py-12 md:py-20 border-b-2 border-luxury-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black">
              Checkout
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Fields */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <FadeIn>
                  <div className="bg-white p-8 rounded-sm border border-luxury-neutral-200">
                    <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                      Contact Information
                    </h2>
                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-luxury-neutral-300 focus:border-luxury-gold focus:outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>
                </FadeIn>

                {/* Shipping Address */}
                <FadeIn delay={0.1}>
                  <div className="bg-white p-8 rounded-sm border border-luxury-neutral-200">
                    <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                      Shipping Address
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        >
                          <option value="United States">United States</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Payment Information */}
                <FadeIn delay={0.2}>
                  <div className="bg-white p-8 rounded-sm border border-luxury-neutral-200">
                    <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                      Payment Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="123"
                            className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-luxury-neutral-500 font-sans">
                        Note: This is a demo checkout. In production, this would integrate with Stripe for secure payment processing.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.3}>
                  <div className="bg-white p-8 rounded-sm border border-luxury-neutral-200 sticky top-24">
                    <h2 className="text-2xl font-serif font-bold text-luxury-black mb-6">
                      Order Summary
                    </h2>
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm font-sans">
                          <span className="text-luxury-neutral-700">
                            {item.title} × {item.quantity}
                          </span>
                          <span className="text-luxury-neutral-700">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-luxury-neutral-200 pt-4 space-y-2 mb-6">
                      <div className="flex justify-between font-sans text-luxury-neutral-700">
                        <span>Subtotal</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                      <div className="flex justify-between font-sans text-luxury-neutral-700">
                        <span>Shipping</span>
                        <span>Calculated</span>
                      </div>
                      <div className="flex justify-between text-xl font-serif font-bold text-luxury-black pt-2 border-t border-luxury-neutral-200">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Complete Purchase"}
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

