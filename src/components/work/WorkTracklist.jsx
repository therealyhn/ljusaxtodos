export default function WorkTrackList({ tracks, currentIndex, onSelect }) {
  return (
    <div className="bg-background2 rounded-2xl border border-primary-indigo/40 overflow-hidden">
      <div className="max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-cyan/40 scrollbar-track-background/50">
        {tracks.map((track, index) => {
          const active = index === currentIndex;
          return (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className={`cursor-pointer px-8 py-4 flex justify-between items-center text-sm transition-colors duration-200 
                ${active 
                  ? "bg-primary-cyan/10 text-primary-cyan" 
                  : "hover:bg-background/60 hover:text-white"
                }`}
            >
              <span className="font-body truncate">{track.title}  ({track.artist})</span>
              <span className="text-xs text-text-secondary">{track.duration}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
