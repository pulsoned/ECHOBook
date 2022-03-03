import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";

function BL1SelectionScreen(props) {
  // These functions allow for navigation between this screen and each category.
  const goToWeapons = () => props.navigation.navigate("BL1Weapons");
  const goToShields = () => props.navigation.navigate("BL1Shields");
  const goToGrenades = () => props.navigation.navigate("BL1Grenades");
  const goToClassMods = () => props.navigation.navigate("BL1ClassMods");

  return (
    // This is the background for the app.
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      {/* This SafeAreaView contains the main content of the page. */}
      <SafeAreaView style={styles.page}>
        {/* This View contains the heading text as well as the back button. */}
        <View style={styles.welcome}>
          {/* This Touchable is the back button to return to the game selection page/home screen. */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.backbutton}
          >
            {/* Needs to be in a View to be pressable for some reason. */}
            <View>
              <Text style={styles.backtext}>{"<"}</Text>
            </View>
          </TouchableOpacity>
          {/* Heading text for this page. */}
          <Text style={styles.welcomeTextMain}>Borderlands 1</Text>
        </View>
        {/* These Touchables are the category selection buttons. There is an odd bug with Touchables where on any pages past
        the first in the navigation, the image and the text need their own separate views and cannot be contained
        within the same view or else the buttons become buggy and unpressable. */}
        <TouchableHighlight style={styles.button} onPress={() => goToWeapons()}>
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL1/Logos/bl1gunlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Weapons</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => goToShields()}>
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL1/Logos/bl1shieldlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Shields</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => goToGrenades()}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL1/Logos/bl1grenadelogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Grenades</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => goToClassMods()}
        >
          <View style={styles.buttonView}>
            <View style={styles.imageView}>
              <Image
                style={styles.buttonImage}
                source={require("../assets/BL1/Logos/bl1classmodlogo.png")}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.buttonText}>Class Mods</Text>
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
    flex: 0.2,
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
    fontSize: 30,
    marginTop: 50,
    marginLeft: 20,
  },
  buttonImage: {
    flex: 1,
    alignSelf: "center",
    resizeMode: "contain",
    marginLeft: 20,
  },
  imageView: {
    flex: 0.3,
    padding: 20,
  },
  textView: {
    flex: 0.7,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
  },
  welcome: {
    flex: 0.1,
    justifyContent: "center",
    width: "100%",
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
    top: -30,
    left: 10,
  },
  backtext: {
    color: colors.secondary,
    fontFamily: "Lato-Regular",
    fontSize: 70,
  },
});

export default BL1SelectionScreen;
