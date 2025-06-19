import { Container } from "@/layout/Container";

export default function ResellerBanner() {
  return (
    <section className="bg-[#111e4f] text-white py-12">
      <Container>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Become a Reseller</h3>
              <p className="text-[#fcd116]">
                Earn 20% commission on all client volume
              </p>
            </div>
            <button className="bg-[#fcd116] text-[#111e4f] px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap">
              Join Reseller Program
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
