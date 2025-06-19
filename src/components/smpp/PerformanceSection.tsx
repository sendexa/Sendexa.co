"use client";
import { Clock, HardDrive, Cpu, CheckCircle } from "lucide-react";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import RadialGauge from "./RadialGauge";

export default function PerformanceSection() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-15">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unmatched Performance Metrics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world numbers from our production infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-40 h-40 mx-auto mb-6">
              <RadialGauge value={99.99} />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <HardDrive className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Uptime SLA</h3>
            </div>
            <p className="text-gray-600">Guaranteed 99.99% availability</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-40 h-40 mx-auto mb-6">
              <RadialGauge value={99.9} maxValue={100} unit="%" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Delivery Rate</h3>
            </div>
            <p className="text-gray-600">Industry-leading deliverability</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-40 h-40 mx-auto mb-6">
              <RadialGauge value={85} maxValue={100} unit="ms" reverse />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Avg Latency</h3>
            </div>
            <p className="text-gray-600">Consistent sub-100ms delivery</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-40 h-40 mx-auto mb-6">
              <RadialGauge value={10000} maxValue={15000} unit="TPS" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Throughput</h3>
            </div>
            <p className="text-gray-600">10,000+ messages per second</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}