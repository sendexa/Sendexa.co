"use client";
import { motion } from 'framer-motion';
//import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Container } from '@/layout/Container';

export const ContactHero = () => {
  // const contactMethods = [
  //   { icon: <Mail className="w-5 h-5 mr-2" />, text: "support@sendexa.co" },
  //   { icon: <Phone className="w-5 h-5 mr-2" />, text: "+233 24 123 4567" },
  //   { icon: <MessageSquare className="w-5 h-5 mr-2" />, text: "Live Chat" },
  // ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900/50 via-gray-950 to-gray-950 pt-28 pb-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 mb-6"
          >
            <span>We&apos;re Here to Help</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Contact <span className="text-blue-400">Sendexa</span> Support
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl"
          >
            Our team is available 24/7 to help with API integrations, sales inquiries, and technical support.
          </motion.p>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-blue-900/30 text-blue-300 px-4 py-2 rounded-lg"
              >
                {method.icon}
                <span>{method.text}</span>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </Container>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-800/20 filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};