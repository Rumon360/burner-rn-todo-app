import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUser = async (value, name) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("user", jsonValue);
    console.log("stored");
  } catch (e) {
    // save error
    console.log(e);
  }
};

export const storeTodos = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("todos", jsonValue);
    console.log("stored");
  } catch (e) {
    // save error
    console.log(e);
  }
};
