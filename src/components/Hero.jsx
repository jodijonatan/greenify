export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-200 to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Small steps,
            <br /> <span className="text-primary">big impact.</span>
          </h1>
          <p className="mt-6 text-lg">
            Greenify adalah startup yang fokus pada pengelolaan sampah digital,
            kampanye lingkungan, dan produk ramah lingkungan.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-xl shadow">
            Join Movement
          </button>
        </div>
        <div className="h-64 bg-green-300/40 rounded-3xl flex items-center justify-center">
          🌱 Ilustrasi
        </div>
      </div>
    </section>
  );
}
