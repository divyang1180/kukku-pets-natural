"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";
import { ShieldAlert, Heart, Star, Sparkles } from "lucide-react";

export default function VetEndorsement() {
  const vets = [
    {
      name: "Dr. Shalini Mehta, DVM",
      role: "Veterinary Dentist & Consultant",
      location: "Mumbai",
      quote: "Kukku Pets Dental Additive is a highly effective way for pet parents to manage daily plaque. The combination of neem and green tea natural catechins target oral micro-flora, inhibiting structural plaque consolidate before it hardens. It's completely tasteless, making it perfect for fussy pets.",
      avatar: "👩‍⚕️",
      accentBg: "bg-[#f0f5f1]",
      borderColor: "border-[#86b09c]/25",
    },
    {
      name: "Dr. Rohan Das, MVSc",
      role: "Small Animal Specialist",
      location: "Bengaluru",
      quote: "Daily dental care is the most overlooked part of dog health. Brushing is often too stressful for both owners and dogs. I recommend this water additive because it leverages a dog's natural hydration habit. It contains zero alcohol or xylitol, making it 100% safe for daily, long-term use.",
      avatar: "👨‍⚕️",
      accentBg: "bg-amber-50/50",
      borderColor: "border-amber-100",
    },
    {
      name: "Dr. Ananya Sen, DVM",
      role: "Holistic Pet Care Expert",
      location: "New Delhi",
      quote: "What I love about Kukku Pets is their clean formulation philosophy. They've blended traditional Ayurvedic herbs like neem and aloe vera with modern organic zinc mineral science. My patients have shown noticeable breath freshness improvements inside 2-3 weeks of consistent daily usage.",
      avatar: "👩‍⚕️",
      accentBg: "bg-red-50/30",
      borderColor: "border-red-100",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24" id="vets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
            🩺 Vet Approved
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111e17] leading-tight mb-4">
            We're Loved by Vets Too
          </h2>
          <p className="font-body text-base md:text-lg text-[#3a4740] leading-relaxed">
            Formulated, approved, and recommended by leading veterinary surgeons and pet dental hygiene specialists.
          </p>
        </SectionReveal>

        {/* Vets Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {vets.map((vet, idx) => (
            <SectionReveal
              key={vet.name}
              direction="up"
              delay={idx * 0.05}
              className={`bg-[#fdfbf7] border ${vet.borderColor} rounded-3xl p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-shadow`}
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-0.5 mb-6 text-[#f5a623]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#f5a623]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm text-[#3a4740] leading-relaxed italic mb-8 relative">
                  “{vet.quote}”
                </blockquote>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 border-t border-gray-150/70 pt-6">
                <div className={`w-12 h-12 rounded-full ${vet.accentBg} flex items-center justify-center text-2xl shadow-inner border border-gray-100`}>
                  {vet.avatar}
                </div>
                <div className="text-left">
                  <div className="font-heading text-sm font-extrabold text-[#111e17] leading-none mb-1">
                    {vet.name}
                  </div>
                  <div className="text-[10px] text-[#0b4f35] font-black uppercase tracking-wider leading-none mb-0.5">
                    {vet.role}
                  </div>
                  <div className="text-[10px] text-[#6e7d75] leading-none">
                    {vet.location}, India
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Safety Callout Banner */}
        <SectionReveal
          direction="up"
          delay={0.2}
          className="mt-16 bg-[#f0f5f1] border border-[#86b09c]/25 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm"
        >
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#86b09c]/20 flex items-center justify-center shrink-0 shadow-sm text-3xl">
            🛡️
          </div>
          <div className="text-left">
            <h4 className="font-heading text-base font-extrabold text-[#013220] mb-1">
              Safety & Regulatory Guidelines Standardized
            </h4>
            <p className="font-body text-xs text-[#3a4740] leading-relaxed">
              All Kukku Pets formulas are made in state-of-the-art facilities complying with strict FSSAI guidelines, ISO 9001, and Good Manufacturing Practice (GMP) certifications. They are entirely free of chemical insecticides, synthetic alcohol, and toxic parabens.
            </p>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
