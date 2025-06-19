export default function Hero() {
  return (
    <section className="relative bg-[#111e4f] text-white overflow-hidden">
      {/* Animated African map pattern in background */}
      <div className="absolute inset-0 opacity-10">
        {/* <AfricaMapPattern /> */}
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-yellow-400">African</span> Communication APIs
          </h1>
          <p className="text-xl mb-8">
            SMS, OTP, Email & Voice infrastructure with direct African carrier connections. 
            99.9% uptime. Local pricing.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-[#111e4f] px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Get Started Free
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
        
        {/* Code snippet floating card */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-900 rounded-xl shadow-2xl w-[400px]">
          <div className="p-4 border-b border-gray-800 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6 font-mono text-sm">
            <span className="text-purple-400">fetch</span>(
            <span className="text-green-400">&apos;https://api.sendexa.co/v1/sms&apos;</span>, {"{"}<br />
            &nbsp;&nbsp;method: <span className="text-yellow-400">&apos;POST&apos;</span>,<br />
            &nbsp;&nbsp;headers: {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&apos;Content-Type&apos;</span>: 
            <span className="text-yellow-400">&apos;application/json&apos;</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&apos;Authorization&apos;</span>: 
            <span className="text-yellow-400">&apos;Bearer YOUR_API_KEY&apos;</span><br />
            &nbsp;&nbsp;{"}"},<br />
            &nbsp;&nbsp;body: <span className="text-blue-400">JSON</span>.<span className="text-purple-400">stringify</span>({"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;to: <span className="text-yellow-400">&apos;+233XXXXXXXXX&apos;</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;message: <span className="text-yellow-400">&apos;Your OTP is 123456&apos;</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;sender_id: <span className="text-yellow-400">&apos;Sendexa&apos;</span><br />
            &nbsp;&nbsp;{"}"})<br />
            );
          </div>
        </div>
      </div>
    </section>
  );
}