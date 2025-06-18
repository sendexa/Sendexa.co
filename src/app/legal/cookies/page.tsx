// app/cookie-policy/page.tsx
import { Metadata } from "next";
import CookieHero from "./components/CookieHero";
import CookieContent from "./components/CookieContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Sendexa Data & Privacy",
  description: "Learn how Sendexa uses cookies and similar technologies to enhance your experience on our platform.",
  openGraph: {
    title: "Sendexa Cookie Policy | Tracking Technologies",
    description: "Information about how we use cookies, pixels, and similar technologies on our website and services.",
    url: "https://sendexa.co/cookie-policy",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/images/meta/cookie-cover.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Cookie Policy",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  keywords: [
    "Sendexa cookie policy",
    "Ghana cookie consent",
    "website tracking",
    "data privacy Africa",
    "cookie settings",
    "web analytics",
    "Sendexa tracking technologies",
  ],
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <CookieHero />
      <CookieContent />
    </div>
  );
}