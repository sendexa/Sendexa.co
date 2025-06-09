"use client";
import { motion } from "framer-motion";
import { Globe, Zap, CreditCard, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Container } from "@/layout/Container";

const stats = [
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    value: "200+",
    label: "Countries",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    value: "300ms",
    label: "Avg processing time",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    value: "100+",
    label: "Payment methods",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    value: "99.9%",
    label: "Uptime SLA",
  },
];

export const GlobalCoverage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto ">
        <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Global Payments{" "}
                <span className="text-blue-400">Infrastructure</span>
              </h2>
              <p className="text-lg text-gray-400">
                Process payments and send payouts anywhere in the world with our
                network of local acquiring partners and banking rails.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-900/20 mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 h-[500px] relative">
            <Image
              src="/images/global-coverage-map.png"
              alt="Global Coverage Map"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-gray-950/80 pointer-events-none"></div>
          </div>
        </div>
        </Container>
      </div>
    </section>
  );
};
