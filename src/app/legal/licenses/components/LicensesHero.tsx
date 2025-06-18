// app/licenses/components/LicensesHero.tsx
"use client";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck } from "lucide-react";

export default function LicensesHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')]"></div>
      </div>
      
      <div className="container px-4 mx-auto relative">
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
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6">
              <ShieldCheck className="w-5 h-5 text-primary-300" />
              <span className="text-sm font-medium text-primary-300 tracking-wider">
                REGULATORY COMPLIANCE
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-white"
          >
            Licenses & Certifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto"
          >
            Verified compliance with telecommunications regulations and industry standards across Africa
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <BadgeCheck className="w-5 h-5 text-primary-300" />
              <span className="text-sm">NCA Licensed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <BadgeCheck className="w-5 h-5 text-primary-300" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}