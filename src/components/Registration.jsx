import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { storeUser } from "../utils/storage";

const image = {
  uri: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
};

const Registration = ({ setUser }) => {
  const [text, setText] = useState("");

  const handleChange = async () => {
    if (text.trim().length > 0) {
      storeUser(text);
      setUser(text);
    } else {
      Alert.alert("Please Enter Text");
    }
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      className="mt-36 relative"
    >
      <View className="w-[90vw] rounded-lg mx-auto items-center justify-center p-2 border-2 border-gray-800">
        <ImageBackground
          className="w-[85vw] h-[30vh] shadow-2xl stroke-gray-900 flex justify-center"
          source={image}
          resizeMode="cover"
          blurRadius={8}
        >
          <Text className="text-white text-2xl text-center font-bold tracking-widest">
            Welcome to Burner.
          </Text>
        </ImageBackground>
      </View>
      <View className="border-2 border-gray-800 w-[90vw] mx-auto rounded-lg mt-4 py-2">
        <Text className="text-center text-2xl font-bold py-2">Register</Text>
        <TextInput
          onChangeText={(text) => setText(text)}
          className="border-2 border-gray-800 px-4 py-2 w-[90%] mx-auto rounded-full my-2"
          placeholder="Enter your name"
        />
        <TouchableOpacity
          onPress={handleChange}
          className="bg-gray-800 w-[30%] mx-auto px-4 py-2 rounded-full"
        >
          <Text className="text-white text-center">Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Registration;
