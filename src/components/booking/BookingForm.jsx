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
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                ...formData,
                selectedService,
            }),
        });

        const result = await response.json();

        if (result.success) {
            setStatus("Message sent successfully ✅");
            setFormData({});
            e.target.reset();
        } else {
            setStatus("Something went wrong ❌");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-background2 p-8 rounded-xl max-w-3xl mx-auto mt-10 border border-primary-cyan/20"
        >
            <h2 className="text-3xl font-heading mb-6 bg-gradient-primary bg-clip-text text-transparent text-center">
                Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email *"
                    className="input"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone"
                    className="input"
                />
                <input
                    type="date"
                    name="eventDate"
                    onChange={handleChange}
                    placeholder="Event Date *"
                    className="input"
                    required
                />
                <input
                    type="text"
                    name="eventType"
                    onChange={handleChange}
                    placeholder="Event Type (e.g. Wedding, Club Night)"
                    className="input"
                />
                <input
                    type="text"
                    name="attendees"
                    onChange={handleChange}
                    placeholder="Expected Attendees"
                    className="input"
                />
            </div>

            <input
                type="text"
                name="location"
                onChange={handleChange}
                placeholder="Venue Location"
                className="input mt-6 w-full"
            />

            <textarea
                name="details"
                onChange={handleChange}
                placeholder="Additional Details..."
                className="input mt-6 w-full h-28 resize-none"
            ></textarea>

            <div className="mt-6">
                <label className="block text-sm text-text-secondary mb-2">
                    Select Performer
                </label>
                <select
                    name="performer"
                    onChange={handleChange}
                    className="w-full bg-background border border-primary-cyan/40 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-cyan/50"
                >
                    <option value="Ljusa">Ljusa</option>
                    <option value="Todos">Todos</option>
                    <option value="B2B">B2B (Ljusa & Todos)</option>
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
                {status && (
                    <p className="text-sm text-text-secondary mt-2">{status}</p>
                )}
            </div>
        </form>
    );
}
