
import { Metadata } from 'next';
import ProductHero from './components/ProductHero';
import DevelopmentFeatures from './components/DevelopmentFeatures';
import ProcessSection from './components/ProcessSection';
import UseCases from './components/UseCases';
import TechnologyStack from './components/TechnologyStack';
import PricingSection from './components/PricingSection';
import { CTA } from '@/components/common/CTA';

export const metadata: Metadata = {
  title: "Sendexa Software Development | Custom Web & Mobile Applications",
  description:
    "Build scalable web and mobile applications tailored to your business needs with modern, efficient technologies and expert development teams.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "scalable applications",
    "enterprise software",
    "SaaS development",
    "software solutions",
  ],
  authors: [{ name: "Sendexa Team", url: "https://sendexa.co" }],
  creator: "Sendexa",
  publisher: "Sendexa Ltd",
  metadataBase: new URL("https://sendexa.co"),
  openGraph: {
    title: "Sendexa Software Development | Custom Web & Mobile Applications",
    description:
      "Build scalable web and mobile applications tailored to your business needs with modern, efficient technologies and expert development teams.",
    url: "https://sendexa.co/products/software-development",
    siteName: "Sendexa",
    images: [
      {
        url: "https://sendexa.co/og-software-dev.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Software Development - Custom Web & Mobile Applications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendexa Software Development | Custom Application Solutions",
    description:
      "Expert development of scalable web and mobile applications using modern technologies tailored to your business requirements.",
    site: "@sendexa",
    creator: "@sendexa",
    images: ["https://sendexa.co/og-software-dev.png"],
  },
  alternates: {
    canonical: "/products/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <ProductHero />
      <DevelopmentFeatures />
      <ProcessSection />
      <UseCases />
      <TechnologyStack />
      <PricingSection />
      <CTA />
    </div>
  );
}