import SectionTitle from "@/components/SectionTitle";

export default function Partners() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle title="Our Partners" subtitle="Kolaborasi hijau" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-24 bg-white rounded-xl shadow flex items-center justify-center"
          >
            Partner {i}
          </div>
        ))}
      </div>
    </section>
  );
}
