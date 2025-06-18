// app/about/team/page.tsx
import { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import ExecutiveTeam from "@/components/team/ExecutiveTeam";
import ManagementTeam from "@/components/team/ManagementTeam";
import BroaderTeam from "@/components/team/BroaderTeam";

export const metadata: Metadata = {
  title: "Our Team - Sendexa",
  description:
    "Meet the leadership, management, and dedicated team building Africa's premier communication platform.",
  openGraph: {
    title: "Our Team - Sendexa",
    description:
      "Get to know the executive team, management, and the individuals behind Africa's most innovative communication solutions.",
    images: [
      {
        url: "/images/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sendexa Team",
      },
    ],
  },
};

const executives = [
  {
    name: "Collins Joe",
    title: "Co-Founder & CEO",
    bio: "Communications engineer with 15+ years of experience building telecom and messaging systems in Africa. Former engineering lead at a top-tier telco.",
    image: "/images/team/joe.jpeg",
  },
  {
    name: "Ethel Akorfa Agama",
    title: "Executive Director, Gender Equality & Social Impact",
    bio: "Drives Sendexa's mission to build inclusive, equitable solutions. Leads social partnerships and aligns impact with UN SDGs.",
    image: "/images/team/akorfa.jpeg",
  },
  {
    name: "Valentine Kofi Vidzro",
    title: "Co-Founder & Strategy Director",
    bio: "Co-founder with a strong background in strategic growth and business development across emerging markets.",
    image: "/images/team/Profile.svg",
  },
];

const management = [
  {
    name: "Kwame Mensah",
    title: "Head of Operations",
    bio: "Seasoned operations lead with a focus on efficiency and scalability.",
    image: "/images/team/placeholder-male.jpg",
  },
  {
    name: "Aisha Khan",
    title: "Head of Customer Success",
    bio: "Passionate about empowering users and ensuring their success with Sendexa.",
    image: "/images/team/placeholder-female.jpg",
  },
  {
    name: "David Chen",
    title: "Lead Software Architect",
    bio: "Architecting robust and scalable communication infrastructure.",
    image: "/images/team/placeholder-male.jpg",
  },
  {
    name: "Fatou Bayo",
    title: "Head of Marketing",
    bio: "Driving brand awareness and user engagement across Africa.",
    image: "/images/team/placeholder.jpg",
  },
];

const teamMembers = [
  {
    name: "Regina Mensimah",
    title: "Compliance Officer",
    image: "/images/team/placeholder-female.jpg",
  },
  {
    name: "Nana Abena Owusu",
    title: "Data Protection Officer",
    image: "/images/team/placeholder-female.jpg",
  },
  {
    name: "Emmanuel Owusu",
    title: "Legal Advisor",
    image: "/images/team/placeholder-male.jpg",
  },
  {
    name: "Irene Ndlovu",
    title: "Sales Director",
    image: "/images/team/placeholder-female.jpg",
  },
  {
    name: "Team Member",
    title: "Customer Support Lead",
    image: "/images/team/placeholder-male.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <div className="bg-white text-gray-900">
      <TeamHero />
      <ExecutiveTeam executives={executives} />
      <ManagementTeam management={management} />
      <BroaderTeam teamMembers={teamMembers} />
    </div>
  );
}
