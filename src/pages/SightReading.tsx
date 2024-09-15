import { useState } from "react";
import { randomScoreURL } from "./core/SightReadingCore";
export default function SightReading() {
  const [score, setScore] = useState(randomScoreURL());
  return (
    <>
      <h1>Sight reading</h1>
      <button type="button" onClick={() => setScore(randomScoreURL())}>
        rnd
      </button>
      <iframe src={score} id="iframeScore"></iframe>
    </>
  );
}