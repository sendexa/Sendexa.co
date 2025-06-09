// components/suggestions/SuggestionHero.tsx
"use client";
import { motion } from 'framer-motion';
import { Container } from '@/layout/Container';

export const SuggestionHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-gray-950 to-gray-950 pt-28 pb-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-6"
          >
            <span>Your Voice Matters</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Share Your <span className="text-purple-400">Suggestions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl"
          >
            Help us improve by sharing your ideas and feedback about our payment solutions and services.
          </motion.p>
        </div>
      </Container>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-800/20 filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};