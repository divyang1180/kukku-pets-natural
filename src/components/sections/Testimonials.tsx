"use client";

import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="eyebrow">Reviews</div>
        <h2 className="section-title">Loved by Dogs &amp; Their Humans</h2>
        <div className="rating-summary">
          <div>
            <div className="rating-big">4.9</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-count">From 5,000+ verified reviews</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", fontSize: "13px" }}>
              <span style={{ color: "#F5A623" }}>★★★★★</span>
              <div style={{ flex: 1, background: "rgba(255,255,255,.15)", height: "7px", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: "88%", height: "100%", background: "#F5A623", borderRadius: "10px" }}></div>
              </div>
              <span style={{ color: "rgba(255,255,255,.6)" }}>88%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", fontSize: "13px" }}>
              <span style={{ color: "#F5A623" }}>★★★★☆</span>
              <div style={{ flex: 1, background: "rgba(255,255,255,.15)", height: "7px", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: "9%", height: "100%", background: "#F5A623", borderRadius: "10px" }}></div>
              </div>
              <span style={{ color: "rgba(255,255,255,.6)" }}>9%</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span style={{ color: "#F5A623" }}>★★★☆☆</span>
              <div style={{ flex: 1, background: "rgba(255,255,255,.15)", height: "7px", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ width: "3%", height: "100%", background: "#F5A623", borderRadius: "10px" }}></div>
              </div>
              <span style={{ color: "rgba(255,255,255,.6)" }}>3%</span>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;Max’s breath was terrible for years. Within 2 weeks of using Kukku, the bad smell is completely gone. I can finally enjoy doggy kisses again! Absolutely love this product.&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">S</div>
              <div>
                <div className="rev-name">Sarah M.</div>
                <div className="rev-breed">Golden Retriever Mom 🐕</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;My Lab Bruno absolutely hated toothbrushing — it was a daily battle. Since switching to Kukku Pets, no more fights, his teeth look noticeably cleaner, and the vet was impressed at his last check-up!&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">R</div>
              <div>
                <div className="rev-name">Rahul K.</div>
                <div className="rev-breed">Labrador Dad 🐶</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;As a vet, I’m cautious about recommending products. But Kukku’s formula is clean, well-thought-out, and the neem + aloe combination is genuinely effective. I’ve started recommending it to my patients.&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">🩺</div>
              <div>
                <div className="rev-name">Dr. Priya S.</div>
                <div className="rev-breed">Veterinarian, Bengaluru</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;Tried 3 different dental products before. Kukku is the only one my picky Beagle actually drinks with. 4 weeks in — plaque visibly reduced and her breath is fresh every morning.&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">A</div>
              <div>
                <div className="rev-name">Anjali T.</div>
                <div className="rev-breed">Beagle Mom, Mumbai 🐾</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;The fact that it’s tasteless is a game changer. My dog has no idea anything is different — he just drinks his water. But his teeth are genuinely cleaner at his 6-week vet visit. Magic in a bottle!&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">V</div>
              <div>
                <div className="rev-name">Vikram P.</div>
                <div className="rev-breed">Indie Dog Parent, Delhi</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="rev-stars">★★★★★</div>
            <p className="rev-text">&ldquo;Love that it’s made in India with Indian herbs. Neem in a pet product makes total sense to me — it’s what our grandmothers used. Kukku understands the Indian pet parent’s mindset perfectly.&rdquo;</p>
            <div className="rev-author">
              <div className="rev-avatar">M</div>
              <div>
                <div className="rev-name">Meera N.</div>
                <div className="rev-breed">German Shepherd Mom, Pune</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
