"use client";
import { motion } from 'framer-motion';
import { Shield, Lock, FileText,  Check } from 'lucide-react';
import { Container } from '@/layout/Container';

export const SecurityCompliance = () => {
  const certifications = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      name: "PCI DSS Level 1",
      description: "Highest level of payment security certification"
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      name: "SOC 2 Type II",
      description: "Audited security controls and procedures"
    },
    // Add more certifications
  ];

  const securityFeatures = [
    "End-to-end encryption",
    "Tokenization of sensitive data",
    "Regular penetration testing",
    "Hardware Security Modules (HSMs)",
    "Multi-factor authentication",
    "Real-time fraud monitoring"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
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
            Enterprise <span className="text-blue-400">Security</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Built with security and compliance at the core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications & Compliance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-900/20 mr-4">
                      {cert.icon}
                    </div>
                    <h4 className="text-lg font-medium">{cert.name}</h4>
                  </div>
                  <p className="text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Security Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-gray-900/50 p-4 rounded-lg border border-gray-800"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                  </div>
                  <span className="ml-3 text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-4 md:mb-0 md:mr-6">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Security Documentation</h3>
              <p className="text-gray-400 mb-4">
                Access our comprehensive security documentation and compliance reports.
              </p>
              <button className="px-6 py-2 border border-blue-400 text-blue-100 hover:bg-blue-900/50 rounded-lg font-medium transition-colors">
                Request Security Pack
              </button>
            </div>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};