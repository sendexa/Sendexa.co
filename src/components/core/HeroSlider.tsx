"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Inbox,
  Server,
  LockKeyhole,
  MailPlus,
  MessageSquareText,
} from "lucide-react";

import { motion } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const swiperRef = useRef(null);

  const platformSlides = [
    {
      title: "Carrier-Grade SMS API Built for Ghana",
      description:
        "Deliver mission-critical messages with intelligent local routing, high throughput, and real-time insights. Built for scale and speed.",
      image: "/images/carousel/messaging.jpg",
      stats: [
        {
          icon: <MessageSquareText className="h-5 w-5 text-yellow-400" />,
          text: "99% Delivery Accuracy — Even at Peak Hours",
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-yellow-400" />,
          text: "10M+ Messages Delivered Monthly",
        },
      ],
      ctaPrimary: "Explore SMS API",
      ctaPrimaryLink: "https://app.sendexa.co/",
      ctaSecondary: "Why Our SMS Is Better",
      ctaSecondaryLink: "/products/sms",
      accentColor: "from-yellow-600/20 via-yellow-700/30 to-yellow-800/40",
    },
    {
      title: "OTP Delivery You Can Bet Your Security On",
      description:
        "Protect your apps with fast and secure OTP delivery via SMS and Email. Built for fintechs, banks, and large platforms.",
      image: "/images/carousel/61436.jpg",
      stats: [
        {
          icon: <LockKeyhole className="h-5 w-5 text-indigo-400" />,
          text: "99.9% OTP Success Rate — Fast & Secure",
        },
        {
          icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
          text: "Full Encryption + Delivery Audit Trails",
        },
      ],
      ctaPrimary: "Get OTP API",
      ctaPrimaryLink: "https://app.sendexa.co/",
      ctaSecondary: "OTP Use Cases",
      ctaSecondaryLink: "/products/otp",
      accentColor: "from-indigo-600/20 via-indigo-700/30 to-indigo-800/40",
    },
    {
      title: "Inbox-First Email API for Serious Senders",
      description:
        "Send transactional and marketing emails that land in the inbox. Optimized for speed, reputation, and smart routing.",
      image: "/images/carousel/118976.jpg",
      stats: [
        {
          icon: <MailPlus className="h-5 w-5 text-green-400" />,
          text: "5M+ Emails Sent Every Month — Inbox Verified",
        },
        {
          icon: <Inbox className="h-5 w-5 text-green-400" />,
          text: "95% Inbox Placement — SPF, DKIM, DMARC Ready",
        },
      ],
      ctaPrimary: "Start Email API",
      ctaPrimaryLink: "https://app.sendexa.co/",
      ctaSecondary: "Explore Email Features",
      ctaSecondaryLink: "/products/email",
      accentColor: "from-green-600/20 via-green-700/30 to-green-800/40",
    },
    {
      title: "SMPP Gateway for Telecom-Grade SMS Access",
      description:
        "Connect directly to Sendexa’s SMS infrastructure via SMPP for high-volume, low-latency delivery. Ideal for aggregators and enterprises.",
      image: "/images/carousel/devs.svg",
      stats: [
        {
          icon: <Server className="h-5 w-5 text-blue-400" />,
          text: "Direct Bind to Tier-1 Routes Across Ghana",
        },
        {
          icon: <TrendingUp className="h-5 w-5 text-blue-400" />,
          text: "Built for 100K+ TPS and Zero Delays",
        },
      ],
      ctaPrimary: "Request SMPP Access",
      ctaPrimaryLink: "https://app.sendexa.co/",
      ctaSecondary: "What Is SMPP?",
      ctaSecondaryLink: "/products/smpp",
      accentColor: "from-blue-600/20 via-blue-700/30 to-blue-800/40",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="hero-swiper"
        onSlideChange={() => {
          // Trigger animations on slide change
          const container = document.querySelector(
            ".swiper-slide-active .motion-container"
          );
          if (container) {
            container.classList.remove("animate-fadeIn");
            void (container as HTMLElement).offsetWidth; // Trigger reflow
            container.classList.add("animate-fadeIn");
          }
        }}
      >
        {platformSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[85vh] min-h-[500px] md:h-[85vh] md:min-h-[700px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
             
              <div className="absolute inset-0 bg-gray-900/70"></div>
              <div className="absolute inset-0 flex items-end pb-16 md:items-center md:pb-0">
                <div className="container px-4 mx-auto">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="motion-container max-w-2xl md:ml-10 lg:ml-20 animate-fadeIn"
                  >
                    <motion.div variants={itemVariants}>
                      <div className="relative">
                        <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10"></div>
                        <div className="absolute -left-2 -top-2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/10"></div>
                        <h1 className="text-3xl font-bold mb-6 text-white leading-snug relative z-10 sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-tight">
                          {slide.title}
                        </h1>
                      </div>
                    </motion.div>

                    <motion.p
                      variants={itemVariants}
                      className="text-gray-200 mb-6 text-base sm:text-lg md:text-xl sm:max-w-md md:max-w-2xl xs:block leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      variants={containerVariants}
                      className="flex flex-col gap-2 mb-6 sm:flex-row sm:flex-wrap sm:gap-3"
                    >
                      {slide.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          variants={statVariants}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-3 py-2 rounded-lg border border-white/10 w-fit transition-all hover:bg-white/20 hover:scale-[1.02] sm:px-4 sm:py-3 sm:rounded-xl sm:gap-3"
                        >
                          <span className="text-primary-300">{stat.icon}</span>
                          <span className="font-medium text-white text-sm sm:text-base">
                            {stat.text}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                    >
                      <Link
                        href={slide.ctaPrimaryLink}
                        className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:to-primary-700 transition-all duration-300 text-white text-base font-semibold overflow-hidden sm:px-8 sm:py-4 sm:rounded-xl sm:text-lg"
                      >
                        <span className="relative z-10">
                          {slide.ctaPrimary}
                        </span>
                        <span className="absolute right-3 z-10 transition-all duration-300 group-hover:translate-x-1 sm:right-4">
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                      <Link
                        href={slide.ctaSecondaryLink}
                        className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-base font-semibold overflow-hidden sm:px-8 sm:py-4 sm:rounded-xl sm:text-lg"
                      >
                        <span className="relative z-10">
                          {slide.ctaSecondary}
                        </span>
                        <span className="absolute left-3 z-10 transition-all duration-300 group-hover:-translate-x-1 sm:left-4">
                          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Glass morphism decorative elements - Mobile */}
              <div className="absolute bottom-10 right-4 h-20 w-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 animate-float sm:hidden"></div>
              <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 rotate-45 animate-float-delay sm:hidden"></div>

              {/* Glass morphism decorative elements - Desktop */}
              <div className="absolute bottom-20 right-10 hidden sm:block">
                <div className="h-32 w-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 animate-float md:h-40 md:w-40"></div>
              </div>
              <div className="absolute top-1/4 left-1/3 hidden sm:block">
                <div className="h-20 w-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 rotate-45 animate-float-delay md:h-24 md:w-24"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          className="swiper-button-prev !left-4 !right-auto !hidden sm:!flex !h-12 !w-12 !rounded-full !backdrop-blur-md !border !border-white/20 !bg-white/5 hover:!bg-white/10 transition-all sm:!h-14 sm:!w-14"
          aria-label="Previous slide"
        >
          <ArrowLeft className="!h-5 !w-5 sm:!h-6 sm:!w-6" />
        </button>
        <button
          className="swiper-button-next !right-4 !left-auto !hidden sm:!flex !h-12 !w-12 !rounded-full !backdrop-blur-md !border !border-white/20 !bg-white/5 hover:!bg-white/10 transition-all sm:!h-14 sm:!w-14"
          aria-label="Next slide"
        >
          <ArrowRight className="!h-5 !w-5 sm:!h-6 sm:!w-6" />
        </button>
      </Swiper>

      <div className="swiper-pagination !relative !bottom-4 sm:!bottom-6 !flex items-center justify-center gap-1 sm:gap-2"></div>

      <style jsx global>{`
        .hero-swiper {
          --swiper-navigation-size: 24px;
          --swiper-pagination-bullet-size: 10px;
          --swiper-pagination-bullet-inactive-color: white;
          --swiper-pagination-bullet-inactive-opacity: 0.4;
          --swiper-pagination-color: theme(colors.amber.500);
          --swiper-pagination-bullet-horizontal-gap: 4px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          display: none;
          transition: all 0.3s ease;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: none;
        }

        .swiper-pagination {
          position: absolute;
          text-align: center;
          padding-bottom: 8px;
        }

        .swiper-pagination-bullet {
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination-bullet-active {
          transform: scale(1.2);
          box-shadow: 0 0 8px rgba(251, 191, 36, 0.7);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite 1s;
        }

        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .hero-swiper {
            padding-bottom: 30px;
          }
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .swiper-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
