"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const Templates = () => {
  const templates = [
    {
      name: "OTP Verification",
      description: "Secure login codes with expiry notice",
      image: "/images/template-otp.png"
    },
    {
      name: "Order Confirmation",
      description: "Transaction receipts with tracking",
      image: "/images/template-order.png"
    },
    {
      name: "Appointment Reminder",
      description: "Calendar events with rescheduling",
      image: "/images/template-appointment.png"
    },
    {
      name: "Support Notification",
      description: "Ticket updates with quick replies",
      image: "/images/template-support.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto ">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pre-Approved <span className="text-lime-400">Message Templates</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            WhatsApp-approved templates that get delivered instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-lime-400/30 transition-all overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{template.name}</h3>
                <p className="text-gray-400">{template.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-lime-600 hover:bg-lime-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-lime-600/20">
            Browse Template Library
          </button>
        </motion.div> */}
        </Container>
      </div>
    </section>
  );
};

export default Templates;