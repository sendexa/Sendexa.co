import ProductHero from "@/components/sms/ProductHero";
import Features from "@/components/sms/Features";
import Integrations from "@/components/sms/Integrations";
import Pricing from "@/components/sms/Pricing";
import Testimonials from "@/components/sms/Testimonials";
import CtaSection from "@/components/sms/CtaSection";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sendexa SMS API – Fast, Secure & Affordable Messaging in Ghana",
//   description:
//     "Deliver SMS across Ghana with Sendexa’s modern API. Built for speed, security, and developers. Intelligent routing. Unmatched affordability.",
//   openGraph: {
//     title: "Sendexa SMS API – Fast, Secure & Affordable Messaging in Ghana",
//     description:
//       "A powerful, modern SMS API built for speed and reliability. Reach users instantly across Ghana with intelligent routing and unbeatable pricing.",
//     url: "https://sendexa.co/products/sms",
//     images: [
//       {
//         url: "https://sendexa.co/og/sms-api.png",
//         alt: "Sendexa SMS API Preview",
//       },
//     ],
//     siteName: "Sendexa",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sendexa SMS API – Fast, Secure & Affordable Messaging in Ghana",
//     description:
//       "Send SMS easily and reliably. Built for developers, optimized for delivery, and priced for scale.",
//     images: ["https://sendexa.co/og/sms-api.png"],
//   },
// };

export const metadata: Metadata = {
  title: "Best SMS API in Ghana | Sendexa - 99.9% Uptime & Bulk SMS Solutions",
  description: "Ghana's most reliable SMS API with instant delivery, powerful developer tools, and Africa's lowest rates. Send bulk SMS at 1/3 competitor prices with 99.9% uptime guarantee.",
  keywords: [
    "SMS API Ghana",
    "Bulk SMS Ghana",
    "Cheap SMS API",
    "Africa SMS Gateway",
    "Developer-friendly SMS",
    "WhatsApp Alternative Messaging",
    "High Delivery Rate SMS"
  ],
  openGraph: {
    title: "#1 SMS API Provider in Ghana | Sendexa - Enterprise Messaging API",
    description: "Trusted by 500+ Ghanaian businesses for mission-critical SMS. Get 3x faster delivery than competitors with our direct carrier connections and intelligent failover system.",
    url: "https://sendexa.co/products/sms",
    images: [
      {
        url: "https://sendexa.co/og/sms-api-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa SMS API Dashboard - Manage SMS Campaigns in Real-time",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developers Love Our SMS API - 5x Faster Integration | Sendexa",
    description: "Get your SMS integration working in 15 minutes with our developer-first API docs, SDKs in 8 languages, and dedicated technical support.",
    images: ["https://sendexa.co/og/twitter-sms-api.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/sms"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  manifest: "https://sendexa.co/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0066FF",
};

export default function SmsApiPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
