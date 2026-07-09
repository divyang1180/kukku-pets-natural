"use client";

import React from "react";
import SectionReveal from "../ui/SectionReveal";
import {
  Bone,
  Cross,
  HeartPulse,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  ShowerHead,
  SprayCan,
  Syringe,
  ToyBrick,
  Utensils,
} from "lucide-react";

const products = [
  {
    title: "Premium Pet Food",
    category: "Nutrition",
    desc: "Balanced everyday meals made for healthy energy, coat support, and happy appetites.",
    icon: <Bone className="h-5 w-5" />,
  },
  {
    title: "Tooth Wipes",
    category: "Oral Care",
    desc: "Quick-use dental wipes for cleaner teeth and fresher breath between deep cleanings.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Tick & Flea Herbal Spray",
    category: "Skin & Coat",
    desc: "A plant-forward spray designed for routine coat protection and outdoor comfort.",
    icon: <SprayCan className="h-5 w-5" />,
  },
  {
    title: "Shampoo",
    category: "Grooming",
    desc: "Gentle cleansing care for a fresh coat without a harsh, stripped feel.",
    icon: <ShowerHead className="h-5 w-5" />,
  },
  {
    title: "Pet GPS",
    category: "Smart Safety",
    desc: "Track walks, outdoor time, and location updates with a pet-friendly GPS accessory.",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    title: "Premium Home Goods for Pets",
    category: "Home",
    desc: "Comfortable, durable essentials that make daily living easier for pets and families.",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Poop Bags",
    category: "Walk Essentials",
    desc: "Easy-carry clean-up bags for everyday walks, travel, and responsible pet parenting.",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    title: "Hemp Collar",
    category: "Eco Accessories",
    desc: "A soft, natural-fiber collar option designed for comfortable daily wear.",
    icon: <Leaf className="h-5 w-5" />,
  },
  {
    title: "Jute Toys",
    category: "Eco Play",
    desc: "Textured, natural-fiber play pieces for tugging, chewing, and enrichment time.",
    icon: <ToyBrick className="h-5 w-5" />,
  },
  {
    title: "Bamboo Bowls",
    category: "Feeding",
    desc: "Lightweight, practical bowls with a warmer natural look for feeding corners.",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    title: "Deworming Paste",
    category: "Health Care",
    desc: "Easy-dose parasite care support to use as directed by a veterinary professional.",
    icon: <Syringe className="h-5 w-5" />,
  },
  {
    title: "Allergy Kit",
    category: "Wellness Kit",
    desc: "A care kit for spotting sensitivities early and supporting calm skin routines.",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    title: "Parvo Kit",
    category: "Emergency Care",
    desc: "Supportive response essentials for urgent symptoms while arranging veterinary care.",
    icon: <Cross className="h-5 w-5" />,
  },
];

const categoryHighlights = [
  "Natural care essentials",
  "Eco-friendly accessories",
  "Smart safety and wellness",
];

const rangeStats = [
  {
    value: "13",
    label: "Care products",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    value: "7+",
    label: "Pet care zones",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    value: "Eco",
    label: "Natural choices",
    icon: <Leaf className="h-5 w-5" />,
  },
];

export default function ProductRange() {
  return (
    <section
      className="relative overflow-hidden scroll-mt-24 bg-[linear-gradient(135deg,#f8fffa_0%,#ffffff_46%,#eafcff_100%)] py-16 md:py-20 lg:py-24"
      id="product-range"
    >
      <div className="absolute inset-x-0 top-0 h-24 border-y border-primary/10 bg-white/55 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-r from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="mb-9 grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,0.95fr)] lg:items-end">
          <SectionReveal direction="right">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4">
              Product Range
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
              More Everyday Care for Pets
            </h2>
            <p className="font-body text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
              A wider Kukku Pets Natural lineup covering food, grooming, eco accessories, home essentials, safety, and wellness support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {categoryHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Leaf className="h-4 w-4" />
                  </span>
                  <span className="font-accent text-xs font-extrabold text-dark sm:text-sm">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal direction="left" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {rangeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-card backdrop-blur-sm"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  {stat.icon}
                </span>
                <span className="block font-heading text-2xl font-extrabold leading-none text-dark">
                  {stat.value}
                </span>
                <span className="mt-1 block font-accent text-[0.68rem] font-extrabold uppercase tracking-widest text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-5">
          {products.map((product, i) => {
            const isFeatured = i === 0;
            const isClosingCard = i === products.length - 1;
            const isWideCard = isFeatured || isClosingCard;

            return (
              <SectionReveal
                key={product.title}
                direction="up"
                delay={i * 0.03}
                className={`group relative h-full overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-card-hover ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                } ${isClosingCard ? "lg:col-span-2 2xl:col-span-3" : ""}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className={isWideCard ? "md:flex md:items-center md:gap-7" : ""}>
                  <div
                    className={`flex items-center justify-between gap-4 ${
                      isWideCard ? "mb-5 md:mb-0 md:min-w-[15rem]" : "mb-5"
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {product.icon}
                      </span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 font-accent text-[0.65rem] font-extrabold uppercase tracking-widest text-secondary">
                        {product.category}
                      </span>
                  </div>

                  <div className={isWideCard ? "md:max-w-3xl" : ""}>
                    <h3 className={`font-heading font-extrabold leading-snug text-dark mb-2 ${isWideCard ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {product.title}
                    </h3>
                    <p className={`font-body leading-relaxed text-gray-500 ${isWideCard ? "text-sm md:text-base" : "text-sm"}`}>
                      {product.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal
          direction="up"
          delay={0.25}
          className="mt-8 rounded-2xl border border-secondary/15 bg-white/85 p-5 shadow-sm backdrop-blur-sm"
        >
          <p className="font-body text-xs leading-relaxed text-dark-soft/75">
            Health products and kits should be used according to label directions and veterinary guidance. For severe symptoms, suspected parvo, or parasite concerns, consult a veterinarian promptly.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
