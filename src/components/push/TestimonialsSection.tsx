"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Container } from '@/layout/Container';

const testimonials = [
  {
    quote: "After switching from Firebase, we saw a 40% increase in notification open rates. The delivery speed and timing features made all the difference.",
    author: "Emily Chen",
    role: "Product Manager at ShopApp",
    avatar: "/avatars/emily-chen.jpg"
  },
  {
    quote: "The precision targeting capabilities allowed us to reduce notification volume by 30% while increasing conversions. Our users are happier and more engaged.",
    author: "James Wilson",
    role: "CTO at TravelCo",
    avatar: "/avatars/james-wilson.jpg"
  },
  {
    quote: "As a security-focused company, we needed enterprise-grade infrastructure without compromising on performance. This platform delivered on both fronts.",
    author: "Sarah Johnson",
    role: "Security Lead at FinTech Inc",
    avatar: "/avatars/sarah-johnson.jpg"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
            Loved by <span className="text-purple-400">Developers</span> Worldwide
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join thousands of companies who trust our platform for their mission-critical notifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 relative"
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 w-6 h-6 text-purple-900/30" />
              <p className="text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-400/30"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-900/70 border border-gray-800 rounded-full">
            <div className="flex -space-x-2 mr-4">
              <img src="/avatars/user-1.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/user-2.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/user-3.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/user-4.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Join 8,000+ developers</p>
              <p className="text-xs text-gray-400">Sending 2B+ notifications monthly</p>
            </div>
          </div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};