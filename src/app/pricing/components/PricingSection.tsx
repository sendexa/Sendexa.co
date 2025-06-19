"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingSelector, ServiceType, services } from "./PricingSelector";
import { PricingCard } from "./PricingCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function PricingSection() {
  const [selectedService, setSelectedService] = useState<ServiceType>("sms");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-12"
      ></motion.div>

      <motion.div variants={itemVariants}>
        <PricingSelector
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-12">
        <motion.h2
          className="text-2xl font-semibold text-center text-blue-600 mb-4"
          key={selectedService}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {services.find((s) => s.id === selectedService)?.name} Pricing
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 max-w-3xl mx-auto"
          key={`desc-${selectedService}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Choose the perfect plan for your{" "}
          {services.find((s) => s.id === selectedService)?.name.toLowerCase()}{" "}
          needs.
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <PricingCard service={selectedService} />
      </motion.div>
    </motion.div>
  );
}
