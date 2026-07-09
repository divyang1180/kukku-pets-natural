"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  HeartPulse,
  Info,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const trustPoints = [
  {
    icon: <Droplets className="h-5 w-5" />,
    title: "Add to Water",
    desc: "A simple daily bowl routine for pet parents who struggle with brushing.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Tasteless Routine",
    desc: "Designed to mix into drinking water without changing the normal bowl habit.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Daily Support",
    desc: "Helps support breath freshness, plaque control, and gum hygiene over time.",
  },
];

const routineSteps = [
  {
    label: "Daily",
    title: "Refresh the bowl",
    desc: "Use fresh drinking water, then add the recommended capful as directed on the product label.",
  },
  {
    label: "4-6 weeks",
    title: "Stay consistent",
    desc: "Breath freshness and visible oral-care support are easier to notice when the routine is used every day.",
  },
  {
    label: "Ongoing",
    title: "Keep the full routine",
    desc: "Use alongside brushing when possible, dental chews if suitable, and regular veterinary checks.",
  },
];

const servingTips = [
  "Use fresh water before adding the formula.",
  "Keep the bowl clean so the formula mixes properly.",
  "Follow label directions for puppies, seniors, or pets with health conditions.",
  "Consult a veterinarian for pain, bleeding gums, loose teeth, or sudden bad breath.",
];

export default function DentalCareGuide() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionReveal direction="right">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
              Daily Dental Guide
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-5">
              Clear Routine, Better Confidence
            </h2>
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-7">
              Make oral care feel easy after the first bottle arrives. This guide shows how Kukku Pets Natural fits into a calm daily water-bowl routine.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {point.icon}
                  </span>
                  <h3 className="font-heading text-lg font-extrabold leading-snug text-dark mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-gray-500">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-5">
            <SectionReveal
              direction="up"
              className="rounded-2xl border border-gray-200/70 bg-white p-5 md:p-6 shadow-sm"
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <CalendarDays className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold leading-tight text-dark">
                    What to Expect with Daily Use
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-gray-500 mt-1">
                    Oral care works best as a steady habit. Use this timeline to understand how daily consistency supports a healthier mouth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {routineSteps.map((step) => (
                  <div
                    key={step.label}
                    className="rounded-2xl border border-primary/10 bg-background/80 p-4"
                  >
                    <span className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-accent text-[0.68rem] font-extrabold uppercase tracking-widest text-primary">
                      {step.label}
                    </span>
                    <h4 className="font-heading text-base font-extrabold text-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              <SectionReveal
                direction="up"
                delay={0.08}
                className="rounded-2xl border border-secondary/15 bg-secondary/5 p-5 md:p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-secondary shadow-sm">
                  <Clock3 className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-dark mb-3">
                  Quick Serving Reminder
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-600">
                  Add one capful to your dog's fresh water bowl daily, or follow the exact label directions for your bottle size and pet needs.
                </p>
              </SectionReveal>

              <SectionReveal
                direction="up"
                delay={0.14}
                className="rounded-2xl border border-gray-200/70 bg-white p-5 md:p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-dark">
                    Useful Care Notes
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {servingTips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <HeartPulse className="h-3.5 w-3.5" />
                      </span>
                      <p className="font-body text-sm leading-relaxed text-gray-500">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>

        <SectionReveal
          direction="up"
          delay={0.2}
          className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/15 bg-white/85 p-5 shadow-sm"
        >
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Info className="h-4 w-4" />
          </span>
          <p className="font-body text-xs leading-relaxed text-dark-soft/75">
            Follow the label directions for your bottle. This daily routine should not replace tooth brushing where tolerated or professional veterinary dental care.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
