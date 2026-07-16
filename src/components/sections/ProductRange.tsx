"use client";

import React, { useState, useEffect } from "react";
import SectionReveal from "../ui/SectionReveal";

interface Product {
  id: string;
  title: string;
  tags: string[];
  status: "launching" | "coming";
  ctaType: "reserve" | "notify";
  image: string;
  filterTags: string[];
}

const ALL_FILTERS = [
  "All",
  "Best sellers",
  "Oral care",
  "Grooming",
  "Supplements",
  "Bad breath",
  "Plaque & tartar",
  "Ticks & fleas",
  "Itchy skin",
  "Joints",
  "Calm",
];

const products: Product[] = [
  {
    id: "dental-additive",
    title: "Herbal Dental Water Additive 250ml",
    tags: ["Bad breath", "Plaque & tartar"],
    status: "launching",
    ctaType: "reserve",
    image: "/images/product-bottle.png",
    filterTags: ["Best sellers", "Oral care", "Bad breath", "Plaque & tartar"],
  },
  {
    id: "dental-wipes",
    title: "Herbal Dental Wipes (100 pcs)",
    tags: ["Bad breath", "Plaque & tartar"],
    status: "launching",
    ctaType: "reserve",
    image: "/images/product-bottle.png",
    filterTags: ["Best sellers", "Oral care", "Bad breath", "Plaque & tartar"],
  },
  {
    id: "fresh-breath-duo",
    title: "Fresh Breath Duo (Additive + Wipes)",
    tags: ["Bad breath", "Plaque & tartar"],
    status: "launching",
    ctaType: "reserve",
    image: "/images/product-bottle.png",
    filterTags: ["Best sellers", "Oral care", "Bad breath", "Plaque & tartar"],
  },
  {
    id: "shampoo",
    title: "Oatmeal & Aloe Herbal Shampoo",
    tags: ["Itchy skin"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Grooming", "Itchy skin"],
  },
  {
    id: "tick-spray",
    title: "Herbal Tick & Flea Spray",
    tags: ["Ticks & fleas", "Itchy skin"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Ticks & fleas", "Itchy skin"],
  },
  {
    id: "paw-balm",
    title: "Neem Paw & Nose Balm",
    tags: ["Itchy skin"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Grooming", "Itchy skin"],
  },
  {
    id: "joint-support",
    title: "Turmeric Joint Support",
    tags: ["Joints"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Supplements", "Joints"],
  },
  {
    id: "calm-support",
    title: "Ashwagandha Calming Support",
    tags: ["Calm"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Supplements", "Calm"],
  },
  {
    id: "skin-coat",
    title: "Amla Skin & Coat Support",
    tags: ["Itchy skin"],
    status: "coming",
    ctaType: "notify",
    image: "/images/product-bottle.png",
    filterTags: ["Supplements", "Itchy skin"],
  },
];

export default function ProductRange() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Listen for filter changes dispatched from the Navbar dropdowns
  useEffect(() => {
    const handler = (e: Event) => {
      const filter = (e as CustomEvent<string>).detail;
      setActiveFilter(filter);
    };
    window.addEventListener("set-product-filter", handler);
    return () => window.removeEventListener("set-product-filter", handler);
  }, []);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.filterTags.includes(activeFilter));

  const getWhatsAppLink = (product: Product) => {
    const text = encodeURIComponent(
      `Hi! I would like to ${product.ctaType === "reserve" ? "reserve early access" : "be notified"} for "${product.title}". Please let me know when it launches!`
    );
    return `https://wa.me/918160526176?text=${text}`;
  };

  return (
    <section className="bg-[#fafaf7] py-16 md:py-24 scroll-mt-20" id="product-range">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-2">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111e17] leading-tight">
                Shop all products
              </h2>
              <p className="font-body text-sm text-[#3a4740] mt-1">
                Small batches, launched one at a time. Reserve what&apos;s launching now &mdash;{" "}
                <span className="text-[#0b4f35] font-semibold underline underline-offset-2 cursor-pointer">
                  get notified for what&apos;s next.
                </span>
              </p>
            </div>
            <span className="text-sm text-[#6e7d75] font-medium shrink-0">
              {filtered.length} products
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-5">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-[#013220] text-white border-[#013220]"
                    : "bg-white text-[#3a4740] border-gray-200 hover:border-[#013220] hover:text-[#013220]"
                }`}
              >
                {f === "Best sellers" && (
                  <span className="text-[#f5a623]">&#9733;</span>
                )}
                {f}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, idx) => (
            <SectionReveal
              key={product.id}
              direction="up"
              delay={idx * 0.04}
              className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Status Badge */}
              <div
                className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                  product.status === "launching"
                    ? "bg-[#f5a623] text-white"
                    : "bg-[#e8f3ed] text-[#0b4f35]"
                }`}
              >
                {product.status === "launching" ? "Launching First" : "Coming Next"}
              </div>

              {/* Product Image Area */}
              <div className="bg-[#f4f7f4] flex items-center justify-center h-44 pt-8 px-6 pb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="font-heading text-sm font-extrabold text-[#0b4f35] leading-snug">
                  {product.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f0f5f1] text-[#3a4740] text-[9px] font-bold px-2 py-0.5 rounded-md border border-[#86b09c]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#6e7d75]">
                    Coming Soon
                  </span>
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full transition-all duration-200 ${
                      product.ctaType === "reserve"
                        ? "bg-[#013220] text-white hover:bg-[#0b4f35]"
                        : "border border-[#013220] text-[#013220] hover:bg-[#f0f5f1]"
                    }`}
                  >
                    {product.ctaType === "reserve" ? "Reserve" : "Notify me"}
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Brand Promises Bar */}
        <SectionReveal
          direction="up"
          delay={0.2}
          className="mt-14 bg-[#f6f4ee] border border-gray-200/50 rounded-3xl p-6 flex flex-wrap gap-8 justify-around"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F9BA;</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">Vet-Formulated &amp; Approved</div>
              <div className="text-[10px] text-[#6e7d75]">Expertly blended by veterinary scientists</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F6E1;&#xFE0F;</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">365-Day Guarantee</div>
              <div className="text-[10px] text-[#6e7d75]">Don&apos;t notice results? Get your money back</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl">&#x1F331;</span>
            <div className="text-left">
              <div className="text-xs font-black text-[#111e17]">100% Safe &amp; Clean</div>
              <div className="text-[10px] text-[#6e7d75]">Xylitol-free, chemical-free ingredients</div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
