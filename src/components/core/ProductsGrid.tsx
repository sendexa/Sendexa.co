import { LockIcon, CheckCircle, MessageCircleIcon } from "lucide-react";
import { Container } from "@/layout/Container";

const products = [
  {
    icon: <MessageCircleIcon className="w-6 h-6" />,
    name: "SMS API",
    description: "Bulk SMS with direct African carrier connections",
    features: ["Ghana numbers first", "99% deliverability", "Real-time analytics"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    name: "OTP Service",
    description: "Secure authentication for African users",
    features: ["1-tap verify", "Retry logic", "Fraud detection"],
    color: "bg-green-100 text-green-800",
  },
  {
    icon: <MessageCircleIcon className="w-6 h-6" />,
    name: "Voice API",
    description: "Reliable voice calls with local numbers",
    features: ["IVR support", "Call recording", "Global reach"],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    name: "Email API",
    description: "Transactional and marketing emails made easy",
    features: ["High deliverability", "Template management", "Analytics"],
    color: "bg-purple-100 text-purple-800",
  },
  {
    icon: <MessageCircleIcon className="w-6 h-6" />,
    name: "WhatsApp API",
    description: "Engage users on their favorite messaging app",
    features: ["Rich media support", "Quick replies", "Broadcast lists"],
    color: "bg-pink-100 text-pink-800",
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    name: "Chatbot API",
    description: "Automate customer interactions with AI",
    features: ["Multi-channel support", "NLP capabilities", "Analytics"],
    color: "bg-teal-100 text-teal-800",
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-15 bg-gradient-to-b from-[#dff5ef] to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111e4f] mb-2">
            Communication Building Blocks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            APIs designed for African connectivity challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon Badge */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${product.color} bg-opacity-40`}
              >
                {product.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111e4f] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>

              <ul className="space-y-2 text-sm">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#fcd116]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
