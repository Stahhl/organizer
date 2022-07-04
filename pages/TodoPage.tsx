import { View, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Tab, Text } from "@rneui/themed";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector, addTodo, Todo } from "../state/Store";

// const db = GetDb();

export function TodoPage() {
  console.log("TodoPage");

  const [text, setText] = useState(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos) as Todo[];

  console.log(`todos: ${todos?.length}`);

  return (
    <View>
      {/* <Text h1>Hello</Text> */}
      {/* <TextInput
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => {
          dispatch(addTodo(text));
          setText(null);
        }}
        placeholder="what do you need to do?"
        value={text}
      /> */}
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.id} - {item.value} - {item.done ? "1" : "0"}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
