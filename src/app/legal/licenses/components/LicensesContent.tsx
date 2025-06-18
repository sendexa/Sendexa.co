// app/licenses/components/LicensesContent.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Download, ExternalLink } from "lucide-react";

const licenseSections = [
  {
    id: "telecom-licenses",
    title: "Telecommunications Licenses",
    icon: "📡",
    content: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-primary-500">🇬🇭</span> Ghana NCA License
            </h3>
            <p className="text-gray-600 mb-4">
              Full Value Added Service (VAS) provider license issued by Ghana&apos;s National Communications Authority (NCA).
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </a>
              <a 
                href="https://nca.org.gh" 
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify on NCA Website
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-primary-500">🇳🇬</span> Nigeria NCC Approval
            </h3>
            <p className="text-gray-600 mb-4">
              Approved SMS aggregator license from the Nigerian Communications Commission (NCC).
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Other African Markets</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { country: "Kenya", authority: "CAK", status: "Licensed" },
              { country: "South Africa", authority: "ICASA", status: "Approved" },
              { country: "Uganda", authority: "UCC", status: "Registered" },
              { country: "Tanzania", authority: "TCRA", status: "Pending" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="font-medium text-gray-900">{item.country}</div>
                <div className="text-sm text-gray-500">{item.authority}</div>
                <div className={`text-sm mt-2 px-2 py-1 rounded-full inline-block ${
                  item.status === 'Licensed' || item.status === 'Approved' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection Compliance",
    icon: "🔒",
    content: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Ghana Data Protection Act</h3>
            <p className="text-gray-600 mb-4">
              Fully compliant with Ghana&apos;s Data Protection Act, 2012 (Act 843). Registration Number: DPA/2023/12345
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Current and valid through June 2025
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3">GDPR Compliance</h3>
            <p className="text-gray-600 mb-4">
              Meets EU General Data Protection Regulation requirements for international message processing.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Includes Data Processing Addendum (DPA)
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Data Security Measures</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "End-to-end Encryption",
              "SOC 2 Type II Audit",
              "Regular Penetration Testing",
              "Employee Training"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: "industry-certifications",
    title: "Industry Certifications",
    icon: "🏆",
    content: (
      <>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">ISO 27001 Certified</h3>
                <p className="text-gray-600">Information Security Management System</p>
                <div className="mt-3">
                  <a href="#" className="text-primary-600 text-sm font-medium inline-flex items-center hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">PCI DSS Compliant</h3>
                <p className="text-gray-600">Secure payment processing certification</p>
                <div className="mt-3">
                  <a href="#" className="text-primary-600 text-sm font-medium inline-flex items-center hover:underline">
                    View Compliance Report <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Other Recognitions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Africa Digital Excellence Award", year: "2023" },
              { name: "Ghana FinTech Innovation", year: "2022" },
              { name: "Best SMS API Provider", year: "2021" },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4 py-1">
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },
  {
    id: "legal-docs",
    title: "Legal Documentation",
    icon: "📑",
    content: (
      <>
        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Available for Download</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Certificate of Incorporation", type: "PDF", size: "2.4 MB" },
              { name: "Tax Compliance Certificate", type: "PDF", size: "1.8 MB" },
              { name: "Audited Financial Statements", type: "PDF", size: "4.2 MB" },
              { name: "Anti-Money Laundering Policy", type: "DOCX", size: "1.1 MB" },
              { name: "VAT Registration Certificate", type: "PDF", size: "1.5 MB" },
              { name: "Business Operating License", type: "PDF", size: "3.0 MB" },
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.type} • {item.size}</div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-800">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <h3 className="font-bold text-lg text-primary-800 mb-3">Need Official Copies?</h3>
          <p className="text-primary-700 mb-4">
            For verified copies of any licenses or certificates, please contact our compliance team.
          </p>
          <a
            href="mailto:compliance@sendexa.co"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Request Official Documents
          </a>
        </div>
      </>
    ),
  },
];

export default function LicensesContent() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["telecom-licenses", "data-protection"])
  );

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Regulatory Compliance Framework
            </h2>
            <p className="text-xl text-gray-600">
              Sendexa maintains all required licenses and certifications to operate legally across Africa, with particular focus on Ghana&apos;s telecommunications regulations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {licenseSections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-left p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  {expandedSections.has(section.id) ? (
                    <ChevronUp className="h-6 w-6 text-primary-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary-500" />
                  )}
                </button>
                {expandedSections.has(section.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="text-gray-600">{section.content}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900 text-white rounded-2xl overflow-hidden"
          >
            <div className="p-10 md:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Compliance Verification
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Need to verify any of our licenses with regulatory authorities? Our compliance team can provide official confirmation letters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:compliance@sendexa.co"
                    className="inline-flex items-center px-8 py-4 bg-primary-500 text-white hover:bg-primary-600 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
                  >
                    Request Verification
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
                  >
                    Contact Compliance Team
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}