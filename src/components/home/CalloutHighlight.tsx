"use client";
import React from "react";
import { Container } from "@/layout/Container";
import {  Rocket } from "lucide-react";
import Link from "next/link";
//import { motion } from "framer-motion";

export const CalloutHighlight: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex-shrink-0 flex items-center justify-center w-28 h-28 rounded-full bg-gray-900/80 backdrop-blur-lg shadow-lg mb-6 md:mb-0 border-2 border-[#a6953f]">
          <Rocket className="w-16 h-16 text-[#a6953f]" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">
            Why <span className="text-[#a6953f] font-extrabold">Switch to Sendexa?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Experience unified messaging, payments, and analytics with unmatched reliability and developer-first tools. Transform your business with Sendexa today!
          </p>
          <div className="mt-6 inline-block">
            <Link href="https://app.sendexa.co/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#a6953f] text-gray-950 font-bold rounded-lg shadow hover:shadow-lg transition-all">
              <Rocket className="w-5 h-5" />
              Get Started
            </Link>
          {/* </div> */}
            {/* <button className="px-8 py-3 bg-[#a6953f] text-gray-950 font-bold rounded-lg shadow hover:shadow-lg transition-all">
              Get Started Now
            </button> */}
          </div>
        </div>
      </div>
    </Container>
  </section>
);