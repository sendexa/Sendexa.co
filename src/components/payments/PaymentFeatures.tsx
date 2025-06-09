"use client";
import { motion } from 'framer-motion';
import { AnimatedTabs } from '@/components/payments/shared/AnimatedTabs';
import { CreditCard, RefreshCw, Shield,  Zap, Check } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const features = [
  {
    title: "Payment Processing",
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    description: "Accept cards, wallets, bank transfers, and local payment methods",
    highlights: [
      "Dynamic currency conversion",
      "Smart routing to optimize approval rates",
      "3D Secure 2.0 authentication",
      "One-click payments"
    ]
  },
  {
    title: "Payouts",
    icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
    description: "Send funds globally to bank accounts, cards, and mobile wallets",
    highlights: [
      "Same-day settlements",
      "FX at competitive rates",
      "Mass payout automation",
      "Recipient verification"
    ]
  },
  {
    title: "Risk Management",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    description: "AI-powered fraud prevention and compliance tools",
    highlights: [
      "Real-time fraud scoring",
      "Chargeback protection",
      "AML screening",
      "Custom rules engine"
    ]
  }
];

export const PaymentFeatures = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto ">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete <span className="text-blue-400">Payments Infrastructure</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to accept, process, and manage payments globally.
          </p>
        </motion.div>

        <AnimatedTabs tabs={features} color="blue">
          {(tab) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{tab.title}</h3>
                <p className="text-lg text-gray-400 mb-6">{tab.description}</p>
                <ul className="space-y-3">
                  {tab.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-400" />
                        </div>
                      </div>
                      <span className="ml-3 text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src={`/images/feature-${tab.title.toLowerCase().replace(' ', '-')}.png`}
                    alt={tab.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </AnimatedTabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-4 md:mb-0 md:mr-6">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Need custom payment flows?</h3>
              <p className="text-gray-400 mb-4">
                Our solutions engineers can design a payment stack tailored to your business model and regulatory requirements.
              </p>
              <button className="px-6 py-2 border border-blue-400 text-blue-100 hover:bg-blue-900/50 rounded-lg font-medium transition-colors">
                Contact Payments Experts
              </button>
            </div>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};