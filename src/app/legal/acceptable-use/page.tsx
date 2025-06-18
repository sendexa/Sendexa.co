// app/acceptable-use/page.tsx
import { Metadata } from "next";
import AcceptableUseHero from "./components/AcceptableUseHero";
import AcceptableUseContent from "./components/AcceptableUseContent";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | Sendexa Messaging Platform",
  description: "Guidelines for proper use of Sendexa's messaging services, APIs, and platform features.",
  openGraph: {
    title: "Sendexa Acceptable Use Policy | Platform Guidelines",
    description: "Rules and restrictions governing the use of Sendexa's communication services in Ghana and Africa.",
    url: "https://discover.sendexa.co/legal/acceptable-use",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/acceptable-use-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Acceptable Use Policy",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa acceptable use",
    "messaging platform rules",
    "SMS API restrictions",
    "Ghana communication policies",
    "prohibited content Africa",
    "Sendexa terms",
    "anti-spam policy",
  ],
  alternates: {
    canonical: "/acceptable-use",
  },
};

export default function AcceptableUsePage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <AcceptableUseHero />
      <AcceptableUseContent />
    </div>
  );
}