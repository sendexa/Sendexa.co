"use client";
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '@/layout/Container';

const comparisonData = [
  {
    feature: "Median Delivery Time",
    yourService: "<300ms",
    competitor: "500-800ms"
  },
  {
    feature: "Uptime SLA",
    yourService: "99.99%",
    competitor: "99.9%"
  },
  {
    feature: "Global Regions",
    yourService: "12",
    competitor: "8"
  },
  {
    feature: "Email Types",
    yourService: "Transactional & Bulk",
    competitor: "Separate Services"
  },
  {
    feature: "Inbound Email API",
    yourService: "Included",
    competitor: "Additional Cost"
  },
  {
    feature: "SOC 2 Compliance",
    yourService: "Type II",
    competitor: "Type I"
  },
  {
    feature: "Pay-as-you-go Pricing",
    yourService: "Yes",
    competitor: "Minimum Commitments"
  },
  {
    feature: "Free Tier",
    yourService: "10,000 emails/month",
    competitor: "None"
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
            How We Compare to <span className="text-green-400">The Competition</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We built our platform to outperform legacy providers on every metric that matters.
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
                <th className="text-center py-4 px-6 font-semibold text-green-400">Our Service</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-400">Competitor</th>
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
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
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
          <p className="text-sm text-gray-500 mb-6">
            * Based on independent testing and publicly available information as of {new Date().toLocaleDateString()}
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-green-600/20">
            See Full Comparison
          </button>
        </motion.div> */}
        </Container>
      </div>
    </section>
  );
};