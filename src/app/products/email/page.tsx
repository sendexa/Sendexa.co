import ProductHero from "@/components/email/ProductHero";
import { FeaturesGrid } from "@/components/email/FeaturesGrid";
import { ComparisonSection } from "@/components/email/ComparisonSection";
import { IntegrationSection } from "@/components/email/IntegrationSection";
import { TestimonialsSection } from "@/components/email/TestimonialsSection";
import { PricingSection } from "@/components/email/PricingSection";
import { FinalCTA } from "@/components/email/FinalCTA";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Best Email API in Ghana | Sendexa – 99% Inbox Rate & 1s Delivery",
  description: "Ghana's #1 email delivery API with enterprise-grade security and unmatched deliverability. Send transactional & bulk emails at 1/2 competitor costs. Free 10,000 emails/month for startups.",
  keywords: [
    "Email API Ghana",
    "Transactional Email Service",
    "Bulk Email API",
    "High-Deliverability Email",
    "Email Infrastructure Africa",
    "Developer Email API",
    "SMTP Alternative Ghana",
    "Email Tracking API"
  ],
  openGraph: {
    title: "Email API with 99% Inbox Rate | Sendexa – Avoid Spam Filters in Ghana",
    description: "Trusted by 1000+ Ghanaian businesses: AI-powered email warmup, real-time analytics, and automatic retries ensure your emails reach Gmail, Yahoo & local providers.",
    url: "https://sendexa.co/products/email",
    images: [
      {
        url: "https://sendexa.co/og/email-api-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Email Analytics Dashboard – Monitor Deliverability Across MTN, Vodafone & AirtelTigo Networks",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Code to Inbox in 5 Minutes | Sendexa Email API for Developers",
    description: "REST API & SMTP relay with SDKs in Node.js, Python & PHP. Ghana-specific IP pools prevent blacklisting. Get 24/7 deliverability support.",
    images: ["https://sendexa.co/og/twitter-email-api.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/email"
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    }
  },
  icons: {
    icon: '/favicon-email.png', // Custom icon for email product
    apple: '/apple-touch-icon-email.png',
  },
  themeColor: '#3498db', // Email-branded color
};

export default function EmailApiPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <FeaturesGrid />
      <ComparisonSection />
      <IntegrationSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}
