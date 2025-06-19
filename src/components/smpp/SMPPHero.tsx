"use client";
import { Server, Zap, Globe, Clock, BarChart2, Terminal, ChevronRight } from "lucide-react";
import  Button  from "@/ui/Button";
import { Container } from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { id: 1, value: "99.95%", label: "Uptime SLA", icon: Zap },
  { id: 2, value: "3000+", label: "Direct Routes", icon: Globe },
  { id: 3, value: "24/7", label: "Support", icon: Clock },
  { id: 4, value: "50ms", label: "Avg Latency", icon: BarChart2 },
];

const smppMessages = [
  { id: "8273A1", type: "submit_sm", status: "success", delay: "12ms" },
  { id: "B293C4", type: "deliver_sm", status: "success", delay: "18ms" },
  { id: "D495E6", type: "submit_sm", status: "success", delay: "15ms" },
  { id: "F697G8", type: "query_sm", status: "pending", delay: "9ms" },
];

export const SMPPHero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isConnected, setIsConnected] = useState(true);
  const [throughput, setThroughput] = useState(1250);

  useEffect(() => {
    // Simulate connection status changes
    const connectionInterval = setInterval(() => {
      setIsConnected(() => Math.random() > 0.1); // 90% chance to stay connected
    }, 8000);

    // Simulate message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % smppMessages.length);
    }, 3000);

    // Simulate throughput fluctuations
    const throughputInterval = setInterval(() => {
      setThroughput(prev => Math.max(800, Math.min(2000, prev + (Math.random() > 0.5 ? 50 : -50))));
    }, 2000);

    return () => {
      clearInterval(connectionInterval);
      clearInterval(messageInterval);
      clearInterval(throughputInterval);
    };
  }, []);

  return (
    <section className="relative bg-gray-900 border-b border-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-96 -left-96 w-[600px] h-[600px] bg-blue-900/10 rounded-full filter blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-96 -right-96 w-[600px] h-[600px] bg-blue-800/10 rounded-full filter blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
      </div>

      <Container>
        <div className="relative z-10 py-24">
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
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-blue-900/50 text-blue-400 border border-blue-800/50 backdrop-blur-sm"
              >
                <Server className="w-5 h-5" />
                <span className="font-medium">SMPP Gateway</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
              >
                Next-Gen SMPP <br />Integration Platform
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
              >
                Enterprise-grade SMPP connectivity with intelligent routing, real-time analytics, and 99.95% SLA. Scale your messaging infrastructure with our global telecom network.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 text-lg text-white font-semibold transition-all hover:scale-[1.02] active:scale-95">
                  Get Started <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-8 py-4 text-lg text-white font-semibold border-gray-700 hover:bg-gray-800/50 transition-all hover:scale-[1.02] active:scale-95">
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
                  <div key={stat.id} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-blue-400" />
                      <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
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
              <div className="absolute -inset-8 bg-blue-900/20 rounded-2xl blur-2xl -z-10" />
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  {/* SMPP Connection Visualization */}
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                        <span className="font-mono text-sm text-gray-300">SMPP Session</span>
                      </div>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${isConnected ? 'bg-green-900/30 text-green-400 border border-green-800/50' : 'bg-red-900/30 text-red-400 border border-red-800/50'}`}>
                        {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs text-gray-400 font-mono">
                        <span>bind_transceiver</span>
                        <span>{isConnected ? `${(Math.random() * 2).toFixed(1)}ms` : '--'}</span>
                      </div>
                      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isConnected ? 'bg-blue-500' : 'bg-red-500'} animate-[pulse_2s_infinite]`} 
                          style={{ width: isConnected ? `${Math.random() * 80 + 20}%` : '0%' }} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-blue-500/50">
                        <p className="text-gray-400 text-sm">Throughput</p>
                        <p className="text-blue-400 font-bold text-xl">
                          {isConnected ? `${throughput.toLocaleString()} TPS` : '--'}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 transition-all hover:border-blue-500/50">
                        <p className="text-gray-400 text-sm">Latency</p>
                        <p className="text-blue-400 font-bold text-xl">
                          {isConnected ? `${Math.floor(Math.random() * 30 + 10)}ms avg` : '--'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 space-y-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={smppMessages[currentMessage].id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-2 text-xs font-mono text-gray-300"
                        >
                          <span className="text-blue-400">1</span>
                          <span>{smppMessages[currentMessage].type}</span>
                          <span className={`${smppMessages[currentMessage].status === 'success' ? 'text-green-400' : 'text-yellow-400'}`}>
                            [ID:{smppMessages[currentMessage].id}]
                          </span>
                          <span className="ml-auto text-gray-500">{smppMessages[currentMessage].delay}</span>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="h-[1px] bg-gray-700/50 w-full" />
                      
                      <div className="flex justify-between text-xs text-gray-500 font-mono">
                        <span>Connected to: <span className="text-blue-400">smpp.sendexa.org:2775</span></span>
                        <span>Window: <span className="text-blue-400">16</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl animate-[pulse_8s_infinite]" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400/10 rounded-full filter blur-xl animate-[pulse_6s_infinite_reverse]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};