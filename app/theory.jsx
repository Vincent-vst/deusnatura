import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function theory() {
  const notes = ["A", "Bb", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
  const chordMode = ["m", "7", "sus2", "sus4"];
  const [randomNote, setNote] = useState(
    notes[Math.floor(Math.random() * length)]
  );
  const [randomChordMode, setChordMode] = useState(
    chordMode[Math.floor(Math.random() * chordMode.length)]
  );

  function randomChord() {
    setNote(notes[Math.floor(Math.random() * notes.length)]);
    setChordMode(chordMode[Math.floor(Math.random() * chordMode.length)])
  }

  return (
    <View>
      <Text>theory</Text>
      <Button onPress={randomChord} title="Play the following chord" />
      <Text>{randomNote}{randomChordMode}</Text>
    </View>
  );
}
