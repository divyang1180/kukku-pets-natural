"use client";

import React from "react";
import { ArrowRight, Shield, HeartPulse } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";

export default function Categories() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categories = [
    {
      title: "Bad Breath",
      desc: "For smelly breath & mouth odour",
      emoji: "😮‍💨",
      bgColor: "bg-red-50/65 hover:bg-red-50",
      borderColor: "border-red-100",
      targetId: "#product-range",
    },
    {
      title: "Plaque & Tartar",
      desc: "For yellow plaque & hard build-up",
      emoji: "🦷",
      bgColor: "bg-amber-50/65 hover:bg-amber-50",
      borderColor: "border-amber-100",
      targetId: "#product-range",
    },
    {
      title: "Gum Care",
      desc: "For sensitive gum borders & redness",
      emoji: "🩸",
      bgColor: "bg-emerald-50/65 hover:bg-emerald-50",
      borderColor: "border-[#86b09c]/20",
      targetId: "#product-range",
    },
    {
      title: "Daily Prevention",
      desc: "For brush-free daily oral hygiene",
      emoji: "🛡️",
      bgColor: "bg-blue-50/65 hover:bg-blue-50",
      borderColor: "border-blue-100",
      targetId: "#product-range",
    },
  ];

  return (
    <section className="bg-[#fdfbf7] py-16 md:py-24" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-sm font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
            🧬 Target Pet Health
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111e17] leading-tight mb-4">
            Discover the Best Way to Care for Your Pet
          </h2>
          <p className="font-body text-base md:text-lg text-[#3a4740] leading-relaxed">
            We support multiple key areas of pet oral health. Choose a concern below to explore natural, targeted solutions.
          </p>
        </SectionReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {categories.map((cat, i) => (
            <SectionReveal
              key={cat.title}
              direction="up"
              delay={i * 0.05}
              className={`flex flex-col items-center text-center p-6 rounded-2xl border ${cat.borderColor} ${cat.bgColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer`}
            >
              <a 
                href={cat.targetId} 
                onClick={(e) => handleScroll(e, cat.targetId)}
                className="flex flex-col items-center h-full justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cat.emoji}
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-[#111e17] mb-2 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="font-body text-sm text-[#6e7d75] leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-black text-[#0b4f35] uppercase tracking-wider group-hover:underline">
                  Shop Now <ArrowRight size={12} />
                </span>
              </a>
            </SectionReveal>
          ))}
        </div>

        {/* Split Callout Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Founding Member */}
          <SectionReveal
            direction="left"
            className="rounded-3xl bg-[#013220] text-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-between items-start shadow-xl border border-white/5 group"
          >
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />
            
            <div className="mb-8 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌱</span>
                <span className="text-sm font-black uppercase tracking-widest text-[#86b09c]">Founding Members</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold mb-3 leading-tight">
                Be First. Get 20% Off For Life.
              </h3>
              <p className="font-body text-base text-[#f0f5f1]/80 leading-relaxed max-w-md">
                We&apos;re just launching. Our first customers become founding members — 20% off every order, for life.
              </p>
            </div>

            <a
              href="https://wa.me/919558744805?text=Hi!+I+want+to+become+a+founding+member+of+Kukku+Pets+Natural."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#f6f4ee] text-[#013220] font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-md group-hover:translate-x-1"
            >
              Become a Founding Member <ArrowRight size={14} />
            </a>
          </SectionReveal>

          {/* Card 2: Save Big */}
          <SectionReveal
            direction="right"
            className="rounded-3xl bg-[#f6f4ee] border border-gray-200/50 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between items-start shadow-xl group"
          >
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[radial-gradient(circle,rgba(11,79,53,0.04)_0%,transparent_70%)] pointer-events-none rounded-full" />
            
            <div className="mb-8 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e6ece8] text-[#0b4f35] rounded-full text-xs font-black uppercase tracking-widest mb-4">
                🔥 Hot Deal
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-[#111e17] mb-3 leading-tight">
                Save Big on Our Full Product Range
              </h3>
              <p className="font-body text-base text-[#3a4740] leading-relaxed max-w-md">
                Build your pet's perfect care routine and save up to 20% + receive free gifts when you subscribe.
              </p>
            </div>

            <a
              href="#product-range"
              onClick={(e) => handleScroll(e, "#product-range")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-md group-hover:translate-x-1"
            >
              Shop All Products <ArrowRight size={14} />
            </a>
          </SectionReveal>

        </div>

      </div>
    </section>
  );
}
