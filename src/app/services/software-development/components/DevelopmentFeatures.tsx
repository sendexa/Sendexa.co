'use client';

import { motion } from 'framer-motion';
import { CodeXml,  Smartphone, Globe, Database, GitBranch, Layers } from 'lucide-react';
import { Container } from '@/layout/Container';

const features = [
  {
    icon: CodeXml,
    title: "Custom Web Apps",
    description: "Tailored web applications built with modern frameworks like React, Next.js, and Angular",
    color: "text-[#a6953f]"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "iOS and Android apps using native or cross-platform technologies",
    color: "text-[#a6953f]"
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Scalable server architecture with Node.js, Python, or .NET",
    color: "text-[#a6953f]"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Automated deployment workflows for rapid iteration",
    color: "text-[#a6953f]"
  },
  {
    icon: Layers,
    title: "Microservices",
    description: "Modular architecture for maintainable and scalable systems",
    color: "text-[#a6953f]"
  },
  {
    icon: Globe,
    title: "Cloud Integration",
    description: "Deployment to AWS, Azure, or Google Cloud with best practices",
    color: "text-[#a6953f]"
  }
];

const DevelopmentFeatures = () => {
  return (
    <section className="py-20 bg-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Services</h2>
          <p className="text-xl text-[#a6953f] max-w-3xl mx-auto">
            Comprehensive solutions for your software needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 hover:bg-gray-900/70 border border-gray-800 rounded-xl p-8 transition-all hover:-translate-y-2 group"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 ${feature.color} bg-opacity-20 group-hover:bg-opacity-30 transition-colors`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DevelopmentFeatures;