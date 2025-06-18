import { Container } from "@/layout/Container";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative py-24 md:py-28 lg:py-32 overflow-hidden bg-gray-900">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 z-10" />

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-3.png"
          alt="Sendexa leadership team meeting"
          fill
          className="object-cover scale-110 transition-transform duration-1000 ease-out"
          priority
          quality={100}
        />
      </div>

      <Container>
        <div className="relative z-20 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-white leading-tight drop-shadow-lg">
            The Visionaries Behind <span className="text-[#a18722]">Sendexa</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed drop-shadow-md">
            {/* Meet the team shaping Africa’s digital future—building a seamless ecosystem for communications, payments, and innovation. */}
            Meet the team driving Africa&apos;s future—one line of code, one transaction, and one connection at a time. Together, we&apos;re building a smarter, faster, and more inclusive ecosystem for communications, payments, and growth across the continent.
          </p>
        </div>
      </Container>
    </section>
  );
}
