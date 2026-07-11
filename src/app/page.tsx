"use client";

// Import Layout & UI components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
// Import Section Components
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Product from "@/components/sections/Product";
import Ingredients from "@/components/sections/Ingredients";
import DentalCareGuide from "@/components/sections/DentalCareGuide";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <SocialProofBar />
        <HowItWorks />
        <Product />
        <Ingredients />
        <DentalCareGuide />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
