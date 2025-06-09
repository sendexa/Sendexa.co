// app/demo/DemoShowcase.tsx
"use client";
import { motion } from "framer-motion";
import {
  BadgeCent,
  MailPlus,
  LockKeyhole,
  MessageSquareDot,
  BellRing,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
  },
  {
    icon: LockKeyhole,
    title: "OTP API",
    description:
      "Secure your app with real-time OTP delivery via SMS, Email or WhatsApp.",
    link: "/demo/otp",
    stats: "500ms average delivery",
    color: "bg-indigo-900 text-indigo-300",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Business API",
    description:
      "Send alerts, OTPs, and support messages over WhatsApp at scale.",
    link: "/demo/whatsapp",
    stats: "High-volume messaging",
    color: "bg-green-900 text-green-300",
  },
  {
    icon: BadgeCent,
    title: "Payments API",
    description:
      "Collect payments, disburse funds, and manage wallets securely.",
    link: "/demo/payments",
    stats: "PCI-DSS compliant",
    color: "bg-blue-900 text-blue-300",
  },
  {
    icon: MailPlus,
    title: "Email API",
    description:
      "Send, receive, and track emails reliably at scale with TLS 1.3 encryption.",
    link: "/demo/email",
    stats: "Real-time analytics",
    color: "bg-emerald-900 text-emerald-300",
  },
  {
    icon: BellRing,
    title: "Push Notifications",
    description:
      "Send browser and in-app notifications users never miss.",
    link: "/demo/push",
    stats: "High engagement rates",
    color: "bg-purple-900 text-purple-300",
  },
];

export default function DemoShowcase() {
  return (
    <section className="py-20 bg-gray-950">
      <Container>
        {/* <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Experience Sendexa&apos;s Power
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-indigo-400 max-w-3xl mx-auto"
          >
            Explore our communication and payment APIs through interactive demos
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button 
              variant="outline" 
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-900/50 hover:text-indigo-300"
            >
              Get API Keys
            </Button>
          </motion.div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-xl p-8 transition-all hover:-translate-y-2 group shadow-lg hover:shadow-xl hover:border-indigo-500/30"
            >
              <Link href={service.link} className="block h-full">
                <div className={`w-14 h-14 flex items-center justify-center rounded-lg mb-6 ${service.color}`}>
                  <service.icon size={28} className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-sm text-indigo-400 font-medium mt-auto">
                  {service.stats}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-24 sm:mt-32"
>
  <div className="relative group">
    {/* Gradient border animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-md group-hover:blur-lg animate-gradient-x"></div>
    
    {/* Main content container */}
    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-full p-0.5 overflow-hidden">
      <div className="rounded-full bg-gradient-to-b from-gray-950 to-gray-900 px-8 py-6 sm:px-12 sm:py-8">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Need help choosing the right API?
          </h3>
          <p className="text-gray-400/90 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our API specialists are ready to guide you to the perfect solution for your business needs.
          </p>
          
          {/* Button with icon */}
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-indigo-500/80 animate-pulse"></div>
    <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-purple-500/80 animate-pulse delay-300"></div>
  </div>
</motion.div>

       
      </Container>
    </section>
  );
}