import { useState } from "react";

export default function BookingForm({ selectedService }) {
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                ...formData,
                selectedService,
            }),
        });

        const result = await response.json();
        if (result.success) {
            setStatus("Message sent successfully ✅");
            e.target.reset();
        } else setStatus("Something went wrong ❌");
    };

    return (
        <section className="py-20 bg-background2">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 bg-gradient-primary bg-clip-text text-transparent">
                    Get in Touch
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-black/40 backdrop-blur-md border border-primary-cyan/30 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                >
                    {/* Grid Inputs */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="Full Name *"
                            className="input-field"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email *"
                            className="input-field"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            placeholder="Phone"
                            className="input-field"
                        />
                        <input
                            type="date"
                            name="eventDate"
                            onChange={handleChange}
                            placeholder="Event Date *"
                            className="input-field"
                            required
                        />
                        <input
                            type="text"
                            name="eventType"
                            onChange={handleChange}
                            placeholder="Event Type (e.g. Wedding, Club Night)"
                            className="input-field"
                        />
                        <input
                            type="text"
                            name="attendees"
                            onChange={handleChange}
                            placeholder="Expected Attendees"
                            className="input-field"
                        />
                    </div>

                    {/* Full width inputs */}
                    <input
                        type="text"
                        name="location"
                        onChange={handleChange}
                        placeholder="Venue Location"
                        className="input-field mt-6 w-full"
                    />

                    <textarea
                        name="details"
                        onChange={handleChange}
                        placeholder="Additional Details..."
                        className="input-field mt-6 w-full h-28 resize-none"
                    ></textarea>

                    {/* Performer Selector */}
                    <div className="mt-6">
                        <label className="block text-sm text-text-secondary mb-2">
                            Select Performer
                        </label>
                        <select
                            name="performer"
                            onChange={handleChange}
                            className="bg-black/40 text-white border border-primary-cyan/40 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary-cyan/70 transition-all"
                        >
                            <option value="Ljusa">Ljusa</option>
                            <option value="Todos">Todos</option>
                            <option value="B2B">B2B (Ljusa & Todos)</option>
                        </select>
                    </div>

                    {/* Submit */}
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
                        {status && (
                            <p className="text-sm text-text-secondary mt-2">{status}</p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
