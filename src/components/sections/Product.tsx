"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "../ui/SectionReveal";
import {
  Droplet,
  Sparkles,
  Shield,
  GlassWater,
  Leaf,
  Calendar,
  EyeOff,
  UserCheck,
} from "lucide-react";

export default function Product() {
  const features = [
    {
      icon: <Droplet className="text-primary w-6 h-6" />,
      title: "Freshens Breath",
      desc: "Neutralizes compounds that cause bad dog breath instantly.",
    },
    {
      icon: <EyeOff className="text-primary w-6 h-6" />,
      title: "Reduces Plaque",
      desc: "Breaks down salivary films that form tartar over time.",
    },
    {
      icon: <Shield className="text-primary w-6 h-6" />,
      title: "Supports Oral Hygiene",
      desc: "Protects gum borders and teeth structures from damage.",
    },
    {
      icon: <GlassWater className="text-primary w-6 h-6" />,
      title: "Easy to Mix",
      desc: "Tasteless formula dissolves instantly in any drinking water.",
    },
    {
      icon: <Leaf className="text-primary w-6 h-6" />,
      title: "Natural Ingredients",
      desc: "Botanical extracts with aloe vera, green tea, and mint.",
    },
    {
      icon: <Calendar className="text-primary w-6 h-6" />,
      title: "Suitable for Daily Use",
      desc: "Safe for regular daily intake to support steady hygiene.",
    },
    {
      icon: <Sparkles className="text-primary w-6 h-6" />,
      title: "No Artificial Colors",
      desc: "Clear, clean formula with zero chemical dyes or synthetics.",
    },
    {
      icon: <UserCheck className="text-primary w-6 h-6" />,
      title: "Vet Friendly",
      desc: "Formulated based on veterinarian dental safety studies.",
    },
  ];

  const productStats = [
    { value: "10 sec", label: "daily routine" },
    { value: "0", label: "brushing battles" },
    { value: "8-in-1", label: "oral care support" },
  ];

  const productHighlights = [
    "Daily water additive",
    "No brushing stress",
    "Vet friendly routine",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-24" id="product">
      <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.45fr] gap-10 lg:gap-12 items-start">
          <SectionReveal direction="right" className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
              Our Product
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-5">
              Natural Dental Care, Made Simple
            </h2>
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-7">
              No brushing struggles, no stress. Add a capful to your dog's bowl and let water handle daily oral care.
            </p>

            <div className="relative mb-5 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-background via-white to-secondary/10 p-4 shadow-sm group">
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-white">
                <Image
                  src="/images/product-bottle.png"
                  alt="Kukku Pets Natural dental care bottle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>

              <div className="mt-4 grid grid-cols-1 min-[430px]:grid-cols-3 gap-2.5">
                {productStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/80 bg-white/90 px-3 py-3 text-center shadow-sm"
                  >
                    <span className="block font-heading text-base font-extrabold leading-none text-dark">
                      {stat.value}
                    </span>
                    <span className="mt-1 block font-accent text-[0.58rem] font-extrabold uppercase leading-tight tracking-widest text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {productHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-background/70 px-4 py-3 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Leaf className="h-4 w-4" />
                  </span>
                  <span className="font-accent text-sm font-extrabold text-dark">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {features.map((feature, i) => (
              <SectionReveal
                key={feature.title}
                direction="up"
                delay={i * 0.035}
                className="group h-full min-h-[154px] rounded-2xl border border-gray-200/70 bg-background/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-card-hover"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {feature.icon}
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-accent text-[0.65rem] font-extrabold uppercase tracking-widest text-secondary">
                    Oral Care
                  </span>
                </div>

                <h3 className="font-heading text-lg font-extrabold leading-snug text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal direction="up" delay={0.25} className="mt-10 rounded-2xl border border-secondary/15 bg-secondary/5 p-5 shadow-sm">
          <p className="font-body text-xs leading-relaxed text-dark-soft/75">
            <strong>Important Notice:</strong> Kukku Pets Natural supports daily oral hygiene, freshening breath, and plaque control, but is not a replacement for mechanical tooth brushing or professional veterinary check-ups.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
