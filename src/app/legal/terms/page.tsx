// app/terms/page.tsx
import { Metadata } from "next";
import TermsHero from "./components/TermsHero";
import TermsContent from "./components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Sendexa Messaging Platform",
  description: "Sendexa's Terms of Service govern your use of our messaging platform, APIs, and services. Read our terms and conditions.",
  openGraph: {
    title: "Sendexa Terms of Service | Messaging Platform Agreement",
    description: "Legal terms governing the use of Sendexa's communication APIs and services.",
    url: "https://sendexa.co/terms",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/terms-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Terms of Service",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa terms",
    "messaging platform terms",
    "SMS API terms",
    "email service agreement",
    "Ghana communications terms",
    "API usage policy",
    "Sendexa legal",
  ],
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <TermsHero />
      <TermsContent />
    </div>
  );
}