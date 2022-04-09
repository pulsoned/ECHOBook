import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
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

// Function outputs the View for the drop rates of the item and does not output anything if there is no drop source listed.
function showDropRates(sources, rates) {
  let fullView = [];
  fullView.push(<View key="dropview"></View>);
  if (sources.length > 0) {
    fullView.push(
      <Text key="droprates" style={[styles.headingtext, { fontSize: 20 }]}>
        Drop Rates
      </Text>
    );
  }
  for (let i = 0; i < sources.length; i++) {
    fullView.push(
      <View key={"view" + i} style={styles.textBorder}>
        <Text key={"source" + i} style={styles.info1Text}>
          {sources[i]}
        </Text>
        <Text key={"rate" + i} style={styles.info1Info}>
          {rates[i]}
        </Text>
      </View>
    );
  }

  return fullView;
}

// Function determines if the flavor text View should be output based on if there is flavor text or not
function showFlavorText(flavorText) {
  if (flavorText != "") {
    return (
      <View style={styles.flavorTextView}>
        <Text style={styles.flavorText}>{flavorText}</Text>
      </View>
    );
  }
}

export default function BL2WeaponInfoScreen({ route, navigation }) {
  const item = route.params;
  return (
    // This is the background for this screen
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      {/* Allows the screen to have more info via scrolling */}
      <ScrollView style={styles.scroll} stickyHeaderIndices={[0]}>
        {/* This Touchable is the back button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("BL2Weapons")}
          style={styles.backbutton}
        >
          <View>
            <Text style={styles.backtext}>{"<"}</Text>
          </View>
        </TouchableOpacity>
        {/* This View contains the heading for this screen. */}
        <View style={styles.headingview}>
          <Text style={styles.subheadingtext}>Borderlands 2</Text>
        </View>
        <View style={styles.imageView}>
          <Text
            style={[styles.headingtext, { color: determineColor(item.rarity) }]}
          >
            {item.name}
          </Text>
          {/* This is the image of the specific item */}
          <Image style={styles.itemImage} source={item.icon_source} />
          {showFlavorText(item.flavor_text)}
        </View>
        {/* This view contains information on Content, Type, Rarity, Manufacturer, and Elements */}
        <View style={styles.infoView1}>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Content</Text>
            <Text style={styles.info1Info}>{item.content}</Text>
          </View>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Weapon Type</Text>
            <Text style={styles.info1Info}>{item.weapon_type}</Text>
          </View>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Rarity</Text>
            <Text
              style={[styles.info1Info, { color: determineColor(item.rarity) }]}
            >
              {item.rarity}
            </Text>
          </View>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Manufacturer</Text>
            <Text style={styles.info1Info}>{item.manufacturer}</Text>
          </View>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Elements</Text>
            {/* This block of functions determines whether or not to display element images based on if the weapon can be of that element */}
            <View style={styles.elementview}>
              {determineKinetic(item.elements)}
              {determineIncendiary(item.elements)}
              {determineShock(item.elements)}
              {determineCorrosive(item.elements)}
              {determineExplosive(item.elements)}
              {determineSlag(item.elements)}
              {determineCryo(item.elements)}
              {determineRadiation(item.elements)}
            </View>
          </View>
        </View>

        {/* This is where the item card image is displayed */}
        <View style={styles.cardstyle}>
          <Image style={styles.cardimage} source={item.card_image}></Image>
        </View>
        {/* This is the 'How to Farm' section of the page that shows drop sources and rates (if applicable) */}
        <View style={styles.infoView2}>
          <Text style={styles.subheadingtext}>{item.name}</Text>
          <Text style={styles.headingtext}>How to Farm</Text>
          <View style={styles.info2Subview}>
            <Text style={[styles.headingtext, { fontSize: 20 }]}>
              Assigned Loot Pool
            </Text>
            <View style={styles.lootpool}>
              <Text style={[styles.headingtext, { fontSize: 15 }]}>
                {item.loot_pool}
              </Text>
              <Text
                style={[
                  styles.headingtext,
                  { fontSize: 12, textAlign: "left" },
                ]}
              >
                {item.pool_description}
              </Text>
            </View>
            {/* Allows the 'Drop Rates' section to not be displayed if there are no dedicated sources */}
            {showDropRates(item.drop_sources, item.drop_rates)}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Style for the information on the item's Loot Pool.
  lootpool: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  // Style for the View containing information on the item's Loot Pool.
  info2Subview: {
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    paddingVertical: 10,
    marginTop: 10,
  },
  // Style for the View containing the drop information about the item.
  infoView2: {
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  //Style for the View containing the card image.
  cardstyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  // Style for the item card image.
  cardimage: {
    width: "95%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  // Style for the actual information within the basic information View.
  info1Info: {
    alignSelf: "flex-end",
    color: colors.white,
    fontFamily: "Lato-Regular",
    backgroundColor: colors.primary,
    padding: 8,
    fontSize: 17,
    borderRadius: 20,
    borderColor: colors.black,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    overflow: "hidden",
  },
  // Style for the bottom border within the info views between each label.
  textBorder: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // Style for the labels for the info within the basic info View.
  info1Text: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
    padding: 10,
    fontSize: 17,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  // Style for the item's flavor text.
  flavorText: {
    color: colors.flavor,
    fontFamily: "Lato-Italic",
  },
  // Style for the view containing the item's flavor text.
  flavorTextView: {
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    maxWidth: "95%",
  },
  // Style for the background of the screen.
  bg: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  // Style for the item's display image.
  itemImage: {
    width: "95%",
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  // Style for the View containing the item's display image.
  imageView: {
    backgroundColor: colors.tertiary,
    width: "95%",
    marginTop: 10,
    justifyContent: "flex-start",
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    alignSelf: "center",
  },
  // Style for the ScrollView (to make sure the physical phone doesn't cover anything).
  scroll: {
    alignContent: "center",
    marginTop: 10,
  },
  // Style for the element icons in first info view.
  elementimage: {
    resizeMode: "contain",
    flex: 0.16,
    maxHeight: 35,
    marginHorizontal: 2,
    alignSelf: "center",
  },
  elementview: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  //Style for the View containing the basic information on the item.
  infoView1: {
    backgroundColor: colors.tertiary,
    width: "95%",
    marginTop: 30,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    alignSelf: "center",
    paddingBottom: 10,
  },
  // Style for the view containing the page's headings.
  headingview: {
    marginTop: -10,
  },
  // Style for the heading text.
  headingtext: {
    color: colors.white,
    fontFamily: "Lato-Regular",
    alignSelf: "center",
    fontSize: 30,
    textAlign: "center",
    marginTop: 5,
  },
  // Style for the subheading text.
  subheadingtext: {
    color: colors.secondary,
    fontFamily: "Lato-Regular",
    fontSize: 20,
    textAlign: "center",
  },
  // Style for the back button Touchable.
  backbutton: {
    position: "absolute",
    left: 10,
    top: 30,
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
