"use client";
import { useState } from "react";
import JobCard from "./JobCard";
import { Container } from "@/layout/Container";

const departments = [
  { id: "all", label: "All Departments" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
  { id: "operations", label: "Operations" },
];

const jobs = [
  {
    id: "1",
    title: "Senior Backend Engineer",
    department: "engineering",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Build and scale our core messaging infrastructure",
  },
  {
    id: "2",
    title: "Product Designer",
    department: "product",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Design intuitive experiences for our communication products",
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "engineering",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Maintain and improve our cloud infrastructure",
  },
  {
    id: "4",
    title: "Growth Marketing Manager",
    department: "marketing",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Drive customer acquisition and retention",
  },
  {
    id: "5",
    title: "Enterprise Sales Executive",
    department: "sales",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Build relationships with large enterprise clients",
  },
  {
    id: "6",
    title: "Customer Success Manager",
    department: "operations",
    type: "Full-time",
    location: "Remote (Africa)",
    description: "Ensure our customers achieve their goals",
  },
];

export default function JobListings() {
  const [activeDepartment, setActiveDepartment] = useState("all");

  const filteredJobs = activeDepartment === "all" 
    ? jobs 
    : jobs.filter(job => job.department === activeDepartment);

  return (
    <Container>
    <section id="open-positions" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
            Open Positions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team and help build Africa&apos;s communication infrastructure
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeDepartment === dept.id
                  ? "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
        

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
    </Container>
  );
}