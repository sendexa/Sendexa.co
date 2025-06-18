"use client";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FaqCta() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">
              Still Have Questions?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6 md:text-4xl"
          >
            We&apos;re Here to Help
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto"
          >
            Our support team is available 24/7 to answer your questions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
            >
              Contact Support <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="https://developers.sendexa.co"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
            >
              View Documentation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}