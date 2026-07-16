"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

const steps = [
  {
    num: "1",
    title: "Fill the Bowl",
    desc: "Start with fresh, clean drinking water in your dog's bowl — as you do every day.",
  },
  {
    num: "2",
    title: "Add a Capful",
    desc: "Measure one capful of Kukku Pets Natural and pour it into the water bowl. That's it.",
  },
  {
    num: "3",
    title: "Let Them Drink",
    desc: "Your dog drinks normally. The tasteless, odorless formula is completely unnoticeable to them.",
  },
  {
    num: "4",
    title: "See the Results",
    desc: "Within 2 weeks, notice fresher breath. By 4–6 weeks, cleaner teeth and healthier gums.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-14 md:py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#0b4f35] mb-2">
            How It Works
          </p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111e17] mb-3">
            Four Steps. Ten Seconds. Every Day.
          </h2>
          <p className="font-body text-sm md:text-base text-[#3a4740] max-w-xl">
            Supporting your dog's oral health has never been this simple.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <SectionReveal
              key={step.num}
              direction="up"
              delay={idx * 0.07}
              className="bg-[#f6f4ee] border border-gray-200/50 rounded-2xl p-5 md:p-6 flex flex-col gap-3 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#013220] text-white text-sm font-black flex items-center justify-center mx-auto">
                {step.num}
              </div>
              <h3 className="font-heading text-sm md:text-base font-extrabold text-[#111e17]">
                {step.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-[#3a4740] leading-relaxed">
                {step.desc}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
