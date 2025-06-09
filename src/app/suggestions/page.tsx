// app/suggestions/page.tsx
import { Metadata } from "next";
import { SuggestionHero } from "@/components/suggestions/SuggestionHero";
import { SuggestionForm } from "@/components/suggestions/SuggestionForm";
import { SuggestionDetails } from "@/components/suggestions/SuggestionDetails";
import { SuggestionTestimonials } from "@/components/suggestions/SuggestionTestimonials";
import { Container } from "@/layout/Container";

export const metadata: Metadata = {
  title: "Suggestion Box | Share Your Ideas with Sendexa",
  description:
    "We value your feedback! Share your suggestions to help us improve our payment solutions and services.",
  keywords: [
    "Sendexa suggestions",
    "Payment feedback",
    "Fintech suggestions",
    "Improve payment API",
    "User feedback Ghana",
  ],
};

export default function SuggestionPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <SuggestionHero />
      
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <Container>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <SuggestionForm />
              </div>
              <div className="lg:w-1/2">
                <SuggestionDetails />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <SuggestionTestimonials />
      </Container>
    </div>
  );
}