"use client";
import { motion } from 'framer-motion';
//import Image from 'next/image';
// Update the import path below if CodeBlock is in a different location
import { CodeBlock } from '../CodeBlock';
import { Container } from '@/layout/Container';

const Integration = () => {
  const codeExample = `// Send OTP via SMS
import { OTP } from 'secure-otp-sdk';

const otp = new OTP(process.env.API_KEY);

// Send OTP
const response = await otp.send({
  phone: '+1234567890',
  channel: 'sms',
  length: 6,
  expiry: 30, // seconds
  template: 'Your code is {code}'
});

// Verify OTP
const isValid = await otp.verify({
  id: response.id,
  code: userEnteredCode
});`;

  const steps = [
    {
      title: "Create Account",
      description: "Sign up and get your API keys in seconds"
    },
    {
      title: "Install SDK",
      description: "Add our library to your project with npm or yarn"
    },
    {
      title: "Send & Verify",
      description: "Implement OTP flows with just a few lines of code"
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
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
              Integrate in <span className="text-indigo-400">Minutes</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our developer-friendly SDKs and comprehensive documentation make integration effortless.
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-700 text-indigo-400 mr-4 mt-1 flex-shrink-0">
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
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors">
                View Documentation
              </button>
              <button className="px-6 py-3 border border-gray-700 hover:border-indigo-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
                Explore SDKs
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
                otp-integration.js
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