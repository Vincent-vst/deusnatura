import { useState } from "react";
import { type, notes, modes, chords, random } from "../core/TheoryCore";

export default function Theory() {
  const [exercice, setExercice] = useState(random(type));
  const [note, setNote] = useState(random(notes));
  const [mode, setMode] = useState(random(modes));
  const [chord, setChord] = useState(random(chords));

  function randomExercice() {
    setExercice(random(type));
    setNote(random(notes));
    setMode(random(modes));
    setChord(random(chords));
  }

  return (
    <>
      <h1>Theory</h1>
      <button type="button" onClick={() => randomExercice()}>
        rnd
      </button>
      <p>Play the following : {exercice}</p>
      <div className="question">
        {note} {exercice === "scale" ? mode : chord}
      </div>
    </>
  );
}
