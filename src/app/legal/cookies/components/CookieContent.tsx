// app/cookie-policy/components/CookieContent.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const cookieSections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          This Cookie Policy explains how Sendexa Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website or use our services.
        </p>
        <p>
          By using our website, you consent to the use of cookies in accordance with this policy, unless you have disabled them in your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    title: "2. What Are Cookies?",
    content: (
      <>
        <p className="mb-4">
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Make websites work more efficiently</li>
          <li>Provide information to website owners</li>
          <li>Enhance user experience</li>
        </ul>
        <p>
          We also use similar technologies like web beacons, pixels, and local storage for similar purposes.
        </p>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    content: (
      <>
        <h3 className="font-semibold text-lg mt-4 mb-2">Essential Cookies</h3>
        <p className="mb-4">
          These are necessary for the website to function and cannot be switched off.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Authentication cookies to keep you logged in</li>
          <li>Security cookies to protect against attacks</li>
          <li>Load-balancing cookies for performance</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Analytics Cookies</h3>
        <p className="mb-4">
          These help us understand how visitors interact with our website.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Google Analytics for traffic analysis</li>
          <li>Hotjar for user behavior insights</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Preference Cookies</h3>
        <p className="mb-4">
          These remember your choices to provide better experience.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Language preferences</li>
          <li>Region-specific settings</li>
        </ul>
        
        <h3 className="font-semibold text-lg mt-4 mb-2">Marketing Cookies</h3>
        <p>
          These track visitors across websites to display relevant ads.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "4. Purposes of Using Cookies",
    content: (
      <>
        <p className="mb-4">
          We use cookies for several purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To authenticate users and prevent fraud</li>
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To improve and personalize your experience</li>
          <li>To deliver targeted advertisements (with consent)</li>
          <li>To measure ad campaign effectiveness</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "5. Third-Party Cookies",
    content: (
      <>
        <p className="mb-4">
          Some cookies are placed by third-party services that appear on our pages:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Google Analytics:</strong> For website analytics</li>
          <li><strong>Hotjar:</strong> For user behavior analysis</li>
          <li><strong>Facebook Pixel:</strong> For ad tracking (with consent)</li>
          <li><strong>LinkedIn Insight Tag:</strong> For ad performance</li>
        </ul>
        <p>
          We don&apos;t control these third-party cookies. Please refer to their respective privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "duration",
    title: "6. Cookie Duration",
    content: (
      <>
        <p className="mb-4">
          Cookies remain on your device for different periods:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Session cookies:</strong> Expire when you close your browser</li>
          <li><strong>Persistent cookies:</strong> Remain until expiration or deletion</li>
        </ul>
        <p>
          The lifespan of each cookie varies from a few minutes to several years.
        </p>
      </>
    ),
  },
  {
    id: "control",
    title: "7. Managing Cookies",
    content: (
      <>
        <p className="mb-4">
          You can control and/or delete cookies as you wish:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Browser settings to block or delete cookies</li>
          <li>Our cookie consent banner to manage preferences</li>
          <li>Third-party tools to opt-out of tracking</li>
        </ul>
        <p className="mb-4">
          To manage cookies in your browser:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary-600 hover:underline">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
        </ul>
        <p>
          Note that blocking essential cookies may affect website functionality.
        </p>
      </>
    ),
  },
  {
    id: "dnt",
    title: "8. Do Not Track Signals",
    content: (
      <>
        <p className="mb-4">
          Some browsers have &quot;Do Not Track&quot; (DNT) features that signal your preference not to be tracked across websites.
        </p>
        <p>
          Currently, we don&apos;t respond to DNT signals as there&apos;s no industry standard for compliance. We instead rely on explicit cookie consent preferences.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: (
      <>
        <p className="mb-4">
          We may update this Cookie Policy periodically. We&apos;ll notify you of significant changes through our website or other communication channels.
        </p>
        <p>
          The &quot;Last Updated&quot; date at the top indicates when this policy was last revised.
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
          For questions about our use of cookies:
        </p>
        <p>
          Sendexa Limited<br />
          PMB CT 243, Cantonments, Accra<br />
          Ghana<br />
          Email: privacy@sendexa.co<br />
          Phone: +233 30 123 4567
        </p>
      </>
    ),
  },
];

export default function CookieContent() {
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
              This policy explains how we use cookies and similar tracking technologies on our website and services, and how you can manage your preferences.
            </p>
          </motion.div>

          <div className="space-y-6">
            {cookieSections.map((section) => (
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
              Manage Cookie Preferences
            </h3>
            <p className="text-gray-600 mb-4">
              You can update your cookie settings at any time through our consent management platform.
            </p>
            <button
              onClick={() => {
                // This would typically trigger your cookie consent manager
                if (typeof window !== "undefined" && (window as typeof window & { Cookiebot?: { renew: () => void } }).Cookiebot) {
                  (window as typeof window & { Cookiebot?: { renew: () => void } }).Cookiebot?.renew();
                } else {
                  alert("Cookie preferences dialog will appear here");
                }
              }}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Update Cookie Settings
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}