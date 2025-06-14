"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Mensah",
    company: "FinTech Solutions",
    avatar: "/images/testimonials/01.jpg",
    quote: "Sendexa's API integration was seamless and their delivery rates are exceptional. Our customer engagement has improved significantly."
  },
  {
    name: "Ama Asante",
    company: "ShopEasy",
    avatar: "/images/testimonials/02.jpg",
    quote: "The real-time analytics dashboard gives us incredible visibility into our communication performance. Highly recommended!"
  },
  {
    name: "Yaw Boateng",
    company: "HealthPlus",
    avatar: "/images/testimonials/03.jpg",
    quote: "We switched to Sendexa from another provider and saw immediate improvements in our SMS delivery times."
  },
  {
    name: "Esi Nyarko",
    company: "PayPlus",
    avatar: "/images/testimonials/04.jpg",
    quote: "The combination of payments and messaging in one platform has streamlined our operations tremendously."
  },
  {
    name: "Kofi Ansah",
    company: "LogiGh",
    avatar: "/images/testimonials/05.jpg",
    quote: "Sendexa's reliability has been game-changing for our delivery notifications system."
  }
];

export const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    if (!isDesktop) {
      return [testimonials[activeIndex % testimonials.length]];
    }
    
    const startIndex = activeIndex * 3;
    return [
      testimonials[startIndex % testimonials.length],
      testimonials[(startIndex + 1) % testimonials.length],
      testimonials[(startIndex + 2) % testimonials.length]
    ].filter(Boolean);
  };

  const visibleTestimonials = getVisibleTestimonials();
  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848] font-extrabold">Customers Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses of all sizes across Africa
          </p>
        </motion.div>

        <div className="relative">
          {isDesktop && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#00c2c8]/80 to-[#d4b848]/80 shadow-lg flex items-center justify-center text-[#111D4F] hover:text-white hover:bg-gradient-to-br hover:from-[#00c2c8] hover:to-[#d4b848] transition-all border-2 border-[#00c2c8]"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={28} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#00c2c8]/80 to-[#d4b848]/80 shadow-lg flex items-center justify-center text-[#111D4F] hover:text-white hover:bg-gradient-to-br hover:from-[#00c2c8] hover:to-[#d4b848] transition-all border-2 border-[#00c2c8]"
                aria-label="Next testimonials"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div className="overflow-visible">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {visibleTestimonials.map((t, idx) => (
                  <motion.div
                    key={`${activeIndex}-${idx}`}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="relative bg-gray-900 backdrop-blur-lg p-10 rounded-3xl border-2 border-[#00c2c8]/30 hover:border-[#00c2c8] shadow-2xl text-center flex flex-col items-center transition-all duration-300 h-full group"
                  >
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00c2c8] to-[#d4b848] rounded-t-3xl"></div>
                    <div className="relative w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#00c2c8] shadow-xl group-hover:shadow-[0_0_32px_#a6953f99] transition-all">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="text-xl italic text-gray-100 font-semibold mb-8 relative">
                      <span className="absolute -left-6 -top-2 text-4xl text-[#00c2c8]">“</span>
                      {t.quote}
                      <span className="absolute -right-6 -bottom-2 text-4xl text-[#00c2c8]">”</span>
                    </blockquote>
                    <div className="mt-auto">
                      <div className="text-gray-100 font-bold text-lg">{t.name}</div>
                      <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c2c8] to-[#d4b848] font-semibold text-sm">{t.company}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: isDesktop ? totalSlides : testimonials.length }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? "right" : "left");
                  setActiveIndex(idx);
                }}
                className={`w-4 h-4 rounded-full border-2 border-[#00c2c8] transition-all duration-300 flex items-center justify-center ${activeIndex === idx ? "bg-gradient-to-r from-[#00c2c8] to-[#d4b848] shadow-lg scale-110" : "bg-gray-900"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};