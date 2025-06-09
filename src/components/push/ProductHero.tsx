// "use client";
// import { motion } from 'framer-motion';
// import { Bell, Zap, Target, Clock, BarChart } from 'lucide-react';
// import Image from 'next/image';
// import { Container } from '@/layout/Container';

// const ProductHero = () => {
//   const features = [
//     { icon: <Zap className="w-4 h-4 mr-2" />, text: "Instant delivery" },
//     { icon: <Target className="w-4 h-4 mr-2" />, text: "Precise targeting" },
//     { icon: <Clock className="w-4 h-4 mr-2" />, text: "Perfect timing" },
//     { icon: <BarChart className="w-4 h-4 mr-2" />, text: "Real-time analytics" },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-gray-950 to-gray-950 pt-28 pb-20 md:pt-32 md:pb-24">
//       <Container>
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//           <div className="md:w-1/2 order-2 md:order-1">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-6"
//             >
//               <Bell className="w-5 h-5 mr-2" />
//               <span>Engagement Platform</span>
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//             >
//               Smart <span className="text-purple-400">Push Notifications</span> That Get Noticed
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-lg md:text-xl text-purple-200 mb-8 md:mb-10 max-w-2xl"
//             >
//               Send browser and in-app notifications users never miss. Drive engagement with perfect timing and precision.
//             </motion.p>
            
//             <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
//                   className="flex items-center text-xs md:text-sm bg-purple-900/30 text-purple-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {feature.icon}
//                   <span>{feature.text}</span>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="flex flex-wrap gap-3 md:gap-4"
//             >
//               <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors text-base md:text-lg shadow-lg hover:shadow-purple-600/20">
//                 Start Sending
//               </button>
//               <button className="px-6 py-3 md:px-8 md:py-4 border border-purple-400 text-purple-100 hover:bg-purple-900/50 rounded-lg font-medium transition-colors text-base md:text-lg">
//                 API Documentation
//               </button>
//               <button className="px-6 py-3 md:px-8 md:py-4 text-purple-100 hover:text-white hover:bg-purple-900/30 rounded-lg font-medium transition-colors text-base md:text-lg">
//                 See Case Studies →
//               </button>
//             </motion.div>
//           </div>
          
//           <div className="md:w-1/2 relative order-1 md:order-2 mb-10 md:mb-0">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//               whileHover={{ scale: 1.02 }}
//             >
//               <Image
//                 src="/images/push-notifications-dashboard.png"
//                 alt="Push Notifications Dashboard with Engagement Analytics"
//                 width={600}
//                 height={500}
//                 className="rounded-xl shadow-2xl border border-gray-800"
//                 priority
//               />
//               <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-purple-600 rounded-xl -z-10"></div>
//               <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-purple-600 rounded-xl -z-10"></div>
//             </motion.div>
//           </div>
//         </div>
//       </Container>
      
//       {/* Enhanced background elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-800/20 filter blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.8, 1, 0.8]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-800/20 filter blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.7, 0.9, 0.7]
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute top-1/3 right-1/5 w-40 h-40 rounded-full bg-fuchsia-600/10 filter blur-2xl"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, -20, 0]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         {/* Notification pattern background */}
//         <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
//       </div>
//     </section>
//   );
// };

// export default ProductHero;

"use client";
import { motion } from 'framer-motion';
import { Bell, Zap, Target, Clock, BarChart, Code, Server, Shield} from 'lucide-react';
import Image from 'next/image';
import { Container } from '@/layout/Container';

const ProductHero = () => {
  const features = [
    { icon: <Zap className="w-4 h-4 mr-2" />, text: "300ms delivery time" },
    { icon: <Target className="w-4 h-4 mr-2" />, text: "Precision targeting" },
    { icon: <Clock className="w-4 h-4 mr-2" />, text: "Perfect timing AI" },
    { icon: <BarChart className="w-4 h-4 mr-2" />, text: "Real-time analytics" },
    { icon: <Server className="w-4 h-4 mr-2" />, text: "Global infrastructure" },
    { icon: <Shield className="w-4 h-4 mr-2" />, text: "Enterprise security" },
  ];

  const logos = [
    { name: "Uber", src: "/logos/uber.svg" },
    { name: "Spotify", src: "/logos/spotify.svg" },
    { name: "Airbnb", src: "/logos/airbnb.svg" },
    { name: "Slack", src: "/logos/slack.svg" },
    { name: "Dropbox", src: "/logos/dropbox.svg" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/50 via-gray-950 to-gray-950 pt-28 pb-20 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-6"
            >
              <Bell className="w-5 h-5 mr-2" />
              <span>Enterprise Push Platform</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-purple-400">Smarter Push Notifications</span> for Higher Engagement
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-purple-200 mb-8 md:mb-10 max-w-2xl"
            >
              Drive 3x more engagement with our intelligent push notification platform. 
              Perfect timing, precision targeting, and unmatched deliverability.
            </motion.p>
            
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-center text-xs md:text-sm bg-purple-900/30 text-purple-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-10"
            >
              <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors text-base md:text-lg shadow-lg hover:shadow-purple-600/20 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Get API Keys
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border border-purple-400 text-purple-100 hover:bg-purple-900/50 rounded-lg font-medium transition-colors text-base md:text-lg">
                View Documentation
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 text-purple-100 hover:text-white hover:bg-purple-900/30 rounded-lg font-medium transition-colors text-base md:text-lg">
                Talk to Sales
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8"
            >
              <p className="text-sm text-purple-300 mb-3">TRUSTED BY INDUSTRY LEADERS</p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {logos.map((logo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={40}
                      className="h-6 md:h-8 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative order-1 md:order-2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/push-notifications-dashboard.png"
                alt="Push Notifications Dashboard with Engagement Analytics"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl border border-gray-800"
                priority
              />
              {/* Floating code snippet */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-64 bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-purple-400 text-sm font-mono">
                  <span className="text-gray-400">import</span> Notify <span className="text-gray-400">from</span> <span className="text-purple-300">&apos;push-sdk&apos;</span><br /><br />
                  <span className="text-gray-400">await</span> Notify.send(<span className="text-yellow-300">{'{'}</span><br />
                  <span className="text-blue-300 ml-4">to</span>: <span className="text-green-300">&apos;user_123&apos;</span>,<br />
                  <span className="text-blue-300 ml-4">title</span>: <span className="text-green-300">&apos;Your order shipped!&apos;</span>,<br />
                  <span className="text-blue-300 ml-4">body</span>: <span className="text-green-300">&apos;Track your package here&apos;</span>,<br />
                  <span className="text-blue-300 ml-4">data</span>: <span className="text-yellow-300">{'{'}</span> <span className="text-blue-300">url</span>: <span className="text-green-300">&apos;/orders/123&apos;</span> <span className="text-yellow-300">{'}'}</span><br />
                  <span className="text-yellow-300">{'}'}</span>)
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-purple-600 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-purple-600 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </Container>
      
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-800/20 filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-800/20 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/5 w-40 h-40 rounded-full bg-fuchsia-600/10 filter blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Notification pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>
    </section>
  );
};

export default ProductHero;