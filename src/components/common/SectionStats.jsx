export default function SectionStats({ stats = [] }) {
    return (
        <section className="pb-20 bg-background2">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx}>
                        <h3 className={`text-3xl font-heading font-bold ${stat.color || "text-primary-blue"}`}>
                            {stat.number}
                        </h3>
                        <p className="text-text-secondary font-body mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
