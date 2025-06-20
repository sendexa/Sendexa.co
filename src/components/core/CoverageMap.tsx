"use client";
import { Check, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Container } from "@/layout/Container";

interface Country {
  code: string;
  name: string;
  available: boolean;
  carriers: string[];
}

export default function CoverageMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  // Define a type for jsVectorMap instance with setSelectedRegions method
  type JsVectorMapInstance = {
    setSelectedRegions: (regions: string[]) => void;
  };

  const [mapInstance, setMapInstance] = useState<JsVectorMapInstance | null>(null);

  const countries: Country[] = useMemo(() => [
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
  ], []);

  useEffect(() => {
    // Load jsvectormap scripts from CDN
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/jsvectormap/dist/jsvectormap.min.css';
    document.head.appendChild(cssLink);

    const jsScript = document.createElement('script');
    jsScript.src = 'https://cdn.jsdelivr.net/npm/jsvectormap';
    jsScript.onload = () => {
      const africaScript = document.createElement('script');
      africaScript.src = 'https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js';
      africaScript.onload = () => {
        setMapLoaded(true);
      };
      document.head.appendChild(africaScript);
    };
    document.head.appendChild(jsScript);

    return () => {
      // Clean up
      document.head.removeChild(cssLink);
      document.head.removeChild(jsScript);
    };
  }, []);

  const getCountryStatus = (code: string) => {
    return countries.find((c) => c.code === code)?.available ? "available" : "coming";
  };

  const onCountryClick = useCallback((code: string) => {
    if (countries.some(c => c.code === code)) {
      setSelectedCountry(code);
      if (mapInstance) {
        mapInstance.setSelectedRegions([code]);
      }
    }
  }, [countries, mapInstance]);

  const onCountryOver = useCallback((code: string) => {
    if (countries.some(c => c.code === code)) {
      setHoveredCountry(code);
    }
  }, [countries]);

  const onCountryOut = useCallback(() => {
    setHoveredCountry(null);
  }, []);

  const getCountryDetails = (code: string) => {
    return countries.find((c) => c.code === code);
  };

  useEffect(() => {
    if (mapLoaded && window.jsVectorMap) {
      const map = new window.jsVectorMap({
        selector: '#vector-map',
        map: 'world',
        backgroundColor: "transparent",
        zoomOnScroll: false,
        
        regionStyle: {
          initial: {
            fill: "#f9fafb",
            stroke: "#e5e7eb",
            strokeWidth: 1,
            fillOpacity: 1,
          },
          hover: {
            fill: "#e5e7eb",
            fillOpacity: 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#10b981",
          },
        },

        onRegionClick: function(_event: Event, code: string) {
          onCountryClick(code);
        },

        onRegionOver: function(_event: Event, code: string) {
          onCountryOver(code);
        },

        onRegionOut: onCountryOut,

        regionsSelectable: true,
        selectedRegions: selectedCountry ? [selectedCountry] : [],

        series: {
          regions: [{
            values: Object.fromEntries(
              countries.map(c => [c.code, c.available ? 1 : 0])
            ),
            attribute: 'fill',
            scale: {
              1: "#10b981",
              0: "#9ca3af"
            },
          }],
        },
      });

      setMapInstance(map);

      return () => {
        if (map) {
          // Clean up map instance if needed
        }
      };
    }
  }, [mapLoaded, countries, onCountryClick, onCountryOver, onCountryOut, selectedCountry]);

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
              <div id="vector-map" style={{ width: '100%', height: '100%' }}></div>

              {hoveredCountry && (
                <div className="absolute bg-white px-3 py-2 rounded-md shadow-lg text-sm font-medium whitespace-nowrap border border-gray-200 flex items-center gap-1">
                  {getCountryDetails(hoveredCountry)?.name}
                  <span className={`text-xs ${
                    getCountryDetails(hoveredCountry)?.available 
                      ? "text-green-500" 
                      : "text-gray-500"
                  }`}>
                    ({getCountryStatus(hoveredCountry)})
                  </span>
                </div>
              )}
            </div>

            {/* Right panel remains the same */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              {selectedCountry ? (
                <div>
                  <button
                    onClick={() => {
                      setSelectedCountry(null);
                      if (mapInstance) {
                        mapInstance.setSelectedRegions([]);
                      }
                    }}
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
                        onClick={() => onCountryClick(country.code)}
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