import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(14, 8, 42,0.8)", "transparent"]}
          style={styles.linearGradientBackground}
        />
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Deus Natura</Text>
            <Text style={styles.subtitle}>A music training platform</Text>
          </View>
          <View style={styles.imageBefore}>
            <Image
              style={styles.icon}
              source={require("../assets/images/pfp.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.card}>
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              imageStyle={{ borderRadius: 10 }}
            >
              <Link href="/repeat" style={styles.link}>
                <View style={styles.cardText}>
                  <Text>Repeat</Text>
                </View>
              </Link>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              imageStyle={{ borderRadius: 10 }}
            >
              <Link href="/improvisation" style={styles.link}>
                <View style={styles.cardText}>
                  <Text>Improvisation</Text>
                </View>
              </Link>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              imageStyle={{ borderRadius: 10 }}
            >
              <Link href="/theory" style={styles.link}>
                <View style={styles.cardText}>
                  <Text>Theory</Text>
                </View>
              </Link>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              imageStyle={{ borderRadius: 10 }}
            >
              <Link href="/eartraining" style={styles.link}>
                <View style={styles.cardText}>
                  <Text>Ear training</Text>
                </View>
              </Link>
            </ImageBackground>
          </View>
          <View style={styles.card}>
            <ImageBackground
              source={require("../assets/images/background.png")}
              style={styles.background}
              imageStyle={{ borderRadius: 10 }}
            >
              <Link href="/sightreading" style={styles.link}>
                <View style={styles.cardText}>
                  <Text>Sight reading</Text>
                </View>
              </Link>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
  },
  linearGradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 100,
  },
  header: {
    marginTop: "40px",
    // flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "thin",
  },
  imageBefore: {
    borderWidth: "1px",
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 50,
    width: "55px",
    height: "55px",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
  },
  main: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  card: {
    marginBottom:'20px',
    // marginTop: "20px",
    backgroundColor: "red",
    height: "150px",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    width: "50%",
    height: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.5)",
  },
  cardText: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
