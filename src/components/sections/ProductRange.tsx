"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Heart, Sparkles, MessageSquare, Plus, Check } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";

interface Product {
  id: string;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  subPrice: number;
  oneTimePrice: number;
  image: string;
  reviews: string;
  ratingCount: number;
  benefits: string[];
}

export default function ProductRange() {
  const [purchaseModes, setPurchaseModes] = useState<Record<string, "subscribe" | "onetime">>({
    "dental-additive": "subscribe",
    "dental-wipes": "subscribe",
  });

  const products: Product[] = [
    {
      id: "dental-additive",
      title: "Natural Dental Water Additive (250ml)",
      category: "Oral Care",
      tags: ["Bad Breath", "Plaque & Tartar", "Gum Health"],
      desc: "India's first herbal water additive. Tasteless, odorless, and completely brush-free dental care.",
      subPrice: 599,
      oneTimePrice: 749,
      image: "/images/product-bottle.png",
      reviews: "4,950+ reviews",
      ratingCount: 5,
      benefits: ["Freshens breath in 14 days", "Reduces plaque consolidation", "Zero-brushing stress formula"],
    },
    {
      id: "dental-wipes",
      title: "Herbal Dental Tooth Wipes (50 Wipes)",
      category: "Oral Care",
      tags: ["Plaque Removal", "Easy Cleaning", "Mint Fresh"],
      desc: "Soft textured finger wipes pre-soaked with mint & aloe to physically clear tartar buildup.",
      subPrice: 399,
      oneTimePrice: 499,
      image: "/images/testimonial-dogs.png",
      reviews: "1,220+ reviews",
      ratingCount: 5,
      benefits: ["Wipes away soft plaque instantly", "Soothing chamomile & mint", "Convenient travel-ready tub"],
    },
  ];

  const handleToggleMode = (productId: string, mode: "subscribe" | "onetime") => {
    setPurchaseModes((prev) => ({
      ...prev,
      [productId]: mode,
    }));
  };

  const getWhatsAppLink = (product: Product, mode: "subscribe" | "onetime") => {
    const price = mode === "subscribe" ? product.subPrice : product.oneTimePrice;
    const text = encodeURIComponent(
      `Hi! I would like to order the "${product.title}" (${
        mode === "subscribe" ? "Subscribe & Save 20%" : "One-time purchase"
      }) for ₹${price}. Please let me know how to proceed!`
    );
    return `https://wa.me/918160526176?text=${text}`;
  };

  return (
    <section className="bg-white py-16 md:py-24 scroll-mt-20" id="product-range">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
            🛒 Best Sellers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111e17] leading-tight mb-4">
            Shop Our Best Sellers
          </h2>
          <p className="font-body text-base md:text-lg text-[#3a4740] leading-relaxed">
            Tried, trusted, and loved. These are the natural supplements and formulas that pet parents keep coming back for.
          </p>
        </SectionReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, idx) => {
            const currentMode = purchaseModes[product.id] || "subscribe";
            const currentPrice = currentMode === "subscribe" ? product.subPrice : product.oneTimePrice;
            const originalPrice = product.oneTimePrice;
            const discount = Math.round(((originalPrice - product.subPrice) / originalPrice) * 100);

            return (
              <SectionReveal
                key={product.id}
                direction="up"
                delay={idx * 0.05}
                className="bg-[#fdfbf7] border border-gray-200/50 rounded-3xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Sale Badge */}
                {currentMode === "subscribe" && (
                  <span className="absolute top-4 left-4 z-10 bg-[#0b4f35] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    Save {discount}% + Free Gift 🎁
                  </span>
                )}

                {/* Top Section: Tags and Rating */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-extrabold text-[#6e7d75] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-[#f5a623] text-[#f5a623]" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-[#111e17]">{product.reviews}</span>
                    </div>
                  </div>

                  {/* Split Layout: Image & Title */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                    <div className="w-36 h-36 bg-white rounded-2xl p-3 flex items-center justify-center border border-gray-100 shrink-0 shadow-sm relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-extrabold text-[#111e17] leading-snug mb-2">
                        {product.title}
                      </h3>
                      {/* Product Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#f0f5f1] text-[#013220] text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#86b09c]/15"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-xs text-[#3a4740] leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Benefits */}
                  <div className="border-t border-gray-200/50 pt-4 mb-6">
                    <h4 className="text-[11px] font-black text-[#6e7d75] uppercase tracking-wider mb-2.5">
                      Key Health Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0 m-0">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-xs font-bold text-[#3a4740]">
                          <Check size={14} className="text-[#0b4f35] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Widget */}
                <div>
                  <div className="flex flex-col gap-2.5 mb-6">
                    
                    {/* Option 1: Subscribe */}
                    <div
                      onClick={() => handleToggleMode(product.id, "subscribe")}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                        currentMode === "subscribe"
                          ? "border-[#013220] bg-white shadow-sm"
                          : "border-gray-200 bg-transparent hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          currentMode === "subscribe" ? "border-[#013220]" : "border-gray-400"
                        }`}>
                          {currentMode === "subscribe" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#013220]" />
                          )}
                        </div>
                        <div className="text-left">
                          <span className="block text-xs font-black text-[#111e17]">
                            RepeatCare (Subscribe & Save 20%)
                          </span>
                          <span className="block text-[10px] text-[#0b4f35] font-extrabold uppercase">
                            🚚 FREE Delivery + Mystery Gift
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-base font-black text-[#013220]">₹{product.subPrice}</span>
                        <span className="block text-[10px] text-[#6e7d75] line-through">₹{product.oneTimePrice}</span>
                      </div>
                    </div>

                    {/* Option 2: One-time */}
                    <div
                      onClick={() => handleToggleMode(product.id, "onetime")}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                        currentMode === "onetime"
                          ? "border-[#013220] bg-white shadow-sm"
                          : "border-gray-200 bg-transparent hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          currentMode === "onetime" ? "border-[#013220]" : "border-gray-400"
                        }`}>
                          {currentMode === "onetime" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#013220]" />
                          )}
                        </div>
                        <span className="text-xs font-black text-[#111e17]">
                          One-Time Purchase
                        </span>
                      </div>
                      <div>
                        <span className="text-base font-black text-[#111e17]">₹{product.oneTimePrice}</span>
                      </div>
                    </div>

                  </div>

                  {/* CTA Checkout button */}
                  <a
                    href={getWhatsAppLink(product, currentMode)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MessageSquare size={16} /> 
                    {currentMode === "subscribe" 
                      ? `Subscribe For ₹${product.subPrice}/mo` 
                      : `Buy Now For ₹${product.oneTimePrice}`
                    }
                  </a>
                </div>

              </SectionReveal>
            );
          })}
        </div>

        {/* Brand Promises Bar */}
        <SectionReveal
          direction="up"
          delay={0.2}
          className="mt-16 bg-[#f6f4ee] border border-gray-200/50 rounded-3xl p-6 flex flex-wrap gap-8 justify-around text-center"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🩺</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">Vet-Formulated & Approved</div>
              <div className="text-[10px] text-[#6e7d75]">Expertly blended by veterinary scientists</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">365-Day Guarantee</div>
              <div className="text-[10px] text-[#6e7d75]">Don't notice results? Get your money back</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">100% Safe & Clean</div>
              <div className="text-[10px] text-[#6e7d75]">Xylitol-free, chemical-free ingredients</div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
