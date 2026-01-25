import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle
          title="Our Impact"
          subtitle="Dampak nyata untuk lingkungan"
        />

        <div className="grid md:grid-cols-4 gap-6">
          <StatCard value="120+" label="Campaign" />
          <StatCard value="5 Ton" label="Sampah Terkelola" />
          <StatCard value="60+" label="Partner" />
          <StatCard value="3.000+" label="Volunteers" />
        </div>
      </section>
    </>
  );
}
