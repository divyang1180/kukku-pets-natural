"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";

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

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/images/logo.png" alt="Kukku Pet Naturals" className="logo-img" />
            </a>
            <p>India’s first herbal dental water additive for dogs. Effortless daily oral hygiene for a lifetime of happy, healthy smiles. Made in Gujarat, India.</p>
            <div className="social-links" style={{ marginTop: "1rem" }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={18} color="white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} color="white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <Youtube size={18} color="white" />
              </a>
            </div>
            <form onSubmit={handleSubmit} className="email-form" style={{ marginTop: "1rem" }}>
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
              />
              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
            {status !== "idle" && (
              <p style={{
                fontSize: "12px",
                marginTop: "6px",
                color: status === "success" ? "var(--mint)" : status === "error" ? "#ff8a80" : "#ccc"
              }}>
                {message}
              </p>
            )}
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="#product">Dental Water Additive</a></li>
              <li><a href="#product">Herbal Formula</a></li>
              <li><a href="#ingredients">Natural Ingredients</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#ingredients">Ingredients</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="https://wa.me/918160526176" target="_blank" rel="noopener noreferrer">WhatsApp Support</a></li>
              <li><a href="mailto:support@kukkupets.store">Email Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Company Partners</a></li>
              <li><a href="#">Wholesale</a></li>
            </ul>
            <div style={{ marginTop: "1.5rem", padding: "12px", background: "rgba(255,255,255,.06)", borderRadius: "8px" }}>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,.4)", marginBottom: "4px" }}>Contact</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,.75)" }}>+91 81605 26176</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,.5)" }}>support@kukkupets.store</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", marginTop: "2px" }}>Gujarat, India</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Kukku Pets Natural. All rights reserved. Made with ❤️ for dogs everywhere.</span>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping &amp; Returns</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
