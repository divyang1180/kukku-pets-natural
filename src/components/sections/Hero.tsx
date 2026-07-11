"use client";

import React from "react";
import { Star, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tickerItems = [
    { label: "FREE SHIPPING IN INDIA", icon: "🚚" },
    { label: "LOVED BY 50,000+ PETS", icon: "🐶" },
    { label: "365-DAY MONEY BACK PROMISE", icon: "🛡️" },
    { label: "100% NATURAL INGREDIENTS", icon: "🌿" },
    { label: "VET APPROVED & RECOMMENDED", icon: "🩺" },
    { label: "MADE IN INDIA", icon: "🇮🇳" },
  ];

  return (
    <section className="bg-white pt-10 md:pt-16 pb-0 overflow-hidden relative animate-fade-in" id="home" style={{ padding: "4rem 0 0" }}>
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(134,176,156,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Trustpilot-style reviews rating */}
            <div className="inline-flex items-center gap-2 bg-[#f6f4ee] px-4 py-1.5 rounded-full border border-gray-200/50 mb-6 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f5a623] text-[#f5a623]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#111e17]">
                Rated Excellent 4.9 <span className="text-[#6e7d75] font-normal">(5,000+ reviews)</span>
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111e17] leading-[1.1] tracking-tight mb-5">
              Join Over <span className="text-[#0b4f35]">50,000+ Happy</span> Indian Pet Families
            </h1>

            <p className="font-body text-base md:text-lg text-[#3a4740] leading-relaxed mb-8 max-w-2xl">
              Tasty, vet-formulated dental supplements made locally with natural Ayurvedic herbs. 
              Say goodbye to plaque, bad breath, and brushing battles — just add to their daily water bowl!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <a
                href="#product-range"
                onClick={(e) => handleScroll(e, "#product-range")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white text-base font-extrabold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Shop Best Sellers <ArrowRight size={18} />
              </a>
              <a
                href="#quiz-section"
                onClick={(e) => handleScroll(e, "#quiz-section")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#013220] text-[#013220] hover:bg-[#f0f5f1] text-base font-extrabold tracking-wider uppercase transition-all duration-300"
              >
                🧬 Take Pet Health Quiz
              </a>
            </div>

            {/* Sub-benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="text-[#0b4f35] shrink-0" size={20} />
                <span className="text-xs font-bold text-[#3a4740]">100% Tasteless & Safe</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Heart className="text-[#0b4f35] shrink-0" size={20} />
                <span className="text-xs font-bold text-[#3a4740]">Zero Brushing Stress</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-[#f5a623] shrink-0" size={20} />
                <span className="text-xs font-bold text-[#3a4740]">365-Day Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dog Image and Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md w-full">
              <img
                src="/images/hero-dog.png"
                alt="Happy healthy dog using Kukku Pets Natural"
                className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border-4 border-[#fdfbf7]"
              />

              {/* Floating Badge Left */}
              <div className="absolute top-[20%] -left-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-3.5 hidden sm:flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
                <span className="text-2xl">🌿</span>
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#6e7d75]">Ingredients</div>
                  <div className="text-xs font-black text-[#111e17]">100% Natural Herbs</div>
                </div>
              </div>

              {/* Floating Badge Right */}
              <div className="absolute bottom-[20%] -right-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-3.5 hidden sm:flex items-center gap-3 animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}>
                <span className="text-2xl">✨</span>
                <div className="text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#6e7d75]">Results</div>
                  <div className="text-xs font-black text-[#111e17]">Fresh Breath in 14 Days</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Marquee Ticker */}
      <div className="w-full overflow-hidden bg-[#013220] py-3.5 text-white border-y border-[#86b09c]/10 mt-16">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-bold text-xs uppercase tracking-widest">
          {/* First Copy */}
          <div className="flex items-center gap-12 shrink-0">
            {tickerItems.map((item, index) => (
              <span key={`ticker-1-${index}`} className="flex items-center gap-2">
                <span>{item.icon}</span> {item.label}
              </span>
            ))}
          </div>
          {/* Second Copy for seamless scrolling */}
          <div className="flex items-center gap-12 shrink-0">
            {tickerItems.map((item, index) => (
              <span key={`ticker-2-${index}`} className="flex items-center gap-2">
                <span>{item.icon}</span> {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
