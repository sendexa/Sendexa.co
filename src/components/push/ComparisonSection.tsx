"use client";
import { motion } from 'framer-motion';
import { Check, X
  //  ChevronRight 
  } from 'lucide-react';
import { Container } from '@/layout/Container';

const comparisonData = [
  {
    feature: "Delivery Speed",
    yourService: "300ms median",
    competitor: "800-1200ms"
  },
  {
    feature: "Uptime SLA",
    yourService: "99.99%",
    competitor: "99.9%"
  },
  {
    feature: "Global Regions",
    yourService: "12",
    competitor: "6"
  },
  {
    feature: "Precision Targeting",
    yourService: "Unlimited segments",
    competitor: "Limited segments"
  },
  {
    feature: "Optimal Timing AI",
    yourService: "Included",
    competitor: "Extra cost"
  },
  {
    feature: "SOC 2 Compliance",
    yourService: "Type II",
    competitor: "Type I"
  },
  {
    feature: "Free Tier",
    yourService: "10,000 notifications/month",
    competitor: "None"
  },
  {
    feature: "Pricing Transparency",
    yourService: "Pay-as-you-go",
    competitor: "Minimum commitments"
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container  mx-auto">
        <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Developers Choose Us Over <span className="text-purple-400">Firebase</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We built our platform to outperform Firebase on every metric that matters.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.table 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full border-collapse"
          >
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-6 font-semibold text-gray-400">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-purple-400">Our Service</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-400">Firebase</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <td className="py-4 px-6">{row.feature}</td>
                  <td className="text-center py-4 px-6 font-medium">
                    {row.yourService === "Yes" ? (
                      <Check className="w-5 h-5 text-purple-400 mx-auto" />
                    ) : row.yourService === "No" ? (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      row.yourService
                    )}
                  </td>
                  <td className="text-center py-4 px-6 text-gray-400">
                    {row.competitor === "Yes" ? (
                      <Check className="w-5 h-5 text-gray-400 mx-auto" />
                    ) : row.competitor === "No" ? (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    ) : (
                      row.competitor
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-purple-600/20 flex items-center mx-auto">
            See Full Feature Comparison
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div> */}
        </Container>
      </div>
    </section>
  );
};