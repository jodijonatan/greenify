import Hero from "@/components/Hero";
import StatCard from "@/components/StatCard";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRight, MonitorCheck, Sprout, ShoppingBag } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Digital Waste",
      desc: "Membersihkan jejak karbon digital melalui optimasi server dan manajemen data efisien.",
      icon: <MonitorCheck className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Eco Campaign",
      desc: "Gerakan kolaboratif untuk meningkatkan kesadaran lingkungan di era digital.",
      icon: <Sprout className="w-8 h-8" />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Eco Products",
      desc: "Kurasi produk ramah lingkungan yang mendukung gaya hidup zero-waste.",
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <main className="bg-white">
      <Hero />

      {/* --- Section 1: Stats (Social Proof) --- */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            iconName="Flag"
            value="120"
            label="Green Campaign"
            trend="+12%"
            description="Kampanye aktif bulan ini."
          />
          <StatCard
            iconName="Trash2"
            value="5T"
            label="Waste Managed"
            trend="Live"
            description="Sampah fisik & digital terkelola."
          />
          <StatCard
            iconName="Handshake"
            value="60"
            label="Eco Partners"
            trend="Global"
            description="Perusahaan yang bergabung."
          />
          <StatCard
            iconName="Users"
            value="3K"
            label="Volunteers"
            trend="Verified"
            description="Pahlawan lingkungan kami."
          />
        </div>
      </section>

      {/* --- Section 2: Services (Core Solutions) --- */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-green-600 font-bold tracking-widest text-xs uppercase">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                Solusi Inovatif untuk <br /> Masa Depan{" "}
                <span className="text-green-500 italic">Sustainable.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              Kami menggabungkan kecanggihan teknologi dengan kearifan alam
              untuk menciptakan dampak yang terukur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 flex flex-col h-full"
              >
                <div
                  className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-green-700 group/btn hover:gap-3 transition-all">
                  Pelajari Lebih Lanjut
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Call to Action (Engagement) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-green-950 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-3xl shadow-green-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-white text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight italic">
                Siap Menjadi Bagian dari Perubahan?
              </h2>
              <p className="text-green-100/70 text-lg mb-8">
                Bergabunglah dengan 3,000+ sukarelawan lainnya dan mulai langkah
                kecilmu hari ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-green-500 hover:bg-green-400 text-green-950 px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-lg hover:shadow-green-500/30">
                  Daftar Sekarang
                </button>
                <button className="bg-transparent border border-white/20 hover:bg-white/10 px-10 py-4 rounded-2xl font-bold transition-all">
                  Hubungi Kami
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-slow opacity-20" />
                <div className="absolute inset-4 border-2 border-dashed border-green-500/50 rounded-full animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  🌱
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
