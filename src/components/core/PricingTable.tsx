"use client";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₵0.028",
      description: "Perfect for small projects and testing",
      features: [
        "100 free messages/month",
        "1-2999 SMS/units",
        "Pay-as-you-go",
        "All African carriers",
        "Basic analytics",
        "Email support",
        "99.5% uptime",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "₵0.026",
      description: "For growing businesses with higher volume",
      features: [
        "200 free messages/month",
        "3,000-10,000 SMS/units",
        "Volume discounts",
        "Priority routing",
        "Advanced analytics",
        "24/5 chat support",
        "99.9% uptime SLA",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical communications",
      features: [
        "10,000+ SMS/units",
        "Dedicated infrastructure",
        "Custom routing rules",
        "Dedicated account manager",
        "Phone support",
        "99.99% uptime SLA",
        "Local compliance support",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    // <section className="py-15 bg-gray-50">
    <section className="py-15 bg-gradient-to-b from-[#fdfcf7] via-[#fefcea] to-white">

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
            AFRICAN MESSAGING RATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Simple, Predictable Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparent pricing in Ghana Cedis with volume discounts. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border p-8 bg-white shadow-sm hover:shadow-md transition-all ${plan.popular ? "border-yellow-500 ring-2 ring-yellow-500/20" : "border-gray-200"}`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500 ml-1 text-lg">/SMS</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open(`https://app.sendexa.co`)}
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${plan.popular ? "bg-yellow-600 hover:bg-yellow-700 text-white" : "bg-white border border-gray-300 hover:border-yellow-500 text-gray-800"}`}
              >
                {plan.cta} {plan.popular && <ChevronRight className="w-4 h-4" />}
              </button>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white border border-yellow-100 rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 mb-4 md:mb-0 md:mr-6">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom infrastructure, direct carrier connections, and dedicated support for high-volume messaging across Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors flex items-center gap-1">
                  Contact Sales
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-5 py-2 border border-gray-300 hover:border-yellow-500 text-gray-700 rounded-lg font-medium transition-colors">
                  Download Rate Sheet
                </button>
              </div>
            </div>
          </div>
        </motion.div> */}

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All prices in Ghana Cedis (GHS). Volume discounts available at 10K+ messages.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Compare our rates with: <span className="text-yellow-600">Twilio</span> • <span className="text-yellow-600">Infobip</span> • <span className="text-yellow-600">AfricasTalking</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;