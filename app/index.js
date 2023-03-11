import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Registration from "../src/components/Registration";
import { getTodos, removeValue, storeData } from "../src/utils/storage";

import Main from "./main";

export default function Page() {
  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      if (jsonValue != null) {
        setUser(JSON.parse(jsonValue));
      }
    } catch (e) {
      // read error
    }

    console.log("Done.");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      {user.length > 0 ? (
        <Main user={user} />
      ) : (
        <Registration setUser={setUser} />
      )}
    </ScrollView>
  );
}
