"use client";
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Gamepad2, Globe, GraduationCap, HeartHandshake,  } from 'lucide-react';
import { Container } from '@/layout/Container';


const useCases = [
  {
    icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
    title: "E-commerce Platforms",
    description: "Accept payments from global customers with optimized checkout flows",
    features: [
      "One-click payments",
      "Subscription billing",
      "Dynamic currency conversion",
      "Fraud protection"
    ]
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Marketplaces",
    description: "Split payments between multiple parties with escrow services",
    features: [
      "Multi-party payouts",
      "On-demand withdrawals",
      "1099-K reporting",
      "Dispute resolution"
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    title: "SaaS Platforms",
    description: "Manage subscriptions and recurring billing with ease",
    features: [
      "Automated invoicing",
      "Usage-based billing",
      "Dunning management",
      "Tax compliance"
    ]
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-blue-400" />,
    title: "Nonprofits & Donations",
    description: "Collect donations securely with customizable forms",
    features: [
      "Recurring donations",
      "Donor management",
      "Gift aid processing",
      "Impact reporting"
    ]
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-blue-400" />,
    title: "Gaming & Entertainment",
    description: "Monetize games and apps with in-app purchases",
    features: [
      "Virtual goods sales",
      "Subscription models",
      "Player analytics",
      "Secure transactions"
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    title: "Education & E-Learning",
    description: "Accept tuition and course fees online",
    features: [
      "Course subscriptions",
      "Student management",
      "Payment plans",
      "Certificate issuance"
    ]
  }
];

export const UseCases = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto">
        <Container>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powering <span className="text-blue-400">Business Models</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Tailored solutions for every type of payments need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-900/20 mr-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
        </div>
      </Container>
      </div>
    </section>
  );
};