"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "outline" | "accent";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Magnetic movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled) return;
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Attract center slightly
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Click ripple effect
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick(e);
    if (!buttonRef.current) return;
    const { left, top } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  // Build styles
  const baseStyle =
    "relative overflow-hidden inline-flex items-center justify-center font-heading font-semibold rounded-full select-none transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow-primary px-8 py-4",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent px-8 py-4",
    accent:
      "bg-gradient-to-r from-accent to-accent-dark text-dark hover:shadow-glow-accent px-8 py-4",
  };

  const disabledStyle = disabled ? "opacity-70 pointer-events-none" : "";
  const currentStyle = `${baseStyle} ${variants[variant]} ${disabledStyle} ${className}`;

  const buttonContent = (
    <motion.span
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="flex items-center gap-2 pointer-events-none relative z-10"
    >
      {children}
    </motion.span>
  );

  const rippleElements = ripples.map((ripple) => (
    <span
      key={ripple.id}
      style={{
        left: ripple.x,
        top: ripple.y,
        transform: "translate(-50%, -50%)",
      }}
      className="absolute w-2 h-2 bg-white/30 rounded-full animate-[ripple_0.6s_ease-out_forwards] pointer-events-none"
    />
  ));

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        className={currentStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick as any}
      >
        {rippleElements}
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      type={type}
      disabled={disabled}
      className={currentStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {rippleElements}
      {buttonContent}
    </button>
  );
}
