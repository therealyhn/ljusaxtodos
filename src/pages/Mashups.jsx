import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import WorkContainer from "../components/media/WorkContainer";

export default function OurWork() {
    return (
        <div className="bg-background text-white min-h-screen flex flex-col">
            <Navbar />
            <SectionHeader
                title="Our Work"
                subtitle="Explore our collection of original edits, mashups, and collaborations — each track represents our signature sound."
            />
            <WorkContainer />
        </div>
    );
}
