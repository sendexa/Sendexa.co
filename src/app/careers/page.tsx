import { Metadata } from "next";
import CareersHero from "./components/CareersHero";
import BenefitsSection from "./components/BenefitsSection";
import CultureSection from "./components/CultureSection";
import JobListings from "./components/JobListings";
import CareersCTA from "./components/CareersCTA";

export const metadata: Metadata = {
  title: "Careers – Sendexa",
  description:
    "Join the team that's redefining communication in Africa. Explore career opportunities at Sendexa and grow with us.",
  openGraph: {
    title: "Careers – Sendexa",
    description:
      "We're hiring! Be part of the team building Africa's next-generation communication infrastructure. Explore roles at Sendexa.",
    url: "https://sendexa.co/careers", // Replace with actual URL
    siteName: "Sendexa",
    images: [
      {
        url: "https://picsum.photos/seed/careers-header/1920/400",
        width: 1920,
        height: 400,
        alt: "Sendexa Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers – Sendexa",
    description:
      "Looking to make an impact? Join Sendexa and help shape the future of communication technology in Africa.",
    images: ["https://picsum.photos/seed/careers-header/1920/400"],
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <BenefitsSection />
      <CultureSection />
      <JobListings />
      <CareersCTA />
    </>
  );
}
