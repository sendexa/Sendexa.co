// app/demo/DemoShowcase.tsx
"use client";
import { motion } from "framer-motion";
import {
  // BadgeCent,
  MailPlus,
  LockKeyhole,
  MessageSquareDot,
  // BellRing,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
//import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/layout/Container";
import Link from "next/link";
//import  Button  from "@/ui/Button";

const demoServices = [
  {
    icon: MessageSquareDot,
    title: "SMS API",
    description:
      "Deliver SMS reliably across Ghana with intelligent routing and 99.9% delivery rate.",
    link: "/demo/sms",
    stats: "Intelligent carrier routing",
    color: "bg-yellow-900 text-yellow-300",
    gradient: "from-yellow-600/20 to-amber-600/20",
  },
  {
    icon: LockKeyhole,
    title: "OTP API",
    description:
      "Secure your app with real-time OTP delivery via SMS, Email or WhatsApp.",
    link: "/demo/otp",
    stats: "500ms average delivery",
    color: "bg-indigo-900 text-indigo-300",
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
  // {
  //   icon: FaWhatsapp,
  //   title: "WhatsApp Business API",
  //   description:
  //     "Send alerts, OTPs, and support messages over WhatsApp at scale.",
  //   link: "/demo/whatsapp",
  //   stats: "High-volume messaging",
  //   color: "bg-green-900 text-green-300",
  //   gradient: "from-green-600/20 to-emerald-600/20",
  // },
  // {
  //   icon: BadgeCent,
  //   title: "Payments API",
  //   description:
  //     "Collect payments, disburse funds, and manage wallets securely.",
  //   link: "/demo/payments",
  //   stats: "PCI-DSS compliant",
  //   color: "bg-blue-900 text-blue-300",
  //   gradient: "from-blue-600/20 to-cyan-600/20",
  // },
  {
    icon: MailPlus,
    title: "Email API",
    description:
      "Send, receive, and track emails reliably at scale with TLS 1.3 encryption.",
    link: "/demo/email",
    stats: "Real-time analytics",
    color: "bg-emerald-900 text-emerald-300",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  // {
  //   icon: BellRing,
  //   title: "Push Notifications",
  //   description:
  //     "Send browser and in-app notifications users never miss.",
  //   link: "/demo/push",
  //   stats: "High engagement rates",
  //   color: "bg-purple-900 text-purple-300",
  //   gradient: "from-purple-600/20 to-pink-600/20",
  // },
];

export default function DemoShowcase() {
  return (
    <section className="py-16 bg-gray-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                style={{ backgroundImage: `linear-gradient(to bottom right, ${service.gradient})` }}
              />
              <Link href={service.link} className="block h-full">
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gray-700">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-indigo-400 font-medium">
                      {service.stats}
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-2xl"></div>
            
            {/* Main content */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
              <div className="px-8 py-12 sm:px-12 sm:py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Communication?
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Join 5,000+ businesses already using Sendexa to power their communication and payment needs. Get started with our developer-friendly APIs today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact" passHref legacyBehavior>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
                      >
                        Schedule a Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.a>
                    </Link>
                    <Link href="https://developers.sendexa.co" passHref legacyBehavior>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-800 text-gray-300 font-medium hover:bg-gray-700 hover:text-white transition-all duration-200"
                      >
                        View Documentation
                      </motion.a>
                    </Link>
                  </div>
                  
                  <div className="mt-8 text-sm text-gray-500">
                    <p>Free trial available • No credit card required • 24/7 support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
