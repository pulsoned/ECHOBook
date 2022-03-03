import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

function WelcomeScreen(props) {
  const goToBL3 = () => props.navigation.navigate("BL3");
  const goToBL2 = () => props.navigation.navigate("BL2");
  const goToBLTPS = () => props.navigation.navigate("BLTPS");
  const goToBL1 = () => props.navigation.navigate("BL1");
  const goToTTWL = () => Alert.alert("Coming Soon!");

  return (
    //  The main background of the app, simple black dotted background
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      {/* This is where the actual content of the screen is kept. The SafeAreaView keeps the content from being obscured
      by the top of the phone (on iPhones) */}
      <SafeAreaView style={styles.page}>
        {/* This View is where the welcome text is. Possibly will be where a logo is displayed. */}
        <View style={styles.welcome}>
          <Text style={styles.welcomeTextMain}>Welcome to ECHOBook!</Text>
          <Text style={styles.welcomeTextSub}>Choose your game.</Text>
        </View>

        {/* These TouchableHighlights are the buttons to select the game. They have a
        picture representing the game as well as the name of the game on them. */}
        <TouchableHighlight style={styles.button} onPress={() => goToBL3()}>
          <View style={styles.buttonView}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/bl3logo.png")}
            />
            <Text style={styles.buttonText}>Borderlands 3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => goToBL2()}>
          <View style={styles.buttonView}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/bl2logo.png")}
            />
            <Text style={styles.buttonText}>Borderlands 2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => goToBLTPS()}>
          <View style={styles.buttonView}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/bltpslogo.png")}
            />
            <Text style={styles.buttonText}>Borderlands TPS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => goToBL1()}>
          <View style={styles.buttonView}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/bl1logo.png")}
            />
            <Text style={styles.buttonText}>Borderlands 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => goToTTWL()}>
          <View style={styles.buttonView}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/wonderlandslogo.png")}
            />
            <Text style={styles.buttonText}>Tiny Tina's Wonderlands</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Style for the SafeAreaView containing the main contents of the page.
  page: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  // Style for the image background.
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  // Style for the TouchableHighlights that are the buttons on the page.
  button: {
    flex: 0.16,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    width: "97%",
    alignContent: "center",
    alignSelf: "center",
    margin: 2,
    alignContent: "center",
    justifyContent: "center",
    elevation: 20,
    shadowColor: colors.black,
  },
  // Style for the text on the buttons.
  buttonText: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    flex: 0.8,
    alignSelf: "center",
    fontSize: 30,
    paddingLeft: 10,
  },
  // Style for the images on the buttons.
  buttonImage: {
    flex: 0.2,
    alignSelf: "center",
    resizeMode: "contain",
  },
  // Style for the View containing the image and text on a button.
  buttonView: {
    flexDirection: "row",
  },
  // Style for the section of the screen the welcome text is stored on.
  welcome: {
    flex: 0.1,
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
  },
  // Style for the heading welcome text.
  welcomeTextMain: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 30,
    fontFamily: "Lato-Regular",
    marginTop: -50,
  },
  // Style for the subheading welcome text.
  welcomeTextSub: {
    alignSelf: "center",
    color: colors.white,
    fontFamily: "Lato-Regular",
  },
});

export default WelcomeScreen;
