"use client";
import { motion } from "framer-motion";
import { Globe, Heart, Zap, DollarSign, Clock, Home } from "lucide-react";
import { Container } from "@/layout/Container";

const benefits = [
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: "Remote First",
    description: "Work from anywhere in Africa",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary-500" />,
    title: "Health Coverage",
    description: "Comprehensive medical insurance",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary-500" />,
    title: "Fast Growth",
    description: "Rapid career progression",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary-500" />,
    title: "Competitive Pay",
    description: "Above-market salaries",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-500" />,
    title: "Flexible Hours",
    description: "Results-oriented schedule",
  },
  {
    icon: <Home className="h-8 w-8 text-primary-500" />,
    title: "Home Office Stipend",
    description: "Set up your perfect workspace",
  },
];

export default function BenefitsSection() {
  return (
    <Container>
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Our Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take care of our team with industry-leading benefits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary-300 transition-all"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-50 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Container>
  );
}