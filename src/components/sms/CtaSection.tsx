"use client";
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-900/50 via-gray-950 to-gray-950">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-900/30 text-yellow-300 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span>Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building with Our <span className="text-yellow-400">SMS API</span> Today
          </h2>
          
          <p className="text-lg text-yellow-200 mb-8 max-w-2xl mx-auto">
            Get your API keys in seconds and send your first message in minutes.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-yellow-600/20"
            >
              Get API Keys - Free Trial
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-yellow-400 text-yellow-100 hover:bg-yellow-900/50 rounded-lg font-medium transition-colors text-lg"
            >
              Talk to an Expert
            </motion.button>
          </div>
          
          <p className="mt-6 text-gray-400 text-sm">
            No credit card required • 10,000 free messages/month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;