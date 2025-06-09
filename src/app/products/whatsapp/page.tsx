import ProductHero from "@/components/whatsapp/ProductHero";
import Features from '@/components/whatsapp/Features';
import Templates from '@/components/whatsapp/Templates';
import Integration from '@/components/whatsapp/Integration';
import Industries from '@/components/whatsapp/Industries';
import Pricing from '@/components/whatsapp/Pricing';
import Testimonials from '@/components/whatsapp/Testimonials';
import CtaSection from '@/components/whatsapp/CtaSection';
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sendexa WhatsApp Business API – Reliable, Secure & Scalable Messaging",
//   description:
//     "Send alerts, OTPs, and customer support messages at scale using Sendexa’s WhatsApp Business API. Fast, secure, and developer-friendly solution for businesses in Ghana.",
//   openGraph: {
//     title: "Sendexa WhatsApp Business API – Reliable, Secure & Scalable Messaging",
//     description:
//       "Scale your business communication with Sendexa’s WhatsApp Business API. Enjoy reliable delivery, strong security, and easy integration.",
//     url: "https://sendexa.co/products/whatsapp",
//     images: [
//       {
//         url: "https://sendexa.co/og/whatsapp-api.png",
//         alt: "Sendexa WhatsApp Business API Preview",
//       },
//     ],
//     siteName: "Sendexa",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sendexa WhatsApp Business API – Reliable, Secure & Scalable Messaging",
//     description:
//       "Fast and secure WhatsApp messaging API for alerts, OTPs, and customer support tailored for Ghanaian businesses.",
//     images: ["https://sendexa.co/og/whatsapp-api.png"],
//   },
// };

export const metadata: Metadata = {
  title: "WhatsApp Business API Ghana | Sendexa – 99.9% Delivery Rate & 1s Replies",
  description: "Official WhatsApp partner for Ghanaian businesses. Send 10,000+ messages/second for alerts, OTPs & support. Pre-approved templates & 24/7 deliverability monitoring. Free 500 messages/month.",
  keywords: [
    "WhatsApp Business API Ghana",
    "WhatsApp Marketing Ghana",
    "Bulk WhatsApp Messaging",
    "WhatsApp OTP Service",
    "WhatsApp Chatbot API",
    "Official WhatsApp Solution",
    "Ghana Customer Engagement",
    "High-Volume WhatsApp"
  ],
  openGraph: {
    title: "Official WhatsApp API Provider | 5x Faster Approval Than Competitors",
    description: "Exclusive Meta partner in Ghana: Pre-approved message templates, AI-powered chatbots, and real-time analytics. Get green tick verification for your business number.",
    url: "https://sendexa.co/products/whatsapp",
    images: [
      {
        url: "https://sendexa.co/og/whatsapp-api-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa WhatsApp Dashboard – Live Message Analytics with MTN/Vodafone Carrier Status",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "From Zero to WhatsApp API in 72 Hours | Sendexa Official Partner",
    description: "Skip the 6-week Meta waitlist. Our pre-vetted templates and compliance team guarantee fastest approval in Ghana. SDKs for Node.js, Python & PHP included.",
    images: ["https://sendexa.co/og/twitter-whatsapp-api.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/whatsapp"
  },
  verification: {
    google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code'
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
    }
  },
  appLinks: {
    web: {
      url: 'https://sendexa.co/products/whatsapp',
      should_fallback: false,
    }
  },
  icons: {
    icon: '/favicon-whatsapp.png', // WhatsApp-branded icon
    apple: '/apple-touch-icon-whatsapp.png',
  },
  themeColor: '#25D366', // WhatsApp green
};


export default function WhatsAppApiPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <Features />
      <Templates />
      <Integration />
      <Industries />
      <Pricing />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
