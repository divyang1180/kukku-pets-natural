"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "How do I use Kukku Pets Natural?",
      a: "Simply add one capful of Kukku Pets Natural directly into your dog's drinking water bowl each time you fill or refresh it. Our tasteless, odorless formula dissolves instantly so your dog drinks normally.",
    },
    {
      q: "How often should I use it?",
      a: "Use it daily! Consistent daily intake is key to supporting oral hygiene, as active ingredients work continually with every sip to inhibit bacterial plaque formation on teeth and gums.",
    },
    {
      q: "Is it safe for my dog?",
      a: "Absolutely. Kukku Pets Natural is made with 100% safe botanical extracts. It is free from xylitol, alcohol, parabens, and synthetic colors. It is entirely safe for regular daily consumption.",
    },
    {
      q: "Can puppies use it?",
      a: "Yes! It is safe for puppies over 6 months old. For younger puppies under 6 months, we recommend consulting your veterinarian first before introducing any water additives.",
    },
    {
      q: "Does this replace tooth brushing?",
      a: "No. While Kukku Pets Natural provides excellent daily maintenance and freshens breath, experts agree it does not replace the mechanical action of regular brushing or professional veterinary cleaning. Think of it as a daily supplement to your dog's oral care routine.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-24" id="faq">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            ❓ FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            Have questions about Kukku Pets Natural? Find clear, expert answers below.
          </p>
        </SectionReveal>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {questions.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <SectionReveal
                key={i}
                direction="up"
                delay={i * 0.05}
                className="bg-background rounded-2xl border border-gray-200/50 overflow-hidden hover:border-primary/20 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 focus:outline-none select-none group"
                >
                  <span className="font-heading font-bold text-dark text-base md:text-lg group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-gray-100 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-6 text-gray-500 font-body text-sm leading-relaxed border-t border-gray-100/50 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
