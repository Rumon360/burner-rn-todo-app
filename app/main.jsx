import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Task from "../src/components/Task";
import { storeData } from "../src/utils/storage";
import AddTodo from "../src/components/AddTodo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bg =
  "https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const Main = ({ user }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("todos");
      setTodos(JSON.parse(jsonValue));
    } catch (e) {
      // read error
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <View className="mt-10 w-[90vw] h-[100vh] mx-auto">
      <View className="flex-1">
        <View className="">
          <ImageBackground
            className="w-full h-[20vh] shadow-2xl stroke-gray-900 flex justify-center"
            source={{ uri: bg }}
            resizeMode="cover"
            blurRadius={8}
          >
            <Text className="text-white text-2xl text-center font-bold tracking-widest">
              hi, {user}
            </Text>
          </ImageBackground>
        </View>
        <View className="flex-row mt-2">
          <Text className="text-lg text-gray-800">Your tasks ---{">"}</Text>
        </View>
        <ScrollView>
          {todos?.map((todo, i) => (
            <Task todo={todo} todos={todos} key={i} setTodos={setTodos} />
          ))}
        </ScrollView>
      </View>
      <AddTodo todos={todos} setTodos={setTodos} />
    </View>
  );
};

export default Main;
