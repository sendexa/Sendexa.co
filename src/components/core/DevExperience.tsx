"use client";
import { Code2, Terminal, Globe, Zap, ChevronRight, Copy } from "lucide-react";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DevExperience() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install sendexa");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Quick Start",
      content: (
        <div className="relative">
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-100 border border-gray-700">
            <code>npm install sendexa</code>
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-1 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <span className="text-xs text-green-400">Copied!</span>
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      ),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Localized Docs",
      content: (
        <>
          <p className="text-gray-300 mb-4">
            Africa-specific documentation with:
          </p>
          <ul className="space-y-3">
            {[
              "MTN/Vodafone delivery tips",
              "Local compliance guides",
              "Carrier-specific best practices",
              "Regional API examples",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="mt-1 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://developers.sendexa.com/"
            className="inline-flex items-center mt-4 text-yellow-400 hover:text-yellow-300 group transition-colors"
          >
            Explore docs{" "}
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </>
      ),
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Webhooks",
      content: (
        <>
          <p className="text-gray-300 mb-4">
            Real-time event handling for:
          </p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { name: "SMS Delivery", color: "bg-green-600" },
              { name: "Inbound SMS", color: "bg-blue-500" },
              { name: "Payment Events", color: "bg-purple-500" },
              { name: "System Alerts", color: "bg-red-500" },
            ].map((item, i) => (
              <span
                key={i}
                className={`${item.color} text-xs font-medium px-2 py-1 rounded-full text-center`}
              >
                {item.name}
              </span>
            ))}
          </div>
          <a
            href="/webhooks"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 group transition-colors"
          >
            Webhook guide{" "}
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="py-15 bg-gray-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <Code2 className="w-12 h-12 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Developer First Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SDKs in 5 languages, comprehensive webhooks, and Africa-specific
              documentation designed for your region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-yellow-400/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <div className="text-gray-300">{feature.content}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://developers.sendexa.com/"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors group"
            >
              View Full Developer Documentation
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// "use client";
// import { Code2, Terminal, Globe, Zap, ChevronRight, Copy } from "lucide-react";
// import { Container } from "@/layout/Container";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function DevExperience() {
//   const [copied, setCopied] = useState(false);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText("npm install sendexa");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const features = [
//     {
//       icon: <Terminal className="w-6 h-6 text-[#111e4f]" />,
//       title: "Quick Start",
//       content: (
//         <div className="relative">
//           <pre className="bg-gray-50 text-[#111e4f] p-4 rounded-lg overflow-x-auto text-sm font-mono border border-gray-200">
//             <code>npm install sendexa</code>
//           </pre>
//           <button
//             onClick={copyToClipboard}
//             className="absolute top-2 right-2 p-1 rounded bg-white hover:bg-gray-100 border border-gray-200"
//             aria-label="Copy to clipboard"
//           >
//             {copied ? (
//               <span className="text-xs text-green-600">Copied!</span>
//             ) : (
//               <Copy className="w-4 h-4 text-gray-500" />
//             )}
//           </button>
//         </div>
//       ),
//     },
//     {
//       icon: <Globe className="w-6 h-6 text-[#111e4f]" />,
//       title: "Localized Docs",
//       content: (
//         <>
//           <p className="text-gray-700 mb-4">
//             Africa-specific documentation with:
//           </p>
//           <ul className="space-y-2 text-sm text-gray-700">
//             {[
//               "MTN/Vodafone delivery tips",
//               "Local compliance guides",
//               "Carrier-specific best practices",
//               "Regional API examples",
//             ].map((item, i) => (
//               <li key={i} className="flex items-start gap-2">
//                 <div className="mt-1 w-2 h-2 rounded-full bg-[#fcd116] flex-shrink-0" />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//           <a
//             href="https://developers.sendexa.com/d"
//             className="inline-flex items-center mt-4 text-[#111e4f] hover:text-[#fcd116] font-medium group transition-colors"
//           >
//             Explore docs{" "}
//             <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </>
//       ),
//     },
//     {
//       icon: <Zap className="w-6 h-6 text-[#111e4f]" />,
//       title: "Webhooks",
//       content: (
//         <>
//           <p className="text-gray-700 mb-4">Real-time event handling for:</p>
//           <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
//             {[
//               { name: "SMS Delivery", color: "bg-green-100 text-green-800" },
//               { name: "Inbound SMS", color: "bg-blue-100 text-blue-800" },
//               { name: "Payment Events", color: "bg-purple-100 text-purple-800" },
//               { name: "System Alerts", color: "bg-red-100 text-red-800" },
//             ].map((item, i) => (
//               <span
//                 key={i}
//                 className={`px-2 py-1 rounded-full font-medium ${item.color} text-center`}
//               >
//                 {item.name}
//               </span>
//             ))}
//           </div>
//           <a
//             href="/webhooks"
//             className="inline-flex items-center text-[#111e4f] hover:text-[#fcd116] font-medium group transition-colors"
//           >
//             Webhook guide{" "}
//             <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//           </a>
//         </>
//       ),
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white via-[#fefcea] to-white">
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto"
//         >
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center justify-center mb-6">
//               <Code2 className="w-12 h-12 text-[#fcd116]" />
//             </div>
//             <h2 className="text-4xl font-bold mb-4 text-[#111e4f]">
//               Developer First Experience
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               SDKs in 5 languages, comprehensive webhooks, and Africa-specific
//               documentation designed for your region
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -4 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="bg-[#fcd116]/20 p-2 rounded-lg">{feature.icon}</div>
//                   <h3 className="text-lg font-semibold text-[#111e4f]">{feature.title}</h3>
//                 </div>
//                 <div className="text-sm text-gray-700">{feature.content}</div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <a
//               href="/developers"
//               className="inline-flex items-center px-6 py-3 bg-[#fcd116] hover:bg-[#fcd116]/90 text-[#111e4f] font-semibold rounded-lg transition-colors group"
//             >
//               View Full Developer Documentation
//               <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }
