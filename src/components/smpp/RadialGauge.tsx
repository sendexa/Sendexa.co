import React from 'react';
import { motion } from 'framer-motion';

interface RadialGaugeProps {
  value: number;
  maxValue?: number;
  unit?: string;
  reverse?: boolean;
}

export default function RadialGauge({ 
  value, 
  maxValue = 100, 
  unit = '%', 
  reverse = false 
}: RadialGaugeProps) {
  // Calculate the percentage for the arc
  const percentage = Math.min(value / maxValue, 1);
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage * circumference);
  
  // Determine color based on value
  let strokeColor = '#4f46e5'; // indigo-600
  if (percentage < 0.5) {
    strokeColor = '#ef4444'; // red-500
  } else if (percentage < 0.8) {
    strokeColor = '#f59e0b'; // amber-500
  }

  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#e0e7ff" // indigo-100
          strokeWidth="8"
        />
        
        {/* Animated progress arc */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: reverse ? strokeDashoffset : circumference - strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          transform="rotate(-90 50 50)"
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold text-gray-900"
        >
          {value.toLocaleString()}
        </motion.div>
        {unit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-sm text-gray-600"
          >
            {unit}
          </motion.div>
        )}
      </div>
    </div>
  );
}