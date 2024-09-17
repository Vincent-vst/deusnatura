import { useState } from "react";
import { randomBackingTrack } from "./core/ImprovisationCore";

export default function Improvisation() {
  const [backingTrack, setBackingTrack] = useState(randomBackingTrack());
  return (
    <>
      <h1>Improvisation</h1>
      <button
        type="button"
        onClick={() => setBackingTrack(randomBackingTrack())}
      >
        rnd
      </button>
      <audio controls src={backingTrack} />
    </>
  );
}
