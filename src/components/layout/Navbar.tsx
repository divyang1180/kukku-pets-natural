"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/40 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🐾</span>
            <span className="font-heading font-extrabold text-xl tracking-tight transition-colors duration-300 text-dark">
              Kukku Pets <span className="text-primary">Natural</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-dark/80 hover:text-primary relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <MagneticButton variant="primary" href="#contact" className="py-2.5 px-6 text-sm">
              Contact Us 📬
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-2xl z-40 border-b border-gray-100 shadow-xl py-6 flex flex-col gap-4 items-center lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-medium text-lg text-dark hover:text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <MagneticButton
              variant="primary"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-4/5 py-3 text-center"
            >
              Contact Us 📬
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
