"use client";

import React from "react";

export default function DentalCareGuide() {
  return (
    <section className="compare" id="compare">
      <div className="container">
        <div className="eyebrow">The Difference</div>
        <h2 className="section-title">With Kukku vs Without Kukku</h2>
        <p className="section-sub">See what daily use of Kukku Pets Natural means for your dog&apos;s oral health over time.</p>
        <div className="compare-grid">
          <div className="compare-card bad">
            <div className="compare-head">
              <span className="ch-icon">😟</span>
              <h3>Without Kukku Pets Natural</h3>
            </div>
            <div className="compare-row">
              <span>Bad Breath Risk</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "85%", background: "#ef9a9a" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Plaque Accumulation</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "90%", background: "#ef9a9a" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Gum Irritation Risk</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "75%", background: "#ef9a9a" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Owner Stress (brushing)</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "80%", background: "#ef9a9a" }}></div></div>
            </div>
          </div>
          <div className="compare-card good">
            <div className="compare-head">
              <span className="ch-icon">😄</span>
              <h3>With Kukku Pets Natural</h3>
            </div>
            <div className="compare-row">
              <span>Fresh Breath</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "95%", background: "var(--green-mid)" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Plaque Reduction</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "82%", background: "var(--green-mid)" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Gum Wellness Support</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "88%", background: "var(--green-mid)" }}></div></div>
            </div>
            <div className="compare-row">
              <span>Zero Brushing Effort</span>
              <div className="progress-wrap"><div className="progress-fill" style={{ width: "100%", background: "var(--green-mid)" }}></div></div>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--green-light)", borderRadius: "var(--radius)", padding: "1.5rem 2rem", marginTop: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>💡</span>
          <p style={{ fontSize: "14px", color: "var(--text-soft)", lineHeight: "1.65" }}>
            <strong style={{ color: "var(--green)" }}>Real results take 4–6 weeks.</strong> Oral health works best as a daily habit. Most Kukku pet parents notice fresher breath within 14 days, with visible plaque improvement at the 6-week mark. Consistency is everything.
          </p>
        </div>
      </div>
    </section>
  );
}
