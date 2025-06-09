"use client";
import { motion } from 'framer-motion';
import { Lock, Shield, Clock, Zap, Cpu, Server } from 'lucide-react';
import { Container } from '@/layout/Container';

const Features = () => {
  const features = [
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "End-to-End Encryption",
      description: "All OTPs are encrypted in transit and at rest with AES-256 encryption."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      title: "GDPR & HIPAA Compliant",
      description: "Built for regulated industries with strict data protection requirements."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "Adjustable Expiry",
      description: "Set OTP expiry from 30 seconds to 10 minutes based on your security needs."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      title: "300ms Delivery",
      description: "Average OTP delivery time of 300ms globally with 99.9% reliability."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Intelligent Routing",
      description: "Automatically selects the fastest delivery channel for each user."
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      title: "Global Infrastructure",
      description: "Multi-region deployment with automatic failover and 99.99% uptime SLA."
    }
  ];

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
            Enterprise-Grade <span className="text-indigo-400">Security</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Built for applications that can&apos;t compromise on security or reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-400/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-indigo-900/20 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600/20 mb-4 md:mb-0 md:mr-6">
              <Shield className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Security Audit Reports</h3>
              <p className="text-gray-400 mb-4">
                We undergo regular third-party security audits. Enterprise customers can request full audit reports.
              </p>
              <button className="px-6 py-2 border border-indigo-400 text-indigo-100 hover:bg-indigo-900/50 rounded-lg font-medium transition-colors">
                Request Security Documentation
              </button>
            </div>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Features;