import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sendexa | API Support & Sales Team",
  description:
    "Get in touch with Africa's leading communication API platform. Technical support, sales inquiries, and partnership opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our API Experts | Sendexa Support",
    description:
      "24/7 technical support for SMS, WhatsApp, and Payments APIs. Reach our Ghana office or global team.",
    url: "/contact",
    images: [
      {
        url: "/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Sendexa Contact Channels",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Contact Our API Team
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you need technical support, sales information, or
            partnership opportunities, our team is ready to help.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800/50">
              <ContactForm />
            </div>
          </div>
          {/* <ContactMap /> */}
          <div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800/50">
              <ContactInfo />
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800/50">
          <ContactMap />
        </div>
      </div>
    </main>
  );
}
