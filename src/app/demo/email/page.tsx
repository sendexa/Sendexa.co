'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Input } from '@/ui/input';
import Button from '@/ui/Button';
import { Send, Loader2, Mail, CheckCircle } from 'lucide-react';
import { Container } from '@/layout/Container';

export default function EmailDemo() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      setError('Please enter a valid email address');
      return;
    }

    // Validate required fields
    if (!email || !subject || !message) {
      const missingFields = [];
      if (!email) missingFields.push('email');
      if (!subject) missingFields.push('subject');
      if (!message) missingFields.push('message');
      
      const errorMessage = `Please fill in the following fields: ${missingFields.join(', ')}`;
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    setIsSending(true);
    setError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Email sent successfully!');
        setIsSent(true);
        setTimeout(() => {
          setEmail('');
          setSubject('');
          setMessage('');
          setIsSent(false);
        }, 3000);
      } else {
        let errorMessage = 'Failed to send email';
        
        // Handle specific error cases
        if (data.error) {
          if (data.error.includes('SMTP')) {
            errorMessage = 'Unable to connect to email server. Please try again later.';
          } else if (data.error.includes('authentication')) {
            errorMessage = 'Email server authentication failed. Please contact support.';
          } else if (data.error.includes('recipient')) {
            errorMessage = 'Invalid recipient email address. Please check and try again.';
          } else if (data.error.includes('timeout')) {
            errorMessage = 'Request timed out. Please try again.';
          } else {
            errorMessage = data.error;
          }
        }
        
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      let errorMessage = 'Failed to send email';
      
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
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email API Demo</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Send Emails Instantly
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-4"
            >
              Test how easy it is to deliver secure emails to your users in seconds with Sendexa.
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
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Send Email</h2>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Recipient Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter recipient email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Enter email subject"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all resize-none"
                    />
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
                      disabled={isSending || isSent}
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
                          Email Sent!
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Email
                        </span>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <p className="text-sm text-gray-400">
                    Your emails are sent through our secure SMTP server with end-to-end encryption and delivery tracking.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
