// app/privacy/page.tsx
import { Metadata } from "next";
import PrivacyHero from "./components/PrivacyHero";
import PrivacyContent from "./components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Sendexa Data Protection & Security",
  description: "Learn how Sendexa collects, uses, and protects your personal data in compliance with Ghana's Data Protection Act and other regulations.",
  openGraph: {
    title: "Sendexa Privacy Policy | Data Protection Commitment",
    description: "Our commitment to protecting your personal information and explaining our data practices.",
    url: "https://sendexa.co/privacy",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/privacy-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Privacy Policy - Data Protection",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa privacy policy",
    "Ghana data protection",
    "SMS API privacy",
    "data security Africa",
    "GDPR compliance Ghana",
    "personal data protection",
    "Sendexa data practices",
  ],
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}