"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Youtube, Send, ShieldCheck, Award, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("Subscribing...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[#001f14] text-gray-300 pt-16 pb-8 border-t border-white/5 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#" onClick={(e) => handleScroll(e, "#home")} className="mb-6 block">
              <img 
                src="/images/logo.png" 
                alt="Kukku Pet Naturals" 
                className="h-14 md:h-16 w-auto object-contain filter brightness-0 invert" 
              />
            </a>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 max-w-sm">
              India’s first herbal dental water additive for dogs. Natural Ayurvedic formulations designed for effortless daily hygiene and a lifetime of happy, healthy smiles.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0b4f35] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0b4f35] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0b4f35] flex items-center justify-center text-white transition-colors" aria-label="YouTube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-heading text-sm font-black tracking-widest text-white uppercase mb-4">
              Sign Up For News & Deals
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Get pet care advice, product releases, and exclusive subscription sales directly in your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "loading") setStatus("idle");
                }}
                disabled={status === "loading"}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#86b09c]"
              />
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="px-4 py-3 rounded-xl bg-[#0b4f35] hover:bg-[#013220] text-white font-bold text-sm uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                {status === "loading" ? "..." : "Subscribe"}
                <Send size={11} />
              </button>
            </form>
            {status !== "idle" && (
              <p className={`text-[11px] mt-2 ${status === "success" ? "text-[#86b09c]" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-heading text-sm font-black tracking-widest text-white uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm p-0 m-0 list-none">
              <li><a href="#product-range" onClick={(e) => handleScroll(e, "#product-range")} className="hover:text-white transition-colors">Dental Water Additive</a></li>
              <li><a href="#product-range" onClick={(e) => handleScroll(e, "#product-range")} className="hover:text-white transition-colors">Herbal Wipes</a></li>
              <li><a href="#product-range" onClick={(e) => handleScroll(e, "#product-range")} className="hover:text-white transition-colors">Tick & Flea Spray</a></li>
              <li><a href="#product-range" onClick={(e) => handleScroll(e, "#product-range")} className="hover:text-white transition-colors">Oatmeal Shampoo</a></li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-heading text-sm font-black tracking-widest text-white uppercase mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm p-0 m-0 list-none">
              <li><a href="#how-it-works" onClick={(e) => handleScroll(e, "#how-it-works")} className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#vets" onClick={(e) => handleScroll(e, "#vets")} className="hover:text-white transition-colors">Vet Endorsements</a></li>
              <li><a href="#faq" onClick={(e) => handleScroll(e, "#faq")} className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="mailto:support@kukkupets.store" className="hover:text-white transition-colors">Email Support</a></li>
            </ul>
          </div>

        </div>

        {/* Certifications Badge Row */}
        <div className="border-t border-white/5 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-[#86b09c]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">FSSAI Approved Ingredients</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award size={20} className="text-[#86b09c]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">GMP Certified Laboratory</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Heart size={20} className="text-[#86b09c]" />
            <span className="text-xs font-black uppercase tracking-wider text-white">Natural & Safe</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🇮🇳</span>
            <span className="text-xs font-black uppercase tracking-wider text-white">Made in India</span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Kukku Pets Natural. All rights reserved. Created with love for dogs.</span>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
