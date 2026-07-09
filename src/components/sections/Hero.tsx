"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "../ui/MagneticButton";
import AnimatedCounter from "../ui/AnimatedCounter";

// Dynamic import of 3D Scene to prevent SSR errors
const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-primary/50 font-medium">
      Loading interactive 3D scene...
    </div>
  ),
});

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-start lg:justify-center pt-24 md:pt-28 lg:pt-24 pb-20 gradient-hero">
      {/* Background Floating Leaves, Particles & Bubbles (Pure CSS/SVG) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        {/* Floating leaves */}
        {[...Array(6)].map((_, i) => (
          <span
            key={`leaf-${i}`}
            className="absolute text-2xl md:text-3xl opacity-20 animate-[leaf-fall_12s_infinite]"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          >
            🍃
          </span>
        ))}

        {/* Floating soft bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-primary/10 animate-[bubble-rise_14s_infinite]"
            style={{
              width: `${16 + (i % 3) * 12}px`,
              height: `${16 + (i % 3) * 12}px`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${12 + i * 2}s`,
            }}
          />
        ))}

        {/* Small floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-secondary/15 animate-[float_6s_infinite]"
            style={{
              width: "6px",
              height: "6px",
              top: `${15 + i * 7}%`,
              left: `${8 + i * 8}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Grid Content */}
      <div className="site-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
        {/* Left: Headline & Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur rounded-full border border-primary/20 text-xs font-accent text-primary font-bold shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            🌿 Vet-Inspired Natural Formula
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark leading-tight mb-6 tracking-tight"
          >
            Healthy Smile.
            <br />
            <span className="gradient-text font-black">Happy Dog.</span>
            <br />
            Zero Brushing Stress.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-8"
          >
            Natural Dental Water Additives that Freshen Breath, Reduce Plaque, and Support Your Dog's Daily Oral Health. Just add a splash to their water bowl!
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <MagneticButton variant="primary" href="#contact">
              Get in Touch 📬
            </MagneticButton>
            <MagneticButton variant="outline" href="#how-it-works">
              See How It Works
            </MagneticButton>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 md:gap-10 border-t border-gray-200/50 pt-6 md:pt-8 w-full"
          >
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-extrabold text-dark">
                <AnimatedCounter target={50} suffix="K+" />
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Happy Dogs</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-extrabold text-dark">
                <AnimatedCounter target={4.9} suffix="/5" />
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">Star Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-heading font-extrabold text-dark">
                <AnimatedCounter target={100} suffix="%" />
              </span>
              <span className="text-xs md:text-sm text-gray-500 font-medium">All Natural</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: 3D Scene container + Product mockup overlay */}
        <div className="lg:col-span-6 relative h-[420px] md:h-[500px] lg:h-[480px] w-full flex items-center justify-center">
          {/* Three.js interactive canvas inside here */}
          <div className="absolute inset-0 w-full h-full">
            <HeroScene />
          </div>

          {/* Floating rating card overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-12 right-4 glass rounded-2xl p-4 shadow-glass max-w-[160px] pointer-events-none select-none animate-[float_5s_infinite]"
          >
            <div className="flex items-center gap-1 text-accent font-bold mb-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="text-xs font-heading font-bold text-dark block">4.9 Average Rating</span>
            <span className="text-[10px] text-gray-500">From 5,000+ reviews</span>
          </motion.div>

          {/* Floating Vet Stamp overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-4 glass rounded-2xl p-4 shadow-glass max-w-[180px] pointer-events-none select-none animate-[float-reverse_6s_infinite]"
          >
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="text-2xl">🩺</span>
              <span className="text-xs font-heading font-extrabold text-dark leading-tight">
                Veterinarian Inspired
              </span>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              Formulated with natural botanical extracts tested for pet safety.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SVG Wave Transition at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z" fill="#F8FFFA"/>
        </svg>
      </div>
    </section>
  );
}
