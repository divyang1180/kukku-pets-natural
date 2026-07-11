"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="top-bar">
        🎉 India&apos;s First Herbal Dental Water Additive — <strong>Free Shipping Across India</strong> &nbsp;|&nbsp;{" "}
        <a href="https://wa.me/918160526176" target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      </div>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <div className="logo-icon">🐾</div>
            <div className="logo-text">
              Kukku Pets Natural<span>Pure · Herbal · India</span>
            </div>
          </a>
          
          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}>{link.name}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contact");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                Contact Us 📬
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            style={{ border: "none", background: "none", cursor: "pointer", fontSize: "24px" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {isMobileMenuOpen && (
          <div
            className="bg-white border-b border-gray-100 shadow-xl py-6 flex flex-col gap-4 items-center lg:hidden"
            style={{ position: "absolute", width: "100%", left: 0, top: "68px", zIndex: 100 }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading font-medium text-lg text-dark hover:text-primary transition-colors py-2 block text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="nav-cta text-center py-2 px-6"
              style={{ width: "80%", display: "block", margin: "10px auto" }}
            >
              Contact Us 📬
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
