import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { storeTodos } from "../utils/storage";

const AddTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState("");
  const handlePress = () => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 200), task: text, isCompleted: false },
      ]);

      storeTodos(todos);
      setText("");
    }
  };

  return (
    <View className="absolute bottom-4 w-full flex-row items-center space-x-2">
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="Enter a todo"
        className="flex-1 border-2 border-gray-800 rounded-full px-4 py-2"
      />
      <TouchableOpacity
        onPress={() => {
          handlePress();
        }}
        className="w-10 h-10 bg-gray-800 rounded-full justify-center items-center"
      >
        <Text className="text-white font-bold text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
