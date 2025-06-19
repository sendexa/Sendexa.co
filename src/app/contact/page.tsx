import { Metadata } from "next";
import  ContactHero  from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactMap } from "@/components/contact/ContactMap";
//import { Testimonials } from "@/components/payments/Testimonials";
import { Container } from "@/layout/Container";
//import dynamic from "next/dynamic";
import Script from "next/script";


// const testimonialData = [
//   {
//     quote:
//       "Sendexa's support team resolved our integration issue in under 30 minutes. Incredible response time!",
//     name: "Ama Serwaa",
//     title: "Technical Lead",
//     company: "PayTech Ghana",
//     avatar: "/avatars/ama.jpg",
//     stats: [
//       { label: "Response Time", value: "<30 min" },
//       { label: "Resolution", value: "100%" },
//     ],
//   },
//   {
//     quote:
//       "The sales team understood our complex payment needs immediately and proposed the perfect solution.",
//     name: "Kofi Ansah",
//     title: "Head of Payments",
//     company: "AfroCommerce",
//     avatar: "/avatars/kofi.jpg",
//   },
//   {
//     quote:
//       "We migrated from another provider with zero downtime thanks to Sendexa's onboarding team.",
//     name: "Esi Boateng",
//     title: "CTO",
//     company: "QuickPay Africa",
//     avatar: "/avatars/esi.jpg",
//     stats: [
//       { label: "Migration Time", value: "2 Days" },
//       { label: "Uptime", value: "100%" },
//     ],
//   },
// ];

export const metadata: Metadata = {
  title: "Contact Sendexa | Payments API Support & Sales",
  description:
    "Get in touch with our payments experts for API integration help, sales inquiries, or technical support. We're here to help 24/7.",
  keywords: [
    "Sendexa contact",
    "Payment API support",
    "Ghana fintech contact",
    "Payment gateway support",
    "Technical support Ghana",
  ],
  openGraph: {
    title: "Contact Sendexa Payments Team | 24/7 Support",
    description:
      "Reach out to our payments experts for API integration help, sales inquiries, or technical support. Available around the clock.",
    url: "https://sendexa.co/contact",
    images: [
      {
        url: "https://sendexa.co/og/contact-us.png",
        width: 1200,
        height: 630,
        alt: "Sendexa Contact Page - Get in touch with our payments team",
      },
    ],
    siteName: "Sendexa",
  },
  alternates: {
    canonical: "https://sendexa.co/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="beforeInteractive"
      />
      <div className="bg-gray-950 text-gray-100 min-h-screen">
        <ContactHero />

        <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <Container>
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <ContactForm />
                </div>
                <div className="lg:w-1/2">
                  <ContactDetails />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <ContactMap />
      </div>
    </>
  );
}
