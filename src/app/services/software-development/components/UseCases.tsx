'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Building2, CreditCard, Stethoscope } from 'lucide-react';
import { Container } from '@/layout/Container';

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Custom online stores with payment integration",
    examples: [
      "Product catalogs",
      "Shopping carts",
      "Payment gateways",
      "Inventory management"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise Systems",
    description: "Internal tools for business operations",
    examples: [
      "CRM systems",
      "ERP solutions",
      "HR management",
      "Project tracking"
    ]
  },
  {
    icon: CreditCard,
    title: "FinTech Applications",
    description: "Secure financial technology solutions",
    examples: [
      "Banking apps",
      "Payment processors",
      "Investment platforms",
      "Budgeting tools"
    ]
  },
  {
    icon: Stethoscope,
    title: "Healthcare Solutions",
    description: "HIPAA-compliant medical software",
    examples: [
      "Patient portals",
      "Appointment systems",
      "Telemedicine",
      "Medical records"
    ]
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-xl text-[#a6953f] max-w-3xl mx-auto">
            Tailored software for various business sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#a6953f]/30 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-[#a6953f]/30 text-[#a6953f]">
                <useCase.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-gray-400 mb-4">{useCase.description}</p>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-500">Examples:</h4>
                <ul className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-[#a6953f] mr-2">•</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UseCases;