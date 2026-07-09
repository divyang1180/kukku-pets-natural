"use client";

import { useState, useEffect } from "react";

// Import Layout & UI components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SitePreloader from "@/components/ui/SitePreloader";
// Import Section Components
import Hero from "@/components/sections/Hero";
import Product from "@/components/sections/Product";
import DentalCareGuide from "@/components/sections/DentalCareGuide";
import ProductRange from "@/components/sections/ProductRange";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Ingredients from "@/components/sections/Ingredients";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {/* Preloader overlay — content mounts behind it so 3D hydrates in parallel */}
      {isLoading && (
        <SitePreloader onLoadComplete={() => setIsLoading(false)} />
      )}

      <SmoothScroll>
        <Navbar />

        <main className="flex-1 w-full bg-background flex flex-col">
          <Hero />
          <Product />
          <DentalCareGuide />
          <ProductRange />
          <WhyChooseUs />
          <HowItWorks />
          <Ingredients />
          <Benefits />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </SmoothScroll>
    </>
  );
}

