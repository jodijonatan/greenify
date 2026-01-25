import React from "react";
import { Play, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Ornaments - Memberikan kesan "Ilustratif" */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-green-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              #1 Digital Sustainability Platform
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
            Small steps, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Big impact.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
            Greenify bukan sekadar platform. Kami adalah jembatan antara
            teknologi masa kini dan kelestarian masa depan melalui{" "}
            <span className="font-semibold text-green-700">
              Digital Waste Management
            </span>
            .
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-200 transition-all hover:-translate-y-1 flex items-center gap-2">
              Mulai Gerakan <Play size={18} fill="currentColor" />
            </button>
            <button className="bg-white border-2 border-slate-100 hover:border-green-200 text-slate-700 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
              Lihat Campaign
            </button>
          </div>

          {/* Social Proof / Stats Kecil */}
          <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">12K+</p>
              <p className="text-sm text-slate-500 font-medium">Eco Warriors</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">450t</p>
              <p className="text-sm text-slate-500 font-medium">CO2 Reduced</p>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Ilustratif & Infografis */}
        <div className="order-1 lg:order-2 relative">
          {/* Main Visual Container */}
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center group">
            {/* Mockup / Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-20" />
            <Globe className="w-48 h-48 text-white/90 animate-pulse-slow" />

            {/* Info Cards - Floating Animation */}
            <div className="absolute top-10 -left-8 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold">
                  Energy Saved
                </p>
                <p className="text-sm font-bold text-slate-800">1.2 GWh</p>
              </div>
            </div>

            <div className="absolute bottom-12 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-float flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <ShieldCheck size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-slate-400 font-bold">
                  Data Cleaned
                </p>
                <p className="text-sm font-bold text-slate-800">85 Terabytes</p>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply opacity-70 animate-blob" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        </div>
      </div>
    </section>
  );
}
