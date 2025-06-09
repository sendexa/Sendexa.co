"use client";
import { motion } from 'framer-motion';
import { Smartphone, Mail, MessageSquare, Globe } from 'lucide-react';
import { Container } from '@/layout/Container';

const Channels = () => {
  const channels = [
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
      title: "SMS",
      description: "Global coverage with direct carrier connections in 200+ countries",
      delivery: "300ms avg"
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      title: "Email",
      description: "Transactional email delivery with 98%+ inbox placement rate",
      delivery: "1s avg"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
      title: "WhatsApp",
      description: "Official WhatsApp Business API with rich message templates",
      delivery: "500ms avg"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: "Voice",
      description: "Automated voice calls with text-to-speech in 50+ languages",
      delivery: "15s avg"
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
            Multiple <span className="text-indigo-400">Delivery Channels</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reach your users through their preferred channel with automatic fallback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-400/30 transition-all flex flex-col"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-indigo-900/20 mr-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold">{channel.title}</h3>
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{channel.description}</p>
              <div className="text-sm text-indigo-300 font-mono">
                Delivery: {channel.delivery}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900/50 border border-gray-800 rounded-full px-6 py-3 mb-6">
            <span className="text-indigo-300">Smart Fallback Routing</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Automatically retries failed deliveries through alternate channels to ensure your users always receive their OTP.
          </p>
          {/* <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-indigo-600/20">
            Configure Delivery Rules
          </button> */}
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Channels;