"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

const reasons = [
  { icon: "🌿", title: "Pure Herbal Formula", desc: "Neem, green tea, aloe vera, and mint — India's most trusted botanicals, formulated for daily pet oral care." },
  { icon: "☀️", title: "10-Second Daily Routine", desc: "No brushing battles. No stress. Just add to water and let your dog's natural hydration habit do the work." },
  { icon: "🛡️", title: "Zero Harmful Ingredients", desc: "Xylitol-free, alcohol-free, paraben-free, and chemical colour-free. Designed for safe daily use, every single day." },
  { icon: "🩺", title: "Vet-Inspired Formula", desc: "Developed using veterinary dentist recommendations and peer-reviewed dental science guidelines for pets." },
  { icon: "🇮🇳", title: "Made in India", desc: "India-made, India-tested, India-priced. We understand Indian dogs, Indian climates, and Indian pet parents." },
  { icon: "💚", title: "Community Trusted", desc: "Pet parents across India trust Kukku Pets Natural for their dog's daily oral health routine." },
  { icon: "💧", title: "Tasteless & Odorless", desc: "Even the pickiest dogs won't notice a difference in their water — they just drink, and benefit from every sip." },
  { icon: "✨", title: "Launching Soon", desc: "We are putting the finishing touches on our formulas. Join our notification list for exclusive early access." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fdfbf7] py-14 md:py-20" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#0b4f35] mb-2">Why Kukku</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111e17] mb-3">
            The Kukku Pets Difference
          </h2>
          <p className="font-body text-sm md:text-base text-[#3a4740] max-w-xl">
            We build everything around one goal: the simplest, safest, most effective daily dental care for Indian dogs.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reasons.map((r, idx) => (
            <SectionReveal
              key={r.title}
              direction="up"
              delay={idx * 0.04}
              className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 hover:shadow-md hover:border-[#86b09c]/40 transition-all duration-200"
            >
              <div className="text-2xl md:text-3xl mb-3">{r.icon}</div>
              <h3 className="font-heading text-sm font-extrabold text-[#111e17] mb-1">{r.title}</h3>
              <p className="font-body text-xs text-[#3a4740] leading-relaxed">{r.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
