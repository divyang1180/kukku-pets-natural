"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";
import MagneticButton from "../ui/MagneticButton";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus("loading");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message ?? "Unable to send your message.");
      }

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully. Our support team will respond within 24 hours.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again later."
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitStatus !== "loading") {
      setSubmitStatus("idle");
      setStatusMessage("");
    }

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary w-5 h-5" />,
      label: "Email Us",
      value: "support@kukkupets.store",
      href: "mailto:support@kukkupets.store",
    },
    {
      icon: <Phone className="text-primary w-5 h-5" />,
      label: "Call Support",
      value: "+91 95587 44805",
      href: "tel:+919558744805",
    },
    {
      icon: <MapPin className="text-primary w-5 h-5" />,
      label: "Headquarters",
      value: "Gujarat, India",
      href: "#",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden scroll-mt-24" id="contact">
      {/* Floating WhatsApp chat widget */}
      <a
        href="https://wa.me/919558744805"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 hover:shadow-2xl transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionReveal className="contact-header">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-accent font-extrabold uppercase tracking-widest mb-4">
            📬 Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-tight mb-4">
            Connect with Kukku Pets Natural
          </h2>
          <p className="font-body text-gray-600 text-base md:text-lg">
            Have questions about orders, ingredients, or partnerships? Reach out to us.
          </p>
        </SectionReveal>

        {/* Contact Form & Info Grid */}
        <div className="contact-grid">
          {/* Left: Contact Form */}
          <SectionReveal
            direction="left"
            className="contact-form-card"
          >
            <h3 className="contact-form-heading">
              <Mail size={20} aria-hidden="true" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">
                {submitStatus !== "idle" && statusMessage && (
                  <div
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-2xl border p-4 ${
                      submitStatus === "success"
                        ? "border-primary/20 bg-green-50 text-primary"
                        : submitStatus === "error"
                          ? "border-danger/20 bg-red-50 text-danger"
                          : "border-secondary/20 bg-secondary/5 text-secondary"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : submitStatus === "error" ? (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <Send className="mt-0.5 h-5 w-5 shrink-0 animate-pulse" />
                    )}
                    <p className="font-body text-sm leading-relaxed">
                      {statusMessage || "Sending your message..."}
                    </p>
                  </div>
                )}

                <div className="contact-field-grid">
                  {/* Name Input */}
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      autoComplete="name"
                      disabled={submitStatus === "loading"}
                      className="contact-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      autoComplete="email"
                      disabled={submitStatus === "loading"}
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="contact-field">
                  <label htmlFor="contact-subject" className="contact-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    required
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    disabled={submitStatus === "loading"}
                    className="contact-input"
                  />
                </div>

                {/* Message TextArea */}
                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-label">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    disabled={submitStatus === "loading"}
                    className="contact-textarea"
                  />
                </div>

                {/* Submit Button */}
                <MagneticButton
                  type="submit"
                  disabled={submitStatus === "loading"}
                  variant="primary"
                  className="contact-submit"
                >
                  {submitStatus === "loading" ? "Sending..." : "Send Message"}
                  <Send size={16} className="ml-1" />
                </MagneticButton>
              </form>
          </SectionReveal>

          {/* Right: Info Cards & Map */}
          <SectionReveal
            direction="right"
            className="contact-info-panel"
          >
            {/* Info Items */}
            <div className="contact-info-list">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="contact-info-card group"
                >
                  <div className="contact-info-icon group-hover:scale-105">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="contact-info-label">
                      {info.label}
                    </span>
                    <span className="contact-info-value">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Frame wrapper */}
            <div className="contact-map-frame">
              <iframe
                title="Kukku Pets Natural Location Map"
                src="https://www.google.com/maps?q=Gujarat,+India&output=embed"
                className="w-full h-full border-none absolute inset-0"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
