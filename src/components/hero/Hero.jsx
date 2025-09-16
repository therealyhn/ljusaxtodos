import { Headphones, Music4 } from "lucide-react";
import heroImg from "../../assets/hero-bg.png";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate__animated animate__fadeInDown">
                    <span className="text-text-primary">LJUSA</span>
                    <span className="text-primary-indigo">x</span>
                    <span className="text-text-primary">TODOS</span>
                </h1>

                <p className="text-text-secondary font-body mb-8 animate__animated animate__fadeInUp">
                    Elevating nightlife with powerful beats and seamless transitions.
                    Experience the perfect fusion of individual artistry and collaborative
                    energy.
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4 animate__animated animate__fadeInUp animate__delay-1s">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-primary shadow-md hover:opacity-90 transition">
                        <Headphones size={18} /> Book a Set
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-black/70 border border-gray-600 hover:bg-black transition">
                        <Music4 size={18} /> Our Work
                    </button>
                </div>
            </div>
        </section>
    );
}
