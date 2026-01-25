import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <SectionTitle
        title="About Our Movement"
        subtitle="Cerita di balik Greenify"
      />
      <p className="text-center text-lg">
        Greenify lahir sebagai gerakan digital untuk membantu mengurangi dampak
        sampah dan meningkatkan kesadaran lingkungan.
      </p>
    </section>
  );
}
