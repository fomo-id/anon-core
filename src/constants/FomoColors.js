export function fomoColors(colorScheme) {

  const darkMode = colorScheme === "dark";
  const tintColor = "#2f95dc";
  const darkBlue = "#09436c";
  const mainDark = darkMode ? "#f0f0f0" : darkBlue;
  const white = darkMode ? "#000000" : "#ffffff";
  const black = darkMode ? "#b3b3b3" : "#000000";
  return {
    tintColor,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColor,
    tabBar: "#fefefe",
    errorBackground: "red",
    errorText: "#fff",
    warningBackground: "#EAEB5E",
    warningText: "#666804",
    noticeBackground: tintColor,
    noticeText: "#fff",
    anonExtraLight: darkMode ? "#303030" : "#ebf6ff",
    anonLight: darkMode ? "#c4c4c4" : "#0a5991",
    anonSemiLight: "#5493bf",
    anonDark: mainDark,
    navigationHeaderText: mainDark,
    navigationHeader: white,
    tagColor: "#848787",
    red: "#f78387",
    green: "#32a852",
    lightGreen: "#a9ebbb",
    invalidInputColor: "#f78387",
    hyperlink: "#2980b9",
    iconColor: mainDark,
    lightGrey: darkMode ? "#212121" : "#dedede",
    grey: darkMode ? "#6e6e6e" : "#dedede",
    darkGrey: "#525252",
    white: white,
    black: black,
    colorScheme: colorScheme !== "no-preference" ? colorScheme : "light",
    darkMode: darkMode,
    star: "#efb941",
    grayDescSubfomo: '#949494',
    sectionHeader: '#9299A0',
    darkBlue,
    grayBorder: '#868E96',
    colorPublicLabel: "#0a5991",
    blackLight: darkMode ? 'rgba(225,225,255,0.25)' : 'rgba(0,0,0,0.25)',
    whiteOpacity80: darkMode ? 'rgba(0,0,0,.80)' : 'rgba(255,255,255,0.80)'
  }
}