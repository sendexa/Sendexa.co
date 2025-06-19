"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";
import Image from "next/image";
import { Container } from "./Container";

import {
  MessageSquareText,
  LockKeyhole,
  MailPlus,
  CodeXml,
  Users,
  Server,
  FileText,
  HelpCircle,
  Briefcase,
  MailOpen,
  AlignRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

export const navItems = [
  {
    name: "Products",
    href: "#",
    subLinks: [
      {
        name: "SMS API",
        href: "/products/sms",
        description:
          "Deliver mission-critical SMS with local routing and real-time analytics.",
        icon: <MessageSquareText className="w-5 h-5" />,
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        cta: false,
      },
      {
        name: "OTP API",
        href: "/products/otp",
        description:
          "Protect logins, payments, and signups with instant OTP via SMS or Email.",
        icon: <LockKeyhole className="w-5 h-5" />,
        color:
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
        cta: false,
      },
      {
        name: "Email API",
        href: "/products/email",
        description:
          "Send high-inbox-rate transactional and bulk emails at scale.",
        icon: <MailPlus className="w-5 h-5" />,
        color:
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        cta: false,
      },
      {
        name: "SMPP Gateway",
        href: "/products/smpp",
        description:
          "Integrate directly via SMPP to access our carrier-grade SMS routes.",
        icon: <Server className="w-5 h-5" />,
        color:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        cta: true,
      },
    ],
  },
  {
    name: "Developers",
    href: "https://developers.sendexa.co/",
  },

  {
    name: "Services",
    href: "#",
    subLinks: [
      {
        name: "Custom Software & Portals",
        href: "/services/software-development/",
        description:
          "Tailored comms systems for schools, fintech, and logistics.",
        icon: <CodeXml className="w-5 h-5" />,
        color:
          "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
        cta: false,
      },
      {
        name: "Reseller Services",
        href: "/services/reseller/",
        description: "White-label our SMS, Email & OTP to grow your business.",
        icon: <Users className="w-5 h-5" />,
        color:
          "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
        cta: false,
      },
    ],
  },

  {
    name: "Pricing",
    href: "/pricing",
  },

  {
    name: "Resources",
    href: "#",
    subLinks: [
      {
        name: "Blog & Insights",
        href: "/blog",
        description: "Tips, product news, and industry insights.",
        icon: <FileText className="w-5 h-5" />,
        color:
          "bg-orange-50 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
        cta: false,
      },
      {
        name: "FAQs & Help Center",
        href: "/faqs",
        description: "Browse frequently asked questions and answers.",
        icon: <HelpCircle className="w-5 h-5" />,
        color:
          "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
        cta: false,
      },
      {
        name: "Careers",
        href: "/careers",
        description: "Join us in building Africa’s comms infrastructure.",
        icon: <Briefcase className="w-5 h-5" />,
        color:
          "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
        cta: true,
      },
      {
        name: "Contact Us",
        href: "/contact",
        description: "Talk to our team — we’re here to help.",
        icon: <MailOpen className="w-5 h-5" />,
        color:
          "bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
        cta: false,
      },
    ],
  },
];

export function ExaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenSubMenu(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/80 dark:border-gray-800/80 shadow-sm"
          : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeAllMenus}
          >
            <Image
              src="/logos/exaweb.png"
              width={170}
              height={125}
              alt="Sendexa Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    dropdownRefs.current[item.name] = el;
                  }}
                  onMouseEnter={() => setOpenSubMenu(item.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  {/* The rest of the navigation item rendering goes here */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-[#a08721] dark:text-teal-400 font-semibold"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.subLinks && (
                        <ChevronDown
                          className={`ml-1 w-4 h-4 inline-block transition-transform ${
                            openSubMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Desktop Mega Menu */}
                  {item.subLinks && (
                    <AnimatePresence>
                      {openSubMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          }}
                          className="absolute left-0 mt-1 w-[36rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-gray-200/80 dark:border-gray-700/80"
                        >
                          <div className="grid grid-cols-2 gap-4 px-6">
                            {item.subLinks.map((subLink) => (
                              <motion.div
                                key={subLink.name}
                                whileHover={{
                                  x: 5,
                                  transition: {
                                    type: "spring",
                                    stiffness: 300,
                                  },
                                }}
                              >
                                <Link
                                  href={subLink.href}
                                  className={`block p-3 rounded-lg transition-all ${
                                    subLink.cta
                                      ? // ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                                        "bg-gradient-to-r from-[#a08721] to-[#16335c] text-white hover:from-[#a08721]/90 hover:to-purple-500"
                                      : pathname === subLink.href
                                        ? "bg-blue-50 dark:bg-gray-800"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-start">
                                    {/* Icon container with conditional background */}
                                    <div
                                      className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                        subLink.cta
                                          ? "bg-white/20"
                                          : subLink.color
                                      }`}
                                    >
                                      {subLink.icon}
                                    </div>

                                    {/* Text content: title and description */}
                                    <div>
                                      <div
                                        className={`font-medium ${
                                          subLink.cta
                                            ? "text-white"
                                            : "text-gray-900 dark:text-white"
                                        }`}
                                      >
                                        {subLink.name}
                                      </div>
                                      <div
                                        className={`text-xs mt-1 ${
                                          subLink.cta
                                            ? "text-white/80"
                                            : "text-gray-500 dark:text-gray-400"
                                        }`}
                                      >
                                        {subLink.description}
                                      </div>
                                    </div>

                                    {/* Optional CTA arrow icon aligned to the right */}
                                    {subLink.cta && (
                                      <ArrowRight className="ml-auto w-4 h-4 opacity-80" />
                                    )}
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ) : null
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() =>
                  (window.location.href = "https://app.sendexa.co/login")
                }
              >
                <span>Login</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                className="gap-2"
                onClick={() => (window.location.href = "https://app.sendexa.co/signup")}
              >
                <span>Sign Up</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignRight className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeAllMenus}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-10/11 max-w-md bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl z-50 border-l border-gray-200/80 dark:border-gray-800/80"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 h-20">
                {/* Sendexa Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeAllMenus}
                >
                  <Image
                    src="/logos/exaweb.png"
                    width={170}
                    height={125}
                    alt="Sendexa Logo"
                  />
                </Link>

                <button
                  onClick={closeAllMenus}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-[calc(100vh-5rem)] overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link
                          href={item.href}
                          className={`text-base font-medium ${
                            pathname === item.href
                              ? "text-[#a08721] dark:text-teal-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                        {item.subLinks && (
                          <button
                            onClick={() => toggleSubMenu(item.name)}
                            className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                            aria-expanded={openSubMenu === item.name}
                          >
                            {openSubMenu === item.name ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu - Updated to match working example */}
                      {item.subLinks && (
                        <AnimatePresence>
                          {openSubMenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                              <div className="space-y-2 py-2">
                                {item.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    className={`block p-3 rounded-lg transition-all ${
                                      subLink.cta
                                        ? "bg-gradient-to-r from-[#a08721] to-[#16335c] text-white"
                                        : pathname === subLink.href
                                          ? "bg-blue-50 dark:bg-gray-800"
                                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                    onClick={closeAllMenus}
                                  >
                                    <div className="flex items-start">
                                      <div
                                        className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                          subLink.cta
                                            ? "bg-white/20"
                                            : subLink.color
                                        }`}
                                      >
                                        {subLink.icon}
                                      </div>
                                      <div>
                                        <div
                                          className={`font-medium ${
                                            subLink.cta
                                              ? "text-white"
                                              : "text-gray-900 dark:text-white"
                                          }`}
                                        >
                                          {subLink.name}
                                        </div>
                                        <div
                                          className={`text-xs mt-1 ${
                                            subLink.cta
                                              ? "text-white/80"
                                              : "text-gray-500 dark:text-gray-400"
                                          }`}
                                        >
                                          {subLink.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 p-4 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "https://app.sendexa.co/login";
                      }}
                    >
                      <span>Login</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="primary"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "https://app.sendexa.co/signup";
                      }}
                    >
                      <span>Sign Up</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
