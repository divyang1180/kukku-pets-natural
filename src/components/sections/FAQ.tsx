"use client";

import React, { useState } from "react";
import SectionReveal from "../ui/SectionReveal";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "When will I see results in my dog?",
      a: (
        <div className="font-body text-sm text-[#3a4740] space-y-4">
          <p>Dental hygiene results are cumulative and work best as a daily habit. Here is what you can expect:</p>
          <div className="border-l-2 border-[#0b4f35] pl-4 space-y-3">
            <div>
              <strong className="text-[#013220] block text-xs uppercase font-extrabold tracking-wide">Weeks 0–2: Bacterial Clearout</strong>
              <p className="text-xs">Mouth bacteria decreases. Bad breath begins to fade, yielding noticeably fresher kisses.</p>
            </div>
            <div>
              <strong className="text-[#013220] block text-xs uppercase font-extrabold tracking-wide">Weeks 2–4: Gum Relief</strong>
              <p className="text-xs">Sensitive gum borders soothe. Inflammation and redness start to decline.</p>
            </div>
            <div>
              <strong className="text-[#013220] block text-xs uppercase font-extrabold tracking-wide">Weeks 4–6+: Plaque Slowdown</strong>
              <p className="text-xs">Structural plaque consolidation slows. Tartar buildup is visibly reduced, resulting in cleaner teeth.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      q: "Will my pet actually drink this? What if they are fussy?",
      a: (
        <div className="font-body text-sm text-[#3a4740]">
          <p className="mb-2">Yes, they absolutely will! <strong>Kukku Pets Natural is 100% tasteless, odorless, and colorless</strong>.</p>
          <p className="text-xs">Unlike chemical mouthwashes, our formula does not alter the taste, smell, or texture of your dog's drinking water. Even the pickiest dogs who reject standard dental products drink their water normally and reap all the benefits.</p>
        </div>
      ),
    },
    {
      q: "How many capfuls should I give my pet daily?",
      a: (
        <div className="font-body text-sm text-[#3a4740] space-y-3">
          <p>Dosing is simple and based on your dog's weight. Add the following amount to their fresh water bowl once daily:</p>
          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <table className="min-w-full divide-y divide-gray-200 text-xs">
              <thead className="bg-[#f6f4ee]">
                <tr>
                  <th className="px-4 py-2 text-left font-extrabold text-[#111e17]">Dog's Weight</th>
                  <th className="px-4 py-2 text-left font-extrabold text-[#111e17]">Daily Dosage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-2 font-semibold">Under 5 kg (Puppy / Toy Breed)</td>
                  <td className="px-4 py-2">1/2 Capful (5ml)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">5 kg – 15 kg (Medium Breed)</td>
                  <td className="px-4 py-2">1 Capful (10ml)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Over 15 kg (Large / Giant Breed)</td>
                  <td className="px-4 py-2">1.5 to 2 Capfuls (15ml - 20ml)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      q: "Is the formula vet-approved and safe?",
      a: (
        <div className="font-body text-sm text-[#3a4740]">
          <p className="mb-2">Yes. Our formulation is vet-approved and designed using veterinary dentist guidelines. It is completely safe for daily use.</p>
          <p className="text-xs">Unlike human toothpastes or cheap pet mouthwashes, we contain <strong>zero alcohol, zero parabens, and absolutely zero xylitol</strong> (which is toxic to dogs). We use only non-toxic, pet-safe Ayurvedic botanicals and organic minerals.</p>
        </div>
      ),
    },
    {
      q: "How does the RepeatCare subscription work?",
      a: (
        <div className="font-body text-sm text-[#3a4740] space-y-2">
          <p>RepeatCare is our hassle-free subscription program designed to maintain consistency in your pet's health routine:</p>
          <ul className="list-disc pl-4 text-xs space-y-1">
            <li>Save an extra 20% on every order.</li>
            <li>Get FREE shipping automatically on all deliveries.</li>
            <li>Receive a mystery free gift with your first order.</li>
            <li>Cancel, pause, or change shipment frequency anytime with 1-click.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 scroll-mt-20 border-t border-gray-150" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
            ❓ FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111e17] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-sm md:text-base text-[#3a4740] leading-relaxed">
            Everything you need to know about our natural dental formulas, shipping, and subscription care.
          </p>
        </SectionReveal>

        {/* Accordion FAQ List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <SectionReveal
                key={index}
                direction="up"
                delay={index * 0.04}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-[#013220] bg-[#fdfbf7] shadow-md" 
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-extrabold text-sm md:text-base text-[#111e17] pr-4 flex items-center gap-3">
                    <HelpCircle size={18} className={`${isOpen ? "text-[#0b4f35]" : "text-[#6e7d75]"} shrink-0`} />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#0b4f35] shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-gray-150/70" : "max-h-0 pointer-events-none"
                  }`}
                >
                  <div className="p-5 md:p-6 bg-white rounded-b-2xl">
                    {faq.a}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
