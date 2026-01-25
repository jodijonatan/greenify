import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";
import { ArrowUpRight, Globe, Leaf, Zap } from "lucide-react";

export default function Impact() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#fafdfb]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          tag="Our Real-World Impact"
          title="Transparansi Aksi, Bukan Sekadar Janji"
          subtitle="Setiap byte yang dibersihkan dan setiap sampah yang dikelola berkontribusi pada kesehatan ekosistem digital dan fisik kita."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[180px]">
          {/* Card Utama (Paling Besar) */}
          <div className="md:col-span-8 md:row-span-2 group relative bg-green-600 rounded-[2.5rem] p-10 overflow-hidden text-white shadow-2xl shadow-green-200">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest mb-6">
                  <Globe size={14} /> LIVE TRACKER
                </div>
                <h3 className="text-6xl md:text-7xl font-black mb-2">5 Ton</h3>
                <p className="text-2xl font-bold opacity-90">
                  Digital & Physical Waste Managed
                </p>
              </div>
              <p className="max-w-md text-sm opacity-70 leading-relaxed">
                Kami telah mengeliminasi redundansi data server dan mengelola
                limbah fisik mitra secara real-time sejak 2024.
              </p>
            </div>
            {/* Dekorasi Ikon Besar */}
            <Leaf className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* Card Medium 1 */}
          <div className="md:col-span-4 md:row-span-2">
            <StatCard
              iconName="Flag"
              value="120"
              label="Campaigns Held"
              trend="+15% MoM"
              description="Gerakan masif yang melibatkan ribuan partisipan aktif di seluruh Indonesia."
            />
          </div>

          {/* Card Medium 2 */}
          <div className="md:col-span-4 md:row-span-2">
            <StatCard
              iconName="Handshake"
              value="60"
              label="Eco Partners"
              trend="Verified"
              description="Kolaborasi eksklusif dengan korporasi dan komunitas hijau."
            />
          </div>

          {/* Card Info Tambahan (Horizontal) */}
          <div className="md:col-span-8 md:row-span-1 bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center justify-between group hover:border-green-300 transition-all shadow-sm">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <Zap size={32} fill="currentColor" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
                  Client Satisfaction Rate
                </p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-green-600 font-bold text-sm hover:underline">
              Download Report <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm italic">
            *Data diperbarui secara otomatis setiap 24 jam.
            <a
              href="#"
              className="text-green-600 font-semibold ml-1 hover:underline text-not-italic"
            >
              Lihat metodologi perhitungan kami.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
