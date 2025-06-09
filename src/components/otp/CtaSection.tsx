"use client";
import { motion } from 'framer-motion';
import { LockKeyhole } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/50 via-gray-950 to-gray-950">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-300 mb-6">
            <LockKeyhole className="w-5 h-5 mr-2" />
            <span>Ready to Secure Your App?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started with Our <span className="text-indigo-400">OTP API</span> Today
          </h2>
          
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
            Start with 1,000 free OTPs every month. No credit card required.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-indigo-600/20"
            >
              Get API Keys - Free Tier
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-indigo-400 text-indigo-100 hover:bg-indigo-900/50 rounded-lg font-medium transition-colors text-lg"
            >
              Talk to Security Expert
            </motion.button>
          </div>
          
          <p className="mt-6 text-gray-400 text-sm">
            SOC 2 Type II certified • HIPAA compliant • GDPR ready
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;