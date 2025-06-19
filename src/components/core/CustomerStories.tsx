"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import Image from "next/image";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Award, Globe } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Asare",
    role: "CTO, Accra FinTech",
    avatar: "/avatars/kwame.jpg",
    quote: "Sendexa's direct MTN routes improved our OTP delivery from 82% to 99%",
    logo: "/logos/accra-fintech.svg",
    rating: 5,
    location: "Accra, Ghana"
  },
  {
    name: "Ngozi Eze",
    role: "Product Lead, Lagos",
    avatar: "/avatars/ngozi.jpg",
    quote: "Finally an API that understands African number formatting quirks",
    logo: "/logos/lagos-tech.svg",
    rating: 4,
    location: "Lagos, Nigeria"
  },
  {
    name: "Amina Diallo",
    role: "CEO, Dakar Logistics",
    avatar: "/avatars/amina.jpg",
    quote: "24/7 Accra-based support makes all the difference for our business",
    logo: "/logos/dakar-logistics.svg",
    rating: 5,
    location: "Dakar, Senegal"
  },
];

export default function CustomerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    // <section className="py-20 bg-white">
      <section className="py-15 bg-gradient-to-b from-pink-50 via-pink-100 to-white">

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#fcd116]/10 text-[#111e4f] px-4 py-1 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111e4f] mb-3">
            Loved by Businesses Across Africa
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto">
            Join hundreds of companies transforming their communications with Sendexa
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex"
              animate={{
                x: `-${currentIndex * 100 / 3}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                // <div key={testimonial.name} className="flex-shrink-0 w-full px-4">
                <div key={testimonial.name} className="flex-shrink-0 w-full md:w-1/3 px-4">

                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="flex gap-4 mb-6">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-[#111e4f]">{testimonial.name}</h4>
                            <p className="text-sm text-[#6b7280]">{testimonial.role}</p>
                          </div>
                          <div className="flex items-center gap-1 text-[#fcd116]">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-[#6b7280]">
                          <Globe className="w-4 h-4" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-6">
                      <Quote className="absolute left-0 top-0 w-5 h-5 text-[#fcd116]" />
                      <p className="text-[#4b5563] italic">{testimonial.quote}</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                      <Image 
                        src={testimonial.logo} 
                        alt="" 
                        width={120} 
                        height={40}
                        className="h-8 w-auto opacity-80"
                      />
                      <div className="text-xs text-[#6b7280] flex items-center gap-1">
                        <span>Verified customer</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fcd116" stroke="#fcd116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#111e4f]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#111e4f]" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index ? "bg-[#111e4f] w-4" : "bg-gray-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}