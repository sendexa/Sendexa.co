"use client";
import { Check, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/layout/Container";

export default function CoverageMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const countries = [
    {
      code: "GH",
      name: "Ghana",
      available: true,
      carriers: ["MTN", "Telecel", "AirtelTigo", "Xtottel"],
    },
    {
      code: "NG",
      name: "Nigeria",
      available: false,
      carriers: ["MTN", "Airtel", "Glo", "9Mobile"],
    },
    {
      code: "KE",
      name: "Kenya",
      available: true,
      carriers: ["Safaricom", "Airtel"],
    },
    {
      code: "ZA",
      name: "South Africa",
      available: true,
      carriers: ["Vodacom", "MTN"],
    },
    {
      code: "CI",
      name: "Côte d'Ivoire",
      available: false,
      carriers: ["MTN", "Orange"],
    },
    // Add more countries as needed
  ];

  const positionMap: Record<string, string> = {
    GH: "top-[35%] left-[35%]", // Ghana
    NG: "top-[27%] left-[43%]", // Nigeria
    KE: "top-[65%] left-[55%]", // Kenya
    ZA: "top-[80%] left-[50%]", // South Africa
    CI: "top-[35%] left-[32%]", // Côte d'Ivoire
  };

  const getCountryDetails = (code: string) => {
    return countries.find((c) => c.code === code);
  };

  return (
    <section className="py-15 bg-gradient-to-b from-sky-50 via-sky-100 to-white">
      <Container>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#111e4f]/10 text-[#111e4f] rounded-full text-sm font-medium mb-4">
            Direct Carrier Connections
          </span>
          <h2 className="text-3xl font-bold text-[#111e4f] mb-3">
            Africa Coverage Map
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Local infrastructure for optimal deliverability and cost efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] bg-[#f9fafb] rounded-xl border border-[#e5e7eb] shadow-inner overflow-hidden">
            <Image
              src="/africa.svg"
              alt="Africa Coverage"
              fill
              className="object-contain p-8"
              priority
            />

            {countries.map((country) => (
              <button
                key={country.code}
                className={`absolute ${positionMap[country.code]} 
        ${country.available ? "bg-green-500" : "bg-gray-400"} 
        w-8 h-8 rounded-full flex items-center justify-center 
        shadow-md hover:scale-125 transition-transform
        ${selectedCountry === country.code ? "ring-4 ring-[#111e4f]/30" : ""}`}
                onMouseEnter={() => setShowTooltip(country.code)}
                onMouseLeave={() => setShowTooltip(null)}
                onClick={() => setSelectedCountry(country.code)}
                aria-label={`${country.name} coverage`}
              >
                {country.available ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <X className="w-4 h-4 text-white" />
                )}
              </button>
            ))}

            {showTooltip && (
              <div
                className={`absolute ${positionMap[showTooltip]} 
        -translate-y-12 bg-white px-3 py-2 rounded-md shadow-lg 
        text-sm font-medium whitespace-nowrap border border-gray-200
        flex items-center gap-1`}
              >
                {getCountryDetails(showTooltip)?.name}
                <span
                  className={`text-xs ${
                    getCountryDetails(showTooltip)?.available
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  (
                  {getCountryDetails(showTooltip)?.available
                    ? "Available"
                    : "Coming Soon"}
                  )
                </span>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            {selectedCountry ? (
              <div>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="flex items-center gap-1 text-sm text-[#111e4f] mb-4 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to all countries
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center 
                    ${getCountryDetails(selectedCountry)?.available ? "bg-green-500" : "bg-gray-400"}`}
                  >
                    {getCountryDetails(selectedCountry)?.available ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <X className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#111e4f]">
                    {getCountryDetails(selectedCountry)?.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {getCountryDetails(selectedCountry)?.available
                    ? "We have direct carrier connections with:"
                    : "Planned carrier connections:"}
                </p>

                <ul className="space-y-3 mb-8">
                  {getCountryDetails(selectedCountry)?.carriers.map(
                    (carrier) => (
                      <li key={carrier} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="font-medium">{carrier}</span>
                      </li>
                    )
                  )}
                </ul>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    {getCountryDetails(selectedCountry)?.available
                      ? "✅ Currently operational"
                      : "🔄 Planned for Q3 2024"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Average delivery speed:{" "}
                    <span className="font-medium">{"<1s"}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-[#111e4f] mb-4">
                  Our Coverage
                </h3>
                <p className="text-gray-600 mb-6">
                  Select a country to view detailed carrier connection
                  information. Green indicates live connections, gray shows
                  upcoming expansions.
                </p>

                <div className="space-y-4">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => setSelectedCountry(country.code)}
                      className="w-full flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center 
                          ${country.available ? "bg-green-500" : "bg-gray-400"}`}
                        >
                          {country.available ? (
                            <Check className="w-3 h-3 text-white" />
                          ) : (
                            <X className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}
