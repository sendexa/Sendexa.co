

"use client";

import { Zap, Lock, BarChart2, Cpu, Globe2, CheckCircle2, Gauge, Code } from "lucide-react";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Extreme Performance",
    description: "Handle 10,000+ messages per second with our optimized SMPP stack",
    stats: "10,000+ TPS"
  },
  {
    icon: Gauge,
    title: "Low Latency",
    description: "Consistent sub-100ms delivery times worldwide",
    stats: "<100ms"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "TLS 1.3, IP whitelisting, and advanced DDoS protection",
    stats: "TLS 1.3"
  },
  {
    icon: BarChart2,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards with delivery reports and performance metrics",
    stats: "Live Data"
  },
  {
    icon: Cpu,
    title: "Smart Routing",
    description: "AI-powered routing through optimal connections",
    stats: "AI Optimized"
  },
  {
    icon: Globe2,
    title: "Global Coverage",
    description: "Direct connections to 700+ carriers in 200+ countries",
    stats: "200+ Countries"
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "SDKs for all major languages and detailed API docs",
    stats: "7+ SDKs"
  },
  {
    icon: CheckCircle2,
    title: "Compliance Ready",
    description: "GDPR, TCPA, and regional messaging regulations compliance",
    stats: "Full Compliance"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-15">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Built for Mission-Critical Messaging
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Enterprise-grade features designed for high-volume, low-latency messaging at scale
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-medium text-blue-600">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}