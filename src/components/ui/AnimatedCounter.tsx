"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // In seconds
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start animation as soon as element is visible anywhere in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease-out cubic easing for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * target;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  const formatted =
    target % 1 !== 0
      ? displayValue.toFixed(1)
      : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref} className="font-heading font-bold tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
