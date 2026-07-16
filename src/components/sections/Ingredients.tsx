"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

const ingredients = [
  {
    icon: "🍵",
    title: "Green Tea Extract",
    desc: "Rich in natural catechins that target oral bacteria, assisting in early plaque control and neutralising bad breath at the source.",
    tag: "Antioxidant · Anti-bacterial",
    dark: false,
  },
  {
    icon: "🌿",
    title: "Neem Extract",
    desc: "India's most revered antibacterial herb, used for centuries in oral care. Fights the bacteria that cause plaque, tartar, and gum inflammation.",
    tag: "Ayurvedic · Anti-bacterial",
    dark: false,
  },
  {
    icon: "🪴",
    title: "Aloe Vera Extract",
    desc: "Natural soothing properties that care for sensitive gum borders and support soft mouth tissues. Gentle, calming, restorative.",
    tag: "Soothing · Anti-inflammatory",
    dark: false,
  },
  {
    icon: "🍃",
    title: "Natural Mint",
    desc: "An organic odour neutralizer that provides crisp breath freshness without artificial fragrance oils or chemicals.",
    tag: "Breath Freshener · Natural",
    dark: false,
  },
  {
    icon: "⚡",
    title: "Zinc Gluconate",
    desc: "An essential organic mineral compound that binds salivary calcium to slow down structural plaque consolidation and tartar build-up.",
    tag: "Anti-plaque · Mineral",
    dark: false,
  },
  {
    icon: "🛡️",
    title: "What We Never Use",
    desc: "Xylitol · Alcohol · Parabens · Artificial colours · Chemical fillers · Synthetic fragrances",
    tag: "Always Safe · Always Natural",
    dark: true,
  },
];

export default function Ingredients() {
  return (
    <section className="bg-[#f6f4ee] py-14 md:py-20" id="ingredients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#0b4f35] mb-2">Ingredients</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111e17] mb-3">
            Powered by Pure Nature
          </h2>
          <p className="font-body text-sm md:text-base text-[#3a4740] max-w-xl">
            No chemicals. No artificial fillers. Just India's most trusted botanical ingredients — working with your dog's natural biology.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ingredients.map((ing, idx) => (
            <SectionReveal
              key={ing.title}
              direction="up"
              delay={idx * 0.05}
              className={`rounded-2xl p-5 md:p-6 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                ing.dark
                  ? "bg-[#013220] border-[#013220] text-white"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="text-3xl mb-3">{ing.icon}</div>
              <h3 className={`font-heading text-sm md:text-base font-extrabold mb-2 ${ing.dark ? "text-white" : "text-[#111e17]"}`}>
                {ing.title}
              </h3>
              <p className={`font-body text-xs md:text-sm leading-relaxed mb-3 ${ing.dark ? "text-white/80" : "text-[#3a4740]"}`}>
                {ing.desc}
              </p>
              <span
                className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                  ing.dark
                    ? "bg-white/20 text-white"
                    : "bg-[#e8f3ed] text-[#0b4f35]"
                }`}
              >
                {ing.tag}
              </span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
