"use client";
import React from "react";
import { Container } from "@/layout/Container";
//import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const sdks = [
  { name: "Node.js", icon: "/svgs/nodejs.svg" },
  { name: "Python", icon: "/svgs/python.svg" },
  { name: "Java", icon: "/svgs/java.svg" },
  { name: "PHP", icon: "/svgs/php.svg" },
  { name: "Go", icon: "/svgs/go.svg" },
  { name: ".NET", icon: "/svgs/dot-net.svg" }
];

export const DeveloperTools: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
    <Container>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848] font-extrabold">
            Developer Tools
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Quick access to API docs, SDKs, and developer resources
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {sdks.map((sdk, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900/80 border-2 border-[#00c2c8]/30 rounded-xl p-6 flex flex-col items-center justify-center h-40 hover:border-[#00c2c8] transition-all duration-300 shadow-xl group"
          >
            <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-[#00c2c8]/30 to-[#d4b848]/20 group-hover:shadow-[0_4px_24px_#00c2c8] transition-all">
              <Image
                src={sdk.icon}
                alt={sdk.name}
                width={40}
                height={40}
                className="object-contain brightness-125"
              />
            </div>
            <span className="text-gray-100 font-semibold tracking-wide">
              {sdk.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link 
          href="https://developers.sendexa.co" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00c2c8] to-[#d4b848] text-gray-950 rounded-lg font-bold hover:shadow-xl transition-all border-2 border-[#00c2c8] focus:outline-none focus:ring-2 focus:ring-[#00c2c8]"
        >
          View Developer Docs
        </Link>
        <Link 
          href="https://github.com/sendexa" 
          className="inline-flex items-center px-6 py-3 border-2 border-[#00c2c8]/40 text-gray-200 hover:bg-gray-900 rounded-lg font-semibold transition-colors"
        >
          GitHub
        </Link>
      </motion.div> */}
    </Container>
  </section>
);