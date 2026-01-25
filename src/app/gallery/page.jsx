import SectionTitle from "@/components/SectionTitle";

export default function Gallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle title="Activity Gallery" subtitle="Dokumentasi kegiatan" />

      <div className="grid md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="h-40 bg-green-200 rounded-xl"></div>
        ))}
      </div>
    </section>
  );
}
