// app/demo/DemoHero.tsx
"use client";
import { motion } from 'framer-motion';
import { Container } from '@/layout/Container';
// import  Button  from '@/ui/Button';
import {
  //  ArrowRight,
    Sparkles } from 'lucide-react';

export default function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-900/30 filter blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-teal-900/30 to-emerald-900/30 filter blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-amber-900/20 to-yellow-900/20 filter blur-3xl"
        ></motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      </div>

      <Container>
        <div className="text-center relative z-10">
          {/* Badge with sparkle icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/40 text-indigo-300 mb-4 mx-auto border border-indigo-800/50"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Interactive API Demos</span>
          </motion.div>
          
          {/* Main headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
          >
            Experience Sendexa&apos;s Power
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Test our communication and payment APIs directly in your browser before integrating with your applications
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button 
              size="md" 
              className="bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
            >
              Start Exploring Demos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="md" 
              className="text-white border-gray-600 hover:bg-gray-800/50 hover:text-white"
            >
              Get Developer Docs
            </Button>
          </motion.div> */}
        </div>
      </Container>

      {/* Floating animated circles - reduced size */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-indigo-500/80 shadow-lg shadow-indigo-500/30"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-teal-500/80 shadow-lg shadow-teal-500/30"
      ></motion.div>
      <motion.div
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-2/5 right-1/5 w-1.5 h-1.5 rounded-full bg-purple-500/80 shadow-lg shadow-purple-500/30"
      ></motion.div>
    </section>
  );
}