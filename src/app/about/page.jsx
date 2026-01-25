import SectionTitle from "@/components/SectionTitle";
import { Target, Heart, Sparkles, Quote } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Misi Kami",
      desc: "Mengintegrasikan teknologi ke dalam solusi lingkungan yang praktis dan terukur.",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Nilai Kami",
      desc: "Keberlanjutan bukan pilihan, melainkan tanggung jawab bersama untuk masa depan.",
      color: "text-red-600 bg-red-50",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Visi Kami",
      desc: "Menjadi platform nomor satu di dunia dalam pengelolaan sampah digital.",
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="bg-green-50/50 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-200/20 blur-3xl rounded-full translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle
            tag="The Story of Greenify"
            title="Dibalik Gerakan Digital Hijau"
            subtitle="Kami percaya teknologi adalah kunci, bukan musuh, bagi kelestarian alam."
            align="left"
          />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Greenify lahir dari sebuah keresahan sederhana:{" "}
                <span className="text-green-700 font-bold italic">
                  di mana sampah digital kita berakhir?
                </span>{" "}
                Saat dunia beralih ke cloud, kita sering lupa bahwa setiap
                kilobyte data meninggalkan jejak karbon.
              </p>
              <p>
                Didirikan pada tahun 2024, kami berevolusi dari komunitas lokal
                menjadi startup teknologi lingkungan yang fokus pada **Digital
                Waste Management** dan kampanye berkelanjutan berskala nasional.
              </p>

              {/* Highlight Box */}
              <div className="p-6 bg-white rounded-3xl border-l-4 border-green-500 shadow-sm italic text-slate-700">
                <Quote className="text-green-500 mb-2 opacity-50" size={32} />
                "Perubahan besar tidak dimulai dari kebijakan global, tapi dari
                satu klik untuk membersihkan sampah digitalmu."
              </div>
            </div>

            {/* Visual Element: Ilustratif Image Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-700 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center p-8">
                {/* Kamu bisa ganti ini dengan Image dari Next.js */}
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🌳</div>
                  <p className="font-bold tracking-widest uppercase text-sm opacity-80">
                    Since 2024 • Jakarta, ID
                  </p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-green-50">
                <div className="text-4xl">🚀</div>
                <div>
                  <p className="text-2xl font-black text-slate-900">500+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase">
                    Projects Done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`${v.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}
              >
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {v.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Quote/Social Proof Section */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl shadow-glow">
            👤
          </div>
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
            "Kami tidak ingin hanya membangun bisnis. Kami ingin membangun
            warisan di mana teknologi dan alam hidup berdampingan secara
            harmonis."
          </h2>
          <div>
            <p className="font-bold text-green-400 text-lg">Alex Greenify</p>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">
              CEO & Founder
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
