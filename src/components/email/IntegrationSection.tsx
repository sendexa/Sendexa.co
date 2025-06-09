"use client";
import { motion } from 'framer-motion';
import { Code, Terminal, GitBranch, Cpu } from 'lucide-react';
import { Container } from '@/layout/Container';

const languages = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Ruby", icon: "/icons/ruby.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Go", icon: "/icons/go.svg" },
  { name: "C#", icon: "/icons/csharp.svg" },
  { name: "Swift", icon: "/icons/swift.svg" }
];

const frameworks = [
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "Ruby on Rails", icon: "/icons/rails.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Spring", icon: "/icons/spring.svg" },
  { name: "Express", icon: "/icons/express.svg" }
];

export const IntegrationSection = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto">
        <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 text-green-300 mb-6">
              <Code className="w-5 h-5 mr-2" />
              <span>Developer Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-green-400">Works With</span> Your Stack
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get started in minutes with our officially supported SDKs and framework integrations. 
              We handle all the protocol complexities so you can focus on building great products.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-green-400" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={lang.icon} alt={lang.name} className="w-5 h-5 mr-2" />
                    <span>{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-green-400" />
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={framework.icon} alt={framework.name} className="w-5 h-5 mr-2" />
                    <span>{framework.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">send-email.js</div>
              </div>
              
              <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code className="text-green-400">
{`// Import the SDK
import { Email } from 'your-email-sdk';

// Initialize with your API key
const emailClient = new Email({
  apiKey: process.env.EMAIL_API_KEY,
  region: 'us-west-2'
});

// Send a transactional email
const response = await emailClient.send({
  to: 'customer@example.com',
  from: 'noreply@yourdomain.com',
  subject: 'Your Order Confirmation',
  html: \`<h1>Thanks for your order!</h1>
         <p>Your order #12345 has been received.</p>\`,
  attachments: [
    {
      filename: 'receipt.pdf',
      content: fs.readFileSync('receipt.pdf').toString('base64')
    }
  ]
});

console.log(\`Email sent! ID: \${response.messageId}\`);`}
                </code>
              </pre>
              
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center mb-2">
                  <Cpu className="w-5 h-5 mr-2 text-green-400" />
                  <h4 className="font-medium">Webhooks for Real-time Events</h4>
                </div>
                <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
{`{
  "event": "delivered",
  "messageId": "abc123...",
  "timestamp": "2023-06-15T12:34:56Z",
  "recipient": "user@example.com",
  "metadata": {
    "campaignId": "summer-sale-2023"
  }
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
        </Container>
      </div>
    </section>
  );
};