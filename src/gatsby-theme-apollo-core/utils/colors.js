const { colors } = require("gatsby-theme-apollo-core/src/utils/colors");
const { colors: spaceKitColors } = require("@apollo/space-kit/colors");

exports.colors = {
  ...colors,
  primary: spaceKitColors.blue.light,
  secondary: spaceKitColors.red.base,
  primaryLight: spaceKitColors.indigo.light,
  background: spaceKitColors.black.darker,
  background2: spaceKitColors.black.dark,
  divider: "#1d2229",
  shadow: spaceKitColors.black.dark,
  text1: spaceKitColors.silver.dark,
  text2: spaceKitColors.grey.light,
  text3: spaceKitColors.grey.darker,
  text4: spaceKitColors.grey.darker,
};
