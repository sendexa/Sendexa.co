// app/faq/components/FaqHero.tsx
"use client";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

interface HelpHeroProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export default function HelpHero({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our platform, APIs, and account management.",
  showSearch = false,
}: HelpHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">
                How Can We Help?
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-6 md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {showSearch && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search help articles..."
                  className="w-full px-6 py-4 pl-12 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#faqs"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              Browse FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}