'use client';
import { motion } from 'framer-motion';
import { CodeXml, Cpu,  Globe, Server } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';
import Link from 'next/link';
import React from 'react';

const ProductHero = () => {
  const stats = [
    { value: '100+', label: 'Projects Delivered', icon: CodeXml },
    { value: '24/7', label: 'Support', icon: Server },
    { value: '50+', label: 'Technologies', icon: Cpu },
    { value: 'Global', label: 'Clients', icon: Globe }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#a6953f]/20 to-gray-950 pt-32 pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#a6953f]/30 text-[#a6953f] mb-6"
            >
              <CodeXml className="w-5 h-5 mr-2" />
              <span>Custom Development</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Tailored <span className="text-[#a6953f]">Software Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[#a6953f] mb-10 max-w-2xl"
            >
              Build scalable web and mobile applications tailored to your business needs with modern, efficient technologies.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center text-sm bg-[#a6953f]/30 text-[#a6953f] px-4 py-2 rounded-full"
                >
                  {React.createElement(stat.icon, { className: "w-4 h-4 mr-2" })}
                  <span>{stat.label}: {stat.value}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#a6953f] hover:bg-[#a6953f]/90 rounded-lg font-medium transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="#pricing" 
                className="px-8 py-4 border border-[#a6953f] text-[#a6953f] hover:bg-[#a6953f]/20 rounded-lg font-medium transition-colors text-lg"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/images/software-dev-dashboard.png"
                alt="Software Development Dashboard with Code"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl border border-gray-800"
                priority
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#a6953f] rounded-xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#a6953f]/70 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a6953f]/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#a6953f]/20 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-[#a6953f]/10 rounded-full filter blur-2xl"></div>
      </div>
    </section>
  );
};

export default ProductHero;