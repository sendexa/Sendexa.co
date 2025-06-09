"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Users } from 'lucide-react';

export const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email Us",
      description: "support@sendexa.co",
      link: "mailto:support@sendexa.co",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Call Us",
      description: "+233 555 539 152",
      link: "tel:+233555539152",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: "Visit Us",
      description: "4R59+MW Akatsi, Volta Region, Ghana",
      link: "https://maps.app.goo.gl/zDrdaYmUDDrByEWk8",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Working Hours",
      description: "24/7 Support | Sales: Mon-Fri 8am-6pm GMT",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Contact <span className="text-blue-400">Information</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-900/20 mr-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            {item.link ? (
              <a 
                href={item.link} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {item.description}
              </a>
            ) : (
              <p className="text-gray-400">{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6"
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 mr-4">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sales Team</h3>
            <p className="text-gray-400">
              For enterprise inquiries and custom payment solutions, our sales team is ready to assist you.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};