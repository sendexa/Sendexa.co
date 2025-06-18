"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6 md:text-4xl"
          >
            Don&apos;t See Your Perfect Role?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto"
          >
            We&apos;re always looking for talented people. Send us your resume and we&apos;ll contact you when we have an opening that matches your skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="mailto:careers@sendexa.co?subject=General Application"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
            >
              <Mail className="mr-2 h-5 w-5" /> Submit General Application
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}