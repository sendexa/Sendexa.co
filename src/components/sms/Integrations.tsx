"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const Integrations = () => {
  const integrations = [
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "Ruby", logo: "/logos/ruby.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
    { name: "Go", logo: "/logos/go.svg" },
    { name: ".NET", logo: "/logos/dotnet.svg" },
    { name: "React", logo: "/logos/react.svg" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
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
            Works With Your <span className="text-yellow-400">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Official SDKs for popular languages and frameworks with comprehensive documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:bg-gray-800/20 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-gray-300 font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-yellow-600/20">
            View All SDKs & Documentation
          </button>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Integrations;