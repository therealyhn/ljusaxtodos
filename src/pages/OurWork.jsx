import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import SectionStory from "../components/common/SectionStory";
import WorkContainer from "../components/work/WorkContainer";
import Footer from "../components/footer/Footer";
import { Headphones } from "lucide-react";

export default function OurWork() {

    const workParagraph = [
        "We're constantly creating new music and exploring fresh sounds.",
        "Stay tuned for upcoming releases and exclusive edits."
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
            
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-primary shadow-md hover:opacity-90 transition">
                <Headphones size={18} /> Book a Set
            </button>
            
            <Footer />
        </div>
    );
}
