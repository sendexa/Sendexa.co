"use client";
import { motion } from 'framer-motion';
import { BadgeCent } from 'lucide-react';
import { Zap, Shield, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const PaymentsHero = () => {
  const features = [
    { icon: <Zap className="w-4 h-4 mr-2" />, text: "Instant transactions" },
    { icon: <Shield className="w-4 h-4 mr-2" />, text: "Bank-level security" },
    { icon: <Users className="w-4 h-4 mr-2" />, text: "Global coverage" },
    { icon: <CheckCircle className="w-4 h-4 mr-2" />, text: "99.9% uptime" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/50 via-gray-950 to-gray-950 pt-28 pb-20 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 mb-6"
            >
              <BadgeCent className="w-5 h-5 mr-2" />
              <span>Payment Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-blue-400">Payments API</span> for Modern Businesses
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-200 mb-8 md:mb-10 max-w-2xl"
            >
              Collect payments, disburse funds, and manage wallets securely with our global payment infrastructure.
            </motion.p>
            
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center text-xs md:text-sm bg-blue-900/30 text-blue-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <button className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-base md:text-lg shadow-lg hover:shadow-blue-600/20">
                Get Started
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border border-blue-400 text-blue-100 hover:bg-blue-900/50 rounded-lg font-medium transition-colors text-base md:text-lg">
                View Documentation
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 text-blue-100 hover:text-white hover:bg-blue-900/30 rounded-lg font-medium transition-colors text-base md:text-lg">
                Case Studies →
              </button>
            </motion.div>


             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-blue-900 overflow-hidden">
                    <Image
                      src={`/avatars/company-${i}.jpg`}
                      alt={`Company ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-blue-300">
                Trusted by 15,000+ businesses worldwide
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative order-1 md:order-2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/payments-dashboard.png"
                alt="Payments API Dashboard with Transaction Analytics"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl border border-gray-800"
                priority
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-800/20 filter blur-3xl"
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
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-800/20 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/5 w-40 h-40 rounded-full bg-blue-600/10 filter blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
    </section>
  );
};

export default PaymentsHero;

