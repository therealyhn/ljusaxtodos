import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import WorkContainer from "../components/work/WorkContainer";
import Footer from "../components/footer/Footer";

export default function OurWork() {

    const workParagraph = [
        "We're constantly creating new music and exploring fresh sounds.",
        "Stay tuned for upcoming releases and exclusive edits."
    ];

    const workStats = [
        { number: "1000+", label: "Events Captured", color: "text-primary-blue" },
        { number: "100+", label: "Venues Visited", color: "text-primary-cyan" },
        { number: "500+", label: "Photos Taken", color: "text-primary-indigo" },
    ];

    return (
        <div className="bg-background text-white min-h-screen flex flex-col">
            <Navbar />
            <SectionHeader
                title="Our Work"
                subtitle="Explore our collection of original edits, mashups, and collaborations — each track represents our signature sound."
            />
            <WorkContainer />
            <SectionStory title="Capture the Moment" paragraphs={workParagraph} />
            <SectionStats stats={workStats} />
            <Footer />
        </div>
    );
}
