"use client";
import Image from "next/image";
import { motion } from 'framer-motion';

export const Partners = () => {
  const partners = [
    { name: "MTN", logo: "/logos/mtn.svg" },
    { name: "Telecel", logo: "/logos/telecel.png" },
    { name: "AirtelTigo", logo: "/logos/ATGhana.webp" },
    { name: "Ghana Commercial Bank", logo: "/logos/gcb.png" },
    { name: "Ecobank", logo: "/logos/ecobank.jpeg" },
    { name: "CalBank", logo: "/logos/CalBank.png" },
    { name: "GhIPSS", logo: "/logos/GhIPSS.png" },
    { name: "Absa Bank", logo: "/logos/ABSA.png" },
    { name: "Zenith Bank", logo: "/logos/zenith.png" },
    { name: "Fidelity Bank", logo: "/logos/fidelity.png" },
    { name: "Standard Chartered", logo: "/logos/scb.webp" },
    { name: "Agriculture Development Bank", logo: "/logos/adb.jpeg" },
  ]; 

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a6953f] to-[#d4b848] font-extrabold">Partners</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by leading financial institutions and telecom providers across Ghana
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900/80 border-2 border-[#a6953f]/30 rounded-xl p-6 flex items-center justify-center h-28 hover:border-[#a6953f] transition-all duration-300 shadow-xl group"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 brightness-110 drop-shadow-[0_4px_16px_#a6953f22]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};