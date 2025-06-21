"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const TrustSignals = () => {
  const partners = [
    { name: "MTN", logo: "/logos/mtn.svg" },
    { name: "Telecel", logo: "/logos/telecel.png" },
    { name: "AirtelTigo", logo: "/logos/ATGhana.webp" },
    { name: "Absa Bank", logo: "/logos/ABSA.png" },
    { name: "Xtopay", logo: "/logos/xtopay.png" },
    { name: "Hubtel", logo: "/logos/hubtel.png" },
  ];

  return (
    <section className="py-15 bg-gradient-to-b from-rose-50 via-orange-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#111e4f] mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#111e4f] to-[#fcd116] font-extrabold">
              Partners
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading financial institutions and telecom providers
            across Ghana
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
              className="bg-white border border-[#111e4f]/10 rounded-xl p-6 flex items-center justify-center h-28 hover:border-[#fcd116] transition-all duration-300 shadow-md group"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 transition-all duration-300 brightness-105 drop-shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
