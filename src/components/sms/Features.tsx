"use client";
import { Server, Cpu, Lock, Globe2, Zap, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/layout/Container';

const Features = () => {
  const features = [
    {
      icon: <Server className="w-6 h-6 text-yellow-400" />,
      title: "Enterprise Infrastructure",
      description: "Multi-region deployment with 99.99% uptime SLA and automatic failover."
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      title: "Intelligent Routing",
      description: "Automatically selects the best carrier for maximum deliverability in each region."
    },
    {
      icon: <Lock className="w-6 h-6 text-yellow-400" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption for sensitive communications with optional HIPAA compliance."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-yellow-400" />,
      title: "Global Coverage",
      description: "Direct connections to 1,000+ carriers in 200+ countries with local numbers."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Sub-Second Latency",
      description: "Average delivery time of 300ms with real-time delivery receipts."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-yellow-400" />,
      title: "Advanced Analytics",
      description: "Real-time dashboards with delivery metrics, carrier performance, and cost tracking."
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
            Why Developers Choose Our <span className="text-yellow-400">SMS API</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Built for engineering teams that demand reliability, performance, and transparent pricing.
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
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-yellow-900/20 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        </Container>
      </div>
    </section>
  );
};

export default Features;