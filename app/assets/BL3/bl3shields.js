export const bl3Shields = [
  {
    name: "All-in",
    rarity: "Epic",
    shield_type: "Booster",
    manufacturer: "Anshin",
    elements: "S",
    content: "Handsome Jackpot",
    icon_source: require("../BL3/shields/allin.png"),
    flavor_text: "With marshmallow bits.",
    card_image: require("../BL3/shields/allincard.png"),
    loot_pool: "Quest Reward (Unfarmable)",
    pool_description:
      "Borderlands 3 Quest Rewards are rewarded during or after a quest.\n\n" +
      "This shield isn't farmable, because it's either from a DLC Quest or 1 of the rare outliers.\n" +
      "The only ways to farm this shield are the Diamond Loot Room or utilizing Read-Only farming.",
    drop_sources: ["Regaining One's Feet"],
    drop_rates: ["100%"],
    key: "allin",
  },
  {
    name: "Asclepius",
    rarity: "Legendary",
    shield_type: "Unique",
    manufacturer: "Anshin",
    elements: "KISCYR",
    content: "Base Game",
    icon_source: require("../BL3/shields/asclepius.png"),
    flavor_text: "Always carry a small snake.",
    card_image: require("../BL3/shields/asclepiuscard.png"),
    loot_pool: "Dedicated Drop",
    pool_description:
      "Dedicated Drops are shields that only drop from its dedicated sources.\n" +
      "Unlike World Drops who can drop almost everywhere at a small chance.",
    drop_sources: ["Anathema"],
    drop_rates: ["28%"],
    key: "asclepius",
  },
  {
    name: "Back Ham",
    rarity: "Legendary",
    shield_type: "Reflect",
    manufacturer: "Anshin",
    elements: "K",
    content: "Base Game",
    icon_source: require("../BL3/shields/backham.png"),
    flavor_text: "Synthetic Vercuvian ham. Typhon DeLeon approved.",
    card_image: require("../BL3/shields/backhamcard.png"),
    loot_pool: "World Drop",
    pool_description:
      "Borderlands 3 World Drops are items that drop from any suitable Loot Source in addition to their dedicated sources.\n" +
      "There are around 150 unique items in the Base Game - World Drop pool, so for farming a specific shield it's best to seek out its dedicated Loot Source.\n" +
      "If you still want to test your luck, you should equip a Shlooter Artifact to increase your chance of a World Drop by 1000%.",
    drop_sources: ["Archer Rowe"],
    drop_rates: ["15%"],
    key: "backham",
  },
  {
    name: "Band of Sitorak",
    rarity: "Legendary",
    shield_type: "Damage",
    manufacturer: "Pangolin",
    elements: "KISCYR",
    content: "Base Game",
    icon_source: require("../BL3/shields/bandofsitorak.png"),
    flavor_text: 'I said, "biiiiiiiiiiiitttccchhhh..."',
    card_image: require("../BL3/shields/bandofsitorakcard.png"),
    loot_pool: "Dedicated Drop",
    pool_description:
      "Dedicated Drops are shields that only drop from its dedicated sources.\n" +
      "Unlike World Drops who can drop almost everywhere at a small chance.",
    drop_sources: ["The Unstoppable"],
    drop_rates: ["10%"],
    key: "bandofsitorak",
  },
  {
    name: "Beskar",
    rarity: "Legendary",
    shield_type: "Reflect",
    manufacturer: "Anshin",
    elements: "K",
    content: "Designer's Cut",
    icon_source: require("../BL3/shields/beskar.png"),
    flavor_text: "This is the way.",
    card_image: require("../BL3/shields/beskarcard.png"),
    loot_pool: "DLC 5 - World Drop",
    pool_description:
      "Arms Race - World Drops are items that drop from any of the following sources, within the Designer's Cut DLC and can be extracted with the help of the Arms Race Gear Extractor.\n" +
      "There are 12 weapons, 4 Shields, 1 grenade, 4 Class Mods, and 3 Artifacts in the Arms Race - World Drop pool.\n" +
      "For farming a specific shield it's best to seek out its dedicated Loot Room, but some of the general sources are still worth a visit.\n" +
      "Additionally, any of the shields can appear in the Diamond Loot Room.",
    drop_sources: ["Launch Command x2", "H. Harker"],
    drop_rates: ["8.3%", "4.2% + 0.4%"],
    key: "beskar",
  },
];
