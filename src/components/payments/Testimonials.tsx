"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/layout/Container";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  stats?: {
    label: string;
    value: string;
  }[];
};

export const Testimonials = ({
  testimonials,
  theme = "blue",
}: {
  testimonials: Testimonial[];
  theme?: "blue" | "green" | "indigo" | "yellow";
}) => {
  const themeClasses = {
    blue: {
      text: "text-blue-400",
      border: "border-blue-400/30",
      bg: "bg-blue-900/20",
    },
    green: {
      text: "text-green-400",
      border: "border-green-400/30",
      bg: "bg-green-900/20",
    },
    indigo: {
      text: "text-indigo-400",
      border: "border-indigo-400/30",
      bg: "bg-indigo-900/20",
    },
    yellow: {
      text: "text-yellow-400",
      border: "border-yellow-400/30",
      bg: "bg-yellow-900/20",
    },
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto ">
        <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by{" "}
            <span className={themeClasses[theme].text}>Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of businesses processing billions in payments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-900/50 p-6 rounded-xl border ${themeClasses[theme].border} relative overflow-hidden`}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-blue-900/10 -z-10"></div>
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-400 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
              {testimonial.stats && (
                <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-2 gap-4">
                  {testimonial.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        </Container>
      </div>
    </section>
  );
};
