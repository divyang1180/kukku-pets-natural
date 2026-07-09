"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

export default function WhyChooseUs() {
  const cards = [
    {
      emoji: "🌿",
      title: "Natural Ingredients",
      desc: "Formulated with green tea, mint, and botanical extract blends — completely free of harsh synthetics.",
    },
    {
      emoji: "☀️",
      title: "Easy Daily Use",
      desc: "No brushing battles. Simply add to drinking water and let standard hydration support daily hygiene.",
    },
    {
      emoji: "🦷",
      title: "Supports Teeth Hygiene",
      desc: "Helps maintain oral hygiene every day.",
    },
    {
      emoji: "✨",
      title: "Helps Reduce Plaque",
      desc: "Active natural compound binds target bacterial elements to inhibit plaque accumulation.",
    },
    {
      emoji: "😮‍💨",
      title: "Fresh Breath",
      desc: "Directly combats odor-causing bacteria in the mouth to maintain pleasant, kissable dog breath.",
    },
    {
      emoji: "❤️",
      title: "Loved by Pet Parents",
      desc: "Adopted by 50,000+ satisfied pet families who trust our quality standards for dog wellness.",
    },
    {
      emoji: "🛡️",
      title: "Safe Pet Formula",
      desc: "Xylitol-free, alcohol-free, paraben-free, and chemical color-free for ultimate pet safety.",
    },
    {
      emoji: "🩺",
      title: "Veterinary Inspired",
      desc: "Created using vet dentist recommendations and peer-reviewed dental scientific guidelines.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-24" id="features">
      {/* Background Blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            💚 Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            The Kukku Pets Difference
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            We prioritize safety, convenience, and efficacy to keep your dog's tail wagging and smile glowing.
          </p>
        </SectionReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <SectionReveal
              key={card.title}
              direction="up"
              delay={i * 0.05}
              className="bg-background rounded-3xl p-6 md:p-7 border border-gray-200/50 hover:border-primary/20 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col"
            >
              {/* Card Emoji Icon */}
              <span className="text-4xl mb-6 block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {card.emoji}
              </span>

              {/* Text details */}
              <h3 className="font-heading font-bold text-dark text-lg mb-2">
                {card.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed flex-grow">
                {card.desc}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
