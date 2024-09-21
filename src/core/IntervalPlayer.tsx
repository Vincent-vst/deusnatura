// @ts-ignore
import { Howl } from "howler";

export const intervalNames = [
  "unisson",
  "minor 2nd",
  "major 2nd",
  "minor 3rd",
  "major 3rd",
  "perfect 4th",
  "tritone",
  "perfect 5th",
  "minor 6th",
  "major 6th",
  "minor 7th",
  "major 7th",
  "octave",
];

const notes = [
  "A0",
  "Bb0",
  "B0",
  "C1",
  "Db1",
  "D1",
  "Eb1",
  "E1",
  "F1",
  "Gb1",
  "G1",
  "Ab1",
  "A1",
  "Bb1",
  "B1",
  "C2",
  "Db2",
  "D2",
  "Eb2",
  "E2",
  "F2",
  "Gb2",
  "G2",
  "Ab2",
  "A2",
  "Bb2",
  "B2",
  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "F3",
  "Gb3",
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
];

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function playInterval(note1: string, note2: string) {
  const sound1 = new Howl({
    src: [`/src/assets/audio/notes/${note1}.wav`],
    onplay: function () {
      sleep(1000).then(() => {
        sound2.play();
      });
    },
  });

  const sound2 = new Howl({
    src: [`/src/assets/audio/notes/${note2}.wav`],
  });
  sound1.play();
}

export function getRandomNotes() {
  const index1 = Math.floor(Math.random() * notes.length);
  const minIndex = Math.max(0, index1 - 12);
  const maxIndex = Math.min(notes.length - 1, index1 + 12);
  const index2 =
    Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
  return [notes[index1], notes[index2]];
}

export function playRandomInterval() {
  const notes = getRandomNotes();
  console.log(getIntervalName(notes[0], notes[1]));
  playInterval(notes[0], notes[1]);
}

function getIntervalName(note1: string, note2: string) {
  const index1 = notes.indexOf(note1);
  const index2 = notes.indexOf(note2);

  const interval = Math.abs(index2 - index1);

  if (interval === 0) {
    return "unisson";
  } else if (interval + 1 > 12) {
    return (
      intervalNames[interval + (1 % 12)] +
      "(" +
      Math.floor(interval + 1 / 12) +
      "octaves)"
    );
  } else {
    return intervalNames[interval];
  }
}
