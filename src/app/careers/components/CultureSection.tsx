"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { Container } from "@/layout/Container";

export default function CultureSection() {
  return (
    <Container>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-4xl">
              Our Culture
            </h2>
            <p className="text-gray-600 mb-6">
              At Sendexa, we believe in creating an environment where talented people can do their best work.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-500 mr-3">
                  <Check className="h-full w-full" />
                </div>
                <p className="text-gray-700">We value ownership and initiative</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-500 mr-3">
                  <Check className="h-full w-full" />
                </div>
                <p className="text-gray-700">Transparent communication at all levels</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-500 mr-3">
                  <Check className="h-full w-full" />
                </div>
                <p className="text-gray-700">Continuous learning and growth</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-500 mr-3">
                  <Check className="h-full w-full" />
                </div>
                <p className="text-gray-700">Impact-driven work that matters</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/team-culture.jpg"
                alt="Sendexa team working together"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </Container>
  );
}