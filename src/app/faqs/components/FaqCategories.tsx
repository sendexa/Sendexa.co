"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

const categories = [
  // { id: "all", label: "All Categories" },
  // { id: "account", label: "Account" },
  // { id: "billing", label: "Billing" },
  // { id: "api", label: "APIs" },
  // { id: "delivery", label: "Delivery" },
  // { id: "security", label: "Security" },

  { id: "all", label: "All Categories" },
  { id: "account", label: "Account" },
  { id: "billing", label: "Billing" },
  { id: "api", label: "APIs" },
  { id: "delivery", label: "Delivery" },
  { id: "security", label: "Security" },
  { id: "otp", label: "OTP & 2FA" },
  { id: "sms", label: "SMS" },
  { id: "support", label: "Developer Support" },
  { id: "features", label: "Platform Features" },
  { id: "compliance", label: "Compliance" },
  { id: "reseller", label: "Reseller Options" },
  { id: "coverage", label: "Country Coverage" },
  { id: "brand", label: "Brand Clarification" },
];

export default function FaqCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-8 bg-gray-50">
      <Container>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
      </div>
      </Container>
    </section>
  );
}
