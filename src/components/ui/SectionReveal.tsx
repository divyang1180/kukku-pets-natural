"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Use IntersectionObserver directly — reliable with Lenis smooth scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const getVariants = () => {
    switch (direction) {
      case "up":
        return { hidden: { opacity: 0, y: 48 },  visible: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -48 }, visible: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 56 },  visible: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -56 }, visible: { opacity: 1, x: 0 } };
      case "scale":
        return { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } };
      case "none":
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Expo out — premium, snappy feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
