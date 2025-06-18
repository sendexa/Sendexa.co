"use client";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersHero() {
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
              <Briefcase className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">
                We&apos;re Hiring
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-6 md:text-5xl lg:text-6xl"
          >
            Build the Future of African Communications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto"
          >
            Join our team of innovators and problem-solvers working to connect businesses across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#open-positions"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              View Openings <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
            >
              Learn About Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}