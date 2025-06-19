"use client";
import { LockKeyhole, ShieldCheck, Zap, Clock, Smartphone, Mail, Terminal, ChevronRight, RotateCw, MessageSquareText } from "lucide-react";
import  Button  from "@/ui/Button";
import { Container } from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { id: 1, value: "99.9%", label: "Delivery Rate", icon: ShieldCheck },
  { id: 2, value: "98%", label: "Read Rate", icon: Smartphone },
  { id: 3, value: "2s", label: "Avg Delivery", icon: Zap },
  { id: 4, value: "24/7", label: "Monitoring", icon: Clock },
];

const otpExamples = [
  { id: "X7F9K2", code: "7942", method: "SMS", delay: "1.8s", status: "verified" },
  { id: "P3M8R6", code: "3689", method: "Email", delay: "2.1s", status: "pending" },
  { id: "A5B2C9", code: "5127", method: "WhatsApp", delay: "1.5s", status: "failed" },
  { id: "D8E4F1", code: "8436", method: "SMS", delay: "2.3s", status: "verified" },
];

export const OTPHero = () => {
  const [currentOtp, setCurrentOtp] = useState(0);
  const [verificationRate, setVerificationRate] = useState(950);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Simulate OTP cycling
    const otpInterval = setInterval(() => {
      setCurrentOtp(prev => (prev + 1) % otpExamples.length);
    }, 3000);

    // Simulate verification rate fluctuations
    const rateInterval = setInterval(() => {
      setVerificationRate(prev => Math.max(500, Math.min(1500, prev + (Math.random() > 0.5 ? 50 : -50))));
    }, 2000);

    // Simulate active status
    const activeInterval = setInterval(() => {
      setIsActive(() => Math.random() > 0.1); // 90% chance to stay active
    }, 7000);

    return () => {
      clearInterval(otpInterval);
      clearInterval(rateInterval);
      clearInterval(activeInterval);
    };
  }, []);

  return (
    <section className="relative bg-gray-900 border-b border-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-indigo-900/20 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-96 -right-96 w-[600px] h-[600px] bg-indigo-800/20 rounded-full filter blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
      </div>

      <Container>
        <div className="relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-900/30 text-indigo-300 border border-indigo-800/50 backdrop-blur-sm"
              >
                <LockKeyhole className="w-5 h-5" />
                <span className="font-medium">OTP API</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200"
              >
                Secure Authentication <br />with OTP Verification
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
              >
                Protect logins, payments, and signups with instant one-time passwords via SMS, Email, or WhatsApp. Enterprise-grade security with global delivery.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 text-white text-lg font-semibold transition-all hover:scale-[1.02] active:scale-95">
                  Get Started <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg text-white font-semibold border-gray-700 hover:bg-gray-800/50 transition-all hover:scale-[1.02] active:scale-95">
                  <Terminal className="mr-2 w-5 h-5" /> Developer Docs
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.id} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-indigo-400" />
                      <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
                    </div>
                    <p className="mt-1 text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-indigo-900/20 rounded-2xl blur-2xl -z-10" />
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  {/* OTP Verification Visualization */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
                        <span className="font-mono text-sm text-gray-300">OTP Service</span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${isActive ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'}`}>
                        {isActive ? 'ACTIVE' : 'DEGRADED'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>Verification Rate</span>
                        <span>{isActive ? `${verificationRate.toLocaleString()}/min` : '--'}</span>
                      </div>
                      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isActive ? 'bg-indigo-500' : 'bg-yellow-500'} animate-[pulse_2s_infinite]`} 
                          style={{ width: isActive ? `${Math.min(100, (verificationRate / 1500) * 100)}%` : '30%' }} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-indigo-500/50">
                        <p className="text-gray-400 text-sm">Success Rate</p>
                        <p className="text-indigo-400 font-bold text-xl">
                          {isActive ? `${(Math.random() * 0.5 + 99.0).toFixed(1)}%` : '--'}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-indigo-500/50">
                        <p className="text-gray-400 text-sm">Avg Delivery</p>
                        <p className="text-indigo-400 font-bold text-xl">
                          {isActive ? `${(Math.random() * 0.5 + 1.5).toFixed(1)}s` : '--'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={otpExamples[currentOtp].id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs text-indigo-400">ID:{otpExamples[currentOtp].id}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                otpExamples[currentOtp].status === 'verified' ? 'bg-green-900/30 text-green-400' : 
                                otpExamples[currentOtp].status === 'pending' ? 'bg-yellow-900/30 text-yellow-400' : 
                                'bg-red-900/30 text-red-400'
                              }`}>
                                {otpExamples[currentOtp].status}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">{otpExamples[currentOtp].delay}</span>
                          </div>
                          
                          <div className="flex items-center justify-between bg-gray-900/50 rounded p-3">
                            <div className="flex items-center gap-3">
                              {otpExamples[currentOtp].method === "SMS" ? (
                                <Smartphone className="w-5 h-5 text-indigo-400" />
                              ) : otpExamples[currentOtp].method === "Email" ? (
                                <Mail className="w-5 h-5 text-indigo-400" />
                              ) : (
                                <MessageSquareText className="w-5 h-5 text-indigo-400" />
                              )}
                              <span className="text-sm text-gray-300">{otpExamples[currentOtp].method}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xl font-bold tracking-widest text-white">
                                {otpExamples[currentOtp].code}
                              </span>
                              <RotateCw className="w-4 h-4 text-indigo-400" />
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="h-[1px] bg-gray-700/50 w-full" />
                      
                      <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>Method: <span className="text-indigo-400">{otpExamples[currentOtp].method}</span></span>
                        <span>Expires: <span className="text-indigo-400">5 min</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-600/10 rounded-full filter blur-xl animate-[pulse_8s_infinite]" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-indigo-400/10 rounded-full filter blur-xl animate-[pulse_6s_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};