export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="mt-2 text-gray-600">{subtitle}</p>
    </div>
  );
}
