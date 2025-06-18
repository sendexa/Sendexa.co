// app/privacy/components/PrivacyContent.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const privacySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          Sendexa Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our messaging platform and services (the &quot;Services&quot;).
        </p>
        <p>
          We comply with Ghana&apos;s Data Protection Act, 2012 (Act 843) and other applicable data protection laws in the jurisdictions where we operate.
        </p>
      </>
    ),
  },
  {
    id: "data-collection",
    title: "2. Data We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect several types of information to provide and improve our Services:
        </p>
        <h3 className="font-semibold text-lg mt-4 mb-2">Personal Information</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Contact details (name, email, phone number)</li>
          <li>Business information (company name, address)</li>
          <li>Payment information (processed securely by our payment processors)</li>
          <li>Account credentials</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Usage Data</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>API usage statistics</li>
          <li>Message delivery logs</li>
          <li>IP addresses and device information</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Message Content</h3>
        <p>
          We process message content only for delivery purposes and do not store message content beyond what is necessary for service operation and legal compliance.
        </p>
      </>
    ),
  },
  {
    id: "data-use",
    title: "3. How We Use Your Data",
    content: (
      <>
        <p className="mb-4">
          We use the collected data for various purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and maintain our Services</li>
          <li>To authenticate users and secure accounts</li>
          <li>To process payments and prevent fraud</li>
          <li>To monitor and analyze service usage</li>
          <li>To improve our Services and develop new features</li>
          <li>To comply with legal obligations</li>
          <li>To communicate with you about service updates</li>
        </ul>
        <p>
          We will never sell your personal data to third parties.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Disclosure",
    content: (
      <>
        <p className="mb-4">
          We may share your information in these limited circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Service Providers:</strong> With vendors who help operate our Services (payment processors, hosting providers)</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
          <li><strong>Aggregated Data:</strong> Non-personally identifiable usage statistics</li>
        </ul>
        <p>
          We require all third parties to respect your data protection rights and comply with applicable laws.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security audits and testing</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Employee training on data protection</li>
        </ul>
        <p>
          While we strive to protect your data, no security system is impenetrable. We cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p className="mb-4">
          We retain personal data only as long as necessary:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Account data: Until account deletion request</li>
          <li>Transaction records: 7 years for tax compliance</li>
          <li>Message logs: 90 days for troubleshooting</li>
          <li>Cookies: As specified in our Cookie Policy</li>
        </ul>
        <p>
          We may retain anonymized data indefinitely for analytics and service improvement.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "7. Your Data Protection Rights",
    content: (
      <>
        <p className="mb-4">
          Under Ghana&apos;s Data Protection Act and other applicable laws, you have rights including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Access:</strong> Request copies of your personal data</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Restriction:</strong> Request limitation of processing</li>
          <li><strong>Objection:</strong> Object to certain processing activities</li>
          <li><strong>Portability:</strong> Request transfer of your data</li>
        </ul>
        <p>
          To exercise these rights, please contact us at privacy@sendexa.co. We may need to verify your identity before processing requests.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "8. International Data Transfers",
    content: (
      <>
        <p className="mb-4">
          As an African-focused provider, we primarily process data within Ghana and other African countries. However, some data may be transferred to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Our regional cloud infrastructure partners</li>
          <li>Global service providers with appropriate safeguards</li>
        </ul>
        <p>
          We ensure all international transfers comply with applicable data protection laws and implement appropriate safeguards like Standard Contractual Clauses where needed.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: (
      <>
        <p className="mb-4">
          Our Services are not directed to individuals under 18. We do not knowingly collect personal data from children.
        </p>
        <p>
          If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: (
      <>
        <p className="mb-4">
          We may update this Privacy Policy periodically. We will notify you of significant changes through our website or by email.
        </p>
        <p>
          Your continued use of our Services after changes become effective constitutes acceptance of the updated policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <>
        <p className="mb-4">
          For questions about this Privacy Policy or your personal data:
        </p>
        <p>
          Sendexa Limited<br />
          Data Protection Officer<br />
          PMB CT 243, Cantonments, Accra<br />
          Ghana<br />
          Email: privacy@sendexa.co<br />
          Phone: +233 30 123 4567
        </p>
      </>
    ),
  },
];

export default function PrivacyContent() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["introduction"])
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
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="prose prose-lg text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gray-600">
              This Privacy Policy describes our practices regarding the collection, use, and disclosure of your information when you use our Services and the choices you have associated with that data.
            </p>
          </motion.div>

          <div className="space-y-6">
            {privacySections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-b border-gray-200 pb-6"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
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
                    className="mt-4"
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
            className="mt-12 bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Exercise Your Privacy Rights
            </h3>
            <p className="text-gray-600 mb-4">
              To request access, correction, or deletion of your personal data, please contact our Data Protection Officer.
            </p>
            <a
              href="mailto:privacy@sendexa.co"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              Contact DPO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}