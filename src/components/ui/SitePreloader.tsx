"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_MESSAGES = [
  "Harvesting fresh spearmint…",
  "Blending natural pet-safe extracts…",
  "Infusing botanical goodness…",
  "Preparing tail-wagging freshness…",
  "Almost ready for happy smiles…",
];

interface SitePreloaderProps {
  onLoadComplete: () => void;
}

export default function SitePreloader({ onLoadComplete }: SitePreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  // Cycle messages
  useEffect(() => {
    if (phase !== "loading") return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 600);
    return () => clearInterval(interval);
  }, [phase]);

  // Simulate progress
  useEffect(() => {
    if (phase !== "loading") return;
    const duration = 2400; // total ms
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease-out curve for natural feel
      const easedProgress = Math.round(
        100 * (1 - Math.pow(1 - current / steps, 3))
      );
      setProgress(Math.min(easedProgress, 100));

      if (current >= steps) {
        clearInterval(timer);
        // Brief pause at 100% then start exit
        setTimeout(() => setPhase("exiting"), 350);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [phase]);

  const handleExitComplete = useCallback(() => {
    setPhase("done");
    onLoadComplete();
  }, [onLoadComplete]);

  if (phase === "done") return null;

  return (
    <>
      {/* ─── Left Curtain ─── */}
          <motion.div
            key="curtain-left"
            initial={{ x: "0%" }}
            animate={phase === "exiting" ? { x: "-100%" } : { x: "0%" }}
            transition={
              phase === "exiting"
                ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                : {}
            }
            className="fixed inset-0 z-[100000] pointer-events-auto"
            style={{ width: "50%", left: 0 }}
          >
            <div className="w-full h-full bg-[#1D3557]" />
          </motion.div>

          {/* ─── Right Curtain ─── */}
          <motion.div
            key="curtain-right"
            initial={{ x: "0%" }}
            animate={phase === "exiting" ? { x: "100%" } : { x: "0%" }}
            transition={
              phase === "exiting"
                ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                : {}
            }
            onAnimationComplete={() => {
              if (phase === "exiting") handleExitComplete();
            }}
            className="fixed inset-0 z-[100000] pointer-events-auto"
            style={{ width: "50%", left: "50%" }}
          >
            <div className="w-full h-full bg-[#1D3557]" />
          </motion.div>

          {/* ─── Center Content Overlay ─── */}
          <motion.div
            key="preloader-content"
            initial={{ opacity: 1 }}
            animate={phase === "exiting" ? { opacity: 0 } : { opacity: 1 }}
            transition={
              phase === "exiting"
                ? { duration: 0.4, ease: "easeIn" }
                : {}
            }
            className="fixed inset-0 z-[100001] flex flex-col items-center justify-center pointer-events-none select-none"
          >
            {/* Animated Paw Print SVG */}
            <div className="relative w-28 h-28 mb-8">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(46,204,113,0.25) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Paw SVG */}
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Main pad */}
                <motion.ellipse
                  cx="50"
                  cy="62"
                  rx="18"
                  ry="16"
                  fill="none"
                  stroke="#2ECC71"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(46,204,113,0.5))" }}
                />
                {/* Top-left toe */}
                <motion.ellipse
                  cx="30"
                  cy="38"
                  rx="9"
                  ry="11"
                  fill="none"
                  stroke="#00B8D9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(0,184,217,0.5))",
                  }}
                />
                {/* Top-right toe */}
                <motion.ellipse
                  cx="70"
                  cy="38"
                  rx="9"
                  ry="11"
                  fill="none"
                  stroke="#00B8D9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(0,184,217,0.5))",
                  }}
                />
                {/* Middle-left toe */}
                <motion.ellipse
                  cx="38"
                  cy="24"
                  rx="8"
                  ry="10"
                  fill="none"
                  stroke="#2ECC71"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(46,204,113,0.5))",
                  }}
                />
                {/* Middle-right toe */}
                <motion.ellipse
                  cx="62"
                  cy="24"
                  rx="8"
                  ry="10"
                  fill="none"
                  stroke="#2ECC71"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(46,204,113,0.5))",
                  }}
                />
              </motion.svg>

              {/* Water droplets floating up */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`drop-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: 4 + (i % 3) * 2,
                    height: 4 + (i % 3) * 2,
                    left: `${20 + i * 14}%`,
                    bottom: 0,
                    background:
                      i % 2 === 0
                        ? "rgba(46,204,113,0.6)"
                        : "rgba(0,184,217,0.6)",
                    boxShadow:
                      i % 2 === 0
                        ? "0 0 8px rgba(46,204,113,0.4)"
                        : "0 0 8px rgba(0,184,217,0.4)",
                  }}
                  animate={{
                    y: [-10, -60, -80],
                    opacity: [0, 0.9, 0],
                    scale: [0.5, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 text-center"
            >
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Kukku Pets{" "}
                <span className="text-[#2ECC71]">Natural</span>
              </span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden mb-4">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #2ECC71, #00B8D9)",
                  boxShadow: "0 0 12px rgba(46,204,113,0.5)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: "linear" }}
              />
            </div>

            {/* Progress Counter */}
            <motion.span
              className="font-heading font-extrabold text-4xl tabular-nums"
              style={{
                background: "linear-gradient(135deg, #2ECC71, #00B8D9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {progress}%
            </motion.span>

            {/* Cycling Messages */}
            <div className="h-6 mt-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-body text-white/50 text-center"
                >
                  {LOADING_MESSAGES[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Subtle sparkle particles in background */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 2 + (i % 3),
                  height: 2 + (i % 3),
                  left: `${8 + i * 7.5}%`,
                  top: `${15 + ((i * 17) % 70)}%`,
                  background: i % 3 === 0 ? "#2ECC71" : i % 3 === 1 ? "#00B8D9" : "#FFD166",
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2.5 + (i % 3) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </>
  );
}
