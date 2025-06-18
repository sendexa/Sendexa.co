// app/help-center/page.tsx
import { Metadata } from "next";

import HelpHero from "./components/HelpHero";
import HelpResources from "./components/HelpResources";
import FaqCategories from "./components/FaqCategories";
import FaqAccordion from "./components/FaqAccordion";
import FaqCta from "./components/FaqCta";

export const metadata: Metadata = {
  title: "Help Center | Sendexa Support & Documentation",
  description:
    "Get comprehensive support for Sendexa's messaging platform. Access documentation, tutorials, API guides, and troubleshooting resources.",
  openGraph: {
    title: "Sendexa Help Center | Complete Support Resources",
    description:
      "Find everything you need to use Sendexa effectively - documentation, API references, troubleshooting guides, and direct support options.",
    url: "https://sendexa.co/help-center",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/help-center-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Help Center - Complete Support Resources",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa Help",
    "Sendexa Support",
    "Messaging API Documentation",
    "SMS API Guide",
    "Email API Help",
    "OTP Integration Support",
    "Sendexa Tutorials",
    "African Messaging Support",
  ],
  alternates: {
    canonical: "/help-center",
  },
};

export default function HelpCenterPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <HelpHero />
      <HelpResources />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <FaqCategories />
          <FaqAccordion />
        </div>
      </section>
      <FaqCta />
    </div>
  );
}