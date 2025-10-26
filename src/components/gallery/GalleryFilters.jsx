import { Filter } from "lucide-react";

export default function GalleryFilters({ active, onChange }) {
    const filters = [
        { key: "all", label: "All" },
        { key: "solo", label: "Solo Sets" },
        { key: "b2b", label: "B2B Sets" },
        { key: "studio", label: "Studio Sessions" },
        { key: "videos", label: "Videos" },
    ];

    return (
        <div className="sticky top-[64px] z-40 bg-background/70 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 py-4">
                    <Filter className="text-text-secondary" size={18} />
                    <div className="flex flex-wrap gap-3">
                        {filters.map(f => (
                            <button
                                key={f.key}
                                onClick={() => onChange(f.key)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition
                ${active === f.key
                                        ? "text-white bg-gradient-primary"
                                        : "text-text-secondary bg-gray-900 hover:text-white border border-gray-800"}`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
