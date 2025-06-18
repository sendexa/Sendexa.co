// app/terms/components/TermsContent.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const termsSections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          Welcome to Sendexa! These Terms of Service (&quot;Terms&quot;) govern your access to and use of Sendexa&apos;s messaging platform, APIs, and related services (&quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms.
        </p>
        <p>
          Sendexa provides cloud-based communication tools including SMS, Email, OTP, and Voice messaging services primarily focused on African markets.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    title: "2. Acceptance of Terms",
    content: (
      <>
        <p className="mb-4">
          By registering for an account or using our Services, you confirm that:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>You are at least 18 years old or have legal capacity to enter into contracts</li>
          <li>You accept these Terms and agree to comply with them</li>
          <li>You will comply with all applicable laws and regulations</li>
        </ul>
        <p>
          If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "3. Account Registration",
    content: (
      <>
        <p className="mb-4">
          To access certain Services, you must register for an account. You agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security of your credentials</li>
          <li>Be responsible for all activities that occur under your account</li>
        </ul>
        <p>
          Sendexa reserves the right to refuse service, suspend, or terminate accounts at our discretion.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "4. Acceptable Use",
    content: (
      <>
        <p className="mb-4">
          You agree not to use our Services to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Send spam, phishing, or unsolicited messages</li>
          <li>Engage in fraudulent, deceptive, or illegal activities</li>
          <li>Violate any telecommunications regulations in Ghana or other African countries</li>
          <li>Harass, threaten, or harm others</li>
          <li>Transmit viruses or malicious code</li>
          <li>Violate intellectual property rights</li>
        </ul>
        <p className="mb-4">
          You must comply with all applicable laws including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Ghana Data Protection Act</li>
          <li>National Communications Authority regulations</li>
          <li>Anti-spam laws in recipient countries</li>
        </ul>
        <p>
          Sendexa may monitor message content for compliance and reserves the right to block messages that violate these Terms.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    title: "5. Billing and Payments",
    content: (
      <>
        <p className="mb-4">
          Our Services are primarily pay-as-you-go based on usage. You agree to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Pay all fees associated with your account</li>
          <li>Provide valid payment information</li>
          <li>Authorize us to charge your payment method</li>
        </ul>
        <p className="mb-4">
          Pricing may vary by country and message type. We reserve the right to change prices with 30 days notice.
        </p>
        <p>
          All fees are non-refundable except as required by law or at our discretion.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "6. Limitations of Liability",
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by law:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Sendexa shall not be liable for any indirect, incidental, or consequential damages</li>
          <li>Our total liability for any claims shall not exceed the fees you paid in the 6 months preceding the claim</li>
          <li>We make no warranties about message delivery times or rates</li>
        </ul>
        <p>
          Some jurisdictions don&apos;t allow certain liability limitations, so these may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "7. Termination",
    content: (
      <>
        <p className="mb-4">
          Either party may terminate these Terms at any time by providing notice.
        </p>
        <p className="mb-4">
          Sendexa may suspend or terminate your access immediately if:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>You violate these Terms</li>
          <li>Required by law</li>
          <li>For non-payment</li>
        </ul>
        <p>
          Upon termination, you must cease all use of our Services and any outstanding fees become immediately due.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "8. Changes to Terms",
    content: (
      <>
        <p className="mb-4">
          We may modify these Terms at any time. When we make material changes, we&apos;ll notify you through the Services or by email.
        </p>
        <p>
          Your continued use after changes become effective constitutes acceptance of the new Terms. If you don&apos;t agree, you must stop using our Services.
        </p>
      </>
    ),
  },
  {
    id: "governing",
    title: "9. Governing Law",
    content: (
      <>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
        </p>
        <p>
          Any disputes shall be subject to the exclusive jurisdiction of the courts of Accra, Ghana.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Information",
    content: (
      <>
        <p className="mb-4">
          For questions about these Terms, please contact:
        </p>
        <p>
          Sendexa Limited<br />
          PMB CT 243, Cantonments, Accra<br />
          Ghana<br />
          Email: legal@sendexa.co<br />
          Phone: +233 30 123 4567
        </p>
      </>
    ),
  },
];

export default function TermsContent() {
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
              These Terms of Service (&quot;Terms&quot;) govern your use of Sendexa&apos;s messaging platform and services. Please read them carefully before using our Services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {termsSections.map((section) => (
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
              Need Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              For any legal inquiries or questions about these Terms, please contact our legal team.
            </p>
            <a
              href="mailto:legal@sendexa.co"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              Contact Legal Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}