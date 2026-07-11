"use client";

import React from "react";

export default function Ingredients() {
  return (
    <section className="ingredients" id="ingredients">
      <div className="container">
        <div className="eyebrow">Ingredients</div>
        <h2 className="section-title">Powered by Pure Nature</h2>
        <p className="section-sub">No chemicals. No artificial fillers. Just India’s most trusted botanical ingredients — working with your dog’s natural biology.</p>
        <div className="ing-grid">
          <div className="ing-card">
            <div className="ing-icon">🍵</div>
            <h3>Green Tea Extract</h3>
            <p>Rich in natural catechins that target oral bacteria, assisting in early plaque control and neutralising bad breath at the source.</p>
            <span className="ing-tag">Antioxidant · Anti-bacterial</span>
          </div>
          <div className="ing-card">
            <div className="ing-icon">🌿</div>
            <h3>Neem Extract</h3>
            <p>India’s most revered antibacterial herb, used for centuries in oral care. Fights the bacteria that cause plaque, tartar, and gum inflammation.</p>
            <span className="ing-tag">Ayurvedic · Anti-bacterial</span>
          </div>
          <div className="ing-card">
            <div className="ing-icon">🪴</div>
            <h3>Aloe Vera Extract</h3>
            <p>Natural soothing properties that care for sensitive gum borders and support soft mouth tissues. Gentle, calming, restorative.</p>
            <span className="ing-tag">Soothing · Anti-inflammatory</span>
          </div>
          <div className="ing-card">
            <div className="ing-icon">🍃</div>
            <h3>Natural Mint</h3>
            <p>An organic odour neutralizer that provides crisp breath freshness without artificial fragrance oils or chemicals.</p>
            <span className="ing-tag">Breath Freshener · Natural</span>
          </div>
          <div className="ing-card">
            <div className="ing-icon">⚡</div>
            <h3>Zinc Gluconate</h3>
            <p>An essential organic mineral compound that binds salivary calcium to slow down structural plaque consolidation and tartar build-up.</p>
            <span className="ing-tag">Anti-plaque · Mineral</span>
          </div>
          <div className="ing-card" style={{ background: "var(--green)", color: "#fff", borderColor: "var(--green)" }}>
            <div className="ing-icon">🛡️</div>
            <h3 style={{ color: "#fff" }}>What We Never Use</h3>
            <p style={{ color: "rgba(255,255,255,0.85)" }}>Xylitol · Alcohol · Parabens · Artificial colours · Chemical fillers · Synthetic fragrances</p>
            <span className="ing-tag" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>Always Safe · Always Natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}
