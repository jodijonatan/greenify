import SectionTitle from "@/components/SectionTitle";
import {
  MonitorCheck,
  Sprout,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Digital Waste Management",
      subtitle: "Cloud & Data Optimization",
      desc: "Kami membantu perusahaan mengurangi jejak karbon digital dengan mengoptimalkan penyimpanan cloud dan menghapus redundansi data yang tidak perlu.",
      icon: <MonitorCheck className="w-7 h-7" />,
      benefits: ["Cloud Carbon Audit", "Data Cleanup", "Server Efficiency"],
      color: "from-blue-500 to-cyan-500",
      lightColor: "bg-blue-50 text-blue-600",
    },
    {
      title: "Sustainable Eco Campaign",
      subtitle: "Community Engagement",
      desc: "Rancang kampanye lingkungan yang berdampak luas. Kami menghubungkan brand Anda dengan komunitas lokal untuk aksi nyata di lapangan.",
      icon: <Sprout className="w-7 h-7" />,
      benefits: ["Brand Activation", "Community Growth", "Impact Reporting"],
      color: "from-green-500 to-emerald-600",
      lightColor: "bg-green-50 text-green-600",
    },
    {
      title: "Eco-Friendly Products",
      subtitle: "Sustainable Marketplace",
      desc: "Akses ke kurasi produk ramah lingkungan terbaik. Kami memastikan setiap produk memiliki sertifikasi keberlanjutan yang transparan.",
      icon: <ShoppingBag className="w-7 h-7" />,
      benefits: ["Zero-Waste Kit", "Plastic Alternatives", "Eco Certification"],
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          tag="Our Solutions"
          title="Layanan Inovatif untuk Bumi"
          subtitle="Kami menggabungkan kecerdasan buatan dan kesadaran lingkungan untuk hasil yang terukur."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {serviceList.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-2"
            >
              {/* Icon Section */}
              <div
                className={`${service.lightColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Text Section */}
              <div className="mb-6 flex-grow">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {service.subtitle}
                </p>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`mt-8 w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all bg-slate-50 text-slate-900 group-hover:bg-gradient-to-r ${service.color} group-hover:text-white group-hover:shadow-lg`}
              >
                Pelajari Detail <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner/Social Proof */}
        <div className="mt-20 p-8 rounded-[2rem] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 bg-green-500 flex items-center justify-center text-[10px] font-bold text-white"
                >
                  USR
                </div>
              ))}
            </div>
            <p className="text-white text-sm font-medium">
              Bergabung dengan{" "}
              <span className="text-green-400 font-bold">1,000+</span> bisnis
              yang sudah Go-Green.
            </p>
          </div>
          <button className="text-white font-bold text-sm border-b-2 border-green-500 pb-1 hover:text-green-400 transition-colors">
            Lihat Portfolio Proyek Kami
          </button>
        </div>
      </div>
    </section>
  );
}
