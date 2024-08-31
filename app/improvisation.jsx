import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";

export default function Improvisation() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/backingtrack/0.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Text>improvisation</Text>
      <Text>Improvise over the following backing track</Text>
      <Button title="Play Backing track" onPress={playSound} />
    </View>
  );
}
