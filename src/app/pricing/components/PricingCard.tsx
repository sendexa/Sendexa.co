"use client";

import { ServiceType } from "./PricingSelector";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import { Check, ChevronRight, Zap } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  cta: string;
};

const plans: Record<ServiceType, Plan[]> = {
  sms: [
    {
      name: "Starter",
      price: "₵0.028",
      description: "Perfect for small projects and testing",
      features: [
        "1-2999 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year",
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "₵0.026",
      description: "For growing businesses with higher volume",
      features: [
        "3,000-10,000 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year",
      ],
      recommended: true,
      cta: "Choose Premium",
    },
    {
      name: "Professional",
      price: "₵0.024",
      description: "For mission-critical communications",
      features: [
        "10,001-80,000 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year",
      ],
      cta: "Go Professional",
    },
  ],
  email: [
    {
      name: "Basic",
      price: "$0.10/100",
      description: "Perfect for small email campaigns",
      features: [
        "Up to 10,000 emails/month",
        "Email templates",
        "Basic tracking",
        "Standard support",
      ],
      cta: "Start Sending",
    },
    {
      name: "Professional",
      price: "$0.08/100",
      description: "For growing businesses with higher volume",
      features: [
        "Up to 100,000 emails/month",
        "Advanced analytics",
        "A/B testing",
        "Priority support",
      ],
      recommended: true,
      cta: "Choose Professional",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical email infrastructure",
      features: [
        "Unlimited volume",
        "Dedicated IP",
        "Custom templates",
        "24/7 premium support",
      ],
      cta: "Contact Sales",
    },
  ],
  voice: [
    {
      name: "Pay-as-you-go",
      price: "$0.015/min",
      description: "Perfect for occasional calling",
      features: [
        "Pay only for what you use",
        "Global coverage",
        "Call recording",
        "Basic analytics",
      ],
      cta: "Start Calling",
    },
    {
      name: "Business",
      price: "$0.012/min",
      description: "For growing call volumes",
      features: [
        "Volume discounts",
        "Custom caller ID",
        "Advanced call routing",
        "Priority support",
      ],
      recommended: true,
      cta: "Choose Business",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical calling",
      features: [
        "Unlimited minutes",
        "Dedicated numbers",
        "Custom solutions",
        "24/7 premium support",
      ],
      cta: "Contact Sales",
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

export function PricingCard({ service }: { service: ServiceType }) {
  const servicePlans = plans[service];

  return (
    <section className="py-15 bg-gradient-to-b from-yellow-50 via-yellow-100 to-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicePlans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className={`relative rounded-xl border p-8 bg-white shadow-sm hover:shadow-md transition-all ${
                plan.recommended
                  ? "border-yellow-500 ring-2 ring-yellow-500/20"
                  : "border-gray-200"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {!plan.price.includes("/") && plan.price !== "Custom" && (
                    <span className="text-gray-500 ml-1 text-lg">
                      {service === "sms"
                        ? "/SMS"
                        : service === "email"
                          ? "/100 emails"
                          : "/min"}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                  plan.recommended
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                    : "bg-white border border-gray-300 hover:border-yellow-500 text-gray-800"
                }`}
              >
                {plan.cta}{" "}
                {plan.recommended && <ChevronRight className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-yellow-100 rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4 md:mb-0 md:mr-6">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom infrastructure, direct carrier connections, and dedicated support for high-volume messaging across Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors flex items-center gap-1">
                  Contact Sales
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-5 py-2 border border-gray-300 hover:border-yellow-500 text-gray-700 rounded-lg font-medium transition-colors">
                  Download Rate Sheet
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Volume discounts available at higher tiers. Contact us for
            enterprise solutions.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Compare our rates with:{" "}
            <span className="text-yellow-600">Twilio</span> •{" "}
            <span className="text-yellow-600">Infobip</span> •{" "}
            <span className="text-yellow-600">AfricasTalking</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
