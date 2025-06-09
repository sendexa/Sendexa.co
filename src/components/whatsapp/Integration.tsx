"use client";
import { motion } from 'framer-motion';
//import Image from 'next/image';
import { CodeBlock } from '@/components/CodeBlock';
import { Container } from '@/layout/Container';

const Integration = () => {
  const codeExample = `// Send WhatsApp message
import { WhatsApp } from 'enterprise-whatsapp-sdk';

const client = new WhatsApp(process.env.API_KEY);

// Send template message
const response = await client.sendTemplate({
  to: '+1234567890',
  template: 'order_confirmation',
  components: [
    {
      type: 'body',
      parameters: [
        { type: 'text', text: 'XL' },
        { type: 'text', text: '#ORD-12345' }
      ]
    }
  ]
});`;

  const steps = [
    {
      title: "Get Approved",
      description: "We handle the WhatsApp Business verification"
    },
    {
      title: "Integrate SDK",
      description: "Add our library with npm or yarn"
    },
    {
      title: "Send Messages",
      description: "Start messaging in production"
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto">
        <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Developer <span className="text-lime-400">Friendly</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our SDKs make WhatsApp integration simple with just a few lines of code.
            </p>

            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lime-900/50 border border-lime-700 text-lime-400 mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-lime-600 hover:bg-lime-700 rounded-lg font-medium transition-colors">
                Documentation
              </button>
              <button className="px-6 py-3 border border-gray-700 hover:border-lime-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
                API Reference
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
          >
            <div className="p-4 bg-gray-900 border-b border-gray-800 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 font-mono">
                whatsapp-integration.js
              </div>
            </div>
            <CodeBlock code={codeExample} />
          </motion.div>

        </div>
        </Container>
      </div>
    </section>
  );
};

export default Integration;