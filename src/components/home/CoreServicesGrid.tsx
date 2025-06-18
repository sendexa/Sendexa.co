"use client";
import React from "react";
import { Container } from "@/layout/Container";
import {
  MessageCircle,
  ShieldCheck,
  Code,
  Repeat,
  BookOpen,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <MessageCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
    ),
    title: "Messaging",
    description:
      "Send SMS, email, and WhatsApp messages with delivery precision.",
  },
  {
    icon: (
      <ShieldCheck className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
    ),
    title: "OTP & Security",
    description:
      "Protect accounts and transactions with OTPs and two-factor authentication.",
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-300" />,
    title: "Developer APIs",
    description: "Integrate fast with RESTful APIs and SDKs built for scale.",
  },
  {
    icon: <Repeat className="w-8 h-8 text-green-600 dark:text-green-300" />,
    title: "Webhooks & Callbacks",
    description:
      "Automate workflows with instant delivery receipts and event hooks.",
  },
  {
    icon: <Server className="w-8 h-8 text-purple-600 dark:text-purple-300" />,
    title: "SMPP Gateway",
    description:
      "Direct telecom-level access for high-volume messaging via SMPP.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-cyan-600 dark:text-cyan-300" />,
    title: "Docs & Sandbox",
    description:
      "Test and explore Sendexa’s platform using rich documentation and tools.",
  },
];

export const CoreServicesGrid: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900">
    <Container>
      <div className="relative z-10 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848]"
        >
          Powerful Services. One Platform.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          All your business communication needs, unified in one seamless
          platform.
        </motion.p>
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.04,
              transition: { duration: 0.2 },
            }}
            className="group bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl border-2 border-[#00c2c8]/30 hover:border-[#00c2c8] shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Icon container */}
            <motion.div
              className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#00c2c8]/30 to-[#d4b848]/20 text-[#00c2c8] group-hover:shadow-[0_4px_24px_#00c2c8] transition-all"
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.6 },
              }}
            >
              {React.cloneElement(service.icon, {
                className: "w-8 h-8 text-[#00c2c8]",
              })}
            </motion.div>

            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848] mb-2 group-hover:from-[#d4b848] group-hover:to-[#00c2c8] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-100 text-base group-hover:text-white transition-colors">
              {service.description}
            </p>

            {/* Animated underline */}
            <motion.div
              className="mt-6 w-8 h-1 bg-gradient-to-r from-[#00c2c8]/40 to-[#d4b848]/40 rounded-full group-hover:from-[#00c2c8] group-hover:to-[#d4b848] transition-all"
              whileHover={{
                width: "80%",
                backgroundColor: "#00c2c8",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
