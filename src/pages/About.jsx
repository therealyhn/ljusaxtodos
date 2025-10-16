import SectionHeader from "../components/common/SectionHeader";
import AboutCards from "../components/about/AboutCards";
import AboutStory from "../components/about/AboutStory";
import AboutStats from "../components/about/AboutStats";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

export default function About() {
    return (
        <div className="bg-background text-white">
            <Navbar />
            <SectionHeader
                title="About Us"
                subtitle="Two passionate artists united by a shared vision of transforming nightlife through innovative soundscapes." />
            <AboutCards />
            <AboutStory />
            <AboutStats />
            <Footer />
        </div>
    );
}
