// @ts-ignore
import MidiPlayer from "react-midi-player";
import { useState } from "react";
import '/src/assets/style/repeat.css';
import random from "/src/assets/icons/random.png";

export default function Repeat() {
  function randomMidiFile() {
    return "/assets/audio/midi/" + Math.floor(Math.random() * 102) + ".mid";
  }
  const [midiFile, setMidiFile] = useState(randomMidiFile);

  return (
    <>
      <div id="repeat">
        <h1>Repeat</h1>
        <a href={void(0)} onClick={()=>setMidiFile(randomMidiFile())}>
          <img src={random} alt="random score" />
        </a>
        <MidiPlayer src={midiFile} />
      </div>
    </>
  );
}
