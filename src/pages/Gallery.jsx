import { useMemo, useState } from "react";
import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import GalleryFilters from "../components/gallery/GalleryFilters";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryModal from "../components/gallery/GalleryModal";
import PlaceHolder1 from "../assets/solo.png";
import PlaceHolder2 from "../assets/hero-bg.png";
import Footer from "../components/footer/Footer";

// Primer podataka: zameni putanje ka svojim slikama iz /assets ili /public
const ALL_PHOTOS = [
    { id: 1, src: PlaceHolder1, title: "Solo Performance", tag: "solo" },
    { id: 2, src: PlaceHolder2, title: "B2B Energy", tag: "b2b" },
    { id: 3, src: PlaceHolder1, title: "In the Zone", tag: "solo" },
    { id: 4, src: PlaceHolder2, title: "Crowd Control", tag: "b2b" },
    { id: 5, src: PlaceHolder1, title: "Studio Lights", tag: "solo" },
    { id: 6, src: PlaceHolder2, title: "Back to Back", tag: "b2b" },
    { id: 7, src: PlaceHolder1, title: "Solo Performance", tag: "solo" },
    { id: 8, src: PlaceHolder2, title: "Back to Back", tag: "b2b" },
    { id: 9, src: PlaceHolder1, title: "Solo Performance", tag: "solo" },
];

export default function Gallery() {
    const [filter, setFilter] = useState("all");
    const [openIndex, setOpenIndex] = useState(null);

    const filtered = useMemo(() => {
        if (filter === "all") return ALL_PHOTOS;
        return ALL_PHOTOS.filter(p => p.tag === filter);
    }, [filter]);

    return (
        <div className="bg-background text-white min-h-screen">
            <Navbar />
            <SectionHeader
                title="Gallery"
                subtitle="Check out some of our favorite sets!" />
            <GalleryFilters active={filter} onChange={setFilter} />
            <GalleryGrid
                photos={filtered}
                onOpen={(i) => setOpenIndex(i)}
            />
            <Footer />

            {openIndex !== null && (
                <GalleryModal
                    photos={filtered}
                    index={openIndex}
                    setIndex={setOpenIndex}
                    onClose={() => setOpenIndex(null)}
                />
            )}
        </div>
    );
}
