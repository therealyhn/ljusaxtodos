export default function AboutStats() {
  const stats = [
    { number: "500+", label: "Events Performed", color: "text-primary-blue" },
    { number: "15+", label: "Years Experience", color: "text-primary-cyan" },
    { number: "100+", label: "Original Edits", color: "text-primary-indigo" }, // možeš da uskladiš sa svojom paletom
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className={`text-3xl font-heading font-bold ${stat.color}`}>
              {stat.number}
            </h3>
            <p className="text-text-secondary font-body mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
