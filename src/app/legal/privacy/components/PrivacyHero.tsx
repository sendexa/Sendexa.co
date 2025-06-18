// app/privacy/components/PrivacyHero.tsx
"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">
                Data Protection
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-6 md:text-5xl lg:text-6xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto"
          >
            Last Updated: June 15, 2023
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}