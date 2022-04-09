export const bl2Weapons = [
  {
    name: "12 Pounder",
    rarity: "Rare",
    weapon_type: "Launcher",
    manufacturer: "Torgue",
    elements: "E",
    content: "Pirate's Booty",
    icon_source: require("../BL2/weapons/12pounder.png"),
    flavor_text: "Nec pluribus impar, bitches.",
    card_image: require("../BL2/weapons/12poundercard.png"),
    loot_pool: "Dedicated Drop",
    pool_description:
      "Dedicated Drops are weapons that only drop from its dedicated sources.\nUnlike World Drops who can drop almost everywhere at a small chance.",
    drop_sources: ["Big Sleep"],
    drop_rates: ["33%"],
    key: "12pounder",
  },
  {
    name: "Actualizer",
    rarity: "Seraph",
    weapon_type: "SMG",
    manufacturer: "Hyperion",
    elements: "KISCG",
    content: "Pirate's Booty",
    icon_source: require("../BL2/weapons/actualizer.png"),
    flavor_text: "We need to talk about your DPS report.",
    card_image: require("../BL2/weapons/actualizercard.png"),
    loot_pool: "Buyable",
    pool_description:
      "Buyable Weapons can be bought from a shop with the right currency.",
    drop_sources: ["Hyperius", "Seraph Vendor"],
    drop_rates: ["0.29%", "120 crystals"],
    key: "actualizer",
  },
  {
    name: "Ahab",
    rarity: "Seraph",
    weapon_type: "Launcher",
    manufacturer: "Torgue",
    elements: "E",
    content: "Pirate's Booty",
    icon_source: require("../BL2/weapons/ahab.png"),
    flavor_text: "For hate's sake.",
    card_image: require("../BL2/weapons/ahabcard.png"),
    loot_pool: "Dedicated Drop",
    pool_description:
      "Dedicated Drops are weapons that only drop from its dedicated sources.\nUnlike World Drops who can drop almost everywhere at a small chance.",
    drop_sources: ["Master Gee UVHM", "Master Gee", "Seraph Vendor !UVHM"],
    drop_rates: ["33%", "0.5%", "120 crystals"],
    key: "ahab",
  },
  {
    name: "Amigo Sincero",
    rarity: "Legendary",
    weapon_type: "Sniper",
    manufacturer: "Jakobs",
    elements: "K",
    content: "Fight for Sanctuary",
    icon_source: require("../BL2/weapons/amigosincero.png"),
    flavor_text: "A true friend can penetrate any barrier.",
    card_image: require("../BL2/weapons/amigosincerocard.png"),
    loot_pool: "Quest Reward",
    pool_description:
      "Borderlands 2 Quest Rewards can be farmed by Read-Only farming [PC-Only].",
    drop_sources: ["BFFFs"],
    drop_rates: ["100%"],
    key: "amigosincero",
  },
  {
    name: "Avenger",
    rarity: "Pearlescent",
    weapon_type: "SMG",
    manufacturer: "Tediore",
    elements: "KISCG",
    content: "Upgrade Pack #1",
    icon_source: require("../BL2/weapons/avenger.png"),
    flavor_text: "Counterbution revengeance. The reckoning.",
    card_image: require("../BL2/weapons/avengercard.png"),
    loot_pool: "World Drop",
    pool_description:
      "Borderlands 2 World Drops are items that drop from any suitable Loot Source in addition to their dedicated sources.\nThere are 67 unique items in the World Drop pool, so for farming 1 of the 41 weapons it's best to seek out its dedicated Loot Source.\nIf you still want to test your luck, you should equip a Vault Hunter's Relic to indirectly increase your chance of a World Drop Legendary.",
    drop_sources: [
      "OMGWTH",
      "Tubbies lvl.80+",
      "Tubbies lvl.62-79",
      "Loot Midgets lvl.51+",
    ],
    drop_rates: ["13%", "1.67%", "0.08-1.2%", "0.17%"],
    key: "avenger",
  },
];