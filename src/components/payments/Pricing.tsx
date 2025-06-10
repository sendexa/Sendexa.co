"use client";
import { motion } from "framer-motion";
import { ComparisonTable } from "@/components/payments/shared/ComparisonTable";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "1.9% + $0.10",
    description: "For small businesses and startups",
    features: {
      "Monthly volume": "Up to $50K",
      "Payment methods": "All included",
      "Fraud prevention": "Basic",
      Settlement: "T+2",
      Support: "Email",
      "Chargeback protection": false,
    },
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "1.5% + $0.08",
    description: "For scaling businesses",
    features: {
      "Monthly volume": "Up to $500K",
      "Payment methods": "All included",
      "Fraud prevention": "Advanced",
      Settlement: "T+1",
      Support: "24/5 Chat",
      "Chargeback protection": true,
    },
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume businesses",
    features: {
      "Monthly volume": "Unlimited",
      "Payment methods": "All included + local acquiring",
      "Fraud prevention": "Premium AI",
      Settlement: "Same day",
      Support: "24/7 Dedicated",
      "Chargeback protection": true,
    },
    cta: "Contact Sales",
  },
];

const competitors = [
  {
    name: "Stripe",
    fees: "2.9% + $0.30",
    features: {
      "Local payment methods": "Limited",
      "FX rates": "2% markup",
      "Settlement speed": "T+2 standard",
      "Fraud prevention": "Extra cost",
    },
  },
  {
    name: "PayPal",
    fees: "3.49% + $0.49",
    features: {
      "Local payment methods": "Very limited",
      "FX rates": "4% markup",
      "Settlement speed": "T+3 standard",
      "Fraud prevention": "Basic",
    },
  },
];

export const Pricing = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-blue-400">Competitive Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transparent pricing with volume discounts. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border p-8 ${plan.popular ? "border-blue-400 bg-gray-900" : "border-gray-800 bg-gray-900/50"}`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-400 ml-1">per transaction</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {Object.entries(plan.features).map(([key, value]) => (
                  <li key={key} className="flex items-center justify-between">
                    <span className="text-gray-400">{key}</span>
                    {typeof value === "boolean" ? (
                      value ? (
                        <Check className="w-5 h-5 text-blue-400" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600" />
                      )
                    ) : (
                      <span className="text-gray-300 font-medium">{value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open(`https://bo.sendexa.co`)}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-700"}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <button
            className="flex items-center justify-between w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-left"
            onClick={() => setShowComparison(!showComparison)}
          >
            <span className="text-lg font-medium">
              How we compare to other payment providers
            </span>
            {showComparison ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <ComparisonTable
                ourProduct="Our Payments API"
                competitors={competitors}
                theme="blue"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
