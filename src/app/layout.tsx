import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kukku Pets Natural — Natural Dental Water Additive for Dogs",
  description:
    "Kukku Pets Natural dental water additive freshens your dog's breath, helps reduce plaque, and supports daily oral hygiene. Natural ingredients, vet-inspired formula. Easy to use — just add to water.",
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
      "Natural dental water additive that freshens breath, helps reduce plaque, and supports your dog's daily oral health.",
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
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-dark font-body">
        {children}
      </body>
    </html>
  );
}
