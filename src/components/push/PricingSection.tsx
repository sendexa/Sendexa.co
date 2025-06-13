"use client";
import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for testing and small projects",
    cta: "Get Started",
    popular: false,
    features: [
      "10,000 notifications/month",
      "Basic analytics",
      "Email support",
      "3 regions",
      "Standard delivery",
    ],
  },
  {
    name: "Growth",
    price: "$99",
    description: "For growing businesses with moderate volume",
    cta: "Start Free Trial",
    popular: true,
    features: [
      "100,000 notifications/month",
      "Advanced analytics",
      "Priority support",
      "6 regions",
      "Optimal Timing AI",
      "Precision targeting",
      "A/B testing",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume and mission-critical notifications",
    cta: "Contact Sales",
    popular: false,
    features: [
      "Millions+ notifications/month",
      "Real-time analytics",
      "24/7 dedicated support",
      "All 12 regions",
      "Advanced AI optimization",
      "SOC 2 compliance",
      "Custom IPs",
      "Security review",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-400">Simple, Predictable</span> Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Pay only for what you use with transparent per-notification pricing.
            Volume discounts available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border ${plan.popular ? "border-purple-500/30 bg-gray-900/50" : "border-gray-800 bg-gray-900/30"}`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                {plan.price !== "Custom" && (
                  <div className="text-sm text-gray-400 mb-6">
                    then ${plan.name === "Starter" ? "0.80" : "0.65"}/1000
                    notifications
                  </div>
                )}
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <button
                  onClick={() => window.open(`https://app.sendexa.co`)}
                  className={`w-full py-3 rounded-lg font-medium mb-8 transition-colors ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Need Custom Solutions?
              </h3>
              <p className="text-gray-400">
                Our team can design a custom notification infrastructure
                solution tailored to your specific requirements and volume
                needs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="px-6 py-3 border border-purple-400 text-purple-100 hover:bg-purple-900/50 rounded-lg font-medium transition-colors">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
