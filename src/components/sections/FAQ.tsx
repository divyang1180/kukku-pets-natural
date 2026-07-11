"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "How do I use Kukku Pets Natural?",
      a: "Add one capful to your dog's fresh drinking water bowl once daily. That's it! The formula is tasteless and odorless, so your dog won't notice any difference in their water — they simply drink and benefit."
    },
    {
      q: "When will I see results?",
      a: "Most pet parents notice noticeably fresher breath within 14 days of consistent daily use. Visible plaque reduction and healthier gums are typically seen at the 4–6 week mark. Consistency is key — use it every day for best results."
    },
    {
      q: "Is it safe for my dog?",
      a: "Yes. Kukku Pets Natural is formulated without xylitol, alcohol, parabens, or artificial chemicals — all of which can be harmful to dogs. Our formula uses only natural botanical ingredients that are safe for daily use in healthy adult dogs."
    },
    {
      q: "Can puppies use it?",
      a: "For puppies under 3 months, we recommend consulting your veterinarian first. For puppies over 3 months, start with half a capful to let them adjust, then move to a full capful after a week."
    },
    {
      q: "Does this replace brushing?",
      a: "Kukku Pets Natural is a daily complement to dental care — but not a complete replacement for mechanical tooth brushing or professional vet cleanings. Use it alongside brushing when possible. For dogs who refuse brushing, it's the next best daily option."
    },
    {
      q: "How can I get in touch with you?",
      a: "You can reach out to us by filling out the contact form below, messaging us on WhatsApp at +91 81605 26176, or sending an email to support@kukkupets.store. We'll be happy to assist you with any questions or support you need!"
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  {faq.q} <span className="arrow" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>▾</span>
                </div>
                <div
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    padding: isOpen ? ".3rem 1.4rem 1.1rem" : "0 1.4rem",
                    overflow: "hidden",
                    transition: "max-height .35s ease, padding .35s"
                  }}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
