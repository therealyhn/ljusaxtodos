import { useState } from "react";
import WorkPlayer from "./WorkPlayer";
import WorkTrackList from "./WorkTracklist";
import tracksData from "../../data/tracksData";

export default function WorkContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = tracksData[currentIndex];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
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
    </section>
  );
}
