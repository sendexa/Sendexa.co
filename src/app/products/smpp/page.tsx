import React from "react";
import { SMPPHero } from "@/components/smpp/SMPPHero";
import  FeaturesSection  from "@/components/smpp/FeaturesSection";
import  PerformanceSection  from "@/components/smpp/PerformanceSection";
import  TechnicalSpecs  from "@/components/smpp/TechnicalSpecs";
import  UseCases  from "@/components/smpp/UseCases";
import  PricingSection  from "@/components/smpp/PricingSection";
import  CtaSection  from "@/components/smpp/CtaSection";

export default function SMPPPage() {
  return (
    <>
      <SMPPHero />
      <FeaturesSection />
      <PerformanceSection />
      <TechnicalSpecs />
      <UseCases />
      <PricingSection />
      <CtaSection />
    </>
  );
}
