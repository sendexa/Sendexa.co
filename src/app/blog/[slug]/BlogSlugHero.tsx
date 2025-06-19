"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiClock } from "react-icons/fi";
import { Container } from "@/layout/Container";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogSlugHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-yellow-400/20 text-yellow-400 text-xs px-4 py-1 rounded-full font-semibold uppercase tracking-wide mb-6"
          >
            {post.category}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-yellow-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-yellow-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
