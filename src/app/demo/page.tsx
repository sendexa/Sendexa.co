import DemoHero from "@/components/demo/DemoHero";
import DemoShowcase from "@/components/demo/DemoShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendexa Demo | See Africa's Leading Communication and Payment APIs in Action",
  description: "Experience Sendexa's SMS, WhatsApp, Email & Payments APIs with live interactive demos. See how 5,000+ Ghanaian businesses boost engagement with our platform. Get instant API keys.",
  keywords: [
    "Sendexa Demo",
    "API Demo Ghana",
    "Live SMS API Demo",
    "WhatsApp API Sandbox",
    "Payment Gateway Test",
    "OTP API Simulator",
    "Africa Communication APIs",
    "Developer Sandbox"
  ],
  openGraph: {
    title: "Try Sendexa Free | No-Code Demo & Instant Developer Sandbox",
    description: "Explore our interactive product demos with pre-built scenarios for e-commerce, banking & logistics. See real API responses and get customized integration advice.",
    url: "https://sendexa.co/demo",
    images: [
      {
        url: "https://sendexa.co/og/demo-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Interactive Demo Dashboard – Test SMS, WhatsApp, Payments & Email APIs",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Sendexa API Keys in 2 Minutes | Live Demo Environment",
    description: "Test our APIs with 10 free credits. No commitment required. See why developers rate our docs 4.9/5 for clarity.",
    images: ["https://sendexa.co/og/twitter-demo.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/demo"
  },
  verification: {
    google: 'your-google-verification-code'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true, // Allows fresh demo content to be indexed
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },
  other: {
    "demo:version": "2025.1",
    "demo:api_endpoint": "https://api.sendexa.co/sandbox",
    "demo:credits": "10 free credits"
  }
};

export default function DemoPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <DemoHero />
      <DemoShowcase />
    </div>
  );
}
