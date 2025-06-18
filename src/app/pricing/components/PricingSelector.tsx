"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const services = [
  { id: "sms", name: "SMS API" },
  { id: "email", name: "Email API" },
  { id: "voice", name: "Voice API" },
] as const;

export type ServiceType = typeof services[number]["id"];

export function PricingSelector({
  selectedService,
  setSelectedService,
}: {
  selectedService: ServiceType;
  setSelectedService: (service: ServiceType) => void;
}) {
  return (
    <motion.div 
      className="flex justify-center mb-12"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="relative w-full max-w-md">
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value as ServiceType)}
          className="block appearance-none w-full bg-white border-2 border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-gray-300 cursor-pointer"
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}