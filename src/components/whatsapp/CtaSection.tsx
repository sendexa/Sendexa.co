"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-lime-900/50 via-gray-950 to-gray-950">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-lime-900/30 text-lime-300 mb-6">
            <FaWhatsapp className="w-5 h-5 mr-2" />
            <span>Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Using <span className="text-lime-400">WhatsApp Business API</span> Today
          </h2>
          
          <p className="text-lg text-lime-200 mb-8 max-w-2xl mx-auto">
            Get started with 1,000 free messages every month. No credit card required.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-lime-600 hover:bg-lime-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-lime-600/20"
            >
              Get API Keys
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-lime-400 text-lime-100 hover:bg-lime-900/50 rounded-lg font-medium transition-colors text-lg"
            >
              Book Demo
            </motion.button>
          </div>
          
          <p className="mt-6 text-gray-400 text-sm">
            Official WhatsApp Business Solution Provider • 24/7 Support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;