// components/suggestions/SuggestionTestimonials.tsx
"use client";
import { motion } from 'framer-motion';

const testimonialData = [
  {
    quote: "Suggested a small API improvement that was implemented within 2 weeks! The team really listens.",
    name: "Kwame Osei",
    title: "Developer",
    company: "TechSolutions GH",
    stats: [
      { label: "Suggestion", value: "API Improvement" },
      { label: "Implemented", value: "2 Weeks" },
    ],
  },
  {
    quote: "My UI suggestion was taken onboard and now the dashboard is much more intuitive for our team.",
    name: "Ama Mensah",
    title: "Product Manager",
    company: "PayEasy Africa",
  },
  {
    quote: "Proposed a new feature that's now being used by hundreds of businesses. Feels great to contribute!",
    name: "Esi Nyarko",
    title: "CTO",
    company: "QuickPay",
    stats: [
      { label: "Suggestion", value: "New Feature" },
      { label: "Users", value: "500+" },
    ],
  },
];

export const SuggestionTestimonials = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Suggestions <span className="text-purple-400">That Made Impact</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          See how community suggestions have helped shape Sendexa&apos;s development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-400/30 transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
            <div className="mt-6">
              <h4 className="font-bold text-purple-300">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">
                {testimonial.title}, {testimonial.company}
              </p>
              {testimonial.stats && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-4">
                    {testimonial.stats.map((stat, i) => (
                      <div key={i} className="bg-purple-900/20 text-purple-300 px-3 py-1 rounded-lg text-sm">
                        {stat.label}: <span className="font-bold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};