'use client';

import { motion } from 'framer-motion';
import { Container } from '@/layout/Container';

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Vue", "TypeScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", ".NET", "Java", "Go"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  {
    category: "DevOps",
    items: ["GitHub Actions", "CI/CD", "Terraform", "Ansible"]
  }
];

const TechnologyStack = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-[#a6953f] max-w-3xl mx-auto">
            Modern tools and frameworks we work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#a6953f]">{tech.category}</h3>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-[#a6953f]/10 text-[#a6953f] rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyStack;