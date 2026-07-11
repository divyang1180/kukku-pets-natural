import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kukku Pets Natural — Dental Water Additive for Dogs | India",
  description:
    "India’s first herbal dental water additive for dogs. Just add to water — freshens breath, reduces plaque, supports daily oral health. Neem, aloe vera, green tea. FSSAI certified.",
  keywords: [
    "dog dental water additive",
    "natural dog oral care",
    "dog breath freshener",
    "pet dental care",
    "healthy dog teeth",
    "natural pet products",
    "Kukku Pets Natural",
  ],
  openGraph: {
    title: "Kukku Pets Natural — Healthy Smile, Happy Dog",
    description:
      "Natural dental water additive that freshens breath, helps reduce plaque, and supports your dog’s daily oral health.",
    type: "website",
    locale: "en_US",
    siteName: "Kukku Pets Natural",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kukku Pets Natural — Natural Dental Water Additive for Dogs",
    description:
      "Freshen breath, reduce plaque, support oral health — naturally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
