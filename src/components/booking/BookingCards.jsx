import { PartyPopper, Disc, Users2 } from "lucide-react";

const bookingOptions = [
    {
        icon: PartyPopper,
        title: "Private Party",
        price: "€700",
        duration: "3–5 hours",
        description: "Perfect for weddings, birthdays, and corporate celebrations.",
        features: [
            "Custom playlist curation",
            "Professional sound setup",
            "Lighting coordination",
        ],
        accent: "from-primary-indigo to-primary-cyan",
    },
    {
        icon: Disc,
        title: "Club / Bar Set",
        price: "€900",
        duration: "2–4 hours",
        description: "Elevate your nightlife event with high-energy beats and seamless transitions.",
        features: [
            "Pro DJ setup",
            "Live mix transitions",
            "Crowd interaction guaranteed",
        ],
        accent: "from-primary-cyan to-primary-blue",
    },
    {
        icon: Users2,
        title: "B2B Experience",
        price: "€1,200",
        duration: "3–6 hours",
        description: "Collaborative set combining the best of both DJs for a powerful back-to-back performance.",
        features: [
            "Dual DJ setup",
            "Extended set length",
            "Unforgettable synergy",
        ],
        accent: "from-primary-indigo to-primary-blue",
        tag: "Most Popular",
    },
];

export default function BookingCards({ onSelect }) {
    return (
        <section className="py-20 bg-background text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent">
                Choose Your Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {bookingOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => onSelect(option.title)}
                        className={`relative bg-background2 border border-transparent rounded-xl p-8 text-left cursor-pointer
            hover:border-primary-cyan/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300`}
                    >
                        {option.tag && (
                            <span className="absolute -top-3 right-4 bg-primary-blue text-white text-xs px-3 py-1 rounded-full font-medium">
                                {option.tag}
                            </span>
                        )}
                        <div
                            className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${option.accent} mb-6`}
                        >
                            <option.icon size={26} className="text-white" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                            {option.title}
                        </h3>
                        <p className="text-primary-cyan font-semibold mb-1">{option.price}</p>
                        <p className="text-sm text-text-secondary mb-4">
                            ⏱ {option.duration}
                        </p>
                        <p className="text-text-secondary mb-6">{option.description}</p>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            {option.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary-cyan"></span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
