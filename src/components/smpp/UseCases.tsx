"use client";

import { Smartphone, Mailbox, Megaphone, CreditCard, Activity, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/layout/Container'

export default function UseCases() {
  const useCases = [
    {
      icon: Smartphone,
      title: "A2P Messaging",
      description: "Application-to-person notifications, alerts, and OTPs",
      examples: ["Banking alerts", "Appointment reminders", "Two-factor authentication"],
      stats: "High Reliability"
    },
    {
      icon: Mailbox,
      title: "P2P Platforms",
      description: "High-volume person-to-person messaging platforms",
      examples: ["Social networks", "Dating apps", "Community platforms"],
      stats: "Massive Scale"
    },
    {
      icon: Megaphone,
      title: "Marketing Campaigns",
      description: "Bulk SMS campaigns with high deliverability",
      examples: ["Promotional offers", "Event announcements", "Customer engagement"],
      stats: "99%+ Delivery"
    },
    {
      icon: CreditCard,
      title: "Transaction Alerts",
      description: "Real-time financial transaction notifications",
      examples: ["Payment confirmations", "Fraud alerts", "Balance updates"],
      stats: "Instant Delivery"
    },
    {
      icon: Activity,
      title: "IoT Notifications",
      description: "Machine-to-person alerts from connected devices",
      examples: ["Security systems", "Utility meters", "Vehicle tracking"],
      stats: "Always On"
    },
    {
      icon: Shield,
      title: "Emergency Alerts",
      description: "Critical notifications that must get through",
      examples: ["Public safety", "Weather alerts", "System outages"],
      stats: "Priority Routing"
    }
  ]

  return (
    <section className="bg-gradient-to-b from-sky-50 via-sky-100 to-white py-15">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Powering Mission-Critical Communications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Trusted by enterprises across industries for their most important messaging needs
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              
              <div className="space-y-2 mb-4">
                {useCase.examples.map((example, exIndex) => (
                  <div key={exIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2"></div>
                    <span className="text-gray-700">{example}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm font-medium text-blue-600">
                {useCase.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}