export default function GalleryItem({ photo, index, onOpen }) {
    return (
        <button
            onClick={() => onOpen(index)}
            className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 focus:outline-none focus:ring-2 focus:ring-primary-cyan
                 animate-fadeInScale transition-all duration-300 hover:border-primary-cyan hover:shadow-primary-indigo hover:shadow-lg"
            aria-label={photo.title}
        >
            <img
                src={photo.src}
                alt={photo.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-hover:ring-2 group-hover:ring-primary-cyan/70" />

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition p-3 z-10">
                <div className="inline-block rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                    {photo.title}
                </div>
            </div>
        </button>
    );
}
