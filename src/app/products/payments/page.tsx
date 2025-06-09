import ProductHero from "@/components/payments/ProductHero";
import { PaymentFeatures } from "@/components/payments/PaymentFeatures";
import { PaymentMethods } from "@/components/payments/PaymentMethods";
import { GlobalCoverage } from "@/components/payments/GlobalCoverage";
import { DeveloperExperience } from "@/components/payments/DeveloperExperience";
import { UseCases } from "@/components/payments/UseCases";
import { SecurityCompliance } from "@/components/payments/SecurityCompliance";
import { Pricing } from "@/components/payments/Pricing";
import { Testimonials } from "@/components/payments/Testimonials";
import { IntegrationCta } from "@/components/payments/IntegrationCta";
import { Metadata } from "next";

const testimonialData = [
  {
    quote:
      "Sendexa helped us scale our payments infrastructure rapidly with zero downtime.",
    name: "Kwame Mensah",
    title: "CTO",
    company: "ShopMate Ghana",
    avatar: "/avatars/kwame.jpg",
    stats: [
      { label: "Monthly Volume", value: "₵2M+" },
      { label: "Uptime", value: "100%" },
    ],
  },
  {
    quote: "The integration was seamless and support was outstanding.",
    name: "Linda Owusu",
    title: "Head of Operations",
    company: "QuickCart",
    avatar: "/avatars/linda.jpg",
  },
  {
    quote: "With Sendexa, we now offer faster and more secure checkouts.",
    name: "Yaw Asante",
    title: "CEO",
    company: "PayTribe",
    avatar: "/avatars/yaw.jpg",
    stats: [
      { label: "Conversion Boost", value: "30%" },
      { label: "Customer Satisfaction", value: "95%" },
    ],
  },
];

// export const metadata: Metadata = {
//   title: "Sendexa Payments API – Fast, Secure & Developer-Friendly Payment Solutions",
//   description:
//     "Integrate Sendexa Payments API to collect mobile money, cards, and bank payments instantly. Secure, reliable, and affordable payment processing for Ghanaian businesses.",
//   openGraph: {
//     title: "Sendexa Payments API – Fast, Secure & Developer-Friendly Payment Solutions",
//     description:
//       "Accept and disburse payments effortlessly with Sendexa’s Payments API. Enjoy fast transaction processing, robust security, and seamless integrations.",
//     url: "https://sendexa.co/products/payments",
//     images: [
//       {
//         url: "https://sendexa.co/og/payments-api.png",
//         alt: "Sendexa Payments API Preview",
//       },
//     ],
//     siteName: "Sendexa",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sendexa Payments API – Fast, Secure & Developer-Friendly Payment Solutions",
//     description:
//       "Secure and affordable payment gateway API supporting mobile money, card, and bank transfers for businesses in Ghana.",
//     images: ["https://sendexa.co/og/payments-api.png"],
//   },
// };

export const metadata: Metadata = {
  title: "#1 Payments API in Ghana | Sendexa – 99.99% Uptime & 0.5s Settlements",
  description: "Process Mobile Money, Cards & Bank Transfers in Ghana with Africa’s fastest Payments API. 100+ pre-built integrations, fraud protection, and 1-click chargebacks. Start with 0% fees for 3 months.",
  keywords: [
    "Payment Gateway Ghana",
    "Mobile Money API",
    "Flutterwave Alternative",
    "Paystack Competitor",
    "Hubtel Competitor",
    "Sendexa Payments",
    "Ghana Payment Processing",
    "Developer-Friendly Payments",
    "Instant Settlement API",
    "MTN/AirtelTigo/Vodafone Mobile Money"
  ],
  openGraph: {
    title: "End-to-End Payments Infrastructure | Sendexa – 3x Faster Than Competitors",
    description: "Used by 2,000+ Ghanaian businesses: Unified API for collections, payouts, subscriptions & cross-border transfers. PCI-DSS compliant with military-grade encryption.",
    url: "https://sendexa.co/products/payments",
    images: [
      {
        url: "https://sendexa.co/og/payments-api-2024.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Payments Dashboard – Real-Time MTN MoMo, Visa & Bank Transfers Analytics",
      },
    ],
    siteName: "Sendexa",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payments API That Closes Sales | 95% Checkout Conversion Rate",
    description: "Pre-activated for all Ghanaian telecoms + Visa/Mastercard. SDKs for React Native, Flutter & Swift. Get webhook alerts for failed transactions.",
    images: ["https://sendexa.co/og/twitter-payments-api.png"],
    site: "@SendexaGH",
    creator: "@SendexaDevs",
  },
  alternates: {
    canonical: "https://sendexa.co/products/payments"
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
    ios: {
      url: 'sendexa://payments',
      app_store_id: 'your_app_store_id',
    },
    android: {
      url: 'sendexa://payments',
      package: 'com.sendexa.payments',
    }
  }
};

export default function PaymentApiPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <PaymentFeatures />
      <PaymentMethods />
      <GlobalCoverage />
      <DeveloperExperience />
      <UseCases />
      <SecurityCompliance />
      <Pricing />
      <Testimonials testimonials={testimonialData} theme="blue" />
      <IntegrationCta />
    </div>
  );
}
