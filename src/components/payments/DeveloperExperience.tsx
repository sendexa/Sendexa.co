"use client";
import { motion } from "framer-motion";
import { CodeExample } from "@/components/payments/shared/CodeExample";
import { Terminal, Code, Cpu, GitBranch } from "lucide-react";
import { Container } from "@/layout/Container";

const codeExample = `// Process a payment
import { Payments } from '@company/payments-sdk';

const payments = new Payments(process.env.API_KEY);

const payment = await payments.create({
  amount: 1000,
  currency: 'USD',
  payment_method: 'card',
  customer: {
    email: 'customer@example.com'
  },
  metadata: {
    order_id: '12345'
  }
});;`;

const features = [
  {
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    title: "Full API Reference",
    description: "Comprehensive documentation with interactive examples",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    title: "SDKs & Libraries",
    description: "Official libraries for 8+ languages",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Sandbox Environment",
    description: "Test with mock payment methods and scenarios",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-blue-400" />,
    title: "GitHub Samples",
    description: "Production-ready example integrations",
  },
];

export const DeveloperExperience = () => {
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
              Built for <span className="text-blue-400">Developers</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Integration tools designed to save you time and headaches.
            </p>
          </motion.div>

          {/* <div className="flex flex-col lg:flex-row gap-12 items-center"> */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* <div className="lg:w-1/2"> */}
            <div className="w-full lg:w-1/2">
              {/* <div className="w-full lg:w-1/2"></div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
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
                className="flex flex-wrap gap-4"
              >
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                  API Documentation
                </button>
                <button className="px-6 py-3 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
                  Explore SDKs
                </button>
                <button className="px-6 py-3 text-blue-300 hover:text-white hover:bg-blue-900/30 rounded-lg font-medium transition-colors">
                  View GitHub Samples →
                </button>
              </motion.div>
            </div>

            {/* <div className="lg:w-1/2"> */}
            <div className="w-full lg:w-1/2">
              <CodeExample
                code={codeExample}
                language="javascript"
                theme="blue"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
