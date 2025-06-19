"use client";

import  Button  from "@/ui/Button";
import { Mail, MessageSquareText, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-15">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Power Your Messaging Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with our SMPP gateway today or talk to our experts about your specific requirements
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-blue-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquareText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Free Trial</h3>
                <p className="text-gray-600 mb-4">10,000 free messages</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign Up Free <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get technical answers</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Support
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Sales</h3>
                <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}