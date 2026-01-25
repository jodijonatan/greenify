import SectionTitle from "@/components/SectionTitle";
import { Handshake, ArrowUpRight } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "EcoTech Corp", type: "Technology", logo: "🚀" },
    { name: "Nature Foundation", type: "Non-Profit", logo: "🌿" },
    { name: "Green Cloud", type: "Data Center", logo: "☁️" },
    { name: "Ocean Clean", type: "Environmental", logo: "🌊" },
    { name: "Sustainable Inc", type: "Corporate", logo: "🏢" },
    { name: "Global Forest", type: "Philanthropy", logo: "🌳" },
    { name: "Clean Energy", type: "Renewable", logo: "⚡" },
    { name: "Future Earth", type: "R&D", logo: "🌍" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Copywriting */}
          <div className="lg:col-span-5">
            <SectionTitle
              tag="Trusted by Global Leaders"
              title="Kolaborasi untuk Perubahan Skala Besar"
              subtitle="Kami bermitra dengan organisasi yang memiliki visi yang sama untuk menciptakan standar baru dalam keberlanjutan digital."
              align="left"
            />

            <div className="mt-8 p-6 bg-green-50 rounded-3xl border border-green-100 relative">
              <p className="text-green-800 font-medium italic">
                "Bekerja sama dengan Greenify membantu kami memvalidasi jejak
                karbon server kami dengan cara yang belum pernah ada
                sebelumnya."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-200 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Sarah Jenkins
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Sustainability Director at EcoTech
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 flex items-center gap-2 font-bold text-green-600 group hover:gap-3 transition-all">
              Jadilah Mitra Kami <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Right Side: Logo Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="group relative h-32 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-green-100/50 hover:border-green-200"
                >
                  <div className="text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110">
                    {partner.logo}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors text-center">
                    {partner.name}
                  </p>

                  {/* Hover Tag */}
                  <span className="absolute top-2 right-2 text-[8px] font-bold py-0.5 px-2 bg-slate-200 text-slate-500 rounded group-hover:bg-green-100 group-hover:text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {partner.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtle Footer for Mobile */}
            <p className="mt-8 text-center lg:text-left text-slate-400 text-xs font-medium">
              Ditambah 40+ organisasi lainnya yang mendukung gerakan kami.
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Infinite Scroll Banner (Logo Marquee) */}
      <div className="mt-20 border-y border-slate-100 py-10 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-2xl font-black text-slate-200 uppercase tracking-[0.3em] select-none"
            >
              • GLOBAL IMPACT PARTNER • SUSTAINABILITY FIRST
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
