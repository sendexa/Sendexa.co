import ProductHero from "@/components/otp/ProductHero";
import Features from '@/components/otp/Features';
import Channels from '@/components/otp/Channels';
import Integration from '@/components/otp/Integration';
import UseCases from '@/components/otp/UseCases';
import Pricing from '@/components/otp/Pricing';
import Testimonials from '@/components/otp/Testimonials';
import CtaSection from '@/components/otp/CtaSection';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ghana's Fastest OTP API | 99.9% Delivery Rate in <1 Second | Sendexa",
  description: "Secure user logins with Africa's most reliable OTP service. Deliver codes via SMS, Email & WhatsApp in 800ms. Free 500 OTPs/day – PCI DSS & GDPR compliant.",
  keywords: [
    "OTP Service Ghana",
    "SMS Verification API",
    "WhatsApp OTP Ghana",
    "Two-Factor Authentication",
    "Developer OTP API",
    "Fraud Prevention Ghana",
    "MTN/Vodafone OTP Delivery",
    "High-Speed Verification"
  ],
  openGraph: {
    title: "Stop Account Takeovers | Sendexa OTP API – 40% Faster Than Competitors",
    description: "Trusted by Ghanaian banks & fintechs: Military-grade encryption, automatic retries, and real-time analytics. Integrate in 7 lines of code with our Node.js/Python SDKs.",
    url: "https://sendexa.co/products/otp",
    images: [
      {
        url: "https://sendexa.co/og/otp-api-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa OTP Dashboard – Live Delivery Metrics Across MTN, Vodafone & AirtelTigo Networks",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Zero to Secure Logins in 5 Minutes | Sendexa OTP API",
    description: "Pre-whitelisted on all Ghanaian telecoms for 99.9% OTP delivery. Get webhook alerts for failed attempts + automatic fallback to WhatsApp.",
    images: ["https://sendexa.co/og/twitter-otp-api.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/otp"
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
    icon: '/favicon-otp.png', // Custom OTP-themed icon
    apple: '/apple-touch-icon-otp.png',
  },
  themeColor: '#28a745', // Security-green branding
};

export default function OtpApiPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <Features />
      <Channels />
      <Integration />
      <UseCases />
      <Pricing />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
