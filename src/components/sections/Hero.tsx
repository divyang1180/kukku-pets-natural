"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-badge fade-up">
          <span>🌿</span> Vet-Inspired · Natural Formula · Made in India
        </div>
        <h1 className="fade-up d1">
          Freshens Breath.<br/>
          <em>Reduces Plaque.</em><br/>
          Zero Brushing Stress.
        </h1>
        <p className="hero-sub fade-up d2">
          India’s first herbal dental water additive for dogs. Just add a capful to their water bowl. Powered by neem, aloe vera &amp; green tea — completely tasteless, 100% natural.
        </p>
        <div className="hero-ctas fade-up d3">
          <a href="#contact" className="btn-primary">
            Contact Us 📬
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See How It Works ↓
          </a>
        </div>
        <div className="hero-trust fade-up d4">
          <div className="trust-item"><span className="icon">⭐</span><span className="stars">★★★★★</span>&nbsp;4.9 Rating</div>
          <div className="trust-item">🐕 50,000+ Happy Dogs</div>
          <div className="trust-item">✅ Xylitol-Free · Safe Daily</div>
          <div className="trust-item">🇮🇳 Made in India</div>
        </div>
      </div>
    </section>
  );
}
