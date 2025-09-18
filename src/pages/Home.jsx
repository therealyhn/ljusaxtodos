import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import PerformanceStyles from "../components/performance/PerformanceStyles";
import CTA from "../components/cta/CTA";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <div className="bg-background text-white">
            <Navbar />
            <main>
                <Hero />
                <PerformanceStyles />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
