// @ts-ignore
import MidiPlayer from "react-midi-player";
import { useState } from "react";
import random from "/src/assets/icons/random.png";



export default function RepeatCore() {
  function randomSampleFile() {
    return "/assets/audio/samples/" + Math.floor(Math.random() * 270) + ".mp3";
  }
  const [sampleFile, setSampleFile] = useState(randomSampleFile);

    return (
      <>
        <div className="player">
          <a href={void 0} onClick={() => setSampleFile(randomSampleFile())}>
            <img src={random} alt="random sample" />
          </a>
          <audio src={sampleFile} controls></audio>
        </div>
      </>
    );
}
