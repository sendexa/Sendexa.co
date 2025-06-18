"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-primary-300 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
          <p className="text-gray-700">{job.description}</p>
        </div>
        <Link
          // href={`/careers/${job.id}`}
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-lg font-medium transition-colors whitespace-nowrap"
        >
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}