"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";
import Image from "next/image";

import {
  FaFacebook,
  FaWhatsapp,
  // FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ExaFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "SMS Messaging", href: "/products/sms" },
        { name: "Email Makerting", href: "/products/email" },
        { name: "Secure OTP API", href: "/products/otp" },
        { name: "Payments & Wallets", href: "/products/payments" },
        { name: "WhatsApp Business API", href: "/products/whatsapp" },
      ],
    },

    {
      title: "Company",
      links: [
        { name: "About Us", href: "https://discover.sendexa.co/about" },
        { name: "Our Blog", href: "https://blog.sendexa.co/" },
        { name: "Contact Us", href: "/contact" },
        { name: "Sendexa Cares", href: "https://cares.sendexa.co/" },
        { name: "Leadership & Team", href: "https://discover.sendexa.co/team" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Connect to APIs", href: "https://developers.sendexa.co/" },
        { name: "Our Partners", href: "https://discover.sendexa.co/partners" },
        { name: "FAQs & Help", href: "/faqs" },
        { name: "Tutorial Videos", href: "https://youtube.com/sendexa" },
        { name: "System Status", href: "/status" },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Terms of Service",
          href: "https://discover.sendexa.co/legal/terms",
        },
        {
          name: "Privacy Policy",
          href: "https://discover.sendexa.co/legal/privacy",
        },
        {
          name: "Cookie Policy",
          href: "https://discover.sendexa.co/legal/cookies",
        },
        {
          name: "Acceptable Use",
          href: "https://discover.sendexa.co/legal/acceptable-use",
        },
        {
          name: "Licenses",
          href: "https://discover.sendexa.co/legal/licenses",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://facebook.com/SendexaAfrica",
    },
    { name: "Twitter", icon: FaXTwitter, href: "https://x.com/sendexaHQ" },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      href: "https://linkedin.com/company/sendexa",
    },
    { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/sendexa" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/+233555539152" },

    // { name: "GitHub", icon: FaGithub, href: "https://github.com/sendexa" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <Container>
        <div className="pt-8 pb-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-16">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <Link href="/" className="flex items-center mb-2">
                {" "}
                <Image
                  src="/logos/Site Logo.png"
                  width={170}
                  height={125}
                  alt="Sendexa Logo"
                />
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-[#1a3cb8] to-pink-500 bg-clip-text text-transparent">
                  Sendexa
                </span> */}
              </Link>

              <motion.p
                className="text-gray-400 mb-8 max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Africa&apos;s all-in-one messaging platform. Send SMS, email,
                and voice messages — reliably, securely, and at scale. */}
                Ghana&apos;s all-in-one platform for messaging and payments —
                enabling businesses to send SMS, email, voice, and verification
                messages, and accept payments seamlessly and securely.
              </motion.p>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 mt-8"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 shadow-sm hover:shadow-blue-500/20 transition-all"
                  >
                    <social.icon className="h-5 w-5 text-gray-300 hover:text-[#1a3cb8] transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Footer Links */}

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 col-span-1 lg:col-span-4">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-[#1a3cb8] transition-colors flex items-center group"
                        >
                          <motion.span
                            whileHover={{ x: 5, color: "#1a3cb8" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-flex items-center gap-1"
                          >
                            {link.name}
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              whileHover={{ opacity: 1, width: "0.5rem" }}
                              className="block h-px bg-blue-text-[#1a3cb8]"
                            />
                          </motion.span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 my-6"
          />

          {/* Final Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
              aria-label={`Copyright ${currentYear} Sendexa, Inc.`}
            >
              &copy; {currentYear}{" "}
              <span className="font-medium text-yellow-600 transition-colors duration-300 underline-offset-2">
                Sendexa, LLC.
              </span>
              . All rights reserved.
            </motion.p>

            {/* Built with Love in Ghana */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 transition-all group"
            >
              <p className="transition-all duration-300">
                Made with <span className="text-red-500">❤️</span> in{" "}
                <span className="font-medium text-yellow-600 group-hover:text-yellow-500 transition-colors duration-300">
                  Volta Region, Ghana
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
