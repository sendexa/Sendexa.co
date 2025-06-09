// app/demo/otp/page.tsx
"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { LockKeyhole, Smartphone, Mail, Code, CheckCircle, Zap } from "lucide-react";
import  Button  from "@/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Input } from "@/ui/input";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function OtpDemoPage() {
  const [recipient, setRecipient] = useState("");
  const [channel, setChannel] = useState("sms");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOTP = () => {
    setIsSending(true);
    const code = generateOTP();
    setOtpCode(code);
    
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const codeExample = `curl -X POST "https://api.sendexa.co/v1/otp/send" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "${recipient || (channel === 'sms' ? '+233XXXXXXXXX' : 'email@example.com')}",
    "channel": "${channel}",
    "length": 6,
    "expiry": 300,
    "template": "Your Sendexa verification code is {code}"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/40 text-indigo-300 mb-6 mx-auto border border-indigo-800/50"
            >
              <LockKeyhole className="w-4 h-4" />
              <span className="text-sm font-medium">OTP API Demo</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400"
            >
              Secure Authentication Made Simple
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Experience Sendexa&apos;s OTP delivery via SMS, Email or WhatsApp with 500ms average delivery time
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
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300">
                  <LockKeyhole className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Send Test OTP</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Delivery Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={channel === "sms" ? "primary" : "outline"}
                      onClick={() => setChannel("sms")}
                      className={`flex items-center gap-2 ${channel !== "sms" ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""}`}
                    >
                      <Smartphone className="w-4 h-4" />
                      SMS
                    </Button>
                    <Button
                      variant={channel === "email" ? "primary" : "outline"}
                      onClick={() => setChannel("email")}
                      className={`flex items-center gap-2 ${channel !== "email" ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""}`}
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                    <Button
                      variant={channel === "whatsapp" ? "primary" : "outline"}
                      onClick={() => setChannel("whatsapp")}
                      className={`flex items-center gap-2 ${channel !== "whatsapp" ? "border-gray-700 text-gray-300 hover:bg-gray-800" : ""}`}
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div>
                  <label htmlFor="recipient" className="block text-sm font-medium text-gray-400 mb-1">
                    {channel === "sms" ? "Phone Number" : channel === "whatsapp" ? "WhatsApp Number" : "Email Address"}
                  </label>
                  <Input
                    id="recipient"
                    type={channel === "email" ? "email" : "tel"}
                    placeholder={
                      channel === "sms" ? "+233XXXXXXXXX" : 
                      channel === "whatsapp" ? "+233XXXXXXXXX" : 
                      "user@example.com"
                    }
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                {isSent && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">OTP Sent Successfully!</span>
                    </div>
                    <div className="mt-2 text-gray-300">
                      Your verification code is: <span className="font-mono font-bold text-white">{otpCode}</span>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    onClick={handleSendOTP}
                    disabled={!recipient || isSending}
                    className="w-full bg-indigo-600 hover:bg-indigo-500"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending OTP...
                      </span>
                    ) : isSent ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        OTP Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Send OTP
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
                    <TabsTrigger value="curl" className="data-[state=active]:bg-gray-800">
                      cURL
                    </TabsTrigger>
                    <TabsTrigger value="node" className="data-[state=active]:bg-gray-800">
                      Node.js
                    </TabsTrigger>
                    <TabsTrigger value="python" className="data-[state=active]:bg-gray-800">
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

const sendOTP = async () => {
  const response = await axios.post(
    'https://api.sendexa.co/v1/otp/send',
    {
      to: '${recipient || (channel === 'sms' ? '+233XXXXXXXXX' : 'email@example.com')}',
      channel: '${channel}',
      length: 6,
      expiry: 300,
      template: 'Your Sendexa verification code is {code}'
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

sendOTP();`}</code>
                    </pre>
                  </TabsContent>

                  <TabsContent value="python">
                    <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{`import requests

url = "https://api.sendexa.co/v1/otp/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "to": "${recipient || (channel === 'sms' ? '+233XXXXXXXXX' : 'email@example.com')}",
    "channel": "${channel}",
    "length": 6,
    "expiry": 300,
    "template": "Your Sendexa verification code is {code}"
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

     

      {/* Verification Demo */}
      <section className="py-16">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 sm:p-10 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">OTP Verification Flow</h2>
              <p className="text-gray-400">See how easy it is to verify OTP codes with our API</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <LockKeyhole className="w-5 h-5 text-indigo-400" />
                  Verify OTP Code
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      OTP Code
                    </label>
                    <Input
                      placeholder="Enter 6-digit code"
                      className="bg-gray-800 border-gray-700 text-white font-mono"
                    />
                  </div>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-500">
                    Verify Code
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-800/30 rounded-lg p-6 border border-dashed border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">API Response</h3>
                  <p className="text-sm text-gray-500">Verification result will appear here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

     
    </div>
  );
}