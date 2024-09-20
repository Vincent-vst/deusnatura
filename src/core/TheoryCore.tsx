export const type = ["arpeggio", "chord", "scale"];
export const notes = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A#",
  "C#",
  "D#",
  "F#",
  "G#",
];

export const modes = [
  "ionian",
  "dorian",
  "phrygian",
  "lydian",
  "myxolydian",
  "aeolian",
  "locrian",
  "tetrachord",
  "octatonic",
  "super locrian (or altered)",
  "diminished",
];

export const chords = [
  "minor",
  "major",
  "augmented",
  "diminished",
  "sus4",
  "sus2",
  "11th",
  "m7",
  "M7",
  "m9",
  "9",
  "11th",
  "13th",
  "compound diminished 5th",
  "compound augmented 4th",
];

export function random(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}


