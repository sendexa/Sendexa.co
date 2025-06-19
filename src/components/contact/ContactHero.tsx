"use client";

import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      {/* Glowing Background */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#00c2c8]/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-[#00c2c8] rounded-full mb-6"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="font-medium">Talk to Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            We’re Here to Help — Reach Out Anytime
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Whether you’re a developer, business owner, or partner — our Accra-based team is ready to support you every step of the way.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
