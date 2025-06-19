import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import Image from "next/image";
import { Container } from "@/layout/Container";

const testimonials = [
  {
    name: "Kwame Asare",
    role: "CTO, Accra FinTech",
    avatar: "/avatars/kwame.jpg",
    quote:
      "Sendexa's direct MTN routes improved our OTP delivery from 82% to 99%",
    logo: "/logos/accra-fintech.svg",
    logoAlt: "Accra FinTech Logo",
  },
  {
    name: "Ngozi Eze",
    role: "Product Lead, Lagos",
    avatar: "/avatars/ngozi.jpg",
    quote: "Finally an API that understands African number formatting quirks",
    logo: "/logos/lagos-tech.svg",
    logoAlt: "Lagos Tech Logo",
  },
  {
    name: "Amina Diallo",
    role: "CEO, Dakar Logistics",
    avatar: "/avatars/amina.jpg",
    quote: "24/7 Accra-based support makes all the difference for our business",
    logo: "/logos/dakar-logistics.svg",
    logoAlt: "Dakar Logistics Logo",
  },
];

export default function CustomerStories() {
  return (
    <section className="py-15 bg-gradient-to-b from-[#ebeefc] to-white">
      <Container>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#fcd116]/20 text-[#fcd116] rounded-full text-sm font-medium mb-4">
              AFRICAN SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111e4f] mb-3">
              Trusted by Africa&apos;s Fastest Growing Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#111e4f]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.logoAlt}
                    width={60}
                    height={30}
                    className="h-6 w-auto opacity-70"
                  />
                </div>
                <p className="text-gray-700 italic relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-4xl before:text-[#fcd116] before:font-serif before:leading-none before:top-0">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
