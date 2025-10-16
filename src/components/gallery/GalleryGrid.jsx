import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ photos, onOpen }) {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((p, i) => (
                    <GalleryItem key={p.id} photo={p} index={i} onOpen={onOpen} />
                ))}
            </div>
        </div>
    );
}
