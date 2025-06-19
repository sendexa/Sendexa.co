import { Container } from "@/layout/Container";
import Image from "next/image";

interface ManagementMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface ManagementTeamProps {
  management: ManagementMember[];
}

export default function ManagementTeam({ management }: ManagementTeamProps) {
  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-gray-900">
            Management <span className="text-teal-500">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experienced managers guiding our teams to success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Changed to lg:grid-cols-4 */}
          {management.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-teal-600 transition-all duration-300 ease-in-out group"
            >
              <div className="relative aspect-[1.5/1] w-full overflow-hidden"> {/* Changed to aspect-[1.5/1] */}
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                {/* Optional: Add a subtle overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{person.name}</h3>
                <p className="text-teal-500 text-sm ">{person.title}</p>
                {/* <p className="text-gray-700 text-sm  leading-relaxed">{person.bio}</p> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}