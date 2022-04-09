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
} from "react-native";
import colors from "../config/colors";
import { bl1Grenades } from "../assets/BL1/bl1grenades";

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

export default function BL1GrenadeSelectionScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      <View style={styles.scroll}>
        {/* This ScrollView allows the user to scroll through the countless different weapons in the list. The stickyHeaderIndices
        attribute allows the back button to stay at the top left even when scrolling. */}
        <ScrollView stickyHeaderIndices={[0]}>
          {/* This Touchable is the back button. */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate("BL1")}
            style={styles.backbutton}
          >
            <View>
              <Text style={styles.backtext}>{"<"}</Text>
            </View>
          </TouchableOpacity>
          {/* This View contains the heading for this screen. */}
          <View style={styles.headingview}>
            <Text style={styles.headingtext}>Grenades List</Text>
            <Text style={styles.subheadingtext}>Borderlands 1</Text>
          </View>
          {/* This map allows the app to dynamically generate the list of items/buttons based on the JSON object in the 
           file. */}
          {bl1Grenades.map((item) => (
            // This Touchable represents the template for each button for the list of items.
            <TouchableHighlight
              key={item.key}
              style={styles.button}
              onPress={() => props.navigation.navigate("BL1GrenadeInfo", item)}
            >
              <View style={styles.buttonView}>
                {/* This is the section of the button containing the name of the item and its picture. */}
                <View style={styles.namepictureview}>
                  <Image style={styles.buttonImage} source={item.icon_source} />
                  {/* Using the determineColor function, the color of an item's name will change depending on its rarity. */}
                  <Text
                    style={[
                      { color: determineColor(item.rarity) },
                      styles.buttonText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
                {/* This View includes some extra descriptive information about an item. */}
                <View style={styles.descriptionview}>
                  <Text style={styles.descriptionhelper}>Grenade Type</Text>
                  <Text style={styles.descriptiontext}>
                    {item.grenade_type}
                  </Text>
                  <Text style={styles.descriptionhelper}>Manufacturer</Text>
                  <Text style={styles.descriptiontext}>
                    {item.manufacturer}
                  </Text>
                  <Text style={styles.descriptionhelper}>Content</Text>
                  <Text style={styles.descriptiontext}>{item.content}</Text>
                  <Text style={styles.descriptionhelper}>Elements</Text>
                  <View style={styles.elementimageview}>
                    {/* Each of these functions determines whether or not the icon for a certain damage
                    type should appear on the weapon's button. I'm not sure how to do it all in one function or I would.
                    Extra modularity never hurt anyone anyway I guess. */}
                    {determineExplosive(item.elements)}
                    {determineKinetic(item.elements)}
                    {determineIncendiary(item.elements)}
                    {determineShock(item.elements)}
                    {determineCorrosive(item.elements)}
                    {determineSlag(item.elements)}
                    {determineCryo(item.elements)}
                    {determineRadiation(item.elements)}
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          ))}
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
    alignSelf: "center",
    margin: 2,
    marginTop: 6,
    elevation: 20,
    shadowColor: colors.black,
  },
  // Style for the name of the item on the button.
  buttonText: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  // Style for the image of the item on the button.
  buttonImage: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "97%",
    height: 140,
  },
  // Style for the view that contains everything on the buttons.
  buttonView: {
    flexDirection: "row",
  },
  // Style for the dynamic descriptive text about the item on the buttons.
  descriptiontext: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
  },
  // Style for the non-dynamic descriptive text about the item on the buttons.
  descriptionhelper: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    fontSize: 15,
    marginLeft: 10,
  },
  // Style for the View that includes the descriptive text on the buttons.
  descriptionview: {
    flex: 0.4,
    justifyContent: "center",
    paddingVertical: 5,
  },
  // Style for the View that includes the name and picture of the item.
  namepictureview: {
    borderRightColor: colors.black,
    borderRightWidth: 2,
    flex: 0.6,
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
    height: 30,
    margin: 1,
  },
  // Style for the View containing the element icons.
  elementimageview: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  // Style for the view containing the heading of the screen.
  headingview: {
    alignContent: "center",
    marginBottom: 10,
    marginTop: -70,
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
    position: "absolute",
    left: 10,
    top: 0,
    zIndex: 100,
    elevation: 100,
    width: 50,
  },
  // Style for the text the back button Touchable contains.
  backtext: {
    color: colors.secondary,
    fontFamily: "Lato-Regular",
    fontSize: 70,
  },
});
