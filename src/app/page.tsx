import { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";

export const metadata: Metadata = {
  title: "Sendexa | Africa's Most Reliable Communication APIs – SMS, WhatsApp, Email & Payments",
  description: "Powering 10,000+ businesses in Ghana with enterprise-grade SMS, WhatsApp, Email & Payments APIs. 99.9% uptime, fastest delivery speeds, and developer-first tools. Launch in 15 minutes.",
  keywords: [
    "Sendexa",
    "Ghana SMS API",
    "WhatsApp Business API Ghana",
    "Africa Payment Gateway",
    "Bulk SMS Ghana",
    "Developer APIs Africa",
    "High-Deliverability Email",
    "OTP Service Ghana",
    "MTN/Vodafone Mobile Money",
    "Ghana Payment Gateway",
    "SMS Marketing Ghana",
    "WhatsApp Marketing Ghana",
    "Email Marketing Ghana",
    "AI Customer Engagement",
    "Ghana Business APIs",
    "Ghana Communication APIs",
    "Ghana Messaging APIs",
    "Ghana Bulk SMS",
    "Ghana WhatsApp API",
    "Ghana Email API",
  ],
  openGraph: {
    title: "Sendexa | All-in-One Platform for Communications & Payments in Africa",
    description: "Everything to engage customers and collect payments: Messaging APIs, Payment Gateway, and AI-powered tools. Get 10,000 free SMS/WhatsApp credits on signup.",
    url: "https://sendexa.co",
    images: [
      {
        url: "https://sendexa.co/og/homepage-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Platform Dashboard – Manage SMS, WhatsApp, Email & Payments in One Place",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Africa's Best APIs | 99.9% Uptime Guarantee",
    description: "Node.js, Python & PHP SDKs available. Pre-integrated with all Ghanaian telecoms and banks. 24/7 support with 15-min SLA.",
    images: ["https://sendexa.co/og/twitter-home.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co"
  },
  verification: {
    google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#0066ff',
    },
  },
  themeColor: '#0066FF',
  manifest: '/site.webmanifest',
  other: {
    'ahrefs-site-verification': 'your-ahrefs-verification-code',
    'msapplication-TileColor': '#0066ff'
  }
};

export default function Home() {
  return (
    <div>
      <HeroSlider />
    </div>
  );
}
