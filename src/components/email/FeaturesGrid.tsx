"use client";
import { motion } from 'framer-motion';
import { Mail, Cpu, Globe, ShieldCheck, BarChart2, Code, Clock, Layers } from 'lucide-react';
import { Container } from '@/layout/Container';

const features = [
  {
    icon: <Mail className="w-6 h-6 text-green-400" />,
    title: "Bulk & Transactional Emails",
    description: "Send both marketing campaigns and transactional messages through a single API with built-in segmentation."
  },
  {
    icon: <Cpu className="w-6 h-6 text-green-400" />,
    title: "Intelligent Routing",
    description: "Automatically routes emails through optimal providers based on content, destination, and performance."
  },
  {
    icon: <Globe className="w-6 h-6 text-green-400" />,
    title: "Global Infrastructure",
    description: "12 regions worldwide with automatic failover and latency-based routing for maximum deliverability."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified, GDPR compliant, and end-to-end encryption for sensitive communications."
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-green-400" />,
    title: "Real-time Analytics",
    description: "Track opens, clicks, bounces, and spam complaints with webhook support and granular reporting."
  },
  {
    icon: <Code className="w-6 h-6 text-green-400" />,
    title: "Developer First",
    description: "RESTful API with SDKs for 7 languages, webhooks, and detailed documentation with examples."
  },
  {
    icon: <Clock className="w-6 h-6 text-green-400" />,
    title: "99.99% Uptime SLA",
    description: "Enterprise-grade reliability with multi-cloud redundancy and 24/7 monitoring."
  },
  {
    icon: <Layers className="w-6 h-6 text-green-400" />,
    title: "Unified Inbox API",
    description: "Receive and process incoming emails with our powerful parsing and routing engine."
  }
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container  mx-auto">
        <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-400">Everything You Need</span> in One Email API
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From startups to enterprises, our platform scales with your business needs while maintaining industry-leading deliverability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 hover:bg-gray-900/70 border border-gray-800 rounded-xl p-6 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        </Container>
      </div>
    </section>
  );
};