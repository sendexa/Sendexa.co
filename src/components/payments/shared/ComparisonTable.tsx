"use client";

import { Check, X } from 'lucide-react';

export const ComparisonTable = ({
  ourProduct,
  competitors,
  theme = 'blue'
}: {
  ourProduct: string;
  competitors: Array<{ name: string; fees: string; features: Record<string, unknown> }>;
  theme?: 'blue' | 'green' | 'indigo' | 'yellow';
}) => {
  const themeClasses = {
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-500',
      bg: 'bg-blue-900/20'
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-500',
      bg: 'bg-green-900/20'
    },
    indigo: {
      text: 'text-indigo-400',
      border: 'border-indigo-500',
      bg: 'bg-indigo-900/20'
    },
    yellow: {
      text: 'text-yellow-400',
      border: 'border-yellow-500',
      bg: 'bg-yellow-900/20'
    }
  };

  // Get all unique feature keys
  const allFeatures = new Set<string>();
  competitors.forEach(comp => {
    Object.keys(comp.features).forEach(feature => allFeatures.add(feature));
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-4 px-6 font-semibold">Feature</th>
            <th className="text-left py-4 px-6 font-semibold">{ourProduct}</th>
            {competitors.map((comp) => (
              <th key={comp.name} className="text-left py-4 px-6 font-semibold">
                {comp.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from(allFeatures).map((feature) => (
            <tr key={feature} className="border-b border-gray-800 hover:bg-gray-900/50">
              <td className="py-4 px-6 text-gray-400">{feature}</td>
              <td className="py-4 px-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${themeClasses[theme].bg} ${themeClasses[theme].text}`}>
                  <Check className="w-4 h-4 mr-1" />
                  <span>Supported</span>
                </div>
              </td>
              {competitors.map((comp) => (
                <td key={`${comp.name}-${feature}`} className="py-4 px-6">
                  {comp.features[feature] === true ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : comp.features[feature] === false ? (
                    <X className="w-5 h-5 text-red-500" />
                  ) : (
                    <span className="text-gray-400">{String(comp.features[feature])}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};