import { ServiceType } from "./PricingSelector";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  cta: string;
};

const plans: Record<ServiceType, Plan[]> = {
  sms: [
    {
      name: "Starter",
      price: "₵ 0.028/Per Unit",
      features: [
        "1-2999 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year"
      ],
      cta: "Get Started",
    },
    {
      name: "Premium",
      price: "₵ 0.026/Per Unit",
      features: [
        "3,000-10,000 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year"
      ],
      recommended: true,
      cta: "Choose Premium",
    },
    {
      name: "Professional",
      price: "₵ 0.024/Per Unit",
      features: [
        "10,001-80,000 SMS/unit",
        "Excellent delivery rate",
        "Flat rate across all networks",
        "Free SMS account",
        "Duplicate number removal",
        "24/7 Live support",
        "Plus API",
        "Expires after 1 year"
      ],
      cta: "Go Professional",
    },
  ],
  email: [
    {
      name: "Basic",
      price: "$0.10/100 emails",
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
      price: "$0.08/100 emails",
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
      price: "Custom pricing",
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
      price: "$0.015/minute",
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
      price: "$0.012/minute",
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
      price: "Custom pricing",
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
    <Container>
      <div className="grid md:grid-cols-3 gap-8">
        {servicePlans.map((plan, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
            className={`relative rounded-xl shadow-lg overflow-hidden ${
              plan.recommended
                ? "border-2 border-teal-500 transform md:-translate-y-4"
                : "border border-gray-200"
            } bg-white`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-8 -translate-y-1">
                POPULAR
              </div>
            )}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                {plan.recommended && (
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-teal-600 mb-1">{plan.price}</p>
                {service === 'sms' && (
                  <p className="text-sm text-gray-500">Volume discounts available</p>
                )}
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg ${
                  plan.recommended
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg"
                    : "bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 hover:border-teal-700"
                } transition-all duration-200 flex items-center justify-center gap-2`}
              >
                {plan.cta}
                {plan.recommended && <Zap className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}