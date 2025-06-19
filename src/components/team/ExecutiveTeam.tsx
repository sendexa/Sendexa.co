import { Container } from "@/layout/Container";
import Image from "next/image";

interface Executive {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface ExecutiveTeamProps {
  executives: Executive[];
}

export default function ExecutiveTeam({ executives }: ExecutiveTeamProps) {
  return (
    <section className="py-15 bg-gray-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl text-gray-900">
            Executive <span className="text-teal-500">Team</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Seasoned professionals with deep expertise in communications and African markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:border-teal-600 transition-all duration-300 ease-in-out group"
            >
              <div className="relative w-full overflow-hidden aspect-[1.5/1]"> {/* Changed from aspect-[4/1] to aspect-[3/1] for taller image */}
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <div className="p-4 text-center"> {/* Changed from p-3 to p-4 for more padding */}
                <h3 className="text-lg font-bold mb-2 text-gray-900">{person.name}</h3> {/* Changed from text-base to text-lg */}
                <p className="text-teal-500 text-sm mb-2">{person.title}</p> {/* Changed from text-xs to text-sm */}
                <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-3">{person.bio}</p> {/* Changed from text-xs to text-sm */}               
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}