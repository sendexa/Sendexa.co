"use client";
import { Code2, Cpu,  Network, Shield, Database, Server } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

const specs = [
  {
    icon: Cpu,
    title: "Protocol Support",
    items: [
      "SMPP v3.4, v5.0 (Full support)",
      "HTTP API (REST/JSON)",
      "WebSockets for real-time delivery receipts",
      "SOAP API for legacy systems",
      "Custom protocol adapters available"
    ]
  },
  {
    icon: Network,
    title: "Performance",
    items: [
      "10,000+ messages per second per connection",
      "Sub-100ms end-to-end latency",
      "99.99% uptime SLA",
      "Multi-threaded bind support (16+ sessions)",
      "Connection pooling and multiplexing"
    ]
  },
  {
    icon: Database,
    title: "Storage & Queuing",
    items: [
      "Persistent message queuing (disk-backed)",
      "7-day message retention",
      "Automatic retry mechanisms (configurable)",
      "Dead letter queue handling",
      "Message prioritization (5 levels)"
    ]
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      "TLS 1.3 encryption (AES-256)",
      "IP whitelisting (per connection)",
      "Two-factor authentication",
      "Per-connection rate limiting",
      "DDoS protection (10Gbps+ capacity)"
    ]
  },
  {
    icon: Server,
    title: "Infrastructure",
    items: [
      "Multi-region deployment (US, EU, Asia)",
      "Dedicated SMPP servers available",
      "Anycast IP routing",
      "Automatic failover",
      "Geo-redundant architecture"
    ]
  },
  {
    icon: Code2,
    title: "Integration",
    items: [
      "Detailed API documentation",
      "SDKs for Java, Python, Node.js, .NET, Go",
      "Postman collection",
      "Webhook support (10+ event types)",
      "24/7 technical support"
    ]
  }
];

export default function TechnicalSpecs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-15">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Technical Specifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Enterprise-grade infrastructure designed for the most demanding messaging workloads
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <Accordion type="multiple" className="w-full">
            {specs.map((spec, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="hover:no-underline px-6 py-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">{spec.title}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="list-disc pl-6 space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">
                        <span className="font-medium">{item.split(' (')[0]}</span>
                        {item.includes('(') && (
                          <span className="text-gray-500"> ({item.split('(')[1].replace(')', '')})</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}