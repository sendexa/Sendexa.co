// app/acceptable-use/components/AcceptableUseContent.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const policySections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          This Acceptable Use Policy (&quot;Policy&quot;) governs your use of Sendexa&apos;s messaging platform, APIs, and related services (&quot;Services&quot;). By using our Services, you agree to comply with this Policy.
        </p>
        <p>
          We may suspend or terminate your access if we determine your use violates this Policy or any applicable laws in Ghana or other African countries where we operate.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-uses",
    title: "2. Prohibited Uses",
    content: (
      <>
        <p className="mb-4">
          You may not use our Services to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Violate any laws or regulations in Ghana or recipient countries</li>
          <li>Send spam, phishing, or unsolicited commercial messages</li>
          <li>Engage in fraudulent, deceptive, or illegal activities</li>
          <li>Harass, threaten, or harm individuals or groups</li>
          <li>Spread malware, viruses, or other harmful code</li>
          <li>Impersonate others or misrepresent message origins</li>
          <li>Violate intellectual property rights</li>
          <li>Circumvent carrier filtering or regulatory requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: "content-restrictions",
    title: "3. Content Restrictions",
    content: (
      <>
        <p className="mb-4">
          Prohibited content includes but is not limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Hate speech or incitement to violence</li>
          <li>Adult or sexually explicit material</li>
          <li>Illegal drugs or substances</li>
          <li>Gambling content where prohibited</li>
          <li>Misinformation or fake news</li>
          <li>Content violating NCA (National Communications Authority) regulations</li>
          <li>High-risk financial content (payday loans, etc.)</li>
        </ul>
      </>
    ),
  },
  {
    id: "compliance",
    title: "4. Regulatory Compliance",
    content: (
      <>
        <h3 className="font-semibold text-lg mt-4 mb-2">Ghana Requirements</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Comply with NCA Directives on Electronic Communications</li>
          <li>Register sender IDs as required</li>
          <li>Adhere to Data Protection Act (Act 843)</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">International Rules</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Follow local telecom regulations in recipient countries</li>
          <li>Obtain proper consent for marketing messages</li>
          <li>Honor opt-out requests immediately</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "5. Security Requirements",
    content: (
      <>
        <p className="mb-4">
          You must maintain appropriate security measures:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Protect API keys and credentials</li>
          <li>Implement rate limiting to prevent abuse</li>
          <li>Secure your integration against exploits</li>
          <li>Monitor for unauthorized account access</li>
        </ul>
        <p>
          Report security vulnerabilities to security@sendexa.co immediately.
        </p>
      </>
    ),
  },
  {
    id: "monitoring",
    title: "6. Monitoring & Enforcement",
    content: (
      <>
        <p className="mb-4">
          Sendexa reserves the right to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Monitor message traffic for compliance</li>
          <li>Block messages that violate this Policy</li>
          <li>Investigate suspected violations</li>
          <li>Suspend or terminate non-compliant accounts</li>
          <li>Report illegal activities to authorities</li>
        </ul>
        <p>
          We may update filtering rules without notice to address new threats.
        </p>
      </>
    ),
  },
  {
    id: "consequences",
    title: "7. Violation Consequences",
    content: (
      <>
        <p className="mb-4">
          Violations may result in:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Immediate service suspension</li>
          <li>Removal of non-compliant content</li>
          <li>Termination of your account</li>
          <li>Fines for regulatory violations</li>
          <li>Legal action for severe breaches</li>
        </ul>
        <p>
          We typically provide notice for first violations unless the breach is severe.
        </p>
      </>
    ),
  },
  {
    id: "reporting",
    title: "8. Reporting Violations",
    content: (
      <>
        <p className="mb-4">
          To report Policy violations:
        </p>
        <p className="mb-2">
          Email: <a href="mailto:abuse@sendexa.co" className="text-primary-600">abuse@sendexa.co</a>
        </p>
        <p className="mb-4">
          Include evidence (screenshots, message details) and your contact information.
        </p>
        <p>
          We investigate all reports promptly and confidentially.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "9. Policy Changes",
    content: (
      <>
        <p className="mb-4">
          We may update this Policy to reflect:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>New regulatory requirements</li>
          <li>Emerging abuse patterns</li>
          <li>Service updates</li>
        </ul>
        <p>
          Material changes will be communicated via email or platform notifications.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: (
      <>
        <p className="mb-4">
          For questions about this Policy:
        </p>
        <p>
          Sendexa Limited<br />
          Compliance Department<br />
          PMB CT 243, Cantonments, Accra<br />
          Ghana<br />
          Email: compliance@sendexa.co<br />
          Phone: +233 30 123 4567
        </p>
      </>
    ),
  },
];

export default function AcceptableUseContent() {
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
              This Policy outlines permitted and prohibited uses of Sendexa&apos;s Services. Violations may result in service suspension or termination.
            </p>
          </motion.div>

          <div className="space-y-6">
            {policySections.map((section) => (
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
              Need Compliance Guidance?
            </h3>
            <p className="text-gray-600 mb-4">
              Our compliance team can help you understand how to use Sendexa&apos;s services in accordance with local regulations.
            </p>
            <a
              href="mailto:compliance@sendexa.co"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white-500 rounded-md hover:bg-primary-700"
            >
              Contact Compliance Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}