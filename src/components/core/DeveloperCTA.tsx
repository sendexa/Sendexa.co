import { Code2, Github } from "lucide-react";

export default function DeveloperCTA() {
  return (
    <section className="py-20 bg-[#111e4f] text-white">
      <div className="container mx-auto px-4 text-center">
        <Code2 className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Built for Developers</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Full API access, webhooks, and open-source SDKs to build custom
          integrations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-[#111e4f] px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
            <Github size={18} />
            View GitHub
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Read API Docs
          </button>
        </div>
      </div>
    </section>
  );
}