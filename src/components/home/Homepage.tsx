import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import { CoreServicesGrid } from "@/components/home/CoreServicesGrid";
import { WhySendexa } from "@/components/home/WhySendexa";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { CalloutHighlight } from "@/components/home/CalloutHighlight";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { DeveloperTools } from "@/components/home/DeveloperTools";
import { CTA } from "@/components/common/CTA";
import { Partners } from "./Partners";

export const Homepage: React.FC = () => (
  <>
    <div>
      <HeroSlider />
      <CoreServicesGrid />
      <FeatureShowcase />
      <WhySendexa />
      <DashboardPreview />
      <CalloutHighlight />
      <TestimonialsCarousel />
      <Partners />
      <DeveloperTools />
      <CTA />
    </div>
  </>
);

export default Homepage;
