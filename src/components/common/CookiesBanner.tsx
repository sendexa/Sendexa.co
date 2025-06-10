// components/CookiesBanner.tsx
'use client';

import { useEffect, useState } from 'react';
import { useCookies } from '@/context/CookiesContext';
import { X, Cookie, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const CookiesBanner = () => {
  const { cookiesAccepted, setCookiesAccepted } = useCookies();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if cookies preference isn't set
    if (cookiesAccepted === null) {
      setIsVisible(true);
    }
  }, [cookiesAccepted]);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => setCookiesAccepted(true), 300);
  };

  const handleReject = () => {
    setIsVisible(false);
    setTimeout(() => setCookiesAccepted(false), 300);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (cookiesAccepted !== null) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-xl z-50"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                We use cookies to enhance your experience, analyze traffic, and serve tailored 
                content. Some are essential for our site to work. By continuing, you agree to our 
                use of cookies.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex-1"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-1"
                >
                  Accept All
                </button>
              </div>

              <div className="mt-3 text-center">
                <Link 
                  href="/legal/cookie-policy" 
                  className="inline-flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Cookie Policy <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};