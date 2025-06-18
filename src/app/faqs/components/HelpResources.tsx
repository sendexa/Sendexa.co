// app/help-center/components/HelpResources.tsx
"use client";
import { motion } from "framer-motion";
import { BookOpen, Code, Video, FileText } from "lucide-react";
import Link from "next/link";
import { Container } from "@/layout/Container";

const resources = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary-500" />,
    title: "Documentation",
    description: "Comprehensive guides and API references for all Sendexa services",
    link: "https://developers.sendexa.co",
    linkText: "View Docs",
  },
  {
    icon: <Code className="w-8 h-8 text-primary-500" />,
    title: "API Reference",
    description: "Detailed technical documentation for our REST APIs and SDKs",
    link: "https://developers.sendexa.co/api",
    linkText: "API Docs",
  },
  {
    icon: <Video className="w-8 h-8 text-primary-500" />,
    title: "Tutorials",
    description: "Step-by-step video tutorials for common integrations",
    link: "https://developers.sendexa.co/tutorials",
    linkText: "Watch Videos",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary-500" />,
    title: "Guides",
    description: "In-depth articles on best practices and use cases",
    link: "https://developers.sendexa.co/guides",
    linkText: "Read Guides",
  },
];

export default function HelpResources() {
  return (
    <section className="py-20 bg-white">
        <Container>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Support Resources
          </h2>
          <p className="text-xl text-gray-600">
            Explore our documentation and learning resources to get the most out of Sendexa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link
                href={resource.link}
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
              >
                {resource.linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}