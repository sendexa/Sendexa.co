"use client";
import { motion } from 'framer-motion';
import {  Target, Clock, BarChart2, Cpu, Globe, Shield, Inbox, Zap} from 'lucide-react';
import { Container } from '@/layout/Container';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Lightning Fast Delivery",
    description: "300ms median delivery time with 99.99% reliability SLA"
  },
  {
    icon: <Target className="w-6 h-6 text-purple-400" />,
    title: "Precision Targeting",
    description: "Segment users by behavior, location, device, and custom attributes"
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    title: "Optimal Timing AI",
    description: "Our algorithm determines the perfect time to send for each user"
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-purple-400" />,
    title: "Real-time Analytics",
    description: "Track opens, clicks, and conversions with millisecond latency"
  },
  {
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    title: "Smart Throttling",
    description: "Prevent notification fatigue with intelligent rate limiting"
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Global Infrastructure",
    description: "12 regions with automatic failover and latency-based routing"
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption"
  },
  {
    icon: <Inbox className="w-6 h-6 text-purple-400" />,
    title: "Inbox Preview",
    description: "See exactly how your notification will appear before sending"
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
            <span className="text-purple-400">Everything You Need</span> for Push Mastery
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Outperform Firebase with features designed for maximum engagement and developer productivity.
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