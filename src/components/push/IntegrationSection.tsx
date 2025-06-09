"use client";
import { motion } from 'framer-motion';
import { Code, Terminal, GitBranch,  Zap } from 'lucide-react';
import { Container } from '@/layout/Container';

const platforms = [
  { name: "Web", icon: "/icons/web.svg" },
  { name: "iOS", icon: "/icons/ios.svg" },
  { name: "Android", icon: "/icons/android.svg" },
  { name: "React Native", icon: "/icons/react.svg" },
  { name: "Flutter", icon: "/icons/flutter.svg" },
  { name: "Electron", icon: "/icons/electron.svg" }
];

const frameworks = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Express", icon: "/icons/express.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Ruby on Rails", icon: "/icons/rails.svg" },
  { name: "Spring Boot", icon: "/icons/spring.svg" }
];

export const IntegrationSection = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container  mx-auto">
        <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-6">
              <Code className="w-5 h-5 mr-2" />
              <span>Developer Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-purple-400">Simple Integration</span> Across All Platforms
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get started in minutes with our officially supported SDKs and framework integrations. 
              We handle all the protocol complexities so you can focus on engaging your users.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-purple-400" />
                Platform SDKs
              </h3>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={platform.icon} alt={platform.name} className="w-5 h-5 mr-2" />
                    <span>{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-purple-400" />
                Framework Guides
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
                <div className="text-sm text-gray-400">send-notification.js</div>
              </div>
              
              <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code className="text-purple-400">
{`// Initialize the SDK
import Notify from '@push/sdk';

// Configure with your API key
Notify.init({
  apiKey: process.env.PUSH_API_KEY,
  region: 'auto' // Automatically selects nearest region
});

// Send a targeted notification
async function sendOrderUpdate(userId, orderId) {
  const response = await Notify.send({
    to: userId,
    title: 'Your order has shipped!',
    body: 'Track your package here',
    data: { 
      url: \`/orders/\${orderId}\`,
      priority: 'high' 
    },
    timing: 'optimal' // Let our AI determine best time
  });

  console.log(\`Notification sent: \${response.id}\`);
}`}
                </code>
              </pre>
              
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  <h4 className="font-medium">Webhook for Delivery Events</h4>
                </div>
                <pre className="text-xs font-mono text-gray-400 overflow-x-auto">
{`{
  "event": "delivered",
  "notificationId": "notif_abc123...",
  "timestamp": "2023-06-15T12:34:56Z",
  "deviceId": "ios_xyz456",
  "userId": "user_123",
  "metadata": {
    "campaign": "order-updates"
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