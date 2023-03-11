import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { storeTodos } from "../utils/storage";

const Task = ({ todo, todos, setTodos }) => {
  const [isChecked, setChecked] = useState(todo?.isCompleted);

  const handleDelete = () => {
    const newArray = todos.filter((t) => t?.id !== todo?.id);

    storeTodos(newArray);
    setTodos(newArray);
  };

  const handleChecked = () => {
    const newArray = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          isCompleted: isChecked,
        };
      } else {
        return {
          ...t,
        };
      }
    });

    storeTodos(newArray);
    setTodos(newArray);
  };

  useEffect(() => {
    if (isChecked != todo.isCompleted) {
      handleChecked();
    }
  }, [isChecked]);

  return (
    <View className="border-b border-gray-500 py-2 flex-row items-center">
      <Text
        className={`font-bold ${
          todo?.isCompleted ? "text-red-600" : "text-gray-800"
        }  flex-1 text-sm`}
      >
        {todo?.task}
      </Text>
      <Checkbox
        className=""
        value={isChecked}
        onValueChange={() => {
          setChecked((pre) => !pre);
        }}
        color={isChecked ? "#4630EB" : undefined}
      />
      <TouchableOpacity
        onPress={() => {
          handleDelete();
        }}
      >
        {/* <Text className="font-bold text-red-600 text-sm ml-2">Delete</Text> */}
        <AntDesign
          name="delete"
          size={24}
          color="red"
          style={{ marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
