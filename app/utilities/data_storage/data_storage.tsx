import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Saved", key, value);
  } catch (e) {
    console.log("Error saving data");
  }
};

export const readData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log("Error reading data");
    return null;
  }
};

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Removed", key);
  } catch (e) {
    console.log("Error removing data");
  }
};
