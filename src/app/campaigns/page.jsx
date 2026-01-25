import SectionTitle from "@/components/SectionTitle";

export default function Campaigns() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle title="Campaign" subtitle="Aksi nyata untuk bumi" />

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-56 bg-green-200 rounded-2xl flex items-center justify-center"
          >
            Campaign {i}
          </div>
        ))}
      </div>
    </section>
  );
}
