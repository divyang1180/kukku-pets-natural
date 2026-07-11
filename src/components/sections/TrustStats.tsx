"use client";

import React from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import SectionReveal from "../ui/SectionReveal";
import { ThumbsUp, Heart, Sparkles, Smile } from "lucide-react";

export default function TrustStats() {
  const stats = [
    {
      value: 94,
      suffix: "%",
      label: "Loved by Pets",
      desc: "of pets love the taste of their Kukku Pets daily supplements.",
      icon: <Smile className="text-[#0b4f35] w-6 h-6" />,
      bgColor: "bg-[#f0f5f1]/40",
      borderColor: "border-[#86b09c]/20",
    },
    {
      value: 96,
      suffix: "%",
      label: "Highly Recommended",
      desc: "of pet owners would actively recommend our products to a friend.",
      icon: <ThumbsUp className="text-[#0b4f35] w-6 h-6" />,
      bgColor: "bg-amber-50/30",
      borderColor: "border-amber-100",
    },
    {
      value: 91,
      suffix: "%",
      label: "Visible Results",
      desc: "notice visible results in breath freshness & plaque within 6 weeks.",
      icon: <Heart className="text-[#0b4f35] w-6 h-6" />,
      bgColor: "bg-red-50/20",
      borderColor: "border-red-100",
    },
    {
      value: 365,
      suffix: " Day",
      label: "Satisfaction Promise",
      desc: "Money-back guarantee. If your dog isn't happy, we'll refund you.",
      icon: <Sparkles className="text-[#f5a623] w-6 h-6" />,
      bgColor: "bg-[#f6f4ee]",
      borderColor: "border-gray-200/50",
    },
  ];

  return (
    <section className="bg-[#f6f4ee] py-16 md:py-24" id="trust-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
            📊 Verified Results
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111e17] leading-tight mb-4">
            Trusted By Over 50,000+ Pet Owners
          </h2>
          <p className="font-body text-base md:text-lg text-[#3a4740] leading-relaxed">
            We hold ourselves to the highest efficacy and testing standards. Here is how our natural products perform in real homes.
          </p>
        </SectionReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <SectionReveal
              key={stat.label}
              direction="up"
              delay={i * 0.05}
              className={`flex flex-col p-8 rounded-3xl border ${stat.borderColor} ${stat.bgColor} justify-between shadow-sm hover:shadow-md transition-shadow bg-white`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-6">
                  {stat.icon}
                </div>
                <div className="font-heading text-4xl md:text-5xl font-extrabold text-[#111e17] leading-none mb-2 flex items-baseline">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="font-heading text-base font-extrabold text-[#111e17] mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="font-body text-xs text-[#3a4740] leading-relaxed mt-2 border-t border-gray-100 pt-4">
                {stat.desc}
              </p>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
