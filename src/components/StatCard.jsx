export default function StatCard({ value, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <h3 className="text-4xl font-bold text-primary">{value}</h3>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}
