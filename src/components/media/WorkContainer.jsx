import { useState } from "react";
import WorkPlayer from "./WorkPlayer";
import WorkTrackList from "./WorkTracklist";
import tracksData from "../../data/tracksData";

export default function WorkContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracksData[currentIndex];

  return (
    <section className="flex flex-col items-center justify-center py-12 px-6  bg-background">
      <div className="w-full max-w-5xl flex flex-col gap-10">
        <WorkPlayer
          track={currentTrack}
          onNext={() => setCurrentIndex((i) => (i + 1) % tracksData.length)}
          onPrev={() => setCurrentIndex((i) => (i - 1 + tracksData.length) % tracksData.length)}
        />
        <WorkTrackList
          tracks={tracksData}
          currentIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
        />
      </div>
    </section>
  );
}
