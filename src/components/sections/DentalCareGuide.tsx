"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

const badRows = [
  { label: "Bad Breath Risk", pct: 85 },
  { label: "Plaque Accumulation", pct: 90 },
  { label: "Gum Irritation Risk", pct: 75 },
  { label: "Owner Stress (brushing)", pct: 80 },
];

const goodRows = [
  { label: "Fresh Breath", pct: 95 },
  { label: "Plaque Reduction", pct: 82 },
  { label: "Gum Wellness Support", pct: 88 },
  { label: "Zero Brushing Effort", pct: 100 },
];

export default function DentalCareGuide() {
  return (
    <section className="bg-white py-14 md:py-20" id="compare">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#0b4f35] mb-2">The Difference</p>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#111e17] mb-3">
            With Kukku vs Without Kukku
          </h2>
          <p className="font-body text-sm md:text-base text-[#3a4740] max-w-xl">
            See what daily use of Kukku Pets Natural means for your dog's oral health over time.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Bad Card */}
          <SectionReveal direction="left" className="bg-[#fff8f8] border-2 border-[#ffcdd2] rounded-2xl p-5 md:p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">😟</span>
              <h3 className="font-heading text-base md:text-lg font-extrabold text-[#111e17]">
                Without Kukku Pets Natural
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {badRows.map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs font-semibold text-[#3a4740] mb-1">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-[#ef9a9a] rounded-full transition-all duration-700"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Good Card */}
          <SectionReveal direction="right" className="bg-[#f1f8f1] border-2 border-[#c8e6c9] rounded-2xl p-5 md:p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">😄</span>
              <h3 className="font-heading text-base md:text-lg font-extrabold text-[#111e17]">
                With Kukku Pets Natural
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {goodRows.map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs font-semibold text-[#3a4740] mb-1">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-[#0b4f35] rounded-full transition-all duration-700"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Tip bar */}
        <SectionReveal direction="up" delay={0.1} className="mt-6 bg-[#e8f3ed] rounded-2xl p-5 flex items-start gap-4">
          <span className="text-2xl shrink-0">💡</span>
          <p className="font-body text-sm text-[#3a4740] leading-relaxed">
            <strong className="text-[#0b4f35]">Real results take 4–6 weeks.</strong> Oral health works best as a daily habit. Most Kukku pet parents notice fresher breath within 14 days, with visible plaque improvement at the 6-week mark. Consistency is everything.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
