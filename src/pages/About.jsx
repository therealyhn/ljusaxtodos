import SectionHeader from "../components/common/SectionHeader";
import AboutCards from "../components/about/AboutCards";
import SectionStats from "../components/common/SectionStats";
import SectionStory from "../components/common/SectionStory";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

export default function About() {

    const storyParagraphs = [
        "Ljusa & Todos first crossed paths in Stockholm's underground music scene in 2019. What started as a chance meeting at a local warehouse party evolved into a creative partnership that has redefined collaborative DJing.",
        "Our back-to-back sets are more than just two DJs playing together—they're conversations in sound, where melodic progressions meet industrial beats, creating something entirely new.",
        "Whether performing solo or together, we're committed to pushing boundaries and creating experiences that resonate long after the music stops.",
    ];

    const aboutStats = [
        { number: "2000+", label: "Events Performed", color: "text-primary-blue" },
        { number: "15+", label: "Years Experience", color: "text-primary-cyan" },
        { number: "100+", label: "Original Edits", color: "text-primary-indigo" },
    ];
    return (
        <div className="bg-background text-white">
            <Navbar />
            <SectionHeader
                title="About Us"
                subtitle="Two passionate artists united by a shared vision of transforming nightlife through innovative soundscapes." />
            <AboutCards />
            <SectionStory title="Our Story" paragraphs={storyParagraphs} />
            <SectionStats stats={aboutStats} />
            <Footer />
        </div>
    );
}
