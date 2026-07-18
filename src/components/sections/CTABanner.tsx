"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001f14] via-[#013220] to-[#0b4f35] py-16 md:py-24 text-center px-4">
      {/* Decorative blobs */}
      <div className="absolute -top-8 -right-8 text-[140px] opacity-[0.06] select-none pointer-events-none leading-none">🐾</div>
      <div className="absolute -bottom-6 -left-6 text-[110px] opacity-[0.08] select-none pointer-events-none leading-none">🌿</div>

      <SectionReveal className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready for Fresher Breath &amp; Healthier Teeth?
        </h2>
        <p className="font-body text-base sm:text-lg text-white/75 mb-8 max-w-lg mx-auto leading-relaxed">
          Be among the first Indian pet families to try Kukku Pets Natural — launching soon with founding member perks.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#f6f4ee] text-[#013220] text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Contact Us 📬
          </a>
          <a
            href="https://wa.me/918160526176"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
