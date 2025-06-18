"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  // FiArrowLeft
} from "react-icons/fi";
import { useParams } from "next/navigation";
// Import your JSON data
import blogPosts from "@/data/blog-posts.json";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    type: string;
    text: string;
    author?: string;
  }[];
  author: {
    name: string;
    role: string;
    image: string;
  };
  relatedPosts: number[];
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  // Filter only valid BlogPosts (with relatedPosts)
  const validPosts = blogPosts.filter((p): p is BlogPost =>
    Array.isArray((p as unknown as BlogPost).relatedPosts)
  );
  // Find the current post
  const post = validPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Post not found
      </div>
    );
  }

  // Find related posts
  const relatedPosts = validPosts.filter((p) =>
    post.relatedPosts.includes(p.id)
  );

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navigation */}
      {/* <nav className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-[#4e3b7d] hover:text-[#3a2b5f]">
            <FiArrowLeft className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </nav> */}

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#4e3b7d] to-[#e0c9a4] text-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-white bg-opacity-20 text-[#4e3b7d] text-xs px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl opacity-90 mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center">
              <FiCalendar className="mr-2" /> {post.date}
            </span>
            <span className="flex items-center">
              <FiClock className="mr-2" /> {post.readTime}
            </span>
          </div>
        </div>
      </motion.header>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="mb-6 text-gray-700 leading-relaxed"
                    >
                      {section.text}
                    </motion.p>
                  );
                case "heading":
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="text-2xl font-bold mt-12 mb-6 text-[#4e3b7d]"
                    >
                      {section.text}
                    </motion.h2>
                  );
                case "quote":
                  return (
                    <motion.blockquote
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="border-l-4 border-[#e0c9a4] pl-6 my-8 italic text-gray-600"
                    >
                      <p className="text-xl">&quot;{section.text}&quot;</p>
                      {section.author && (
                        <footer className="mt-2 not-italic font-medium text-[#4e3b7d]">
                          — {section.author}
                        </footer>
                      )}
                    </motion.blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-[#4e3b7d]"
            >
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="h-48 relative">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-[#e0c9a4] bg-opacity-20 text-[#4e3b7d] text-xs px-2 py-1 rounded-full font-semibold">
                          {relatedPost.category}
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="flex items-center text-xs text-gray-500">
                          <FiClock className="mr-1" /> {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 hover:text-[#4e3b7d] transition mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <FiCalendar className="mr-1" /> {relatedPost.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#4e3b7d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Get More <span className="text-[#e0c9a4]">Insights</span>
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
            {/* <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 w-full rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#e0c9a4]"
            />
            <button className="px-6 py-3 bg-[#e0c9a4] text-[#4e3b7d] font-medium rounded-lg hover:bg-[#d4b98c] transition">
              Subscribe
            </button> */}
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
