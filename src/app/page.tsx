"use client";

// Import Layout & UI components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

// Import Section Components
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import ProductRange from "@/components/sections/ProductRange";
import Product from "@/components/sections/Product";
import Ingredients from "@/components/sections/Ingredients";
import DentalCareGuide from "@/components/sections/DentalCareGuide";
import TrustStats from "@/components/sections/TrustStats";
import Testimonials from "@/components/sections/Testimonials";
import VetEndorsement from "@/components/sections/VetEndorsement";
import QuizSection from "@/components/sections/QuizSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero with Trust Badge and Marquee Ticker */}
        <Hero />

        {/* 2. Target Pet Health Concerns Categories Selector & Split Callout Cards */}
        <Categories />

        {/* 3. Shop Our Best Sellers Grid with Subscribe Options */}
        <ProductRange />

        {/* 4. Flagship Product Highlight Spotlight Card */}
        <Product />

        {/* 5. Natural Ayurvedic Ingredients Transparency Section */}
        <Ingredients />

        {/* 6. Comparison Guide: With vs Without Kukku */}
        <DentalCareGuide />

        {/* 7. Verified Customer Trust Statistics */}
        <TrustStats />

        {/* 8. Verified Customer Testimonials & Reviews */}
        <Testimonials />

        {/* 9. Vet Endorsement: Formulated & Recommended by Doctors */}
        <VetEndorsement />

        {/* 10. Interactive 60-Second Biometric Pet Health Quiz Advisor */}
        <QuizSection />

        {/* 11. Step-by-Step System: How It Works */}
        <HowItWorks />

        {/* 12. Grid Difference: Why Choose Kukku */}
        <WhyChooseUs />

        {/* 13. Accordion FAQs */}
        <FAQ />

        {/* 14. Action Trigger: bottom CTA Banner */}
        <CTABanner />

        {/* 15. Form Inquiry Contact details */}
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
