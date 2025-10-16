export default function CTA() {
    return (
        <section className="relative py-20 bg-gradient-primary text-center text-white">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-heading mb-6">
                    Ready to Elevate Your Event?
                </h2>
                <p className="text-lg font-body mb-8 text-white/90">
                    Book us for unforgettable solo or back-to-back performances that will keep the crowd moving all night long.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/booking" className="px-6 py-3 rounded-lg font-medium bg-black/70 border border-white hover:bg-black transition">
                        Booking
                    </a>
                    <a href="/ourwork" className="px-6 py-3 rounded-lg font-medium bg-white text-background hover:opacity-90 transition">
                        Listen to Our Work
                    </a>
                </div>
            </div>
        </section>
    );
}
