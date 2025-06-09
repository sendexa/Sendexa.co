"use client";
import { motion } from 'framer-motion';
import { MessageSquare, Shield, Zap, Users, BarChart, Globe } from 'lucide-react';
import { Container } from '@/layout/Container';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-lime-400" />,
      title: "Rich Messaging",
      description: "Send text, images, documents, and interactive buttons"
    },
    {
      icon: <Shield className="w-6 h-6 text-lime-400" />,
      title: "End-to-End Encrypted",
      description: "Enterprise-grade security for all communications"
    },
    {
      icon: <Zap className="w-6 h-6 text-lime-400" />,
      title: "Instant Delivery",
      description: "95% of messages delivered in under 3 seconds"
    },
    {
      icon: <Users className="w-6 h-6 text-lime-400" />,
      title: "2B+ Users",
      description: "Reach WhatsApp's global user base directly"
    },
    {
      icon: <BarChart className="w-6 h-6 text-lime-400" />,
      title: "90% Open Rates",
      description: "Far higher engagement than email or SMS"
    },
    {
      icon: <Globe className="w-6 h-6 text-lime-400" />,
      title: "200+ Countries",
      description: "Global coverage with local number support"
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
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
            Enterprise <span className="text-lime-400">WhatsApp Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to build high-conversion messaging experiences at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lime-600/20 mb-4 md:mb-0 md:mr-6">
              <Shield className="w-8 h-8 text-lime-400" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Official WhatsApp Business API Partner</h3>
              <p className="text-gray-400 mb-4">
                We&apos;re an approved WhatsApp solution provider with direct API access and compliance expertise.
              </p>
              <button className="px-6 py-2 border border-lime-400 text-lime-100 hover:bg-lime-900/50 rounded-lg font-medium transition-colors">
                Learn About Compliance
              </button>
            </div>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Features;