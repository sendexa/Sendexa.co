"use client";
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

export const ContactMap = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto ">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Location</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Visit our office in Accra, Ghana for in-person support and consultations.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-xl overflow-hidden border border-gray-800"
        >
          {/* Replace with your actual map component or image */}
          <Image
            src="/images/office-map.jpg"
            alt="Sendexa Office Location"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 border border-gray-800 rounded-lg px-6 py-4 flex items-center">
            <MapPin className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-gray-300">4R59+MW Akatsi, Volta Region, Ghana</span>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};