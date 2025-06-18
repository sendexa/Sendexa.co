'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '@/layout/Container';

const pricingTiers = [
  {
    name: "Starter",
    price: "$5,000",
    unit: "small project",
    description: "For basic applications and MVPs",
    features: [
      "Basic web application",
      "Up to 5 pages",
      "Simple backend",
      "Standard UI",
      "1 month support"
    ],
    limitations: [
      "No mobile version",
      "Basic hosting",
      "No advanced features"
    ]
  },
  {
    name: "Business",
    price: "$15,000",
    unit: "mid-size project",
    description: "For growing businesses with more complex needs",
    features: [
      "Custom web application",
      "Mobile responsive",
      "Advanced backend",
      "Custom UI/UX",
      "3 months support",
      "Basic analytics"
    ],
    limitations: [
      "Limited integrations",
      "Standard security"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "large-scale solution",
    description: "For mission-critical applications at scale",
    features: [
      "Web & mobile apps",
      "Microservices architecture",
      "Enterprise-grade security",
      "Advanced analytics",
      "24/7 support",
      "DevOps pipeline",
      "Ongoing maintenance"
    ],
    limitations: []
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-950" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Pricing</h2>
          <p className="text-xl text-[#a6953f] max-w-3xl mx-auto">
            Transparent pricing for custom software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-900/50 border rounded-xl overflow-hidden ${
                tier.name === "Business" 
                  ? "border-[#a6953f] shadow-lg shadow-[#a6953f]/20" 
                  : "border-gray-800"
              }`}
            >
              <div className="p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-1">{tier.price}</div>
                <div className="text-gray-400 mb-4">{tier.unit}</div>
                <p className="text-[#a6953f]">{tier.description}</p>
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Includes:</h4>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.limitations.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold mb-4 text-red-400">Limitations:</h4>
                    <ul className="space-y-3">
                      {tier.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <X className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="p-4 bg-gray-900/30 border-t border-gray-800 text-center">
                <button 
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                    tier.name === "Business"
                      ? "bg-[#a6953f] hover:bg-[#a6953f]/90"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;