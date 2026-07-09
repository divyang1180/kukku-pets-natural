"use client";

import React from "react";
import { Mail } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { FOOTER_QUICK_LINKS, FOOTER_RESOURCE_LINKS } from "@/constants/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Custom inline SVG icons for social media
  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 002.11 2.11c1.863.508 9.388.508 9.388.508s7.525 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1D3557] to-[#0f2035] text-white pt-24 pb-12 overflow-hidden">
      {/* Floating Paw Print Decorations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-10">
        <span className="absolute top-[10%] left-[5%] text-5xl animate-[float_6s_ease-in-out_infinite]">🐾</span>
        <span className="absolute top-[40%] right-[8%] text-4xl animate-[float_7s_ease-in-out_infinite] [animation-delay:1s]">🐾</span>
        <span className="absolute bottom-[20%] left-[12%] text-6xl animate-[float_8s_ease-in-out_infinite] [animation-delay:2s]">🐾</span>
        <span className="absolute bottom-[40%] left-[70%] text-5xl animate-[float_6s_ease-in-out_infinite] [animation-delay:3s]">🐾</span>
      </div>

      <div className="site-container relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-3xl">🐾</span>
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                Kukku Pets <span className="text-primary">Natural</span>
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium veterinary-inspired dental water additives for dogs. Effortless daily hygiene for a lifetime of happy, healthy smiles.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
            <ul className="flex flex-col gap-3.5 text-white/70 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Support */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 border-l-4 border-secondary pl-3">Resources</h4>
            <ul className="flex flex-col gap-3.5 text-white/70 text-sm">
              {FOOTER_RESOURCE_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-secondary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 border-l-4 border-accent pl-3">Stay Connected</h4>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Subscribe to get oral care tips, exclusive pet products updates, and 15% off your first order!
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm transition-all duration-300"
                />
                <Mail size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
              </div>
              <MagneticButton variant="primary" className="py-2.5 px-6 text-sm text-center">
                Subscribe Now 📧
              </MagneticButton>
            </form>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-white/10 w-full mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white/50 text-xs gap-4 text-center md:text-left">
          <span>
            © {currentYear} Kukku Pets Natural. All rights reserved. Made with ❤️ for dogs everywhere.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
