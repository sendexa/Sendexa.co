"use client";
import { motion } from 'framer-motion';
import { Smartphone, CreditCard, Lock, User, Shield } from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const UseCases = () => {
  const useCases = [
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
      title: "Mobile App Authentication",
      description: "Secure login and account recovery for mobile applications"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-indigo-400" />,
      title: "Payment Verification",
      description: "Two-factor authentication for financial transactions"
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "Passwordless Login",
      description: "Replace passwords with secure one-time codes"
    },
    {
      icon: <User className="w-6 h-6 text-indigo-400" />,
      title: "Account Recovery",
      description: "Verify user identity during password reset flows"
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      title: "Sensitive Operations",
      description: "Authorization for account changes and admin actions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
            Trusted Across <span className="text-indigo-400">Industries</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Secure OTP verification for applications that demand the highest security standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-400/30 transition-all text-center"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-indigo-900/20">
                  {useCase.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
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

export default UseCases;