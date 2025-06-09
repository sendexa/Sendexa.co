"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type CountryData = {
  code: string;
  name: string;
  paymentMethods: number;
  coverage: "full" | "partial" | "beta";
};

export const InteractiveMap = ({
  data,
  color = "blue",
}: {
  data: CountryData[];
  color?: "blue" | "green" | "indigo" | "yellow";
}) => {
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(
    null
  );

  const colorClasses = {
    blue: {
      full: "fill-blue-600",
      partial: "fill-blue-800",
      beta: "fill-blue-900",
    },
    green: {
      full: "fill-green-600",
      partial: "fill-green-800",
      beta: "fill-green-900",
    },
    indigo: {
      full: "fill-indigo-600",
      partial: "fill-indigo-800",
      beta: "fill-indigo-900",
    },
    yellow: {
      full: "fill-yellow-400",
      partial: "fill-yellow-600",
      beta: "fill-yellow-800",
    },
  };

  // function getPathForCountry(_code: string): string {
  //   // TODO: Replace with actual country path lookup
  //   // For demo, return a dummy shape
  //   return "M10 10 H 90 V 90 H 10 Z"; // square placeholder
  // }

  function getTooltipPosition() {
    // Replace with actual logic if desired
    return { x: 100, y: 100 };
  }

  return (
    <div className="relative h-full">
      <svg viewBox="0 0 1000 500" className="w-full h-full">
        {data.map((country, i) => (
          <motion.path
            key={i}
            // d={getPathForCountry(country.code)}
            className={`stroke-gray-800 stroke-[0.5] cursor-pointer ${colorClasses[color][country.coverage]}`}
            onMouseEnter={() => setHoveredCountry(country)}
            onMouseLeave={() => setHoveredCountry(null)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </svg>

      {hoveredCountry && (
        <motion.div
          className="absolute bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg pointer-events-none"
          style={{
            top: `${getTooltipPosition().y}px`,
            left: `${getTooltipPosition().x}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="font-bold">{hoveredCountry.name}</h3>
          <p className="text-sm text-gray-400">
            {hoveredCountry.paymentMethods} payment methods available
          </p>
          <div className="flex items-center mt-2">
            <div
              className={`w-3 h-3 rounded-full mr-2 ${
                hoveredCountry.coverage === "full"
                  ? "bg-green-500"
                  : hoveredCountry.coverage === "partial"
                  ? "bg-yellow-500"
                  : "bg-blue-500"
              }`}
            />
            <span className="text-xs text-gray-400">
              {hoveredCountry.coverage === "full"
                ? "Full coverage"
                : hoveredCountry.coverage === "partial"
                ? "Partial coverage"
                : "Beta access"}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
