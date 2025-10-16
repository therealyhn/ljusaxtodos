import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function GalleryModal({ photos, index, onClose, setIndex }) {
    const photo = photos[index];

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") setIndex((index + 1) % photos.length);
            if (e.key === "ArrowLeft") setIndex((index - 1 + photos.length) % photos.length);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index, photos.length, onClose, setIndex]);

    return (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/90 hover:text-white"
                aria-label="Close"
            >
                <X size={24} />
            </button>

            {/* Prev */}
            <button
                onClick={() => setIndex((index - 1 + photos.length) % photos.length)}
                className="absolute left-2 md:left-6 text-white/80 hover:text-white"
                aria-label="Previous"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Next */}
            <button
                onClick={() => setIndex((index + 1) % photos.length)}
                className="absolute right-2 md:right-6 text-white/80 hover:text-white"
                aria-label="Next"
            >
                <ChevronRight size={28} />
            </button>

            {/* Content */}
            <div className="max-w-4xl w-full">
                <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full max-h-[70vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
                />
                <div className="mt-4 text-center">
                    <h3 className="font-heading text-white">{photo.title}</h3>
                    <div className="mt-2 inline-block rounded-md bg-gray-900 border border-gray-800 px-2 py-1 text-xs text-text-secondary">
                        {photo.tag === "solo" ? "Solo" : "B2B"}
                    </div>
                    <p className="mt-2 text-text-secondary text-xs">
                        {index + 1} of {photos.length}
                    </p>
                </div>
            </div>
        </div>
    );
}
