import { useState } from "react";
import { type, notes, modes, chords, random } from "../core/TheoryCore";
import randomIcon from "/src/assets/icons/random.png";
import "/src/assets/style/theory.css";

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
      <div id="theory">
        <h1>Theory</h1>
        <a href={void 0} onClick={() => randomExercice()}>
          <img src={randomIcon} alt="random theory" />
        </a>
        <div className="question">
          <p>Play the following {exercice} :</p>
          <div className="scale">
            {note} {exercice === "scale" ? mode : chord}
          </div>
        </div>
      </div>
    </>
  );
}
