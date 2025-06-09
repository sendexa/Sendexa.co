// components/suggestions/SuggestionForm.tsx
"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export const SuggestionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    suggestion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suggestion submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Share Your <span className="text-purple-400">Idea</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-3 text-gray-500">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-3 text-gray-500">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-3 text-gray-500">
              <MessageSquare className="w-5 h-5" />
            </div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-gray-300 appearance-none"
              required
            >
              <option value="">Select Category</option>
              <option value="product">Product Features</option>
              <option value="api">API Improvements</option>
              <option value="ui">User Interface</option>
              <option value="support">Customer Support</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <textarea
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            placeholder="Your Suggestion (Be as detailed as possible)"
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
            required
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Suggestion
        </motion.button>
      </form>
    </motion.div>
  );
};