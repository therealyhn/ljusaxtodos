import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function WorkPlayer({ track, onNext, onPrev }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-background2 rounded-xl p-6 shadow-lg text-center border border-primary-cyan/30">
      <h3 className="text-xl font-heading text-primary-cyan mb-2">{track.title}</h3>
      <p className="text-text-secondary mb-4">{track.artist}</p>

      <div className="flex items-center justify-center gap-6 mb-4">
        <button onClick={onPrev}><SkipBack /></button>
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-gradient-to-r from-primary-indigo to-primary-cyan hover:opacity-90 transition"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button onClick={onNext}><SkipForward /></button>
      </div>

      <audio ref={audioRef} src={track.src} preload="none" />

      <div className="flex justify-center items-center gap-4 text-sm text-text-secondary mt-2">
        <Volume2 size={16} /> {track.duration}
      </div>
    </div>
  );
}
