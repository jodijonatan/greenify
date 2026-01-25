import SectionTitle from "@/components/SectionTitle";
import { Camera, MapPin, Maximize2 } from "lucide-react";

export default function Gallery() {
  const photos = [
    {
      id: 1,
      title: "Mangrove Planting",
      loc: "Surabaya",
      size: "md:col-span-2 md:row-span-2",
      img: "https://images.unsplash.com/photo-1584564504443-6902488a666e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Digital Waste Workshop",
      loc: "Jakarta",
      size: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 3,
      title: "Beach Cleanup",
      loc: "Bali",
      size: "md:col-span-1 md:row-span-2",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 4,
      title: "Eco-Tech Seminar",
      loc: "Bandung",
      size: "md:col-span-1 md:row-span-1",
      img: "https://images.unsplash.com/photo-1591115765373-520b7a21769b?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 5,
      title: "Community Recycling",
      loc: "Yogyakarta",
      size: "md:col-span-2 md:row-span-1",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            tag="Visual Journey"
            title="Langkah Nyata Kami"
            subtitle="Setiap foto bercerita tentang dedikasi komunitas Greenify untuk bumi yang lebih baik."
            align="left"
          />
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 mb-4">
            <Camera size={16} className="text-green-600" />
            <span className="text-sm font-bold text-green-700 italic">
              250+ Moments Captured
            </span>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {photos.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${item.size}`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-bold tracking-widest uppercase">
                    {item.loc}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-green-500 transition-colors">
                    <Maximize2 size={18} />
                  </span>
                  <span className="text-[10px] text-white/50 font-medium">
                    VIEW DETAILS
                  </span>
                </div>
              </div>

              {/* Border Decor on Hover */}
              <div className="absolute inset-4 border border-white/20 rounded-[1.5rem] pointer-events-none scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Action Bottom */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-700 hover:border-green-500 hover:text-green-600 transition-all shadow-sm">
            Load More Memories
          </button>
        </div>
      </div>
    </section>
  );
}
