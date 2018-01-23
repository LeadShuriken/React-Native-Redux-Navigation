import { Dimensions, Platform, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const normalizeSize = size => {
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  } else if (Platform.OS === "android") {
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
  } else {
    return size;
  }
};

export const durationToString = millis => {
  let dur = {};
  let units = [
    { label: "milliseconds", mod: 1000 },
    { label: "seconds", mod: 60 },
    { label: "minutes", mod: 60 },
    { label: "hours", mod: 24 },
    { label: "days", mod: 31 }
  ];
  // calculate the individual unit values...
  units.forEach(function(u) {
    millis = (millis - (dur[u.label] = millis % u.mod)) / u.mod;
  });
  // convert object to a string representation...
  let nonZero = function(u) {
    return dur[u.label];
  };

  let toSharp = function(u) {
    return u.label !== "milliseconds" && u.label !== "seconds";
  };

  dur.toString = function() {
    return units
      .reverse()
      .filter(nonZero)
      .filter(toSharp)
      .map(function(u) {
        return (
          dur[u.label] +
          " " +
          (dur[u.label] == 1 ? u.label.slice(0, -1) : u.label)
        );
      })
      .join(", ");
  };
  return dur;
};
