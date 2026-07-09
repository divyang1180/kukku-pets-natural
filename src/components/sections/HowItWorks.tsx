"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      emoji: "🥄",
      title: "Measure & Pour",
      desc: "Add one capful of Kukku Pets Natural directly into your dog's fresh drinking water bowl.",
    },
    {
      step: 2,
      emoji: "💧",
      title: "Drink Normally",
      desc: "Your dog drinks their water just like usual. The tasteless formula is completely unnoticeable.",
    },
    {
      step: 3,
      emoji: "✨",
      title: "Active Release",
      desc: "With each sip, natural enzymes coat teeth and gums, fighting odor-causing bacteria.",
    },
    {
      step: 4,
      emoji: "😁",
      title: "Brighter Smile",
      desc: "Supports cleaner teeth and healthy gums as part of a regular daily dental hygiene routine.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden scroll-mt-24" id="how-it-works">
      {/* Background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            🔄 How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            Four Simple Steps to Daily Care
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            Supporting your dog's oral health takes less than ten seconds a day. Here is how it works.
          </p>
        </SectionReveal>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[31px] left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-primary via-secondary to-primary/40 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <React.Fragment key={step.step}>
                <SectionReveal
                  direction="up"
                  delay={i * 0.15}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-heading font-extrabold flex items-center justify-center text-xl shadow-glow-primary border-4 border-white mb-6 transition-transform duration-300 group-hover:scale-110">
                    {step.step}
                  </div>

                  {/* Step Icon */}
                  <span className="text-4xl mb-4 block animate-[bounce-soft_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.5}s` }}>
                    {step.emoji}
                  </span>

                  {/* Step Text */}
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>

                  {/* Arrow Indicator between steps (for desktop grid) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[22px] -right-[10%] translate-x-1/2 -z-10 text-secondary animate-[wiggle_1.5s_infinite]">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </SectionReveal>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
