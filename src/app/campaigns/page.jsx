import SectionTitle from "@/components/SectionTitle";
import { Calendar, Users, ArrowUpRight, Clock } from "lucide-react";

export default function Campaigns() {
  const campaigns = [
    {
      title: "Digital Detox 2026",
      category: "Digital Waste",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      participants: "1,240",
      daysLeft: "12",
      progress: 75,
    },
    {
      title: "Mangrove for Data Center",
      category: "Carbon Offset",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1544333346-64e4fe186060?auto=format&fit=crop&q=80&w=600",
      participants: "850",
      daysLeft: "5",
      progress: 40,
    },
    {
      title: "Zero Plastic Office",
      category: "Physical Waste",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600",
      participants: "0",
      daysLeft: "20",
      progress: 0,
    },
  ];

  return (
    <section className="bg-slate-50/50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            tag="Active Movements"
            title="Kampanye Pilihan"
            subtitle="Pilih gerakan yang sesuai dengan passion-mu dan mulai beraksi."
            align="left"
          />
          <div className="flex gap-3 pb-4">
            {["All", "Digital", "Physical"].map((tab) => (
              <button
                key={tab}
                className="px-5 py-2 rounded-full text-sm font-bold bg-white border border-slate-200 hover:border-green-500 hover:text-green-600 transition-all shadow-sm"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {campaigns.map((camp, i) => (
            <div
              key={i}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border ${
                      camp.status === "Active"
                        ? "bg-green-500/80 text-white border-green-400"
                        : "bg-slate-900/80 text-white border-slate-700"
                    }`}
                  >
                    {camp.status}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-3">
                  {camp.category}
                </p>
                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-green-600 transition-colors">
                  {camp.title}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                    <span>Target Achievement</span>
                    <span>{camp.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full transition-all duration-1000"
                      style={{ width: `${camp.progress}%` }}
                    />
                  </div>
                </div>

                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mb-8 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      {camp.participants}
                    </span>
                    <span className="text-xs">Joined</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">
                      {camp.daysLeft}
                    </span>
                    <span className="text-xs">Days Left</span>
                  </div>
                </div>

                <button className="w-full group/btn flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-green-600 transition-all active:scale-95">
                  Ikuti Campaign{" "}
                  <ArrowUpRight
                    size={18}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
