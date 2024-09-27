import { useState } from "react";
import { randomBackingTrack } from "../core/ImprovisationCore";
import random from "/src/assets/icons/random.png";
import "/src/assets/style/improvisation.css";

export default function Improvisation() {
  const [backingTrack, setBackingTrack] = useState(randomBackingTrack());
  return (
    <>
      <div id="improvisation">
        <h1>Improvisation</h1>
        <div className="module">
          <a
            href={void 0}
            onClick={() => setBackingTrack(randomBackingTrack())}
          >
            <img src={random} alt="random backing track" />
          </a>
          <audio controls src={backingTrack} />
        </div>
      </div>
    </>
  );
}
