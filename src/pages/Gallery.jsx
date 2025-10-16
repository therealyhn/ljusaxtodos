import Navbar from "../components/nav/Navbar";
import SectionHeader
 from "../components/common/SectionHeader";
export default function Gallery() {
    return (
        <div className="bg-background text-white">
            <Navbar />
            <SectionHeader
                title="Gallery"
                subtitle="Check out some of our previous work."
            />
        </div>
    )
}
