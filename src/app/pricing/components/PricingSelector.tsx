"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

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
      className="flex justify-center mb-12 px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="relative w-full max-w-md">
        <label htmlFor="service" className="sr-only">
          Select a service
        </label>
        <select
          id="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value as ServiceType)}
          className={clsx(
            "block w-full appearance-none bg-white text-gray-800",
            "border border-gray-300 hover:border-gray-400",
            "py-3 px-4 pr-10 rounded-xl shadow-sm",
            "focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-ring-yellow-500",
            "transition-all duration-200 text-base cursor-pointer"
          )}
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}
