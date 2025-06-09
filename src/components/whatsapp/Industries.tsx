"use client";
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Calendar, Truck, Headphones } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const Industries = () => {
  const industries = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-lime-400" />,
      title: "E-Commerce",
      examples: [
        "Order confirmations",
        "Shipping updates",
        "Abandoned cart recovery"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-lime-400" />,
      title: "Finance",
      examples: [
        "OTP verification",
        "Fraud alerts",
        "Payment reminders"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6 text-lime-400" />,
      title: "Healthcare",
      examples: [
        "Appointment reminders",
        "Prescription updates",
        "Test results"
      ]
    },
    {
      icon: <Truck className="w-6 h-6 text-lime-400" />,
      title: "Logistics",
      examples: [
        "Delivery notifications",
        "Driver coordination",
        "ETAs"
      ]
    },
    {
      icon: <Headphones className="w-6 h-6 text-lime-400" />,
      title: "Customer Support",
      examples: [
        "Ticket updates",
        "Live agent handoff",
        "Surveys"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry <span className="text-lime-400">Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Transform customer communication across every sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-lime-400/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-lime-900/20 mr-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                {industry.examples.map((example, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-lime-400 mt-2 mr-2"></div>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center justify-center"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="relative w-32 h-16 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                <Image
                  src={`/logos/industry-${i}.svg`}
                  alt={`Industry ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Industries;