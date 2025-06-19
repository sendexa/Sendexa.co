"use client";
import BlogHero from "@/components/blog/BlogHero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  //  FiSearch
} from "react-icons/fi";

import blogPosts from "@/data/blog-posts.json";


// const blogPosts = [
//   {
//     id: 1,
//     title: "From Being Doubted to Building Sendexa: My Story So Far",
//     excerpt:
//       "On my 21st birthday, I reflect on the struggles, betrayals, and sleepless nights that shaped me — and how I turned pain into purpose by building a tech empire from Volta.",
//     date: "June 28, 2025",
//     readTime: "9 min read",
//     category: "Founder Journey",
//     image: "/blog/Profile.jpg",
//     slug: "sendexa-birthday-story",
//   },
//   {
//     id: 2,
//     title: "The Future of Fintech in Africa: Trends to Watch",
//     excerpt:
//       "Exploring how blockchain and mobile money are transforming financial services across the continent...",
//     date: "June 15, 2023",
//     readTime: "8 min read",
//     category: "Fintech",
//     image: "/blog/fintech-future.jpg",
//     slug: "future-of-fintech-in-africa",
//   },
// ];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Blog Hero Section */}
      <BlogHero />

      {/* Blog Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-[#4e3b7d]">
              Featured Article
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <Image
                    src="/blog/Profile.jpg"
                    alt="My Founder Journey"
                    width={400}
                    height={300}
                    className="h-90 w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#e0c9a4] bg-opacity-20 text-[#4e3b7d] text-xs px-3 py-1 rounded-full font-semibold">
                      Founder Journey
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-1" /> June 28, 2025
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="flex items-center text-sm text-gray-500">
                      <FiClock className="mr-1" /> 9 min read
                    </span>
                  </div>
                  <Link href={`/blog/sendexa-birthday-story`}>
                    <h3 className="text-2xl font-bold text-gray-800 hover:text-[#4e3b7d] transition mb-3">
                      From Being Doubted to Building Sendexa: My Story So Far
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    On my 21st birthday, I reflect on the struggles, betrayals,
                    and sleepless nights that shaped me — and how I turned pain
                    into purpose by building a tech empire from Volta.
                  </p>
                  <Link
                    href={`/blog/sendexa-birthday-story`}
                    className="inline-flex items-center text-[#4e3b7d] font-medium hover:underline"
                  >
                    Read full article
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 text-[#4e3b7d]">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#e0c9a4] bg-opacity-20 text-[#4e3b7d] text-xs px-2 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="flex items-center text-xs text-gray-500">
                        <FiClock className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-800 hover:text-[#4e3b7d] transition mb-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center">
                        <FiCalendar className="mr-1" /> {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm text-[#4e3b7d] font-medium hover:underline"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#4e3b7d] text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#4e3b7d] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Get <span className="text-[#e0c9a4]">Insights</span> Directly
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Subscribe to my newsletter for exclusive content on African tech,
            entrepreneurship, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full rounded-lg border border-white/30 bg-transparent text-white placeholder-white/70 
             focus:outline-none focus:ring-2 focus:ring-[#e0c9a4] focus:border-[#e0c9a4] transition"
            />
            <button className="px-6 py-3 bg-[#e0c9a4] text-[#4e3b7d] font-medium rounded-lg hover:bg-[#d4b98c] transition">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
