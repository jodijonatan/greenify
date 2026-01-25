import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <SectionTitle title="Our Services" subtitle="Apa yang kami lakukan" />

      <div className="grid md:grid-cols-3 gap-6">
        {["Digital Waste", "Eco Campaign", "Eco Products"].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-primary">{item}</h3>
            <p className="mt-2 text-gray-600">
              Deskripsi singkat layanan Greenify.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
