"use client";
import { Clipboard, Settings, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

const steps = [
  {
    icon: <Clipboard className="w-8 h-8 text-[#111e4f]" />,
    title: "Sign Up",
    description: "Create your account in under 2 minutes",
    highlight: "No credit card required",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#111e4f]" />,
    title: "Configure",
    description: "Set up your SMS routes and API settings",
    highlight: "Guided onboarding",
  },
  {
    icon: <Users className="w-8 h-8 text-[#111e4f]" />,
    title: "Integrate",
    description: "Connect with our API or use pre-built solutions",
    highlight: "5+ SDKs available",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#111e4f]" />,
    title: "Go Live",
    description: "Launch your communication flows",
    highlight: "24/7 support",
  },
];

export default function HowItWorks() {
  return (
    // <section className="py-15 bg-white">
    <section className="py-15 bg-gradient-to-b from-[#f6f9ff] via-white to-[#fdfdfd]">

      <Container>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#fcd116]/20 text-[#111e4f] rounded-full text-sm font-medium mb-4 border border-[#fcd116]/30">
            SIMPLE ONBOARDING
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#111e4f] mb-4"
          >
            Get Started in 4 Easy Steps
          </motion.h2>
          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            From signup to production in less time than you think
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-[#e5e7eb] -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#fcd116]/10 rounded-full animate-pulse"></div>
                  <div className="relative bg-white p-5 rounded-full border-2 border-[#111e4f]/10">
                    {step.icon}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#fcd116] text-[#111e4f] text-xs font-bold px-2 py-0.5 rounded-full shadow">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#111e4f] mb-2">{step.title}</h3>
                <p className="text-[#4b5563] mb-2">{step.description}</p>
                <p className="text-sm text-[#fcd116] font-medium">{step.highlight}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 text-[#d1d5db]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
