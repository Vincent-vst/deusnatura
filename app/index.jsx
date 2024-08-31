import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View>
      <Text>Deus Natura</Text>
      <Text>A music training platform</Text>

      <Link href="/repeat">Goto repeat</Link>
      <Link href="/improvisation">Goto improvisation</Link>
      <Link href="/theory">Goto theory</Link>
    </View>
  );
}
