export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-[#111e4f] text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-[#ce1126] to-[#fcd116] p-1 rounded-xl">
          <div className="bg-[#111e4f] rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Africa Comms Insights
              </h2>
              <p className="text-gray-300">
                Get monthly updates on African telecom trends and API features
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:border-[#fcd116] focus:ring-2 focus:ring-[#fcd116]/50 outline-none text-gray-100"
                required
              />
              <button
                type="submit"
                className="bg-[#fcd116] text-[#111e4f] px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3 text-center">
              We&apos;ll never share your email. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}