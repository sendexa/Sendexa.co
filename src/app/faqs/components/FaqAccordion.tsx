"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/layout/Container";


const faqs = [
  {
    id: 1,
    question: "How do I create a Sendexa account?",
    answer: "You can sign up for a Sendexa account on our website by clicking the 'Get Started' button. You'll need to provide basic information about your business and verify your email address.",
    category: "account",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and bank transfers. For enterprise customers, we also support invoice payments.",
    category: "billing",
  },
  {
    id: 3,
    question: "How do your APIs work?",
    answer: "Our REST APIs allow you to integrate messaging functionality into your applications. We provide comprehensive documentation and SDKs in multiple programming languages to make integration easy.",
    category: "api",
  },
  {
    id: 4,
    question: "What's your message delivery rate?",
    answer: "We maintain a 99.9% delivery rate across our network. Delivery times vary by country and carrier but are typically under 5 seconds.",
    category: "delivery",
  },
  {
    id: 5,
    question: "How do you secure my data?",
    answer: "We use end-to-end encryption for all messages and employ industry-standard security practices including regular audits, two-factor authentication, and SOC 2 compliance.",
    category: "security",
  },
  {
    id: 6,
    question: "Can I use Sendexa for marketing messages?",
    answer: "Yes, but you must comply with all local regulations. We provide tools to help you manage opt-ins and opt-outs, and we enforce strict anti-spam policies.",
    category: "account",
  },
  {
    id: 7,
    question: "Do you offer volume discounts?",
    answer: "Yes, we offer tiered pricing based on volume. Contact our sales team for custom pricing if you expect to send more than 1 million messages per month.",
    category: "billing",
  },
  {
    id: 8,
    question: "How do I check my API usage?",
    answer: "Your dashboard provides real-time analytics on message volume, delivery rates, and other metrics. You can also access usage reports via our API.",
    category: "api",
  },
  {
    id: 9,
    question: "What countries does Sendexa support?",
    answer: "Sendexa supports SMS, Email, OTP, and Voice delivery across Ghana, Nigeria, Kenya, South Africa, and most African countries. Our infrastructure is optimized for high-speed local delivery.",
    category: "coverage",
  },
  {
    id: 10,
    question: "Is Sendexa the same as Saxenda?",
    answer: "No. Sendexa is a communications platform offering APIs for SMS, email, OTP, and voice messaging across Africa. Saxenda is a medical product with no relation to Sendexa.",
    category: "brand",
  },
  {
    id: 11,
    question: "How fast are OTP messages delivered with Sendexa?",
    answer: "Our OTP messages are typically delivered within 2-5 seconds, depending on carrier and network conditions. We prioritize OTP delivery for security-critical operations.",
    category: "otp",
  },
  // {
  //   id: 12,
  //   question: "Can I send SMS messages to multiple countries?",
  //   answer: "Yes. Sendexa supports international SMS delivery, including to Ghana, Nigeria, Kenya, and other African markets. You can manage recipients and country-specific pricing via your dashboard.",
  //   category: "sms",
  // },
  {
    id: 13,
    question: "Does Sendexa offer support for developers?",
    answer: "Absolutely. We offer detailed API documentation, SDKs, and a developer portal. You can also reach out to our technical support for integration assistance.",
    category: "support",
  },
  {
    id: 14,
    question: "What makes Sendexa different from other messaging platforms?",
    answer: "Sendexa is focused on Africa, offering fast and reliable message delivery tailored to the continent's telecom infrastructure. We also provide local support, regulatory compliance, and competitive pricing.",
    category: "features",
  },
  {
    id: 15,
    question: "Can I use Sendexa for two-factor authentication (2FA)?",
    answer: "Yes. Our OTP API is perfect for implementing two-factor authentication. You can use it to secure user logins, transactions, and sensitive operations.",
    category: "otp",
  },
  {
    id: 16,
    question: "How can I test the Sendexa APIs before going live?",
    answer: "We provide a free sandbox environment where you can test all API features without sending live messages. This allows you to build and debug before deploying.",
    category: "api",
  },
  // {
  //   id: 17,
  //   question: "Does Sendexa comply with Ghana's data protection laws?",
  //   answer: "Yes, we fully comply with the Data Protection Act of Ghana and other applicable regulations. Our infrastructure is built with privacy and security as top priorities.",
  //   category: "compliance",
  // },
  {
    id: 18,
    question: "Can I white-label Sendexa services?",
    answer: "Yes, we offer white-label solutions for resellers and partners. Contact our business development team to explore branding and reseller options.",
    category: "reseller",
  }
];

export default function FaqAccordion() {
const [activeCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Split FAQs into groups of 2 for desktop layout
  const faqPairs = [];
  for (let i = 0; i < filteredFaqs.length; i += 2) {
    faqPairs.push(filteredFaqs.slice(i, i + 2));
  }

  return (
    <section id="faqs" className="py-20 bg-white">
        <Container>
      <div className="container mx-auto">
        {filteredFaqs.length > 0 ? (
          <div className=" mx-auto">
            {/* Mobile view - single column */}
            <div className="space-y-4 md:hidden">
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    {expandedId === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-primary-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-500" />
                    )}
                  </button>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop view - 2x2 grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-6">
              {faqPairs.map((pair, index) => (
                <div key={index} className="space-y-4">
                  {pair.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleExpand(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h3>
                        {expandedId === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-primary-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary-500" />
                        )}
                      </button>
                      {expandedId === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-600">No FAQs match your search criteria.</p>
          </motion.div>
        )}
      </div>
      </Container>
    </section>
  );
}