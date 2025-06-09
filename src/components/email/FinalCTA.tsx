"use client";
import { motion } from 'framer-motion';
import { Mail, Code, Shield } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900/30 via-gray-950 to-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-green-400">Transform</span> Your Email Infrastructure?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Join thousands of developers and businesses who trust our platform for their mission-critical communications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
              <Mail className="w-5 h-5 mr-2 text-green-400" />
              <span>10,000 free emails/month</span>
            </div>
            <div className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              <span>Get started in 5 minutes</span>
            </div>
            <div className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-green-600/20">
              Get API Keys
            </button>
            <button className="px-8 py-4 border border-green-400 text-green-100 hover:bg-green-900/50 rounded-lg font-medium transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};