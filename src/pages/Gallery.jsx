import { useMemo, useState } from "react";
import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import GalleryFilters from "../components/gallery/GalleryFilters";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryModal from "../components/gallery/GalleryModal";
import SectionStats from "../components/common/SectionStats";
import SectionStory from "../components/common/SectionStory";
import Footer from "../components/footer/Footer";

import PlaceHolder1 from "../assets/7.jpg";
import PlaceHolder2 from "../assets/9.jpg";
import Img3 from "../assets/4.jpg";
import Img4 from "../assets/5.jpg";
import Img5 from "../assets/8.jpg";

const ALL_PHOTOS = [
    { id: 1, src: PlaceHolder1, title: "Solo Performance", tag: "studio" },
    { id: 2, src: PlaceHolder2, title: "B2B Energy", tag: "b2b" },
    { id: 3, src: Img3, title: "In the Zone", tag: "studio" },
    { id: 4, src: Img4, title: "Crowd Control", tag: "b2b" },
    { id: 5, src: Img5, title: "Studio Lights", tag: "studio" },
    { id: 6, src: PlaceHolder2, title: "Back to Back", tag: "b2b" },
    { id: 7, src: PlaceHolder1, title: "studio Session", tag: "studio" },
    { id: 8, src: PlaceHolder2, title: "Festival Night", tag: "b2b" },
    { id: 9, src: PlaceHolder1, title: "studio Studio", tag: "studio" },
];

export default function Gallery() {
    const [filter, setFilter] = useState("all");
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const filtered = useMemo(() => {
        if (filter === "all") return ALL_PHOTOS;
        return ALL_PHOTOS.filter((p) => p.tag === filter);
    }, [filter]);

    const visiblePhotos = showAll ? filtered : filtered.slice(0, 6);

    const galleryParagraphs = [
        "Every image tells a story of our musical journey.",
        "From intimate studio sessions to energetic festival performances, these moments capture the essence of our passion for electronic music and collaborative artistry.",
    ];

    const galleryStats = [
        { number: "1000+", label: "Events Captured", color: "text-primary-blue" },
        { number: "100+", label: "Venues Visited", color: "text-primary-cyan" },
        { number: "500+", label: "Photos Taken", color: "text-primary-indigo" },
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <Navbar />
            <SectionHeader
                title="Gallery"
                subtitle="Check out some of our favorite sets!"
            />
            <GalleryFilters active={filter} onChange={setFilter} />
            <GalleryGrid photos={visiblePhotos} onOpen={(i) => setOpenIndex(i)} />

            {/* Show More / Show Less */}
            {filtered.length > 6 && (
                <div className="flex justify-center pb-16">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-primary shadow-md hover:opacity-90 transition"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
            <SectionStory title="Capture the Moment" paragraphs={galleryParagraphs} />
            <SectionStats stats={galleryStats} />
            <Footer />

            {/* Modal */}
            {openIndex !== null && (
                <GalleryModal
                    photos={visiblePhotos}
                    index={openIndex}
                    setIndex={setOpenIndex}
                    onClose={() => setOpenIndex(null)}
                />
            )}
        </div>
    );
}
