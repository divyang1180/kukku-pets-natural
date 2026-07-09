"use client";

import React, { useRef, useState, useEffect } from "react";
import SectionReveal from "../ui/SectionReveal";
import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  percentage: number;
  colorClass: string;
  trigger: boolean;
}

function ProgressBar({ label, percentage, colorClass, trigger }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-gray-700">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 w-full bg-gray-200/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={trigger ? { width: `${percentage}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
}

export default function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-24" id="benefits">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
            📊 The Difference
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            See the Kukku Pets Natural Effect
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            A clear comparison of oral health outcomes showing the benefits of adding daily dental additives.
          </p>
        </SectionReveal>

        {/* Comparison Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Card Left: WITHOUT */}
          <SectionReveal
            direction="left"
            className="bg-red-50/60 rounded-3xl p-6 md:p-8 border border-red-200/40 shadow-sm flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <X size={20} />
              </span>
              <h3 className="font-heading font-extrabold text-red-700 text-xl">
                Without Kukku Pets Natural
              </h3>
            </div>

            <p className="font-body text-gray-600 text-sm leading-relaxed">
              Standard drinking water allows bacteria to multiply, leading to progressive oral issues:
            </p>

            <div className="flex flex-col gap-5">
              <ProgressBar
                label="Bad Breath Probability"
                percentage={85}
                colorClass="bg-gradient-to-r from-red-400 to-red-500"
                trigger={isInView}
              />
              <ProgressBar
                label="Plaque Accumulation Rate"
                percentage={90}
                colorClass="bg-gradient-to-r from-red-400 to-red-500"
                trigger={isInView}
              />
              <ProgressBar
                label="Risk of Early Gum Issues"
                percentage={75}
                colorClass="bg-gradient-to-r from-red-400 to-red-500"
                trigger={isInView}
              />
            </div>
          </SectionReveal>

          {/* Card Right: WITH */}
          <SectionReveal
            direction="right"
            className="bg-green-50/60 rounded-3xl p-6 md:p-8 border border-primary/20 shadow-sm flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Check size={20} />
              </span>
              <h3 className="font-heading font-extrabold text-primary text-xl">
                With Kukku Pets Natural
              </h3>
            </div>

            <p className="font-body text-gray-600 text-sm leading-relaxed">
              Active botanical formula continuously neutralizes micro-organisms to maintain fresh oral status:
            </p>

            <div className="flex flex-col gap-5">
              <ProgressBar
                label="Fresh Breath Maintenance"
                percentage={95}
                colorClass="bg-gradient-to-r from-primary to-secondary"
                trigger={isInView}
              />
              <ProgressBar
                label="Buildup Reduction (Plaque)"
                percentage={82}
                colorClass="bg-gradient-to-r from-primary to-secondary"
                trigger={isInView}
              />
              <ProgressBar
                label="Daily Gum Wellness Support"
                percentage={88}
                colorClass="bg-gradient-to-r from-primary to-secondary"
                trigger={isInView}
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
