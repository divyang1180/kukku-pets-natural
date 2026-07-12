"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, RefreshCw, MessageSquare, Heart, ShieldAlert, Award } from "lucide-react";
import SectionReveal from "../ui/SectionReveal";

type QuizStep = "name" | "age" | "concern" | "picky" | "calculating" | "result";

export default function QuizSection() {
  const [step, setStep] = useState<QuizStep>("name");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [concern, setConcern] = useState("");
  const [picky, setPicky] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Analyzing pet profile & biometric factors...",
    "Cross-referencing veterinary ingredient guidelines...",
    "Matching Ayurvedic botanicals with clinical metrics...",
    "Selecting optimal formula & pre-applying 20% quiz discount...",
  ];

  useEffect(() => {
    if (step !== "calculating") return;

    const timer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setStep("result");
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(timer);
  }, [step]);

  const handleReset = () => {
    setPetName("");
    setPetAge("");
    setConcern("");
    setPicky("");
    setLoadingStep(0);
    setStep("name");
  };

  const getRecommendation = () => {
    switch (concern) {
      case "plaque":
        return {
          title: "Herbal Dental Tooth Wipes (50 Wipes)",
          desc: "Our textured soft dental wipes are pre-soaked with natural botanicals to physically clear plaque and freshen gums.",
          why: "Manual wipes allow you to target specific yellow teeth areas and physically scrub soft plaque away before it hardens.",
          image: "/images/testimonial-dogs.png",
          whatsappText: `Hi! I completed the Kukku Quiz for ${petName || "my dog"} and got recommended the "Herbal Dental Wipes" (Coming Soon). Please notify me when it launches!`,
        };
      case "gingivitis":
      case "breath":
      default:
        return {
          title: "Natural Dental Water Additive (250ml)",
          desc: "Our premium tasteless & odorless water additive targets plaque and bad breath at the source from every sip.",
          why: "Zinc gluconate and green tea catechins bind calcium to slow plaque structural consolidation.",
          image: "/images/product-bottle.png",
          whatsappText: `Hi! I completed the Kukku Quiz for ${petName || "my dog"} and got recommended the "Dental Water Additive" (Coming Soon). Please notify me when it launches!`,
        };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section className="bg-[#fdfbf7] py-16 md:py-24 scroll-mt-20 border-t border-gray-100" id="quiz-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        {step !== "result" && step !== "calculating" && (
          <SectionReveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#f0f5f1] text-[#013220] rounded-full text-xs font-accent font-extrabold uppercase tracking-widest mb-4 border border-[#86b09c]/25">
              🧬 Pet Health Advisor
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111e17] leading-tight mb-4">
              Find Your Pet's Perfect Product in 60 Seconds
            </h2>
            <p className="font-body text-sm md:text-base text-[#3a4740] leading-relaxed">
              Take our interactive quiz to customize your dog's daily wellness routine based on their age, breed, and health concerns.
            </p>
          </SectionReveal>
        )}

        {/* Quiz Card */}
        <div className="bg-white border border-gray-200/50 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Progress Line */}
          {step !== "calculating" && step !== "result" && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f6f4ee]">
              <div 
                className="h-full bg-[#013220] transition-all duration-300"
                style={{
                  width: 
                    step === "name" ? "20%" :
                    step === "age" ? "40%" :
                    step === "concern" ? "60%" : "80%"
                }}
              />
            </div>
          )}

          {/* STEP 1: PET NAME */}
          {step === "name" && (
            <div className="text-center py-6 animate-fade-in">
              <span className="text-4xl mb-4 block">🐶</span>
              <h3 className="font-heading text-2xl font-extrabold text-[#111e17] mb-6">
                What is your dog's name?
              </h3>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter name (e.g. Bruno, Max)"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="flex-1 px-5 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-[#013220] focus:ring-2 focus:ring-[#013220]/10 font-body text-base"
                />
                <button
                  onClick={() => setStep("age")}
                  disabled={!petName.trim()}
                  className="px-8 py-4 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white font-extrabold uppercase text-xs tracking-wider transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-1.5"
                >
                  Continue <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DOG AGE */}
          {step === "age" && (
            <div className="text-center py-4 animate-fade-in">
              <span className="text-4xl mb-4 block">🎂</span>
              <h3 className="font-heading text-2xl font-extrabold text-[#111e17] mb-6">
                How old is {petName}?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                {[
                  { value: "puppy", label: "Puppy (< 1 Year)" },
                  { value: "adult", label: "Adult (1-7 Years)" },
                  { value: "senior", label: "Senior (8+ Years)" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setPetAge(opt.value);
                      setStep("concern");
                    }}
                    className={`p-6 border-2 rounded-2xl font-heading font-extrabold text-sm transition-all text-center flex flex-col items-center justify-center gap-2 ${
                      petAge === opt.value
                        ? "border-[#013220] bg-[#f0f5f1]/30 text-[#013220]"
                        : "border-gray-200 hover:border-gray-300 text-[#3a4740]"
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setStep("name")}
                className="text-xs font-bold text-[#6e7d75] hover:text-[#013220] uppercase tracking-wider"
              >
                ← Back
              </button>
            </div>
          )}

          {/* STEP 3: CONCERN */}
          {step === "concern" && (
            <div className="text-center py-2 animate-fade-in">
              <span className="text-4xl mb-4 block">🩺</span>
              <h3 className="font-heading text-2xl font-extrabold text-[#111e17] mb-6">
                What is {petName}'s primary health concern?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                {[
                  { value: "breath", label: "😮‍💨 Bad Breath & Odour" },
                  { value: "plaque", label: "🦷 Yellow Teeth & Plaque" },
                  { value: "gingivitis", label: "🩸 Bleeding / Red Gums" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setConcern(opt.value);
                      setStep("picky");
                    }}
                    className={`p-6 border-2 rounded-2xl font-heading font-extrabold text-sm transition-all text-left flex flex-col justify-between h-32 ${
                      concern === opt.value
                        ? "border-[#013220] bg-[#f0f5f1]/30 text-[#013220]"
                        : "border-gray-200 hover:border-gray-300 text-[#3a4740]"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className="text-[10px] text-[#6e7d75] font-normal leading-normal">
                      Select to target natural Ayurvedic formulas
                    </span>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setStep("age")}
                className="text-xs font-bold text-[#6e7d75] hover:text-[#013220] uppercase tracking-wider"
              >
                ← Back
              </button>
            </div>
          )}

          {/* STEP 4: PICKY EATER */}
          {step === "picky" && (
            <div className="text-center py-4 animate-fade-in">
              <span className="text-4xl mb-4 block">🥣</span>
              <h3 className="font-heading text-2xl font-extrabold text-[#111e17] mb-6">
                Is {petName} a picky/fussy eater?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
                {[
                  { value: "fussy", label: "Yes, very picky" },
                  { value: "mixed", label: "Sometimes picky" },
                  { value: "easy", label: "No, eats anything" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setPicky(opt.value);
                      setStep("calculating");
                    }}
                    className={`p-6 border-2 rounded-2xl font-heading font-extrabold text-sm transition-all text-center flex flex-col items-center justify-center gap-2 ${
                      picky === opt.value
                        ? "border-[#013220] bg-[#f0f5f1]/30 text-[#013220]"
                        : "border-gray-200 hover:border-gray-300 text-[#3a4740]"
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => setStep("concern")}
                className="text-xs font-bold text-[#6e7d75] hover:text-[#013220] uppercase tracking-wider"
              >
                ← Back
              </button>
            </div>
          )}

          {/* STEP 5: CALCULATING SCREEN */}
          {step === "calculating" && (
            <div className="text-center py-12 flex flex-col items-center justify-center animate-fade-in">
              <div className="relative w-20 h-20 mb-8">
                <RefreshCw size={80} className="text-[#0b4f35] animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 flex items-center justify-center font-heading text-xl font-bold text-[#013220]">
                  🧬
                </div>
              </div>
              <h3 className="font-heading text-xl font-extrabold text-[#111e17] mb-3">
                Formulating personalized recommendations...
              </h3>
              <p className="font-body text-sm text-[#0b4f35] font-semibold animate-pulse">
                {loadingMessages[loadingStep]}
              </p>
            </div>
          )}

          {/* STEP 6: RESULTS SCREEN */}
          {step === "result" && (
            <div className="animate-fade-in">
              
              {/* Congratulatory top ribbon */}
              <div className="bg-[#f0f5f1] border border-[#86b09c]/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">🎉</span>
                  <div>
                    <h4 className="font-heading text-sm font-extrabold text-[#013220]">
                      Quiz Completed Successfully!
                    </h4>
                    <p className="font-body text-xs text-[#3a4740]">
                      We've pre-applied a 20% discount coupon <strong className="text-[#013220]">"QUIZ20"</strong> to your order.
                    </p>
                  </div>
                </div>
                <div className="bg-[#013220] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-md">
                  Coupon: QUIZ20
                </div>
              </div>

              {/* Recommendation Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
                
                {/* Product Image */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="w-48 h-48 bg-[#fdfbf7] rounded-3xl p-4 border border-gray-100 flex items-center justify-center shadow-inner relative">
                    <img
                      src={recommendation.image}
                      alt={recommendation.title}
                      className="max-h-full max-w-full object-contain"
                    />
                    <span className="absolute -bottom-2 bg-[#f5a623] text-[#001f14] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Best Match ⭐
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="md:col-span-8 text-left">
                  <span className="text-[10px] font-black text-[#6e7d75] uppercase tracking-widest block mb-1">
                    Recommended Formulation for {petName}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-extrabold text-[#111e17] leading-snug mb-3">
                    {recommendation.title}
                  </h3>
                  
                  <p className="font-body text-sm text-[#3a4740] leading-relaxed mb-4">
                    {recommendation.desc}
                  </p>

                  <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3.5 flex gap-2.5 mb-4">
                    <Award size={18} className="text-[#f5a623] shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-[#3a4740] leading-relaxed">
                      <strong>Why this is perfect:</strong> {recommendation.why}
                    </p>
                  </div>

                  {/* Status block */}
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#013220] text-[#86b09c] text-xs font-black uppercase tracking-widest rounded-full shadow-sm">
                      Coming Soon ✨
                    </span>
                    <span className="text-xs text-[#6e7d75] font-bold">
                      Early access reservations open
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center border-t border-gray-150 pt-6">
                <a
                  href={`https://wa.me/918160526176?text=${encodeURIComponent(recommendation.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#013220] hover:bg-[#0b4f35] text-white text-sm font-extrabold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare size={16} /> Notify Me on WhatsApp · Coming Soon
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-4 rounded-full border border-gray-300 hover:bg-gray-50 text-[#3a4740] text-sm font-extrabold transition-all"
                >
                  <RefreshCw size={14} /> Restart Advisor
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
