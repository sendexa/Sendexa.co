"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/layout/Container";
import { MessageCircle, Mail, PhoneCall,  ShieldCheck, Code2, Server } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />,
    title: "SMS & Messaging",
    description: "Send transactional and bulk SMS with intelligent local routing.",
    image: "/images/services/sms.jpg",
  },
  {
    icon: <Mail className="w-6 h-6 text-green-600 dark:text-green-300" />,
    title: "Email Delivery",
    description: "Deliver marketing and transactional emails with high inbox rates.",
    image: "/images/services/email.jpg",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-blue-600 dark:text-blue-300" />,
    title: "Voice Calls",
    description: "Trigger automated voice alerts or two-way interactive calls.",
    image: "/images/services/voice.jpg",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />,
    title: "OTP & Security",
    description: "Secure logins and transactions with SMS and email OTPs.",
    image: "/images/services/otp.jpg",
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-300" />,
    title: "Developer APIs",
    description: "Powerful APIs and SDKs with real-time insights and webhooks.",
    image: "/images/services/dev.jpg",
  },
  {
    icon: <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-300" />,
    title: "SMPP Gateway",
    description: "High-throughput SMS delivery with direct SMPP integration.",
    image: "/images/services/smpp.jpg",
  },
];


export const FeatureShowcase: React.FC = () => {
  const [selected, setSelected] = useState(0);

  // Auto-advance feature every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
            Explore Sendexa&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848] font-extrabold">Unified Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            All your communication and payment needs, in one place.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Service List with Icons */}
          <div className="flex-1 w-full max-w-md">
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setSelected(idx)}
                    className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all focus:outline-none group shadow-md backdrop-blur-sm
                      ${
                        selected === idx
                          ? "bg-gray-900/80 border-2 border-[#00c2c8] shadow-xl text-gray-100"
                          : "bg-gray-900/60 border border-[#00c2c8]/30 hover:border-[#00c2c8]/60 text-gray-300 hover:text-gray-100"
                      }`}
                  >
                    <span className={`mr-3 transition-all ${selected === idx ? "scale-125 drop-shadow-[0_2px_8px_#00c2c8]" : "opacity-70 group-hover:opacity-100"}`}>
                      {feature.icon}
                    </span>
                    <span className="font-semibold text-base tracking-wide">{feature.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Right: Image only, larger */}
          <div className="flex-1 w-full flex flex-col items-center">
            <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
              {features.map((feature, idx) => (
                <img
                  key={idx}
                  src={feature.image}
                  alt={feature.title}
                  className={`absolute top-0 left-0 w-full h-full object-contain rounded-xl shadow-2xl transition-all duration-500 ${
                    selected === idx ? "opacity-100 scale-100 z-10 drop-shadow-[0_10px_40px_#00c2c8]" : "opacity-0 scale-95 z-0"
                  }`}
                  style={{ transitionProperty: "opacity, transform" }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};