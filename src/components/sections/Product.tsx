"use client";

import React from "react";

export default function Product() {
  return (
    <section className="product-section" id="product">
      <div className="container">
        <div className="product-inner">
          <div className="product-img-wrap">
            <img
              src="https://kukkupets.store/_next/image?url=%2Fimages%2Fproduct-bottle.png&w=3840&q=75"
              alt="Kukku Pets Natural Dental Water Additive 250ml bottle"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "var(--shadow-lg)"
              }}
            />
            <div className="badge-float tl">🌿 Herbal Formula</div>
            <div className="badge-float br">250ml · Natural</div>
          </div>
          <div>
            <div className="eyebrow">The Product</div>
            <h2 className="section-title">Natural Dental Care, Made Simple</h2>
            <p style={{ fontSize: "15px", color: "var(--text-soft)", marginBottom: "1.5rem", lineHeight: "1.75" }}>
              No brushing. No stress. No chemicals. Just add Kukku Pets Natural to your dog’s water bowl and let nature handle daily oral hygiene — while they simply drink.
            </p>
            <div className="feature-list">
              <div className="feat-item">
                <div className="feat-icon">😮‍💨</div>
                <div className="feat-text">
                  <h4>Freshens Breath Instantly</h4>
                  <p>Neutralizes odour-causing bacteria in the mouth for noticeably fresher breath in 14 days.</p>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-icon">🦷</div>
                <div className="feat-text">
                  <h4>Reduces Plaque &amp; Tartar</h4>
                  <p>Zinc gluconate binds salivary calcium to slow structural plaque consolidation over time.</p>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-icon">🌿</div>
                <div className="feat-text">
                  <h4>8 Natural Oral Care Actions</h4>
                  <p>Green tea, aloe vera, neem extract, natural mint — all working together, every sip.</p>
                </div>
              </div>
              <div className="feat-item">
                <div className="feat-icon">✅</div>
                <div className="feat-text">
                  <h4>Xylitol-Free · Alcohol-Free · Safe Daily</h4>
                  <p>Zero harsh chemicals. Safe for puppies, adults, and seniors with daily consistent use.</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Contact Us 📬</a>
              <a href="#ingredients" className="btn-secondary">See Ingredients</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
