"use client";
import React from "react";
import { Container } from "@/layout/Container";
//import { motion } from "framer-motion";

const dashboardCards = [
  {
    title: "Real-Time Transactions",
    description: "Monitor all your business transactions as they happen, with instant updates and detailed logs.",
    image: "/images/011.png",
    gradient: "from-[#00c2c8] to-[#d4b848]"
  },
  {
    title: "Message Logs & Analytics",
    description: "Track message delivery, open rates, and engagement with beautiful, actionable analytics.",
    image: "/images/011.png",
    gradient: "from-[#d4b848] to-[#f5d76e]"
  },
  {
    title: "Wallet & API Management",
    description: "Easily manage your Sendexa Wallet, API keys, and developer settings in one secure place.",
    image: "/images/011.png",
    gradient: "from-[#00c2c8] to-[#c0aa4a]"
  },
];

export const DashboardPreview: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
    <Container>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Your <span className="text-[#00c2c8] font-extrabold">Smart Business Console</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Monitor transactions, manage APIs, and track analytics in real time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dashboardCards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl bg-gray-900/80 backdrop-blur-lg border-2 border-[#00c2c8]/30 shadow-xl p-8 min-h-[580px] flex flex-col hover:border-[#00c2c8] transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center w-full pb-44">
              <h3 className="text-2xl font-bold mb-3 text-center text-[#00c2c8]">
                {card.title}
              </h3>
              <p className="text-base font-medium text-center text-gray-400">
                {card.description}
              </p>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-90 h-100 z-20">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(166,149,63,0.15)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00c2c8]/60 rounded-tr-3xl opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
      <div className="h-20 md:h-24" />
    </Container>
  </section>
);