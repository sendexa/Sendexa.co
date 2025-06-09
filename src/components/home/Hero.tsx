"use client";

import { MessageSquareText, LockKeyhole, BadgeCent } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Button from "@/ui/Button";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const products = [
    {
      name: "SMS API",
      href: "/products/sms",
      description: "Deliver SMS reliably across Ghana with intelligent routing.",
      icon: <MessageSquareText className="w-5 h-5" />,
      color: "from-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:to-yellow-900/10",
      textColor: "text-yellow-600 dark:text-yellow-300",
    },
    {
      name: "OTP API",
      href: "/products/otp",
      description: "Secure your app with real-time OTP delivery via SMS, Email or WhatsApp.",
      icon: <LockKeyhole className="w-5 h-5" />,
      color: "from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-900/10",
      textColor: "text-indigo-600 dark:text-indigo-300",
    },
    {
      name: "WhatsApp Business API",
      href: "/products/whatsapp",
      description: "Send alerts, OTPs, and support messages over WhatsApp at scale.",
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: "from-lime-100 to-lime-50 dark:from-lime-900/30 dark:to-lime-900/10",
      textColor: "text-lime-600 dark:text-lime-300",
    },
    {
      name: "Payments API",
      href: "/products/payments",
      description: "Collect payments, disburse funds, and manage wallets securely.",
      icon: <BadgeCent className="w-5 h-5" />,
      color: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10",
      textColor: "text-blue-600 dark:text-blue-300",
    },
  ];

  const titles = useMemo(() => [
    "African Businesses",
    "Ghanaian Startups",
    "African Developers",
    "Growing Companies"
  ], []);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentTitle.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTitle(currentTitle.slice(0, -1));
          setTypingSpeed(100);
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setTypingSpeed(150);
      }
    } else {
      const targetTitle = titles[currentTitleIndex];
      if (currentTitle.length < targetTitle.length) {
        timeout = setTimeout(() => {
          setCurrentTitle(targetTitle.slice(0, currentTitle.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTitle, currentTitleIndex, isDeleting, titles, typingSpeed]);

  return (
    <section className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:bg-blue-800 animate-blob animation-delay-2000" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:bg-yellow-800 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 dark:bg-pink-800 animate-blob" />
      </div>

      <div className="container px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Powerful APIs for{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {currentTitle}
                <span className="ml-1 inline-block w-1 h-8 bg-blue-600 dark:bg-blue-400 animate-pulse" />
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sendexa provides developer-friendly communication and payment APIs that help you build, 
              scale, and monetize your applications across Africa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/signup" className="flex items-center gap-2">
                  Get Started for Free
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features" className="flex items-center gap-2">
                  Explore Products
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:bg-gray-700 dark:border-gray-800"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by <span className="font-semibold">500+</span> developers across Africa
              </p>
            </div>
          </div>
          
          {/* Right content - Product cards */}
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="h-full"
              >
                <Link
                  href={product.href}
                  className={`group relative h-full flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/10 bg-gradient-to-br ${product.color}`}
                >
                  <div className={`absolute top-4 right-4 p-2 rounded-lg ${product.textColor} bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm`}>
                    {product.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${product.textColor}`}>{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                    {product.description}
                  </p>
                  <motion.div 
                    className={`mt-4 text-sm font-medium ${product.textColor} group-hover:underline underline-offset-4`}
                    whileHover={{ x: 4 }}
                  >
                    Learn more →
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}