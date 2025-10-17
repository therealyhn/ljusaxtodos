import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function WorkPlayer({ track, onNext, onPrev }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    // Reset progress kad promeniš pesmu
    setProgress(0);
    setIsPlaying(false);
    audio.pause();
    audio.currentTime = 0;

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [track]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  // klik na progress bar
  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="bg-background2 rounded-xl p-6 shadow-lg text-center border border-primary-cyan/30">
      <h3 className="text-xl font-heading text-primary-cyan mb-2">{track.title}</h3>
      <p className="text-text-secondary mb-4">{track.artist}</p>

      {/* Kontrole */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <button onClick={onPrev} className="hover:text-primary-cyan transition">
          <SkipBack />
        </button>
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-gradient-to-r from-primary-indigo to-primary-cyan hover:opacity-90 transition"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button onClick={onNext} className="hover:text-primary-cyan transition">
          <SkipForward />
        </button>
      </div>

      {/* Progress bar */}
      <div
        className="relative w-full h-2 bg-gray-700 rounded-full cursor-pointer mb-4"
        onClick={handleSeek}
      >
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary-indigo to-primary-cyan"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <audio ref={audioRef} src={track.src} preload="none" />

      {/* Info */}
      <div className="flex justify-center items-center gap-4 text-sm text-text-secondary mt-2">
        <Volume2 size={16} /> {track.duration}
      </div>
    </div>
  );
}
