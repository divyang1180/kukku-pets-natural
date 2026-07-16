"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

const problems = [
  {
    icon: "😮‍💨",
    title: "Bad breath",
    desc: "Fix what bacteria fix in the mouth, naturally.",
    color: "bg-[#fff8f0]",
    border: "border-[#f5a623]/20",
  },
  {
    icon: "🦟",
    title: "Ticks & fleas",
    desc: "Herbal defence for monsoon season.",
    color: "bg-[#f0f8f4]",
    border: "border-[#86b09c]/20",
  },
  {
    icon: "🐾",
    title: "Itchy skin",
    desc: "Oatmeal & aloe calm for coats and paws.",
    color: "bg-[#f0f8f4]",
    border: "border-[#86b09c]/20",
  },
  {
    icon: "🦴",
    title: "Stiff joints",
    desc: "Turmeric support for seniors & big breeds.",
    color: "bg-[#f0f8f4]",
    border: "border-[#86b09c]/20",
  },
];

const steps = [
  {
    num: "1",
    title: "Fill the bowl",
    desc: "Fresh drinking water, the way when every morning.",
    color: "bg-[#f5a623]",
  },
  {
    num: "2",
    title: "Add one capful",
    desc: "Measure with the tiny pour. About Tasteless and odourless.",
    color: "bg-[#f5a623]",
  },
  {
    num: "3",
    title: "Let them drink",
    desc: "Fresher breath in 2 weeks. Visible plaque improvement by week 6.",
    color: "bg-[#f5a623]",
  },
];

export default function ShopByProblem() {
  return (
    <>
      {/* Shop by Problem */}
      <section className="bg-[#eef4ef] py-14 md:py-20" id="shop-by-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#111e17] mb-2">
              Shop by problem
            </h2>
            <p className="font-body text-sm text-[#3a4740]">
              Tell us what&apos;s bothering your dog — we&apos;ll show you what helps.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {problems.map((p, idx) => (
              <SectionReveal
                key={p.title}
                direction="up"
                delay={idx * 0.05}
                className={`${p.color} border ${p.border} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all duration-200 group`}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="font-heading text-sm font-extrabold text-[#0b4f35] mb-1 group-hover:underline">
                  {p.title}
                </h3>
                <p className="font-body text-[11px] text-[#3a4740] leading-relaxed">
                  {p.desc}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ten Seconds Routine */}
      <section className="bg-white py-14 md:py-20" id="routine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#111e17] mb-2">
              Ten seconds a day. That&apos;s the routine.
            </h2>
            <p className="font-body text-sm text-[#3a4740]">
              No brushing. No wrestling. No drama.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, idx) => (
              <SectionReveal
                key={step.title}
                direction="up"
                delay={idx * 0.07}
                className="bg-[#f6f4ee] border border-gray-200/50 rounded-2xl p-5 flex flex-col gap-3"
              >
                <div
                  className={`w-7 h-7 rounded-full ${step.color} text-white text-xs font-black flex items-center justify-center shrink-0`}
                >
                  {step.num}
                </div>
                <h3 className="font-heading text-sm font-extrabold text-[#111e17]">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-[#3a4740] leading-relaxed">
                  {step.desc}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* We are new Banner */}
      <section className="bg-white py-4 pb-14" id="founding-member">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="bg-[#f6f4ee] border border-gray-200/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
              <span className="text-4xl shrink-0">🌱</span>
              <div className="flex-1">
                <h3 className="font-heading text-lg md:text-xl font-extrabold text-[#111e17] mb-2">
                  We&apos;re new — and we won&apos;t pretend otherwise.
                </h3>
                <p className="font-body text-sm text-[#3a4740] leading-relaxed max-w-2xl">
                  Kukku is a young Indian brand with one conviction: the herbs our families have trusted for
                  generations belong in modern pet care. We&apos;re launching small, honest, and transparent.{" "}
                  <strong className="text-[#0b4f35]">Our first customers become founding members</strong>
                  {" "}and get 20% off every order for life.
                </p>
              </div>
              <a
                href="https://wa.me/918160526176?text=Hi!+I+want+to+become+a+founding+member+of+Kukku+Pets+Natural."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white text-sm font-extrabold tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
              >
                Become a founding member
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
