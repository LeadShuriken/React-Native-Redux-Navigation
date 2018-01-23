import { AsyncStorage } from "react-native";

export const saveValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (er) {
    console.error(er);
  }
};

export const loadValue = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(er);
  }
};
