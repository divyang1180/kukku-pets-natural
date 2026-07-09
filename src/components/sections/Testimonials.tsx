"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      stars: 5,
      text: "Max's breath was terrible. After 2 weeks of using Kukku Pets Natural in his bowl, the bad smell is completely gone. I can finally enjoy doggy kisses again!",
      author: "Sarah M.",
      pet: "Golden Retriever Mom 🐕",
    },
    {
      stars: 5,
      text: "As a practicing veterinarian, I recommend water additives to my clients. Kukku Pets Natural contains tested natural botanicals that safely inhibit plaque bacteria between brushings.",
      author: "Dr. James P.",
      pet: "Veterinarian, 12+ Yrs",
    },
    {
      stars: 5,
      text: "No more toothbrush fights! My bulldog Buster won't tolerate brushing, but this tasteless liquid goes right in his bowl with zero issues. His gums look great.",
      author: "Emily R.",
      pet: "Bulldog Owner 🐶",
    },
    {
      stars: 5,
      text: "We were skeptical, but the results speak. Luna is a picky drinker, but she drinks water with Kukku Pets Natural without hesitation. Fresh breath is a huge plus!",
      author: "Mike T.",
      pet: "Husky Dad 🐺",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden scroll-mt-24" id="testimonials">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            💬 Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            Loved by Dogs & Their Humans
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            Read stories from pet parents and vet professionals who trust Kukku Pets Natural daily.
          </p>
        </SectionReveal>

        {/* Carousel Content */}
        <div className="relative max-w-3xl mx-auto min-h-[300px] md:min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-7 md:p-10 shadow-card border border-gray-100 flex flex-col items-center text-center relative w-full"
            >
              {/* Quote Mark background decorator */}
              <span className="absolute top-4 left-6 text-8xl text-primary/10 font-serif leading-none select-none pointer-events-none">
                “
              </span>

              {/* Stars rating */}
              <div className="flex gap-1 text-accent text-xl mb-6">
                {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic max-w-2xl">
                "{reviews[currentIndex].text}"
              </p>

              {/* Dog Avatar Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-md mb-3.5 relative">
                <Image
                  src="/images/testimonial-dogs.png"
                  alt="Customer dog profile picture"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Author info */}
              <h4 className="font-heading font-extrabold text-dark text-base">
                {reviews[currentIndex].author}
              </h4>
              <span className="font-accent text-xs text-gray-400 font-bold uppercase tracking-wider">
                {reviews[currentIndex].pet}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300 z-10 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300 z-10 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-primary" : "w-2.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
