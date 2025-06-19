"use client";
import { Container } from "@/layout/Container";
import { LogIn, PlayCircle, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-12 bg-[#111e4f]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-4 border border-white/20 text-sm"
          >
            <Rocket className="w-4 h-4" />
            <span>Ready to get started?</span>
          </motion.div>

          {/* Heading */}
          {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            Power Your Business With{" "}
            <span className="text-[#fcd116]">Africa&apos;s Communication API</span>
          </h2> */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            Build, Send, and Scale with{" "}
            <span className="text-[#fcd116]">
              Africa&apos;s Communication API
            </span>
          </h2>

          {/* Description */}
          <p className="text-white/80 text-base mb-6">
            Trusted by startups and enterprises across Africa for reliable
            messaging and payments infrastructure.
          </p>

          {/* Buttons - side by side even on mobile */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://app.sendexa.co/"
                className="inline-flex items-center px-6 py-3 bg-[#fcd116] text-[#111e4f] rounded-md font-semibold text-sm hover:bg-[#fcd116]/90 transition-all whitespace-nowrap"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md text-sm font-medium hover:bg-white/10 transition-all whitespace-nowrap"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Request Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
