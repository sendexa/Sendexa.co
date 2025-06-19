"use client";
import { MessageSquareText, Globe, Terminal, Send, Check, Gauge, Route } from "lucide-react";
import Button from "@/ui/Button";
import { Container } from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { id: 1, value: "99.99%", label: "Delivery Rate", icon: Check },
  { id: 2, value: "200+", label: "Countries", icon: Globe },
  { id: 3, value: "50ms", label: "Avg Latency", icon: Gauge },
  { id: 4, value: "1000+", label: "Direct Routes", icon: Route },
];

const messageExamples = [
  { id: "A1B2C3", status: "delivered", content: "Your OTP is 7942", delay: "18ms" },
  { id: "D4E5F6", status: "sent", content: "Appointment reminder: Tomorrow 2PM", delay: "22ms" },
  { id: "G7H8I9", status: "delivered", content: "Your package is out for delivery", delay: "15ms" },
  { id: "J0K1L2", status: "queued", content: "Your bill is ready: $42.50 due 5/15", delay: "9ms" },
];

export const SMSHero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [sendRate, setSendRate] = useState(1250);
  const [isSending, setIsSending] = useState(true);

  useEffect(() => {
    // Simulate message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messageExamples.length);
    }, 2500);

    // Simulate send rate fluctuations
    const rateInterval = setInterval(() => {
      setSendRate(prev => Math.max(800, Math.min(2500, prev + (Math.random() > 0.5 ? 75 : -75))));
    }, 1500);

    // Simulate sending status
    const sendingInterval = setInterval(() => {
      setIsSending(() => Math.random() > 0.1);
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(rateInterval);
      clearInterval(sendingInterval);
    };
  }, []);

  return (
    <section className="relative bg-gray-900 border-b border-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-yellow-900/20 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-96 -right-96 w-[600px] h-[600px] bg-yellow-800/20 rounded-full filter blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
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
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-yellow-900/30 text-yellow-300 border border-yellow-800/50 backdrop-blur-sm"
              >
                <MessageSquareText className="w-5 h-5" />
                <span className="font-medium">SMS API</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200"
              >
                Global SMS Delivery <br />API Platform
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
              >
                Deliver mission-critical SMS worldwide with intelligent local routing, real-time analytics, and 99.99% delivery reliability.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-95">
                  Start Sending <Send className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-4 text-white text-lg font-semibold border-gray-700 hover:bg-gray-800/50 transition-all hover:scale-[1.02] active:scale-95">
                  <Terminal className="mr-2 w-5 h-5" /> API Documentation
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.id} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm hover:border-yellow-500/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-yellow-400" />
                      <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
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
              <div className="absolute -inset-8 bg-yellow-900/20 rounded-2xl blur-2xl -z-10" />
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  {/* SMS API Visualization */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${isSending ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
                        <span className="font-mono text-sm text-gray-300">SMS Gateway</span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${isSending ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'}`}>
                        {isSending ? 'ACTIVE' : 'PAUSED'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>Send Rate</span>
                        <span>{isSending ? `${sendRate.toLocaleString()} msg/s` : '0 msg/s'}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isSending ? 'bg-yellow-500' : 'bg-yellow-500'} animate-[pulse_2s_infinite] transition-all duration-500`} 
                          style={{ width: isSending ? `${Math.min(100, (sendRate / 2500) * 100)}%` : '0%' }} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-yellow-500/50">
                        <p className="text-gray-400 text-sm">Current Month</p>
                        <p className="text-yellow-400 font-bold text-xl">
                          {isSending ? `${Math.floor(sendRate * 43200).toLocaleString()} sent` : 'Paused'}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-yellow-500/50">
                        <p className="text-gray-400 text-sm">Success Rate</p>
                        <p className="text-yellow-400 font-bold text-xl">
                          {isSending ? `${(Math.random() * 0.5 + 99.5).toFixed(2)}%` : '--'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 space-y-3 hover:border-yellow-500/30 transition-colors">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={messageExamples[currentMessage].id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-1"
                        >
                          <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                            <span className="text-yellow-400">ID:{messageExamples[currentMessage].id}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${
                              messageExamples[currentMessage].status === 'delivered' ? 'bg-green-900/30 text-green-400' : 
                              messageExamples[currentMessage].status === 'sent' ? 'bg-yellow-900/30 text-yellow-400' : 
                              'bg-yellow-900/30 text-yellow-400'
                            }`}>
                              {messageExamples[currentMessage].status}
                            </span>
                            <span className="ml-auto text-gray-500">{messageExamples[currentMessage].delay}</span>
                          </div>
                          <p className="text-sm text-gray-200 font-medium">
                            {messageExamples[currentMessage].content}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="h-[1px] bg-gray-700 w-full" />
                      
                      <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>Route: <span className="text-yellow-400">Direct Carrier</span></span>
                        <span>Cost: <span className="text-yellow-400">₵0.012</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-600/10 rounded-full filter blur-xl animate-[pulse_8s_infinite]" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400/10 rounded-full filter blur-xl animate-[pulse_6s_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};