"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "../ui/SectionReveal";

export default function Ingredients() {
  const ingredients = [
    {
      emoji: "🍵",
      name: "Green Tea Extract",
      desc: "Rich in natural catechins that target oral bacterial strains, assisting in the control of early plaque and bad odors.",
    },
    {
      emoji: "🪴",
      name: "Aloe Vera Extract",
      desc: "Offers natural soothing properties that care for sensitive gum borders and support soft mouth tissues.",
    },
    {
      emoji: "🌿",
      name: "Natural Mint",
      desc: "Acts as a fresh, organic odor neutralizer, providing crisp breath without artificial fragrance oils.",
    },
    {
      emoji: "⚡",
      name: "Zinc Gluconate",
      desc: "An essential organic mineral compound that binds salivary calcium to slow down structural plaque consolidation.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden scroll-mt-24" id="ingredients">
      {/* Background shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            🧪 Ingredients
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            Powered by Pure Nature
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            No chemicals, no artificial fillers. We combine nature's best botanicals to create a clean, safe daily dental formula.
          </p>
        </SectionReveal>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {ingredients.map((item, i) => (
            <SectionReveal
              key={item.name}
              direction="up"
              delay={i * 0.1}
              className="flip-card h-[240px] md:h-[260px] rounded-3xl cursor-pointer group"
            >
              <div className="flip-card-inner w-full h-full relative shadow-card rounded-3xl">
                {/* FRONT SIDE */}
                <div className="flip-card-front absolute inset-0 bg-white rounded-3xl p-8 flex flex-col items-center justify-center border border-gray-200/50 group-hover:border-primary/20 transition-all duration-300">
                  {/* Floating leaf element */}
                  <span className="absolute top-3 right-4 text-xl opacity-20 animate-[float-slow_6s_infinite]">
                    🍃
                  </span>

                  {/* Emoji */}
                  <span className="text-4xl md:text-5xl mb-4 block transition-transform duration-300 group-hover:scale-110">
                    {item.emoji}
                  </span>

                  {/* Name */}
                  <h3 className="font-heading font-extrabold text-dark text-lg text-center mb-1">
                    {item.name}
                  </h3>

                  <span className="text-[10px] text-gray-400 font-accent font-bold uppercase tracking-wider mt-2 group-hover:text-primary transition-colors">
                    Hover to learn 🔄
                  </span>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 flex flex-col items-center justify-center text-white text-center">
                  <p className="font-body text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="text-xl">🌿</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Ingredient Image banner below */}
        <div className="flex justify-center w-full">
          <SectionReveal direction="up" delay={0.4} className="mt-14 md:mt-16 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl aspect-[16/9] relative border border-gray-200/40">
            <Image
              src="/images/ingredients.png"
              alt="Natural botanical pet ingredients layout"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
