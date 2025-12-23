"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-luxury-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6">
                Contact Us
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="art-deco-divider w-24 mx-auto mb-8"></div>
              <p className="text-xl text-luxury-black font-sans max-w-2xl mx-auto">
                We'd love to hear from you. Reach out for inquiries about artwork,
                commissions, or general questions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <FadeIn>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-luxury-black rounded-full flex items-center justify-center mr-4">
                          <MapPin className="h-6 w-6 text-luxury-black" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-luxury-black">
                          Location
                        </h3>
                      </div>
                      <p className="text-luxury-black font-sans ml-16">
                        Alabama, United States
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-luxury-black rounded-full flex items-center justify-center mr-4">
                          <Mail className="h-6 w-6 text-luxury-black" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-luxury-black">
                          Email
                        </h3>
                      </div>
                      <p className="text-luxury-black font-sans ml-16">
                        info@wesleyholleman.com
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-luxury-black rounded-full flex items-center justify-center mr-4">
                          <Phone className="h-6 w-6 text-luxury-black" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-luxury-black">
                          Phone
                        </h3>
                      </div>
                      <p className="text-luxury-black font-sans ml-16">
                        Available upon request
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <FadeIn delay={0.2}>
                  <div className="bg-luxury-white p-8 md:p-12 border-2 border-luxury-black">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center mx-auto mb-4">
                          <Mail className="h-8 w-8 text-luxury-black" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-luxury-black mb-2">
                          Thank You!
                        </h3>
                        <p className="text-luxury-black font-sans">
                          Your message has been sent. We'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-sans font-medium text-luxury-black mb-2 uppercase tracking-wider">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                            />
                          </div>
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
                              className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                            />
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                              Subject
                            </label>
                            <select
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border-2 border-luxury-black focus:border-luxury-black focus:outline-none transition-colors font-sans"
                            >
                              <option value="">Select a subject</option>
                              <option value="artwork-inquiry">Artwork Inquiry</option>
                              <option value="commission">Commission Request</option>
                              <option value="exhibition">Exhibition Opportunity</option>
                              <option value="general">General Question</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-sans font-medium text-luxury-neutral-700 mb-2 uppercase tracking-wider">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-luxury-neutral-300 focus:border-luxury-gold focus:outline-none transition-colors font-sans resize-none"
                          />
                        </div>

                        <div>
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="w-full md:w-auto"
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

