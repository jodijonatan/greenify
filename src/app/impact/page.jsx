import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";

export default function Impact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle title="Impact Statistics" subtitle="Data dan pencapaian" />

      <div className="grid md:grid-cols-3 gap-6">
        <StatCard value="5 Ton" label="Waste Managed" />
        <StatCard value="120+" label="Campaign Held" />
        <StatCard value="60+" label="Eco Partners" />
      </div>
    </section>
  );
}
