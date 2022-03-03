import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";

// This function determines what color the text for each weapon should be based on its rarity.
function determineColor(rarity) {
  switch (rarity) {
    case "Common":
      return colors.common;
      break;
    case "Uncommon":
      return colors.uncommon;
      break;
    case "Rare":
      return colors.rare;
      break;
    case "Epic":
      return colors.epic;
      break;
    case "Legendary":
      return colors.legendary;
      break;
    case "Pearlescent":
      return colors.pearlescent;
      break;
    case "Glitch":
      return colors.glitch;
      break;
    case "Seraph":
      return colors.seraph;
      break;
    case "Effervescent":
      return colors.effervescent;
      break;
    case "E-Tech":
      return colors.etech;
      break;
    default:
      return colors.common;
  }
}

// This function determines whether or not the image for kinetic damage should be shown on a weapon's button.
function determineKinetic(elements) {
  if (elements.includes("K")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/kinetic.png")}
      />
    );
  }
}

// This function determines whether or not the image for incendiary damage should be shown on a weapon's button.
function determineIncendiary(elements) {
  if (elements.includes("I")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/incendiary.png")}
      />
    );
  }
}

// This function determines whether or not the image for shock damage should be shown on a weapon's button.
function determineShock(elements) {
  if (elements.includes("S")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/shock.png")}
      />
    );
  }
}

// This function determines whether or not the image for corrosive damage should be shown on a weapon's button.
function determineCorrosive(elements) {
  if (elements.includes("C")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/corrosive.png")}
      />
    );
  }
}

// This function determines whether or not the image for explosive damage should be shown on a weapon's button.
function determineExplosive(elements) {
  if (elements.includes("E")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/explosive.png")}
      />
    );
  }
}

// This function determines whether or not the image for slag damage should be shown on a weapon's button.
function determineSlag(elements) {
  if (elements.includes("G")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/slag.png")}
      />
    );
  }
}

// This function determines whether or not the image for cryo damage should be shown on a weapon's button.
function determineCryo(elements) {
  if (elements.includes("Y")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/cryo.png")}
      />
    );
  }
}

// This function determines whether or not the image for radiation damage should be shown on a weapon's button.
function determineRadiation(elements) {
  if (elements.includes("R")) {
    return (
      <Image
        style={styles.elementimage}
        source={require("../assets/radiation.png")}
      />
    );
  }
}

export default function BL1WeaponInfoScreen({ route, navigation }) {
  const item = route.params;
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      <View style={styles.scroll}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("BL1Weapons")}
            style={styles.backbutton}
          >
            <View>
              <Text style={styles.backtext}>{"<"}</Text>
            </View>
          </TouchableOpacity>
          {/* This View contains the heading for this screen. */}
          <View style={styles.headingview}>
            <Text style={styles.headingtext}>{item.name}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Style for the background of the screen.
  bg: {
    flex: 1,
    justifyContent: "center",
  },
  // Style for the buttons as a whole.
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    width: "97%",
    height: 200,
    alignSelf: "center",
    margin: 2,
    marginTop: 6,
    elevation: 20,
    shadowColor: colors.black,
  },
  // Style for the name of the item on the button.
  buttonText: {
    fontFamily: "Lato-Regular",
    flex: 1,
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  // Style for the image of the item on the button.
  buttonImage: {
    resizeMode: "contain",
    flex: 1,
    alignSelf: "center",
  },
  // Style for the view that contains everything on the buttons.
  buttonView: {
    flex: 1,
    flexDirection: "row",
  },
  // Style for the dynamic descriptive text about the item on the buttons.
  descriptiontext: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    flex: 0.2,
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  // Style for the non-dynamic descriptive text about the item on the buttons.
  descriptionhelper: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  // Style for the View that includes the descriptive text on the buttons.
  descriptionview: {
    flex: 0.4,
    justifyContent: "center",
  },
  // Style for the View that includes the name and picture of the item.
  namepictureview: {
    borderRightColor: colors.black,
    borderRightWidth: 2,
    flex: 0.6,
    paddingTop: 20,
  },
  // Style for the ScrollView (to make sure the physical phone doesn't cover anything).
  scroll: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  // Style for the element icons in the descriptive section on the button.
  elementimage: {
    resizeMode: "contain",
    flex: 0.15,
  },
  // Style for the View containing the element icons.
  elementimageview: {
    flexDirection: "row",
    flex: 0.3,
    marginLeft: 10,
    marginTop: -20,
  },
  // Style for the view containing the heading of the screen.
  headingview: {
    alignContent: "center",
  },
  // Style for the heading text.
  headingtext: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    alignSelf: "center",
    fontSize: 30,
  },
  // Style for the subheading text.
  subheadingtext: {
    color: colors.secondary,
    alignSelf: "center",
    fontFamily: "Lato-Regular",
    fontSize: 20,
  },
  // Style for the back button Touchable.
  backbutton: {
    zIndex: 100,
    elevation: 100,
  },
  // Style for the text the back button Touchable contains.
  backtext: {
    color: colors.secondary,
    fontFamily: "Lato-Regular",
    fontSize: 70,
  },
});
