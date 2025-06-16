// app/demo/otp/page.tsx
"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import {  CheckCircle,  Send, Loader2, KeyRound, RefreshCw } from "lucide-react";
import Button from "@/ui/Button";
import { Input } from "@/ui/input";
import { useState } from "react";
import { toast } from 'react-hot-toast';

export default function OTPDemo() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [prefix, setPrefix] = useState('');

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number format
    if (!phone || !phone.startsWith('233')) {
      const errorMessage = 'Phone number must start with 233';
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    setIsSending(true);
    setError('');
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('OTP sent successfully!');
        setIsSent(true);
        setPrefix(data.prefix);
        setOtp('');
        setIsVerified(false);
      } else {
        let errorMessage = 'Failed to send OTP';
        
        // Handle specific error cases
        if (data.error) {
          if (data.error.includes('Invalid phone number')) {
            errorMessage = 'Invalid phone number format. Must start with 233';
          } else if (data.error.includes('rate limit')) {
            errorMessage = 'Rate limit exceeded. Please try again in a minute.';
          } else if (data.error.includes('authentication')) {
            errorMessage = 'OTP service authentication failed. Please contact support.';
          } else {
            errorMessage = data.error;
          }
        }
        
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      let errorMessage = 'Failed to send OTP';
      
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

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate OTP format
    if (!otp || !/^\d{4}$/.test(otp)) {
      const errorMessage = 'Please enter a valid 4-digit OTP';
      toast.error(errorMessage);
      setError(errorMessage);
      return;
    }

    setIsVerifying(true);
    setError('');
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('OTP verified successfully!');
        setIsVerified(true);
        setTimeout(() => {
          setPhone('');
          setOtp('');
          setIsSent(false);
          setIsVerified(false);
          setPrefix('');
        }, 3000);
      } else {
        let errorMessage = 'Failed to verify OTP';
        
        if (data.error) {
          if (data.error.includes('expired')) {
            errorMessage = 'OTP session expired. Please request a new OTP.';
          } else if (data.error.includes('Invalid OTP')) {
            errorMessage = 'Invalid OTP code. Please try again.';
          } else {
            errorMessage = data.error;
          }
        }
        
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      let errorMessage = 'Failed to verify OTP';
      
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
      setIsVerifying(false);
    }
  };

  const handleResendOTP = async () => {
    if (!phone) return;
    await handleSendOTP(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>);
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
              <KeyRound className="w-4 h-4" />
              <span className="text-sm font-medium">OTP API Demo</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Secure OTP Verification
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto px-4"
            >
              Test how easy it is to verify your users with secure one-time passwords using Sendexa.
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
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Send & Verify OTP</h2>
                </div>

                <form onSubmit={isSent ? handleVerifyOTP : handleSendOTP} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number (e.g., 233551196764)"
                      disabled={isSent}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                    />
                  </div>

                  {isSent && (
                    <div>
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-400 mb-2">
                        Enter OTP Code
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 4-digit OTP"
                          maxLength={4}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        />
                        {prefix && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-indigo-400">
                            {prefix}
                          </div>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          Enter the 4-digit code sent to your phone
                        </p>
                        <button
                          type="button"
                          onClick={handleResendOTP}
                          disabled={isSending}
                          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Resend
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-400 text-sm bg-red-900/20 border border-red-800/50 rounded-lg p-3">
                      {error}
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSending || isVerifying || isVerified}
                      className="w-full h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-base font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
                    >
                      {isSending ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin h-5 w-5" />
                          Sending...
                        </span>
                      ) : isVerifying ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin h-5 w-5" />
                          Verifying...
                        </span>
                      ) : isVerified ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Verified!
                        </span>
                      ) : isSent ? (
                        <span className="flex items-center justify-center gap-2">
                          <KeyRound className="w-5 h-5" />
                          Verify OTP
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send OTP
                        </span>
                      )}
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <p className="text-sm text-gray-400">
                    Your OTP is sent through our secure SMS gateway with delivery tracking and status updates.
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