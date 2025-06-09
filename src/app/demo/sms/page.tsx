// app/demo/sms/page.tsx
"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { MessageSquare, Smartphone, Code, Zap, CheckCircle } from "lucide-react";
import  Button  from "@/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { useState } from "react";

export default function SmsDemoPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const codeExample = `curl -X POST "https://api.sendexa.com/v1/sms" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "${phoneNumber || "+233XXXXXXXXX"}",
    "message": "${message || "Hello from Sendexa!"}",
    "sender_id": "Sendexa"
  }'`;

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 pt-28 pb-20 border-b border-gray-800">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 text-blue-300 mb-6 mx-auto border border-blue-800/50"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">SMS API Demo</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Send SMS Messages Instantly
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Experience Sendexa&apos;s reliable SMS delivery with 99.9% success rate across all networks in Ghana
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-900/30 text-blue-300">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Send Test SMS</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+233XXXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    onClick={handleSend}
                    disabled={!phoneNumber || !message || isSending}
                    className="w-full bg-blue-600 hover:bg-blue-500"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : isSent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Send SMS
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Code Example */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <Tabs defaultValue="curl" className="h-full">
                <div className="flex items-center border-b border-gray-800">
                  <TabsList className="bg-transparent">
                    <TabsTrigger value="curl" className="data-[state=active]:bg-gray-800 text-white">
                      cURL
                    </TabsTrigger>
                    <TabsTrigger value="node" className="data-[state=active]:bg-gray-800 text-white">
                      Node.js
                    </TabsTrigger>
                    <TabsTrigger value="python" className="data-[state=active]:bg-gray-800 text-white">
                      Python
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-6 sm:p-8">
                  <TabsContent value="curl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gray-800 text-gray-300">
                        <Code className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-semibold text-white">API Integration</h2>
                    </div>

                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{codeExample}</code>
                    </pre>
                  </TabsContent>

                  <TabsContent value="node">
                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{`const axios = require('axios');

const sendSMS = async () => {
  const response = await axios.post(
    'https://api.sendexa.com/v1/sms',
    {
      to: '${phoneNumber || "+233XXXXXXXXX"}',
      message: '${message || "Hello from Sendexa!"}',
      sender_id: 'Sendexa'
    },
    {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(response.data);
};

sendSMS();`}</code>
                    </pre>
                  </TabsContent>

                  <TabsContent value="python">
                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{`import requests

url = "https://api.sendexa.com/v1/sms"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "to": "${phoneNumber || "+233XXXXXXXXX"}",
    "message": "${message || "Hello from Sendexa!"}",
    "sender_id": "Sendexa"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`}</code>
                    </pre>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}