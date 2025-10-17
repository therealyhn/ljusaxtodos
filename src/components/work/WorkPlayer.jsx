import { Play, Pause, SkipBack, SkipForward, Share2, Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function WorkPlayer({ track, onNext, onPrev }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Format vremena mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setCurrentTime(audio.currentTime);
    };

    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    setProgress(0);
    setIsPlaying(false);
    setCurrentTime(0);
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

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handleEnded = () => onNext();

  return (
    <div className="bg-background2 rounded-2xl p-8 shadow-lg border border-primary-cyan/30 w-full">
      {/* Gornji red: info - kontrole - dugmad */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">

        {/* LEVO - Track Info */}
        <div className="text-left w-full md:w-1/3">
          <h3 className="text-2xl font-heading text-primary-cyan mb-1 truncate">
            {track.title}
          </h3>
          <p className="text-text-secondary text-sm">{track.artist}</p>
        </div>

        {/* CENTAR - Kontrole */}
        <div className="flex items-center justify-center gap-8">
          <button onClick={onPrev} className="hover:text-primary-cyan transition">
            <SkipBack />
          </button>
          <button
            onClick={togglePlay}
            className="p-5 rounded-full bg-gradient-to-r from-primary-indigo to-primary-cyan hover:opacity-90 transition shadow-md"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={onNext} className="hover:text-primary-cyan transition">
            <SkipForward />
          </button>
        </div>

        {/* DESNO - Dugmad */}
        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-1/3">
          <button
            onClick={() => window.open(track.src, "_blank")}
            className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary-indigo to-primary-cyan shadow-md hover:opacity-90 transition w-40 justify-center"
          >
            <Download size={24} /> Download
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="relative w-full h-2 bg-gray-700 rounded-full cursor-pointer mb-3"
        onClick={handleSeek}
      >
        <div
          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary-indigo to-primary-cyan"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Vreme */}
      <div className="flex justify-between text-sm text-text-secondary font-body">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <audio ref={audioRef} src={track.src} onEnded={handleEnded} preload="metadata" />
    </div>
  );
}
