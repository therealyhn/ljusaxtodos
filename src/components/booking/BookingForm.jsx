export default function BookingForm({ selectedService }) {
    return (
        <form className="bg-background2 p-8 rounded-xl max-w-3xl mx-auto mt-10 border border-primary-cyan/20">
            <h2 className="text-3xl font-heading mb-6 bg-gradient-primary bg-clip-text text-transparent text-center">
                Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name *" className="input" required />
                <input type="email" placeholder="Email *" className="input" required />
                <input type="tel" placeholder="Phone" className="input" />
                <input type="date" placeholder="Event Date *" className="input" required />
                <input type="text" placeholder="Event Type (e.g. Wedding, Club Night)" className="input" />
                <input type="text" placeholder="Expected Attendees" className="input" />
            </div>

            <input
                type="text"
                placeholder="Venue Location"
                className="input mt-6 w-full"
            />

            <textarea
                placeholder="Additional Details..."
                className="input mt-6 w-full h-28 resize-none"
            ></textarea>

            {/* New dropdown for DJ selection */}
            <div className="mt-6">
                <label className="block text-sm text-text-secondary mb-2">
                    Select Performer
                </label>
                <select className="w-full bg-background border border-primary-cyan/40 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-cyan/50">
                    <option>Ljusa</option>
                    <option>Todos</option>
                    <option>B2B (Ljusa & Todos)</option>
                </select>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
                <p className="text-sm text-text-secondary">
                    Selected service:{" "}
                    <span className="text-primary-cyan font-medium">
                        {selectedService || "None"}
                    </span>
                </p>
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-indigo to-primary-cyan text-white font-medium hover:opacity-90 transition"
                >
                    Send Booking Request
                </button>
            </div>
        </form>
    );
}
