"use client";
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Tab = {
  title: string;
  icon: ReactNode;
  description: string;
  highlights: string[];
};

export const AnimatedTabs = ({
  tabs,
  color = 'blue',
  children
}: {
  tabs: Tab[];
  color?: 'blue' | 'green' | 'indigo' | 'yellow';
  children: (tab: Tab) => ReactNode;
}) => {
  const colorClasses = {
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-400',
      bg: 'bg-blue-900/20'
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-400',
      bg: 'bg-green-900/20'
    },
    indigo: {
      text: 'text-indigo-400',
      border: 'border-indigo-400',
      bg: 'bg-indigo-900/20'
    },
    yellow: {
      text: 'text-yellow-400',
      border: 'border-yellow-400',
      bg: 'bg-yellow-900/20'
    }
  };

  return (
    <Tabs.Root defaultValue={tabs[0].title}>
      <Tabs.List className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.title}
            value={tab.title}
            className={`px-4 py-2 text-sm font-medium rounded-lg border ${colorClasses[color].border} ${colorClasses[color].bg} data-[state=active]:bg-gradient-to-r data-[state=active]:from-${color}-600 data-[state=active]:to-${color}-800 data-[state=active]:text-white data-[state=active]:border-transparent transition-colors`}
          >
            <div className="flex items-center">
              <div className="mr-2">{tab.icon}</div>
              {tab.title}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Content key={tab.title} value={tab.title}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children(tab)}
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};