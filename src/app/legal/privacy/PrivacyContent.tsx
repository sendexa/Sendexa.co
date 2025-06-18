"use client"
import { Container } from "@/layout/Container";
import { Shield, Lock, Server, Mail, Clock, User, ShieldCheck,MapPin,Zap } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const iconMap = {
    introduction: <Shield className="h-6 w-6 text-blue-500" />,
    collection: <Server className="h-6 w-6 text-blue-500" />,
    usage: <Zap className="h-6 w-6 text-blue-500" />,
    protection: <Lock className="h-6 w-6 text-blue-500" />,
    retention: <Clock className="h-6 w-6 text-blue-500" />,
    rights: <User className="h-6 w-6 text-blue-500" />,
    changes: <ShieldCheck className="h-6 w-6 text-blue-500" />,
    contact: <Mail className="h-6 w-6 text-blue-500" />
  };



export default function PrivacyContent() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
     

      <Container className="py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Shield className="h-10 w-10 text-blue-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <motion.p 
              className="text-gray-400 mb-12 px-4 py-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.introduction}
                <h2 className="text-2xl font-bold text-white">
                  1. Introduction
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                Sendexa (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                communication APIs and services.
              </p>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.collection}
                <h2 className="text-2xl font-bold text-white">
                  2. Information We Collect
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-4">
                {[
                  "Account information (name, email, company details)",
                  "Payment and billing information",
                  "API usage data and logs",
                  "Message metadata (not message content)",
                  "Device and browser information"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.usage}
                <h2 className="text-2xl font-bold text-white">
                  3. How We Use Your Information
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-4">
                {[
                  "Provide and maintain our services",
                  "Process transactions and send invoices",
                  "Improve and optimize our APIs",
                  "Monitor for security and fraudulent activity",
                  "Communicate with you about service updates"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.protection}
                <h2 className="text-2xl font-bold text-white">
                  4. Data Protection
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures
                to protect your data, including:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-4">
                {[
                  "Encryption of data in transit and at rest",
                  "Regular security audits",
                  "Access controls and authentication",
                  "Compliance with industry standards"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.retention}
                <h2 className="text-2xl font-bold text-white">
                  5. Data Retention
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                We retain personal data only for as long as necessary to:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-4">
                {[
                  "Fulfill the purposes outlined in this policy",
                  "Comply with legal obligations",
                  "Resolve disputes",
                  "Enforce our agreements"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.rights}
                <h2 className="text-2xl font-bold text-white">
                  6. Your Rights
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul className="text-gray-300 list-disc pl-6 space-y-3 mb-4">
                {[
                  "Access to your personal data",
                  "Correction of inaccurate data",
                  "Deletion of your data",
                  "Restriction of processing",
                  "Data portability",
                  "Objection to processing"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="mb-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.changes}
                <h2 className="text-2xl font-bold text-white">
                  7. Changes to This Policy
                </h2>
              </div>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. We will notify
                you of significant changes through our website or by email.
              </p>
            </motion.section>

            <motion.section 
              className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                {iconMap.contact}
                <h2 className="text-2xl font-bold text-white">
                  8. Contact Us
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="space-y-3">
                <motion.p 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span><strong>Email:</strong> privacy@sendexa.co</span>
                </motion.p>
                <motion.p 
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span><strong>Address:</strong> 123 Digital Street, Accra, Ghana</span>
                </motion.p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}