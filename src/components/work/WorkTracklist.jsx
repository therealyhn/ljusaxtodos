export default function WorkTrackList({ tracks, currentIndex, onSelect }) {
  return (
    <div className="bg-background2 rounded-xl border border-primary-indigo/40 overflow-hidden">
      {/* Scrollable container */}
      <div className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-indigo/40 scrollbar-track-background/50">
        {tracks.map((track, index) => {
          const active = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className={`cursor-pointer px-6 py-3 flex justify-between items-center transition-colors duration-200 
                ${active 
                  ? "bg-primary-cyan/10 text-primary-cyan" 
                  : "hover:bg-background/60 hover:text-white"
                }`}
            >
              <span className="font-body truncate">{track.title}</span>
              <span className="text-sm text-text-secondary">{track.duration}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
