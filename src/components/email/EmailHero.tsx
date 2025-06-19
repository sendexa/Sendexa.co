"use client";
import { MailPlus, Send, Inbox, Clock, Terminal,  Check,  MailCheck } from "lucide-react";
import  Button  from "@/ui/Button";
import { Container } from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { id: 1, value: "99.8%", label: "Inbox Rate", icon: Inbox },
  { id: 2, value: "500M+", label: "Emails Daily", icon: Send },
  { id: 3, value: "98%", label: "Open Rate", icon: MailCheck },
  { id: 4, value: "50ms", label: "Avg Send Time", icon: Clock },
];

const emailExamples = [
  { 
    id: "E1A2B3", 
    subject: "Your receipt #42791", 
    status: "delivered", 
    delay: "45ms",
    type: "transactional",
    from: "receipts@company.com",
    to: "user@example.com"
  },
  { 
    id: "C4D5E6", 
    subject: "Password reset requested", 
    status: "opened", 
    delay: "52ms",
    type: "security",
    from: "no-reply@company.com",
    to: "user@gmail.com"
  },
  { 
    id: "F7G8H9", 
    subject: "Weekly newsletter", 
    status: "delivered", 
    delay: "38ms",
    type: "bulk",
    from: "news@company.com",
    to: "subscriber@domain.com"
  },
  { 
    id: "I0J1K2", 
    subject: "Account verification", 
    status: "failed", 
    delay: "62ms",
    type: "transactional",
    from: "verify@company.com",
    to: "newuser@example.org"
  },
];

export const EmailHero = () => {
  const [currentEmail, setCurrentEmail] = useState(0);
  const [sendRate, setSendRate] = useState(12500);
  const [isSending, setIsSending] = useState(true);

  useEffect(() => {
    // Simulate email cycling
    const emailInterval = setInterval(() => {
      setCurrentEmail(prev => (prev + 1) % emailExamples.length);
    }, 3500);

    // Simulate send rate fluctuations
    const rateInterval = setInterval(() => {
      setSendRate(prev => Math.max(8000, Math.min(20000, prev + (Math.random() > 0.5 ? 250 : -250))));
    }, 1800);

    // Simulate sending status
    const sendingInterval = setInterval(() => {
      setIsSending(() => Math.random() > 0.1); // 90% chance to keep sending
    }, 6000);

    return () => {
      clearInterval(emailInterval);
      clearInterval(rateInterval);
      clearInterval(sendingInterval);
    };
  }, []);

  return (
    <section className="relative bg-gray-900 border-b border-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-green-900/20 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-96 -right-96 w-[600px] h-[600px] bg-green-800/20 rounded-full filter blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
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
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-green-900/30 text-green-300 border border-green-800/50 backdrop-blur-sm"
              >
                <MailPlus className="w-5 h-5" />
                <span className="font-medium">Email API</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-green-200"
              >
                High-Performance <br />Email Delivery
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
              >
                Send high-inbox-rate transactional and bulk emails at scale with our reliable email API. Enterprise-grade infrastructure with real-time analytics.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-95">
                  Start Sending <Send className="ml-1 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg text-white font-semibold border-gray-700 hover:bg-gray-800/50 transition-all hover:scale-[1.02] active:scale-95">
                  <Terminal className="mr-2 w-5 h-5" /> API Reference
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
                      <stat.icon className="w-5 h-5 text-green-400" />
                      <p className="text-2xl font-bold text-green-400">{stat.value}</p>
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
              <div className="absolute -inset-8 bg-green-900/20 rounded-2xl blur-2xl -z-10" />
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  {/* Email API Visualization */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${isSending ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
                        <span className="font-mono text-sm text-gray-300">Email Service</span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${isSending ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'}`}>
                        {isSending ? 'ACTIVE' : 'DEGRADED'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>Send Rate</span>
                        <span>{isSending ? `${(sendRate/1000).toFixed(1)}K/min` : '--'}</span>
                      </div>
                      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isSending ? 'bg-green-500' : 'bg-yellow-500'} animate-[pulse_2s_infinite]`} 
                          style={{ width: isSending ? `${Math.min(100, (sendRate / 20000) * 100)}%` : '30%' }} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-green-500/50">
                        <p className="text-gray-400 text-sm">Inbox Rate</p>
                        <p className="text-green-400 font-bold text-xl">
                          {isSending ? `${(Math.random() * 0.3 + 99.5).toFixed(1)}%` : '--'}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-green-500/50">
                        <p className="text-gray-400 text-sm">Avg Send Time</p>
                        <p className="text-green-400 font-bold text-xl">
                          {isSending ? `${Math.floor(Math.random() * 20 + 40)}ms` : '--'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={emailExamples[currentEmail].id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs text-green-400">ID:{emailExamples[currentEmail].id}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded ${
                                emailExamples[currentEmail].status === 'delivered' ? 'bg-green-900/30 text-green-400' : 
                                emailExamples[currentEmail].status === 'opened' ? 'bg-blue-900/30 text-blue-400' : 
                                'bg-red-900/30 text-red-400'
                              }`}>
                                {emailExamples[currentEmail].status}
                              </span>
                              <span className="text-xs px-1.5 py-0.5 rounded bg-gray-700 text-gray-300">
                                {emailExamples[currentEmail].type}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">{emailExamples[currentEmail].delay}</span>
                          </div>
                          
                          <div className="bg-gray-900/50 rounded p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-white truncate">
                                {emailExamples[currentEmail].subject}
                              </p>
                              {emailExamples[currentEmail].status === 'opened' && (
                                <Check className="w-4 h-4 text-green-400" />
                              )}
                            </div>
                            
                            <div className="flex justify-between text-xs text-gray-400">
                              <span className="truncate">From: {emailExamples[currentEmail].from}</span>
                              <span className="truncate ml-2">To: {emailExamples[currentEmail].to}</span>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="h-[1px] bg-gray-700/50 w-full" />
                      
                      <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>ISP: <span className="text-green-400">Primary</span></span>
                        <span>Retries: <span className="text-green-400">2/3</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-600/10 rounded-full filter blur-xl animate-[pulse_8s_infinite]" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-400/10 rounded-full filter blur-xl animate-[pulse_6s_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};