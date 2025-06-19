import { Container } from "@/layout/Container";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface BroaderTeamProps {
  teamMembers: TeamMember[];
}

export default function BroaderTeam({ teamMembers }: BroaderTeamProps) {
  return (
    <section className="py-15 bg-gray-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-gray-900">
            Meet the <span className="text-teal-500">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our dedicated individuals working together to achieve our mission
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg hover:border-teal-500 transition-all duration-300 ease-in-out group"
            >
              <div className="relative aspect-[1.2/1] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-teal-500 text-sm mb-3">{member.title}</p>
                
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}