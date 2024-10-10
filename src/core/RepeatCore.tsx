// @ts-ignore
import MidiPlayer from "react-midi-player";
import { useState } from "react";
import random from "/src/assets/icons/random.png";

interface Props {
  level: number;
}

export default function RepeatCore(props: Props) {
  function randomMidiFile() {
    return "/assets/audio/midi/" + Math.floor(Math.random() * 171) + ".mid";
  }
  function randomSampleFile() {
    return "/assets/audio/samples/" + Math.floor(Math.random() * 113) + ".mp3";
  }
  const [midiFile, setMidiFile] = useState(randomMidiFile);
  const [sampleFile, setSampleFile] = useState(randomSampleFile);

  if (props.level === 2) {
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
  } else {
    return (
      <>
        <div className="player">
          <a href={void 0} onClick={() => setMidiFile(randomMidiFile())}>
            <img src={random} alt="random midi" />
          </a>
          <MidiPlayer src={midiFile} />
        </div>
      </>
    );
  }
}
