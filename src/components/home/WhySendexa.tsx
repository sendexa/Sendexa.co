"use client";
import React from "react";
import { Container } from "@/layout/Container";
import { Layers, Globe, DollarSign, Code, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Unified fintech + communications platform",
    description: "All your messaging and payment needs in one place."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Local-first infrastructure (built for Africa)",
    description: "Optimized for reliability and speed across Africa."
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Transparent pricing & instant onboarding",
    description: "No hidden fees. Get started in minutes."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Developer-friendly APIs",
    description: "Simple, well-documented APIs for fast integration."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "99.99% uptime with real-time delivery tracking",
    description: "Enterprise-grade reliability and transparency."
  }
];

export const WhySendexa: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
    <Container>
      <div className="relative z-10 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#a6953f] to-[#d4b848]"
        >
          Why Teams Choose Sendexa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          The platform of choice for modern African businesses and developers.
        </motion.p>
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8,
              scale: 1.04,
              transition: { duration: 0.2 }
            }}
            className="group bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl border-2 border-[#a6953f]/30 hover:border-[#a6953f] shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Icon container */}
            <motion.div 
              className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#a6953f]/30 to-[#d4b848]/20 text-[#a6953f] group-hover:shadow-[0_4px_24px_#a6953f] transition-all"
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.6 }
              }}
            >
              {React.cloneElement(feature.icon, { className: "w-8 h-8 text-[#a6953f]" })}
            </motion.div>

            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a6953f] to-[#d4b848] mb-2 group-hover:from-[#d4b848] group-hover:to-[#a6953f] transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-100 text-base group-hover:text-white transition-colors">
              {feature.description}
            </p>

            {/* Animated underline */}
            <motion.div 
              className="mt-6 w-8 h-1 bg-gradient-to-r from-[#a6953f]/40 to-[#d4b848]/40 rounded-full group-hover:from-[#a6953f] group-hover:to-[#d4b848] transition-all"
              whileHover={{
                width: "80%",
                backgroundColor: "#a6953f",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);