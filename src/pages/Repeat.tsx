import MidiPlayer from "react-midi-player";
import { useState } from "react";

export default function Repeat() {
  function randomMidiFile() {
    return "/src/assets/audio/midi/" + Math.floor(Math.random() * 102) + ".mid";
  }
  const [midiFile, setMidiFile] = useState(randomMidiFile);

  return (
    <>
      <h1>Repeat</h1>
      <button type="button" onClick={() => setMidiFile(randomMidiFile())}>
        rnd
      </button>
      <MidiPlayer src={midiFile} />
    </>
  );
}
