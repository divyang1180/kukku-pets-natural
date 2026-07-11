"use client";

import React, { useState } from "react";
import { Menu, X, Search, User, ShoppingBag, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(1); // Visual indicator to look like active cart

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { name: "Shop Best Sellers", href: "#product-range" },
    { name: "Health Quiz 🧬", href: "#quiz-section" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-[#001f14] text-[#f0f5f1] py-2.5 px-4 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-inner">
        <Sparkles size={13} className="text-[#f5a623] animate-pulse" />
        <span>RepeatCare SALE: Subscribe & Save 20% + FREE Shipping & Free Gift!</span>
        <span className="hidden md:inline-block bg-[#f5a623] text-[#001f14] text-[9px] px-1.5 py-0.5 rounded-full font-bold ml-1 animate-bounce">
          ACTIVE
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/95 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" onClick={(e) => handleNavClick(e, "#home")}>
            <img 
              src="/images/logo.png" 
              alt="Kukku Pet Naturals" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-bold transition-all duration-200 ${
                    item.href === "#quiz-section" 
                      ? "text-[#0b4f35] hover:text-[#013220] px-3 py-1 bg-[#f0f5f1] rounded-full border border-[#86b09c]/25"
                      : "text-[#3a4740] hover:text-[#013220]"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="text-[#3a4740] hover:text-[#013220] p-1.5 rounded-full hover:bg-gray-50 transition-colors focus:outline-none hidden sm:block" aria-label="Search site">
              <Search size={20} />
            </button>

            {/* Profile Icon */}
            <button className="text-[#3a4740] hover:text-[#013220] p-1.5 rounded-full hover:bg-gray-50 transition-colors focus:outline-none hidden sm:block" aria-label="My Account">
              <User size={20} />
            </button>

            {/* Cart Icon with badge */}
            <a 
              href="#product-range" 
              onClick={(e) => handleNavClick(e, "#product-range")}
              className="text-[#3a4740] hover:text-[#013220] p-1.5 rounded-full hover:bg-gray-50 transition-colors focus:outline-none relative flex items-center" 
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f5a623] text-[#001f14] text-[10px] font-black h-4 w-4 rounded-full flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us 📬
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#3a4740] hover:text-[#013220] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-50 shadow-xl py-6 px-4 flex flex-col gap-4 items-center lg:hidden absolute top-full left-0 w-full z-50 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`w-full text-center font-bold text-base py-2.5 rounded-xl transition-colors ${
                  item.href === "#quiz-section"
                    ? "bg-[#f0f5f1] text-[#013220] border border-[#86b09c]/30"
                    : "text-[#3a4740] hover:text-[#013220] hover:bg-gray-50"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center py-3 rounded-xl bg-[#013220] text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:bg-[#0b4f35] mt-2"
            >
              Contact Us 📬
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
