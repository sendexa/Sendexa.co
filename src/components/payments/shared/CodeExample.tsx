"use client";
import { motion } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';

export const CodeExample = ({
  code,
  language = 'javascript',
  theme = 'blue'
}: {
  code: string;
  language?: string;
  theme?: 'blue' | 'green' | 'indigo' | 'yellow';
}) => {
  const themeColors = {
    blue: {
      background: 'bg-gray-900',
      border: 'border-blue-500/30',
      highlight: themes.vsDark
    },
    green: {
      background: 'bg-gray-900',
      border: 'border-green-500/30',
      highlight: themes.vsDark
    },
    indigo: {
      background: 'bg-gray-900',
      border: 'border-indigo-500/30',
      highlight: themes.vsDark
    },
    yellow: {
      background: 'bg-gray-900',
      border: 'border-yellow-500/30',
      highlight: themes.vsDark
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`rounded-xl border ${themeColors[theme].border} overflow-hidden`}
    >
      <div className="p-4 bg-gray-900 border-b border-gray-800 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">example.{language}</div>
      </div>
      <div className={`${themeColors[theme].background} p-4 overflow-auto`}>
        <Highlight
          code={code}
          language={language}
          theme={themeColors[theme].highlight}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="text-gray-500 select-none mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </motion.div>
  );
};