import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import { CoreServicesGrid } from "@/components/home/CoreServicesGrid";
import { WhySendexa } from "@/components/home/WhySendexa";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { DeveloperTools } from "@/components/home/DeveloperTools";
import { CTA } from "@/components/common/CTA";
import { Partners } from "./Partners";

export const Homepage: React.FC = () => (
  <>
    <div>
      <HeroSlider />
      <CoreServicesGrid />
      <Partners />
      <FeatureShowcase />
      <WhySendexa />
      <TestimonialsCarousel />
      <DeveloperTools />
      <CTA />
    </div>
  </>
);

export default Homepage;
