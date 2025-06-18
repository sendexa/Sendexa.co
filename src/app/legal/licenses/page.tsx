// app/licenses/page.tsx
import { Metadata } from "next";
import LicensesHero from "./components/LicensesHero";
import LicensesContent from "./components/LicensesContent";

export const metadata: Metadata = {
  title: "Licenses & Certifications | Sendexa Compliance",
  description: "Explore Sendexa's regulatory licenses, industry certifications, and compliance documentation for our messaging platform.",
  openGraph: {
    title: "Sendexa Licenses | Regulatory Compliance & Certifications",
    description: "Official licenses and certifications demonstrating Sendexa's compliance with telecommunications regulations across Africa.",
    url: "https://sendexa.co/licenses",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/licenses-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Licenses & Certifications",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa licenses",
    "Ghana NCA certification",
    "SMS provider licenses",
    "telecom compliance Africa",
    "messaging platform certifications",
    "data protection compliance",
    "Sendexa regulatory approvals",
  ],
  alternates: {
    canonical: "/licenses",
  },
};

export default function LicensesPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <LicensesHero />
      <LicensesContent />
    </div>
  );
}