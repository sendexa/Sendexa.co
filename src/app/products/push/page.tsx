import ProductHero from "@/components/push/ProductHero";
import { FeaturesGrid } from "@/components/push/FeaturesGrid";
import { ComparisonSection } from "@/components/push/ComparisonSection";
import { IntegrationSection } from "@/components/push/IntegrationSection";
import { TestimonialsSection } from "@/components/push/TestimonialsSection";
import { PricingSection } from "@/components/push/PricingSection";
import { FinalCTA } from "@/components/push/FinalCTA";
import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Sendexa Push Notifications – Instant, Reliable & Engaging Alerts",
//   description:
//     "Send browser and in-app notifications users never miss with Sendexa’s Push Notifications API. Modern, fast, secure, developer-friendly, and affordable notification service for businesses in Ghana.",
//   openGraph: {
//     title: "Sendexa Push Notifications – Instant, Reliable & Engaging Alerts",
//     description:
//       "Keep your users engaged with Sendexa’s Push Notifications. Real-time, scalable, and easy-to-integrate solution for your web and mobile apps.",
//     url: "https://sendexa.co/products/push",
//     images: [
//       {
//         url: "https://sendexa.co/og/push-notifications.png",
//         alt: "Sendexa Push Notifications Preview",
//       },
//     ],
//     siteName: "Sendexa",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sendexa Push Notifications – Instant, Reliable & Engaging Alerts",
//     description:
//       "Modern push notifications API for browser and in-app alerts designed for businesses in Ghana seeking fast and secure engagement.",
//     images: ["https://sendexa.co/og/push-notifications.png"],
//   },
// };

export const metadata: Metadata = {
  title: "#1 Push Notification Service in Ghana | Sendexa - 99.8% Delivery Rate",
  description: "Ghana's highest-performing push notification API with sub-second delivery. Increase user engagement by 3x with our intelligent scheduling, segmentation & analytics. Free 1,000 notifications/month.",
  keywords: [
    "Push Notifications Ghana",
    "Web Push API",
    "In-App Alerts",
    "Browser Notifications",
    "User Engagement Tool",
    "Ghana App Developers",
    "Real-time Notifications",
    "High Delivery Rate Alerts"
  ],
  openGraph: {
    title: "Push Notifications That Convert | Sendexa - 3x Higher CTR Than Email",
    description: "Proven to boost app retention by 40% - Sendexa's notification platform delivers personalized alerts with our easy-to-integrate SDKs and powerful segmentation tools for Ghanaian businesses.",
    url: "https://sendexa.co/products/push",
    images: [
      {
        url: "https://sendexa.co/og/push-notifications-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Push Dashboard - Create Targeted Notification Campaigns in Ghana",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "From 0 to Push in 7 Minutes | Sendexa Developer-First Notification API",
    description: "Get our React, Flutter & Android SDKs with complete docs. Special Ghanaian carrier optimizations prevent notification delays during peak hours.",
    images: ["https://sendexa.co/og/twitter-push-notifications.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/push"
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
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['https://sendexa.co/verify']
    }
  },
  appLinks: {
    web: {
      url: 'https://sendexa.co/products/push',
      should_fallback: false,
    }
  }
};

export default function PushApiPage() {
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
