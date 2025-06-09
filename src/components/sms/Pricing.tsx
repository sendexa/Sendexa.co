"use client";
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

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
        "All global carriers",
        "Basic analytics",
        "Email support",
        "99.5% uptime"
      ],
      cta: "Get Started"
    },
    {
      name: "Growth",
      price: "₵0.026",
      description: "For growing businesses with higher volume",
      features: [
        "200 free messages/month",
        "3,00-10,000 SMS/ units",
        "Pay-as-you-go",
        "Volume discounts",
        "Priority routing",
        "Advanced analytics",
        "24/5 chat support",
        "99.9% uptime SLA"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For mission-critical communications",
      features: [
        "Custom pricing",
        "10,000+ SMS/units",
        "Dedicated infrastructure",
        "Custom routing rules",
        "Volume discounts",
        "Dedicated account manager",
        "Custom SLAs",
        "Phone support",
        "99.99% uptime SLA",
        "HIPAA compliance"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Pay-as-you-go pricing with volume discounts. No hidden fees or surprise charges.
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
              className={`relative rounded-xl border p-8 ${plan.popular ? 'border-yellow-400 bg-gray-900' : 'border-gray-800 bg-gray-900/50'}`}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400 ml-1">/message</span>}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-600/20 mb-4 md:mb-0 md:mr-6">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Need something custom?</h3>
              <p className="text-gray-400 mb-4">
                We offer dedicated infrastructure, custom routing rules, and volume discounts for high-throughput applications.
              </p>
              <button className="px-6 py-2 border border-yellow-400 text-yellow-100 hover:bg-yellow-900/50 rounded-lg font-medium transition-colors">
                Contact Enterprise Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;