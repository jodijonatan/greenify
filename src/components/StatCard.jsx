import React from "react";
import * as LucideIcons from "lucide-react";

export default function StatCard({
  value,
  label,
  iconName,
  description,
  trend,
}) {
  // Dinamis mengambil ikon dari Lucide berdasarkan nama string
  const Icon = LucideIcons[iconName] || LucideIcons.BarChart3;

  return (
    <div className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden">
      {/* Dekorasi Background - Muncul saat Hover */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />

      <div className="relative z-10">
        {/* Header Card: Icon & Trend */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-green-600 rounded-2xl text-white shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform">
            <Icon size={24} />
          </div>

          {trend && (
            <span className="flex items-center gap-1 text-[10px] font-bold py-1 px-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <LucideIcons.TrendingUp size={12} />
              {trend}
            </span>
          )}
        </div>

        {/* Value & Label */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            <h3 className="text-4xl font-black text-slate-900 tracking-tight tracking-tight group-hover:text-green-700 transition-colors">
              {value}
            </h3>
            <span className="text-green-500 font-bold text-xl">+</span>
          </div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            {label}
          </p>
        </div>

        {/* Deskripsi Tambahan - Memberikan Konteks Profesional */}
        <p className="mt-4 text-sm text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>

      {/* Watermark Icon di Background */}
      <Icon
        size={120}
        className="absolute -bottom-8 -right-8 text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] group-hover:-rotate-12 transition-all duration-700"
      />
    </div>
  );
}
