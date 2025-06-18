import { Metadata } from "next";
import { PricingSection } from "./components/PricingSection";
import PageHeader from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";

export const metadata: Metadata = {
  title: "Pricing | Flexible Plans for Every Business",
  description:
    "Explore Sendexa's affordable pricing plans for SMS, Email, Voice, and OTP APIs. Choose the perfect plan to scale your business communication.",
  openGraph: {
    title: "Sendexa Pricing - Flexible Communication Plans",
    description:
      "Compare pricing for SMS, Email, Voice & OTP services. Transparent rates to suit startups, SMEs, and enterprises.",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function Pricing() {

return (
    <>
      <PageHeader
        title="Pricing Plans"
        description="Simple, transparent pricing that grows with your business. No hidden fees."
        backgroundImage="https://picsum.photos/seed/about-header/1920/400"
      />
      <PricingSection />
        <CTA />
    </>
  );
}
