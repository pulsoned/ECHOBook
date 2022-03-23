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

function showFlavorText(flavorText) {
  if (flavorText != "") {
    return (
      <View style={styles.flavorTextView}>
        <Text style={styles.flavorText}>{flavorText}</Text>
      </View>
    );
  }
}

function showSkillBonuses(bonuses) {
  let fullView = [];
  for (let i = 0; i < bonuses.length; i++) {
    fullView.push(
      <Text key={"perk" + i} style={styles.info1Info}>
        {bonuses[i]}
      </Text>
    );
  }
  return fullView;
}

export default function BL1ClassModInfoScreen({ route, navigation }) {
  const item = route.params;
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="repeat"
      style={styles.bg}
    >
      <ScrollView style={styles.scroll} stickyHeaderIndices={[0]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BL1ClassMods")}
          style={styles.backbutton}
        >
          <View>
            <Text style={styles.backtext}>{"<"}</Text>
          </View>
        </TouchableOpacity>
        {/* This View contains the heading for this screen. */}
        <View style={styles.headingview}>
          <Text style={styles.subheadingtext}>Borderlands 1</Text>
        </View>
        <View style={styles.imageView}>
          <Text
            style={[styles.headingtext, { color: determineColor(item.rarity) }]}
          >
            {item.name}
          </Text>
          <Image style={styles.itemImage} source={item.icon_source} />
          {showFlavorText(item.flavor_text)}
        </View>
        <View style={styles.infoView1}>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Content</Text>
            <Text style={styles.info1Info}>{item.content}</Text>
          </View>
          <View style={styles.textBorder}>
            <Text style={styles.info1Text}>Class</Text>
            <Text style={styles.info1Info}>{item.class}</Text>
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
            <Text style={styles.info1Text}>Skill Bonuses</Text>
            <View>{showSkillBonuses(item.skill_bonuses)}</View>
          </View>
        </View>

        <View style={styles.cardstyle}>
          <Image style={styles.cardimage} source={item.card_image}></Image>
        </View>
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
            {showDropRates(item.drop_sources, item.drop_rates)}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  lootpool: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  info2Subview: {
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    paddingVertical: 10,
    marginTop: 10,
  },
  infoView2: {
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  cardstyle: {
    width: "100%",
    justifyContent: "flex-start",
    alignSelf: "center",
  },
  cardimage: {
    width: "95%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  info1Info: {
    alignSelf: "flex-end",
    flexDirection: "column-reverse",
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
  textBorder: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  flavorText: {
    color: colors.flavor,
    fontFamily: "Lato-Italic",
  },
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
  itemImage: {
    width: "95%",
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
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
  // Style for the element icons in the descriptive section on the button.
  elementimage: {
    resizeMode: "contain",
    flex: 0.3,
    maxHeight: 35,
    marginHorizontal: 2,
    alignSelf: "center",
  },
  // Style for the View containing the element icons.
  elementimageview: {
    flexDirection: "row",
    flex: 0.3,
    marginLeft: 10,
    marginTop: -20,
  },
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
