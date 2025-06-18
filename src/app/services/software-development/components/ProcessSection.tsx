'use client';

import { motion } from 'framer-motion';
import { Search, PenLine, Code2, TestTube2, Rocket } from 'lucide-react';
import { Container } from '@/layout/Container';

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understand your business needs and technical requirements",
    color: "text-[#a6953f]"
  },
  {
    icon: PenLine,
    title: "Design",
    description: "Create wireframes, prototypes, and system architecture",
    color: "text-[#a6953f]"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Agile implementation with regular progress updates",
    color: "text-[#a6953f]"
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Quality assurance and user acceptance testing",
    color: "text-[#a6953f]"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch and ongoing maintenance support",
    color: "text-[#a6953f]"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-[#a6953f] max-w-3xl mx-auto">
            Transparent and collaborative approach to building your software
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-[#a6953f]/30"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center ${step.color} bg-opacity-20`}>
                    <step.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;