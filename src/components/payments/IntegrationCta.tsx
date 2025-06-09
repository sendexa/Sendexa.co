"use client";
import { motion } from 'framer-motion';
import { BadgeCent, Zap, Code } from 'lucide-react';

export const IntegrationCta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/50 via-gray-950 to-gray-950">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 mb-6">
            <BadgeCent className="w-5 h-5 mr-2" />
            <span>Ready to Transform Your Payments?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started in <span className="text-blue-400">Minutes</span>
          </h2>
          
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Start processing payments immediately with our developer-friendly API.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-blue-600/20 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get API Keys
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-blue-400 text-blue-100 hover:bg-blue-900/50 rounded-lg font-medium transition-colors text-lg flex items-center"
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Documentation
            </motion.button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-400">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-400">PCI DSS Level 1</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-400">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};