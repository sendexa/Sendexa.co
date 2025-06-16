// app/demo/sms/page.tsx
"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { MessageSquare,  CheckCircle, Shield, Send, Loader2 } from "lucide-react";
import Button from "@/ui/Button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function SmsDemoPage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSendSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number format
    if (!phone || !phone.startsWith('233')) {
      const errorMessage = 'Phone number must start with 233';
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    // Validate message
    if (!message || message.trim().length === 0) {
      const errorMessage = 'Message cannot be empty';
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    setIsSending(true);
    setError("");
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('SMS sent successfully!');
        setIsSent(true);
        setTimeout(() => {
          setPhone('');
          setMessage('');
          setIsSent(false);
        }, 3000);
      } else {
        let errorMessage = 'Failed to send SMS';
        
        // Handle specific error cases
        if (data.error) {
          if (data.error.includes('Invalid phone number')) {
            errorMessage = 'Invalid phone number format. Must start with 233';
          } else if (data.error.includes('rate limit')) {
            errorMessage = 'Rate limit exceeded. Please try again in a minute.';
          } else if (data.error.includes('authentication')) {
            errorMessage = 'SMS service authentication failed. Please contact support.';
          } else {
            errorMessage = data.error;
          }
        }
        
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      let errorMessage = 'Failed to send SMS';
      
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'Request timed out. Please try again.';
        } else {
          errorMessage = error.message;
        }
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  const handleTemplateClick = () => {
    setMessage("👋 Welcome to Sendexa — your all-in-one platform for fast, secure, and reliable communications. Let's help you connect better!");
  };

  return (
    <div className="bg-gray-950 min-h-screen relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-950/50 pt-16 pb-12 border-b border-gray-800/50 backdrop-blur-sm">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/40 text-indigo-300 mb-6 mx-auto border border-indigo-800/50 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">SMS API Demo</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Send SMS Messages Instantly
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-4"
            >
              Experience Sendexa&apos;s reliable SMS delivery with 99.9% success rate across all networks in Ghana
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Demo Section */}
      <section className="py-12 relative">
        <Container>
          <div className="max-w-xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-sm relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Send Test SMS</h2>
                </div>

                <form onSubmit={handleSendSMS} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="233XXXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white h-12 text-base backdrop-blur-sm focus:border-indigo-500/50 focus:ring-indigo-500/20"
                    />
                    <p className="mt-1.5 text-sm text-gray-500">Enter a valid Ghana phone number (e.g., 233570099699)</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                        Message
                      </label>
                      <button
                        onClick={handleTemplateClick}
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Use Template
                      </button>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white min-h-[120px] text-base resize-none backdrop-blur-sm focus:border-indigo-500/50 focus:ring-indigo-500/20"
                    />
                    <p className="mt-1.5 text-sm text-gray-500">
                      {message.length} characters (160 characters per SMS)
                    </p>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-400 text-sm bg-red-900/20 border border-red-800/50 rounded-lg p-3">
                      {error}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={!phone || !message || isSending}
                      className="w-full h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-base font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
                    >
                      {isSending ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin h-5 w-5" />
                          Sending...
                        </span>
                      ) : isSent ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send SMS
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
                    <Shield className="w-4 h-4" />
                    <span>Your message is encrypted and secure</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}