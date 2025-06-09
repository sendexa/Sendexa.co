// components/suggestions/SuggestionDetails.tsx
"use client";
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ThumbsUp, Zap } from 'lucide-react';

export const SuggestionDetails = () => {
  const suggestionInfo = [
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "What to Suggest",
      description: "Product features, API improvements, UI/UX, documentation, or anything else!",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-purple-400" />,
      title: "Our Promise",
      description: "Every suggestion is reviewed by our team and considered for future updates.",
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Implementation",
      description: "Popular suggestions may be prioritized in our development roadmap.",
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Follow Up",
      description: "We may contact you for more details about your suggestion.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Suggestion <span className="text-purple-400">Guidelines</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {suggestionInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-400/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-purple-900/20 mr-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6"
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600/20 mr-4">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">How We Use Suggestions</h3>
            <p className="text-gray-400">
              Your feedback directly influences our product roadmap. We regularly implement top suggestions and notify our community about updates.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};