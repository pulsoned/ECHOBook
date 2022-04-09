import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

function BL2SelectionScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      <SafeAreaView style={styles.page}>
        <View style={styles.welcome}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.backbutton}
          >
            <View>
              <Text style={styles.backtext}>{"<"}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.welcomeTextMain}>Borderlands 2</Text>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate("BL2Weapons")}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL2/Logos/bl2gunlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Weapons</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate("BL2Shields")}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL2/Logos/bl2shieldlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Shields</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => alert("Grenades Pressed")}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL2/Logos/bl2grenadelogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Grenades</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => alert("Class Mods Pressed")}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL2/Logos/bl2classmodlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Class Mods</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => alert("Relics Pressed")}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL2/Logos/bl2reliclogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Relics</Text>
            </View>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    flex: 0.16,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    width: "97%",
    alignSelf: "center",
    margin: 2,
    alignContent: "center",
    justifyContent: "center",
    elevation: 20,
    shadowColor: colors.black,
  },
  buttonText: {
    flex: 1,
    color: colors.white,
    fontFamily: "Lato-Regular",
    alignSelf: "center",
    fontSize: 30,
    marginTop: 40,
  },
  buttonImage: {
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain",
    marginLeft: 20,
  },
  imageView: {
    flex: 0.4,
    padding: 5,
  },
  textView: {
    flex: 0.6,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
  },
  welcome: {
    flex: 0.1,
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  welcomeTextMain: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 30,
    fontFamily: "Lato-Regular",
    marginTop: -50,
  },
  welcomeTextSub: {
    alignSelf: "center",
    color: colors.white,
    fontFamily: "Lato-Regular",
  },
  backbutton: {
    position: "absolute",
    top: -35,
    left: 10,
  },
  backtext: {
    color: colors.secondary,
    fontFamily: "Lato-Regular",
    fontSize: 70,
  },
});

export default BL2SelectionScreen;
