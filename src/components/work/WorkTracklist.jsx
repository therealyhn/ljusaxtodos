import { FixedSizeList as List } from "react-window";

export default function WorkTrackList({ tracks, currentIndex, onSelect }) {
  return (
    <div className="bg-background2 rounded-xl border border-primary-indigo/40 overflow-hidden">
      <div className="max-h-[400px] overflow-y-auto">
        <List
          height={400}
          itemCount={tracks.length}
          itemSize={50}
          width="100%"
        >
          {({ index, style }) => {
            const track = tracks[index];
            const active = index === currentIndex;
            return (
              <div
                style={style}
                onClick={() => onSelect(index)}
                className={`cursor-pointer px-6 py-3 flex justify-between items-center transition 
                  ${active ? "bg-primary-cyan/10 text-primary-cyan" : "hover:bg-background/60"}`}
              >
                <span>{track.title}</span>
                <span className="text-sm text-text-secondary">{track.duration}</span>
              </div>
            );
          }}
        </List>
      </div>
    </div>
  );
}
